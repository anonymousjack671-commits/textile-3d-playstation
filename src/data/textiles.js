import { FABRIC_DATA } from './fabric-data-v3.1';
import {
  PLAIN_WEAVE_3D,
  TWILL_WEAVE_3D,
  SATIN_WEAVE_3D,
  BASKET_WEAVE_3D,
  JERSEY_KNIT_3D,
  VELVET_PILE_3D,
} from '../components/Fabric3DViewer';

// ── 3D Model overrides keyed by fabric ID ─────────────────────────────────
const VISUAL_3D_MAP = {
  // Basic structures
  'plain-weave':             PLAIN_WEAVE_3D,
  'twill-weave':             TWILL_WEAVE_3D,
  'satin-weave':             SATIN_WEAVE_3D,
  'basket-weave':            BASKET_WEAVE_3D,
  'single-jersey':           JERSEY_KNIT_3D,
  'jersey-knit':             JERSEY_KNIT_3D,
  'rib-knit':                { ...JERSEY_KNIT_3D, colors: ['#c8a96e', '#b39255'] },
  'interlock':               { ...JERSEY_KNIT_3D, colors: ['#4db87a', '#2d9e5f'] },
  'velvet':                  VELVET_PILE_3D,
  'pile-weave':              VELVET_PILE_3D,
  'velvet-pile':             VELVET_PILE_3D,

  // Fine Plain Weaves (chiffon, organza, georgette, voile, lawn, batiste, muslin)
  'chiffon':                 { ...PLAIN_WEAVE_3D, warpColor: '#fce7f3', weftColor: '#fbcfe8' },
  'georgette':               { ...PLAIN_WEAVE_3D, warpColor: '#e0f2fe', weftColor: '#bae6fd' },
  'organza':                 { ...PLAIN_WEAVE_3D, warpColor: '#fef3c7', weftColor: '#fde68a' },
  'voile':                   { ...PLAIN_WEAVE_3D, warpColor: '#e0f7fa', weftColor: '#b2ebf2' },
  'lawn':                    { ...PLAIN_WEAVE_3D, warpColor: '#f1f5f9', weftColor: '#cbd5e1' },
  'batiste':                 { ...PLAIN_WEAVE_3D, warpColor: '#ffffff', weftColor: '#f1f5f9' },
  'muslin':                  { ...PLAIN_WEAVE_3D, warpColor: '#fafaf9', weftColor: '#f5f5f4' },
  'calico':                  { ...PLAIN_WEAVE_3D, warpColor: '#f5f5dc', weftColor: '#e4d5b7' },
  'chambray':                { ...PLAIN_WEAVE_3D, warpColor: '#3b82f6', weftColor: '#f1f5f9' },

  // Twills (denim, chino, gabardine, herringbone, serge, cavalry twill)
  'chino-drill':             { ...TWILL_WEAVE_3D, warpColor: '#c2b280', weftColor: '#a89f70' },
  'gabardine':               { ...TWILL_WEAVE_3D, warpColor: '#4b5563', weftColor: '#374151' },
  'herringbone':             { ...TWILL_WEAVE_3D, warpColor: '#b45309', weftColor: '#78350f' },
  'serge':                   TWILL_WEAVE_3D,
  'cavalry-twill':           TWILL_WEAVE_3D,

  // Basket Weaves
  'oxford-cloth':            BASKET_WEAVE_3D,
  'canvas':                  { ...BASKET_WEAVE_3D, warpColor: '#d2b48c', weftColor: '#c3a37a' },
  'hopsack':                 BASKET_WEAVE_3D,

  // Satins (charmeuse, duchess, satin-crepe)
  'charmeuse':               { ...SATIN_WEAVE_3D, warpColor: '#f8fafc', weftColor: '#e2e8f0' },
  'duchess-satin':           { ...SATIN_WEAVE_3D, warpColor: '#fee2e2', weftColor: '#fca5a5' },
  'satin-crepe':             { ...SATIN_WEAVE_3D, warpColor: '#faf5ff', weftColor: '#e9d5ff' },

  // Rib / Pile
  'corduroy':                { ...VELVET_PILE_3D, colors: ['#a0522d', '#8b4513', '#cd853f'] },

  // Knits (interlock-knit, fleece-terry, performance-knits, warp-knits)
  'interlock-knit':          { ...JERSEY_KNIT_3D, colors: ['#10b981', '#059669'] },
  'fleece-terry':            { ...JERSEY_KNIT_3D, colors: ['#f3f4f6', '#e5e7eb'] },
  'performance-knits':       { ...JERSEY_KNIT_3D, colors: ['#3b82f6', '#1d4ed8'] },
  'warp-knits':              { ...JERSEY_KNIT_3D, colors: ['#7c6dab', '#a78fcc'] },

  // Sustainable
  'organic-cotton':          { ...PLAIN_WEAVE_3D, warpColor: '#f5f5dc', weftColor: '#e4d5b7' },
  'recycled-cotton':         { ...PLAIN_WEAVE_3D, warpColor: '#e2e8f0', weftColor: '#cbd5e1' },
  'rpet':                    { ...JERSEY_KNIT_3D, colors: ['#3b82f6', '#10b981'] },
  'tencel-lyocell':          { ...PLAIN_WEAVE_3D, warpColor: '#e0f2fe', weftColor: '#93c5fd' },
  'hemp':                    { ...PLAIN_WEAVE_3D, warpColor: '#d7ccc8', weftColor: '#bcaaa4' },
};

