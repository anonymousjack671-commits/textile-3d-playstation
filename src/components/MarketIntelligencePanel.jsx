import React, { useState, useEffect } from 'react';
import { MARKET_INTEL, TIER_COLORS } from '../data/marketIntelligence';
import { getOfflineDeepDive } from '../data/offlineDeepDive';
import { TrendingUp, Leaf, DollarSign, MapPin, Award, Loader, Wifi, WifiOff } from 'lucide-react';

// VITE_TEXAI_URL can override for self-hosted deployments; defaults to Vercel serverless functions
const PARDEEP_URL = import.meta.env.VITE_TEXAI_URL || '/api';
const tierOrder = ['budget', 'mid', 'premium'];

// Complete map of ALL garment taxonomy names
const QUERY_MAP = {
  'Coats & Jackets':        'Womenswear Coats and Outerwear Jackets UK retailers fabric',
  'Dresses':                'Womenswear Dresses UK retailers fabric',
  'Tops & T-Shirts':        'Womenswear Tops and T-Shirts UK retailers fabric',
  'Jumpers & Cardigans':    'Womenswear Knitwear Jumpers Cardigans UK retailers fabric',
  'Jeans':                  'Denim Jeans UK retailers fabric composition',
  'Trousers & Leggings':    'Womenswear Trousers and Leggings UK retailers fabric',
  'Activewear':             'Womenswear Activewear Sportswear UK retailers fabric',
  'Swimwear':               'Swimwear Beachwear UK retailers fabric',
  'Formal Shirts':          'Menswear Formal and Casual Woven Shirts UK retailers fabric',
  'Blazers & Suits':        'Menswear Blazers and Suits UK retailers fabric',
  'T-Shirts & Polos':       'Menswear T-Shirts and Polo Shirts UK retailers fabric',
  'Hoodies & Sweatshirts':  'Menswear Hoodies and Sweatshirts UK retailers fabric',
  'Chinos & Trousers':      'Menswear Chinos and Tailored Trousers UK retailers fabric',
  'School Uniform':         'Kids School Uniform UK retailers fabric composition',
  'Playwear & Sets':        'Kidswear Playwear and Casual Sets UK retailers fabric',
  'Dresses & Skirts':       'Kids Dresses and Skirts UK retailers fabric',
  'Sleepsuits & Bodysuits': 'Baby Sleepsuits and Bodysuits UK retailers fabric organic cotton',
  'Rompers & Outfits':      'Baby Rompers and Outfits UK retailers fabric',
  'Muslins & Blankets':     'Baby Muslins and Blankets UK retailers fabric',
  'Pyjamas & Nightwear':    'Pyjamas and Nightwear UK retailers fabric',
  'Intimates & Lingerie':   'Intimates and Lingerie UK retailers fabric',
  'Loungewear':             'Loungewear Homewear UK retailers fabric',
};
const toResearchQuery = (name) => QUERY_MAP[name] || `${name} UK clothing fabric and retailers market analysis`;

