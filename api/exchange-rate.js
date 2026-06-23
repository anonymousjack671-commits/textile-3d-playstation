// ============================================================
// Vercel Serverless Function — Live INR/USD Exchange Rate
// Route: GET /api/exchange-rate
// Returns: { rate: number, source: string, timestamp: string }
//
// Fetches from Open Exchange Rates (free tier, no key needed for
// the basic public endpoint) or falls back to a hardcoded value.
// Vercel caches the response for 1 hour via Cache-Control.
// ============================================================

export default async function handler(req, res) {
  // Allow CORS from the same origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  // Cache for 1 hour — exchange rate doesn't change minute-to-minute
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

  const FALLBACK_RATE = 85; // Approximate INR/USD as of mid-2026

  try {
    // Use exchangerate-api.com free endpoint (no API key for latest USD rates)
    const response = await fetch(
      'https://open.er-api.com/v6/latest/USD',
      { signal: AbortSignal.timeout(4000) }
    );

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const inrRate = data?.rates?.INR;
    if (!inrRate || typeof inrRate !== 'number') throw new Error('INR rate missing');

    return res.status(200).json({
      rate: Math.round(inrRate * 100) / 100,
      source: 'open.er-api.com',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    // Graceful fallback — never hard-fail the API
    return res.status(200).json({
      rate: FALLBACK_RATE,
      source: 'fallback',
      timestamp: new Date().toISOString(),
      note: `Live fetch failed (${err.message}); using approximate rate.`,
    });
  }
}
