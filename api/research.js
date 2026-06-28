// ============================================================
// Vercel Serverless Function — TEXAI Market Research
// Route: POST /api/research
// Body: { category: string }
// Returns: { data: { summary, brands[], upgrade{} }, model_label }
//
// Powered by Gemini 2.5 Flash — smartest free model (2026).
// Free tier: 10 req/min, no daily cap on paid; generous free usage.
// Set GEMINI_API_KEY in Vercel project environment variables.
// Get free key: https://aistudio.google.com/app/apikey
// ============================================================

const SYSTEM_PROMPT = `You are a UK fashion retail fabric research expert with deep, verified knowledge of major UK clothing retailers and their fabric sourcing practices (2025-2026).

CRITICAL — ALLOWED BRANDS ONLY. You must ONLY ever include brands from this exact list. Do not invent, add, or substitute any other brand names:
BUDGET TIER: "Primark", "Sainsbury's TU", "Asda George"
MID TIER: "H&M", "Next", "ASOS"
PREMIUM TIER: "M&S", "John Lewis"
LUXURY TIER: "Charles Tyrwhitt", "Reiss", "Ted Baker"

Verified fabric facts per brand (use these as ground truth — do not fabricate):
- Primark: Primark Cotton Project cotton (57% certified 2025, target 100% by 2027), virgin polyester transitioning to rPET. Dresses: Cotton Jersey, Viscose, Polyester Georgette. Tees: 100% Carded Cotton 150-170 GSM. Denim: 99% Cotton/1% Elastane BCI.
- Sainsbury's TU: BCI Cotton across all cotton garments. Dresses: Viscose or Cotton-Viscose blend. Denim: BCI Cotton + REPREVE® rPET blend.
- Asda George: OEKO-TEX 100 certified for kidswear. Cotton and poly-cotton blends.
- H&M: LENZING™ ECOVERO™ Viscose Challis (dresses/blouses), OCS organic cotton (basics), rPET (activewear/outerwear). 89% materials recycled/sustainably sourced 2024. Circ® recycled denim Spring 2026.
- Next: BCI Cotton (90%+ target), combed ring-spun yarns (shirts), RWS wool (tailoring 50% by 2025), linen blends (summer). Non-iron finish standard on shirts.
- ASOS: LENZING™ ECOVERO™ Viscose, GRS-certified rPET, BCI Cotton, TENCEL™ Modal for occasion. CMA greenwash review 2024.
- M&S: TENCEL™ Lyocell (dresses/blouses), OCS/GOTS organic cotton mandatory transition, OEKO-TEX® Standard 100 mandatory on ALL lines, 100% recycled polyester target by 2026, RWS wool.
- John Lewis: GOTS certified organic cotton, TENCEL™ Lyocell blends, RWS/ZQ wool for tailoring, Italian sourcing for luxury lines.
- Charles Tyrwhitt: 100% cotton shirts (2-ply Twill/Oxford), Planet Mark certification (5th consecutive year 2025).
- Reiss: Italian-sourced fabrics, wool blends, OEKO-TEX® certified basics.
- Ted Baker: Premium construction, wool blends, FSC® viscose, OEKO-TEX® certified.

Certification knowledge:
- BCI (Better Cotton Initiative): mid-market minimum
- OCS (Organic Content Standard): verified organic content
- GOTS (Global Organic Textile Standard): full chain organic
- GRS (Global Recycled Standard): recycled content verification
- RWS (Responsible Wool Standard): wool animal welfare
- FSC® (Forest Stewardship Council): for viscose/lyocell
- OEKO-TEX® Standard 100: chemical safety (M&S mandatory for all lines)
- TENCEL™/ECOVERO™: Lenzing licensed fibres (FSC® backed)
- REPREVE®: Unifi recycled polyester (GRS certified)

UK regulatory context (2025-2026):
- CMA DMCC Act enforcement active from April 2025; greenwash fines up to 10% global turnover
- CMA Supply Chain Guidance issued early 2026
- UK Textile Strategy pushing towards circular economy requirements`;

