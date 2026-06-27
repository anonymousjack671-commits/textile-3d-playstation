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
        { name: 'Primark', tier: 'budget', fabrics: ['100% Cotton Jersey (casual/jersey styles)', 'Standard Viscose Challis (printed dresses)', '100% Polyester Georgette (occasionwear)'], cert: 'Primark Cotton Project', gsm: '90–150', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['100% Viscose Challis (daywear)', 'Cotton-Viscose 55/45 blend (jersey dresses)', 'BCI Cotton Jersey (casual)'], cert: 'BCI Cotton', gsm: '90–140', icon: '🟠' },
        { name: 'H&M', tier: 'mid', fabrics: ['LENZING™ ECOVERO™ Viscose Challis (printed)', 'OCS Organic Cotton Jersey (basics)', 'rPET Woven (transitional styles)'], cert: 'FSC® / OCS', gsm: '80–140', icon: '🟡' },
        { name: 'Next', tier: 'mid', fabrics: ['Viscose Challis BCI (daywear)', 'Cotton-Viscose Jersey blend (jersey dresses)', 'Crepe de Chine (occasionwear)'], cert: 'BCI', gsm: '90–140', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['LENZING™ ECOVERO™ Viscose (Responsible Edit)', 'TENCEL™ Modal blend (occasion)', 'GRS rPET Satin (formal)'], cert: 'FSC® / GRS', gsm: '100–160', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['TENCEL™ Lyocell Crepe (OEKO-TEX® certified)', 'OCS Organic Cotton Jersey (everyday)', 'Acetate-Viscose blend (occasionwear)'], cert: 'FSC® / OEKO-TEX®', gsm: '110–180', icon: '🟢' },
        { name: 'John Lewis', tier: 'premium', fabrics: ['TENCEL™ Lyocell or Silk blend (occasionwear)', 'GOTS Organic Cotton Jersey (casual)', 'Linen-Viscose blend (summer)'], cert: 'GOTS / OEKO-TEX®', gsm: '100–160', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['100% Polyester (fashion blouses)', 'Cotton-Poly 60/40 (basics)', 'Primark Cotton Project Cotton (essentials)'], cert: 'Primark Cotton Project', gsm: '100–140', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['100% BCI Cotton (basics)', 'Viscose Challis (printed blouses)'], cert: 'BCI', gsm: '110–150', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['100% BCI Cotton (plain)', 'Cotton-Linen blend (summer)', 'Viscose Georgette (occasionwear)'], cert: 'BCI', gsm: '100–160', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['ECOVERO™ Viscose (responsible edit)', 'Cotton-Linen blend (casual)', 'TENCEL™ Modal (premium)'], cert: 'FSC® / BCI', gsm: '100–140', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['Cotton-TENCEL™ Lyocell blend (everyday)', 'Silk (occasionwear)', 'Linen-TENCEL™ blend (summer)'], cert: 'FSC® / OEKO-TEX®', gsm: '110–160', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['100% Carded Cotton Jersey (tees)', 'Cotton-Poly 60/40 (long-sleeves)', 'Primark Cotton Project Cotton (essentials)'], cert: 'Primark Cotton Project', gsm: '150–170', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['100% BCI Cotton Single Jersey (tees)', 'Cotton-Modal blend (premium basics)'], cert: 'BCI', gsm: '160–180', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['100% Combed Cotton Ring-Spun (standard)', '60/40 Cotton-Poly Marl (heather tees)', 'BCI Cotton Slub Jersey (fashion)'], cert: 'BCI', gsm: '160–190', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['BCI Cotton (standard)', 'rPET blend (Responsible Edit)', 'Organic Cotton (conscious range)'], cert: 'GRS / BCI', gsm: '160–200', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['100% Combed BCI Cotton (standard)', 'Cotton-Modal blend (premium)', 'GOTS Organic Cotton (premium range)'], cert: 'BCI / OEKO-TEX®', gsm: '170–210', icon: '🟢' },
        { name: '& Other Stories', tier: 'premium', fabrics: ['100% GOTS Organic Cotton Jersey (tees)', 'Cotton-TENCEL™ Lyocell blend (performance)'], cert: 'GOTS', gsm: '160–200', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['100% Carded Cotton Jersey (tees)', 'Pique Cotton (polos)', 'Primark Cotton Project Cotton (essentials)'], cert: 'Primark Cotton Project', gsm: '150–180', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['100% BCI Cotton Jersey (tees)', 'Pique BCI Cotton (polos)'], cert: 'BCI', gsm: '160–200', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['100% Combed BCI Cotton (tees)', 'Pique BCI Cotton (polos)', 'Cotton-Poly blend (sport polos)'], cert: 'BCI', gsm: '160–190', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['BCI Cotton (standard)', 'rPET Pique (eco polos)', 'Organic Cotton (conscious range)'], cert: 'GRS / BCI', gsm: '160–200', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['Combed BCI Cotton Jersey (tees)', 'Cotton-Modal blend (premium)', 'Egyptian Cotton Pique (luxury polos)'], cert: 'BCI / OEKO-TEX®', gsm: '170–210', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['65% Poly / 35% Cotton TC Poplin (easy care)', 'Cotton-Poly Oxford (casual)', 'Primark Cotton Project Poplin (core)'], cert: 'Primark Cotton Project', gsm: '110–140', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['60% BCI Cotton / 40% Poly Poplin (standard)', 'BCI Cotton Twill (smart casual)'], cert: 'BCI', gsm: '120–140', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['100% BCI Cotton Non-Iron Poplin (standard)', '100% BCI Cotton Oxford (casual-smart)', 'Cotton-Linen blend (summer range)'], cert: 'BCI', gsm: '110–140', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['100% Non-Iron Cotton Fine Twill 60s–80s (formal)', '2-ply BCI Cotton Poplin (premium)', 'Cotton-Modal blend (comfort)'], cert: 'BCI / OEKO-TEX®', gsm: '100–130', icon: '🟢' },
        { name: 'Charles Tyrwhitt', tier: 'premium', fabrics: ['2-ply 100% Cotton Twill (formal)', '2-ply Cotton Oxford (casual)', 'Sea Island Cotton (luxury)'], cert: 'Planet Mark', gsm: '90–120', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['Cotton Chambray (casual)', 'Cotton Oxford (smart casual)', 'Cotton Poplin (formal casual)'], cert: 'Primark Cotton Project', gsm: '120–160', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['100% BCI Cotton Chambray (casual)', 'BCI Cotton Oxford (smart casual)'], cert: 'BCI', gsm: '130–170', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['BCI Cotton Chambray (casual)', 'Linen-Cotton blend (summer)', 'BCI Cotton Oxford (smart)'], cert: 'BCI', gsm: '130–170', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['OCS Organic Cotton Poplin (formal casual)', 'Linen blend (summer)', 'Cotton-TENCEL™ Lyocell blend (premium)'], cert: 'OCS / OEKO-TEX®', gsm: '130–165', icon: '🟢' },
        { name: 'John Lewis / Reiss', tier: 'premium', fabrics: ['100% European Linen (luxury summer)', 'Cotton-Linen Chambray (smart casual)', 'Italian Cotton-Silk blend (luxury)'], cert: 'OEKO-TEX®', gsm: '130–180', icon: '🟢' },
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
        { name: 'Next', tier: 'mid', fabrics: ['55% Wool / 45% Poly Gabardine (formal)', 'Linen-Cotton blend (summer suit)', 'rPET-Wool blend (sustainable range)'], cert: 'RWS (in progress)', gsm: '220–300', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['Poly-Wool 50/50 blend (standard)', 'Boucle knit (fashion)', 'rPET suiting (sustainable range)'], cert: 'None', gsm: '200–280', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['100% Wool Gabardine Merino (formal)', 'Wool-Cashmere blend (luxury)', 'Linen-Wool blend (summer)'], cert: 'RWS wool', gsm: '240–320', icon: '🟢' },
        { name: 'John Lewis', tier: 'premium', fabrics: ['Italian Wool blend (tailored)', 'Linen-Wool Hopsack (summer)', 'Cashmere-Wool blend (luxury)'], cert: 'OEKO-TEX®', gsm: '200–280', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['50/50 Cotton-Poly French Terry (standard hoodies)', 'Polar Fleece 100% Polyester (winter)', 'Primark Cotton Brushed Terry (essential)'], cert: 'Primark Cotton Project', gsm: '280–340', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['60% Cotton / 40% Poly Loopback (standard)', '80% Cotton / 20% Poly French Terry (premium line)', 'BCI Cotton Brushed Fleece (winter)'], cert: 'BCI', gsm: '320–380', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['GRS rPET / OCS Cotton French Terry (eco range)', 'OCS Cotton-Poly Loopback (standard)', 'GOTS Organic Cotton Fleece (responsible edit)'], cert: 'GRS / OCS', gsm: '300–380', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['100% OCS Organic Cotton French Terry (premium)', 'GOTS Organic Cotton Loopback (luxury)', 'Cotton-Modal blend (lightweight)'], cert: 'OCS / OEKO-TEX®', gsm: '340–420', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['99% Cotton / 1% Elastane 3/1 Twill Denim (standard)', 'Stretch Denim 98/2 (skinny fits)', 'OE Cotton Denim (rigid)'], cert: 'Primark Cotton Project', gsm: '300–380', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['BCI Cotton Denim + 1% Elastane (standard)', 'BCI Cotton + REPREVE® rPET Stretch Denim (eco)'], cert: 'BCI', gsm: '300–380', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['98% BCI Ring-Spun Cotton / 2% Elastane (standard)', 'BCI Cotton Non-Stretch (rigid)', 'BCI Cotton Bull Denim (heavyweight)'], cert: 'BCI', gsm: '320–400', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['BCI Stretch Denim 98/2 (standard)', 'Recycled Cotton Denim (Circular Edit)', 'rPET-Cotton blend Denim (eco range)'], cert: 'GRS / BCI', gsm: '300–400', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['REPREVE® rPET / BCI Cotton Stretch Denim (flagship)', 'BCI Organic Cotton Selvedge (premium)', 'TENCEL™-Cotton blend Denim (sustainable)'], cert: 'GRS / BCI', gsm: '340–420', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['87% Virgin Polyester / 13% Elastane (standard)', 'Cotton-Poly blend (yoga/casual)', 'rPET transitioning range (eco)'], cert: 'BCI Cotton (main range)', gsm: '160–200', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['rPET / Nylon performance knit (activewear)', 'GRS rPET Jersey (casual)', 'Nylon-Elastane (leggings)'], cert: 'GRS', gsm: '160–220', icon: '🟡' },
        { name: 'ASOS', tier: 'mid', fabrics: ['GRS rPET Performance Jersey (tops)', 'rPET-Nylon blend (leggings)', 'ECOVERO™ blend (yoga range)'], cert: 'GRS', gsm: '160–220', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['GRS rPET 4-way stretch knit (premium)', 'ECONYL® Nylon (performance)', 'OEKO-TEX® rPET Compression fabric (sport)'], cert: 'GRS / OEKO-TEX®', gsm: '170–240', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['80% Virgin Nylon / 20% Elastane (standard)', '80% Polyester / 20% Elastane (budget)'], cert: 'None stated', gsm: '180–220', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['ECONYL® Regenerated Nylon / Elastane (main range)', 'Chlorine-resistant Polyester-Elastane (basics)'], cert: 'GRS', gsm: '180–240', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['ECONYL® Regenerated Nylon + Lycra® (premium swimwear)', 'OEKO-TEX® Nylon-Elastane (certified range)', 'UV50+ rPET-Elastane (sport swim)'], cert: 'GRS / Aquafil certified', gsm: '180–240', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['100% Polyester Satin (formal)', 'Polyester Chiffon (layered styles)', 'Poly-Georgette (draped evening)'], cert: 'None', gsm: '90–130', icon: '🟠' },
        { name: 'ASOS', tier: 'mid', fabrics: ['GRS rPET Satin (responsible edit)', 'ECOVERO™ Crepe (sustainable range)', 'Stretch-Velvet Poly (party)'], cert: 'GRS / FSC®', gsm: '100–180', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['Acetate Satin (cocktail dresses)', 'Silk-blend Charmeuse (eveningwear)', 'TENCEL™-Silk Crepe (eco premium)'], cert: 'OEKO-TEX®', gsm: '100–160', icon: '🟢' },
        { name: 'Reiss', tier: 'premium', fabrics: ['Stretch Crepe (structured eveningwear)', 'Duchess Satin (formal gowns)', 'Jersey-Crepe blend (smart casual)'], cert: 'OEKO-TEX®', gsm: '120–220', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['Poly-Cotton Twill (raincoats)', '100% Polyester Shell (casual jackets)', 'Poly-fill Puffer (winter)'], cert: 'BCI', gsm: '220–320', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['Wool-blend overcoat (classic coat)', 'GRS rPET Shell (outdoor jacket)', 'Wool-Poly Gabardine (trench)'], cert: 'RWS (target 50% by 2025) / GRS', gsm: '280–420', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['RWS Recycled Wool-blend (eco coat)', '100% RWS Wool Melton (classic)', 'Down-proof rPET Shell (puffer)'], cert: 'RWS / OEKO-TEX®', gsm: '320–500', icon: '🟢' },
        { name: 'John Lewis', tier: 'premium', fabrics: ['100% Wool Melton (premium overcoat)', 'Italian Cashmere-Wool blend (luxury)', 'Technical Shell + Down (performance)'], cert: 'RWS / OEKO-TEX®', gsm: '400–700', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['98% Cotton / 2% Elastane Chino Twill (standard)', '100% Cotton Canvas (cargo)', 'Cotton-Poly Twill (school/workwear)'], cert: 'Primark Cotton Project', gsm: '220–280', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['98% BCI Cotton / 2% Elastane Drill (standard chino)', 'BCI Cotton Twill (tailored trouser)', 'Linen-Cotton blend (summer trouser)'], cert: 'BCI', gsm: '240–300', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['100% OCS Organic Cotton Chino (premium)', 'Linen-Cotton blend (summer)', 'TENCEL™-Cotton Twill (sustainable)'], cert: 'OCS / OEKO-TEX®', gsm: '240–300', icon: '🟢' },
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
        { name: 'Asda George', tier: 'budget', fabrics: ['65% Polyester / 35% Cotton Twill (trousers/skirts)', 'Cotton Pique (polo shirts)', 'Poly-Cotton Jersey (PE)'], cert: 'OEKO-TEX 100', gsm: '160–200', icon: '🔴' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['65% Poly / 35% BCI Cotton Twill (uniform)', 'BCI Cotton Pique (polos)'], cert: 'OEKO-TEX 100 + BCI', gsm: '160–195', icon: '🔴' },
        { name: 'Next', tier: 'mid', fabrics: ['Stain-resist 65/35 Poly-Cotton Twill (trousers)', 'Cotton Pique + Teflon (polos)', 'Poly-Cotton Jersey (sweatshirts)'], cert: 'OEKO-TEX 100', gsm: '170–200', icon: '🟡' },
        { name: 'M&S', tier: 'mid', fabrics: ['Teflon-coated Poly-Cotton Twill (trousers)', 'Cotton-Poly Jersey (sweatshirts)', 'Cotton Pique + Teflon (polos)'], cert: 'OEKO-TEX 100', gsm: '175–210', icon: '🟡' },
        { name: 'John Lewis', tier: 'premium', fabrics: ['BCI Cotton-rich Twill + Teflon (trousers)', 'GOTS Cotton Pique (polos)', 'BCI Cotton Jersey (sweatshirts)'], cert: 'OEKO-TEX 100 + BCI', gsm: '180–220', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['100% Cotton Interlock (standard)', 'Cotton-Modal blend (premium basics)', 'Primark Cotton Project Jersey (essentials)'], cert: 'OEKO-TEX 100', gsm: '160–200', icon: '🟠' },
        { name: "Sainsbury's TU", tier: 'budget', fabrics: ['100% BCI Cotton Interlock (standard)', 'Cotton-Modal blend (soft range)'], cert: 'OEKO-TEX 100 + BCI', gsm: '160–200', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['100% BCI Cotton Interlock (standard sleepsuits)', 'OCS Cotton Jersey (essentials)', 'Cotton-Bamboo blend (comfort range)'], cert: 'OEKO-TEX 100 + BCI', gsm: '165–210', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['GOTS Organic Cotton Interlock (standard)', 'OCS Cotton-Modal blend (premium)', 'Organic Cotton Velour (winter)'], cert: 'GOTS + OEKO-TEX 100', gsm: '170–215', icon: '🟢' },
        { name: 'John Lewis', tier: 'premium', fabrics: ['100% GOTS Organic Cotton Interlock (standard)', 'GOTS Cotton-Bamboo blend (premium)', 'Organic Cotton Velour (winter)'], cert: 'GOTS', gsm: '170–220', icon: '🟢' },
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
        { name: 'Primark', tier: 'budget', fabrics: ['100% Cotton Jersey (all-season)', 'Cotton Flannel (winter)', 'Cotton-Poly blend (budget range)'], cert: 'Primark Cotton Project', gsm: '150–250', icon: '🟠' },
        { name: 'Next', tier: 'mid', fabrics: ['100% BCI Cotton Flannel (winter)', 'BCI Cotton Jersey (summer)', 'Satin Weave Cotton (luxury PJs)'], cert: 'BCI', gsm: '160–280', icon: '🟡' },
        { name: 'M&S', tier: 'premium', fabrics: ['OCS Organic Cotton Brushed Cotton (winter)', 'Cotton Satin (luxury PJs)', 'GOTS Cotton Modal (premium soft)'], cert: 'OCS / OEKO-TEX®', gsm: '150–260', icon: '🟢' },
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
