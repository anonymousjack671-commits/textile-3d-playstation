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

const SYSTEM_PROMPT = `You are a UK fashion retail fabric research expert with deep, current knowledge of major UK clothing retailers and their fabric sourcing practices (2025-2026).

You have detailed knowledge of:
- Primark (budget), Sainsbury's TU (budget), Asda George (budget)
- H&M (mid), Next (mid), ASOS (mid)
- M&S / Marks & Spencer (premium), John Lewis (premium)
- Reiss, Ted Baker, Charles Tyrwhitt (premium/luxury)

For each brand you know their typical fabric compositions, GSM weights, and certifications:
- Primark: Primark Cotton Project (renamed Oct 2024 from PSCP; 57% of cotton units certified as of 2025, target 100% by 2027), virgin polyester transitioning to rPET
- Next: BCI cotton, combed yarns, linen blends, RWS wool in tailoring (50% by 2025, 75% by 2028, 100% by 2030 target)
- ASOS: LENZING™ ECOVERO™ viscose, GRS-certified rPET, BCI cotton
- H&M: LENZING™ ECOVERO™, OCS organic cotton, rPET, 89% of materials recycled or sustainably sourced in 2024; Circ® recycled denim launching Spring 2026
- M&S: OCS/GOTS organic cotton mandatory transition, TENCEL™ Lyocell, RWS wool, OEKO-TEX® mandatory on all lines, 100% recycled polyester target by 2026
- John Lewis: Premium natural fibres, GOTS/RWS certified, Italian sourcing for tailoring
- Charles Tyrwhitt: 100% cotton shirts (2-ply), Planet Mark certification (5th consecutive year 2025)

Certification knowledge:
- BCI (Better Cotton Initiative): mid-market minimum
- OCS (Organic Content Standard): verified organic content
- GOTS (Global Organic Textile Standard): full chain organic
- GRS (Global Recycled Standard): recycled content verification
- RWS (Responsible Wool Standard): wool animal welfare
- FSC® (Forest Stewardship Council): for viscose/lyocell
- OEKO-TEX® Standard 100: chemical safety (M&S mandatory for all lines)
- TENCEL™/ECOVERO™: Lenzing licensed fibres (FSC® backed)

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
      "name": "Brand Name",
      "tier": "budget",
      "fabric": "Specific fabric composition e.g. '98% BCI Cotton / 2% Elastane Ring-Spun Denim'",
      "cert": "Certifications e.g. 'BCI' or 'GOTS / OEKO-TEX®'",
      "gsm": "GSM range e.g. '160–200'",
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

Rules:
- Include 4–7 brands from budget to premium
- icon: 🟠=budget, 🟡=mid, 🟢=premium
- tier must be exactly: "budget", "mid", or "premium"
- Fabric descriptions must include blend ratios and weave/knit construction
- GSM must be realistic ranges for actual garments
- sourcing must reference real India textile cluster cities
- Return ONLY the JSON object`;

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
      throw new Error(`Gemini ${geminiRes.status}: ${errText.slice(0, 300)}`);
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Empty response from Gemini');

    const jsonStr = extractJSON(rawText);
    const parsed = JSON.parse(jsonStr);

    if (!parsed.summary || !Array.isArray(parsed.brands) || !parsed.upgrade) {
      throw new Error('Response missing required fields');
    }

    return res.status(200).json({ data: parsed, model_label: 'Gemini 2.5 Flash' });
  } catch (err) {
    console.error('[texai-research] Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
