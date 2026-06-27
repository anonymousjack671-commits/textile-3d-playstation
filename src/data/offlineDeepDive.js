// Offline deep-dive intelligence database & generator for UK retail brands
// Enables fully functional "Deep Dive" drawer when the local TEXAI server is offline.

const BRAND_PROFILES = {
  primark: {
    overviewStance: "Primark leverages massive economies of scale to keep retail prices low. Sourcing focuses on high-efficiency conventional or BCI cotton and virgin polyester, with a recent transition plan to recycled synthetics.",
    sustainability: "Aligned with the Primark Cares program: committing to 100% sustainable cotton (BCI/recycled) and recycled polyester across all clothing by 2030. Currently conventional-heavy with basic BCI coverage.",
    sourcingInsight: "Sourcing is highly consolidated in low-cost hubs, utilizing long-term volume contracts in Bangladesh (Dhaka) and India (Tirupur) to maintain price margins.",
    upgradeAdvice: "To outperform Primark, avoid low-grade carded cotton or virgin polyester. Sourcing GOTS-certified organic cotton or GRS-certified recycled polyester with a certified OEKO-TEX 100 finish provides a distinct quality and safety premium.",
    vendors: ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "SP Apparels Ltd (India, Tirupur)", "Pacific Jeans Ltd (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":                ["Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
      "Jeans":                  ["Pacific Jeans Ltd (Bangladesh)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)"],
      "Hoodies & Sweatshirts":  ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)"],
      "Tops & T-Shirts":        ["SP Apparels Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)"],
      "Activewear":             ["Crystal International (HK/China)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
      "School Uniform":         ["Viyellatex Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "SP Apparels Ltd (India)"],
      "Coats & Jackets":        ["Youngone Corp (Bangladesh)", "Nien Hsing Textile (Vietnam/Cambodia)", "Pacific Textiles (HK/China)"],
      "Formal Shirts":          ["Orient Craft (India, Delhi NCR)", "Ha-Meem Group (Bangladesh)", "DBL Group (Bangladesh)"],
      "Knitwear & Jumpers":     ["DBL Group (Bangladesh)", "SP Apparels Ltd (India)", "Viyellatex Group (Bangladesh)"],
      "Pyjamas & Nightwear":    ["Ha-Meem Group (Bangladesh)", "SP Apparels Ltd (India)", "DBL Group (Bangladesh)"],
      "Swimwear":               ["Pacific Textiles (HK/China)", "MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)"],
      "Sleepsuits & Bodysuits": ["SP Apparels Ltd (India, OEKO-TEX)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India)"],
      "Lingerie & Intimates":   ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "SP Apparels Ltd (India)"],
      "Blazers & Suits":        ["Ha-Meem Group (Bangladesh)", "Orient Craft (India)", "DBL Group (Bangladesh)"],
      "Chinos & Trousers":      ["DBL Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Pacific Jeans Ltd (Bangladesh)"],
      "Eveningwear":            ["Ha-Meem Group (Bangladesh)", "Shahi Exports (India)", "DBL Group (Bangladesh)"],
      "Blouses & Tops":         ["Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
      "T-Shirts & Polos":       ["SP Apparels Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)"],
      "Casual Shirts":          ["Ha-Meem Group (Bangladesh)", "Orient Craft (India, Delhi NCR)", "DBL Group (Bangladesh)"],
    },
    coo: "Bangladesh, India, China, Cambodia"
  },
  asda: {
    overviewStance: "Asda George focuses on high-volume supermarket retail. Clothing lines rely heavily on durable polyester-cotton blends and BCI cotton, using standard performance finishes to pass quality controls.",
    sustainability: "Asda's ESG goals focus on increasing recycled polyester (rPET) content and sourcing sustainable cotton. OEKO-TEX Standard 100 is mandatory for all children's lines.",
    sourcingInsight: "Procures mainly through large buying houses with vertical factory partnerships in Bangladesh and India (Coimbatore/Tirupur) to keep prices competitive.",
    upgradeAdvice: "TU/George can be beaten on sustainability and hand-feel. Sourcing 65% rPET / 35% Organic Cotton or using TENCEL blends instead of pure poly-cotton delivers a premium touch and stronger eco-credentials.",
    vendors: ["SP Apparels Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SQ Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Pacific Jeans Ltd (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":                ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "SQ Group (Bangladesh)"],
      "Jeans":                  ["SQ Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Pacific Jeans Ltd (Bangladesh)"],
      "Hoodies & Sweatshirts":  ["DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "SP Apparels Ltd (India)"],
      "Tops & T-Shirts":        ["KPR Mill Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SP Apparels Ltd (India)"],
      "Activewear":             ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
      "School Uniform":         ["SP Apparels Ltd (India)", "SQ Group (Bangladesh)", "DBL Group (Bangladesh)"],
      "Coats & Jackets":        ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "Youngone Corp (Bangladesh)"],
      "Formal Shirts":          ["DBL Group (Bangladesh)", "Orient Craft (India)", "SQ Group (Bangladesh)"],
      "Knitwear & Jumpers":     ["KPR Mill Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SP Apparels Ltd (India)"],
      "Pyjamas & Nightwear":    ["SP Apparels Ltd (India)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India)"],
      "Sleepsuits & Bodysuits": ["SP Apparels Ltd (India, OEKO-TEX)", "KPR Mill Ltd (India)", "DBL Group (Bangladesh)"],
      "Lingerie & Intimates":   ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "MAS Holdings (Sri Lanka)"],
      "Swimwear":               ["Pacific Textiles (HK/China)", "SQ Group (Bangladesh)", "MAS Kreeda (Sri Lanka)"],
      "Chinos & Trousers":      ["SQ Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "DBL Group (Bangladesh)"],
      "Eveningwear":            ["DBL Group (Bangladesh)", "Shahi Exports (India)", "SQ Group (Bangladesh)"],
      "Blouses & Tops":         ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "SQ Group (Bangladesh)"],
      "T-Shirts & Polos":       ["KPR Mill Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SP Apparels Ltd (India)"],
      "Casual Shirts":          ["DBL Group (Bangladesh)", "Orient Craft (India)", "SQ Group (Bangladesh)"],
    },
    coo: "Bangladesh, India, Sri Lanka"
  },
  sainsburys: {
    overviewStance: "Sainsbury's TU position is built on volume family clothing. Sourcing emphasizes BCI cotton, recycled polyester (REPREVE), and poly-cotton blends, applying stain-resistant finishes to school uniform and kids lines.",
    sustainability: "Sainsbury's is committed to 100% sustainably sourced cotton (BCI/Organic) and transitioning to recycled polyester. GRS certifications are required for recycled content claims.",
    sourcingInsight: "Sources through TU's dedicated ethical trade teams in the UK and four Asia sourcing offices in Hong Kong, Shanghai, Dhaka and Delhi. All factories must meet ethical and technical requirements before any orders are placed.",
    upgradeAdvice: "Upgrade to organic cotton and non-fluorinated finishes. Sainsbury's TU relies on standard chemical coatings; using premium eco-finishes like Teflon EcoElite™ or Ruco-Bac MED™ adds strong marketing value.",
    vendors: ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Echotex Ltd (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "FB DIS TICARET AS (Turkey)", "Taneks Giyim Tekstil (Turkey)"],
    vendorsByCategory: {
      "Dresses":                ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "FB DIS TICARET AS (Turkey)"],
      "Jeans":                  ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
      "Hoodies & Sweatshirts":  ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)"],
      "Tops & T-Shirts":        ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)"],
      "Activewear":             ["Tefron Europe SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)"],
      "School Uniform":         ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)"],
      "Coats & Jackets":        ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)", "DATSA TEXTIL SRL (Romania)"],
      "Formal Shirts":          ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
      "Knitwear & Jumpers":     ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)", "DATSA TEXTIL SRL (Romania)"],
      "Pyjamas & Nightwear":    ["Tefron Europe SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)"],
      "Swimwear":               ["Tefron Europe SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)"],
      "Sleepsuits & Bodysuits": ["Tefron Europe SRL (Romania)", "Echotex Ltd (Bangladesh)", "DATSA TEXTIL SRL (Romania)"],
      "Lingerie & Intimates":   ["Tefron Europe SRL (Romania)", "DATSA TEXTIL SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)"],
      "Blazers & Suits":        ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)", "DATSA TEXTIL SRL (Romania)"],
      "Chinos & Trousers":      ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)", "DATSA TEXTIL SRL (Romania)"],
      "Eveningwear":            ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "FB DIS TICARET AS (Turkey)"],
      "Blouses & Tops":         ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
      "T-Shirts & Polos":       ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)"],
      "Casual Shirts":          ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
    },
    coo: "Bangladesh, Turkey, Romania, China"
  },
  next: {
    overviewStance: "Next is the UK's leading mid-market fashion retailer. Sourcing emphasizes combed yarn, cotton-rich blends, and standard viscose, targeting solid wash-and-wear performance.",
    sustainability: "Targeting 90%+ responsible fibers (BCI, OCS, GRS, FSC-viscose) by 2025. Actively auditing supply chains for chemical safety (Reach compliant).",
    sourcingInsight: "Utilizes a balanced sourcing matrix: high-volume items in India and Bangladesh, quick-response fashion in Turkey and Eastern Europe.",
    upgradeAdvice: "Differentiate by shifting from standard viscose to LENZING™ ECOVERO™ or TENCEL™ Modal. Next's mid-tier pricing allows room for you to absorb the minor cost delta for far better environmental ratings.",
    vendors: ["Taqwa Fabrics Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)", "Square Fashions Ltd (Bangladesh)", "Utah Fashions Ltd (Bangladesh)", "Tusuka Trousers & Jeans Ltd (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":                ["Ananta Apparels Ltd (Bangladesh)", "Liz Fashion Industry Ltd (Bangladesh)", "Shahi Exports (India, Bengaluru)"],
      "Jeans":                  ["Tusuka Trousers & Jeans Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Artistic Milliners (Pakistan)"],
      "Hoodies & Sweatshirts":  ["Taqwa Fabrics Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)", "Echotex Ltd (Bangladesh)"],
      "Tops & T-Shirts":        ["Taqwa Fabrics Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)"],
      "Activewear":             ["Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)", "MAS Kreeda (Sri Lanka)"],
      "School Uniform":         ["Echotex Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)", "Taqwa Fabrics Ltd (Bangladesh)"],
      "Coats & Jackets":        ["Youngone Corp (Bangladesh)", "Kipas Holding (Turkey)", "Nien Hsing Textile (Vietnam/Cambodia)"],
      "Formal Shirts":          ["Best Shirts Limited (Bangladesh)", "Arvind Lifestyle (India)", "Kipas Holding (Turkey)"],
      "Knitwear & Jumpers":     ["AKM Knit Wear Limited (Bangladesh)", "Echotex Ltd (Bangladesh)", "KPR Mill Ltd (India)"],
      "Pyjamas & Nightwear":    ["KPR Mill Ltd (India)", "Ananta Apparels Ltd (Bangladesh)", "Taqwa Fabrics Ltd (Bangladesh)"],
      "Sleepsuits & Bodysuits": ["SP Apparels Ltd (India)", "Ananta Apparels Ltd (Bangladesh)", "Taqwa Fabrics Ltd (Bangladesh)"],
      "Lingerie & Intimates":   ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Z & Z Intimates Ltd (Bangladesh)"],
      "Swimwear":               ["MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
      "Blazers & Suits":        ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Ananta Apparels Ltd (Bangladesh)"],
      "Chinos & Trousers":      ["Arvind Mills (India, Ahmedabad)", "Utah Fashions Ltd (Bangladesh)", "Liz Fashion Industry Ltd (Bangladesh)"],
      "Eveningwear":            ["Liz Fashion Industry Ltd (Bangladesh)", "Shahi Exports (India)", "Ananta Apparels Ltd (Bangladesh)"],
      "Blouses & Tops":         ["Ananta Apparels Ltd (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Taqwa Fabrics Ltd (Bangladesh)"],
      "T-Shirts & Polos":       ["Taqwa Fabrics Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)"],
      "Casual Shirts":          ["Best Shirts Limited (Bangladesh)", "Arvind Lifestyle (India)", "Taqwa Fabrics Ltd (Bangladesh)"],
    },
    coo: "Turkey, India, China, Bangladesh"
  },
  hm: {
    overviewStance: "H&M is a global leader in fast-fashion. Sourcing balances rapid turnaround with highly visible sustainability initiatives, relying on organic cotton blends, recycled polyester, and FSC-certified viscose.",
    sustainability: "Part of the H&M Conscious program: aiming for 100% recycled or sustainably sourced materials by 2030. Currently a top buyer of GOTS organic cotton and recycled polyester.",
    sourcingInsight: "Maintains a massive supplier network in Bangladesh and China, with quick-response production in Turkey for the European market.",
    upgradeAdvice: "Compete by focusing on local/regional premium sourcing and smaller batch transparency. H&M's massive supply chain often suffers from consistency issues; offering certified trace-to-source fabrics (GOTS/GRS) beats their fast-fashion volume.",
    vendors: ["DBL Group (Bangladesh)", "Ananta Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Square Fashions Ltd (Bangladesh)", "Aydinli Group (Turkey)", "Shenzhou International (China)"],
    vendorsByCategory: {
      "Dresses":                ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Crystal International (HK/China)"],
      "Jeans":                  ["Artistic Milliners (Pakistan, Karachi)", "Nien Hsing Textile (Vietnam/Cambodia)", "Arvind Mills (India, Ahmedabad)"],
      "Hoodies & Sweatshirts":  ["Ananta Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Texhong Textile (China/Vietnam)"],
      "Tops & T-Shirts":        ["Shenzhou International (China)", "SP Apparels Ltd (India, Tirupur)", "Ha-Meem Group (Bangladesh)"],
      "Activewear":             ["Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)", "Pacific Textiles (HK/China)"],
      "School Uniform":         ["DBL Group (Bangladesh)", "KPR Mill Ltd (India)", "Ha-Meem Group (Bangladesh)"],
      "Coats & Jackets":        ["Shenzhou International (China)", "Nien Hsing Textile (Vietnam/Cambodia)", "Youngone Corp (Bangladesh)"],
      "Formal Shirts":          ["Esquel Group (China/Malaysia)", "Orient Craft (India)", "Arvind Lifestyle (India)"],
      "Knitwear & Jumpers":     ["DBL Group (Bangladesh)", "Shenzhou International (China)", "Ananta Group (Bangladesh)"],
      "Pyjamas & Nightwear":    ["Ananta Group (Bangladesh)", "SP Apparels Ltd (India)", "Ha-Meem Group (Bangladesh)"],
      "Sleepsuits & Bodysuits": ["SP Apparels Ltd (India, Tirupur)", "Ananta Group (Bangladesh)", "DBL Group (Bangladesh)"],
      "Lingerie & Intimates":   ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Pacific Textiles (HK/China)"],
      "Swimwear":               ["MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
      "Blazers & Suits":        ["Aydinli Group (Turkey)", "Arvind Lifestyle (India)", "DBL Group (Bangladesh)"],
      "Chinos & Trousers":      ["Arvind Mills (India)", "DBL Group (Bangladesh)", "Aydinli Group (Turkey)"],
      "Eveningwear":            ["Crystal International (HK/China)", "Shahi Exports (India)", "DBL Group (Bangladesh)"],
      "Blouses & Tops":         ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Crystal International (HK/China)"],
      "T-Shirts & Polos":       ["Shenzhou International (China)", "SP Apparels Ltd (India, Tirupur)", "Ha-Meem Group (Bangladesh)"],
      "Casual Shirts":          ["Esquel Group (China/Malaysia)", "Orient Craft (India)", "DBL Group (Bangladesh)"],
    },
    coo: "Bangladesh, China, Turkey, India"
  },
  asos: {
    overviewStance: "ASOS is an online-only fast fashion giant targeting Gen Z. Sourcing focuses on highly fluid, lightweight fabrics (viscose, polyester blends, jersey) with quick lead times.",
    sustainability: "Under pressure to reduce fast-fashion footprint. Increasing use of LENZING™ ECOVERO™ viscose, GRS-certified recycled polyester, and circular design principles.",
    sourcingInsight: "Relies on a highly flexible, short-lead sourcing model with significant volume out of Turkey and China, and quick-turn factories in the UK (Leicester).",
    upgradeAdvice: "ASOS fabrics are often lightweight to save on shipping costs. Beat them by sourcing heavier, premium GSM options (e.g. 180+ GSM for jersey or 240+ GSM for denim) which feel substantially more luxury and wash-resistant.",
    vendors: ["Kipas Holding (Turkey)", "AKM Knit Wear Limited (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)", "Orient Craft (India)", "DBL Group (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":                ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
      "Jeans":                  ["Kipas Holding (Turkey)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)"],
      "Hoodies & Sweatshirts":  ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
      "Tops & T-Shirts":        ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
      "Activewear":             ["MAS Kreeda (Sri Lanka)", "Far Eastern New Century (Taiwan)", "Pacific Textiles (HK/China)"],
      "Coats & Jackets":        ["Kipas Holding (Turkey)", "DBL Group (Bangladesh)", "Nien Hsing Textile (Vietnam/Cambodia)"],
      "Formal Shirts":          ["Orient Craft (India)", "Kipas Holding (Turkey)", "Esquel Group (China/Malaysia)"],
      "Knitwear & Jumpers":     ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
      "Pyjamas & Nightwear":    ["Fakir Apparels Ltd (Bangladesh)", "KPR Mill Ltd (India)", "Kipas Holding (Turkey)"],
      "Sleepsuits & Bodysuits": ["KPR Mill Ltd (India)", "DBL Group (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)"],
      "Lingerie & Intimates":   ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Kipas Holding (Turkey)"],
      "Swimwear":               ["Pacific Textiles (HK/China)", "MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)"],
      "Blazers & Suits":        ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)"],
      "Chinos & Trousers":      ["Kipas Holding (Turkey)", "Arvind Mills (India, Ahmedabad)", "DBL Group (Bangladesh)"],
      "Eveningwear":            ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
      "Blouses & Tops":         ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
      "T-Shirts & Polos":       ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
      "Casual Shirts":          ["Kipas Holding (Turkey)", "Orient Craft (India)", "Fakir Apparels Ltd (Bangladesh)"],
    },
    coo: "Turkey, China, India, UK"
  },
  ms: {
    overviewStance: "M&S is the benchmark for UK mid-to-premium retail. Sourcing is characterized by strict quality standards, combed BCI/Organic cotton, TENCEL™ Modal, and high wool content in tailoring.",
    sustainability: "Guided by the Plan A sustainability program. OEKO-TEX Standard 100 is a mandatory requirement across all textile lines. Targeting 100% recycled polyester by 2026.",
    sourcingInsight: "Works with premium, vertically-integrated manufacturers in India (Tirupur, Ahmedabad), Bangladesh, and Sri Lanka, demanding strict social and chemical compliance. Joined the Bangladesh Employment Insurance Scheme (EIS) in 2024/25.",
    upgradeAdvice: "To match or beat M&S, focus on GOTS organic cotton and closed-loop TENCEL™ Lyocell. Use high-performance natural blends (like cotton-silk or linen-TENCEL) to capture their premium demographic.",
    vendors: ["Shahi Exports (India, Bengaluru)", "Brandix Lanka (Sri Lanka)", "MAS Holdings (Sri Lanka)", "Beximco (Bangladesh)", "Eastman Exports (India, Tirupur)", "Arvind Mills (India, Ahmedabad)"],
    vendorsByCategory: {
      "Dresses":                ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
      "Jeans":                  ["Arvind Mills (India, Ahmedabad)", "Beximco (Bangladesh)", "Aarvee Denims (India, Ahmedabad)"],
      "Hoodies & Sweatshirts":  ["Brandix Lanka (Sri Lanka)", "Texport Industries (India, Bengaluru)", "KPR Mill Ltd (India, Tirupur)"],
      "Tops & T-Shirts":        ["Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
      "Activewear":             ["MAS Active (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Eclat Textile (Taiwan)"],
      "School Uniform":         ["Eastman Exports (India)", "Brandix Lanka (Sri Lanka)", "Beximco (Bangladesh)"],
      "Coats & Jackets":        ["Brandix Lanka (Sri Lanka)", "Youngone Corp (Bangladesh)", "Texport Industries (India)"],
      "Formal Shirts":          ["Arvind Lifestyle (India)", "Gokaldas Exports (India, Bengaluru)", "Eastman Exports (India)"],
      "Knitwear & Jumpers":     ["MAS Active (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Eastman Exports (India, Tirupur)"],
      "Pyjamas & Nightwear":    ["Brandix Lanka (Sri Lanka)", "MAS Holdings (Sri Lanka)", "Eastman Exports (India)"],
      "Sleepsuits & Bodysuits": ["SP Apparels Ltd (India, OEKO-TEX)", "Brandix Lanka (Sri Lanka)", "KPR Mill Ltd (India)"],
      "Lingerie & Intimates":   ["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
      "Swimwear":               ["MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
      "Blazers & Suits":        ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Gokaldas Exports (India)"],
      "Chinos & Trousers":      ["Arvind Mills (India)", "Brandix Lanka (Sri Lanka)", "Eastman Exports (India)"],
      "Eveningwear":            ["Shahi Exports (India)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
      "Blouses & Tops":         ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
      "T-Shirts & Polos":       ["Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
      "Casual Shirts":          ["Arvind Lifestyle (India)", "Gokaldas Exports (India, Bengaluru)", "Eastman Exports (India)"],
    },
    coo: "India, Bangladesh, Sri Lanka, Turkey"
  },
  johnlewis: {
    overviewStance: "John Lewis is a premium UK department store. Sourcing prioritizes luxury fibers like Egyptian cotton, extra fine merino wool, pure silk, and GOTS-certified organic cotton.",
    sustainability: "Enforces strict animal welfare (RWS, RDS) and GOTS organic cotton standards. Focuses on durability, circularity, and ethical sourcing throughout the supply chain.",
    sourcingInsight: "Procures from high-end vertical mills in Portugal, Turkey, Italy, and premium organic clusters in India (Coimbatore/Tirupur).",
    upgradeAdvice: "John Lewis sets the gold standard for premium retail. Match them by using fully certified GOTS organic cotton, RWS certified wool, or fine Egyptian/Pima cotton, backed by transparent mill-to-shelf traceability.",
    vendors: ["Johnstons of Elgin (Scotland, UK)", "Hawick Knitwear (Scotland, UK)", "MAS Holdings (Sri Lanka)", "Arvind Mills (India, Ahmedabad)", "Eastman Exports (India, Tirupur)", "SP Apparels Ltd (India)"],
    vendorsByCategory: {
      "Dresses":                ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
      "Jeans":                  ["Arvind Mills (India, Ahmedabad)", "Aarvee Denims (India, Ahmedabad)", "Beximco (Bangladesh)"],
      "Hoodies & Sweatshirts":  ["Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
      "Tops & T-Shirts":        ["SP Apparels Ltd (India, GOTS-certified)", "Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)"],
      "Activewear":             ["MAS Active (Sri Lanka)", "Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)"],
      "School Uniform":         ["SP Apparels Ltd (India)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
      "Coats & Jackets":        ["Johnstons of Elgin (Scotland, UK)", "MAS Holdings (Sri Lanka)", "Arvind Lifestyle (India)"],
      "Formal Shirts":          ["Arvind Mills (India)", "Gokaldas Exports (India, Bengaluru)", "Somelos Tecidos (Portugal)"],
      "Knitwear & Jumpers":     ["Johnstons of Elgin (Scotland, UK)", "Hawick Knitwear (Scotland, UK)", "Todd & Duncan (Scotland, UK)"],
      "Pyjamas & Nightwear":    ["Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)", "SP Apparels Ltd (India)"],
      "Sleepsuits & Bodysuits": ["SP Apparels Ltd (India, GOTS)", "Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India)"],
      "Lingerie & Intimates":   ["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
      "Swimwear":               ["MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
      "Blazers & Suits":        ["Arvind Lifestyle (India)", "Chester Barrie (Crewe, UK)", "Gokaldas Exports (India)"],
      "Chinos & Trousers":      ["Arvind Mills (India)", "Somelos Tecidos (Portugal)", "Eastman Exports (India)"],
      "Eveningwear":            ["Shahi Exports (India)", "Bombay Rayon Fashions (India)", "Somelos Tecidos (Portugal)"],
      "Blouses & Tops":         ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
      "T-Shirts & Polos":       ["SP Apparels Ltd (India, GOTS)", "Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)"],
      "Casual Shirts":          ["Arvind Mills (India)", "Somelos Tecidos (Portugal)", "Gokaldas Exports (India, Bengaluru)"],
    },
    coo: "India, Portugal, Turkey, Italy, Scotland (UK)"
  },
  charlesTyrwhitt: {
    overviewStance: "Charles Tyrwhitt is a premium British shirt brand known for 2-ply Egyptian cotton poplin and non-iron finishes. Sourcing prioritizes high-count combed cotton poplin, Oxford weaves, and twill constructions from established premium mills.",
    sustainability: "Holds Planet Mark certification (5th consecutive year, 2025). Transitioning to BCI and OCS cotton across core shirt lines. Non-iron finishes are OEKO-TEX® Standard 100 certified to eliminate formaldehyde concerns.",
    sourcingInsight: "Primary sourcing from India (Delhi NCR, Jaipur) for cotton poplin and twill shirting, with supplementary production in China and Portugal for premium weaves. Long-term mill partnerships preferred over spot buying.",
    upgradeAdvice: "To win Charles Tyrwhitt business, supply 2-ply 100s-count Egyptian or Giza cotton poplin with OEKO-TEX® Standard 100 certification and a non-iron finish. Delhi NCR and Jaipur shirting clusters are well-positioned; Planet Mark and BCI cotton certification will satisfy their sustainability audit requirements.",
    vendors: ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India, Bengaluru)", "Esquel Group (China/Malaysia)", "Arvind Lifestyle (India)"],
    vendorsByCategory: {
      "Formal Shirts":          ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India, Bengaluru)", "Esquel Group (China/Malaysia)"],
      "Chinos & Trousers":      ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India, Delhi NCR)"],
      "Knitwear & Jumpers":     ["Johnstons of Elgin (Scotland, UK)", "Arvind Lifestyle (India)", "Gokaldas Exports (India)"],
      "Blazers & Suits":        ["Arvind Lifestyle (India)", "Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)"],
      "Tops & T-Shirts":        ["Orient Craft (India)", "Gokaldas Exports (India)", "Arvind Lifestyle (India)"],
      "Eveningwear":            ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India)", "Esquel Group (China/Malaysia)"],
      "Coats & Jackets":        ["Arvind Lifestyle (India)", "Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)"],
      "Blouses & Tops":         ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India)", "Esquel Group (China/Malaysia)"],
      "T-Shirts & Polos":       ["Orient Craft (India)", "Gokaldas Exports (India)", "Arvind Lifestyle (India)"],
      "Casual Shirts":          ["Orient Craft (India, Delhi NCR)", "Esquel Group (China/Malaysia)", "Arvind Lifestyle (India)"],
    },
    coo: "India, China, Portugal"
  },
  reiss: {
    overviewStance: "Reiss is a premium British fashion brand (majority-owned by Next Plc since 2021). Sourcing leans on Next's established supply chain relationships while maintaining a higher design premium. Key fabrics include Italian-sourced wool blends, OEKO-TEX® certified viscose, and premium cotton poplin.",
    sustainability: "OEKO-TEX® certified basics. Benefits from Next's sustainability infrastructure: BCI cotton targets, RWS wool commitments (50% by 2025), and Reach chemical compliance across all lines. Under Next ownership, supply chain auditing has significantly improved.",
    sourcingInsight: "Leverages Next's supply chain hubs: Turkey (Kipas Holding) for quick-turn wovens, India for cotton and jersey, with Italian fabric sourcing for premium tailoring lines. Smaller batch sizes than Next mainline allow premium mill access.",
    upgradeAdvice: "To supply Reiss, offer OEKO-TEX® certified premium wovens — Italian-style wool-viscose blends or TENCEL™ Lyocell crepe. Being approved in Next's supplier network is a strong gateway since Reiss uses the same factories at premium specs.",
    vendors: ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)", "Arvind Lifestyle (India)"],
    vendorsByCategory: {
      "Dresses":                ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)"],
      "Jeans":                  ["Arvind Mills (India, Ahmedabad)", "Kipas Holding (Turkey)", "Beximco (Bangladesh)"],
      "Formal Shirts":          ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
      "Knitwear & Jumpers":     ["Johnstons of Elgin (Scotland, UK)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
      "Blazers & Suits":        ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)"],
      "Eveningwear":            ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
      "Coats & Jackets":        ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Youngone Corp (Bangladesh)"],
      "Chinos & Trousers":      ["Arvind Mills (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
      "Tops & T-Shirts":        ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
      "Blouses & Tops":         ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)"],
      "T-Shirts & Polos":       ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
      "Casual Shirts":          ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
    },
    coo: "Turkey, India, Italy, China"
  },
  tedBaker: {
    overviewStance: "Ted Baker is a British luxury lifestyle brand, acquired by Authentic Brands Group (ABG) in 2024 following administration. The brand now operates on a licensed model with ABG managing IP while retail partners handle sourcing. Fabrics include premium wool blends, FSC® viscose, and OEKO-TEX® certified cotton.",
    sustainability: "OEKO-TEX® certification maintained across core lines. FSC® viscose (including TENCEL™) used for dresses and blouses. Pre-ABG acquisition supply chain had advanced BCI cotton and GRS recycled polyester commitments; licensing model continuation is being confirmed.",
    sourcingInsight: "Historically sourced from Turkey (wovens, tailoring), India (knitwear, jersey), and Portugal (premium shirts). Under ABG licensing, existing factory relationships are largely maintained with licensee retailers managing procurement directly.",
    upgradeAdvice: "Ted Baker's ABG licensing model means winning a licensee retailer (such as Next or a department store buyer) is the entry point. Offer premium OEKO-TEX® certified wovens and TENCEL™ Lyocell dresses with FSC® certification.",
    vendors: ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)", "Shahi Exports (India, Bengaluru)"],
    vendorsByCategory: {
      "Dresses":                ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
      "Formal Shirts":          ["Orient Craft (India, Delhi NCR)", "Esquel Group (China/Malaysia)", "Kipas Holding (Turkey)"],
      "Knitwear & Jumpers":     ["Johnstons of Elgin (Scotland, UK)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
      "Blazers & Suits":        ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)"],
      "Eveningwear":            ["Shahi Exports (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
      "Coats & Jackets":        ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Youngone Corp (Bangladesh)"],
      "Chinos & Trousers":      ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
      "Jeans":                  ["Arvind Mills (India, Ahmedabad)", "Kipas Holding (Turkey)", "Artistic Milliners (Pakistan)"],
      "Tops & T-Shirts":        ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
      "Blouses & Tops":         ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
      "T-Shirts & Polos":       ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
      "Casual Shirts":          ["Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
    },
    coo: "Turkey, India, Portugal, China"
  },
  default: {
    overviewStance: "This brand occupies a specialized niche in the UK market, balancing design aesthetics with consumer expectations around fabric quality and durability.",
    sustainability: "Meets baseline UK Reach and chemical safety regulations, with growing adoption of BCI cotton and recycled polyester to satisfy sustainability targets.",
    sourcingInsight: "Procures through established regional agents, balancing cost in Asia with quick-turn production in Turkey or North Africa.",
    upgradeAdvice: "Differentiate by moving to certified sustainable fibers (GOTS, GRS, FSC) and offering transparent sourcing information, which appeals to conscious modern consumers.",
    vendors: ["Standard Vertical Mills", "Regional Buying Agencies"],
    coo: "India, Bangladesh, Turkey, China"
  }
};
const getBrandProfile = (brandName) => {
  const name = brandName.toLowerCase();
  if (name.includes("sainsbury") || name.includes("tu")) return BRAND_PROFILES.sainsburys;
  if (name.includes("asda") || name.includes("george")) return BRAND_PROFILES.asda;
  if (name.includes("primark")) return BRAND_PROFILES.primark;
  if (name.includes("charles tyrwhitt") || name.includes("tyrwhitt")) return BRAND_PROFILES.charlesTyrwhitt;
  if (name.includes("ted baker")) return BRAND_PROFILES.tedBaker;
  if (name.includes("reiss")) return BRAND_PROFILES.reiss;
  if (name.includes("next")) return BRAND_PROFILES.next;
  if (name.includes("m&s") || name.includes("marks")) return BRAND_PROFILES.ms;
  if (name.includes("john lewis")) return BRAND_PROFILES.johnlewis;
  if (name.includes("h&m") || name.includes("hm")) return BRAND_PROFILES.hm;
  if (name.includes("asos")) return BRAND_PROFILES.asos;
  return BRAND_PROFILES.default;
};

// Generates highly specific fabric details based on category keywords
const getCategoryFabric = (category, isPremium, isBudget) => {
  const cat = category.toLowerCase();
  
  if (cat.includes("school") || cat.includes("uniform")) {
    return {
      name: "Polyester-Cotton Twill",
      composition: isBudget ? "65% Recycled Polyester / 35% BCI Cotton" : "65% Recycled Polyester / 35% Organic Cotton",
      gsm: isBudget ? 185 : 210,
      weave: "2/1 Twill Weave",
      cert: isBudget ? "BCI + GRS + OEKO-TEX" : "GOTS + GRS + OEKO-TEX",
      sourcingCountry: "India",
      sourcingRegion: "Coimbatore",
      usage: "Trousers, Skirts, and Blazers",
      millInfo: "SP Apparels Ltd (India, Tirupur)"
    };
  }
  
  if (cat.includes("dress") || cat.includes("skirt") || cat.includes("kaftan") || cat.includes("occasion")) {
    return {
      name: isPremium ? "TENCEL™ Lyocell Crepe" : isBudget ? "Polyester Georgette" : "LENZING™ ECOVERO™ Viscose",
      composition: isPremium ? "100% TENCEL™ Lyocell" : isBudget ? "100% Recycled Polyester" : "100% ECOVERO™ Viscose",
      gsm: isBudget ? 80 : 120,
      weave: "Crepe Plain Weave",
      cert: isPremium ? "FSC® Certified + OEKO-TEX" : isBudget ? "GRS Certified" : "FSC® Certified + Reach Compliant",
      sourcingCountry: "India",
      sourcingRegion: "Surat",
      usage: "Flowy Dresses, Kaftans, and Skirts",
      millInfo: "Surat Synthetic Weavers"
    };
  }
  
  if (cat.includes("t-shirt") || cat.includes("polo") || cat.includes("top") || cat.includes("basics")) {
    return {
      name: isPremium ? "Organic Combed Cotton Jersey" : "Single Jersey Cotton",
      composition: isPremium ? "100% GOTS Organic Cotton (Combed)" : isBudget ? "100% Conventional Cotton" : "100% BCI Cotton",
      gsm: isBudget ? 150 : 180,
      weave: "Single Jersey Knit",
      cert: isPremium ? "GOTS Certified" : "BCI + OEKO-TEX Standard 100",
      sourcingCountry: "India",
      sourcingRegion: "Tirupur",
      usage: "Basic Tees, Tops, and Polo Shirts",
      millInfo: "Tirupur Knitwear Cooperative"
    };
  }
  
  if (cat.includes("jeans") || cat.includes("denim")) {
    return {
      name: "Stretch Denim Twill",
      composition: isBudget ? "99% Cotton / 1% Elastane" : isPremium ? "98% Organic Cotton / 2% Lycra" : "98% BCI Cotton / 2% Elastane",
      gsm: isBudget ? 310 : 350,
      weave: "3/1 Right Hand Twill",
      cert: isPremium ? "GOTS + OEKO-TEX" : "BCI Cotton",
      sourcingCountry: "India",
      sourcingRegion: "Ahmedabad",
      usage: "Five-pocket Jeans and Denim Jackets",
      millInfo: "Ahmedabad Denim Mills"
    };
  }
  
  if (cat.includes("hoodie") || cat.includes("sweatshirt") || cat.includes("fleece") || cat.includes("lounge")) {
    return {
      name: "Brushback Fleece",
      composition: isBudget ? "50% Cotton / 50% Polyester" : isPremium ? "100% Organic Cotton" : "80% Organic Cotton / 20% rPET",
      gsm: isBudget ? 290 : 330,
      weave: "Fleece Knit (Brushed)",
      cert: isPremium ? "GOTS Certified" : "GRS + OCS Certified",
      sourcingCountry: "India",
      sourcingRegion: "Tirupur",
      usage: "Heavyweight Hoodies and Loungewear",
      millInfo: "Ludhiana Wool & Fleece Weavers"
    };
  }
  
  if (cat.includes("active") || cat.includes("sport") || cat.includes("swim")) {
    return {
      name: isPremium ? "ECONYL® Recycled Nylon Tricot" : "Polyester Spandex Interlock",
      composition: isPremium ? "78% ECONYL® Recycled Nylon / 22% Elastane" : "85% Recycled Polyester / 15% Spandex",
      gsm: 200,
      weave: "Warp Knit / Interlock Knit",
      cert: "GRS Certified + bluesign® approved",
      sourcingCountry: "Taiwan",
      sourcingRegion: "Taipei (Performance Synthetics)",
      usage: "Performance Leggings and Chlorine-resistant Swimwear",
      millInfo: "Far Eastern New Century"
    };
  }
  
  if (cat.includes("coat") || cat.includes("jacket") || cat.includes("outerwear")) {
    return {
      name: isBudget ? "Polyester Ripstop" : "Wool Melton",
      composition: isBudget ? "100% Recycled Polyester" : "60% Wool / 40% Recycled Polyester",
      gsm: isBudget ? 110 : 480,
      weave: "Melton Weave or Ripstop Weave",
      cert: isBudget ? "GRS Certified" : "RWS (Responsible Wool) + GRS",
      sourcingCountry: isBudget ? "China" : "India",
      sourcingRegion: isBudget ? "Shengze (Suzhou)" : "Ludhiana",
      usage: "Overcoats, Puffers, and Technical Jackets",
      millInfo: "Ludhiana Woolen Mills Ltd"
    };
  }
  
  if (cat.includes("baby") || cat.includes("sleepsuit") || cat.includes("romper") || cat.includes("muslin") || cat.includes("blanket")) {
    return {
      name: cat.includes("muslin") ? "Double Layer Gauze Muslin" : "Baby Interlock Knit",
      composition: "100% GOTS Organic Cotton",
      gsm: cat.includes("muslin") ? 35 : 160,
      weave: "Leno Plain Weave or Interlock Knit",
      cert: "GOTS Certified + OEKO-TEX Standard 100 Class 1",
      sourcingCountry: "India",
      sourcingRegion: "Tirupur",
      usage: "Baby Sleepsuits, Rompers, and Swaddle Blankets",
      millInfo: "Organic Baby Textile Co."
    };
  }
  
  if (cat.includes("pyjama") || cat.includes("nightwear") || cat.includes("lingerie") || cat.includes("intimates")) {
    return {
      name: "TENCEL™ Modal Jersey",
      composition: "100% TENCEL™ Modal",
      gsm: 130,
      weave: "Fine Single Jersey Knit",
      cert: "FSC® Certified + OEKO-TEX Standard 100",
      sourcingCountry: "India",
      sourcingRegion: "Tirupur",
      usage: "Sleepwear, Soft Bras, and Knickers",
      millInfo: "Lenzing Modal Certified Mills"
    };
  }
  
  // Default
  return {
    name: "Combed Cotton Poplin",
    composition: "100% Combed BCI Cotton",
    gsm: 120,
    weave: "Plain Weave (40s count)",
    cert: "BCI + OEKO-TEX 100",
    sourcingCountry: "India",
    sourcingRegion: "Erode",
    usage: "Formal Shirting and Light Wovens",
    millInfo: "Erode Shirting Coop"
  };
};

export const getOfflineDeepDive = (brandName, category) => {
  const profile = getBrandProfile(brandName);
  const brandLower = brandName.toLowerCase();
  
  const isPremium = brandLower.includes("john lewis") || brandLower.includes("m&s") || brandLower.includes("agent") || brandLower.includes("sweaty");
  const isBudget = brandLower.includes("primark") || brandLower.includes("asda") || brandLower.includes("sainsbury") || brandLower.includes("tu");
  
  const fabric = getCategoryFabric(category, isPremium, isBudget);
  
  // Construct overview matching the brand + category
  const overview = `${brandName}'s approach to ${category || "this category"} focuses on high-efficiency production. ${profile.overviewStance}`;
  
  // Construct beat-them recommendation
  const upgradeFor = `To compete effectively with ${brandName} in ${category}, ${profile.upgradeAdvice}`;

  // Pick category-specific vendors if available, fall back to brand-level list
  const categoryKey = Object.keys(profile.vendorsByCategory || {}).find(k =>
    k.toLowerCase() === (category || '').toLowerCase()
  );
  const knownVendors = categoryKey
    ? profile.vendorsByCategory[categoryKey]
    : (profile.vendors || []);

  return {
    overview,
    fabrics: [fabric],
    coo: profile.coo,
    knownVendors,
    sustainabilityStance: profile.sustainability,
    sourcingInsight: profile.sourcingInsight,
    upgradeFor: upgradeFor
  };
};
