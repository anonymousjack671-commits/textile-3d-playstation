export const wovenFabrics = [
  {
    id: 'plain-weave',
    name: "Plain Weave",
    category: "Basic Weave",
    type: "basic",
    badge: "badge-woven",
    badgeText: "WOVEN",
    construction: "Each weft yarn passes alternately over and under each warp yarn. The simplest interlacing pattern; repeat is 2×2. Produced on any loom type. Maximum interlacing points = maximum firmness.",
    uses: "Shirting, linings, muslin, calico, taffeta, chiffon, organza, georgette, poplin, voile, canvas",
    gsmMin: 30, gsmMax: 400,
    gsmDisplay: "30–400 GSM (Chiffon: 30–50 | Voile: 40–70 | Poplin: 100–140 | Canvas: 300–400)",
    washCare: [
      {icon:"🌊", text:"Machine wash warm (40°C) for most; cold (30°C) for silk/rayon"},
      {icon:"🌀", text:"Gentle cycle for delicate versions"},
      {icon:"♨️", text:"Tumble dry low or air dry flat"},
      {icon:"🔥", text:"Medium iron; steam press recommended"},
      {icon:"🚫", text:"No wringing; avoid bleach on dyed variants"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹40–120/m", note:"Shirting/poplin"},
      {fiber:"Polyester", range:"₹25–80/m", note:"Linings, poplin"},
      {fiber:"Silk", range:"₹400–1500/m", note:"Taffeta, habotai"},
      {fiber:"Linen", range:"₹180–500/m", note:"Summer shirting"},
      {fiber:"Rayon/Viscose", range:"₹60–160/m", note:"Voile, georgette"},
      {fiber:"Wool", range:"₹350–900/m", note:"Gabardine base"}
    ],
    extras: {
      threadCount: "60×60 to 200×200 threads/inch",
      width: "44–60 inches standard",
      stretch: "0–5% (crosswise)",
      shrinkage: "2–5% (pre-wash recommended)",
      season: ["All Season"],
      tradeNames: "Muslin, Calico, Taffeta, Organza, Chiffon, Poplin, Canvas, Duck, Lawn"
    },
    structure: {
      type: 'weave',
      pattern: [[1, 0], [0, 1]],
      warpColor: '#8b5cf6',
      weftColor: '#ec4899'
    }
  },
  {
    id: 'twill-weave',
    name: "Twill Weave",
    category: "Basic Weave",
    type: "basic",
    badge: "badge-woven",
    badgeText: "WOVEN",
    construction: "Weft passes over 2+ warp yarns then under 1+, with each row offset to create a diagonal rib. Common types: 2/1 twill (denim), 3/1 twill, 2/2 twill (gabardine). Direction: S-twill (left) or Z-twill (right).",
    uses: "Denim, gabardine, drill, chino, suiting, upholstery, uniform fabric, tweed",
    gsmMin: 120, gsmMax: 450,
    gsmDisplay: "120–450 GSM (Chino: 180–220 | Denim: 250–400 | Suiting: 200–300)",
    washCare: [
      {icon:"🌊", text:"Machine wash warm (40°C); denim cold wash to preserve color"},
      {icon:"🔄", text:"Turn inside out for denim to prevent fading"},
      {icon:"♨️", text:"Tumble dry medium; hang dry for suiting"},
      {icon:"🔥", text:"Medium-hot iron on reverse; use press cloth for wool"},
      {icon:"🚫", text:"Avoid bleach; dry clean for high-end wool twill"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹80–220/m", note:"Denim, drill, chino"},
      {fiber:"Polyester/Cotton", range:"₹60–160/m", note:"Uniform fabric"},
      {fiber:"Wool", range:"₹500–2000/m", note:"Gabardine, suiting"},
      {fiber:"Silk", range:"₹600–2000/m", note:"Silk twill scarves"},
      {fiber:"Linen", range:"₹200–600/m", note:"Summer trousers"},
      {fiber:"Synthetic blends", range:"₹100–300/m", note:"Stretch twill"}
    ],
    extras: {
      threadCount: "Typically 80×60 to 140×80",
      width: "44–60 inches",
      stretch: "5–10% (bias direction)",
      shrinkage: "3–6%",
      season: ["Autumn/Winter", "All Season"],
      tradeNames: "Denim, Gabardine, Drill, Chino, Serge, Cavalry Twill, Tweed"
    },
    structure: {
      type: 'weave',
      pattern: [[1, 1, 0], [0, 1, 1], [1, 0, 1]], // 2/1 twill
      warpColor: '#3b82f6', // blue
      weftColor: '#94a3b8'  // slate
    }
  },
  {
    id: 'satin-weave',
    name: "Satin / Sateen Weave",
    category: "Basic Weave",
    type: "basic",
    badge: "badge-woven",
    badgeText: "WOVEN",
    construction: "Warp floats over 4+ weft yarns (satin) or weft floats over 4+ warp yarns (sateen). Long floats reflect light uniformly. Minimum interlacing = maximum luster. Common: 4-harness, 5-harness (duchess), 8-harness.",
    uses: "Evening wear, bridal, linings, lingerie, bedding (sateen), drapery, ties, ribbons",
    gsmMin: 60, gsmMax: 300,
    gsmDisplay: "60–300 GSM (Charmeuse: 60–100 | Duchess Satin: 180–250 | Sateen bedding: 120–200)",
    washCare: [
      {icon:"🤲", text:"Hand wash cold (25–30°C) or dry clean recommended"},
      {icon:"🌀", text:"Delicate/silk cycle if machine washing; mesh bag"},
      {icon:"🪴", text:"Lay flat to dry; avoid wringing"},
      {icon:"🔥", text:"Low iron on reverse; use damp cloth"},
      {icon:"🚫", text:"No bleach, no tumble dry for silk satin"}
    ],
    prices: [
      {fiber:"Silk", range:"₹600–3000/m", note:"Charmeuse, duchess"},
      {fiber:"Polyester", range:"₹80–250/m", note:"Bridal, lining"},
      {fiber:"Cotton (sateen)", range:"₹150–400/m", note:"Bedding, apparel"},
      {fiber:"Acetate", range:"₹200–500/m", note:"Lingerie, lining"},
      {fiber:"Nylon", range:"₹120–300/m", note:"Athletic linings"},
      {fiber:"Rayon", range:"₹120–350/m", note:"Affordable satin"}
    ],
    extras: {
      threadCount: "200–600 thread count (sateen bedding)",
      width: "44–58 inches",
      stretch: "2–5%",
      shrinkage: "3–8% (silk); 1–2% (polyester)",
      season: ["Autumn/Winter", "Spring"],
      tradeNames: "Charmeuse, Duchess Satin, Bridal Satin, Sateen, Baronet Satin"
    },
    structure: {
      type: 'weave',
      pattern: [
        [1, 1, 1, 1, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 1, 1, 1, 1],
        [1, 1, 0, 1, 1]
      ], // 5-end satin
      warpColor: '#fcd34d', // gold
      weftColor: '#f59e0b'  // dark gold
    }
  },
  {
    id: 'basket-weave',
    name: "Basket / Matt Weave",
    category: "Derived — Plain",
    type: "derived",
    badge: "badge-woven",
    badgeText: "WOVEN",
    construction: "Multiple warp and weft yarns are treated as one unit in plain weave. 2×2 basket (Oxford), 3×3, 4×4. Produces a checkerboard-like surface. Less firm than plain weave; snags more easily.",
    uses: "Oxford shirting, hopsack suiting, decorative fabric, loose casual shirts, sportswear",
    gsmMin: 100, gsmMax: 250,
    gsmDisplay: "100–250 GSM (Oxford shirting: 120–160 | Hopsack suit: 180–240)",
    washCare: [
      {icon:"🌊", text:"Machine wash 40°C; cold for blends"},
      {icon:"♨️", text:"Tumble dry low"},
      {icon:"🔥", text:"Medium iron"},
      {icon:"🚫", text:"Avoid snags; do not stretch when wet"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹80–180/m", note:"Oxford shirts"},
      {fiber:"Polyester/Cotton", range:"₹60–140/m", note:"Casual wear"},
      {fiber:"Linen", range:"₹200–500/m", note:"Hopsack suiting"},
      {fiber:"Wool", range:"₹400–1200/m", note:"Hopsack jackets"},
      {fiber:"Silk", range:"₹500–1500/m", note:"Luxury shirting"},
      {fiber:"Rayon", range:"₹80–200/m", note:"Dress fabric"}
    ],
    extras: {
      threadCount: "Typically 60×60",
      width: "44–60 inches",
      stretch: "3–6%",
      shrinkage: "4–7%",
      season: ["Spring/Summer", "All Season"],
      tradeNames: "Oxford Cloth, Hopsack, Matt Weave, Royal Oxford"
    },
    structure: {
      type: 'weave',
      pattern: [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]], // 2x2 basket
      warpColor: '#10b981', // green
      weftColor: '#059669'  // dark green
    }
  },
  {
    id: 'rib-weave',
    name: "Rib Weave",
    category: "Derived — Plain",
    type: "derived",
    badge: "badge-woven",
    badgeText: "WOVEN",
    construction: "Variation of plain weave where extra warp or weft yarns create prominent ridges. Warp rib: ribs run lengthwise (thicker weft). Weft rib: ribs run crosswise (thicker warp). Examples: Faille, Bengaline, Grosgrain, Ottoman.",
    uses: "Ribbons, waistbands, ties, dress fabric, suiting, formal wear, coat trim",
    gsmMin: 80, gsmMax: 300,
    gsmDisplay: "80–300 GSM (Grosgrain ribbon: 100–150 | Bengaline suiting: 200–280)",
    washCare: [
      {icon:"🤲", text:"Hand wash or gentle cycle 30°C"},
      {icon:"🪴", text:"Air dry flat; do not twist"},
      {icon:"🔥", text:"Steam iron on reverse"},
      {icon:"🚫", text:"Dry clean for structured rib weave garments"}
    ],
    prices: [
      {fiber:"Silk", range:"₹500–2000/m", note:"Faille, bengaline"},
      {fiber:"Polyester", range:"₹100–300/m", note:"Grosgrain, ottoman"},
      {fiber:"Cotton", range:"₹80–200/m", note:"Ribbed shirting"},
      {fiber:"Wool", range:"₹400–1000/m", note:"Suiting fabric"},
      {fiber:"Rayon", range:"₹120–300/m", note:"Dress fabric"},
      {fiber:"Acetate", range:"₹200–500/m", note:"Ribbons, linings"}
    ],
    extras: {
      threadCount: "Varies by rib height",
      width: "44–60 inches",
      stretch: "3–8% crosswise",
      shrinkage: "3–5%",
      season: ["All Season"],
      tradeNames: "Faille, Bengaline, Grosgrain, Ottoman, Repp"
    },
    structure: {
      type: 'weave',
      pattern: [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1]
      ],
      warpColor: '#8b5cf6', // purple
      weftColor: '#c8a96e'  // gold
    }
  },
  {
    id: 'herringbone-weave',
    name: "Herringbone Weave",
    category: "Derived — Twill",
    type: "derived",
    badge: "badge-woven",
    badgeText: "WOVEN",
    construction: "Broken twill where direction reverses at regular intervals creating a V-shaped zig-zag (like herring fish bones). Built on 2/2 or 3/1 twill base. Can be woven in two colors for high contrast pattern.",
    uses: "Suits, jackets, overcoats, trousers, blazers, upholstery, scarves",
    gsmMin: 150, gsmMax: 400,
    gsmDisplay: "150–400 GSM (Suiting: 200–280 | Overcoating: 300–400)",
    washCare: [
      {icon:"🧴", text:"Dry clean recommended for wool herringbone"},
      {icon:"🌊", text:"Machine wash 30°C for cotton/synthetic versions"},
      {icon:"🔥", text:"Warm iron with press cloth; steam press"},
      {icon:"🚫", text:"No wringing; avoid over-washing"}
    ],
    prices: [
      {fiber:"Wool", range:"₹600–2500/m", note:"Suiting, overcoating"},
      {fiber:"Cotton", range:"₹120–350/m", note:"Casual jackets"},
      {fiber:"Polyester", range:"₹100–250/m", note:"Budget suiting"},
      {fiber:"Wool/Poly blend", range:"₹300–1000/m", note:"Mid-range suits"},
      {fiber:"Linen", range:"₹250–600/m", note:"Summer blazers"},
      {fiber:"Silk", range:"₹800–2500/m", note:"Luxury suiting"}
    ],
    extras: {
      threadCount: "80–120 threads/inch",
      width: "56–60 inches (suiting width)",
      stretch: "5–8%",
      shrinkage: "3–5%",
      season: ["Autumn/Winter"],
      tradeNames: "Herringbone Tweed, Chevron Weave"
    },
    structure: {
      type: 'weave',
      pattern: [
        [1, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 1],
        [1, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 0]
      ], // Simplified Herringbone
      warpColor: '#1e293b', // dark slate
      weftColor: '#cbd5e1'  // light slate
    }
  },
  {
    id: 'dobby-weave',
    name: "Dobby Weave",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Requires a dobby attachment on the loom to lift individual harnesses independently. Creates small, repeating geometric patterns (dots, diamonds, geometric florals) woven into the fabric. More complex than plain but simpler than jacquard.",
    uses: "Dobby shirting, end-on-end fabric, geometric-patterned dress fabric, curtains, table linen",
    gsmMin: 80, gsmMax: 200,
    gsmDisplay: "80–200 GSM (Shirting: 100–140 | Dress fabric: 120–180)",
    washCare: [
      {icon:"🌊", text:"Machine wash 40°C"},
      {icon:"♨️", text:"Tumble dry low"},
      {icon:"🔥", text:"Medium iron"},
      {icon:"🚫", text:"Gentle on raised dobby patterns to avoid crushing"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹120–300/m", note:"Premium shirting"},
      {fiber:"Polyester", range:"₹80–180/m", note:"Dress fabric"},
      {fiber:"Cotton/Polyester", range:"₹100–220/m", note:"Workwear shirting"},
      {fiber:"Linen", range:"₹250–600/m", note:"Table linen"},
      {fiber:"Silk", range:"₹700–2000/m", note:"Luxury shirts"},
      {fiber:"Bamboo", range:"₹200–500/m", note:"Eco shirting"}
    ],
    extras: {
      threadCount: "80–200 threads/inch",
      width: "44–60 inches",
      stretch: "2–5%",
      shrinkage: "2–4%",
      season: ["All Season"],
      tradeNames: "Dobby Shirting, End-on-End, Birdseye"
    },
    structure: {
      type: 'weave',
      pattern: [
        [1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1]
      ], // Diamond dobby
      warpColor: '#3b82f6', // blue
      weftColor: '#60a5fa'  // light blue
    }
  },
  {
    id: 'jacquard-weave',
    name: "Jacquard Weave",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Uses a Jacquard loom mechanism to control each warp thread individually. Enables complex, pictorial or large-scale patterns — florals, tapestry motifs, damask. Pattern is integral to fabric structure, not printed.",
    uses: "Brocade, damask, tapestry, upholstery, drapery, luxury suiting, ties, evening wear, home furnishing",
    gsmMin: 150, gsmMax: 600,
    gsmDisplay: "150–600 GSM (Apparel jacquard: 200–300 | Upholstery: 350–600)",
    washCare: [
      {icon:"🧴", text:"Dry clean strongly recommended"},
      {icon:"🤲", text:"Hand wash only for lighter apparel jacquards (30°C)"},
      {icon:"🪴", text:"Lay flat to dry; never wring"},
      {icon:"🔥", text:"Low iron on reverse; use press cloth to protect pattern"},
      {icon:"🚫", text:"No tumble dry; avoid rubbing pattern"}
    ],
    prices: [
      {fiber:"Silk", range:"₹1000–6000/m", note:"Luxury brocade"},
      {fiber:"Cotton", range:"₹300–800/m", note:"Damask, upholstery"},
      {fiber:"Polyester", range:"₹150–400/m", note:"Budget jacquard"},
      {fiber:"Wool", range:"₹600–2500/m", note:"Tapestry, suiting"},
      {fiber:"Viscose/Silk blend", range:"₹400–1200/m", note:"Semi-luxury"},
      {fiber:"Metallic thread", range:"₹800–4000/m", note:"Festive brocade"}
    ],
    extras: {
      threadCount: "Controlled per thread; very high density",
      width: "44–60 inches",
      stretch: "1–3%",
      shrinkage: "2–4%",
      season: ["All Season", "Festive"],
      tradeNames: "Brocade, Damask, Lampas, Tapestry"
    }
  },
  {
    id: 'leno-weave',
    name: "Leno / Gauze Weave",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Pairs of warp yarns (doup and standard) twist around each weft yarn, locking it in place. Creates open, sheer, stable mesh-like structure. Prevents yarn slippage in open weave. Requires special doup attachment.",
    uses: "Surgical gauze, mosquito nets, curtain sheer fabric, light summer apparel, cheesecloth variants, packaging fabric",
    gsmMin: 20, gsmMax: 90,
    gsmDisplay: "20–90 GSM (Medical gauze: 20–40 | Curtain: 50–90)",
    washCare: [
      {icon:"🤲", text:"Hand wash cold (25°C)"},
      {icon:"🌊", text:"Delicate machine cycle in mesh bag"},
      {icon:"🪴", text:"Air dry; lay flat or hang carefully"},
      {icon:"🔥", text:"Low iron or no iron; steam gently"},
      {icon:"🚫", text:"No tumble dry; very fragile structure"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹40–120/m", note:"Gauze, cheesecloth"},
      {fiber:"Polyester", range:"₹30–100/m", note:"Curtain sheer"},
      {fiber:"Silk", range:"₹300–900/m", note:"Luxury sheer"},
      {fiber:"Linen", range:"₹150–400/m", note:"Artisan gauze"},
      {fiber:"Nylon", range:"₹60–150/m", note:"Mosquito net"},
      {fiber:"Bamboo", range:"₹120–350/m", note:"Eco-gauze"}
    ],
    extras: {
      threadCount: "Very open: 20–50 threads/inch",
      width: "44–60 inches",
      stretch: "4–8%",
      shrinkage: "5–10%",
      season: ["Spring/Summer"],
      tradeNames: "Gauze, Cheesecloth, Leno Sheer, Doup Weave"
    }
  },
  {
    id: 'crepe-weave',
    name: "Crepe Weave",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Irregular/random float arrangement breaks the diagonal of twill to create a pebbled, grainy texture. Can also use high-twist yarns. Different from crepe yarn fabric (though both may be used together). Pattern repeat is irregular.",
    uses: "Dress fabric, blouses, eveningwear, linings, scarves, suiting lining",
    gsmMin: 80, gsmMax: 220,
    gsmDisplay: "80–220 GSM (Crepe blouse: 90–130 | Crepe suiting: 150–220)",
    washCare: [
      {icon:"🤲", text:"Hand wash cold or dry clean for silk crepe"},
      {icon:"🌊", text:"Gentle machine wash 30°C for poly/rayon crepe"},
      {icon:"🪴", text:"Lay flat to dry; do not wring"},
      {icon:"🔥", text:"Low iron on reverse; steam from distance"},
      {icon:"🚫", text:"Avoid pressing flat — preserves pebbled texture"}
    ],
    prices: [
      {fiber:"Silk", range:"₹500–2500/m", note:"Crepe de chine"},
      {fiber:"Polyester", range:"₹80–200/m", note:"Budget crepe"},
      {fiber:"Rayon/Viscose", range:"₹120–300/m", note:"Soft crepe"},
      {fiber:"Wool", range:"₹400–1200/m", note:"Crepe suiting"},
      {fiber:"Cotton", range:"₹150–350/m", note:"Cotton crepe"},
      {fiber:"Polyester/Elastane", range:"₹120–280/m", note:"Stretch crepe"}
    ],
    extras: {
      threadCount: "Varies widely",
      width: "44–58 inches",
      stretch: "3–8%",
      shrinkage: "3–6%",
      season: ["All Season"],
      tradeNames: "Crepe de Chine, Moss Crepe, Sand Crepe, Canton Crepe"
    },
    structure: {
      type: 'weave',
      pattern: [
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 0, 1, 1]
      ], // Randomized crepe
      warpColor: '#ef4444', // red
      weftColor: '#fca5a5'  // light red
    }
  },
  {
    id: 'bedford-cord',
    name: "Bedford Cord",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Longitudinal ribs formed by stuffing/wadding threads between face threads. Heavier and sturdier than plain rib weave. The ribs are filled from behind giving a rounded 3D effect. Often woven with cotton or wool.",
    uses: "Riding breeches, uniform trousers, upholstery, baby clothing, outerwear",
    gsmMin: 200, gsmMax: 400,
    gsmDisplay: "200–400 GSM (Apparel: 220–300 | Upholstery: 300–400)",
    washCare: [
      {icon:"🌊", text:"Machine wash 40°C"},
      {icon:"♨️", text:"Tumble dry medium"},
      {icon:"🔥", text:"Hot iron on cotton; medium on wool blend"},
      {icon:"🧴", text:"Dry clean for pure wool versions"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹150–350/m", note:"Uniform, baby wear"},
      {fiber:"Wool", range:"₹500–1500/m", note:"Riding breeches"},
      {fiber:"Polyester/Cotton", range:"₹120–280/m", note:"Uniform fabric"},
      {fiber:"Nylon blend", range:"₹180–400/m", note:"Outerwear"},
      {fiber:"Linen", range:"₹250–600/m", note:"Summer suiting"},
      {fiber:"Stretch blend", range:"₹200–450/m", note:"Modern trousers"}
    ],
    extras: {
      threadCount: "Typically 80–120 threads/inch",
      width: "56–60 inches",
      stretch: "3–6%",
      shrinkage: "3–5%",
      season: ["Autumn/Winter"],
      tradeNames: "Bedford Cord, Rib Cord"
    },
    structure: {
      type: 'weave',
      pattern: [
        [1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1]
      ],
      warpColor: '#b45309', // amber dark
      weftColor: '#fcd34d'  // amber light
    }
  },
  {
    id: 'pique-weave',
    name: "Piqué Weave",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Woven piqué uses extra warp threads (stuffer threads) that pad the fabric from behind, creating raised geometric patterns (diamonds, birds-eye, waffle). Different from knit piqué. Dobby or jacquard controlled.",
    uses: "Polo shirts (cotton piqué), waistcoats, dress shirts, collars, cuffs, upholstery, table linen",
    gsmMin: 130, gsmMax: 280,
    gsmDisplay: "130–280 GSM (Polo shirt: 150–200 | Upholstery: 220–280)",
    washCare: [
      {icon:"🌊", text:"Machine wash 40°C; 60°C for white cotton piqué"},
      {icon:"♨️", text:"Tumble dry medium"},
      {icon:"🔥", text:"Hot iron on cotton; steam to raise texture"},
      {icon:"🚫", text:"Do not over-iron flat — preserves raised texture"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹120–300/m", note:"Polo shirts, collars"},
      {fiber:"Cotton/Polyester", range:"₹100–220/m", note:"Sportswear"},
      {fiber:"Silk", range:"₹600–2000/m", note:"Luxury shirts"},
      {fiber:"Polyester", range:"₹80–180/m", note:"Budget piqué"},
      {fiber:"Linen", range:"₹200–500/m", note:"Summer apparel"},
      {fiber:"Wool", range:"₹400–1200/m", note:"Waistcoats"}
    ],
    extras: {
      threadCount: "100–160 threads/inch",
      width: "44–60 inches",
      stretch: "2–5%",
      shrinkage: "3–6%",
      season: ["Spring/Summer", "All Season"],
      tradeNames: "Piqué, Matelassé, Waffle Piqué, Bird's Eye Piqué"
    }
  },
  {
    id: 'honeycomb-weave',
    name: "Honeycomb Weave",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Cell-like raised texture with deep pits in between, resembling a honeycomb. Formed by long floats on both sides converging at corners. High absorbency due to large surface area. Can be rectilinear or Brighton honeycomb.",
    uses: "Towels, thermal underwear, cellular blankets, face cloths, dressing gown fabric, upholstery",
    gsmMin: 150, gsmMax: 350,
    gsmDisplay: "150–350 GSM (Thermal underwear: 150–200 | Towelling: 250–350)",
    washCare: [
      {icon:"🌊", text:"Machine wash 60°C (cotton); 40°C (blends)"},
      {icon:"♨️", text:"Tumble dry medium-high"},
      {icon:"🔥", text:"Medium iron; shake before drying to restore texture"},
      {icon:"🚫", text:"Avoid fabric softener for towel versions — reduces absorbency"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹120–280/m", note:"Towels, thermal"},
      {fiber:"Cotton/Bamboo", range:"₹200–500/m", note:"Eco towels"},
      {fiber:"Polyester", range:"₹80–180/m", note:"Budget cellular"},
      {fiber:"Linen", range:"₹200–500/m", note:"Kitchen towels"},
      {fiber:"Modal blend", range:"₹180–400/m", note:"Luxury thermal"},
      {fiber:"Wool", range:"₹350–900/m", note:"Cellular blankets"}
    ],
    extras: {
      threadCount: "60–100 threads/inch",
      width: "44–60 inches",
      stretch: "3–6%",
      shrinkage: "4–8%",
      season: ["Autumn/Winter", "All Season"],
      tradeNames: "Honeycomb, Waffle Weave, Cellular Fabric"
    }
  },
  {
    id: 'double-cloth',
    name: "Double Cloth",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Two separate fabric layers woven simultaneously on the same loom, connected at selvedges or at intervals by binding threads. Can be reversible. Provides warmth through trapped air layer. Can use different colors/fibers on each side.",
    uses: "Coats, overcoats, blankets, high-end suiting, military fabric, upholstery, reversible garments",
    gsmMin: 300, gsmMax: 700,
    gsmDisplay: "300–700 GSM (Coat fabric: 350–500 | Blanket: 400–600)",
    washCare: [
      {icon:"🧴", text:"Dry clean recommended for all double cloth"},
      {icon:"🌊", text:"Hand wash cold only if synthetic; very careful"},
      {icon:"🪴", text:"Lay flat to dry; never tumble dry"},
      {icon:"🔥", text:"Press cloth + steam iron; never direct iron"},
      {icon:"🚫", text:"No machine wash; very heavy when wet"}
    ],
    prices: [
      {fiber:"Wool", range:"₹800–4000/m", note:"High-end coats"},
      {fiber:"Cashmere", range:"₹3000–15000/m", note:"Luxury overcoats"},
      {fiber:"Wool/Cashmere", range:"₹1500–6000/m", note:"Premium coats"},
      {fiber:"Cotton", range:"₹300–700/m", note:"Spring coats"},
      {fiber:"Polyester", range:"₹200–450/m", note:"Budget coating"},
      {fiber:"Linen", range:"₹400–1000/m", note:"Summer layering"}
    ],
    extras: {
      threadCount: "Both layers counted separately",
      width: "56–60 inches",
      stretch: "1–3%",
      shrinkage: "2–4%",
      season: ["Autumn/Winter"],
      tradeNames: "Double Cloth, Reversible Cloth, Melton Double"
    }
  },
  {
    id: 'velvet-weave',
    name: "Velvet (Pile Weave)",
    category: "Pile Weave",
    type: "pile",
    badge: "badge-woven",
    badgeText: "PILE",
    construction: "Extra warp or weft pile yarns woven over wires/rods; when rods are withdrawn (or cut), upright cut loops form the pile. Pile can be cut (velvet) or uncut (velour). Density of pile determines luxuriousness.",
    uses: "Evening wear, blazers, upholstery, curtains, soft furnishings, fashion garments, vintage aesthetic apparel",
    gsmMin: 200, gsmMax: 500,
    gsmDisplay: "200–500 GSM (Apparel velvet: 200–300 | Upholstery: 350–500)",
    washCare: [
      {icon:"🧴", text:"Dry clean strongly recommended"},
      {icon:"🤲", text:"Spot clean only if necessary; cold water"},
      {icon:"🪴", text:"Hang to dry; never lay flat (crushes pile)"},
      {icon:"🔥", text:"Never iron directly; steam from reverse or use velvet board"},
      {icon:"🚫", text:"No tumble dry; avoid compression; store hanging"}
    ],
    prices: [
      {fiber:"Silk", range:"₹800–4000/m", note:"Luxury velvet"},
      {fiber:"Cotton", range:"₹300–800/m", note:"Fashion velvet"},
      {fiber:"Polyester", range:"₹100–300/m", note:"Budget velvet"},
      {fiber:"Rayon/Viscose", range:"₹200–600/m", note:"Affordable velvet"},
      {fiber:"Mohair", range:"₹1000–4000/m", note:"Upholstery velvet"},
      {fiber:"Nylon", range:"₹150–350/m", note:"Stretch velvet"}
    ],
    extras: {
      threadCount: "Pile density: 40,000–100,000 tufts per sq inch",
      width: "44–60 inches",
      stretch: "3–8% (woven base)",
      shrinkage: "3–6%",
      season: ["Autumn/Winter"],
      tradeNames: "Velvet, Crushed Velvet, Devore Velvet, Panne Velvet"
    }
  },
  {
    id: 'terry-weave',
    name: "Terry Weave",
    category: "Pile Weave",
    type: "pile",
    badge: "badge-woven",
    badgeText: "PILE",
    construction: "Two sets of warp yarns: ground warp (tensioned) and pile warp (slack). Slack pile warp forms uncut loops on one or both sides. Loops created by slack tension mechanism. Loop height controlled by pick spacing. French terry = loops on one side only.",
    uses: "Bath towels, beach towels, bathrobes, face cloths, kitchen towels, towelling apparel",
    gsmMin: 300, gsmMax: 700,
    gsmDisplay: "300–700 GSM (Light towel: 300–400 | Hotel/premium: 500–700)",
    washCare: [
      {icon:"🌊", text:"Machine wash 60°C (cotton); 40°C (blends)"},
      {icon:"♨️", text:"Tumble dry high (cotton) — keeps loops fluffy"},
      {icon:"🔥", text:"Iron on medium if needed; not usually necessary"},
      {icon:"🚫", text:"No fabric softener — reduces absorbency; no dryer sheets"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹150–450/m", note:"Standard towelling"},
      {fiber:"Egyptian/Supima cotton", range:"₹400–1200/m", note:"Luxury towels"},
      {fiber:"Bamboo/Cotton", range:"₹300–700/m", note:"Eco premium"},
      {fiber:"Microfiber (poly)", range:"₹80–200/m", note:"Quick-dry towels"},
      {fiber:"Linen", range:"₹200–500/m", note:"Lightweight towels"},
      {fiber:"Modal blend", range:"₹250–600/m", note:"Soft robes"}
    ],
    extras: {
      threadCount: "Loops per inch: 8–20",
      width: "60–72 inches (towelling width)",
      stretch: "5–10% (pile direction)",
      shrinkage: "6–10% (cotton terry)",
      season: ["All Season"],
      tradeNames: "Terry, Terry Towelling, French Terry, Velour Terry"
    }
  },
  {
    id: 'corduroy',
    name: "Corduroy",
    category: "Pile Weave",
    type: "pile",
    badge: "badge-woven",
    badgeText: "PILE",
    construction: "Extra weft pile threads woven in floats; cutting these floats creates parallel ribs (wales). Wales per inch determine type: Pinwale (16–21 wpi), standard (11 wpi), wide wale (8 wpi), jumbo (2–4 wpi). Plain or twill base.",
    uses: "Trousers, jeans, jackets, children's wear, cushions, upholstery, shirts",
    gsmMin: 200, gsmMax: 450,
    gsmDisplay: "200–450 GSM (Pinwale: 200–280 | Wide wale: 300–450)",
    washCare: [
      {icon:"🔄", text:"Machine wash inside-out, cold (30°C) to preserve wales"},
      {icon:"🌊", text:"Gentle cycle; wash with similar colors"},
      {icon:"♨️", text:"Tumble dry low; remove while slightly damp"},
      {icon:"🔥", text:"Steam iron on reverse; brush wales after washing"},
      {icon:"🚫", text:"No hot wash; avoid rubbing against itself"}
    ],
    prices: [
      {fiber:"Cotton", range:"₹150–400/m", note:"Standard corduroy"},
      {fiber:"Cotton/Elastane", range:"₹200–500/m", note:"Stretch cord"},
      {fiber:"Polyester blend", range:"₹100–250/m", note:"Budget versions"},
      {fiber:"Needlecord (fine)", range:"₹180–450/m", note:"Children's wear"},
      {fiber:"Velveteen cord", range:"₹250–600/m", note:"Fashion variants"},
      {fiber:"Organic cotton", range:"₹250–600/m", note:"Eco corduroy"}
    ],
    extras: {
      threadCount: "Wale count: 2–21 wales per inch",
      width: "44–60 inches",
      stretch: "3–8% (crosswise); stretch versions: 10–20%",
      shrinkage: "4–8%",
      season: ["Autumn/Winter"],
      tradeNames: "Corduroy, Needlecord, Pinwale, Jumbo Cord, Velveteenette"
    }
  },
  {
    id: 'brocade',
    name: "Brocade",
    category: "Complex Weave",
    type: "complex",
    badge: "badge-complex",
    badgeText: "COMPLEX",
    construction: "Supplementary weft (sometimes warp) threads float over ground fabric to create raised, embossed floral/geometric patterns. Extra threads cut at back between design areas. Jacquard controlled. Often uses metallic, silk or vivid color threads.",
    uses: "Sarees, lehengas, sherwanis, evening wear, bridal wear, drapery, cushion covers, bags",
    gsmMin: 200, gsmMax: 500,
    gsmDisplay: "200–500 GSM (Apparel: 200–350 | Heavy drape: 350–500)",
    washCare: [
      {icon:"🧴", text:"Dry clean always recommended"},
      {icon:"🤲", text:"Hand wash cold ONLY for lightweight cotton brocade"},
      {icon:"🪴", text:"Lay flat to dry; roll in towel — never wring"},
      {icon:"🔥", text:"Iron reverse side only; use damp cloth; low heat"},
      {icon:"🚫", text:"No machine wash; no bleach; no tumble dry"}
    ],
    prices: [
      {fiber:"Silk + metallic", range:"₹800–6000/m", note:"Bridal brocade"},
      {fiber:"Banarasi silk", range:"₹1500–15000/m", note:"Premium sarees"},
      {fiber:"Polyester", range:"₹150–400/m", note:"Budget brocade"},
      {fiber:"Cotton", range:"₹200–500/m", note:"Casual brocade"},
      {fiber:"Rayon/Viscose", range:"₹150–400/m", note:"Affordable option"},
      {fiber:"Wool + silk", range:"₹800–3000/m", note:"Luxury furnishings"}
    ],
    extras: {
      threadCount: "High density jacquard controlled",
      width: "44–54 inches",
      stretch: "1–3%",
      shrinkage: "2–4%",
      season: ["Festive", "Autumn/Winter"],
      tradeNames: "Brocade, Banarasi, Kinkhab, Zari Brocade, Meenakari"
    }
  }
];