// Offline fallback data for ALL categories not in MARKET_INTEL
const OFFLINE_EXTENDED = {
  'School Uniform': {
    summary: 'UK school uniform dominated by supermarkets. OEKO-TEX Standard 100 mandatory for all children\'s garments.',
    brands: [
      { name: 'Asda George', tier: 'budget', fabric: '65% Polyester / 35% Cotton Twill', cert: 'OEKO-TEX 100', gsm: '160-200', icon: '🔴' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '65% Poly / 35% Cotton Twill', cert: 'OEKO-TEX 100 + BCI', gsm: '160-195', icon: '🔴' },
      { name: 'Next', tier: 'mid', fabric: 'Stain-resist 65/35 Poly-Cotton', cert: 'OEKO-TEX 100', gsm: '170-200', icon: '🟡' },
      { name: 'M&S', tier: 'mid', fabric: 'Teflon-coated Poly-Cotton Twill', cert: 'OEKO-TEX 100', gsm: '175-210', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: 'BCI Cotton-rich Twill + Teflon', cert: 'OEKO-TEX 100 + BCI', gsm: '180-220', icon: '🟢' },
    ],
    upgrade: { from: '65/35 Standard Poly-Cotton (uncertified)', to: '65% rPET / 35% Organic Cotton Twill OEKO-TEX 100', why: 'OEKO-TEX 100 mandatory for children. rPET blend cuts cost vs full organic while meeting sustainability targets. Teflon finish adds stain resistance.', costDelta: '+10-18%', premium: '50% Organic Cotton / 50% rPET Twill (Teflon coated)', premiumDelta: '+22-30%', sourcing: 'Tirupur or Coimbatore, Tamil Nadu (OEKO-TEX certified mills)', cert: 'OEKO-TEX Standard 100 (mandatory for kids)' }
  },
  'Playwear & Sets': {
    summary: 'Kids playwear driven by durability and softness. Organic cotton rapidly becoming mid-market standard in UK.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% Cotton Jersey', cert: 'BCI + OEKO-TEX 100', gsm: '150-180', icon: '🔴' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton Interlock', cert: 'OEKO-TEX 100', gsm: '150-185', icon: '🔴' },
      { name: 'H&M Kids', tier: 'mid', fabric: 'Organic Cotton Jersey', cert: 'GOTS + OEKO-TEX', gsm: '155-190', icon: '🟡' },
      { name: 'M&S Kids', tier: 'mid', fabric: 'GOTS Organic Cotton', cert: 'GOTS + OEKO-TEX', gsm: '155-195', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS', gsm: '160-200', icon: '🟢' },
    ],
    upgrade: { from: 'Standard BCI Cotton Jersey 160 GSM', to: '100% GOTS Organic Cotton Jersey 170 GSM', why: 'GOTS is gold standard for kids. Eliminates harmful chemicals, boosts parent trust, qualifies for premium retail buyers.', costDelta: '+20-28%', premium: 'Organic Pima Cotton Jersey (ultra-soft)', premiumDelta: '+35-45%', sourcing: 'Tirupur, Tamil Nadu — India largest GOTS-certified knit cluster', cert: 'GOTS + OEKO-TEX Standard 100' }
  },
  'Sleepsuits & Bodysuits': {
    summary: 'Baby sleepwear: zero tolerance for chemicals. GOTS organic cotton is the non-negotiable standard at mid+ tier.',
    brands: [
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton Interlock, OEKO-TEX', cert: 'OEKO-TEX 100', gsm: '140-170', icon: '🔴' },
      { name: 'Next Baby', tier: 'mid', fabric: '100% Cotton / Cotton-Modal Interlock', cert: 'OEKO-TEX 100', gsm: '150-180', icon: '🟡' },
      { name: 'M&S Baby', tier: 'mid', fabric: '100% GOTS Organic Cotton', cert: 'GOTS + OEKO-TEX', gsm: '150-185', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: 'Organic Pima Cotton or Merino', cert: 'GOTS', gsm: '150-180', icon: '🟢' },
    ],
    upgrade: { from: 'Standard Cotton Interlock (uncertified)', to: '100% GOTS Organic Cotton Interlock', why: 'Baby skin is 5x more permeable than adult. GOTS eliminates all toxic finishes. Mandatory for John Lewis and M&S baby buyer listings.', costDelta: '+22-30%', premium: 'Organic Pima Cotton Interlock (silky soft)', premiumDelta: '+38-50%', sourcing: 'Tirupur & Coimbatore — GOTS certified baby mills', cert: 'GOTS (mandatory) + OEKO-TEX Standard 100' }
  },
  'Rompers & Outfits': {
    summary: 'Baby outfits follow same rules — GOTS organic cotton is the expected standard across UK retailers.',
    brands: [
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton OEKO-TEX 100', cert: 'OEKO-TEX 100', gsm: '140-175', icon: '🔴' },
      { name: 'Next Baby', tier: 'mid', fabric: '100% Cotton / Cotton-Modal', cert: 'OEKO-TEX 100', gsm: '145-180', icon: '🟡' },
      { name: 'M&S Baby', tier: 'mid', fabric: '100% GOTS Organic Cotton', cert: 'GOTS + OEKO-TEX', gsm: '150-185', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS', gsm: '150-185', icon: '🟢' },
    ],
    upgrade: { from: 'Standard Cotton (uncertified)', to: '100% GOTS Organic Cotton', why: 'No harmful dyes or finishes on baby skin. GOTS covers full supply chain from fibre to finished garment.', costDelta: '+22-30%', premium: 'Organic Pima Cotton (ultra-soft and durable)', premiumDelta: '+38-50%', sourcing: 'Tirupur GOTS-certified mills', cert: 'GOTS + OEKO-TEX Standard 100' }
  },
  'Muslins & Blankets': {
    summary: 'Must be 100% organic cotton — safety-critical for babies. GOTS is the gold standard.',
    brands: [
      { name: 'Aden + Anais', tier: 'mid', fabric: '100% Cotton Muslin 4-layer', cert: 'OEKO-TEX 100', gsm: '25-40 per layer', icon: '🟡' },
      { name: 'M&S Baby', tier: 'mid', fabric: '100% Organic Cotton Muslin', cert: 'GOTS + OEKO-TEX', gsm: '25-35 per layer', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: '100% GOTS Organic Cotton Muslin', cert: 'GOTS', gsm: '25-35 per layer', icon: '🟢' },
    ],
    upgrade: { from: 'Standard 100% Cotton Muslin', to: '100% GOTS Organic Cotton Muslin', why: 'Babies breathe through muslins and put them in their mouths. Zero chemical tolerance required. GOTS is mandatory for premium UK baby buyers.', costDelta: '+22-32%', premium: 'Organic Bamboo-Cotton Muslin (naturally antibacterial)', premiumDelta: '+35-50%', sourcing: 'Coimbatore, Tamil Nadu (fine count organic cotton mills)', cert: 'GOTS (mandatory) + OEKO-TEX Standard 100' }
  },
  'Pyjamas & Nightwear': {
    summary: 'Cotton jersey standard at all tiers. Modal and TENCEL Modal are the clear premium upgrade.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: 'Polyester Satin / Cotton Jersey', cert: 'BCI', gsm: '100-150', icon: '🔴' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton Jersey', cert: 'BCI', gsm: '120-160', icon: '🔴' },
      { name: 'Next', tier: 'mid', fabric: 'Modal / Cotton-Modal blend', cert: 'OEKO-TEX', gsm: '130-180', icon: '🟡' },
      { name: 'M&S', tier: 'mid', fabric: 'Pure Cotton / TENCEL Modal', cert: 'FSC + OEKO-TEX', gsm: '120-175', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: 'TENCEL Modal / Silk blend', cert: 'FSC + OEKO-TEX', gsm: '120-170', icon: '🟢' },
    ],
    upgrade: { from: 'Standard Cotton Jersey or Polyester Satin', to: '50% Cotton / 50% TENCEL Modal blend', why: 'Modal is visibly softer than cotton. Major hand-feel upgrade for nightwear. Justifies meaningful price premium.', costDelta: '+15-22%', premium: '100% TENCEL Modal', premiumDelta: '+25-35%', sourcing: 'Tirupur for modal jersey; Surat for satin nightwear', cert: 'FSC (for TENCEL) + OEKO-TEX Standard 100' }
  },
  'Intimates & Lingerie': {
    summary: 'OEKO-TEX mandatory due to skin contact. Modal and microfibre dominant. Lace trim sourced separately.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: 'Polyester Microfibre / Lace', cert: 'OEKO-TEX 100', gsm: '80-140', icon: '🔴' },
      { name: 'M&S', tier: 'mid', fabric: 'Modal / Lace trim + Cotton Gusset', cert: 'OEKO-TEX + FSC', gsm: '100-160', icon: '🟡' },
      { name: 'Calvin Klein UK', tier: 'mid', fabric: 'Cotton-Modal / Microfibre', cert: 'OEKO-TEX 100', gsm: '100-155', icon: '🟡' },
      { name: 'Agent Provocateur', tier: 'premium', fabric: 'Silk / French Lace / Microfibre', cert: 'OEKO-TEX', gsm: '60-130', icon: '🟢' },
    ],
    upgrade: { from: 'Standard Polyester Microfibre (uncertified)', to: 'TENCEL Modal with OEKO-TEX 100 certified lace trim', why: 'Modal is 50% more absorbent than cotton, naturally soft. OEKO-TEX mandatory for lingerie due to intimate skin contact.', costDelta: '+18-28%', premium: 'Organic Pima Cotton or Silk-Modal blend', premiumDelta: '+40-70%', sourcing: 'Surat for lace and satin; Tirupur for modal jersey', cert: 'OEKO-TEX Standard 100 (mandatory for lingerie)' }
  },
  'Loungewear': {
    summary: 'French terry and modal jersey are the standard. Premium moving rapidly to TENCEL Modal.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '60% Cotton / 40% Polyester Fleece', cert: 'BCI', gsm: '250-310', icon: '🔴' },
      { name: 'Next', tier: 'mid', fabric: '80% Cotton / 20% Poly French Terry', cert: 'BCI', gsm: '270-330', icon: '🟡' },
      { name: 'M&S', tier: 'mid', fabric: 'Cotton-Modal French Terry', cert: 'OEKO-TEX', gsm: '270-330', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: 'TENCEL Modal Jersey / Organic Cotton', cert: 'FSC + OEKO-TEX', gsm: '260-320', icon: '🟢' },
    ],
    upgrade: { from: '60/40 Cotton-Poly Fleece', to: '80% Organic Cotton / 20% rPET French Terry 300 GSM', why: 'Dual sustainability story. Softer hand than poly-cotton. Qualifies for GOTS + GRS certification simultaneously.', costDelta: '+18-25%', premium: 'TENCEL Modal French Terry (exceptionally soft)', premiumDelta: '+28-38%', sourcing: 'Tirupur for french terry; Ludhiana for heavyweight lounge', cert: 'GOTS + GRS (for blended rPET)' }
  },
  'Activewear': {
    summary: 'Performance fabrics dominate. rPET blends are rapidly becoming the mid-market standard in UK activewear.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '88% Polyester / 12% Elastane', cert: 'None', gsm: '170-210', icon: '🔴' },
      { name: 'H&M Sport', tier: 'mid', fabric: 'Recycled Polyester-Spandex rPET', cert: 'GRS', gsm: '180-220', icon: '🟡' },
      { name: 'M&S', tier: 'mid', fabric: 'rPET Polyester-Spandex', cert: 'GRS + OEKO-TEX', gsm: '190-230', icon: '🟡' },
      { name: 'Sweaty Betty', tier: 'premium', fabric: 'Nylon-Elastane / Econyl blend', cert: 'bluesign + GRS', gsm: '180-220', icon: '🟢' },
    ],
    upgrade: { from: '100% Virgin Polyester-Elastane', to: '87% Recycled Polyester / 13% Elastane (rPET)', why: 'Near price-parity with virgin poly. GRS certification. Cuts Scope 3 emissions by ~75%. Required for M&S and ASOS sustainability criteria.', costDelta: '+3-8%', premium: 'Nylon-Elastane or ECONYL (recycled nylon)', premiumDelta: '+25-40%', sourcing: 'Tirupur for knit performance; Surat for woven technical', cert: 'GRS (recycled content) + OEKO-TEX Standard 100' }
  },
  'Swimwear': {
    summary: 'Chlorine-resistant Lycra blends dominate. ECONYL (recycled nylon) is the premium sustainable option.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '80% Polyester / 20% Elastane', cert: 'None', gsm: '180-220', icon: '🔴' },
      { name: 'Next', tier: 'mid', fabric: '80% Nylon / 20% Elastane', cert: 'OEKO-TEX', gsm: '190-230', icon: '🟡' },
      { name: 'M&S', tier: 'mid', fabric: 'Recycled Nylon / Elastane blend', cert: 'GRS + OEKO-TEX', gsm: '190-230', icon: '🟡' },
      { name: 'Seafolly / Boden', tier: 'premium', fabric: 'ECONYL Recycled Nylon + Elastane', cert: 'GRS', gsm: '200-240', icon: '🟢' },
    ],
    upgrade: { from: '80% Virgin Polyester / 20% Elastane', to: '80% Recycled Nylon (ECONYL) / 20% Elastane', why: 'ECONYL uses ocean-recovered nylon. Same performance as virgin nylon. Strong consumer sustainability story for swimwear.', costDelta: '+18-28%', premium: 'ECONYL + bio-based Elastane', premiumDelta: '+35-50%', sourcing: 'Tirupur for swimwear knits', cert: 'GRS (recycled nylon) + OEKO-TEX Standard 100' }
  },
  'Jumpers & Cardigans': {
    summary: 'Cotton and wool-blend knitwear at all tiers. Organic cotton and Merino emerging at mid-premium UK.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: 'Acrylic or Cotton-Acrylic blend', cert: 'BCI', gsm: '250-320', icon: '🔴' },
      { name: 'Next', tier: 'mid', fabric: 'Cotton-Rich / Cotton-Viscose blend', cert: 'BCI + OEKO-TEX', gsm: '260-340', icon: '🟡' },
      { name: 'M&S', tier: 'mid', fabric: 'Extra Fine Merino / Cotton-Modal', cert: 'RWS + OEKO-TEX', gsm: '260-340', icon: '🟡' },
      { name: 'John Lewis', tier: 'premium', fabric: 'Merino Wool / Cashmere blend', cert: 'RWS + Woolmark', gsm: '280-360', icon: '🟢' },
    ],
    upgrade: { from: 'Standard Acrylic or Cotton-Acrylic knitwear', to: '100% Organic Cotton or Cotton-Merino 85/15 blend', why: 'Eliminates acrylic microplastics. Organic cotton knitwear commands 20-30% retail premium over acrylic.', costDelta: '+25-35%', premium: 'Extra Fine Merino or Cashmere blend', premiumDelta: '+60-120%', sourcing: 'Ludhiana (wool knitwear hub); Tirupur (cotton knitwear)', cert: 'GOTS (organic cotton) or RWS (wool)' }
  },
  'Trousers & Leggings': {
    summary: 'Leggings dominated by Lycra blends; trousers by poly-viscose or cotton twill.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '95% Polyester / 5% Elastane', cert: 'None', gsm: '180-220', icon: '🔴' },
      { name: 'Next', tier: 'mid', fabric: 'Cotton-Viscose or Poly-Spandex', cert: 'BCI / OEKO-TEX', gsm: '190-240', icon: '🟡' },
      { name: 'M&S', tier: 'mid', fabric: 'Ponte Roma / Cotton-Modal', cert: 'OEKO-TEX + GRS', gsm: '200-260', icon: '🟡' },
      { name: 'Whistles', tier: 'premium', fabric: 'Wool-blend Crepe or TENCEL Twill', cert: 'RWS / FSC', gsm: '200-270', icon: '🟢' },
    ],
    upgrade: { from: 'Virgin Polyester-Elastane leggings', to: 'rPET Polyester-Elastane 200 GSM', why: 'Near price-parity with virgin poly. GRS certified. Cuts carbon significantly.', costDelta: '+5-10%', premium: 'Organic Cotton-Spandex or TENCEL Twill', premiumDelta: '+22-35%', sourcing: 'Tirupur for stretch fabric; Surat for woven trousers', cert: 'GRS (rPET) or GOTS (organic cotton)' }
  },
};

