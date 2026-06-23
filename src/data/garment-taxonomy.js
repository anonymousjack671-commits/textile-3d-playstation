// ============================================================
// GARMENT TAXONOMY v3 — Precision Fabric Matching Engine
// ============================================================
// Each garment carries:
//   fabricIds  — direct library fabric IDs with suitability scores (1–100)
//                Score guide: 90–100 = ideal, 75–89 = excellent, 60–74 = good,
//                40–59 = possible, <40 = niche/context-specific
//   gsmRange   — optimal GSM window for this garment
//   stretchRequired — 'none' | 'low' | 'medium' | 'high'
//   properties — functional requirements used for secondary scoring
//   searchTerms — text-match fallback covering variants & synonyms
// ============================================================

export const garmentTaxonomy = [
  {
    category: "Womenswear",
    icon: "dress",
    garments: [
      {
        name: "Coats & Jackets",
        gsmRange: { min: 200, max: 600 },
        stretchRequired: "none",
        properties: ["structured", "warm", "outerwear", "durable"],
        fabricIds: [
          { id: "gabardine",        score: 95 },
          { id: "herringbone",      score: 90 },
          { id: "flannel",          score: 85 },
          { id: "twill-weave",      score: 82 },
          { id: "cavalry-twill",    score: 78 },
          { id: "velvet",           score: 72 },
          { id: "canvas",           score: 68 },
          { id: "fleece-terry",     score: 68 },
          { id: "corduroy",         score: 65 },
          { id: "velvet-pile",      score: 62 },
          { id: "recycled-wool",    score: 60 },
          { id: "plain-weave",      score: 45 },
        ],
        searchTerms: [
          "coat", "outerwear", "jacket", "gabardine", "herringbone",
          "cavalry", "wool", "melton", "coating", "trench", "overcoat",
          "tweed", "fleece", "bonded", "softshell", "recycled wool"
        ]
      },
      {
        name: "Dresses",
        gsmRange: { min: 60, max: 280 },
        stretchRequired: "low",
        properties: ["drape", "fluid", "feminine", "versatile"],
        fabricIds: [
          { id: "georgette",        score: 95 },
          { id: "charmeuse",        score: 92 },
          { id: "chiffon",          score: 90 },
          { id: "satin-crepe",      score: 88 },
          { id: "lawn",             score: 86 },
          { id: "chambray",         score: 82 },
          { id: "single-jersey",    score: 82 },
          { id: "dupioni",          score: 80 },
          { id: "faille",           score: 78 },
          { id: "taffeta",          score: 76 },
          { id: "voile",            score: 74 },
          { id: "organza",          score: 72 },
          { id: "duchess-satin",    score: 70 },
          { id: "shantung",         score: 70 },
          { id: "tencel-lyocell",   score: 68 },
          { id: "interlock-knit",   score: 65 },
          { id: "batiste",          score: 62 },
          { id: "flannel",          score: 42 },
        ],
        searchTerms: [
          "dress", "georgette", "chiffon", "crepe", "poplin", "lawn",
          "chambray", "satin", "charmeuse", "taffeta", "dobby",
          "viscose", "tencel", "jersey", "silk", "voile",
          "organza", "dupioni", "faille", "shantung", "midi", "wrap"
        ]
      },
      {
        name: "Blouses & Tops",
        gsmRange: { min: 35, max: 160 },
        stretchRequired: "low",
        properties: ["drape", "breathable", "refined"],
        fabricIds: [
          { id: "chiffon",          score: 95 },
          { id: "georgette",        score: 95 },
          { id: "charmeuse",        score: 92 },
          { id: "lawn",             score: 90 },
          { id: "voile",            score: 88 },
          { id: "batiste",          score: 85 },
          { id: "chambray",         score: 82 },
          { id: "satin-crepe",      score: 80 },
          { id: "organza",          score: 75 },
          { id: "tencel-lyocell",   score: 75 },
          { id: "oxford-cloth",     score: 65 },
          { id: "linen",            score: 68 },
          { id: "muslin",           score: 50 },
        ],
        searchTerms: [
          "blouse", "top", "shirt", "poplin", "lawn", "voile", "chiffon",
          "georgette", "satin", "silk", "crepe", "chambray", "linen",
          "tencel", "viscose", "charmeuse", "organza", "batiste"
        ]
      },
      {
        name: "Tops & T-Shirts",
        gsmRange: { min: 120, max: 220 },
        stretchRequired: "medium",
        properties: ["stretch", "comfortable", "breathable", "casual"],
        fabricIds: [
          { id: "single-jersey",    score: 98 },
          { id: "interlock-knit",   score: 92 },
          { id: "rib-knit",         score: 88 },
          { id: "organic-cotton",   score: 85 },
          { id: "recycled-cotton",  score: 80 },
          { id: "performance-knits",score: 68 },
          { id: "tencel-lyocell",   score: 62 },
        ],
        searchTerms: [
          "t-shirt", "jersey", "interlock", "rib knit", "single jersey",
          "cotton top", "modal", "viscose jersey", "bamboo", "pique",
          "slub", "organic cotton", "stretch", "performance", "spandex"
        ]
      },
      {
        name: "Jumpers & Cardigans",
        gsmRange: { min: 200, max: 500 },
        stretchRequired: "medium",
        properties: ["warm", "knitwear", "cosy", "soft"],
        fabricIds: [
          { id: "rib-knit",         score: 96 },
          { id: "fleece-terry",     score: 82 },
          { id: "interlock-knit",   score: 75 },
          { id: "recycled-wool",    score: 78 },
          { id: "single-jersey",    score: 65 },
        ],
        searchTerms: [
          "jumper", "sweater", "knitwear", "cardigan", "fleece", "wool",
          "cashmere", "merino", "acrylic", "chunky knit", "fine gauge",
          "rib knit", "interlock", "recycled wool"
        ]
      },
      {
        name: "Jeans",
        gsmRange: { min: 240, max: 500 },
        stretchRequired: "low",
        properties: ["durable", "denim", "twill", "indigo"],
        fabricIds: [
          { id: "twill-weave",      score: 95 },
          { id: "chino-drill",      score: 78 },
          { id: "gabardine",        score: 45 },
        ],
        searchTerms: [
          "jeans", "denim", "twill", "stretch denim", "rigid denim",
          "cotton", "elastane", "lycra", "selvedge", "indigo",
          "chino", "drill", "spandex"
        ]
      },
      {
        name: "Trousers & Leggings",
        gsmRange: { min: 120, max: 350 },
        stretchRequired: "medium",
        properties: ["comfortable", "stretch", "flattering"],
        fabricIds: [
          { id: "interlock-knit",   score: 90 },
          { id: "gabardine",        score: 88 },
          { id: "chino-drill",      score: 85 },
          { id: "single-jersey",    score: 82 },
          { id: "rib-knit",         score: 78 },
          { id: "flannel",          score: 75 },
          { id: "hopsack",          score: 72 },
          { id: "twill-weave",      score: 72 },
          { id: "performance-knits",score: 70 },
          { id: "tencel-lyocell",   score: 65 },
          { id: "linen",            score: 62 },
          { id: "corduroy",         score: 72 },
        ],
        searchTerms: [
          "trouser", "legging", "ponte", "gabardine", "twill", "stretch",
          "spandex", "elastane", "interlock", "jersey", "chino", "drill",
          "performance knit", "viscose", "tencel", "linen", "corduroy"
        ]
      },
      {
        name: "Activewear",
        gsmRange: { min: 130, max: 300 },
        stretchRequired: "high",
        properties: ["moisture-wicking", "stretch", "performance", "quick-dry"],
        fabricIds: [
          { id: "performance-knits",score: 98 },
          { id: "warp-knits",       score: 92 },
          { id: "interlock-knit",   score: 85 },
          { id: "single-jersey",    score: 78 },
          { id: "rpet",             score: 85 },
          { id: "microfiber-technical", score: 80 },
        ],
        searchTerms: [
          "activewear", "sportswear", "performance", "spandex", "elastane",
          "nylon", "polyester", "interlock", "jersey", "stretch",
          "moisture wicking", "compression", "lycra", "running",
          "warp knit", "rpet", "recycled"
        ]
      },
      {
        name: "Swimwear",
        gsmRange: { min: 150, max: 280 },
        stretchRequired: "high",
        properties: ["chlorine-resistant", "quick-dry", "stretch", "colourfast"],
        fabricIds: [
          { id: "warp-knits",       score: 96 },
          { id: "performance-knits",score: 92 },
          { id: "rpet",             score: 82 },
          { id: "microfiber-technical", score: 78 },
        ],
        searchTerms: [
          "swimwear", "swim", "spandex", "nylon", "lycra", "elastane",
          "polyamide", "performance", "chlorine resistant", "warp knit",
          "rpet", "recycled nylon", "econyl"
        ]
      },
      {
        name: "Eveningwear",
        gsmRange: { min: 80, max: 450 },
        stretchRequired: "none",
        properties: ["luxurious", "formal", "lustrous", "special-occasion"],
        fabricIds: [
          { id: "duchess-satin",    score: 98 },
          { id: "charmeuse",        score: 96 },
          { id: "velvet",           score: 95 },
          { id: "georgette",        score: 90 },
          { id: "chiffon",          score: 90 },
          { id: "brocade",          score: 88 },
          { id: "taffeta",          score: 86 },
          { id: "faille",           score: 82 },
          { id: "dupioni",          score: 80 },
          { id: "organza",          score: 78 },
          { id: "satin-crepe",      score: 78 },
          { id: "damask",           score: 75 },
          { id: "shantung",         score: 72 },
          { id: "velvet-pile",      score: 70 },
          { id: "ottoman",          score: 68 },
        ],
        searchTerms: [
          "evening", "formal", "gown", "satin", "charmeuse", "duchess",
          "chiffon", "georgette", "velvet", "taffeta", "organza",
          "brocade", "faille", "dupioni", "silk"
        ]
      }
    ]
  },
  {
    category: "Menswear",
    icon: "shirt",
    garments: [
      {
        name: "Formal Shirts",
        gsmRange: { min: 80, max: 160 },
        stretchRequired: "none",
        properties: ["crisp", "formal", "easy-iron", "fine-weave"],
        fabricIds: [
          { id: "oxford-cloth",     score: 96 },
          { id: "lawn",             score: 92 },
          { id: "batiste",          score: 89 },
          { id: "plain-weave",      score: 88 },
          { id: "chambray",         score: 78 },
          { id: "voile",            score: 70 },
          { id: "muslin",           score: 50 },
          { id: "tencel-lyocell",   score: 62 },
          { id: "linen",            score: 65 },
        ],
        searchTerms: [
          "poplin", "oxford cloth", "lawn", "twill", "chambray", "dobby",
          "broadcloth", "voile", "batiste", "cambric", "end-on-end",
          "shirting", "shirt", "formal shirt", "dress shirt",
          "non-iron", "easy care", "linen", "tencel"
        ]
      },
      {
        name: "Casual Shirts",
        gsmRange: { min: 100, max: 220 },
        stretchRequired: "none",
        properties: ["breathable", "casual", "comfortable"],
        fabricIds: [
          { id: "chambray",         score: 92 },
          { id: "oxford-cloth",     score: 90 },
          { id: "flannel",          score: 88 },
          { id: "lawn",             score: 80 },
          { id: "seersucker",       score: 80 },
          { id: "herringbone",      score: 68 },
          { id: "chino-drill",      score: 58 },
          { id: "linen",            score: 82 },
          { id: "muslin",           score: 45 },
        ],
        searchTerms: [
          "shirt", "chambray", "oxford cloth", "flannel", "linen",
          "twill", "poplin", "seersucker", "herringbone", "lawn",
          "tencel", "viscose", "check", "plaid", "yarn-dyed"
        ]
      },
      {
        name: "Blazers & Suits",
        gsmRange: { min: 180, max: 380 },
        stretchRequired: "none",
        properties: ["structured", "formal", "tailored", "wrinkle-resistant"],
        fabricIds: [
          { id: "gabardine",        score: 98 },
          { id: "herringbone",      score: 92 },
          { id: "flannel",          score: 90 },
          { id: "hopsack",          score: 88 },
          { id: "serge",            score: 85 },
          { id: "shantung",         score: 80 },
          { id: "dupioni",          score: 76 },
          { id: "cavalry-twill",    score: 72 },
          { id: "satin-crepe",      score: 68 },
          { id: "twill-weave",      score: 75 },
          { id: "recycled-wool",    score: 72 },
          { id: "ottoman",          score: 58 },
        ],
        searchTerms: [
          "suit", "blazer", "suiting", "wool", "gabardine", "herringbone",
          "serge", "hopsack", "cavalry twill", "tweed", "worsted",
          "flannel", "linen", "cotton suit", "polyester blend",
          "shantung", "dupioni", "satin crepe", "recycled wool"
        ]
      },
      {
        name: "T-Shirts & Polos",
        gsmRange: { min: 140, max: 260 },
        stretchRequired: "medium",
        properties: ["comfortable", "breathable", "casual"],
        fabricIds: [
          { id: "single-jersey",    score: 98 },
          { id: "interlock-knit",   score: 92 },
          { id: "rib-knit",         score: 85 },
          { id: "organic-cotton",   score: 88 },
          { id: "performance-knits",score: 75 },
          { id: "recycled-cotton",  score: 78 },
        ],
        searchTerms: [
          "t-shirt", "jersey", "single jersey", "interlock", "pique",
          "polo", "rib knit", "cotton", "organic cotton", "modal",
          "bamboo", "performance", "moisture wicking", "rpet", "slub"
        ]
      },
      {
        name: "Hoodies & Sweatshirts",
        gsmRange: { min: 280, max: 500 },
        stretchRequired: "medium",
        properties: ["cosy", "warm", "casual", "loopback"],
        fabricIds: [
          { id: "fleece-terry",     score: 98 },
          { id: "rpet",             score: 82 },
          { id: "interlock-knit",   score: 72 },
          { id: "single-jersey",    score: 65 },
          { id: "organic-cotton",   score: 78 },
        ],
        searchTerms: [
          "hoodie", "sweatshirt", "fleece", "french terry", "terry",
          "loop back fleece", "polar fleece", "interlock", "jersey",
          "cotton fleece", "recycled fleece", "rpet", "organic cotton"
        ]
      },
      {
        name: "Jeans",
        gsmRange: { min: 280, max: 500 },
        stretchRequired: "low",
        properties: ["durable", "denim", "indigo", "twill"],
        fabricIds: [
          { id: "twill-weave",      score: 98 },
          { id: "chino-drill",      score: 72 },
        ],
        searchTerms: [
          "jeans", "denim", "twill", "cotton", "stretch", "elastane",
          "spandex", "rigid denim", "selvedge", "indigo", "washed"
        ]
      },
      {
        name: "Chinos & Trousers",
        gsmRange: { min: 160, max: 320 },
        stretchRequired: "none",
        properties: ["smart-casual", "structured", "clean-crease"],
        fabricIds: [
          { id: "chino-drill",      score: 98 },
          { id: "gabardine",        score: 92 },
          { id: "hopsack",          score: 85 },
          { id: "flannel",          score: 82 },
          { id: "corduroy",         score: 78 },
          { id: "cavalry-twill",    score: 75 },
          { id: "serge",            score: 68 },
          { id: "twill-weave",      score: 82 },
          { id: "linen",            score: 72 },
          { id: "tencel-lyocell",   score: 62 },
          { id: "interlock-knit",   score: 58 },
        ],
        searchTerms: [
          "chino", "trouser", "twill", "drill", "gabardine", "cotton",
          "linen", "flannel", "hopsack", "stretch", "chino drill",
          "cavalry twill", "serge", "tencel", "ripstop", "corduroy"
        ]
      },
      {
        name: "Coats & Jackets",
        gsmRange: { min: 250, max: 700 },
        stretchRequired: "none",
        properties: ["structured", "warm", "outerwear", "weather-resistant"],
        fabricIds: [
          { id: "gabardine",        score: 95 },
          { id: "herringbone",      score: 90 },
          { id: "flannel",          score: 86 },
          { id: "cavalry-twill",    score: 82 },
          { id: "twill-weave",      score: 80 },
          { id: "canvas",           score: 72 },
          { id: "velvet-pile",      score: 65 },
          { id: "fleece-terry",     score: 68 },
          { id: "recycled-wool",    score: 72 },
          { id: "corduroy",         score: 62 },
        ],
        searchTerms: [
          "coat", "jacket", "outerwear", "overcoat", "gabardine",
          "herringbone", "tweed", "cavalry twill", "wool", "melton",
          "canvas", "ripstop", "fleece", "bonded", "softshell",
          "recycled wool", "rpet"
        ]
      }
    ]
  },
  {
    category: "Kids (Boys & Girls)",
    icon: "child",
    garments: [
      {
        name: "School Uniform",
        gsmRange: { min: 130, max: 300 },
        stretchRequired: "low",
        properties: ["durable", "easy-care", "anti-wrinkle", "formal"],
        fabricIds: [
          { id: "interlock-knit",   score: 92 },
          { id: "oxford-cloth",     score: 88 },
          { id: "chino-drill",      score: 88 },
          { id: "gabardine",        score: 82 },
          { id: "single-jersey",    score: 80 },
          { id: "plain-weave",      score: 78 },
          { id: "serge",            score: 72 },
          { id: "twill-weave",      score: 75 },
          { id: "organic-cotton",   score: 70 },
        ],
        searchTerms: [
          "school", "uniform", "twill", "poplin", "polo", "jersey",
          "interlock", "gabardine", "chino", "drill", "oxford cloth",
          "polyester", "easy care", "anti-wrinkle", "teflon",
          "pique", "stretch", "serge"
        ]
      },
      {
        name: "Playwear & Sets",
        gsmRange: { min: 120, max: 300 },
        stretchRequired: "medium",
        properties: ["soft", "durable", "stretch", "easy-wash"],
        fabricIds: [
          { id: "single-jersey",    score: 96 },
          { id: "interlock-knit",   score: 90 },
          { id: "fleece-terry",     score: 85 },
          { id: "rib-knit",         score: 78 },
          { id: "organic-cotton",   score: 86 },
          { id: "recycled-cotton",  score: 75 },
        ],
        searchTerms: [
          "jersey", "interlock", "single jersey", "french terry", "fleece",
          "rib knit", "cotton", "organic cotton", "stretch", "knit",
          "pique", "slub", "bamboo", "modal"
        ]
      },
      {
        name: "Dresses & Skirts",
        gsmRange: { min: 80, max: 220 },
        stretchRequired: "low",
        properties: ["soft", "breathable", "comfortable", "easy-wash"],
        fabricIds: [
          { id: "lawn",             score: 90 },
          { id: "chambray",         score: 88 },
          { id: "single-jersey",    score: 86 },
          { id: "seersucker",       score: 82 },
          { id: "voile",            score: 72 },
          { id: "organic-cotton",   score: 80 },
          { id: "tencel-lyocell",   score: 65 },
        ],
        searchTerms: [
          "dress", "skirt", "poplin", "lawn", "jersey", "cotton",
          "chambray", "voile", "seersucker", "dobby", "twill",
          "organic cotton", "tencel"
        ]
      },
      {
        name: "Coats & Jackets",
        gsmRange: { min: 200, max: 500 },
        stretchRequired: "low",
        properties: ["warm", "easy-care", "durable"],
        fabricIds: [
          { id: "fleece-terry",     score: 92 },
          { id: "interlock-knit",   score: 85 },
          { id: "twill-weave",      score: 75 },
          { id: "canvas",           score: 65 },
          { id: "rpet",             score: 75 },
          { id: "recycled-wool",    score: 62 },
        ],
        searchTerms: [
          "coat", "jacket", "outerwear", "waterproof", "fleece",
          "bonded", "softshell", "ripstop", "wool", "interlock",
          "recycled", "rpet", "padding"
        ]
      },
      {
        name: "Sportswear & Gymwear",
        gsmRange: { min: 130, max: 260 },
        stretchRequired: "high",
        properties: ["stretch", "moisture-wicking", "performance"],
        fabricIds: [
          { id: "performance-knits",score: 95 },
          { id: "interlock-knit",   score: 90 },
          { id: "single-jersey",    score: 85 },
          { id: "rpet",             score: 82 },
          { id: "warp-knits",       score: 78 },
        ],
        searchTerms: [
          "sportswear", "activewear", "jersey", "interlock", "pique",
          "performance", "polyester", "moisture wicking", "stretch",
          "spandex", "rpet", "recycled"
        ]
      }
    ]
  },
  {
    category: "Baby",
    icon: "baby",
    garments: [
      {
        name: "Sleepsuits & Bodysuits",
        gsmRange: { min: 140, max: 240 },
        stretchRequired: "medium",
        properties: ["ultra-soft", "skin-safe", "stretch", "OEKO-TEX", "gentle"],
        fabricIds: [
          { id: "interlock-knit",   score: 98 },
          { id: "organic-cotton",   score: 95 },
          { id: "single-jersey",    score: 90 },
          { id: "rib-knit",         score: 85 },
          { id: "recycled-cotton",  score: 72 },
          { id: "tencel-lyocell",   score: 68 },
        ],
        searchTerms: [
          "baby", "babywear", "interlock", "jersey", "rib knit",
          "organic cotton", "cotton", "modal", "bamboo", "single jersey",
          "stretch", "soft", "newborn", "oeko-tex"
        ]
      },
      {
        name: "Rompers & Outfits",
        gsmRange: { min: 140, max: 280 },
        stretchRequired: "medium",
        properties: ["soft", "durable", "easy-snap", "skin-safe"],
        fabricIds: [
          { id: "interlock-knit",   score: 96 },
          { id: "organic-cotton",   score: 92 },
          { id: "single-jersey",    score: 88 },
          { id: "fleece-terry",     score: 75 },
          { id: "recycled-cotton",  score: 70 },
        ],
        searchTerms: [
          "baby", "romper", "babywear", "french terry", "jersey",
          "interlock", "cotton", "organic cotton", "bamboo", "modal",
          "soft", "stretch", "rib"
        ]
      },
      {
        name: "Muslins & Blankets",
        gsmRange: { min: 40, max: 280 },
        stretchRequired: "none",
        properties: ["absorbent", "breathable", "soft", "swaddle"],
        fabricIds: [
          { id: "muslin",           score: 98 },
          { id: "organic-cotton",   score: 88 },
          { id: "fleece-terry",     score: 78 },
          { id: "terry-cloth",      score: 72 },
          { id: "calico",           score: 62 },
          { id: "plain-weave",      score: 55 },
        ],
        searchTerms: [
          "muslin", "swaddle", "blanket", "flannel", "fleece",
          "terry cloth", "cotton gauze", "organic cotton", "bamboo",
          "absorbent", "gentle", "double gauze"
        ]
      },
      {
        name: "Knitwear & Layering",
        gsmRange: { min: 160, max: 350 },
        stretchRequired: "medium",
        properties: ["warm", "soft", "skin-safe", "non-irritating"],
        fabricIds: [
          { id: "rib-knit",         score: 96 },
          { id: "interlock-knit",   score: 88 },
          { id: "single-jersey",    score: 78 },
          { id: "organic-cotton",   score: 85 },
          { id: "recycled-wool",    score: 65 },
          { id: "fleece-terry",     score: 72 },
        ],
        searchTerms: [
          "knitwear", "cardigan", "jumper", "interlock", "rib knit",
          "wool", "merino", "cashmere", "organic cotton",
          "baby", "layering"
        ]
      }
    ]
  },
  {
    category: "Nightwear & Lingerie",
    icon: "moon",
    garments: [
      {
        name: "Pyjamas & Nightwear",
        gsmRange: { min: 100, max: 320 },
        stretchRequired: "low",
        properties: ["soft", "comfortable", "breathable", "non-irritating"],
        fabricIds: [
          { id: "charmeuse",        score: 95 },
          { id: "flannel",          score: 92 },
          { id: "single-jersey",    score: 90 },
          { id: "lawn",             score: 88 },
          { id: "voile",            score: 75 },
          { id: "fleece-terry",     score: 72 },
          { id: "tencel-lyocell",   score: 70 },
          { id: "organic-cotton",   score: 82 },
          { id: "satin-crepe",      score: 72 },
          { id: "oxford-cloth",     score: 62 },
        ],
        searchTerms: [
          "pyjama", "nightwear", "sleepwear", "flannel", "jersey",
          "satin", "charmeuse", "poplin", "lawn", "cotton",
          "viscose", "modal", "bamboo", "brushed"
        ]
      },
      {
        name: "Intimates & Lingerie",
        gsmRange: { min: 60, max: 200 },
        stretchRequired: "high",
        properties: ["soft", "stretch", "lightweight", "skin-close"],
        fabricIds: [
          { id: "charmeuse",        score: 98 },
          { id: "warp-knits",       score: 96 },
          { id: "chiffon",          score: 88 },
          { id: "duchess-satin",    score: 82 },
          { id: "rib-knit",         score: 72 },
          { id: "performance-knits",score: 75 },
          { id: "single-jersey",    score: 70 },
          { id: "batiste",          score: 65 },
        ],
        searchTerms: [
          "lingerie", "intimate", "bra", "microfibre", "lace",
          "mesh", "spandex", "elastane", "nylon", "jersey",
          "charmeuse", "silk", "satin", "chiffon", "warp knit"
        ]
      },
      {
        name: "Loungewear",
        gsmRange: { min: 150, max: 380 },
        stretchRequired: "medium",
        properties: ["comfortable", "stretch", "soft", "relaxed"],
        fabricIds: [
          { id: "single-jersey",    score: 95 },
          { id: "fleece-terry",     score: 90 },
          { id: "interlock-knit",   score: 88 },
          { id: "rib-knit",         score: 82 },
          { id: "charmeuse",        score: 75 },
          { id: "tencel-lyocell",   score: 70 },
          { id: "organic-cotton",   score: 80 },
          { id: "recycled-cotton",  score: 72 },
        ],
        searchTerms: [
          "loungewear", "lounge", "fleece", "french terry", "jersey",
          "interlock", "modal", "viscose", "bamboo", "cotton",
          "stretch", "rib knit", "tencel"
        ]
      },
      {
        name: "Robes & Wraps",
        gsmRange: { min: 200, max: 600 },
        stretchRequired: "none",
        properties: ["absorbent", "soft", "cosy", "wrap"],
        fabricIds: [
          { id: "terry-cloth",      score: 98 },
          { id: "fleece-terry",     score: 92 },
          { id: "velvet",           score: 76 },
          { id: "charmeuse",        score: 82 },
          { id: "single-jersey",    score: 65 },
          { id: "velvet-pile",      score: 72 },
          { id: "organic-cotton",   score: 75 },
        ],
        searchTerms: [
          "robe", "wrap", "terry cloth", "towelling", "fleece",
          "velour", "french terry", "cotton", "bamboo", "waffle",
          "jersey", "charmeuse", "satin"
        ]
      }
    ]
  }
];
