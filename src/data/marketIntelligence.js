// ── UK Market Fabric Intelligence (Research: April 2025) ──────────────────
export const MARKET_INTEL = {

  // ── WOMENSWEAR ─────────────────────────────────────────────────────────
  'Dresses & Skirts': {
    summary: 'Viscose dominates at budget/mid. Premium brands moving to TENCEL™ Lyocell.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% Standard Viscose / Polyester', cert: 'None', gsm: '80–120', icon: '🟠' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Viscose or Cotton-Viscose blend', cert: 'BCI Cotton', gsm: '90–130', icon: '🟠' },
      { name: 'H&M', tier: 'mid', fabric: 'LENZING™ ECOVERO™ Viscose', cert: 'FSC®', gsm: '80–120', icon: '🟡' },
      { name: 'Next', tier: 'mid', fabric: 'Viscose Challis / Jersey blend', cert: 'BCI', gsm: '90–130', icon: '🟡' },
      { name: 'ASOS', tier: 'mid', fabric: 'LENZING™ ECOVERO™ / TENCEL™ Modal', cert: 'FSC® / GRS', gsm: '100–140', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: 'TENCEL™ Lyocell / Crepe', cert: 'FSC® / OEKO-TEX®', gsm: '110–160', icon: '🟢' },
      { name: 'John Lewis / & Other Stories', tier: 'premium', fabric: 'TENCEL™ Lyocell or Silk blend', cert: 'GOTS / OEKO-TEX®', gsm: '100–150', icon: '🟢' },
    ],
    upgrade: {
      from: 'Standard Viscose / Polyester (unverified)',
      to: 'LENZING™ ECOVERO™ Viscose',
      why: '50% lower CO₂ vs standard viscose, FSC® certified, same drape and cost control',
      costDelta: '+12–18%',
      premium: 'TENCEL™ Lyocell (closed-loop, biodegradable)',
      premiumDelta: '+20–28%',
      sourcing: 'Surat (printed georgette), Tirupur (jersey dresses)',
      cert: 'FSC® or OEKO-TEX® Standard 100',
    },
  },

  'Tops & Blouses': {
    summary: 'Cotton-poly blends at budget. Organic cotton and TENCEL™ at mid-premium.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% Polyester or Cotton-Poly 60/40', cert: 'BCI Cotton', gsm: '100–140', icon: '🟠' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton / Viscose', cert: 'BCI', gsm: '110–150', icon: '🟠' },
      { name: 'Next', tier: 'mid', fabric: '100% Cotton / Linen blend', cert: 'BCI', gsm: '110–150', icon: '🟡' },
      { name: 'ASOS', tier: 'mid', fabric: 'ECOVERO™ Viscose / Cotton-Linen', cert: 'FSC® / BCI', gsm: '100–140', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: 'Cotton-TENCEL™ Lyocell blend / Silk', cert: 'FSC® / OEKO-TEX®', gsm: '110–160', icon: '🟢' },
    ],
    upgrade: {
      from: 'Standard Cotton Poplin or Polyester blouse',
      to: '55% Cotton / 45% TENCEL™ Lyocell blend',
      why: 'Better drape, moisture management, and a premium hand feel. Differentiates from Next/TU at similar price.',
      costDelta: '+15–22%',
      premium: '100% TENCEL™ Lyocell or Linen-TENCEL™ blend',
      premiumDelta: '+25–35%',
      sourcing: 'Surat for woven, Tirupur for jersey blouses',
      cert: 'FSC® or GOTS',
    },
  },

  'Kaftans & Occasionwear': {
    summary: 'Poly georgette at budget. Viscose georgette is the mid upgrade. Silk-blend is premium.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% Polyester Georgette / Chiffon', cert: 'None', gsm: '60–90', icon: '🟠' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: 'Polyester Georgette or Viscose', cert: 'BCI', gsm: '70–100', icon: '🟠' },
      { name: 'Next', tier: 'mid', fabric: 'Viscose Georgette / Crepe', cert: 'BCI', gsm: '70–110', icon: '🟡' },
      { name: 'ASOS', tier: 'mid', fabric: 'ECOVERO™ Georgette / Satin', cert: 'FSC®', gsm: '70–110', icon: '🟡' },
      { name: 'M&S / John Lewis', tier: 'premium', fabric: 'Silk Charmeuse / TENCEL™ Crepe', cert: 'OEKO-TEX®', gsm: '60–100', icon: '🟢' },
    ],
    upgrade: {
      from: 'Standard Polyester Georgette (60–80 GSM)',
      to: 'Viscose Georgette or ECOVERO™ Chiffon',
      why: 'Natural-feel drape, breathable, far superior to polyester for kaftans. Surat price-competitive.',
      costDelta: '+15–25% vs poly georgette',
      premium: 'TENCEL™ x Silk blend Georgette',
      premiumDelta: '+40–60%',
      sourcing: 'Surat, Gujarat (largest hub for georgette and chiffon)',
      cert: 'OEKO-TEX® Standard 100',
    },
  },

  // ── MENSWEAR ───────────────────────────────────────────────────────────
  'T-Shirts & Polos': {
    summary: 'All tiers use 100% cotton. Upgrade battleground is GSM, yarn quality and certification.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% BCI Cotton Carded', cert: 'BCI', gsm: '150–170', icon: '🟠' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% BCI Cotton', cert: 'BCI', gsm: '160–180', icon: '🟠' },
      { name: 'Next', tier: 'mid', fabric: '100% Cotton Combed / 60-40 Marl', cert: 'BCI', gsm: '160–190', icon: '🟡' },
      { name: 'ASOS', tier: 'mid', fabric: 'Cotton or rPET blend (Responsible Edit)', cert: 'GRS / BCI', gsm: '160–200', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: '100% Combed Cotton BCI / Cotton-Modal', cert: 'BCI / OEKO-TEX®', gsm: '170–210', icon: '🟢' },
      { name: '& Other Stories', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS', gsm: '160–200', icon: '🟢' },
    ],
    upgrade: {
      from: 'Carded 100% Cotton 160 GSM (unverified)',
      to: 'Combed BCI Cotton 180 GSM',
      why: 'Combing removes short fibres → smoother surface, less pilling. Positions above Primark/TU at minimum cost.',
      costDelta: '+10–15%',
      premium: 'GOTS Organic Cotton or 60% Organic / 40% TENCEL™ Modal',
      premiumDelta: '+25–35%',
      sourcing: 'Tirupur, Tamil Nadu — largest organic cotton knit hub globally',
      cert: 'BCI minimum; GOTS for premium',
    },
  },

  'Formal Shirts': {
    summary: 'Poplin dominates. Fine yarn count (60s–80s) separates mid from premium.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% Cotton Poplin (20s–30s count)', cert: 'BCI', gsm: '100–120', icon: '🟠' },
      { name: 'Next', tier: 'mid', fabric: '100% Cotton Poplin 40s / Cotton-Linen', cert: 'BCI', gsm: '110–130', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: '100% Non-Iron Cotton Fine Twill (60s–80s)', cert: 'BCI / OEKO-TEX®', gsm: '110–130', icon: '🟢' },
      { name: 'John Lewis', tier: 'premium', fabric: 'Egyptian or Pima Cotton (80s–100s count)', cert: 'OEKO-TEX® / GOTS', gsm: '100–120', icon: '🟢' },
    ],
    upgrade: {
      from: 'Standard Cotton Poplin 40s count',
      to: 'Cotton Poplin 60s count (Combed) or Cotton-Linen 55/45 blend',
      why: 'Finer yarn = softer, less wrinkling, longer-lasting. Linen blend adds summer appeal and uniqueness vs Next.',
      costDelta: '+15–22%',
      premium: 'Egyptian or Organic Pima Cotton (80s–100s count)',
      premiumDelta: '+30–45%',
      sourcing: 'Bhilwara for yarn, Erode for fabric, Surat for finishing',
      cert: 'OEKO-TEX® Standard 100 mandatory; GOTS for organic',
    },
  },

  'Hoodies & Sweatshirts': {
    summary: 'Cotton fleece standard. Premium upgrading to organic and French terry.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '50/50 Cotton-Poly Fleece', cert: 'BCI', gsm: '280–320', icon: '🟠' },
      { name: 'Next', tier: 'mid', fabric: '80/20 Cotton-Poly Fleece', cert: 'BCI', gsm: '300–340', icon: '🟡' },
      { name: 'ASOS', tier: 'mid', fabric: '80/20 Cotton-Poly or rPET blend', cert: 'BCI / GRS', gsm: '300–360', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: '100% Combed Cotton French Terry', cert: 'BCI / OEKO-TEX®', gsm: '280–340', icon: '🟢' },
    ],
    upgrade: {
      from: '50/50 Cotton-Poly Fleece',
      to: '80% Organic Cotton / 20% rPET Fleece 320 GSM',
      why: 'Dual sustainability story (organic cotton + recycled poly). Both BCI and GRS certifiable. Differentiates strongly.',
      costDelta: '+18–25%',
      premium: '100% GOTS Organic Cotton French Terry',
      premiumDelta: '+30–40%',
      sourcing: 'Tirupur for fleece, Ludhiana for heavyweight fleece',
      cert: 'GOTS + GRS (dual cert for blends)',
    },
  },

  'Jeans': {
    summary: 'Ring-spun separates premium from budget OE yarn. rPET blends emerging across mid-tier.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '99% OE Cotton 1% Elastane', cert: 'BCI', gsm: '280–320', icon: '🟠' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: 'Cotton + REPREVE® rPET blend', cert: 'BCI + RCS', gsm: '300–340', icon: '🟡' },
      { name: 'Next', tier: 'mid', fabric: '98% Ring-spun Cotton 2% Elastane', cert: 'BCI', gsm: '300–360', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: 'Better Cotton Ring-spun + rPET blend', cert: 'BCI / GRS', gsm: '320–380', icon: '🟢' },
    ],
    upgrade: {
      from: 'OE yarn denim 280–300 GSM',
      to: 'Ring-spun BCI Cotton 320 GSM + 2% Elastane',
      why: 'Ring-spun yarn = better fade, softer hand, more authentic denim. Immediate quality perception upgrade.',
      costDelta: '+12–18%',
      premium: 'GOTS Organic Cotton Ring-spun + 2% Elastane',
      premiumDelta: '+28–38%',
      sourcing: 'Ahmedabad is India\'s denim hub, also consider Bhilwara mills',
      cert: 'BCI minimum; GRS for any recycled blend',
    },
  },

  'Coats & Jackets': {
    summary: 'Poly shells dominate budget. Wool blend critical for mid-premium coat positioning.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% Polyester shell + lining', cert: 'None', gsm: '200–300', icon: '🟠' },
      { name: 'Next', tier: 'mid', fabric: 'Wool-Poly blend (30–60% wool)', cert: 'BCI (cotton trim)', gsm: '350–500', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: 'Wool-Poly 70/30 or Cashmere blend', cert: 'RWS / OEKO-TEX®', gsm: '400–600', icon: '🟢' },
    ],
    upgrade: {
      from: '100% Polyester or low-wool blend',
      to: '50% Wool / 50% Recycled Polyester Melton',
      why: 'Wool warmth + rPET cost control. RWS certified wool available from New Zealand/UK suppliers.',
      costDelta: '+35–50% vs full poly',
      premium: '70% Wool / 30% Poly or Cashmere blend',
      premiumDelta: '+60–100%',
      sourcing: 'Ludhiana for wool-blend fabrics, Bhilwara for suiting-weight',
      cert: 'RWS (Responsible Wool Standard) + OEKO-TEX®',
    },
  },

  // ── KIDS ──────────────────────────────────────────────────────────────
  'Kids Basics': {
    summary: 'OEKO-TEX® 100 is non-negotiable for UK kids. GOTS organic is premium differentiator.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: '100% BCI Cotton', cert: 'BCI + OEKO-TEX® 100', gsm: '140–180', icon: '🟠' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% BCI Cotton', cert: 'BCI + OEKO-TEX® 100', gsm: '150–180', icon: '🟠' },
      { name: 'Next Kids', tier: 'mid', fabric: 'BCI Cotton / Cotton-Modal blend', cert: 'BCI / OEKO-TEX®', gsm: '150–200', icon: '🟡' },
      { name: 'M&S Kids', tier: 'premium', fabric: 'GOTS Organic Cotton (babywear)', cert: 'GOTS + OEKO-TEX® 100', gsm: '150–200', icon: '🟢' },
      { name: 'John Lewis', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS', gsm: '160–200', icon: '🟢' },
    ],
    upgrade: {
      from: 'Standard cotton (uncertified)',
      to: '100% BCI Cotton with OEKO-TEX® Standard 100 (mandatory for UK kids)',
      why: 'UK consumer trust. Mandatory for retail buyers. No chemicals harmful to children.',
      costDelta: '+8–15%',
      premium: '100% GOTS Organic Cotton — standard for premium kidswear',
      premiumDelta: '+22–30%',
      sourcing: 'Tirupur GOTS-certified mills (India\'s largest organic knitwear hub)',
      cert: 'OEKO-TEX® Standard 100 (minimum) + GOTS for organic claim',
    },
  },

  'Baby': {
    summary: 'GOTS organic is the expected standard at mid-premium. Softness + safety = everything.',
    brands: [
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton OEKO-TEX® 100', cert: 'OEKO-TEX® 100', gsm: '140–170', icon: '🟠' },
      { name: 'Next Baby', tier: 'mid', fabric: '100% Cotton or Cotton-Modal', cert: 'OEKO-TEX® 100', gsm: '150–190', icon: '🟡' },
      { name: 'M&S Baby', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS + OEKO-TEX® 100', gsm: '150–190', icon: '🟢' },
      { name: 'John Lewis', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS', gsm: '150–180', icon: '🟢' },
    ],
    upgrade: {
      from: 'Standard cotton',
      to: '100% GOTS Organic Cotton — non-negotiable for baby',
      why: 'Skin safety, UK buyer requirements, parent trust. GOTS = global gold standard for baby textiles.',
      costDelta: '+22–30%',
      premium: 'Organic Pima Cotton or Organic Merino',
      premiumDelta: '+40–60%',
      sourcing: 'Tirupur GOTS cluster; also Coimbatore for fine count organic',
      cert: 'GOTS (mandatory) + OEKO-TEX® Standard 100',
    },
  },

  'Nightwear & Lingerie': {
    summary: 'Cotton jersey standard. Modal and TENCEL™ Modal the premium differentiators.',
    brands: [
      { name: 'Primark', tier: 'budget', fabric: 'Polyester Satin / Cotton Jersey', cert: 'BCI', gsm: '100–150', icon: '🟠' },
      { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton Jersey', cert: 'BCI', gsm: '120–160', icon: '🟠' },
      { name: 'Next', tier: 'mid', fabric: 'Modal / Cotton-Modal blend', cert: 'OEKO-TEX®', gsm: '130–180', icon: '🟡' },
      { name: 'M&S', tier: 'premium', fabric: 'TENCEL™ Modal / Silk blend', cert: 'FSC® / OEKO-TEX®', gsm: '120–170', icon: '🟢' },
    ],
    upgrade: {
      from: 'Standard cotton jersey or polyester satin',
      to: 'Cotton-Modal 50/50 blend or TENCEL™ Modal',
      why: 'Modal is visibly softer than cotton. Significant hand-feel upgrade for nightwear. Strong consumer preference.',
      costDelta: '+15–22%',
      premium: '100% TENCEL™ Modal or ECOVERO™ Satin',
      premiumDelta: '+25–35%',
      sourcing: 'Tirupur for modal jersey; Surat for satin nightwear',
      cert: 'FSC® (for TENCEL™/Modal) + OEKO-TEX® Standard 100',
    },
  },
};

export const TIER_COLORS = {
  budget: { bg: 'rgba(224,107,90,0.1)', border: 'rgba(224,107,90,0.3)', text: '#e06b5a', label: 'Budget' },
  mid:    { bg: 'rgba(240,201,78,0.1)', border: 'rgba(240,201,78,0.3)', text: '#f0c94e', label: 'Mid-Market' },
  premium:{ bg: 'rgba(77,184,122,0.1)', border: 'rgba(77,184,122,0.3)', text: '#4db87a', label: 'Premium' },
};