// Get offline fallback — checks OFFLINE_EXTENDED first, then MARKET_INTEL
const getOfflineData = (garmentName) => {
  if (OFFLINE_EXTENDED[garmentName]) return OFFLINE_EXTENDED[garmentName];
  const key = Object.keys(MARKET_INTEL).find(k =>
    garmentName === k || garmentName?.toLowerCase().includes(k.toLowerCase().split(' ')[0])
  );
  return key ? MARKET_INTEL[key] : null;
};


// Client-side cache in sessionStorage — instant on repeat selections
const CACHE_PREFIX = 'texai_research_';
const normalizeTier = (t = '') => {
  const s = t.toLowerCase().replace(/[\s_]/g, '-');
  if (['budget','value','low','entry'].includes(s)) return 'budget';
  if (['premium','high','luxury','upper'].includes(s)) return 'premium';
  return 'mid'; // default mid for anything ambiguous
};
const getCached = (key) => {
  try { const v = sessionStorage.getItem(CACHE_PREFIX + key); return v ? JSON.parse(v) : null; } catch { return null; }
};
const setCached = (key, val) => {
  try { sessionStorage.setItem(CACHE_PREFIX + key, JSON.stringify(val)); } catch {}
};

export const MarketIntelligencePanel = ({ garmentName }) => {
  const [tab, setTab] = useState('brands');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  const [source, setSource] = useState(null);
  const [modelLabel, setModelLabel] = useState('Gemini AI');
  const [error, setError] = useState(null);
  const [deepDive, setDeepDive] = useState(null);   // { brand, loading, data, error }

  useEffect(() => {
    if (!garmentName) return;
    setError(null);
    setTab('brands');

    const query = toResearchQuery(garmentName);
    const cacheKey = query.toLowerCase().trim();

    // Check client-side cache first — instant load
    const cached = getCached(cacheKey);
    if (cached) {
      setData(cached);
      setSource('live');
      setLoading(false);
      return;
    }

    setData(null);
    setLoading(true);
    setSource(null);
    setLoadingMsg('Researching UK market…');

    const slowTimer = setTimeout(() =>
      setLoadingMsg('Querying Gemini 2.5 Flash for live brand data… (3–8s)'), 4000);

    fetch(`${PARDEEP_URL}/research`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: query }),
      signal: AbortSignal.timeout(90000),
    })
      .then(res => res.json())
      .then(res => {
        clearTimeout(slowTimer);
        if (res.data) {
          // Normalize all tier values before storing
          const normalized = {
            ...res.data,
            brands: (res.data.brands || []).map(b => ({ ...b, tier: normalizeTier(b.tier) }))
          };
          setCached(cacheKey, normalized); // Cache for instant future loads
          setData(normalized);
          setSource('live');
          // Store the actual model name returned by the server
          if (res.model_label) setModelLabel(res.model_label);
        } else {
          throw new Error(res.error || 'No data');
        }
      })
      .catch(() => {
        clearTimeout(slowTimer);
        // ── Tier 2: Try the Vercel /api/market-intelligence endpoint ──────────
        fetch(`/api/market-intelligence?garment=${encodeURIComponent(garmentName)}`, {
          signal: AbortSignal.timeout(8000),
        })
          .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
          .then(apiRes => {
            if (apiRes?.data) {
              const normalized = {
                ...apiRes.data,
                brands: (apiRes.data.brands || []).map(b => ({ ...b, tier: normalizeTier(b.tier) })),
              };
              setCached(cacheKey, normalized);
              setData(normalized);
              setSource('api');
            } else {
              throw new Error('No data in API response');
            }
          })
          .catch(() => {
            // ── Tier 3: Static offline data ──────────────────────────────────
            const offline = getOfflineData(garmentName);
            if (offline) {
              setData(offline);
              setSource('offline');
            } else {
              setError('Live research timed out. Using offline data instead.');
            }
          })
          .finally(() => setLoading(false));
      });
  }, [garmentName]);



  // Reset deep dive when category changes
  useEffect(() => { setDeepDive(null); }, [garmentName]);

  const handleDeepDive = (brandName) => {
    // Toggle closed
    if (deepDive?.brand === brandName) { setDeepDive(null); return; }
    const query = toResearchQuery(garmentName);
    setDeepDive({ brand: brandName, loading: true, data: null, error: null });

    // Check cache
    const cacheKey = `deep_${brandName}_${query}`.toLowerCase();
    const cached = getCached(cacheKey);
    if (cached) { setDeepDive({ brand: brandName, loading: false, data: cached, error: null }); return; }

    fetch(`${PARDEEP_URL}/deep-research`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brand: brandName, category: query }),
      signal: AbortSignal.timeout(90000),
    })
      .then(r => r.json())
      .then(r => {
        if (r.data) {
          setCached(cacheKey, r.data);
          setDeepDive({ brand: brandName, loading: false, data: r.data, error: null });
        } else throw new Error(r.error || 'No data');
      })
      .catch(e => {
        const offlineData = getOfflineDeepDive(brandName, garmentName);
        if (offlineData) {
          setDeepDive({ brand: brandName, loading: false, data: offlineData, error: null });
        } else {
          setDeepDive({ brand: brandName, loading: false, data: null, error: e.message || 'Research failed' });
        }
      });
  };

  if (!garmentName) return null;

  return (
    <div style={{
      marginTop: '2.5rem',
      padding: '2rem',
      background: 'rgba(10,10,20,0.7)',
      border: '1px solid rgba(200,169,110,0.2)',
      borderRadius: '20px',
      backdropFilter: 'blur(16px)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <TrendingUp size={20} color="var(--accent-primary)" />
          <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', margin: 0 }}>
            UK Market Intelligence — {garmentName}
          </h3>
        </div>
        {/* Source badge */}
        {source && (
          <span style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: source === 'live' ? '#4db87a' : '#f0c94e',
            padding: '0.3rem 0.7rem',
            borderRadius: '9999px',
            border: `1px solid ${source === 'live' ? 'rgba(77,184,122,0.3)' : 'rgba(240,201,78,0.3)'}`,
            background: source === 'live' ? 'rgba(77,184,122,0.08)' : 'rgba(240,201,78,0.08)',
          }}>
            {source === 'live' ? <Wifi size={11} /> : <WifiOff size={11} />}
            {source === 'live' ? `Live · ${modelLabel}` : 'Offline Fallback'}
          </span>
        )}
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '2rem 0', color: 'var(--text-muted)' }}>
          <Loader size={18} style={{ animation: 'spin 1s linear infinite' }} />
          <div>
            <span style={{ fontSize: '0.9rem' }}>{loadingMsg}</span>
            <p style={{ margin: '0.3rem 0 0', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
              Powered by {modelLabel} · Real-time UK market analysis
            </p>
          </div>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div style={{ padding: '1.5rem', borderRadius: '12px', background: 'rgba(224,107,90,0.08)', border: '1px solid rgba(224,107,90,0.2)', marginTop: '1rem' }}>
          <p style={{ margin: 0, color: '#e06b5a', fontSize: '0.9rem' }}>⚠️ {error}</p>
          <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            Add GEMINI_API_KEY to your Vercel environment variables to enable live AI-powered market research.
          </p>
        </div>
      )}

      {/* Data loaded */}
      {!loading && data && (
        <>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {data.summary}
          </p>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {[['brands', '🏪 Brand Comparison'], ['upgrade', '⬆️ Your Upgrade Path']].map(([id, label]) => (
              <button key={id} onClick={() => setTab(id)} style={{
                padding: '0.5rem 1.25rem', borderRadius: '9999px',
                border: `1px solid ${tab === id ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                background: tab === id ? 'rgba(200,169,110,0.15)' : 'transparent',
                color: tab === id ? 'var(--accent-primary)' : 'var(--text-muted)',
                cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600, transition: 'all 0.2s',
              }}>{label}</button>
            ))}
          </div>

          {/* Brand Comparison */}
          {tab === 'brands' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[...(data.brands || [])].sort((a, b) => tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier)).map((brand, i) => {
                const t = TIER_COLORS[brand.tier] || TIER_COLORS.mid;
                // Support both new fabrics[] array and legacy fabric string
                const fabricList = brand.fabrics?.length
                  ? brand.fabrics
                  : brand.fabric ? [{ name: brand.fabric, gsm: brand.gsm, usage: '' }] : [];
                const isOpen = deepDive?.brand === brand.name;
                return (
                  <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', border: `1px solid ${t.border}`, background: t.bg }}>
                    {/* Brand header row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '0.75rem', padding: '0.9rem 1rem' }}>
                      <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          {brand.icon} {brand.name}
                        </p>
                        <span style={{ fontSize: '0.72rem', color: t.text, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.label}</span>
                        {brand.cert && <p style={{ margin: '0.3rem 0 0', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{brand.cert}</p>}
                      </div>
                      {/* All fabrics list */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', flex: '1 1 200px', minWidth: 0 }}>
                        {fabricList.map((f, fi) => (
                          <div key={fi} style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.82rem', color: 'var(--text-main)', fontWeight: 500 }}>{f.name}</span>
                            {f.gsm && <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{f.gsm} GSM</span>}
                            {f.usage && <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>· {f.usage}</span>}
                          </div>
                        ))}
                        {brand.coo && <p style={{ margin: '0.4rem 0 0', fontSize: '0.72rem', color: 'var(--text-muted)' }}>🌍 COO: {brand.coo}</p>}
                      </div>
                      {/* Deep dive button + tier dot */}
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', flexShrink: 0, marginLeft: 'auto' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: t.text, boxShadow: `0 0 8px ${t.text}` }} />
                        <button onClick={() => handleDeepDive(brand.name)} style={{ fontSize: '0.72rem', padding: '0.3rem 0.65rem', borderRadius: '8px', border: `1px solid ${t.border}`, background: 'transparent', color: t.text, cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          {isOpen ? '▲ Close' : '🔍 Deep Dive'}
                        </button>
                      </div>
                    </div>
                    {/* Deep dive drawer */}
                    {isOpen && (
                      <div style={{ borderTop: `1px solid ${t.border}`, padding: '1rem', background: 'rgba(0,0,0,0.25)' }}>
                        {deepDive.loading && (
                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            <Loader size={14} style={{ animation: 'spin 1s linear infinite' }} />
                            Researching {brand.name} sourcing intelligence via Gemini…
                          </div>
                        )}
                        {deepDive.error && <p style={{ color: '#e06b5a', fontSize: '0.85rem', margin: 0 }}>⚠️ {deepDive.error}</p>}
                        {deepDive.data && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{deepDive.data.overview}</p>
                            {/* All fabrics detail */}
                            <div>
                              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>All Fabrics Used</p>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {(deepDive.data.fabrics || []).map((f, fi) => (
                                  <div key={fi} style={{ padding: '0.65rem 0.85rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>{f.name} <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>— {f.composition}</span></p>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
                                      {f.gsm && <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>⚖️ {f.gsm} GSM</span>}
                                      {f.weave && <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>🧶 {f.weave}</span>}
                                      {f.cert && <span style={{ fontSize: '0.72rem', color: '#4db87a' }}>✅ {f.cert}</span>}
                                      {f.sourcingCountry && <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>🌍 {f.sourcingCountry}</span>}
                                      {f.sourcingRegion && <span style={{ fontSize: '0.72rem', color: 'var(--accent-secondary)' }}>📍 {f.sourcingRegion}</span>}
                                    </div>
                                    {f.usage && <p style={{ margin: '0.3rem 0 0', fontSize: '0.72rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Used in: {f.usage}</p>}
                                    {f.millInfo && f.millInfo !== 'Not publicly available' && <p style={{ margin: '0.3rem 0 0', fontSize: '0.72rem', color: 'var(--accent-primary)' }}>🏭 {f.millInfo}</p>}
                                  </div>
                                ))}
                              </div>
                            </div>
                            {/* Sourcing intelligence grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                              {deepDive.data.coo && (
                                <div style={{ padding: '0.7rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                  <p style={{ margin: '0 0 0.25rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase' }}>Country of Origin</p>
                                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)' }}>{deepDive.data.coo}</p>
                                </div>
                              )}
                              {deepDive.data.knownVendors?.length > 0 && (
                                <div style={{ padding: '0.7rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                  <p style={{ margin: '0 0 0.25rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase' }}>Known Vendors / COO</p>
                                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)' }}>{deepDive.data.knownVendors.join(', ')}</p>
                                </div>
                              )}
                            </div>
                            {deepDive.data.sustainabilityStance && (
                              <div style={{ padding: '0.7rem 0.85rem', borderRadius: '10px', background: 'rgba(77,184,122,0.05)', border: '1px solid rgba(77,184,122,0.15)' }}>
                                <p style={{ margin: '0 0 0.25rem', fontSize: '0.72rem', fontWeight: 700, color: '#4db87a', textTransform: 'uppercase' }}>🌿 Sustainability Stance</p>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.6 }}>{deepDive.data.sustainabilityStance}</p>
                              </div>
                            )}
                            {deepDive.data.sourcingInsight && (
                              <div style={{ padding: '0.7rem 0.85rem', borderRadius: '10px', background: 'rgba(200,169,110,0.05)', border: '1px solid rgba(200,169,110,0.15)' }}>
                                <p style={{ margin: '0 0 0.25rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase' }}>💡 Sourcing Intelligence</p>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.6 }}>{deepDive.data.sourcingInsight}</p>
                              </div>
                            )}
                            {deepDive.data.upgradeFor && (
                              <div style={{ padding: '0.7rem 0.85rem', borderRadius: '10px', background: 'rgba(77,107,224,0.05)', border: '1px solid rgba(77,107,224,0.15)' }}>
                                <p style={{ margin: '0 0 0.25rem', fontSize: '0.72rem', fontWeight: 700, color: '#7c6dab', textTransform: 'uppercase' }}>⬆️ How to Beat Them</p>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.6 }}>{deepDive.data.upgradeFor}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              {/* Legend */}
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                {Object.entries(TIER_COLORS).map(([tier, c]) => (
                  <span key={tier} style={{ fontSize: '0.78rem', color: c.text, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.text, display: 'inline-block' }} />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Upgrade Path */}
          {tab === 'upgrade' && data.upgrade && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(224,107,90,0.08)', border: '1px solid rgba(224,107,90,0.2)' }}>
                  <p style={{ margin: '0 0 0.25rem', fontSize: '0.72rem', color: '#e06b5a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Standard</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)' }}>{data.upgrade.from}</p>
                </div>
                <div style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', textAlign: 'center' }}>→</div>
                <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(77,184,122,0.08)', border: '1px solid rgba(77,184,122,0.2)' }}>
                  <p style={{ margin: '0 0 0.25rem', fontSize: '0.72rem', color: '#4db87a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>✅ Recommended</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)' }}>{data.upgrade.to}</p>
                </div>
              </div>

              <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(200,169,110,0.06)', border: '1px solid rgba(200,169,110,0.15)' }}>
                <p style={{ margin: '0 0 0.25rem', fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 700 }}>WHY THIS UPGRADE</p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>{data.upgrade.why}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <DollarSign size={14} color="var(--accent-primary)" />
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase' }}>Cost Delta</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)' }}>{data.upgrade.costDelta}</p>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>vs current standard</p>
                </div>
                <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <Award size={14} color="#4db87a" />
                    <span style={{ fontSize: '0.75rem', color: '#4db87a', fontWeight: 700, textTransform: 'uppercase' }}>Premium Option</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>{data.upgrade.premium}</p>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>{data.upgrade.premiumDelta}</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <MapPin size={14} color="var(--accent-secondary)" />
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>India Sourcing</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{data.upgrade.sourcing}</p>
                </div>
                <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(77,184,122,0.05)', border: '1px solid rgba(77,184,122,0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
                    <Leaf size={14} color="#4db87a" />
                    <span style={{ fontSize: '0.75rem', color: '#4db87a', fontWeight: 700, textTransform: 'uppercase' }}>Certifications</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{data.upgrade.cert}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Data Source Disclaimer ── */}
      {data && !loading && (
        <div style={{
          marginTop: '2rem',
          padding: '1rem 1.25rem',
          borderRadius: '10px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderLeft: '3px solid rgba(200,169,110,0.35)',
        }}>
          <p style={{ margin: '0 0 0.35rem', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            ℹ️ Data Source &amp; Methodology
          </p>
          <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
            Market intelligence is {source === 'live' ? `AI-generated by ${modelLabel}` : 'drawn from curated industry data'}, based on publicly available brand sustainability reports, retailer fibre disclosures, certification body databases (BCI, GOTS, OEKO-TEX, GRS), and trade press including Drapers and Textile Exchange.{' '}
            <strong style={{ color: 'rgba(255,255,255,0.5)' }}>This is indicative intelligence, not verified live data.</strong>{' '}
            Always confirm fabric composition, certifications, and pricing directly with the retailer or supplier before sourcing decisions.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
            {[
              { icon: '📰', label: 'Drapers & Just-Style' },
              { icon: '🌿', label: 'Textile Exchange Reports' },
              { icon: '✅', label: 'BCI · GOTS · OEKO-TEX · GRS' },
              { icon: '🏪', label: 'Brand ESG & Sustainability Reports' },
            ].map(({ icon, label }) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
                {icon} {label}
              </span>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