// ── Helper: convert ₹ prices to $ (approx ₹83 = $1) ──────────────────────
const convertToUSD = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/₹([\d,]+(?:[-–][\d,]+)?)(\/\w+)?/g, (_, price, unit) => {
    const parts = price.split(/[-–]/);
    const toUSD = (p) => '$' + (parseInt(p.replace(/,/g, '')) / 83).toFixed(1);
    const converted = parts.map(toUSD).join('–');
    return converted + (unit || '');
  });
};

const convertFabricPrices = (fabric) => {
  if (!fabric) return fabric;
  const f = { ...fabric };
  if (f.prices) f.prices = f.prices.map(p => ({ ...p, range: convertToUSD(p.range) }));
  if (f.priceIndia) {
    const newP = {};
    Object.entries(f.priceIndia).forEach(([k, v]) => { newP[k] = convertToUSD(v); });
    f.priceIndia = newP;
  }
  if (f.variants) {
    f.variants = f.variants.map(v => {
      const nv = { ...v };
      if (nv.priceIndia) {
        const newP = {};
        Object.entries(nv.priceIndia).forEach(([k, val]) => { newP[k] = convertToUSD(val); });
        nv.priceIndia = newP;
      }
      return nv;
    });
  }
  return f;
};

export const wovenFabrics = FABRIC_DATA.woven.map(fabric => ({
  ...convertFabricPrices(fabric),
  badge: 'badge-woven',
  badgeText: 'WOVEN',
  visual3D: VISUAL_3D_MAP[fabric.id] || fabric.visual3D || null,
}));

export const knittedFabrics = FABRIC_DATA.knitted.map(fabric => ({
  ...convertFabricPrices(fabric),
  badge: 'badge-knitted',
  badgeText: 'KNITTED',
  visual3D: VISUAL_3D_MAP[fabric.id] || fabric.visual3D || null,
}));

export const sustainableFibers = FABRIC_DATA.sustainable.map(fiber => ({
  ...convertFabricPrices(fiber),
  badge: 'badge-sustainable',
  badgeText: 'SUSTAINABLE',
}));

export const allTextiles = [...wovenFabrics, ...knittedFabrics, ...sustainableFibers];

export const getCategoryData = (category) => {
  if (category === 'woven') return wovenFabrics;
  if (category === 'knitted') return knittedFabrics;
  if (category === 'sustainable') return sustainableFibers;
  return allTextiles;
};

export const YARN_TYPES        = FABRIC_DATA.yarnTypes        || [];
export const FINISHING_PROCESSES = FABRIC_DATA.finishingProcesses || [];
export const DYE_METHODS       = FABRIC_DATA.dyeMethods       || [];
export const TESTING_STANDARDS = FABRIC_DATA.testingStandards || [];
export const FABRIC_DEFECTS    = FABRIC_DATA.fabricDefects    || [];
export const INDIA_SOURCING_MAP = FABRIC_DATA.indiaSourcingMap || [];
