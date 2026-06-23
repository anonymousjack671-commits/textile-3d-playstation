// ============================================================
// Vercel Serverless Function — Health Check
// Route: GET /api/health
//
// Always returns 200. Replaces the localhost:8369/health check
// so KaalChat's serverStatus is always 'online'.
// ============================================================

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    status: 'ok',
    engine: 'vercel-gemini',
    timestamp: new Date().toISOString(),
  });
}
