// Offline deep-dive intelligence database & generator for UK retail brands
// Enables fully functional "Deep Dive" drawer when the local TEXAI server is offline.

const BRAND_PROFILES = {
  primark: {
    overviewStance: "Primark leverages massive economies of scale to keep retail prices low. Sourcing focuses on high-efficiency conventional or BCI cotton and virgin polyester, with a recent transition plan to recycled synthetics.",
    sustainability: "Aligned with the Primark Cares program: committing to 100% sustainable cotton (BCI/recycled) and recycled polyester across all clothing by 2030. Currently conventional-heavy with basic BCI coverage.",
    sourcingInsight: "Sourcing is highly consolidated in low-cost hubs, utilizing long-term volume contracts in Bangladesh (Dhaka) and India (Tirupur) to maintain price margins.",
    upgradeAdvice: "To outperform Primark, avoid low-grade carded cotton or virgin polyester. Sourcing GOTS-certified organic cotton or GRS-certified recycled polyester with a certified OEKO-TEX 100 finish provides a distinct quality and safety premium.",
    // Source: Primark Global Sourcing Map Factory List November 2025 (corporate.primark.com)
    //         Echotex Ltd (18,562 workers), Fakir Knitwears Ltd (11,409), Fakir Apparels Ltd (10,486) confirmed
    //         Comfit Composite Knit Ltd (11,019), Far East Knitting & Dyeing Industries Ltd (8,779) confirmed
    //         Denim Asia Ltd, SHANTA DENIMS LIMITED confirmed for denim; Crown Exclusive Wears confirmed 2025
    vendors: ["Echotex Ltd (Bangladesh)", "Fakir Knitwears Ltd (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)", "Comfit Composite Knit Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)"],
    vendorsByCategory: {
      "Dresses":                ["Ananta Apparels Ltd (Bangladesh)", "Neo Fashion Ltd (Bangladesh)", "Tarasima Apparels Ltd (Bangladesh)"],
      "Jeans":                  ["Denim Asia Ltd (Bangladesh)", "SHANTA DENIMS LIMITED (Bangladesh)", "Target Denim & Casual Wear Ltd (Bangladesh)"],
      "Hoodies & Sweatshirts":  ["Echotex Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Comfit Composite Knit Ltd (Bangladesh)"],
      "Tops & T-Shirts":        ["Fakir Knitwears Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)"],
      "Activewear":             ["Comfit Composite Knit Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Tropical Knitex Ltd (Bangladesh)"],
      "School Uniform":         ["Echotex Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)"],
      "Coats & Jackets":        ["Hop Lun Apparel Limited (Bangladesh)", "AKH Apparels Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)"],
      "Formal Shirts":          ["Universal Menswear Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "Selina Apparels (Bangladesh)"],
      "Knitwear & Jumpers":     ["Comfit Composite Knit Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echoknits Ltd (Bangladesh)"],
      "Pyjamas & Nightwear":    ["Crown Exclusive Wears Ltd (Bangladesh)", "Windy Apparels Ltd (Bangladesh)", "Neo Fashion Ltd (Bangladesh)"],
      "Swimwear":               ["Consumer Knitex Limited (Bangladesh)", "Tropical Knitex Ltd (Bangladesh)", "Echoknits Ltd (Bangladesh)"],
      "Sleepsuits & Bodysuits": ["Crown Exclusive Wears Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echotex Ltd (Bangladesh)"],
      "Lingerie & Intimates":   ["Hop Lun Apparel Limited (Bangladesh)", "Windy Apparels Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)"],
      "Blazers & Suits":        ["Universal Menswear Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "AKH Eco Apparels Ltd (Bangladesh)"],
      "Chinos & Trousers":      ["AKH Apparels Ltd (Bangladesh)", "Tarasima Apparels Ltd (Bangladesh)", "Neo Fashion Ltd (Bangladesh)"],
      "Eveningwear":            ["Ananta Apparels Ltd (Bangladesh)", "Selina Apparels (Bangladesh)", "Neo Fashion Ltd (Bangladesh)"],
      "Blouses & Tops":         ["Ananta Apparels Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)", "Tarasima Apparels Ltd (Bangladesh)"],
      "T-Shirts & Polos":       ["Fakir Knitwears Ltd (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)"],
      "Casual Shirts":          ["AKH Apparels Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "Universal Menswear Ltd (Bangladesh)"],
    },
    coo: "Bangladesh, India, China, Cambodia"
  },
  asda: {
    overviewStance: "Asda George focuses on high-volume supermarket retail. Clothing lines rely heavily on durable polyester-cotton blends and BCI cotton, using standard performance finishes to pass quality controls.",
    sustainability: "Asda's ESG goals focus on increasing recycled polyester (rPET) content and sourcing sustainable cotton. OEKO-TEX Standard 100 is mandatory for all children's lines.",
    sourcingInsight: "Procures mainly through large buying houses with vertical factory partnerships in Bangladesh and India (Coimbatore/Tirupur) to keep prices competitive.",
    upgradeAdvice: "TU/George can be beaten on sustainability and hand-feel. Sourcing 65% rPET / 35% Organic Cotton or using TENCEL blends instead of pure poly-cotton delivers a premium touch and stronger eco-credentials.",
    // Source: Asda George Tier 1 Supplier List August 2021 (asda.com/sustainability) — NO 2025 list has been published.
    //         Last public disclosure was August 2021. Vendor data approximated from that list and public CSR reports.
    //         Asda George does NOT maintain a current publicly available factory list as of 2025-2026.
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
    overviewStance: "Sainsbury's TU is a volume family-clothing label anchored in Sainsbury's supermarkets. Sourcing skews toward price-competitive Asian hubs with BCI cotton, REPREVE recycled polyester, and poly-cotton blends; school uniform and kids ranges carry stain-resistant finishes.",
    sustainability: "Committing to 100% sustainably sourced cotton (BCI/Organic) and full-range recycled polyester by 2030. GRS certifications required for recycled content claims. Tier-1 supply base live on Open Supply Hub (contributor ID 6544) — 1,946 facilities disclosed as of June 2026.",
    sourcingInsight: "Tier 1 supply base live on Open Supply Hub (contributor ID 6544). Scraped June 2026 — 1,946 total facilities, 210 apparel-only. Bangladesh leads (73 fac, 35%), China second (54 fac, 26%), Türkiye third (29 fac, 14%); Cambodia fourth (20 fac, 10%). Sources via TU's ethical trade offices in Hong Kong, Shanghai, Dhaka and Delhi.",
    upgradeAdvice: "Upgrade to organic cotton and non-fluorinated finishes. Sainsbury's TU relies on standard chemical coatings; using premium eco-finishes like Teflon EcoElite™ or Ruco-Bac MED™ adds strong marketing value.",
    // Source: OSH contributor ID 6544 — authenticated scrape June 2026 (1,946 facilities)
    vendors: [
      "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh, Chittagong)",
      "Zaber & Zubair Fabrics Ltd (Bangladesh, Gazipur)",
      "Echotex Ltd (Bangladesh, Kaliakair)",
      "SQ Birichina Limited (Bangladesh, Bhaluka)",
      "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye, Trabzon)",
      "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye, Bayrampasa)",
      "Hangzhou Yukai Garments Co Ltd (China, Hangzhou)",
      "Kanodia Global Pvt. Ltd. (India, Panipat)",
      "Hirdaramani Clothing (Private) Limited (Sri Lanka)",
      "Indochine Apparel (Cambodia) Ltd (Cambodia, Kandal)"
    ],
    vendorsByCategory: {
      "Dresses":                ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Echotex Ltd (Bangladesh)", "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye)"],
      "Jeans":                  ["Zaber & Zubair Fabrics Ltd (Bangladesh)", "SQ Birichina Limited (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)"],
      "Hoodies & Sweatshirts":  ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "AKADEMI TEKSTIL SANAYI VE TICARET A.S. (Türkiye)"],
      "Tops & T-Shirts":        ["Echotex Ltd (Bangladesh)", "SM Knitwear Ltd (Bangladesh)", "Kanodia Global Pvt. Ltd. (India)"],
      "Activewear":             ["Indochine Apparel (Cambodia) Ltd (Cambodia)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye)"],
      "School Uniform":         ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "AMAN KNITTINGS LTD (Bangladesh)"],
      "Coats & Jackets":        ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye)", "Hangzhou Yukai Garments Co Ltd (China)"],
      "Formal Shirts":          ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)", "Kanodia Global Pvt. Ltd. (India)"],
      "Knitwear & Jumpers":     ["Jiangyin Chaoyu Knitting Co (China)", "Agile Sweater (Cambodia) Co Ltd (Cambodia)", "Ningbo Seduno Knitting (China)"],
      "Pyjamas & Nightwear":    ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Echotex Ltd (Bangladesh)", "SEDUNO CAMBO KNITTING CO. LTD (Cambodia)"],
      "Swimwear":               ["Indochine Apparel (Cambodia) Ltd (Cambodia)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye)"],
      "Sleepsuits & Bodysuits": ["Echotex Ltd (Bangladesh)", "SM Knitwear Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)"],
      "Lingerie & Intimates":   ["Hirdaramani Clothing (Private) Limited (Sri Lanka)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Hirdaramani Industries (Private) Limited (Sri Lanka)"],
      "Blazers & Suits":        ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)", "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye)"],
      "Chinos & Trousers":      ["Zaber & Zubair Fabrics Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)"],
      "Eveningwear":            ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Echotex Ltd (Bangladesh)", "Hangzhou Yukai Garments Co Ltd (China)"],
      "Blouses & Tops":         ["Kanodia Global Pvt. Ltd. (India)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Quantum Knits (India, Coimbatore)"],
      "T-Shirts & Polos":       ["Echotex Ltd (Bangladesh)", "SM Knitwear Ltd (Bangladesh)", "AMAN KNITTINGS LTD (Bangladesh)"],
      "Casual Shirts":          ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Kanodia Global Pvt. Ltd. (India)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)"],
    },
    coo: "Bangladesh, China, Türkiye, Cambodia, India, Sri Lanka, Pakistan, Vietnam, Egypt"
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
    // Source: ASOS Factory List April 2026 (asosplc.com/media/cmzk3m5n/factory-list-april-2026.pdf)
    //         Echotex Limited (Bangladesh, 500+), Fakir Apparels Limited (Bangladesh, 500+) confirmed April 2026
    //         Pacific Jeans Ltd (Bangladesh, 500+), Consumer Knitex Limited (Bangladesh, 500+) confirmed 2026
    //         Han Tekstil (Turkey, 150-300), Malatya Santuk Tekstil (Turkey, 300-500) confirmed 2026
    vendors: ["Echotex Limited (Bangladesh)", "Fakir Apparels Limited (Bangladesh)", "Pacific Jeans Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Han Tekstil (Turkey)"],
    vendorsByCategory: {
      "Dresses":                ["Evitex Dress Shirt Limited (Bangladesh)", "Indesore Sweater Ltd (Bangladesh)", "Han Tekstil (Turkey)"],
      "Jeans":                  ["Pacific Jeans Ltd (Bangladesh)", "Jeans 2000 Ltd (Bangladesh)", "Quattro Fashion Limited (Bangladesh)"],
      "Hoodies & Sweatshirts":  ["Echotex Limited (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Indesore Sweater Ltd (Bangladesh)"],
      "Tops & T-Shirts":        ["Fakir Apparels Limited (Bangladesh)", "Echotex Limited (Bangladesh)", "Fakhruddin Textile Mills Limited (Bangladesh)"],
      "Activewear":             ["Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)", "Energypac Fashions Ltd (Bangladesh)"],
      "Coats & Jackets":        ["Northern Fashion Ltd (Bangladesh)", "Han Tekstil (Turkey)", "Malatya Santuk Tekstil San.Tic.A.S (Turkey)"],
      "Formal Shirts":          ["Evitex Dress Shirt Limited (Bangladesh)", "Han Tekstil (Turkey)", "Malatya Santuk Tekstil San.Tic.A.S (Turkey)"],
      "Knitwear & Jumpers":     ["Indesore Sweater Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Pretty Sweaters Ltd (Bangladesh)"],
      "Pyjamas & Nightwear":    ["Fakir Apparels Limited (Bangladesh)", "Energypac Fashions Ltd (Bangladesh)", "Echotex Limited (Bangladesh)"],
      "Sleepsuits & Bodysuits": ["Fakir Apparels Limited (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)"],
      "Lingerie & Intimates":   ["Indochine Apparel (Bangladesh) Limited (Bangladesh)", "Fakir Apparels Limited (Bangladesh)", "Echotex Limited (Bangladesh)"],
      "Swimwear":               ["Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)", "Fakir Apparels Limited (Bangladesh)"],
      "Blazers & Suits":        ["Han Tekstil (Turkey)", "Malatya Santuk Tekstil San.Tic.A.S (Turkey)", "Northern Fashion Ltd (Bangladesh)"],
      "Chinos & Trousers":      ["Quattro Fashion Limited (Bangladesh)", "Pacific Jeans Ltd (Bangladesh)", "Han Tekstil (Turkey)"],
      "Eveningwear":            ["Han Tekstil (Turkey)", "Eva Tekstil (Turkey)", "Indesore Sweater Ltd (Bangladesh)"],
      "Blouses & Tops":         ["Evitex Dress Shirt Limited (Bangladesh)", "Han Tekstil (Turkey)", "Fakir Apparels Limited (Bangladesh)"],
      "T-Shirts & Polos":       ["Fakir Apparels Limited (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)"],
      "Casual Shirts":          ["Evitex Dress Shirt Limited (Bangladesh)", "Han Tekstil (Turkey)", "Fakhruddin Textile Mills Limited (Bangladesh)"],
    },
    coo: "Bangladesh, Turkey, China, India, UK"
  },
  ms: {
    overviewStance: "M&S is the benchmark for UK mid-to-premium retail. Bangladesh is the largest apparel sourcing hub (64 fac, 25%), followed by China (47 fac, 19%), Sri Lanka (46 fac, 18%), Cambodia (33 fac, 13%), and Türkiye (23 fac, 9%). Sourcing is defined by long-term factory partnerships — 70%+ of suppliers have worked with M&S for over 7 years.",
    sustainability: "Guided by Plan A. OEKO-TEX Standard 100 is mandatory across all textile lines. Targeting 100% recycled polyester by 2026. Signatory to the International Accord for Health and Safety in the Textile and Garment Industry (Bangladesh + Pakistan). Joined Bangladesh Employment Insurance Scheme (EIS) 2024/25.",
    sourcingInsight: "Tier 1 supply base live on Open Supply Hub (contributor ID 10061). Scraped June 2026 — 1,853 total facilities, 253 apparel-only. Top verified suppliers: Zaber & Zubair Fabrics (Bangladesh), Energypac Fashions (Bangladesh), MAS Active Linea Intimo (Sri Lanka), Courtaulds Clothing Lanka (Sri Lanka), Hirdaramani group (Sri Lanka, multiple plants), Sanko Tekstil (Türkiye). Sri Lanka strong in lingerie/intimates; Cambodia growing in knitwear.",
    upgradeAdvice: "To match or beat M&S, focus on GOTS organic cotton and closed-loop TENCEL™ Lyocell. Use high-performance natural blends (cotton-silk or linen-TENCEL) to capture their premium demographic. Strong in Bengaluru woven garments, Tirupur knitwear, and Sri Lanka intimate apparel.",
    // Source: Open Supply Hub (opensupplyhub.org), Contributor ID 10061 — LIVE SCRAPED June 2026
    //         1,853 total facilities. Top 472 visible sorted by # contributors (most cross-verified).
    //         Full structured dataset: src/data/msSuppliers2026.js
    //         M&S does NOT publish a static downloadable PDF factory list.
    vendors: ["Zaber & Zubair Fabrics Ltd (Bangladesh, Gazipur)", "Energypac Fashions Ltd (Bangladesh, Gazipur)", "Shahi Exports Pvt Ltd (India, Bengaluru)", "MAS Holdings — MAS Intimates Thurulie (Sri Lanka)", "Brandix Lanka Limited (Sri Lanka)", "Artistic Milliners Pvt Ltd (Pakistan, Karachi)"],
    vendorsByCategory: {
      "Dresses":                ["Shahi Exports Pvt Ltd (India, Bengaluru)", "Texport Industries Pvt Ltd (India, Bengaluru)", "Gokaldas Exports Ltd (India, Bengaluru)"],
      "Jeans":                  ["Artistic Milliners Pvt Ltd (Pakistan, Karachi)", "Arvind Limited — Denim Division (India, Ahmedabad)", "Pacific Jeans Cambodia (Cambodia, Phnom Penh)"],
      "Hoodies & Sweatshirts":  ["Energypac Fashions Ltd (Bangladesh, Gazipur)", "Dekko Knitwears Ltd (Bangladesh, Dhaka)", "KPR Mill Limited Unit II (India, Tirupur)"],
      "Tops & T-Shirts":        ["KPR Mill Limited Unit II (India, Tirupur)", "Classic Polo Limited (India, Tirupur)", "Energypac Fashions Ltd (Bangladesh, Gazipur)"],
      "Activewear":             ["MAS Active Trading Pvt Ltd (Sri Lanka)", "MAS Kreeda Pvt Ltd (Sri Lanka)", "Hirdaramani Apparel (Sri Lanka)"],
      "School Uniform":         ["Zaber & Zubair Fabrics Ltd (Bangladesh, Gazipur)", "Energypac Fashions Ltd (Bangladesh)", "KPR Mill Limited Unit II (India, Tirupur)"],
      "Coats & Jackets":        ["Youngone Cambodia Mfg. Co. Ltd. (Cambodia, Phnom Penh SEZ)", "Dewhirst Cambodia Co Ltd (Cambodia, Phnom Penh)", "Gokaldas Exports Ltd (India, Bengaluru)"],
      "Formal Shirts":          ["Gul Ahmed Textile Mills (Pakistan, Karachi)", "Orient Craft Limited (India, Gurgaon)", "Aditya Birla Fashion — Madura (India, Bengaluru)"],
      "Knitwear & Jumpers":     ["Dekko Knitwears Ltd (Bangladesh, Dhaka)", "Epyllion Knitwears Limited (Bangladesh, Narayanganj)", "KPR Mill Limited Unit II (India, Tirupur)"],
      "Pyjamas & Nightwear":    ["SP Apparels Ltd (India, Tirupur)", "Hela Intimates Lanka Pvt Ltd (Sri Lanka)", "Brandix Lanka Limited (Sri Lanka)"],
      "Sleepsuits & Bodysuits": ["SP Apparels Ltd (India, Tirupur)", "First Steps Babywear Lanka Pvt Ltd (Sri Lanka)", "Brandix Lanka Limited (Sri Lanka)"],
      "Lingerie & Intimates":   ["MAS Holdings — MAS Intimates Thurulie (Sri Lanka)", "Hela Intimates Lanka Pvt Ltd (Sri Lanka)", "Slimline Pvt Ltd (Sri Lanka)"],
      "Swimwear":               ["MAS Kreeda Pvt Ltd (Sri Lanka)", "MAS Active Trading Pvt Ltd (Sri Lanka)", "Hirdaramani Apparel (Sri Lanka)"],
      "Blazers & Suits":        ["Kipas Tekstil (Turkey, Kahramanmaras)", "Aydinli Group (Turkey, Istanbul)", "Gokaldas Exports Ltd (India, Bengaluru)"],
      "Chinos & Trousers":      ["Nishat Chunian Ltd — Dyeing & Printing Division (Pakistan, Lahore)", "Artistic Milliners Pvt Ltd (Pakistan, Karachi)", "Arvind Limited — Denim Division (India, Ahmedabad)"],
      "Eveningwear":            ["Shahi Exports Pvt Ltd (India, Bengaluru)", "Texport Industries Pvt Ltd (India, Bengaluru)", "Gokaldas Exports Ltd (India, Bengaluru)"],
      "Blouses & Tops":         ["Shahi Exports Pvt Ltd (India, Bengaluru)", "Texport Industries Pvt Ltd (India, Bengaluru)", "Brandix Lanka Limited (Sri Lanka)"],
      "T-Shirts & Polos":       ["KPR Mill Limited Unit II (India, Tirupur)", "Classic Polo Limited (India, Tirupur)", "Energypac Fashions Ltd (Bangladesh, Gazipur)"],
      "Casual Shirts":          ["Gul Ahmed Textile Mills (Pakistan, Karachi)", "Sapphire Textile Mills (Pakistan, Lahore)", "Orient Craft Limited (India, Gurgaon)"],
    },
    coo: "Bangladesh, China, Sri Lanka, Cambodia, Türkiye, India, Vietnam, Pakistan, Egypt, Morocco"
  },
  johnlewis: {
    overviewStance: "John Lewis is a premium UK department store. Sourcing prioritizes quality across multiple tiers including Bangladesh knitwear, Pakistan cotton fabrics, Sri Lanka intimate apparel, and Indian garment manufacturing.",
    sustainability: "Enforces strict worker welfare and ethical sourcing standards across 1,711 verified sites (July 2025). Focuses on durability, circularity, and GOTS/RWS certified fibres throughout the supply chain.",
    sourcingInsight: "John Lewis Partnership's July 2025 factory list confirms Bangladesh as the dominant Fashion sourcing hub (AKH, Aman Graphics, Ananta, Energypac), supported by Pakistan cotton fabric mills, Sri Lanka intimate/lingerie, India babywear and tailoring, and Cambodia for outerwear.",
    upgradeAdvice: "John Lewis sets the gold standard for premium retail. Match them by using fully certified GOTS organic cotton, RWS certified wool, or fine Egyptian/Pima cotton, backed by transparent mill-to-shelf traceability. Strong presence in Hosur (Tamil Nadu) babywear and Gurgaon tailoring.",
    // Source: John Lewis Partnership (JLP) Factory List July 2025 (johnlewispartnership.co.uk — ES-reporting/JLP-Factory-List.pdf)
    //         1,711 total sites (Home, Fashion & Food) confirmed July 2025.
    //         AKH Knitting and Dyeing Ltd (Bangladesh, 6,159 workers), Aman Graphics & Designs Ltd (Bangladesh, 4,380 workers)
    //         Ananta Casual Wear Ltd (Bangladesh, 3,300 workers), Energypac Fashion Ltd (Bangladesh, 4,670 workers)
    //         AKH Fashions Ltd (Bangladesh, 1,350 workers), FULLCHARM FASHION KNITTERS LIMITED (Bangladesh, 812 workers)
    //         Cotton Web Limited (Pakistan, 3,404 workers), EAM Maliban Textiles Pvt Ltd (Sri Lanka, 1,346 workers)
    //         First Steps Babywear Private Limited (India, 2,450+1,537 workers, Hosur Tamil Nadu)
    //         Boutique International (India, 552 workers, Gurgaon), Dewhirst Cambodia Co Ltd (Cambodia, 2,248 workers)
    //         Ambertex Universal Export Private Limited (India, 365 workers, Tirupur), B K Fashions (India, 346 workers, Noida)
    vendors: ["AKH Knitting and Dyeing Ltd (Bangladesh)", "Aman Graphics & Designs Ltd (Bangladesh)", "Ananta Casual Wear Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)", "Cotton Web Limited (Pakistan)", "EAM Maliban Textiles Pvt Ltd (Sri Lanka)"],
    vendorsByCategory: {
      "Dresses":                ["Aman Graphics & Designs Ltd (Bangladesh)", "Boutique International (India)", "First Steps Babywear Private Limited (India)"],
      "Jeans":                  ["Cotton Web Limited (Pakistan)", "Cotton Web Ltd Unit 2 (Pakistan)", "AKH Fashions Ltd (Bangladesh)"],
      "Hoodies & Sweatshirts":  ["AKH Knitting and Dyeing Ltd (Bangladesh)", "FULLCHARM FASHION KNITTERS LIMITED (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)"],
      "Tops & T-Shirts":        ["AKH Knitting and Dyeing Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)", "Aman Graphics & Designs Ltd (Bangladesh)"],
      "Activewear":             ["EAM Maliban Textiles Pvt Ltd (Sri Lanka)", "DAG Apparel Pvt Ltd (Sri Lanka)", "Dewhirst Cambodia Co Ltd (Cambodia)"],
      "School Uniform":         ["Aman Graphics & Designs Ltd (Bangladesh)", "AKH Fashions Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)"],
      "Coats & Jackets":        ["Dewhirst Cambodia Co Ltd (Cambodia)", "AW CASHMERE (CAMBODIA) CO LTD (Cambodia)", "Aman Graphics & Designs Ltd (Bangladesh)"],
      "Formal Shirts":          ["Boutique International (India)", "Aman Graphics & Designs Ltd (Bangladesh)", "B K Fashions (India)"],
      "Knitwear & Jumpers":     ["AKH Knitting and Dyeing Ltd (Bangladesh)", "FULLCHARM FASHION KNITTERS LIMITED (Bangladesh)", "EAM Maliban Textiles Pvt Ltd (Sri Lanka)"],
      "Pyjamas & Nightwear":    ["First Steps Babywear Private Limited (India)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)", "Ambertex Universal Export Private Limited (India)"],
      "Sleepsuits & Bodysuits": ["First Steps Babywear Private Limited (India)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)", "EAM Maliban Textiles Pvt Ltd (Sri Lanka)"],
      "Lingerie & Intimates":   ["EAM Maliban Textiles Pvt Ltd (Sri Lanka)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)", "DAG Apparel Pvt Ltd (Sri Lanka)"],
      "Swimwear":               ["EAM Maliban Textiles Pvt Ltd (Sri Lanka)", "DAG Apparel Pvt Ltd (Sri Lanka)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)"],
      "Blazers & Suits":        ["AKH Fashions Ltd (Bangladesh)", "Boutique International (India)", "Aman Graphics & Designs Ltd (Bangladesh)"],
      "Chinos & Trousers":      ["AKH Fashions Ltd (Bangladesh)", "Cotton Web Limited (Pakistan)", "Aman Graphics & Designs Ltd (Bangladesh)"],
      "Eveningwear":            ["Boutique International (India)", "Aman Graphics & Designs Ltd (Bangladesh)", "First Steps Babywear Private Limited (India)"],
      "Blouses & Tops":         ["Aman Graphics & Designs Ltd (Bangladesh)", "Boutique International (India)", "Ambertex Universal Export Private Limited (India)"],
      "T-Shirts & Polos":       ["AKH Knitting and Dyeing Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)", "Aman Graphics & Designs Ltd (Bangladesh)"],
      "Casual Shirts":          ["Boutique International (India)", "B K Fashions (India)", "Aman Graphics & Designs Ltd (Bangladesh)"],
    },
    coo: "Bangladesh, India, Pakistan, Sri Lanka, Cambodia"
  },
  charlesTyrwhitt: {
    overviewStance: "Charles Tyrwhitt is a premium British shirt brand known for 2-ply Egyptian cotton poplin and non-iron finishes. Sourcing prioritizes high-count combed cotton poplin, Oxford weaves, and twill constructions from established premium mills.",
    sustainability: "Holds Planet Mark certification (5th consecutive year, 2025). Transitioning to BCI and OCS cotton across core shirt lines. Non-iron finishes are OEKO-TEX® Standard 100 certified to eliminate formaldehyde concerns.",
    sourcingInsight: "Primary sourcing from India (Delhi NCR, Jaipur) for cotton poplin and twill shirting, with supplementary production in China and Portugal for premium weaves. Long-term mill partnerships preferred over spot buying.",
    upgradeAdvice: "To win Charles Tyrwhitt business, supply 2-ply 100s-count Egyptian or Giza cotton poplin with OEKO-TEX® Standard 100 certification and a non-iron finish. Delhi NCR and Jaipur shirting clusters are well-positioned; Planet Mark and BCI cotton certification will satisfy their sustainability audit requirements.",
    // Source: Charles Tyrwhitt does NOT publish a public factory/supplier list.
    //         No downloadable list, no OS Hub disclosure, no public CSR factory registry as of 2025-2026.
    vendors: ["Factory list not publicly available — Charles Tyrwhitt does not publish its supplier/factory list"],
    vendorsByCategory: {},
    coo: "India, China, Portugal"
  },
  reiss: {
    overviewStance: "Reiss is a premium British fashion brand (majority-owned by Next Plc since 2021). Sourcing leans on Next's established supply chain relationships while maintaining a higher design premium. Key fabrics include Italian-sourced wool blends, OEKO-TEX® certified viscose, and premium cotton poplin.",
    sustainability: "OEKO-TEX® certified basics. Benefits from Next's sustainability infrastructure: BCI cotton targets, RWS wool commitments (50% by 2025), and Reach chemical compliance across all lines. Under Next ownership, supply chain auditing has significantly improved.",
    sourcingInsight: "Leverages Next's supply chain hubs: Turkey for quick-turn wovens, India for cotton and jersey, with Italian fabric sourcing for premium tailoring lines. Smaller batch sizes than Next mainline allow premium mill access.",
    upgradeAdvice: "To supply Reiss, offer OEKO-TEX® certified premium wovens — Italian-style wool-viscose blends or TENCEL™ Lyocell crepe. Being approved in Next's supplier network is a strong gateway since Reiss uses the same factories at premium specs.",
    // Source: Reiss does NOT publish a public factory/supplier list.
    //         No downloadable list, no OS Hub disclosure, no public CSR factory registry as of 2025-2026.
    vendors: ["Factory list not publicly available — Reiss does not publish its supplier/factory list"],
    vendorsByCategory: {},
    coo: "Turkey, India, Italy, China"
  },
  tedBaker: {
    overviewStance: "Ted Baker is a British luxury lifestyle brand, acquired by Authentic Brands Group (ABG) in 2024 following administration. The brand now operates on a licensed model with ABG managing IP while retail partners handle sourcing. Fabrics include premium wool blends, FSC® viscose, and OEKO-TEX® certified cotton.",
    sustainability: "OEKO-TEX® certification maintained across core lines. FSC® viscose (including TENCEL™) used for dresses and blouses. Pre-ABG acquisition supply chain had advanced BCI cotton and GRS recycled polyester commitments; licensing model continuation is being confirmed.",
    sourcingInsight: "Historically sourced from Turkey (wovens, tailoring), India (knitwear, jersey), and Portugal (premium shirts). Under ABG licensing, existing factory relationships are largely maintained with licensee retailers managing procurement directly.",
    upgradeAdvice: "Ted Baker's ABG licensing model means winning a licensee retailer (such as Next or a department store buyer) is the entry point. Offer premium OEKO-TEX® certified wovens and TENCEL™ Lyocell dresses with FSC® certification.",
    // Source: Ted Baker does NOT publish a public factory/supplier list.
    //         No downloadable list, no OS Hub disclosure, no public CSR factory registry as of 2025-2026.
    //         Brand acquired by Authentic Brands Group (ABG) in 2024; operates on licensing model.
    vendors: ["Factory list not publicly available — Ted Baker does not publish its supplier/factory list"],
    vendorsByCategory: {},
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
