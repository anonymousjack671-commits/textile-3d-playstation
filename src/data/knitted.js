export const knittedFabrics = [
  {
    id: 'plain-jersey',
    name: "Plain Jersey / Single Jersey",
    category: "Weft Knit — Basic",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "All needles on one bed knit on every course. Face shows vertical V-shaped loops (technical face); reverse shows horizontal semicircular loops (technical back). Fabric curls at edges. Runs vertically on face; ladders on back. Made on single-bed circular or flat knitting machine.",
    uses: "T-shirts, casual tops, leggings, base layers, underwear, sportswear, dresses, socks",
    gsmMin: 120, gsmMax: 220,
    gsmDisplay: "120–220 GSM (T-shirt: 140–180 | Heavy jersey: 180–220)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30–40°C"},
      {icon:"♨️", text:"Tumble dry low or air dry flat to prevent stretching"},
      {icon:"🔥", text:"Low iron on reverse; do not over-stretch when wet"},
      {icon:"🚫", text:"Avoid high heat; can cause shrinkage in cotton jersey"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹80–200/m", note:"T-shirts, casual"},
      {fiber:"Polyester", range:"₹60–150/m", note:"Sportswear"},
      {fiber:"Rayon/Viscose", range:"₹100–250/m", note:"Drapy tops"},
      {fiber:"Cotton/Elastane", range:"₹120–280/m", note:"Stretch jersey"},
      {fiber:"Bamboo", range:"₹180–450/m", note:"Eco soft jersey"},
      {fiber:"Modal", range:"₹150–400/m", note:"Luxury feel"}
    ],
    extras: {
      courses: "28–40 courses per inch",
      wales: "24–36 wales per inch",
      stretch: "50–100% width; 25–50% length",
      shrinkage: "5–10% (cotton)",
      season: ["Spring/Summer", "All Season"],
      tradeNames: "Single Jersey, Jersey, T-shirt Fabric"
    }
  },
  {
    id: 'rib-knit',
    name: "Rib Knit",
    category: "Weft Knit — Basic",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "Knit and purl stitches alternate in vertical columns (wales). Requires two needle beds. Common: 1×1 rib (alternate K/P), 2×2 rib, 2×1 rib. The knit wales appear on both faces — fabric looks the same on both sides. Very high horizontal elasticity.",
    uses: "Neckbands, cuffs, waistbands, polo collars, sweater trims, form-fitting tops, athletic wear, ribbed dresses",
    gsmMin: 150, gsmMax: 350,
    gsmDisplay: "150–350 GSM (Neckbands: 150–200 | Heavy rib: 250–350)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30–40°C; gentle cycle"},
      {icon:"🪴", text:"Air dry flat — never hang (ribs stretch out permanently)"},
      {icon:"🔥", text:"Low iron; stretch gently to shape while damp"},
      {icon:"🚫", text:"No high-heat tumble dry for cotton/wool rib"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹100–250/m", note:"Casualwear"},
      {fiber:"Cotton/Elastane", range:"₹130–300/m", note:"Form-fitting tops"},
      {fiber:"Wool", range:"₹400–1200/m", note:"Knitwear"},
      {fiber:"Acrylic", range:"₹80–180/m", note:"Budget knitwear"},
      {fiber:"Bamboo/Cotton", range:"₹200–500/m", note:"Eco rib"},
      {fiber:"Cashmere blend", range:"₹800–3000/m", note:"Luxury knitwear"}
    ],
    extras: {
      courses: "20–32 courses per inch",
      wales: "20–28 wales per inch (after relaxation)",
      stretch: "100–200% width",
      shrinkage: "5–8%",
      season: ["Autumn/Winter", "All Season"],
      tradeNames: "1×1 Rib, 2×2 Rib, Milano Rib, Ribbing Fabric"
    }
  },
  {
    id: 'interlock-knit',
    name: "Interlock Knit",
    category: "Weft Knit — Basic",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "Two interlocked rib structures knitted simultaneously on two needle beds, with needles of one bed between needles of other. Both faces show V-loops (knit face). Smooth on both sides. Stable, does not curl. Heavier than jersey.",
    uses: "Polo shirts, baby wear, quality T-shirts, dresses, nightwear, children's clothing, quality knitwear",
    gsmMin: 160, gsmMax: 280,
    gsmDisplay: "160–280 GSM (Baby wear: 160–200 | Premium polo: 200–250)",
    washCare: [
      {icon:"🌊", text:"Machine wash 40°C"},
      {icon:"♨️", text:"Tumble dry medium or air dry flat"},
      {icon:"🔥", text:"Medium iron; steam friendly"},
      {icon:"🚫", text:"Avoid over-drying (can become stiff)"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹120–280/m", note:"Baby wear, polo"},
      {fiber:"Organic cotton", range:"₹200–500/m", note:"Eco premium"},
      {fiber:"Polyester", range:"₹80–180/m", note:"Activewear"},
      {fiber:"Cotton/Modal", range:"₹180–450/m", note:"Premium daily wear"},
      {fiber:"Bamboo", range:"₹220–550/m", note:"Eco luxury"},
      {fiber:"Wool blend", range:"₹400–1000/m", note:"Merino interlock"}
    ],
    extras: {
      courses: "24–36 courses per inch",
      wales: "20–32 wales per inch",
      stretch: "50–80% width; 20–40% length",
      shrinkage: "4–7%",
      season: ["All Season"],
      tradeNames: "Interlock, Double Knit Jersey, Polycotton Interlock"
    }
  },
  {
    id: 'purl-knit',
    name: "Purl Knit",
    category: "Weft Knit — Basic",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "Knit and purl stitches alternate in horizontal rows (courses) instead of vertical columns. Both sides show purl/reverse loops. Greater lengthwise stretch than width. Does not curl. Can be made on flat machines with special needle beds.",
    uses: "Sweaters, baby wear, casual knitwear, blankets, accessories, textured outerwear",
    gsmMin: 200, gsmMax: 450,
    gsmDisplay: "200–450 GSM (Baby knitwear: 200–280 | Heavy sweater: 350–450)",
    washCare: [
      {icon:"🤲", text:"Hand wash cold–lukewarm; gentle detergent"},
      {icon:"🌊", text:"Wool cycle on machine (30°C max for wool)"},
      {icon:"🪴", text:"Dry flat on towel; reshape while damp"},
      {icon:"🚫", text:"No tumble dry; no wringing; no hanging"}
    ],
    prices: [
      {fiber:"Wool", range:"₹400–1500/m", note:"Sweaters, knitwear"},
      {fiber:"Cotton", range:"₹150–350/m", note:"Baby wear"},
      {fiber:"Acrylic", range:"₹80–200/m", note:"Affordable knitwear"},
      {fiber:"Cashmere", range:"₹2000–10000/m", note:"Luxury knitwear"},
      {fiber:"Alpaca blend", range:"₹800–3000/m", note:"Natural fiber knit"},
      {fiber:"Mohair blend", range:"₹600–2500/m", note:"Fluffy knitwear"}
    ],
    extras: {
      courses: "16–28 per inch",
      wales: "16–24 per inch",
      stretch: "30–60% length; 40–80% width",
      shrinkage: "5–12% (wool can felt if mishandled)",
      season: ["Autumn/Winter"],
      tradeNames: "Purl Knit, Links-Links, Moss Knit"
    }
  },
  {
    id: 'tuck-stitch',
    name: "Tuck Stitch",
    category: "Weft Knit — Derivative",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "Some needles hold loops for one or more courses without knitting (tucking). When the needle eventually knits, the accumulated loops form a raised tuck. Creates textured, open, or patterned effects depending on tuck arrangement. Wider than base fabric.",
    uses: "Textured tops, polo shirts, athletic polos, eyelet-look casual wear, mesh-effect fabrics",
    gsmMin: 130, gsmMax: 250,
    gsmDisplay: "130–250 GSM (Casual top: 140–190 | Polo: 170–220)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30–40°C"},
      {icon:"♨️", text:"Tumble dry low or air dry flat"},
      {icon:"🔥", text:"Low iron; do not flatten tuck texture"},
      {icon:"🚫", text:"Avoid stretching tuck loops when wet"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹100–240/m", note:"Casual wear"},
      {fiber:"Polyester", range:"₹70–160/m", note:"Sportswear"},
      {fiber:"Cotton/Poly", range:"₹90–200/m", note:"Polos"},
      {fiber:"Bamboo", range:"₹180–420/m", note:"Eco knits"},
      {fiber:"Rayon", range:"₹110–250/m", note:"Drapy tuck fabric"},
      {fiber:"Modal blend", range:"₹150–350/m", note:"Soft tuck"}
    ],
    extras: {
      stretch: "60–100% width",
      shrinkage: "4–7%",
      season: ["Spring/Summer", "All Season"],
      tradeNames: "Tuck Stitch, Pikeet, Eyelet Knit"
    }
  },
  {
    id: 'fleece-french-terry',
    name: "Fleece / French Terry",
    category: "Weft Knit — Derivative",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "Ground jersey + extra loop yarn knitted in. French terry: loops on technical back, smooth on face. Fleece: loops are brushed/napped (raising). Three-thread fleece: ground + loop + tuck thread for stability. Very soft after brushing.",
    uses: "Sweatshirts, hoodies, tracksuits, joggers, activewear, baby wear, blankets, casual wear",
    gsmMin: 200, gsmMax: 450,
    gsmDisplay: "200–450 GSM (Lightweight French terry: 200–280 | Heavy fleece: 300–450)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30–40°C (inside out to prevent pilling)"},
      {icon:"♨️", text:"Tumble dry low-medium; shake to re-fluff"},
      {icon:"🔥", text:"Low iron on reverse; avoid direct iron on brushed face"},
      {icon:"🚫", text:"Avoid washing with rough fabrics (velcro, denim) — pilling"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹150–350/m", note:"Hoodies, sweatshirts"},
      {fiber:"Cotton/Polyester", range:"₹120–280/m", note:"Standard fleece"},
      {fiber:"Polyester", range:"₹80–200/m", note:"Polar fleece, activewear"},
      {fiber:"Organic cotton", range:"₹220–500/m", note:"Eco fleece"},
      {fiber:"Bamboo blend", range:"₹200–480/m", note:"Eco-premium"},
      {fiber:"Modal/Cotton", range:"₹180–420/m", note:"Luxury fleece"}
    ],
    extras: {
      stretch: "50–90% width",
      shrinkage: "5–10% (cotton fleece)",
      season: ["Autumn/Winter"],
      tradeNames: "French Terry, Sweatshirt Fabric, Polar Fleece, Loopback"
    }
  },
  {
    id: 'jacquard-weft-knit',
    name: "Jacquard Weft Knit",
    category: "Weft Knit — Complex",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "Uses electronic needle selection on circular or flat machines to create multicolor patterns. Types: single jersey jacquard (floats on back), double jersey jacquard (no floats), blister/blistered jacquard. Pattern knitted in, not printed.",
    uses: "Patterned sweaters (Fair Isle, intarsia), fashion knitwear, socks, sportswear, accessories",
    gsmMin: 200, gsmMax: 450,
    gsmDisplay: "200–450 GSM (Fashion knit: 220–320 | Heavy patterned: 350–450)",
    washCare: [
      {icon:"🤲", text:"Hand wash cold for wool/cashmere versions"},
      {icon:"🌊", text:"Wool cycle 30°C or dry clean"},
      {icon:"🪴", text:"Dry flat; never wring or hang"},
      {icon:"🔥", text:"Low steam iron on reverse"},
      {icon:"🚫", text:"No bleach; no hot wash"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹200–500/m", note:"Fashion knit tops"},
      {fiber:"Wool", range:"₹500–2500/m", note:"Fair Isle sweaters"},
      {fiber:"Acrylic", range:"₹100–250/m", note:"Budget knitwear"},
      {fiber:"Cashmere", range:"₹2000–12000/m", note:"Luxury knitwear"},
      {fiber:"Merino wool", range:"₹600–2000/m", note:"Premium sportswear"},
      {fiber:"Cotton/Silk", range:"₹400–1200/m", note:"Luxury fashion"}
    ],
    extras: {
      stretch: "40–80% width",
      shrinkage: "5–10%",
      season: ["Autumn/Winter"],
      tradeNames: "Jacquard Knit, Fair Isle, Intarsia, Blistered Jacquard"
    }
  },
  {
    id: 'double-knit',
    name: "Double Knit",
    category: "Weft Knit — Complex",
    type: "weft",
    badge: "badge-knitted",
    badgeText: "WEFT KNIT",
    construction: "Two layers of single jersey knitted simultaneously and connected by interlooping. Both faces smooth. Thick, stable, minimal stretch compared to single jersey. Edges do not curl. Often produced on rib or interlock machines with modification.",
    uses: "Structured dresses, blazers, suiting, coats, professional wear, tailored knit garments",
    gsmMin: 250, gsmMax: 400,
    gsmDisplay: "250–400 GSM (Knit suits: 270–350 | Coats: 320–400)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30°C gentle; or dry clean"},
      {icon:"♨️", text:"Air dry flat; tumble dry low only for poly versions"},
      {icon:"🔥", text:"Medium iron with press cloth"},
      {icon:"🚫", text:"Avoid aggressive wringing"}
    ],
    prices: [
      {fiber:"Polyester", range:"₹150–350/m", note:"Budget suit knit"},
      {fiber:"Wool blend", range:"₹500–2000/m", note:"Knit suiting"},
      {fiber:"Cotton", range:"₹200–450/m", note:"Structured dresses"},
      {fiber:"Viscose blend", range:"₹180–400/m", note:"Fashion knit"},
      {fiber:"Nylon", range:"₹200–450/m", note:"Activewear"},
      {fiber:"Cashmere wool", range:"₹1500–6000/m", note:"Luxury knit coat"}
    ],
    extras: {
      stretch: "30–60% width",
      shrinkage: "3–6%",
      season: ["Autumn/Winter", "All Season"],
      tradeNames: "Double Knit, Punto Roma, Scuba Fabric, Knit Suiting"
    }
  },
  {
    id: 'tricot',
    name: "Tricot (Warp Knit)",
    category: "Warp Knit — Basic",
    type: "warp",
    badge: "badge-knitted",
    badgeText: "WARP KNIT",
    construction: "Simplest warp knit. Yarns run lengthwise in a series of zig-zag loops connecting wales. Produced on tricot warp knitting machines. Front bar gives lapping pattern; back bar provides overlap. Run resistant; very stable. Smooth face, crosswise ribs on back.",
    uses: "Lingerie, underwear, swimwear linings, sportswear, sleepwear, sheer fabrics, lining fabrics",
    gsmMin: 60, gsmMax: 180,
    gsmDisplay: "60–180 GSM (Lingerie: 60–100 | Sportswear lining: 80–140)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30–40°C; delicate cycle"},
      {icon:"🌀", text:"Mesh bag recommended for delicate tricot"},
      {icon:"🪴", text:"Air dry; low tumble dry only for polyester"},
      {icon:"🔥", text:"Low iron; polyester tricot — very low heat"},
      {icon:"🚫", text:"No bleach; avoid high heat"}
    ],
    prices: [
      {fiber:"Nylon", range:"₹80–200/m", note:"Lingerie"},
      {fiber:"Polyester", range:"₹60–160/m", note:"Lining, sportswear"},
      {fiber:"Nylon/Elastane", range:"₹120–280/m", note:"Stretch lingerie"},
      {fiber:"Silk", range:"₹400–1200/m", note:"Luxury underwear"},
      {fiber:"Rayon", range:"₹100–240/m", note:"Soft linings"},
      {fiber:"Microfiber poly", range:"₹80–200/m", note:"Ultra-soft lingerie"}
    ],
    extras: {
      stretch: "20–50% width; more stable than weft knit",
      shrinkage: "2–4%",
      season: ["All Season"],
      tradeNames: "Tricot, Nylon Tricot, Athletic Mesh, Warp Knit Lining"
    }
  },
  {
    id: 'raschel-knit',
    name: "Raschel Knit",
    category: "Warp Knit — Complex",
    type: "warp",
    badge: "badge-knitted",
    badgeText: "WARP KNIT",
    construction: "Produced on Raschel machines with many guide bars and latch needles. Wide range of structures from dense to very open/lace. Can incorporate multiple yarn types, thick/thin yarns. Very versatile — from net to heavy fabric.",
    uses: "Lace fabrics, net curtains, power net (foundation garments), shoe fabric, sports mesh, lingerie, decorative trim",
    gsmMin: 40, gsmMax: 300,
    gsmDisplay: "40–300 GSM (Lace: 40–80 | Power net: 100–160 | Raschel blanket: 200–300)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30°C in mesh bag"},
      {icon:"🤲", text:"Hand wash for lace variants"},
      {icon:"🪴", text:"Air dry flat; lay net/lace on towel"},
      {icon:"🔥", text:"Very low iron; do not iron lace directly"},
      {icon:"🚫", text:"No bleach (yellows nylon); no hot wash"}
    ],
    prices: [
      {fiber:"Nylon", range:"₹100–300/m", note:"Lace, power net"},
      {fiber:"Polyester", range:"₹60–200/m", note:"Raschel blanket, net"},
      {fiber:"Cotton", range:"₹150–400/m", note:"Decorative lace"},
      {fiber:"Nylon/Elastane", range:"₹150–400/m", note:"Power net, lingerie"},
      {fiber:"Metallic thread", range:"₹200–600/m", note:"Festive lace"},
      {fiber:"Viscose", range:"₹150–350/m", note:"Fashion lace"}
    ],
    extras: {
      stretch: "Varies: net (100%+), power net (50–80%)  ",
      shrinkage: "2–5%",
      season: ["All Season"],
      tradeNames: "Raschel Lace, Power Net, Athletic Mesh, Net Fabric"
    }
  },
  {
    id: 'milanese-warp-knit',
    name: "Milanese Warp Knit",
    category: "Warp Knit — Complex",
    type: "warp",
    badge: "badge-knitted",
    badgeText: "WARP KNIT",
    construction: "Two sets of guide bars lapping in opposite diagonal directions across all wales. Creates a diagonal interlacing which produces a very fine, smooth, run-resistant fabric. More costly to produce; run on specialized machines. Known for superior quality.",
    uses: "Premium lingerie, hosiery, gloves, high-quality linings, luxury knitwear",
    gsmMin: 60, gsmMax: 150,
    gsmDisplay: "60–150 GSM (Fine lingerie: 60–100 | Quality lining: 100–150)",
    washCare: [
      {icon:"🤲", text:"Hand wash cold–lukewarm"},
      {icon:"🌀", text:"Delicate machine cycle 30°C in mesh bag"},
      {icon:"🪴", text:"Air dry flat or hang carefully"},
      {icon:"🔥", text:"Very low iron or steam from distance"},
      {icon:"🚫", text:"No tumble dry; no bleach"}
    ],
    prices: [
      {fiber:"Silk", range:"₹500–2000/m", note:"Luxury lingerie"},
      {fiber:"Nylon", range:"₹150–400/m", note:"Standard Milanese"},
      {fiber:"Nylon/Silk blend", range:"₹400–1500/m", note:"Premium lingerie"},
      {fiber:"Microfiber nylon", range:"₹200–500/m", note:"Modern Milanese"},
      {fiber:"Polyester", range:"₹100–250/m", note:"Budget Milanese"},
      {fiber:"Cotton", range:"₹150–350/m", note:"Comfort lining"}
    ],
    extras: {
      stretch: "30–60%",
      shrinkage: "2–3%",
      season: ["All Season"],
      tradeNames: "Milanese, High-Quality Warp Knit, Fine Tricot"
    }
  },
  {
    id: 'warp-knit-velour',
    name: "Warp Knit Velour",
    category: "Warp Knit — Complex",
    type: "warp",
    badge: "badge-knitted",
    badgeText: "WARP KNIT",
    construction: "Warp knit base (usually tricot) with loop yarn that is sheared/cut after knitting. Produces short, dense, uniform pile on face. Very stable compared to woven velvet; excellent dimensional stability. Can be made from synthetic fibers efficiently.",
    uses: "Tracksuits, casual wear, velour robes, upholstery, toy fabric, plush soft furnishings",
    gsmMin: 180, gsmMax: 400,
    gsmDisplay: "180–400 GSM (Apparel velour: 200–300 | Upholstery: 300–400)",
    washCare: [
      {icon:"🌊", text:"Machine wash 30–40°C; inside out"},
      {icon:"♨️", text:"Tumble dry low; shake to restore pile"},
      {icon:"🔥", text:"Do not iron pile; steam from back if needed"},
      {icon:"🚫", text:"Avoid washing with rough fabrics; avoid fabric softener for function use"}
    ],
    prices: [
      {fiber:"Polyester", range:"₹120–300/m", note:"Tracksuits, robes"},
      {fiber:"Cotton", range:"₹200–500/m", note:"Luxury velour"},
      {fiber:"Nylon", range:"₹150–350/m", note:"Athletic velour"},
      {fiber:"Polyester/Spandex", range:"₹180–400/m", note:"Stretch velour"},
      {fiber:"Microfiber", range:"₹150–380/m", note:"Ultra-soft velour"},
      {fiber:"Bamboo blend", range:"₹250–600/m", note:"Eco velour"}
    ],
    extras: {
      stretch: "40–70%",
      shrinkage: "3–5%",
      season: ["Autumn/Winter"],
      tradeNames: "Velour, Velvet Knit, Plush Fabric"
    }
  }
];
