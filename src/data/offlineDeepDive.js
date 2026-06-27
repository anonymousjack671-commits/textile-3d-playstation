// Offline deep-dive intelligence database & generator for UK retail brands
// Enables fully functional "Deep Dive" drawer when the local TEXAI server is offline.

const BRAND_PROFILES = {
  primark: {
    overviewStance: "Primark leverages massive economies of scale to keep retail prices low. Sourcing focuses on high-efficiency conventional or BCI cotton and virgin polyester, with a recent transition plan to recycled synthetics.",
    sustainability: "Aligned with the Primark Cares program: committing to 100% sustainable cotton (BCI/recycled) and recycled polyester across all clothing by 2030. Currently conventional-heavy with basic BCI coverage.",
    sourcingInsight: "Sourcing is highly consolidated in low-cost hubs, utilizing long-term volume contracts in Bangladesh (Dhaka) and India (Tirupur) to maintain price margins.",
    upgradeAdvice: "To outperform Primark, avoid low-grade carded cotton or virgin polyester. Sourcing GOTS-certified organic cotton or GRS-certified recycled polyester with a certified OEKO-TEX 100 finish provides a distinct quality and safety premium.",
    vendors: ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "SP Apparels (India)", "Pacific Jeans (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":              ["BEXIMCO Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Tirupur)"],
      "Jeans":                ["Pacific Jeans (Bangladesh)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)"],
      "Hoodies & Sweatshirts":["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "KPR Mill (India, Tirupur)"],
      "T-Shirts & Tops":      ["SP Apparels (India, Tirupur)", "Classic Fashions (Bangladesh)", "KPR Mill (India, Tirupur)"],
      "Activewear":           ["Crystal International (HK/China)", "Epic Wear (Bangladesh)", "Eclat Textile (Taiwan)"],
      "School Uniforms":      ["William Baird (Bangladesh)", "Tirupur Uniform Cluster (India)", "Classic Fashions (Bangladesh)"],
      "Outerwear & Coats":    ["Youngone Corp (Bangladesh)", "Nien Hsing Textile (Cambodia)", "Pacific Textiles (HK/China)"],
      "Formal Shirts":        ["Orient Craft (India, Delhi NCR)", "Ha-Meem Group (Bangladesh)", "Classic Fashions (Bangladesh)"],
      "Knitwear & Jumpers":   ["DBL Group (Bangladesh)", "SP Apparels (India)", "Tirupur Knitwear Cluster (India)"],
      "Nightwear & Pyjamas":  ["BEXIMCO Group (Bangladesh)", "Tirupur Nightwear Cluster (India)", "Classic Fashions (Bangladesh)"],
      "Swimwear":             ["Epic Wear (Bangladesh)", "MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)"],
      "Baby & Kids":          ["SP Apparels (India, OEKO-TEX)", "Naz Bangladesh Ltd", "Tirupur Baby Knitwear (India)"],
      "Lingerie & Intimates": ["MAS Holdings (Sri Lanka)", "Cressida International (HK)", "SP Apparels (India)"],
      "Men's Tailoring":      ["Ha-Meem Group (Bangladesh)", "Orient Craft (India)", "Nien Hsing Textile (Cambodia)"],
      "Casual Trousers":      ["DBL Group (Bangladesh)", "Arvind Mills (India)", "Classic Fashions (Bangladesh)"],
      "Occasion Wear":        ["BEXIMCO Group (Bangladesh)", "Shahi Exports (India)", "Ha-Meem Group (Bangladesh)"],
    },
    coo: "Bangladesh, India, China, Cambodia"
  },
  asda: {
    overviewStance: "Asda George focuses on high-volume supermarket retail. Clothing lines rely heavily on durable polyester-cotton blends and BCI cotton, using standard performance finishes to pass quality controls.",
    sustainability: "Asda's ESG goals focus on increasing recycled polyester (rPET) content and sourcing sustainable cotton. OEKO-TEX Standard 100 is mandatory for all children's lines.",
    sourcingInsight: "Procures mainly through large buying houses with vertical factory partnerships in Bangladesh and India (Coimbatore/Tirupur) to keep prices competitive.",
    upgradeAdvice: "TU/George can be beaten on sustainability and hand-feel. Sourcing 65% rPET / 35% Organic Cotton or using TENCEL blends instead of pure poly-cotton delivers a premium touch and stronger eco-credentials.",
    vendors: ["Coimbatore Textiles Ltd (India)", "Dhaka Apparel Hubs (Bangladesh)", "SQ Group (Bangladesh)", "SP Apparels (India)", "Pacific Textiles (HK/China)"],
    vendorsByCategory: {
      "Dresses":              ["Dhaka Apparel Hubs (Bangladesh)", "Coimbatore Textiles Ltd (India)", "SQ Group (Bangladesh)"],
      "Jeans":                ["SQ Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Pacific Jeans (Bangladesh)"],
      "Hoodies & Sweatshirts":["Dhaka Knitwear Cluster (Bangladesh)", "Tirupur Fleece Mills (India)", "KPR Mill (India)"],
      "T-Shirts & Tops":      ["Tirupur Knitwear Cluster (India)", "Dhaka Apparel Hubs (Bangladesh)", "SP Apparels (India)"],
      "Activewear":           ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "Tirupur Synthetics (India)"],
      "School Uniforms":      ["William Baird (Bangladesh)", "Coimbatore Wovens (India)", "Classic Fashions (Bangladesh)"],
      "Outerwear & Coats":    ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "Youngone Corp (Bangladesh)"],
      "Formal Shirts":        ["Dhaka Apparel Hubs (Bangladesh)", "Coimbatore Textiles (India)", "Orient Craft (India)"],
      "Knitwear & Jumpers":   ["Tirupur Knitwear Cluster (India)", "DBL Group (Bangladesh)", "Dhaka Apparel Hubs (Bangladesh)"],
      "Nightwear & Pyjamas":  ["Tirupur Nightwear Cluster (India)", "Dhaka Apparel Hubs (Bangladesh)", "SP Apparels (India)"],
      "Baby & Kids":          ["SP Apparels (India, OEKO-TEX)", "Tirupur Baby Knitwear (India)", "Dhaka Apparel Hubs (Bangladesh)"],
      "Lingerie & Intimates": ["Coimbatore Textiles Ltd (India)", "SQ Group (Bangladesh)", "Pacific Textiles (HK/China)"],
      "Swimwear":             ["Pacific Textiles (HK/China)", "SQ Group (Bangladesh)", "Sri Lanka EPZ Factories"],
      "Casual Trousers":      ["SQ Group (Bangladesh)", "Coimbatore Textiles (India)", "Dhaka Apparel Hubs (Bangladesh)"],
      "Occasion Wear":        ["Dhaka Apparel Hubs (Bangladesh)", "Coimbatore Textiles (India)", "SQ Group (Bangladesh)"],
    },
    coo: "Bangladesh, India, Sri Lanka"
  },
  sainsburys: {
    overviewStance: "Sainsbury's TU position is built on volume family clothing. Sourcing emphasizes BCI cotton, recycled polyester (REPREVE), and poly-cotton blends, applying stain-resistant finishes to school uniform and kids lines.",
    sustainability: "Sainsbury's is committed to 100% sustainably sourced cotton (BCI/Organic) and transitioning to recycled polyester. GRS certifications are required for recycled content claims.",
    sourcingInsight: "Leverages vertical relationships in Coimbatore for uniform twills, and Tirupur for knitwear to achieve reliable fabric consistency.",
    upgradeAdvice: "Upgrade to organic cotton and non-fluorinated finishes. Sainsbury's TU relies on standard chemical coatings; using premium eco-finishes like Teflon EcoElite™ or Ruco-Bac MED™ adds strong marketing value.",
    vendors: ["Coimbatore Wovens (India)", "Tirupur Knits Ltd (India)", "Pacific Jeans (Bangladesh)", "DBL Group (Bangladesh)", "SQ Group (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":              ["Coimbatore Wovens (India)", "Tirupur Woven Cluster (India)", "DBL Group (Bangladesh)"],
      "Jeans":                ["Pacific Jeans (Bangladesh)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India)"],
      "Hoodies & Sweatshirts":["Tirupur Knits Ltd (India)", "DBL Group (Bangladesh)", "KPR Mill (India)"],
      "T-Shirts & Tops":      ["Tirupur Knits Ltd (India)", "SP Apparels (India)", "DBL Group (Bangladesh)"],
      "Activewear":           ["Pacific Textiles (HK/China)", "Tirupur Synthetics (India)", "SQ Group (Bangladesh)"],
      "School Uniforms":      ["Coimbatore Twill Mills (India)", "William Baird (Bangladesh)", "Tirupur Uniform Cluster (India)"],
      "Outerwear & Coats":    ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "Youngone Corp (Bangladesh)"],
      "Formal Shirts":        ["Coimbatore Wovens (India)", "DBL Group (Bangladesh)", "Orient Craft (India)"],
      "Knitwear & Jumpers":   ["Tirupur Knits Ltd (India)", "Ludhiana Knitwear (India)", "DBL Group (Bangladesh)"],
      "Nightwear & Pyjamas":  ["Tirupur Nightwear Cluster (India)", "DBL Group (Bangladesh)", "SP Apparels (India)"],
      "Baby & Kids":          ["Tirupur Organic Cluster (India)", "SP Apparels (India)", "Naz Bangladesh Ltd"],
      "Lingerie & Intimates": ["Coimbatore Textiles (India)", "SQ Group (Bangladesh)", "Pacific Textiles (HK/China)"],
      "Swimwear":             ["Pacific Textiles (HK/China)", "MAS Kreeda (Sri Lanka)", "Sri Lanka EPZ Factories"],
      "Casual Trousers":      ["Coimbatore Wovens (India)", "DBL Group (Bangladesh)", "Pacific Jeans (Bangladesh)"],
      "Occasion Wear":        ["Coimbatore Wovens (India)", "DBL Group (Bangladesh)", "Tirupur Woven Cluster (India)"],
    },
    coo: "India, Bangladesh, Turkey"
  },
  next: {
    overviewStance: "Next is the UK's leading mid-market fashion retailer. Sourcing emphasizes combed yarn, cotton-rich blends, and standard viscose, targeting solid wash-and-wear performance.",
    sustainability: "Targeting 90%+ responsible fibers (BCI, OCS, GRS, FSC-viscose) by 2025. Actively auditing supply chains for chemical safety (Reach compliant).",
    sourcingInsight: "Utilizes a balanced sourcing matrix: high-volume items in India and Bangladesh, quick-response fashion in Turkey and Eastern Europe.",
    upgradeAdvice: "Differentiate by shifting from standard viscose to LENZING™ ECOVERO™ or TENCEL™ Modal. Next's mid-tier pricing allows room for you to absorb the minor cost delta for far better environmental ratings.",
    vendors: ["Kipas Holding (Turkey)", "KPR Mill (India)", "Ha-Meem Group (Bangladesh)", "Arvind Mills (India)", "DBL Group (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":              ["Ha-Meem Group (Bangladesh)", "Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)"],
      "Jeans":                ["Arvind Mills (India, Ahmedabad)", "Classic Fashions (Bangladesh)", "Artistic Milliners (Pakistan)"],
      "Hoodies & Sweatshirts":["DBL Group (Bangladesh)", "KPR Mill (India, Tirupur)", "Ludhiana Knitwear (India)"],
      "T-Shirts & Tops":      ["KPR Mill (India, Tirupur)", "SP Apparels (India)", "Ha-Meem Group (Bangladesh)"],
      "Activewear":           ["Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)", "Sri Lanka EPZ Factories"],
      "School Uniforms":      ["William Baird (Bangladesh)", "Tirupur Uniform Mills (India)", "Classic Fashions (Bangladesh)"],
      "Outerwear & Coats":    ["Youngone Corp (Bangladesh)", "Kipas Holding (Turkey)", "Nien Hsing Textile (Cambodia)"],
      "Formal Shirts":        ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Esquel Group (China/Malaysia)"],
      "Knitwear & Jumpers":   ["Ludhiana Knitwear (India)", "DBL Group (Bangladesh)", "Tirupur Knitwear Cluster (India)"],
      "Nightwear & Pyjamas":  ["KPR Mill (India)", "Ha-Meem Group (Bangladesh)", "Tirupur Nightwear Cluster (India)"],
      "Baby & Kids":          ["SP Apparels (India)", "Ha-Meem Group (Bangladesh)", "KPR Mill (India)"],
      "Lingerie & Intimates": ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Coimbatore Textiles (India)"],
      "Swimwear":             ["MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
      "Men's Tailoring":      ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Classic Fashions (Bangladesh)"],
      "Women's Tailoring":    ["Orient Craft (India)", "Kipas Holding (Turkey)", "Ha-Meem Group (Bangladesh)"],
      "Casual Trousers":      ["Arvind Mills (India)", "DBL Group (Bangladesh)", "Kipas Holding (Turkey)"],
      "Occasion Wear":        ["Ha-Meem Group (Bangladesh)", "Orient Craft (India)", "Kipas Holding (Turkey)"],
    },
    coo: "Turkey, India, China, Bangladesh"
  },
  hm: {
    overviewStance: "H&M is a global leader in fast-fashion. Sourcing balances rapid turnaround with highly visible sustainability initiatives, relying on organic cotton blends, recycled polyester, and FSC-certified viscose.",
    sustainability: "Part of the H&M Conscious program: aiming for 100% recycled or sustainably sourced materials by 2030. Currently a top buyer of GOTS organic cotton and recycled polyester.",
    sourcingInsight: "Maintains a massive supplier network in Bangladesh and China, with quick-response production in Turkey for the European market.",
    upgradeAdvice: "Compete by focusing on local/regional premium sourcing and smaller batch transparency. H&M's massive supply chain often suffers from consistency issues; offering certified trace-to-source fabrics (GOTS/GRS) beats their fast-fashion volume.",
    vendors: ["DBL Group (Bangladesh)", "Shahi Exports (India)", "Aydinli Group (Turkey)", "Shenzhou International (China)", "Knit Asia (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":              ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Crystal International (HK/China)"],
      "Jeans":                ["Artistic Milliners (Pakistan, Karachi)", "Nien Hsing Textile (Vietnam)", "Arvind Mills (India, Ahmedabad)"],
      "Hoodies & Sweatshirts":["Knit Asia (Bangladesh)", "KPR Mill (India, Tirupur)", "Texhong Textile (China/Vietnam)"],
      "T-Shirts & Tops":      ["Shenzhou International (China)", "SP Apparels (India, Tirupur)", "Eastern Knitting (Bangladesh)"],
      "Activewear":           ["Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)", "Pacific Textiles (HK/China)"],
      "School Uniforms":      ["DBL Group (Bangladesh)", "KPR Mill (India)", "Classic Fashions (Bangladesh)"],
      "Outerwear & Coats":    ["Suzhou Textile Group (China)", "Nien Hsing Textile (Vietnam)", "Youngone Corp (Bangladesh)"],
      "Formal Shirts":        ["Esquel Group (China/Malaysia)", "Orient Craft (India)", "Arvind Lifestyle (India)"],
      "Knitwear & Jumpers":   ["DBL Group (Bangladesh)", "Tirupur Knitwear Cluster (India)", "Shenzhou International (China)"],
      "Nightwear & Pyjamas":  ["Knit Asia (Bangladesh)", "SP Apparels (India)", "Tirupur Nightwear Cluster (India)"],
      "Baby & Kids":          ["SP Apparels (India, Tirupur)", "Knit Asia (Bangladesh)", "DBL Group (Bangladesh)"],
      "Lingerie & Intimates": ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Pacific Textiles (HK/China)"],
      "Swimwear":             ["MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
      "Men's Tailoring":      ["Aydinli Group (Turkey)", "Arvind Lifestyle (India)", "DBL Group (Bangladesh)"],
      "Women's Tailoring":    ["DBL Group (Bangladesh)", "Shahi Exports (India)", "Aydinli Group (Turkey)"],
      "Casual Trousers":      ["Arvind Mills (India)", "DBL Group (Bangladesh)", "Aydinli Group (Turkey)"],
      "Occasion Wear":        ["Crystal International (HK/China)", "Shahi Exports (India)", "DBL Group (Bangladesh)"],
      "Sports Bras":          ["Eclat Textile (Taiwan)", "MAS Active (Sri Lanka)", "Far Eastern New Century (Taiwan)"],
    },
    coo: "Bangladesh, China, Turkey, India"
  },
  asos: {
    overviewStance: "ASOS is an online-only fast fashion giant targeting Gen Z. Sourcing focuses on highly fluid, lightweight fabrics (viscose, polyester blends, jersey) with quick lead times.",
    sustainability: "Under pressure to reduce fast-fashion footprint. Increasing use of LENZING™ ECOVERO™ viscose, GRS-certified recycled polyester, and circular design principles.",
    sourcingInsight: "Relies on a highly flexible, short-lead sourcing model with significant volume out of Turkey and China, and quick-turn factories in the UK (Leicester).",
    upgradeAdvice: "ASOS fabrics are often lightweight to save on shipping costs. Beat them by sourcing heavier, premium GSM options (e.g. 180+ GSM for jersey or 240+ GSM for denim) which feel substantially more luxury and wash-resistant.",
    vendors: ["Kipas Holding (Turkey)", "Leicester Apparel Co. (UK)", "Guangdong Garment Hubs (China)", "Tirupur Knitwear (India)", "Denim Expert Ltd (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":              ["Kipas Holding (Turkey)", "Leicester Apparel Co. (UK)", "Guangdong Garment Parks (China)"],
      "Jeans":                ["Kipas Denim (Turkey, Kahramanmaraş)", "Denim Expert Ltd (Bangladesh)", "Guangdong Garment Parks (China)"],
      "Hoodies & Sweatshirts":["Leicester Apparel Co. (UK)", "Tirupur Knitwear Hubs (India)", "Kipas Holding (Turkey)"],
      "T-Shirts & Tops":      ["Leicester Apparel Co. (UK)", "Tirupur Knitwear Hubs (India)", "Guangdong Garment Parks (China)"],
      "Activewear":           ["Sri Lanka EPZ Factories", "Taiwan Performance Knit Mills", "Pacific Textiles (HK/China)"],
      "Outerwear & Coats":    ["Guangdong Garment Parks (China)", "Kipas Holding (Turkey)", "Nien Hsing Textile (Vietnam)"],
      "Formal Shirts":        ["Guangdong Garment Parks (China)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
      "Knitwear & Jumpers":   ["Leicester Apparel Co. (UK)", "Tirupur Knitwear Hubs (India)", "Kipas Holding (Turkey)"],
      "Nightwear & Pyjamas":  ["Tirupur Nightwear Cluster (India)", "Leicester Apparel Co. (UK)", "Guangdong Garment Parks (China)"],
      "Baby & Kids":          ["Tirupur Baby Knitwear (India)", "Guangdong Garment Parks (China)", "Leicester Apparel Co. (UK)"],
      "Lingerie & Intimates": ["Sri Lanka EPZ Factories", "MAS Holdings (Sri Lanka)", "Leicester Apparel Co. (UK)"],
      "Swimwear":             ["Pacific Textiles (HK/China)", "Sri Lanka EPZ Factories", "Eclat Textile (Taiwan)"],
      "Men's Tailoring":      ["Kipas Holding (Turkey)", "Guangdong Garment Parks (China)", "Leicester Apparel Co. (UK)"],
      "Women's Tailoring":    ["Kipas Holding (Turkey)", "Guangdong Garment Parks (China)", "Leicester Apparel Co. (UK)"],
      "Casual Trousers":      ["Kipas Holding (Turkey)", "Guangdong Garment Parks (China)", "Tirupur Woven Cluster (India)"],
      "Occasion Wear":        ["Kipas Holding (Turkey)", "Leicester Apparel Co. (UK)", "Guangdong Garment Parks (China)"],
      "Sports Bras":          ["Pacific Textiles (HK/China)", "Sri Lanka EPZ Factories", "Eclat Textile (Taiwan)"],
    },
    coo: "Turkey, China, India, UK"
  },
  ms: {
    overviewStance: "M&S is the benchmark for UK mid-to-premium retail. Sourcing is characterized by strict quality standards, combed BCI/Organic cotton, TENCEL™ Modal, and high wool content in tailoring.",
    sustainability: "Guided by the Plan A sustainability program. OEKO-TEX Standard 100 is a mandatory requirement across all textile lines. Targeting 100% recycled polyester by 2026.",
    sourcingInsight: "Works with premium, vertically-integrated manufacturers in India (Tirupur, Ahmedabad), Bangladesh, and Sri Lanka, demanding strict social and chemical compliance.",
    upgradeAdvice: "To match or beat M&S, focus on GOTS organic cotton and closed-loop TENCEL™ Lyocell. Use high-performance natural blends (like cotton-silk or linen-TENCEL) to capture their premium demographic.",
    vendors: ["Shahi Exports (India)", "Arvind Mills (India)", "Brandix Lanka (Sri Lanka)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
    vendorsByCategory: {
      "Dresses":              ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
      "Jeans":                ["Arvind Mills (India, Ahmedabad)", "Aarvee Denims (India, Ahmedabad)", "Classic Fashions (Bangladesh)"],
      "Hoodies & Sweatshirts":["Brandix Lanka (Sri Lanka)", "Texport Industries (India, Bengaluru)", "KPR Mill (India, Tirupur)"],
      "T-Shirts & Tops":      ["Eastman Exports (India, Tirupur)", "KPR Mill (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
      "Activewear":           ["MAS Active (Sri Lanka)", "Brandix Active (Sri Lanka)", "Eclat Textile (Taiwan)"],
      "School Uniforms":      ["Eastman Exports (India)", "Brandix Kids (Sri Lanka)", "Classic Fashions (Bangladesh)"],
      "Outerwear & Coats":    ["Brandix Lanka (Sri Lanka)", "Youngone Corp (Bangladesh)", "Texport Industries (India)"],
      "Formal Shirts":        ["Arvind Lifestyle (India)", "Gokaldas Exports (India, Bengaluru)", "Eastman Exports (India)"],
      "Knitwear & Jumpers":   ["Coats Bangladesh Ltd", "MAS Active (Sri Lanka)", "Ludhiana Knitwear (India)"],
      "Nightwear & Pyjamas":  ["Brandix Lanka (Sri Lanka)", "MAS Holdings (Sri Lanka)", "Eastman Exports (India)"],
      "Baby & Kids":          ["SP Apparels (India, OEKO-TEX)", "Brandix Kids (Sri Lanka)", "KPR Mill (India)"],
      "Lingerie & Intimates": ["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
      "Swimwear":             ["MAS Kreeda (Sri Lanka)", "Cressida International (HK)", "Pacific Textiles (HK/China)"],
      "Men's Tailoring":      ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Gokaldas Exports (India)"],
      "Women's Tailoring":    ["Gokaldas Exports (India, Bengaluru)", "Arvind Lifestyle (India)", "Shahi Exports (India)"],
      "Casual Trousers":      ["Arvind Mills (India)", "Brandix Lanka (Sri Lanka)", "Eastman Exports (India)"],
      "Occasion Wear":        ["Shahi Exports (India)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
      "Sports Bras":          ["MAS Active (Sri Lanka)", "Brandix Active (Sri Lanka)", "MAS Kreeda (Sri Lanka)"],
    },
    coo: "India, Bangladesh, Sri Lanka, Turkey"
  },
  johnlewis: {
    overviewStance: "John Lewis is a premium UK department store. Sourcing prioritizes luxury fibers like Egyptian cotton, extra fine merino wool, pure silk, and GOTS-certified organic cotton.",
    sustainability: "Enforces strict animal welfare (RWS, RDS) and GOTS organic cotton standards. Focuses on durability, circularity, and ethical sourcing throughout the supply chain.",
    sourcingInsight: "Procures from high-end vertical mills in Portugal, Turkey, Italy, and premium organic clusters in India (Coimbatore/Tirupur).",
    upgradeAdvice: "John Lewis sets the gold standard for premium retail. Match them by using fully certified GOTS organic cotton, RWS certified wool, or fine Egyptian/Pima cotton, backed by transparent mill-to-shelf traceability.",
    vendors: ["Somelos Tecidos (Portugal)", "Coimbatore Organic Weavers (India)", "Johnstons of Elgin (Scotland)", "Arvind Mills (India)", "MAS Holdings (Sri Lanka)"],
    vendorsByCategory: {
      "Dresses":              ["Somelos Tecidos (Portugal)", "Coimbatore Organic Weavers (India)", "Bombay Rayon Fashions (India)"],
      "Jeans":                ["Arvind Mills (India, Ahmedabad)", "Cone Denim (USA/Mexico)", "Premium Denim Mills (Turkey)"],
      "Hoodies & Sweatshirts":["Coimbatore Organic Weavers (India)", "KPR Mill Organic (India)", "SP Apparels Premium (India)"],
      "T-Shirts & Tops":      ["SP Apparels (India, GOTS-certified)", "Coimbatore Organic Weavers (India)", "Tirupur Organic Cluster (India)"],
      "Activewear":           ["MAS Active (Sri Lanka)", "Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)"],
      "School Uniforms":      ["Coimbatore Twill Mills (India)", "Somelos Tecidos (Portugal)", "Tirupur Organic Cluster (India)"],
      "Outerwear & Coats":    ["Coimbatore Organic Weavers (India)", "Loro Piana (Italy – fabric)", "Johnstons of Elgin (Scotland)"],
      "Formal Shirts":        ["Somelos Tecidos (Portugal)", "Arvind Mills (India)", "Thomas Mason Mills (Italy – fabric)"],
      "Knitwear & Jumpers":   ["Johnstons of Elgin (Scotland, UK)", "Hawick Knitwear (Scotland, UK)", "Todd & Duncan (Scotland, UK)"],
      "Nightwear & Pyjamas":  ["Tirupur Nightwear Cluster (India)", "Coimbatore Organic Weavers (India)", "MAS Holdings (Sri Lanka)"],
      "Baby & Kids":          ["SP Apparels (India, GOTS)", "Tirupur Organic Cluster (India)", "Coimbatore Organic Weavers (India)"],
      "Lingerie & Intimates": ["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
      "Swimwear":             ["MAS Kreeda (Sri Lanka)", "Cressida International (HK)", "Eclat Textile (Taiwan)"],
      "Men's Tailoring":      ["Chester Barrie (Crewe, UK)", "Canali Group (Italy – fabric)", "Arvind Lifestyle (India)"],
      "Women's Tailoring":    ["Bombay Rayon Fashions (India)", "Gokaldas Exports (India)", "Somelos Tecidos (Portugal)"],
      "Casual Trousers":      ["Arvind Mills (India)", "Somelos Tecidos (Portugal)", "Coimbatore Organic Weavers (India)"],
      "Occasion Wear":        ["Shahi Exports (India)", "Bombay Rayon Fashions (India)", "Somelos Tecidos (Portugal)"],
      "Sports Bras":          ["MAS Active (Sri Lanka)", "MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)"],
    },
    coo: "India, Portugal, Turkey, Italy, Scotland (UK)"
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
      millInfo: "Coimbatore Twill Mills Ltd"
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
