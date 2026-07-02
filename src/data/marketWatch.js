// ── Market Watch — Weekly Brand Intelligence ──────────────────────────────────
// Each brand's data lives in its own JSON file under marketWatchData/
// Updated weekly by automated intelligence agents (every Monday morning)
// Format: { lastUpdated, weekOf, sections: { vendors, sustainability, sourcing,
//           strategy, pricing, launches, gossip, soWhat[], quietWeeks[] } }

import primark    from './marketWatchData/primark.json';
import sainsburys from './marketWatchData/sainsburys.json';
import george     from './marketWatchData/george.json';
import tesco      from './marketWatchData/tesco.json';
import hm         from './marketWatchData/hm.json';
import next       from './marketWatchData/next.json';
import asos       from './marketWatchData/asos.json';
import ms         from './marketWatchData/ms.json';
import johnlewis  from './marketWatchData/johnlewis.json';

export const MARKET_WATCH = {
  primark:    { key: 'primark',    name: 'Primark',         icon: '🟠', tier: 'Budget',  tierColor: '#e06b5a', ...primark },
  sainsburys: { key: 'sainsburys', name: "Sainsbury's TU",  icon: '🛒', tier: 'Budget',  tierColor: '#e06b5a', ...sainsburys },
  george:     { key: 'george',     name: 'George (Asda)',    icon: '🔵', tier: 'Budget',  tierColor: '#e06b5a', ...george },
  tesco:      { key: 'tesco',      name: 'Tesco F&F',        icon: '🔴', tier: 'Budget',  tierColor: '#e06b5a', ...tesco },
  hm:         { key: 'hm',         name: 'H&M',              icon: '🟡', tier: 'Mid',     tierColor: '#f0c94e', ...hm },
  next:       { key: 'next',       name: 'Next PLC',         icon: '🟡', tier: 'Mid',     tierColor: '#f0c94e', ...next },
  asos:       { key: 'asos',       name: 'ASOS',             icon: '🟡', tier: 'Mid',     tierColor: '#f0c94e', ...asos },
  ms:         { key: 'ms',         name: 'M&S',              icon: '🟢', tier: 'Premium', tierColor: '#4db87a', ...ms },
  johnlewis:  { key: 'johnlewis',  name: 'John Lewis',       icon: '🟢', tier: 'Premium', tierColor: '#4db87a', ...johnlewis },
};

export const MARKET_WATCH_BRANDS = Object.values(MARKET_WATCH);
