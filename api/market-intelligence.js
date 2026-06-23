// ============================================================
// Vercel Serverless Function — Market Intelligence API
// Route: GET /api/market-intelligence?garment=<garment_name>
//
// Serves the latest UK brand fabric intelligence data.
// This file is updated by the weekly scheduled Claude task.
// Last data refresh: June 2026
// ============================================================

// ── Current market intelligence data ────────────────────────
// Updated: June 2026. Sources: brand PDPs, sustainability reports, CMA guidance.
const MARKET_DATA = {
  lastUpdated: "2026-06-23",
  researchNote: "Data sourced from UK brand PDPs, annual sustainability reports, and industry publications. Updated weekly via automated task. Jun 2026 update: Primark cert updated to reflect Primark Cotton Project (renamed from PSCP, Oct 2024) as primary cotton sourcing programme; 57% of cotton clothing units certified via organic/recycled/Primark Cotton Project as of 2025 report (target 100% by 2027). Charles Tyrwhitt now holds Planet Mark certification (5th consecutive year, 2025). CMA DMCC Act enforcement powers active from April 2025; CMA Supply Chain Guidance issued early 2026 — greenwash fines up to 10% of global turnover now enforceable. H&M 89% of materials recycled or sustainably sourced in 2024; new Circ® partnership debuting Spring 2026 TENCEL™ | Circ® denim. Next CR Report to Jan 2026 confirms RWS wool target: 50% by 2025, 75% by 2028, 100% by 2030.",

  garments: {
    'Dresses': {
      summary: 'Viscose and ECOVERO™ dominate mid-market. TENCEL™ Lyocell now standard at premium. Primark shifting to responsibly sourced cotton via own Primark Cotton Project (57% certified as of 2025, target 100% by 2027).',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '100% Cotton Jersey / Standard Viscose', cert: 'Primark Cotton Project', gsm: '90–130', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Viscose or Cotton-Viscose blend', cert: 'BCI Cotton', gsm: '90–130', icon: '🟠' },
        { name: 'H&M', tier: 'mid', fabric: 'LENZING™ ECOVERO™ Viscose Challis', cert: 'FSC®', gsm: '80–120', icon: '🟡' },
        { name: 'Next', tier: 'mid', fabric: 'Viscose Challis / Jersey blend', cert: 'BCI', gsm: '90–130', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'LENZING™ ECOVERO™ / TENCEL™ Modal', cert: 'FSC® / GRS', gsm: '100–140', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'TENCEL™ Lyocell / Crepe', cert: 'FSC® / OEKO-TEX®', gsm: '110–160', icon: '🟢' },
        { name: 'John Lewis', tier: 'premium', fabric: 'TENCEL™ Lyocell or Silk blend', cert: 'GOTS / OEKO-TEX®', gsm: '100–150', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard Viscose / Polyester (unverified)',
        to: 'LENZING™ ECOVERO™ Viscose',
        why: '50% lower CO₂ vs standard viscose, FSC® certified, same drape',
        costDelta: '+12–18%',
        premium: 'TENCEL™ Lyocell (closed-loop, biodegradable)',
        premiumDelta: '+20–28%',
        sourcing: 'Surat (printed georgette), Tirupur (jersey dresses)',
        cert: 'FSC® or OEKO-TEX® Standard 100',
      },
    },

    'Blouses & Tops': {
      summary: 'Cotton-poly blends at budget. Organic cotton and TENCEL™ at mid-premium. Linen blends growing.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '100% Polyester or Cotton-Poly 60/40', cert: 'Primark Cotton Project', gsm: '100–140', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton / Viscose', cert: 'BCI', gsm: '110–150', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: '100% Cotton / Linen blend', cert: 'BCI', gsm: '110–150', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'ECOVERO™ Viscose / Cotton-Linen', cert: 'FSC® / BCI', gsm: '100–140', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'Cotton-TENCEL™ Lyocell blend / Silk', cert: 'FSC® / OEKO-TEX®', gsm: '110–160', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard Cotton Poplin or Polyester blouse',
        to: '55% Cotton / 45% TENCEL™ Lyocell blend',
        why: 'Better drape, moisture management, premium hand feel',
        costDelta: '+15–22%',
        premium: '100% TENCEL™ Lyocell or Linen-TENCEL™ blend',
        premiumDelta: '+25–35%',
        sourcing: 'Surat for woven, Tirupur for jersey blouses',
        cert: 'FSC® or GOTS',
      },
    },

    'Tops & T-Shirts': {
      summary: 'All tiers use 100% cotton. Upgrade battleground is GSM, yarn quality and certification.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '100% Cotton Carded', cert: 'Primark Cotton Project', gsm: '150–170', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '100% BCI Cotton', cert: 'BCI', gsm: '160–180', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: '100% Cotton Combed / 60-40 Marl', cert: 'BCI', gsm: '160–190', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'Cotton or rPET blend (Responsible Edit)', cert: 'GRS / BCI', gsm: '160–200', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: '100% Combed Cotton BCI / Cotton-Modal', cert: 'BCI / OEKO-TEX®', gsm: '170–210', icon: '🟢' },
        { name: '& Other Stories', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS', gsm: '160–200', icon: '🟢' },
      ],
      upgrade: {
        from: '160 GSM BCI Carded Cotton (standard T-shirt)',
        to: '180 GSM Combed Ring-Spun 100% OCS Organic Cotton',
        why: 'Combing removes short fibres → smoother surface, lower pilling. OCS certification satisfies M&S/ASOS supplier requirements.',
        costDelta: '+18–25%',
        premium: '180–200 GSM GOTS Organic Cotton or Cotton-Modal blend',
        premiumDelta: '+25–35%',
        sourcing: 'Tirupur (world\'s largest T-shirt cluster) or Coimbatore',
        cert: 'OCS or GOTS (organic tier); BCI accepted as minimum',
      },
    },

    'T-Shirts & Polos': {
      summary: 'All tiers use 100% cotton. GSM and certification separate budget from premium.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '100% Cotton Carded', cert: 'Primark Cotton Project', gsm: '150–170', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '100% BCI Cotton', cert: 'BCI', gsm: '160–180', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: 'Combed Cotton 100%', cert: 'BCI', gsm: '160–190', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'Cotton or rPET blend', cert: 'GRS / BCI', gsm: '160–200', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'Combed Cotton / Cotton-Modal', cert: 'BCI / OEKO-TEX®', gsm: '170–210', icon: '🟢' },
      ],
      upgrade: {
        from: '160 GSM BCI Carded Cotton',
        to: '180 GSM Combed Ring-Spun OCS Organic Cotton',
        why: 'Smoother surface, lower pilling. OCS meets M&S/ASOS supplier requirements.',
        costDelta: '+18–25%',
        premium: 'GOTS Organic Cotton or Cotton-Modal blend 180–200 GSM',
        premiumDelta: '+25–35%',
        sourcing: 'Tirupur or Coimbatore, Tamil Nadu',
        cert: 'OCS or GOTS minimum; BCI as floor',
      },
    },

    'Formal Shirts': {
      summary: 'Premium cotton qualities with high thread count. Non-iron finish is minimum mid-market expectation.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '65% Poly / 35% Cotton TC Poplin', cert: 'Primark Cotton Project', gsm: '110–130', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '60% Cotton / 40% Poly Poplin', cert: 'BCI', gsm: '120–140', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: 'BCI Cotton 100% Ring Spun, Non-Iron', cert: 'BCI', gsm: '115–135', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: '100% Non-Iron Cotton Fine Twill (60s–80s)', cert: 'BCI / OEKO-TEX®', gsm: '100–130', icon: '🟢' },
        { name: 'Charles Tyrwhitt', tier: 'premium', fabric: '2-ply 100% Cotton Twill / Oxford', cert: 'Planet Mark', gsm: '90–120', icon: '🟢' },
      ],
      upgrade: {
        from: '65/35 Poly-Cotton Poplin (easy-care)',
        to: '100% BCI Cotton Non-Iron Poplin (40s×40s, 78×64)',
        why: 'All major UK mid-premium brands now offer 100% cotton non-iron. Poly-cotton reads as budget.',
        costDelta: '+15–20%',
        premium: '100% Cotton 2-ply Twill (60s) or Egyptian Cotton Poplin',
        premiumDelta: '+30–45%',
        sourcing: 'Ahmedabad or Surat (shirting clusters). Look for GOTS mills.',
        cert: 'OEKO-TEX® Standard 100 or BCI minimum',
      },
    },

    'Casual Shirts': {
      summary: 'Chambray and linen dominate casual. Organic cotton being adopted at mid market.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: 'Cotton Chambray / Oxford', cert: 'Primark Cotton Project', gsm: '120–160', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '100% BCI Cotton Chambray', cert: 'BCI', gsm: '130–170', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: 'BCI Cotton / Linen-Cotton blend', cert: 'BCI', gsm: '130–170', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'OCS Cotton / Linen blend', cert: 'OCS / OEKO-TEX®', gsm: '130–165', icon: '🟢' },
        { name: 'John Lewis / Reiss', tier: 'premium', fabric: 'Linen or Cotton-Linen Chambray', cert: 'OEKO-TEX®', gsm: '140–180', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard BCI Cotton Chambray',
        to: 'OCS Organic Cotton Chambray or 55% Linen / 45% OCS Cotton',
        why: 'Linen-Cotton blends now expected at mid-premium. Linen perceived as elevated vs plain cotton.',
        costDelta: '+20–28%',
        premium: '100% European Linen or BCI Cotton-TENCEL™ Blend',
        premiumDelta: '+30–45%',
        sourcing: 'Ahmedabad or Erode for chambray; check OCS mills',
        cert: 'OCS or GOTS (organic cotton); OEKO-TEX® 100 minimum',
      },
    },

    'Blazers & Suits': {
      summary: 'Wool-blend the standard at mid. Linen-blend suit growing in summer range. Sustainable wool certifications (RWS, ZQ) increasingly demanded.',
      brands: [
        { name: 'Next', tier: 'mid', fabric: '55% Wool / 45% Poly Gabardine', cert: 'RWS (in progress)', gsm: '220–300', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'Poly-Wool blend 50/50 / Boucle', cert: 'None', gsm: '200–280', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: '100% Wool Gabardine (Merino / Zegna)', cert: 'RWS wool', gsm: '240–320', icon: '🟢' },
        { name: 'John Lewis / Ted Baker', tier: 'premium', fabric: 'Italian Wool blend / Linen', cert: 'OEKO-TEX®', gsm: '200–280', icon: '🟢' },
      ],
      upgrade: {
        from: '100% Polyester suiting (unlined)',
        to: '55% Poly / 45% Wool Gabardine with anti-crease finish',
        why: 'All UK mid brands now use wool-blend minimum. Pure poly reads as fast fashion at blazer price points.',
        costDelta: '+25–35%',
        premium: '100% Wool Gabardine or Hopsack (RWS or ZQ certified)',
        premiumDelta: '+60–100%',
        sourcing: 'Bhilwara, Rajasthan (largest suiting cluster in India)',
        cert: 'RWS (Responsible Wool Standard) for wool; OEKO-TEX® 100',
      },
    },

    'Hoodies & Sweatshirts': {
      summary: 'French terry is standard across all tiers. rPET fleece growing rapidly at mid-market. 400 GSM benchmark for "premium heavyweight".',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '50/50 Cotton-Polyester French Terry', cert: 'Primark Cotton Project', gsm: '280–320', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: '60% Cotton / 40% Poly Loopback', cert: 'BCI', gsm: '320–380', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'Recycled Polyester / OCS Cotton French Terry', cert: 'GRS / OCS', gsm: '300–380', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: '100% OCS Organic Cotton French Terry', cert: 'OCS / OEKO-TEX®', gsm: '340–420', icon: '🟢' },
      ],
      upgrade: {
        from: '50/50 Cotton-Poly French Terry (280 GSM)',
        to: '80% OCS Cotton / 20% rPET Fleece (320–360 GSM)',
        why: 'ASOS and Next now use OCS or GRS certified fleece. Pure poly fleece faces greenwash scrutiny under CMA fashion guidance (Sept 2024) and DMCC Act direct enforcement powers (April 2025), with CMA Supply Chain Guidance extending scrutiny to supplier claims in early 2026. Fines up to 10% of global turnover now enforceable.',
        costDelta: '+15–22%',
        premium: '100% OCS Organic Cotton (380–420 GSM) brushed loopback',
        premiumDelta: '+28–38%',
        sourcing: 'Tirupur (organic fleece certified mills)',
        cert: 'OCS (organic cotton); GRS (recycled polyester)',
      },
    },

    'Jeans': {
      summary: 'Stretch denim standard at all tiers. Sustainable denim credentials (BCI, waterless dyeing, recycled cotton) now table stakes at mid.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '99% Cotton / 1% Elastane Denim', cert: 'Primark Cotton Project', gsm: '300–380', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: 'BCI Cotton Denim + Elastane', cert: 'BCI', gsm: '300–380', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: '98% Cotton / 2% Elastane Ring-Spun BCI', cert: 'BCI', gsm: '320–400', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'BCI Stretch Denim / Recycled Cotton (Circular Edit)', cert: 'GRS / BCI', gsm: '300–400', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'REPREVE® rPET / BCI Cotton Stretch Denim', cert: 'GRS / BCI', gsm: '340–420', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard BCI Cotton Denim 3/1 Twill',
        to: 'BCI Cotton + REPREVE® rPET blend Stretch Denim',
        why: 'M&S and Sainsbury\'s actively seeking waterless-dye and rPET denim suppliers. Indigo shortlisting to natural or low-impact alternatives.',
        costDelta: '+12–18%',
        premium: '100% Organic Cotton Selvedge or Tencel™-Cotton Denim blend',
        premiumDelta: '+35–55%',
        sourcing: 'Ahmedabad (largest denim cluster in Asia); Erode for stretch denim',
        cert: 'BCI minimum; GRS for rPET; GOTS for organic',
      },
    },

    'Activewear': {
      summary: 'rPET almost universal at mid-premium. Nylon-elastane remains performance standard. ECONYL growing in swimwear/activewear crossover.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '87% Polyester / 13% Elastane', cert: 'BCI Cotton (main range)', gsm: '160–200', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: 'rPET / Nylon blend performance knit', cert: 'GRS', gsm: '160–220', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabric: 'GRS rPET Performance Jersey', cert: 'GRS', gsm: '160–220', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'GRS rPET 4-way stretch performance knit', cert: 'GRS / OEKO-TEX®', gsm: '170–240', icon: '🟢' },
      ],
      upgrade: {
        from: 'Virgin Polyester/Elastane performance knit',
        to: 'GRS-certified rPET/Elastane 4-way stretch',
        why: 'All UK mid-market activewear brands have switched or are actively switching. Virgin polyester supply chain no longer tenable for UK retail sustainability commitments.',
        costDelta: '+10–18%',
        premium: 'ECONYL® (regenerated nylon) or rPET Warp Knit with OEKO-TEX®',
        premiumDelta: '+25–35%',
        sourcing: 'Tirupur or Coimbatore (certified performance knit mills)',
        cert: 'GRS mandatory; OEKO-TEX® STANDARD 100 for skin contact',
      },
    },

    'Swimwear': {
      summary: 'ECONYL® (regenerated nylon) now standard at mid-premium. Chlorine-resistance required. UV50+ increasingly expected.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '80% Nylon / 20% Elastane', cert: 'None stated', gsm: '180–220', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: 'ECONYL® Nylon / Elastane blend', cert: 'GRS', gsm: '180–240', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'ECONYL® Regenerated Nylon + Lycra®', cert: 'GRS / Aquafil certified', gsm: '180–240', icon: '🟢' },
      ],
      upgrade: {
        from: 'Virgin Nylon / Elastane',
        to: 'ECONYL® Regenerated Nylon + Lycra® (chlorine-resistant)',
        why: 'ECONYL® is industry standard — major brands have committed. UVA/UVB protection + chlorine resistance are minimum performance specs.',
        costDelta: '+18–28%',
        premium: 'ECONYL® + OEKO-TEX® STANDARD 100 + UV50+',
        premiumDelta: '+30–40%',
        sourcing: 'Tirupur or Coimbatore (certified performance/swimwear mills)',
        cert: 'GRS for ECONYL®; OEKO-TEX® STANDARD 100',
      },
    },

    'Eveningwear': {
      summary: 'Polyester satin at budget. Stretch-crepe at mid. Pure silk or sustainable silk alternatives at premium.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '100% Polyester Satin / Chiffon', cert: 'None', gsm: '90–130', icon: '🟠' },
        { name: 'ASOS', tier: 'mid', fabric: 'Recycled Polyester Satin / ECOVERO™ Crepe', cert: 'GRS / FSC®', gsm: '100–180', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'Acetate Satin / Silk-blend Charmeuse', cert: 'OEKO-TEX®', gsm: '100–160', icon: '🟢' },
        { name: 'REISS / Coast', tier: 'premium', fabric: 'Stretch Crepe / Duchess Satin', cert: 'OEKO-TEX®', gsm: '120–220', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard Polyester Satin (unverified)',
        to: 'GRS Recycled Polyester Satin or ECOVERO™ Crepe',
        why: 'ASOS now uses rPET satin across most of its formal range. Virgin polyester satin is not accepted by Positive Luxury / Good On You-rated brands.',
        costDelta: '+15–25%',
        premium: 'Acetate Satin / Tencel™ x Silk crepe blend',
        premiumDelta: '+40–65%',
        sourcing: 'Surat or Varanasi (silk/satin cluster)',
        cert: 'GRS for recycled; OEKO-TEX® 100 for woven satins',
      },
    },

    'Coats & Jackets': {
      summary: 'Recycled wool now mainstream at M&S and John Lewis. rPET shell fabric standard in mid-market outerwear.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: 'Poly-Cotton Twill or 100% Polyester Shell', cert: 'BCI', gsm: '220–320', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: 'Wool-blend overcoat / rPET shell jacket', cert: 'RWS (target 50% by 2025) / GRS', gsm: '280–420', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'Recycled Wool-blend or 100% RWS Wool', cert: 'RWS / OEKO-TEX®', gsm: '320–500', icon: '🟢' },
        { name: 'John Lewis / Reiss', tier: 'premium', fabric: '100% Wool Melton / Italian Cashmere Blend', cert: 'RWS / OEKO-TEX®', gsm: '400–700', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard Virgin Poly Shell or Unverified Wool blend',
        to: 'GRS rPET Shell (jacket) or RWS Wool-Poly blend (coat)',
        why: 'Outerwear is highest-scrutiny category for certifications. RWS wool and GRS rPET are minimums for M&S/John Lewis supplier approval.',
        costDelta: '+20–30%',
        premium: 'RWS / ZQ Certified Wool Melton or Recycled Cashmere blend',
        premiumDelta: '+50–80%',
        sourcing: 'Bhilwara (wool/suiting), Ludhiana (woollens), Panipat (recycled wool)',
        cert: 'RWS (wool); GRS (recycled synthetics); OEKO-TEX® 100',
      },
    },

    'Chinos & Trousers': {
      summary: 'BCI cotton standard. Stretch chino (with 2% elastane) now expected across all tiers.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '98% Cotton / 2% Elastane Twill', cert: 'Primark Cotton Project', gsm: '220–280', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: '98% BCI Cotton / 2% Elastane Chino Drill', cert: 'BCI', gsm: '240–300', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: '100% OCS Cotton Chino or Linen blend', cert: 'OCS / OEKO-TEX®', gsm: '240–300', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard 100% Cotton Chino Drill',
        to: '98% BCI Cotton / 2% Elastane (240–260 GSM)',
        why: 'Stretch chino is now the minimum mid-market expectation. Rigid cotton chino reads as dated.',
        costDelta: '+10–15%',
        premium: 'OCS Organic Cotton or Cotton-TENCEL™ stretch drill',
        premiumDelta: '+20–30%',
        sourcing: 'Ahmedabad, Coimbatore, or Erode (bottomweight clusters)',
        cert: 'BCI minimum; OCS for organic positioning',
      },
    },

    'School Uniform': {
      summary: 'UK school uniform dominated by supermarkets. OEKO-TEX Standard 100 mandatory for all children\'s garments.',
      brands: [
        { name: 'Asda George', tier: 'budget', fabric: '65% Polyester / 35% Cotton Twill', cert: 'OEKO-TEX 100', gsm: '160–200', icon: '🔴' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '65% Poly / 35% Cotton Twill', cert: 'OEKO-TEX 100 + BCI', gsm: '160–195', icon: '🔴' },
        { name: 'Next', tier: 'mid', fabric: 'Stain-resist 65/35 Poly-Cotton', cert: 'OEKO-TEX 100', gsm: '170–200', icon: '🟡' },
        { name: 'M&S', tier: 'mid', fabric: 'Teflon-coated Poly-Cotton Twill', cert: 'OEKO-TEX 100', gsm: '175–210', icon: '🟡' },
        { name: 'John Lewis', tier: 'premium', fabric: 'BCI Cotton-rich Twill + Teflon', cert: 'OEKO-TEX 100 + BCI', gsm: '180–220', icon: '🟢' },
      ],
      upgrade: {
        from: '65/35 Standard Poly-Cotton (uncertified)',
        to: '65% rPET / 35% Organic Cotton Twill OEKO-TEX 100',
        why: 'OEKO-TEX 100 mandatory for children. rPET blend cuts cost vs full organic while meeting sustainability targets.',
        costDelta: '+10–18%',
        premium: '50% Organic Cotton / 50% rPET Twill (Teflon coated)',
        premiumDelta: '+22–30%',
        sourcing: 'Tirupur or Coimbatore (OEKO-TEX certified mills)',
        cert: 'OEKO-TEX Standard 100 mandatory for children\'s garments',
      },
    },

    'Sleepsuits & Bodysuits': {
      summary: 'GOTS organic cotton is expected standard at mid-premium. OEKO-TEX non-negotiable for UK baby retail.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '100% Cotton Interlock', cert: 'OEKO-TEX 100', gsm: '160–200', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabric: '100% Cotton Interlock', cert: 'OEKO-TEX 100 + BCI', gsm: '160–200', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: '100% Cotton Interlock (non-mulesed wool trim)', cert: 'OEKO-TEX 100 + BCI', gsm: '165–210', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'GOTS Organic Cotton Interlock', cert: 'GOTS + OEKO-TEX 100', gsm: '170–215', icon: '🟢' },
        { name: 'John Lewis / Polarn O. Pyret', tier: 'premium', fabric: '100% GOTS Organic Cotton', cert: 'GOTS', gsm: '170–220', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard Cotton Interlock OEKO-TEX 100',
        to: 'OCS Organic Cotton Interlock OEKO-TEX 100',
        why: 'Mid-premium brands have all switched. Parents actively check for organic certification in baby products.',
        costDelta: '+18–28%',
        premium: 'GOTS Organic Cotton 180–200 GSM Interlock',
        premiumDelta: '+28–40%',
        sourcing: 'Tirupur (huge GOTS-certified organic baby cluster)',
        cert: 'GOTS or OCS; OEKO-TEX 100 mandatory',
      },
    },

    'Pyjamas & Nightwear': {
      summary: 'Cotton flannel for winter, jersey for all-season. Sustainable cotton certifications growing.',
      brands: [
        { name: 'Primark', tier: 'budget', fabric: '100% Cotton Jersey / Flannel', cert: 'Primark Cotton Project', gsm: '150–250', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabric: '100% Cotton Flannel / Jersey', cert: 'BCI', gsm: '160–280', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabric: 'OCS Cotton Brushed Cotton / Satin PJ', cert: 'OCS / OEKO-TEX®', gsm: '150–260', icon: '🟢' },
      ],
      upgrade: {
        from: 'Standard BCI Cotton Jersey/Flannel PJ',
        to: 'OCS Organic Cotton Jersey (all-season) or Brushed Cotton Flannel',
        why: 'Nightwear is high-skin-contact. OCS/GOTS certification addresses parent concerns about pesticide residues.',
        costDelta: '+15–22%',
        premium: 'GOTS Organic Cotton Satin PJ or Bamboo-Cotton Blend',
        premiumDelta: '+25–38%',
        sourcing: 'Tirupur (jersey PJs), Bhilwara/Ludhiana (cotton flannel)',
        cert: 'OCS or GOTS; OEKO-TEX® 100 minimum',
      },
    },
  }
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

  const { garment } = req.query;

  if (!garment) {
    return res.status(200).json({
      lastUpdated: MARKET_DATA.lastUpdated,
      researchNote: MARKET_DATA.researchNote,
      availableGarments: Object.keys(MARKET_DATA.garments),
    });
  }

  // Direct key lookup
  const data = MARKET_DATA.garments[garment];
  if (data) {
    return res.status(200).json({ garment, data, lastUpdated: MARKET_DATA.lastUpdated, source: 'api' });
  }

  // Fuzzy fallback — try substring match
  const fuzzyKey = Object.keys(MARKET_DATA.garments).find(k =>
    k.toLowerCase().includes(garment.toLowerCase()) ||
    garment.toLowerCase().includes(k.toLowerCase())
  );
  if (fuzzyKey) {
    return res.status(200).json({
      garment: fuzzyKey,
      data: MARKET_DATA.garments[fuzzyKey],
      lastUpdated: MARKET_DATA.lastUpdated,
      source: 'api-fuzzy',
    });
  }

  return res.status(404).json({ error: 'Garment not found', availableGarments: Object.keys(MARKET_DATA.garments) });
}
