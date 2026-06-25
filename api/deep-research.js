// ============================================================
// Vercel Serverless Function — TEXAI Deep Research (Brand Deep Dive)
// Route: POST /api/deep-research
// Body: { brand: string, category: string }
// Returns: { data: { overviewStance, sustainability, sourcingInsight, upgradeAdvice, vendors[], coo } }
//
// Powered by Gemini 2.5 Flash — smartest free model (2026).
// Set GEMINI_API_KEY in Vercel project environment variables.
// Get free key: https://aistudio.google.com/app/apikey
// ============================================================

const SYSTEM_PROMPT = `You are a UK fashion retail supply chain intelligence expert specializing in brand sourcing strategies, fabric certifications, and competitive positioning (2025-2026).

You provide detailed, accurate intelligence on how major UK retailers source fabrics for their garment lines. Your knowledge includes:

Brand sourcing intelligence (current 2025-2026):
- Primark: Primark Cotton Project (renamed Oct 2024; 57% certified units by 2025, target 100% by 2027), Bangladesh/India/China dominant, pushing rPET by 2027
- H&M: GOTS organic cotton (top global buyer), ECOVERO™ viscose, rPET, Bangladesh/China/Turkey, Circ® recycled denim launching Spring 2026; 89% materials recycled or sustainably sourced in 2024
- ASOS: ECOVERO™ viscose, GRS rPET, flexible short-lead sourcing Turkey/China/UK, lightweight fabric bias
- Next: BCI cotton, combed yarns, RWS wool (50% by 2025, 75% by 2028, 100% by 2030), linen blends, Turkey/India/Bangladesh
- Sainsbury's TU: BCI cotton, REPREVE® rPET, OEKO-TEX mandatory for all children's lines, Coimbatore/Tirupur sourcing
- M&S: GOTS/OCS organic cotton mandatory transition, TENCEL™ Lyocell, RWS wool, Plan A sustainability, OEKO-TEX® 100 on all lines, 100% recycled polyester by 2026
- John Lewis: Premium natural fibres (Italian wool, Egyptian cotton), GOTS/RWS certified, strict QA, premium sourcing
- Charles Tyrwhitt: 100% cotton shirts (2-ply), Planet Mark certification (5th year 2025), premium Egyptian cotton poplin
- Asda George: 65/35 poly-cotton, OEKO-TEX 100 mandatory for kids, REPREVE® rPET increasing

India sourcing clusters:
- Tirupur/Coimbatore (Tamil Nadu): World's largest knitwear cluster; GOTS/OCS certified mills available
- Surat (Gujarat): Synthetic fabrics, georgette, printed polyester/viscose
- Ahmedabad (Gujarat): Denim (Asia's largest), shirting, printed cotton, GOTS mills
- Erode (Tamil Nadu): Bottomweight cotton, stretch fabrics, twill/drill
- Bhilwara (Rajasthan): Largest suiting cluster; wool-poly blends, gabardine
- Ludhiana (Punjab): Woollens, knitwear (acrylic/wool blends)
- Panipat (Haryana): Recycled textiles, shoddy wool, upcycled fabrics
- Varanasi (UP): Silk, brocade, handloom

Regulatory context:
- CMA DMCC Act: greenwash fines up to 10% global turnover, active April 2025
- CMA Supply Chain Guidance issued early 2026
- OEKO-TEX® Standard 100: mandatory for M&S; increasingly required across UK retail`;

const USER_PROMPT = (brand, category) => `Generate a detailed supply chain intelligence report for: ${brand} in the ${category} category.

Return ONLY a JSON object with exactly this structure — no markdown, no explanation, raw JSON only:

{
  "overviewStance": "3-4 sentences on ${brand}'s overall fabric sourcing philosophy, price positioning, and what drives their fabric decisions for ${category}.",
  "sustainability": "3-4 sentences on ${brand}'s actual current sustainability certifications, commitments, and measurable progress in ${category} fabrics. Be specific.",
  "sourcingInsight": "3-4 sentences on where ${brand} actually sources fabrics for ${category} — countries, specific clusters or factories if known, lead-time and volume strategy.",
  "upgradeAdvice": "4-5 sentences of strategic advice for an Indian B2B fabric supplier wanting to win business from ${brand} for ${category}. Be very specific: exact certifications, exact fabric specs, exact India clusters, and why ${brand} would prefer this supplier.",
  "vendors": ["Known supplier or factory group name", "Another known vendor"],
  "coo": "Primary countries of origin e.g. 'Bangladesh, India, Turkey'"
}

Rules:
- Be specific and accurate — use real brand data
- vendors: 2-4 real or highly likely supplier names
- upgradeAdvice must be immediately actionable for a fabric mill in India
- Return ONLY the JSON object`;

function extractJSON(text) {
  const stripped = text.replace(/^```(?:json)?\s*/im, '').replace(/\s*```\s*$/m, '').trim();
  const start = stripped.indexOf('{');
  const end = stripped.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON found in response');
  return stripped.slice(start, end + 1);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { brand, category } = req.body || {};
  if (!brand || !category) return res.status(400).json({ error: 'brand and category are required' });

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
          contents: [{ role: 'user', parts: [{ text: USER_PROMPT(brand, category) }] }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 1500,
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

    if (!parsed.overviewStance || !parsed.upgradeAdvice) {
      throw new Error('Response missing required fields');
    }

    return res.status(200).json({ data: parsed, model_label: 'Gemini 2.5 Flash' });
  } catch (err) {
    console.error('[texai-deep-research] Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