const USER_PROMPT = (category) => `Research the current (2025-2026) fabric compositions used by major UK fashion retailers for: "${category}"

Return ONLY a JSON object with exactly this structure — no markdown, no explanation, raw JSON only:

{
  "summary": "2-3 sentence overview of dominant fabric trends, certifications, and sustainability direction in this garment category",
  "brands": [
    {
      "name": "EXACT brand name from allowed list only",
      "tier": "budget",
      "fabrics": [
        "Primary fabric with blend ratio e.g. '100% BCI Cotton Jersey 160 GSM (basic styles)'",
        "Secondary fabric e.g. 'Standard Viscose Challis 100 GSM (printed styles)'",
        "Optional third fabric for specific sub-category"
      ],
      "cert": "Certifications e.g. 'BCI' or 'GOTS / OEKO-TEX®'",
      "gsm": "GSM range covering all fabrics e.g. '90–160'",
      "icon": "🟠"
    }
  ],
  "upgrade": {
    "from": "Current standard commodity fabric used at budget tier",
    "to": "Recommended affordable upgrade fabric with certification",
    "why": "2 sentences on why this upgrade wins supplier approvals from UK retailers",
    "costDelta": "+X–Y% cost increase",
    "premium": "Premium tier fabric option for M&S/John Lewis level",
    "premiumDelta": "+X–Y% cost increase",
    "sourcing": "India sourcing cluster e.g. 'Tirupur, Tamil Nadu'",
    "cert": "Certifications required to supply UK mid-market"
  }
}

STRICT RULES:
- ONLY use brand names from the allowed list in the system prompt. No other brands.
- Each brand must have 2–3 fabrics in the fabrics array covering different styles/sub-categories
- icon: 🟠=budget, 🟡=mid, 🟢=premium
- tier must be exactly: "budget", "mid", or "premium"
- Fabric descriptions must include blend ratios and construction type
- GSM must be realistic ranges for actual garments
- sourcing must reference real India textile cluster cities
- Return ONLY the JSON object, no markdown`;

function extractJSON(text) {
  const stripped = text.replace(/^```(?:json)?\s*/im, '').replace(/\s*```\s*$/m, '').trim();
  const start = stripped.indexOf('{');
  const end = stripped.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found in response');
  return stripped.slice(start, end + 1);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { category } = req.body || {};
  if (!category) return res.status(400).json({ error: 'category is required' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'GEMINI_API_KEY not configured. Add it in Vercel project settings → Environment Variables. Get free key at https://aistudio.google.com/app/apikey' });
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(25000),
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: 'user', parts: [{ text: USER_PROMPT(category) }] }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 2000,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      // 429 = quota exceeded — return clean flag so client falls back to offline data gracefully
      if (geminiRes.status === 429) {
        console.warn('[texai-research] Gemini quota exceeded (429)');
        return res.status(429).json({ error: 'quota_exceeded' });
      }
      throw new Error(`Gemini ${geminiRes.status}: ${errText.slice(0, 300)}`);
    }

    const geminiData = await geminiRes.json();
    const candidate = geminiData?.candidates?.[0];
    const finishReason = candidate?.finishReason;
    const rawText = candidate?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error(`Empty response from Gemini (finishReason: ${finishReason}, promptFeedback: ${JSON.stringify(geminiData?.promptFeedback).slice(0,100)})`);

    let parsed;
    try {
      const jsonStr = extractJSON(rawText);
      parsed = JSON.parse(jsonStr);
    } catch (parseErr) {
      throw new Error(`JSON parse failed [${parseErr.message}]. Raw start: ${rawText.slice(0, 200)}`);
    }

    if (!parsed.summary || !Array.isArray(parsed.brands) || !parsed.upgrade) {
      throw new Error('Response missing required fields');
    }

    return res.status(200).json({ data: parsed, model_label: 'Gemini 2.5 Flash' });
  } catch (err) {
    console.error('[texai-research] Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
