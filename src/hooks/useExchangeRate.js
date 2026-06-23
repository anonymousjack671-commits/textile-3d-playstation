// ============================================================
// useExchangeRate — fetches live INR/USD rate from /api/exchange-rate
// Falls back to FALLBACK_RATE if the request fails or is slow.
// Rate is cached in module scope for the browser session so
// multiple consumers share one request.
// ============================================================
import { useState, useEffect } from 'react';

const FALLBACK_RATE = 85;
const CACHE_KEY = 'textile3d_fx_rate';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

let _promise = null; // Shared in-flight promise

async function fetchRate() {
  // Check sessionStorage first
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { rate, fetchedAt } = JSON.parse(cached);
      if (Date.now() - fetchedAt < CACHE_TTL_MS) return rate;
    }
  } catch (_) { /* ignore */ }

  // Fetch from Vercel serverless function
  const resp = await fetch('/api/exchange-rate', { signal: AbortSignal.timeout(5000) });
  if (!resp.ok) throw new Error('non-200');
  const { rate } = await resp.json();

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ rate, fetchedAt: Date.now() }));
  } catch (_) { /* ignore */ }

  return rate;
}

export function useExchangeRate() {
  const [rate, setRate] = useState(FALLBACK_RATE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!_promise) _promise = fetchRate().catch(() => FALLBACK_RATE);
    _promise.then(r => {
      setRate(r);
      setLoading(false);
    }).catch(() => {
      setRate(FALLBACK_RATE);
      setLoading(false);
    });
  }, []);

  // Helper: convert ₹ price string to USD using live rate
  const convertINRString = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/₹([\d,]+(?:[-–][\d,]+)?)(\/\w+)?/g, (_, price, unit) => {
      const parts = price.split(/[-–]/);
      const toUSD = (p) => '$' + (parseInt(p.replace(/,/g, '')) / rate).toFixed(1);
      return parts.map(toUSD).join('–') + (unit || '');
    });
  };

  return { rate, loading, convertINRString };
}
