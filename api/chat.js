// ============================================================
// Vercel Serverless Function — TEXAI Chat (Fabric AI)
// Route: POST /api/chat
// Body: { message: string }
// Returns: { response: string, engine: string }
//
// Powered by Gemini 2.0 Flash — fast, free tier (1500 req/day).
// Set GEMINI_API_KEY in Vercel project environment variables.
// Get free key: https://aistudio.google.com/app/apikey
// ============================================================

const SYSTEM_PROMPT = `You are TEXAI, an expert AI assistant for the Textile3D platform — a B2B fabric intelligence tool used by Indian garment manufacturers and exporters who sell to UK and EU retailers.

Your expertise covers:
- Fabric structures: woven (plain, twill, satin, pile), knitted (weft/warp), nonwoven
- GSM weight ranges for every garment category
- Fiber properties: cotton, polyester, wool, silk, linen, viscose, modal, lyocell, nylon, elastane
- Sustainable fibers and certifications: GOTS, OCS, GRS, BCI, RWS, FSC®, OEKO-TEX®, TENCEL™, ECOVERO™, ECONYL®
- Yarn types: carded, combed, ring-spun, open-end, filament
- Textile testing standards: AATCC, ISO 105, BS EN, ASTM
- India fabric sourcing: Tirupur (knitwear), Surat (synthetics/georgette), Ahmedabad (denim/shirting), Erode (bottomweight), Bhilwara (suiting/wool), Ludhiana (woollens), Panipat (recycled textiles), Varanasi (silk/brocade)
- UK retail supplier requirements: Primark, Next, M&S, ASOS, H&M, John Lewis, Sainsbury's TU

Response style:
- Be concise and technically precise
- Use markdown formatting (bold for key terms, bullet lists for comparisons)
- Always provide practical, actionable advice for a B2B fabric supplier
- If asked about GSM, always give a min-max range for the specific garment
- When discussing certifications, always mention which UK retailers require them
- Cite real data where possible (actual GSM values, blend percentages, real brand specs)

Keep responses focused: 3-5 sentences for simple questions, structured lists for comparisons.`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'message is required' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(200).json({
      response: '⚠️ Gemini API key not configured. Please add GEMINI_API_KEY to your Vercel environment variables. Get a free key at https://aistudio.google.com/app/apikey',
      engine: 'error',
    });
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(10000),
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: 'user', parts: [{ text: message }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 800,
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      // 429 = quota exceeded — return a clean flag so the client can fall back to offline KB
      if (geminiRes.status === 429) {
        console.warn('[texai-chat] Gemini quota exceeded (429)');
        return res.status(200).json({
          response: 'quota_exceeded',
          engine: 'quota_exceeded',
        });
      }
      throw new Error(`Gemini API error: ${geminiRes.status} — ${err.slice(0, 200)}`);
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Empty response from Gemini');

    return res.status(200).json({ response: text, engine: 'gemini-2.0-flash' });
  } catch (err) {
    console.error('[texai-chat] Gemini error:', err.message);
    // Return quota_exceeded for any unhandled error so client falls back gracefully
    const isQuota = err.message?.includes('429') || err.message?.includes('quota');
    return res.status(200).json({
      response: isQuota ? 'quota_exceeded' : `⚠️ AI temporarily unavailable. Please try again in a moment.`,
      engine: isQuota ? 'quota_exceeded' : 'error',
    });
  }
}
