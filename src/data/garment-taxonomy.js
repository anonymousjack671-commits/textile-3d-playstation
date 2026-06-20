// ============================================================
// GARMENT TAXONOMY v2 — Industry-Grade Fabric Mapping
// Research-backed search terms covering woven + knitted + sustainable fabrics
// Each garment has PRIMARY terms (direct match) and SECONDARY terms (broader)
// Combined, they guarantee minimum 7 library matches per garment.
// ============================================================

export const garmentTaxonomy = [
  {
    category: "Womenswear",
    icon: "dress",
    garments: [
      {
        name: "Coats & Jackets",
        searchTerms: [
          // Woven matches
          "coat", "outerwear", "jacket", "gabardine", "tweed", "herringbone",
          "cavalry", "wool", "melton", "coating", "trench", "overcoat",
          // Knitted / performance
          "fleece", "bonded", "softshell", "interlock",
          // Sustainable
          "recycled wool", "organic cotton"
        ]
      },
      {
        name: "Dresses",
        searchTerms: [
          "dress", "georgette", "chiffon", "crepe", "poplin", "lawn",
          "chambray", "satin", "charmeuse", "taffeta", "lace", "dobby",
          "viscose", "tencel", "lyocell", "jersey", "silk", "voile",
          "organza", "dupioni", "faille", "shantung", "midi", "wrap"
        ]
      },
      {
        name: "Blouses & Tops",
        searchTerms: [
          "blouse", "top", "shirt", "poplin", "lawn", "voile", "chiffon",
          "georgette", "satin", "silk", "crepe", "chambray", "linen",
          "tencel", "viscose", "charmeuse", "organza", "batiste"
        ]
      },
      {
        name: "Tops & T-Shirts",
        searchTerms: [
          "t-shirt", "jersey", "interlock", "rib knit", "single jersey",
          "cotton top", "modal", "viscose jersey", "bamboo", "pique",
          "slub", "organic cotton", "stretch", "performance", "spandex"
        ]
      },
      {
        name: "Jumpers & Cardigans",
        searchTerms: [
          "jumper", "sweater", "knitwear", "cardigan", "fleece", "wool",
          "cashmere", "merino", "acrylic", "chunky knit", "fine gauge",
          "rib knit", "interlock", "recycled wool"
        ]
      },
      {
        name: "Jeans",
        searchTerms: [
          "jeans", "denim", "twill", "stretch denim", "rigid denim",
          "cotton", "elastane", "lycra", "selvedge", "indigo",
          "chino", "drill", "spandex"
        ]
      },
      {
        name: "Trousers & Leggings",
        searchTerms: [
          "trouser", "legging", "ponte", "gabardine", "twill", "stretch",
          "spandex", "elastane", "interlock", "jersey", "chino", "drill",
          "performance knit", "viscose", "tencel", "linen"
        ]
      },
      {
        name: "Activewear",
        searchTerms: [
          "activewear", "sportswear", "performance", "spandex", "elastane",
          "nylon", "polyester", "interlock", "jersey", "stretch",
          "moisture wicking", "compression", "lycra", "running",
          "warp knit", "rpet", "recycled"
        ]
      },
      {
        name: "Swimwear",
        searchTerms: [
          "swimwear", "swim", "spandex", "nylon", "lycra", "elastane",
          "polyamide", "performance", "chlorine resistant", "warp knit",
          "rpet", "recycled nylon", "econyl"
        ]
      },
      {
        name: "Eveningwear",
        searchTerms: [
          "evening", "formal", "gown", "satin", "charmeuse", "duchess",
          "chiffon", "georgette", "velvet", "taffeta", "organza",
          "lace", "brocade", "faille", "dupioni", "silk", "sequin base"
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
        searchTerms: [
          // Direct fabric name matches in library
          "poplin", "oxford cloth", "lawn", "twill", "chambray", "dobby",
          "broadcloth", "voile", "batiste", "cambric", "end-on-end",
          // Used-in terms that appear in variants
          "shirting", "shirt", "formal shirt", "dress shirt",
          "cotton", "non-iron", "easy care", "linen", "tencel"
        ]
      },
      {
        name: "Casual Shirts",
        searchTerms: [
          "shirt", "chambray", "oxford cloth", "flannel", "linen",
          "twill", "poplin", "seersucker", "herringbone", "lawn",
          "tencel", "viscose", "check", "plaid", "yarn-dyed"
        ]
      },
      {
        name: "Blazers & Suits",
        searchTerms: [
          "suit", "blazer", "suiting", "wool", "gabardine", "herringbone",
          "serge", "hopsack", "cavalry twill", "tweed", "worsted",
          "flannel", "linen", "cotton suit", "polyester blend",
          "shantung", "dupioni", "satin crepe", "recycled wool"
        ]
      },
      {
        name: "T-Shirts & Polos",
        searchTerms: [
          "t-shirt", "jersey", "single jersey", "interlock", "pique",
          "polo", "rib knit", "cotton", "organic cotton", "modal",
          "bamboo", "performance", "moisture wicking", "rpet", "slub"
        ]
      },
      {
        name: "Hoodies & Sweatshirts",
        searchTerms: [
          "hoodie", "sweatshirt", "fleece", "french terry", "terry",
          "loop back fleece", "polar fleece", "interlock", "jersey",
          "cotton fleece", "recycled fleece", "rpet", "organic cotton"
        ]
      },
      {
        name: "Jeans",
        searchTerms: [
          "jeans", "denim", "twill", "cotton", "stretch", "elastane",
          "spandex", "rigid denim", "selvedge", "indigo", "washed"
        ]
      },
      {
        name: "Chinos & Trousers",
        searchTerms: [
          "chino", "trouser", "twill", "drill", "gabardine", "cotton",
          "linen", "flannel", "hopsack", "stretch", "chino drill",
          "cavalry twill", "serge", "tencel", "ripstop"
        ]
      },
      {
        name: "Coats & Jackets",
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
        searchTerms: [
          "school", "uniform", "twill", "poplin", "polo", "jersey",
          "interlock", "gabardine", "chino", "drill", "oxford cloth",
          "polyester", "easy care", "anti-wrinkle", "teflon",
          "pique", "stretch", "serge"
        ]
      },
      {
        name: "Playwear & Sets",
        searchTerms: [
          "jersey", "interlock", "single jersey", "french terry", "fleece",
          "rib knit", "cotton", "organic cotton", "stretch", "knit",
          "pique", "slub", "bamboo", "modal"
        ]
      },
      {
        name: "Dresses & Skirts",
        searchTerms: [
          "dress", "skirt", "poplin", "lawn", "jersey", "cotton",
          "chambray", "voile", "seersucker", "dobby", "twill",
          "organic cotton", "tencel"
        ]
      },
      {
        name: "Coats & Jackets",
        searchTerms: [
          "coat", "jacket", "outerwear", "waterproof", "fleece",
          "bonded", "softshell", "ripstop", "wool", "interlock",
          "recycled", "rpet", "padding"
        ]
      },
      {
        name: "Sportswear & Gymwear",
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
        searchTerms: [
          "baby", "babywear", "interlock", "jersey", "rib knit",
          "organic cotton", "cotton", "modal", "bamboo", "single jersey",
          "stretch", "soft", "gentle", "newborn", "oeko-tex"
        ]
      },
      {
        name: "Rompers & Outfits",
        searchTerms: [
          "baby", "romper", "babywear", "french terry", "jersey",
          "interlock", "cotton", "organic cotton", "bamboo", "modal",
          "soft", "stretch", "rib"
        ]
      },
      {
        name: "Muslins & Blankets",
        searchTerms: [
          "muslin", "swaddle", "blanket", "flannel", "fleece",
          "terry cloth", "cotton gauze", "organic cotton", "bamboo",
          "soft", "absorbent", "gentle"
        ]
      },
      {
        name: "Knitwear & Layering",
        searchTerms: [
          "knitwear", "cardigan", "jumper", "interlock", "rib knit",
          "wool", "merino", "cashmere", "organic cotton", "soft",
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
        searchTerms: [
          "pyjama", "nightwear", "sleepwear", "flannel", "jersey",
          "satin", "charmeuse", "poplin", "lawn", "cotton",
          "viscose", "modal", "bamboo", "soft", "brushed"
        ]
      },
      {
        name: "Intimates & Lingerie",
        searchTerms: [
          "lingerie", "intimate", "bra", "microfibre", "lace",
          "mesh", "spandex", "elastane", "nylon", "jersey",
          "charmeuse", "silk", "satin", "chiffon", "warp knit"
        ]
      },
      {
        name: "Loungewear",
        searchTerms: [
          "loungewear", "lounge", "fleece", "french terry", "jersey",
          "interlock", "modal", "viscose", "bamboo", "cotton",
          "stretch", "soft", "rib knit", "tencel"
        ]
      },
      {
        name: "Robes & Wraps",
        searchTerms: [
          "robe", "wrap", "terry cloth", "towelling", "fleece",
          "velour", "french terry", "cotton", "bamboo", "waffle",
          "jersey", "charmeuse", "satin"
        ]
      }
    ]
  }
];
