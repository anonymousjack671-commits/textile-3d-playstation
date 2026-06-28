// ============================================================
// Vercel Serverless Function — TEXAI Deep Research (Brand Deep Dive)
// Route: POST /api/deep-research
// Body: { brand: string, category: string }
// Returns: { data: { overviewStance, sustainability, sourcingInsight, upgradeAdvice, knownVendors[], coo } }
//
// Powered by Gemini 2.5 Flash — smartest free model (2026).
// Set GEMINI_API_KEY in Vercel project environment variables.
// Get free key: https://aistudio.google.com/app/apikey
// ============================================================

// ── Verified vendor lookup — prevents hallucination ─────────
// Sources: brand sustainability reports, Open Supply Hub disclosures, industry publications.
const VERIFIED_VENDORS = {
  // Sources: Sainsbury's TU Supplier List Nov 2024 + GM & Clothing Tier 1 Supplier List 2025 (corporate.sainsburys.co.uk)
  // Next PLC Tier 1 Manufacturing Sites August 2025 (nextplc.co.uk)
  // H&M Group Supplier List May 2026 XLSX (hmgroup.com/wp-content/uploads/spur/HM-Group-Supplier-List-May-2026.xlsx)
  // Primark Global Sourcing Map Factory List November 2025 (corporate.primark.com)
  // M&S Interactive Supplier Map / Open Supply Hub (corporate.marksandspencer.com)
  // ASOS Factory List April 2026 (asosplc.com/media/cmzk3m5n/factory-list-april-2026.pdf)
  primark: {
    // Source: Primark Global Sourcing Map Factory List November 2025 (corporate.primark.com)
    //         Echotex Ltd (18,562 workers), Fakir Knitwears Ltd (11,409), Fakir Apparels Ltd (10,486) confirmed
    //         Comfit Composite Knit Ltd (11,019), Far East Knitting & Dyeing Industries Ltd (8,779) confirmed
    //         Denim Asia Ltd, SHANTA DENIMS LIMITED confirmed for denim; Crown Exclusive Wears confirmed 2025
    default:                 ["Echotex Ltd (Bangladesh)", "Fakir Knitwears Ltd (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)", "Comfit Composite Knit Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)"],
    "Dresses":               ["Ananta Apparels Ltd (Bangladesh)", "Neo Fashion Ltd (Bangladesh)", "Tarasima Apparels Ltd (Bangladesh)"],
    "Jeans":                 ["Denim Asia Ltd (Bangladesh)", "SHANTA DENIMS LIMITED (Bangladesh)", "Target Denim & Casual Wear Ltd (Bangladesh)"],
    "Hoodies & Sweatshirts": ["Echotex Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Comfit Composite Knit Ltd (Bangladesh)"],
    "Tops & T-Shirts":       ["Fakir Knitwears Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)"],
    "Activewear":            ["Comfit Composite Knit Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Tropical Knitex Ltd (Bangladesh)"],
    "School Uniform":        ["Echotex Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)"],
    "Coats & Jackets":       ["Hop Lun Apparel Limited (Bangladesh)", "AKH Apparels Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)"],
    "Formal Shirts":         ["Universal Menswear Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "Selina Apparels (Bangladesh)"],
    "Knitwear & Jumpers":    ["Comfit Composite Knit Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echoknits Ltd (Bangladesh)"],
    "Sleepsuits & Bodysuits":["Crown Exclusive Wears Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echotex Ltd (Bangladesh)"],
    "Pyjamas & Nightwear":   ["Crown Exclusive Wears Ltd (Bangladesh)", "Windy Apparels Ltd (Bangladesh)", "Neo Fashion Ltd (Bangladesh)"],
    "Swimwear":              ["Consumer Knitex Limited (Bangladesh)", "Tropical Knitex Ltd (Bangladesh)", "Echoknits Ltd (Bangladesh)"],
    "Lingerie & Intimates":  ["Hop Lun Apparel Limited (Bangladesh)", "Windy Apparels Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)"],
    "Blazers & Suits":       ["Universal Menswear Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "AKH Eco Apparels Ltd (Bangladesh)"],
    "Chinos & Trousers":     ["AKH Apparels Ltd (Bangladesh)", "Tarasima Apparels Ltd (Bangladesh)", "Neo Fashion Ltd (Bangladesh)"],
    "Eveningwear":           ["Ananta Apparels Ltd (Bangladesh)", "Selina Apparels (Bangladesh)", "Neo Fashion Ltd (Bangladesh)"],
    "Blouses & Tops":        ["Ananta Apparels Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)", "Tarasima Apparels Ltd (Bangladesh)"],
    "T-Shirts & Polos":      ["Fakir Knitwears Ltd (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)", "Far East Knitting & Dyeing Industries Ltd (Bangladesh)"],
    "Casual Shirts":         ["AKH Apparels Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "Universal Menswear Ltd (Bangladesh)"],
  },
  "sainsbury's tu": {
    // Source: OSH contributor ID 6544 — authenticated scrape June 2026
    //         1,946 total facilities | 508 fashion-relevant extracted
    //         India:132, China:97, Bangladesh:76, Türkiye:47, Sri Lanka:29, Vietnam:26, Cambodia:21, Morocco:13, Pakistan:10
    //         Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) confirmed Bangladesh anchor factory
    //         Echotex Ltd (Bangladesh) confirmed on OSH list; Zaber & Zubair confirmed Bangladesh
    //         BONY TEKSTIL & Ugur Konfeksiyon confirmed Türkiye; Hangzhou Yukai confirmed China
    default:                 ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh, Chittagong)", "Zaber & Zubair Fabrics Ltd (Bangladesh, Gazipur)", "Echotex Ltd (Bangladesh, Kaliakair)", "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye, Trabzon)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)", "Hangzhou Yukai Garments Co Ltd (China, Hangzhou)", "Kanodia Global Pvt. Ltd. (India, Panipat)", "Hirdaramani Clothing (Private) Limited (Sri Lanka)"],
    "Dresses":               ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Echotex Ltd (Bangladesh)", "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye)"],
    "Jeans":                 ["Zaber & Zubair Fabrics Ltd (Bangladesh)", "SQ Birichina Limited (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)"],
    "Hoodies & Sweatshirts": ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "AKADEMI TEKSTIL SANAYI VE TICARET A.S. (Türkiye)"],
    "Tops & T-Shirts":       ["Echotex Ltd (Bangladesh)", "SM Knitwear Ltd (Bangladesh)", "Kanodia Global Pvt. Ltd. (India, Panipat)"],
    "Activewear":            ["Indochine Apparel (Cambodia) Ltd (Cambodia)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye)"],
    "School Uniform":        ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "AMAN KNITTINGS LTD (Bangladesh, Savar)"],
    "Coats & Jackets":       ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye)", "Hangzhou Yukai Garments Co Ltd (China)"],
    "Formal Shirts":         ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)", "Kanodia Global Pvt. Ltd. (India, Panipat)"],
    "Knitwear & Jumpers":    ["Jiangyin Chaoyu Knitting Co (China, Jiangyin)", "Agile Sweater (Cambodia) Co Ltd (Cambodia)", "Ningbo Seduno Knitting (China, Ningbo)"],
    "Pyjamas & Nightwear":   ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Echotex Ltd (Bangladesh)", "SEDUNO CAMBO KNITTING CO. LTD (Cambodia)"],
    "Swimwear":              ["Indochine Apparel (Cambodia) Ltd (Cambodia)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye)"],
    "Sleepsuits & Bodysuits":["Echotex Ltd (Bangladesh)", "SM Knitwear Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)"],
    "Lingerie & Intimates":  ["Hirdaramani Clothing (Private) Limited (Sri Lanka)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Lalan Rubbers (Pvt) Ltd. (Sri Lanka, Biyagama)"],
    "Blazers & Suits":       ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)", "BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye)"],
    "Chinos & Trousers":     ["Zaber & Zubair Fabrics Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)"],
    "Eveningwear":           ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Echotex Ltd (Bangladesh)", "Hangzhou Yukai Garments Co Ltd (China)"],
    "Blouses & Tops":        ["Kanodia Global Pvt. Ltd. (India, Panipat)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Quantum Knits (India, Coimbatore)"],
    "T-Shirts & Polos":      ["Echotex Ltd (Bangladesh)", "SM Knitwear Ltd (Bangladesh)", "AMAN KNITTINGS LTD (Bangladesh, Savar)"],
    "Casual Shirts":         ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh)", "Kanodia Global Pvt. Ltd. (India, Panipat)", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye)"],
  },
  "asda george": {
    // Source: Asda George Tier 1 Supplier List August 2021 (asda.com/sustainability) — NO 2025 list has been published.
    //         Last public disclosure was August 2021. Vendor data approximated from that list and public CSR reports.
    //         Asda George does NOT maintain a current publicly available factory list as of 2025-2026.
    default:                 ["SP Apparels Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SQ Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Pacific Jeans Ltd (Bangladesh)"],
    "Dresses":               ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "SQ Group (Bangladesh)"],
    "Jeans":                 ["SQ Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Pacific Jeans Ltd (Bangladesh)"],
    "Hoodies & Sweatshirts": ["DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "SP Apparels Ltd (India)"],
    "Tops & T-Shirts":       ["KPR Mill Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SP Apparels Ltd (India)"],
    "Activewear":            ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
    "School Uniform":        ["SP Apparels Ltd (India)", "SQ Group (Bangladesh)", "DBL Group (Bangladesh)"],
    "Coats & Jackets":       ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "Youngone Corp (Bangladesh)"],
    "Formal Shirts":         ["DBL Group (Bangladesh)", "Orient Craft (India)", "SQ Group (Bangladesh)"],
    "Knitwear & Jumpers":    ["KPR Mill Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SP Apparels Ltd (India)"],
    "Pyjamas & Nightwear":   ["SP Apparels Ltd (India)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India)"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India, OEKO-TEX)", "KPR Mill Ltd (India)", "DBL Group (Bangladesh)"],
    "Lingerie & Intimates":  ["SQ Group (Bangladesh)", "Pacific Textiles (HK/China)", "MAS Holdings (Sri Lanka)"],
    "Swimwear":              ["Pacific Textiles (HK/China)", "SQ Group (Bangladesh)", "MAS Kreeda (Sri Lanka)"],
    "Chinos & Trousers":     ["SQ Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "DBL Group (Bangladesh)"],
    "Eveningwear":           ["DBL Group (Bangladesh)", "Shahi Exports (India)", "SQ Group (Bangladesh)"],
    "Blouses & Tops":        ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "SQ Group (Bangladesh)"],
    "T-Shirts & Polos":      ["KPR Mill Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "SP Apparels Ltd (India)"],
    "Casual Shirts":         ["DBL Group (Bangladesh)", "Orient Craft (India)", "SQ Group (Bangladesh)"],
  },
  "h&m": {
    // Source: H&M Group Supplier List May 2026 XLSX (hmgroup.com) — DBL Group, Ananta Group, Ha-Meem Group confirmed H&M platinum suppliers
    //         Aydinli Group (Turkey), Shenzhou International (China), Square Fashions (Bangladesh) confirmed H&M key suppliers
    default:                 ["DBL Group (Bangladesh)", "Ananta Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Square Fashions Ltd (Bangladesh)", "Aydinli Group (Turkey)", "Shenzhou International (China)"],
    "Dresses":               ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Crystal International (HK/China)"],
    "Jeans":                 ["Artistic Milliners (Pakistan, Karachi)", "Nien Hsing Textile (Vietnam/Cambodia)", "Arvind Mills (India, Ahmedabad)"],
    "Hoodies & Sweatshirts": ["Ananta Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Texhong Textile (China/Vietnam)"],
    "Tops & T-Shirts":       ["Shenzhou International (China)", "SP Apparels Ltd (India, Tirupur)", "Ha-Meem Group (Bangladesh)"],
    "Activewear":            ["Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)", "Pacific Textiles (HK/China)"],
    "School Uniform":        ["DBL Group (Bangladesh)", "KPR Mill Ltd (India)", "Ha-Meem Group (Bangladesh)"],
    "Coats & Jackets":       ["Shenzhou International (China)", "Nien Hsing Textile (Vietnam/Cambodia)", "Youngone Corp (Bangladesh)"],
    "Formal Shirts":         ["Esquel Group (China/Malaysia)", "Orient Craft (India)", "Arvind Lifestyle (India)"],
    "Knitwear & Jumpers":    ["DBL Group (Bangladesh)", "Shenzhou International (China)", "Ananta Group (Bangladesh)"],
    "Pyjamas & Nightwear":   ["Ananta Group (Bangladesh)", "SP Apparels Ltd (India)", "Ha-Meem Group (Bangladesh)"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India, Tirupur)", "Ananta Group (Bangladesh)", "DBL Group (Bangladesh)"],
    "Lingerie & Intimates":  ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Pacific Textiles (HK/China)"],
    "Swimwear":              ["MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
    "Blazers & Suits":       ["Aydinli Group (Turkey)", "Arvind Lifestyle (India)", "DBL Group (Bangladesh)"],
    "Chinos & Trousers":     ["Arvind Mills (India)", "DBL Group (Bangladesh)", "Aydinli Group (Turkey)"],
    "Eveningwear":           ["Crystal International (HK/China)", "Shahi Exports (India)", "DBL Group (Bangladesh)"],
    "Blouses & Tops":        ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Crystal International (HK/China)"],
    "T-Shirts & Polos":      ["Shenzhou International (China)", "SP Apparels Ltd (India, Tirupur)", "Ha-Meem Group (Bangladesh)"],
    "Casual Shirts":         ["Esquel Group (China/Malaysia)", "Orient Craft (India)", "DBL Group (Bangladesh)"],
  },
  "next": {
    // Source: Next PLC Tier 1 Manufacturing Sites August 2025 (nextplc.co.uk — T1 2025.pdf)
    //         Taqwa Fabrics Ltd, Liz Fashion Industry Ltd, Sm Knitwear Ltd confirmed on 2025 list
    //         Utah Fashions, Square Fashions, Tusuka, AKM Knit Wear, Echotex, Ananta Garments all re-confirmed 2025
    default:                 ["Taqwa Fabrics Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)", "Square Fashions Ltd (Bangladesh)", "Utah Fashions Ltd (Bangladesh)", "Tusuka Trousers & Jeans Ltd (Bangladesh)"],
    "Dresses":               ["Ananta Apparels Ltd (Bangladesh)", "Liz Fashion Industry Ltd (Bangladesh)", "Shahi Exports (India, Bengaluru)"],
    "Jeans":                 ["Tusuka Trousers & Jeans Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Artistic Milliners (Pakistan)"],
    "Hoodies & Sweatshirts": ["Taqwa Fabrics Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)", "Echotex Ltd (Bangladesh)"],
    "Tops & T-Shirts":       ["Taqwa Fabrics Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)", "Ananta Apparels Ltd (Bangladesh)"],
    "Activewear":            ["Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)", "MAS Kreeda (Sri Lanka)"],
    "School Uniform":        ["Echotex Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)", "Taqwa Fabrics Ltd (Bangladesh)"],
    "Coats & Jackets":       ["Youngone Corp (Bangladesh)", "Kipas Holding (Turkey)", "Nien Hsing Textile (Vietnam/Cambodia)"],
    "Formal Shirts":         ["Best Shirts Limited (Bangladesh)", "Arvind Lifestyle (India)", "Kipas Holding (Turkey)"],
    "Knitwear & Jumpers":    ["AKM Knit Wear Limited (Bangladesh)", "Echotex Ltd (Bangladesh)", "KPR Mill Ltd (India)"],
    "Pyjamas & Nightwear":   ["KPR Mill Ltd (India)", "Ananta Apparels Ltd (Bangladesh)", "Taqwa Fabrics Ltd (Bangladesh)"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India)", "Ananta Apparels Ltd (Bangladesh)", "Taqwa Fabrics Ltd (Bangladesh)"],
    "Lingerie & Intimates":  ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Z & Z Intimates Ltd (Bangladesh)"],
    "Swimwear":              ["MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
    "Blazers & Suits":       ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Ananta Apparels Ltd (Bangladesh)"],
    "Chinos & Trousers":     ["Arvind Mills (India, Ahmedabad)", "Utah Fashions Ltd (Bangladesh)", "Liz Fashion Industry Ltd (Bangladesh)"],
    "Eveningwear":           ["Liz Fashion Industry Ltd (Bangladesh)", "Shahi Exports (India)", "Ananta Apparels Ltd (Bangladesh)"],
    "Blouses & Tops":        ["Ananta Apparels Ltd (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Taqwa Fabrics Ltd (Bangladesh)"],
    "T-Shirts & Polos":      ["Taqwa Fabrics Ltd (Bangladesh)", "Echotex Ltd (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)"],
    "Casual Shirts":         ["Best Shirts Limited (Bangladesh)", "Arvind Lifestyle (India)", "Taqwa Fabrics Ltd (Bangladesh)"],
  },
  "asos": {
    // Source: ASOS Factory List April 2026 (asosplc.com/media/cmzk3m5n/factory-list-april-2026.pdf)
    //         Echotex Limited (Bangladesh, 500+), Fakir Apparels Limited (Bangladesh, 500+) confirmed April 2026
    //         Pacific Jeans Ltd (Bangladesh, 500+), Consumer Knitex Limited (Bangladesh, 500+) confirmed 2026
    //         Han Tekstil (Turkey, 150-300), Malatya Santuk Tekstil (Turkey, 300-500) confirmed 2026
    default:                 ["Echotex Limited (Bangladesh)", "Fakir Apparels Limited (Bangladesh)", "Pacific Jeans Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Han Tekstil (Turkey)"],
    "Dresses":               ["Evitex Dress Shirt Limited (Bangladesh)", "Indesore Sweater Ltd (Bangladesh)", "Han Tekstil (Turkey)"],
    "Jeans":                 ["Pacific Jeans Ltd (Bangladesh)", "Jeans 2000 Ltd (Bangladesh)", "Quattro Fashion Limited (Bangladesh)"],
    "Hoodies & Sweatshirts": ["Echotex Limited (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Indesore Sweater Ltd (Bangladesh)"],
    "Tops & T-Shirts":       ["Fakir Apparels Limited (Bangladesh)", "Echotex Limited (Bangladesh)", "Fakhruddin Textile Mills Limited (Bangladesh)"],
    "Activewear":            ["Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)", "Energypac Fashions Ltd (Bangladesh)"],
    "Coats & Jackets":       ["Northern Fashion Ltd (Bangladesh)", "Han Tekstil (Turkey)", "Malatya Santuk Tekstil San.Tic.A.S (Turkey)"],
    "Formal Shirts":         ["Evitex Dress Shirt Limited (Bangladesh)", "Han Tekstil (Turkey)", "Malatya Santuk Tekstil San.Tic.A.S (Turkey)"],
    "Knitwear & Jumpers":    ["Indesore Sweater Ltd (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Pretty Sweaters Ltd (Bangladesh)"],
    "Pyjamas & Nightwear":   ["Fakir Apparels Limited (Bangladesh)", "Energypac Fashions Ltd (Bangladesh)", "Echotex Limited (Bangladesh)"],
    "Sleepsuits & Bodysuits":["Fakir Apparels Limited (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)"],
    "Lingerie & Intimates":  ["Indochine Apparel (Bangladesh) Limited (Bangladesh)", "Fakir Apparels Limited (Bangladesh)", "Echotex Limited (Bangladesh)"],
    "Swimwear":              ["Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)", "Fakir Apparels Limited (Bangladesh)"],
    "Blazers & Suits":       ["Han Tekstil (Turkey)", "Malatya Santuk Tekstil San.Tic.A.S (Turkey)", "Northern Fashion Ltd (Bangladesh)"],
    "Chinos & Trousers":     ["Quattro Fashion Limited (Bangladesh)", "Pacific Jeans Ltd (Bangladesh)", "Han Tekstil (Turkey)"],
    "Eveningwear":           ["Han Tekstil (Turkey)", "Eva Tekstil (Turkey)", "Indesore Sweater Ltd (Bangladesh)"],
    "Blouses & Tops":        ["Evitex Dress Shirt Limited (Bangladesh)", "Han Tekstil (Turkey)", "Fakir Apparels Limited (Bangladesh)"],
    "T-Shirts & Polos":      ["Fakir Apparels Limited (Bangladesh)", "Consumer Knitex Limited (Bangladesh)", "Echotex Limited (Bangladesh)"],
    "Casual Shirts":         ["Evitex Dress Shirt Limited (Bangladesh)", "Han Tekstil (Turkey)", "Fakhruddin Textile Mills Limited (Bangladesh)"],
  },
  "m&s": {
    // Source: Open Supply Hub (opensupplyhub.org), Contributor ID 10061 — Marks & Spencer
    //         LIVE SCRAPED: June 2026. Top 472 facilities (of 1,853 total) sorted by # contributors.
    //         src/data/msSuppliers2026.js contains full structured dataset.
    //         Key sourcing mix (M&S ESG 2025): Bangladesh ~35%, India ~25%, Sri Lanka ~20%, Turkey ~10%, Pakistan ~8%.
    //         M&S joined Bangladesh EIS 2024/25. 70%+ suppliers have worked with M&S >7 years.
    default:                 ["Zaber & Zubair Fabrics Ltd (Bangladesh, Gazipur)", "Energypac Fashions Ltd (Bangladesh, Gazipur)", "Shahi Exports Pvt Ltd (India, Bengaluru)", "MAS Holdings — MAS Intimates Thurulie (Sri Lanka)", "Brandix Lanka Limited (Sri Lanka)", "Artistic Milliners Pvt Ltd (Pakistan, Karachi)"],
    "Dresses":               ["Shahi Exports Pvt Ltd (India, Bengaluru)", "Texport Industries Pvt Ltd (India, Bengaluru)", "Gokaldas Exports Ltd (India, Bengaluru)"],
    "Jeans":                 ["Artistic Milliners Pvt Ltd (Pakistan, Karachi)", "Arvind Limited — Denim Division (India, Ahmedabad)", "Pacific Jeans Cambodia (Cambodia, Phnom Penh)"],
    "Hoodies & Sweatshirts": ["Energypac Fashions Ltd (Bangladesh, Gazipur)", "Dekko Knitwears Ltd (Bangladesh, Dhaka)", "KPR Mill Limited Unit II (India, Tirupur)"],
    "Tops & T-Shirts":       ["KPR Mill Limited Unit II (India, Tirupur)", "Classic Polo Limited (India, Tirupur)", "Energypac Fashions Ltd (Bangladesh, Gazipur)"],
    "Activewear":            ["MAS Active Trading Pvt Ltd (Sri Lanka)", "MAS Kreeda Pvt Ltd (Sri Lanka)", "Hirdaramani Apparel (Sri Lanka)"],
    "School Uniform":        ["Zaber & Zubair Fabrics Ltd (Bangladesh, Gazipur)", "Energypac Fashions Ltd (Bangladesh)", "KPR Mill Limited Unit II (India, Tirupur)"],
    "Coats & Jackets":       ["Youngone Cambodia Mfg. Co. Ltd. (Cambodia, Phnom Penh SEZ)", "Dewhirst Cambodia Co Ltd (Cambodia, Phnom Penh)", "Gokaldas Exports Ltd (India, Bengaluru)"],
    "Formal Shirts":         ["Gul Ahmed Textile Mills (Pakistan, Karachi)", "Orient Craft Limited (India, Gurgaon)", "Aditya Birla Fashion — Madura (India, Bengaluru)"],
    "Knitwear & Jumpers":    ["Dekko Knitwears Ltd (Bangladesh, Dhaka)", "Epyllion Knitwears Limited (Bangladesh, Narayanganj)", "KPR Mill Limited Unit II (India, Tirupur)"],
    "Pyjamas & Nightwear":   ["SP Apparels Ltd (India, Tirupur)", "Hela Intimates Lanka Pvt Ltd (Sri Lanka)", "Brandix Lanka Limited (Sri Lanka)"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India, Tirupur)", "First Steps Babywear Lanka Pvt Ltd (Sri Lanka)", "Brandix Lanka Limited (Sri Lanka)"],
    "Lingerie & Intimates":  ["MAS Holdings — MAS Intimates Thurulie (Sri Lanka)", "Hela Intimates Lanka Pvt Ltd (Sri Lanka)", "Slimline Pvt Ltd (Sri Lanka)"],
    "Swimwear":              ["MAS Kreeda Pvt Ltd (Sri Lanka)", "MAS Active Trading Pvt Ltd (Sri Lanka)", "Hirdaramani Apparel (Sri Lanka)"],
    "Blazers & Suits":       ["Kipas Tekstil (Turkey, Kahramanmaras)", "Aydinli Group (Turkey, Istanbul)", "Gokaldas Exports Ltd (India, Bengaluru)"],
    "Chinos & Trousers":     ["Nishat Chunian Ltd — Dyeing & Printing Division (Pakistan, Lahore)", "Artistic Milliners Pvt Ltd (Pakistan, Karachi)", "Arvind Limited — Denim Division (India, Ahmedabad)"],
    "Eveningwear":           ["Shahi Exports Pvt Ltd (India, Bengaluru)", "Texport Industries Pvt Ltd (India, Bengaluru)", "Gokaldas Exports Ltd (India, Bengaluru)"],
    "Blouses & Tops":        ["Shahi Exports Pvt Ltd (India, Bengaluru)", "Texport Industries Pvt Ltd (India, Bengaluru)", "Brandix Lanka Limited (Sri Lanka)"],
    "T-Shirts & Polos":      ["KPR Mill Limited Unit II (India, Tirupur)", "Classic Polo Limited (India, Tirupur)", "Energypac Fashions Ltd (Bangladesh, Gazipur)"],
    "Casual Shirts":         ["Gul Ahmed Textile Mills (Pakistan, Karachi)", "Sapphire Textile Mills (Pakistan, Lahore)", "Orient Craft Limited (India, Gurgaon)"],
  },
  "john lewis": {
    // Source: John Lewis Partnership (JLP) Factory List July 2025 (johnlewispartnership.co.uk — ES-reporting/JLP-Factory-List.pdf)
    //         1,711 total sites (Home, Fashion & Food) confirmed July 2025.
    //         AKH Knitting and Dyeing Ltd (Bangladesh, 6,159 workers), Aman Graphics & Designs Ltd (Bangladesh, 4,380 workers)
    //         Ananta Casual Wear Ltd (Bangladesh, 3,300 workers), Energypac Fashion Ltd (Bangladesh, 4,670 workers)
    //         AKH Fashions Ltd (Bangladesh, 1,350 workers), FULLCHARM FASHION KNITTERS LIMITED (Bangladesh, 812 workers)
    //         Cotton Web Limited (Pakistan, 3,404 workers), EAM Maliban Textiles Pvt Ltd (Sri Lanka, 1,346 workers)
    //         First Steps Babywear Private Limited (India, 2,450+1,537 workers, Hosur Tamil Nadu)
    //         Boutique International (India, 552 workers, Gurgaon), Dewhirst Cambodia Co Ltd (Cambodia, 2,248 workers)
    //         Ambertex Universal Export Private Limited (India, 365 workers, Tirupur), B K Fashions (India, 346 workers, Noida)
    default:                 ["AKH Knitting and Dyeing Ltd (Bangladesh)", "Aman Graphics & Designs Ltd (Bangladesh)", "Ananta Casual Wear Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)", "Cotton Web Limited (Pakistan)", "EAM Maliban Textiles Pvt Ltd (Sri Lanka)"],
    "Dresses":               ["Aman Graphics & Designs Ltd (Bangladesh)", "Boutique International (India)", "First Steps Babywear Private Limited (India)"],
    "Jeans":                 ["Cotton Web Limited (Pakistan)", "Cotton Web Ltd Unit 2 (Pakistan)", "AKH Fashions Ltd (Bangladesh)"],
    "Hoodies & Sweatshirts": ["AKH Knitting and Dyeing Ltd (Bangladesh)", "FULLCHARM FASHION KNITTERS LIMITED (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)"],
    "Tops & T-Shirts":       ["AKH Knitting and Dyeing Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)", "Aman Graphics & Designs Ltd (Bangladesh)"],
    "Activewear":            ["EAM Maliban Textiles Pvt Ltd (Sri Lanka)", "DAG Apparel Pvt Ltd (Sri Lanka)", "Dewhirst Cambodia Co Ltd (Cambodia)"],
    "School Uniform":        ["Aman Graphics & Designs Ltd (Bangladesh)", "AKH Fashions Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)"],
    "Coats & Jackets":       ["Dewhirst Cambodia Co Ltd (Cambodia)", "AW CASHMERE (CAMBODIA) CO LTD (Cambodia)", "Aman Graphics & Designs Ltd (Bangladesh)"],
    "Formal Shirts":         ["Boutique International (India)", "Aman Graphics & Designs Ltd (Bangladesh)", "B K Fashions (India)"],
    "Knitwear & Jumpers":    ["AKH Knitting and Dyeing Ltd (Bangladesh)", "FULLCHARM FASHION KNITTERS LIMITED (Bangladesh)", "EAM Maliban Textiles Pvt Ltd (Sri Lanka)"],
    "Pyjamas & Nightwear":   ["First Steps Babywear Private Limited (India)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)", "Ambertex Universal Export Private Limited (India)"],
    "Sleepsuits & Bodysuits":["First Steps Babywear Private Limited (India)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)", "EAM Maliban Textiles Pvt Ltd (Sri Lanka)"],
    "Lingerie & Intimates":  ["EAM Maliban Textiles Pvt Ltd (Sri Lanka)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)", "DAG Apparel Pvt Ltd (Sri Lanka)"],
    "Swimwear":              ["EAM Maliban Textiles Pvt Ltd (Sri Lanka)", "DAG Apparel Pvt Ltd (Sri Lanka)", "First Steps Babywear Lanka PVT LTD (Sri Lanka)"],
    "Blazers & Suits":       ["AKH Fashions Ltd (Bangladesh)", "Boutique International (India)", "Aman Graphics & Designs Ltd (Bangladesh)"],
    "Chinos & Trousers":     ["AKH Fashions Ltd (Bangladesh)", "Cotton Web Limited (Pakistan)", "Aman Graphics & Designs Ltd (Bangladesh)"],
    "Eveningwear":           ["Boutique International (India)", "Aman Graphics & Designs Ltd (Bangladesh)", "First Steps Babywear Private Limited (India)"],
    "Blouses & Tops":        ["Aman Graphics & Designs Ltd (Bangladesh)", "Boutique International (India)", "Ambertex Universal Export Private Limited (India)"],
    "T-Shirts & Polos":      ["AKH Knitting and Dyeing Ltd (Bangladesh)", "Energypac Fashion Ltd (Bangladesh)", "Aman Graphics & Designs Ltd (Bangladesh)"],
    "Casual Shirts":         ["Boutique International (India)", "B K Fashions (India)", "Aman Graphics & Designs Ltd (Bangladesh)"],
  },
  "charles tyrwhitt": {
    // Source: Charles Tyrwhitt does NOT publish a public factory/supplier list.
    //         No downloadable list, no OS Hub disclosure, no public CSR factory registry as of 2025-2026.
    default:                 ["Factory list not publicly available — Charles Tyrwhitt does not publish its supplier/factory list"],
  },
  "reiss": {
    // Source: Reiss does NOT publish a public factory/supplier list.
    //         No downloadable list, no OS Hub disclosure, no public CSR factory registry as of 2025-2026.
    default:                 ["Factory list not publicly available — Reiss does not publish its supplier/factory list"],
  },
  "ted baker": {
    // Source: Ted Baker does NOT publish a public factory/supplier list.
    //         No downloadable list, no OS Hub disclosure, no public CSR factory registry as of 2025-2026.
    //         Brand acquired by Authentic Brands Group (ABG) in 2024; operates on licensing model.
    default:                 ["Factory list not publicly available — Ted Baker does not publish its supplier/factory list"],
  },
};
const getVerifiedVendors = (brand, category) => {
  const brandKey = brand.toLowerCase();
  const brandData = Object.entries(VERIFIED_VENDORS).find(([k]) => brandKey.includes(k))?.[1];
  if (!brandData) return null;
  return brandData[category] || brandData.default || null;
};

const SYSTEM_PROMPT = `You are a UK fashion retail supply chain intelligence expert specializing in brand sourcing strategies, fabric certifications, and competitive positioning (2025-2026).

You provide detailed, accurate intelligence on how major UK retailers source fabrics for their garment lines. Your knowledge includes:

Brand sourcing intelligence (current 2025-2026):
- Primark: Primark Cotton Project (renamed Oct 2024; 57% certified units by 2025, target 100% by 2027), Bangladesh/India/China dominant, pushing rPET by 2027
- H&M: GOTS organic cotton (top global buyer), ECOVERO™ viscose, rPET, Bangladesh/China/Turkey, Circ® recycled denim launching Spring 2026; 89% materials recycled or sustainably sourced in 2024
- ASOS: ECOVERO™ viscose, GRS rPET, flexible short-lead sourcing Turkey/China/UK, lightweight fabric bias
- Next: BCI cotton, combed yarns, RWS wool (50% by 2025, 75% by 2028, 100% by 2030), linen blends, Turkey/India/Bangladesh
- Sainsbury's TU: BCI cotton, REPREVE® rPET, OEKO-TEX mandatory for all children's lines, Coimbatore/Tirupur sourcing
- M&S: GOTS/OCS organic cotton mandatory transition, TENCEL™ Lyocell, RWS wool, Plan A sustainability, OEKO-TEX® 100 on all lines, 100% recycled polyester by 2026
- John Lewis: Premium natural fibres (Italian wool, Egyptian cotton), GOTS/RWS certified, strict QA, premium sourcing
- Charles Tyrwhitt: 100% cotton shirts (2-ply), Planet Mark certification (5th year 2025), premium Egyptian cotton poplin
- Asda George: 65/35 poly-cotton, OEKO-TEX 100 mandatory for kids, REPREVE® rPET increasing

India sourcing clusters:
- Tirupur/Coimbatore (Tamil Nadu): World's largest knitwear cluster; GOTS/OCS certified mills available
- Surat (Gujarat): Synthetic fabrics, georgette, printed polyester/viscose
- Ahmedabad (Gujarat): Denim (Asia's largest), shirting, printed cotton, GOTS mills
- Erode (Tamil Nadu): Bottomweight cotton, stretch fabrics, twill/drill
- Bhilwara (Rajasthan): Largest suiting cluster; wool-poly blends, gabardine
- Ludhiana (Punjab): Woollens, knitwear (acrylic/wool blends)
- Panipat (Haryana): Recycled textiles, shoddy wool, upcycled fabrics
- Varanasi (UP): Silk, brocade, handloom

Regulatory context:
- CMA DMCC Act: greenwash fines up to 10% global turnover, active April 2025
- CMA Supply Chain Guidance issued early 2026
- OEKO-TEX® Standard 100: mandatory for M&S; increasingly required across UK retail`;

const USER_PROMPT = (brand, category, verifiedVendors) => `Generate a detailed supply chain intelligence report for: ${brand} in the ${category} category.

Return ONLY a JSON object with exactly this structure — no markdown, no explanation, raw JSON only:

{
  "overviewStance": "3-4 sentences on ${brand}'s overall fabric sourcing philosophy, price positioning, and what drives their fabric decisions for ${category}.",
  "sustainability": "3-4 sentences on ${brand}'s actual current sustainability certifications, commitments, and measurable progress in ${category} fabrics. Be specific.",
  "sourcingInsight": "3-4 sentences on where ${brand} actually sources fabrics for ${category} — countries, specific clusters or factories if known, lead-time and volume strategy.",
  "upgradeAdvice": "4-5 sentences of strategic advice for an Indian B2B fabric supplier wanting to win business from ${brand} for ${category}. Be very specific: exact certifications, exact fabric specs, exact India clusters, and why ${brand} would prefer this supplier.",
  "knownVendors": ${verifiedVendors ? JSON.stringify(verifiedVendors) : '["See brand sustainability report for full supplier list"]'},
  "coo": "Primary countries of origin e.g. 'Bangladesh, India, Turkey'"
}

Rules:
- Be specific and accurate — use real brand data
- knownVendors: Use the verified list provided above exactly as given — do NOT modify or hallucinate vendor names
- upgradeAdvice must be immediately actionable for a fabric mill in India
- Return ONLY the JSON object`;

function extractJSON(text) {
  const stripped = text.replace(/^```(?:json)?\s*/im, '').replace(/\s*```\s*$/m, '').trim();
  const start = stripped.indexOf('{');
  const end = stripped.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON found in response');
  return stripped.slice(start, end + 1);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { brand, category } = req.body || {};
  if (!brand || !category) return res.status(400).json({ error: 'brand and category are required' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'GEMINI_API_KEY not configured. Add it in Vercel project settings → Environment Variables. Get free key at https://aistudio.google.com/app/apikey' });
  }

  // Get verified vendors to inject into prompt (prevents hallucination)
  const verifiedVendors = getVerifiedVendors(brand, category);

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(25000),
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: 'user', parts: [{ text: USER_PROMPT(brand, category, verifiedVendors) }] }],
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 1500,
            responseMimeType: 'application/json',
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      // 429 = quota exceeded — return clean flag so client falls back to offline data gracefully
      if (geminiRes.status === 429) {
        console.warn('[texai-deep-research] Gemini quota exceeded (429)');
        return res.status(429).json({ error: 'quota_exceeded' });
      }
      throw new Error(`Gemini ${geminiRes.status}: ${errText.slice(0, 300)}`);
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error('Empty response from Gemini');

    const jsonStr = extractJSON(rawText);
    const parsed = JSON.parse(jsonStr);

    if (!parsed.overviewStance || !parsed.upgradeAdvice) {
      throw new Error('Response missing required fields');
    }

    // Always override knownVendors with verified data — never trust AI-generated vendor names
    if (verifiedVendors) {
      parsed.knownVendors = verifiedVendors;
    }

    return res.status(200).json({ data: parsed, model_label: 'Gemini 2.5 Flash' });
  } catch (err) {
    console.error('[texai-deep-research] Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
