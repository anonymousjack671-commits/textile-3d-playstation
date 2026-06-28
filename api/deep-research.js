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
    //         1,946 total facilities | 210 apparel-only (home textiles, food, rubber, tea estates excluded)
    //         Bangladesh:71, China:54, Türkiye:29, Cambodia:20, India:14, Sri Lanka:9, Pakistan:6, Vietnam:5, Egypt:2
    //         Category↔vendor mapping verified via factory websites & trade intelligence (June 2026)
    //         Key anchors: Babylon Garments (confirmed SJ — MENSWEAR woven shirts), Echotex (all-gender jersey knitwear)
    //         Kenpark K-3 (woven bottoms/jackets), Paramount Okhla (confirmed SJ womenswear)
    //         QUATTRO FASHION (woven shirts), Era Tekstil (circular knitwear), SOUTH EAST TEXTILES (jersey all-gender)
    //         BONY TEKSTIL / NBG / Murat / Penti / Jiangyin Chaoyu → socks/hosiery only
    //         SQ Birichina → lingerie + activewear + swimwear specialist (NOT jeans)
    //         AMAN KNITTINGS → full-fashion sweaters/pullovers (NOT T-shirts)
    //         Indochine Apparel Cambodia → woven shirts/blouses/trousers (NOT activewear/swimwear)
    //         Hangzhou Yukai → sweaters/cold-weather accessories (NOT coats/eveningwear)
    //         Babylon Garments → MENSWEAR only (formal + casual shirts); NOT womenswear/dresses/blouses
    //         SOUTH EAST TEXTILES → jersey composite, supplies kids/men/women jersey categories
    default:                 ["Babylon Garments Ltd (Bangladesh, Mirpur) — confirmed SJ menswear, woven shirts", "Echotex Ltd (Bangladesh, Kaliakair) — all-gender jersey knitwear (men/women/kids)", "Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh, Chittagong) — woven bottoms & jackets", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye, Izmir) — circular knitwear dresses/tops/PJs", "QUATTRO FASHION LIMITED (Bangladesh, Gazipur) — woven shirts", "Paramount Garments Pvt. Ltd. (India, Okhla) — confirmed SJ womenswear", "SOUTH EAST TEXTILES (PVT.) LIMITED (Bangladesh, Gazipur) — jersey composite, kids/men/women"],
    "Dresses":               ["Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye) — circular knitwear dresses", "Paramount Garments Pvt. Ltd. (India, Okhla) — ladies woven dresses, confirmed SJ", "SM Knitwear Ltd (Bangladesh) — maxi dresses (jersey)", "Afflatus Clothing Pvt. Ltd. (India, Manesar) — womenswear dresses/skirts"],
    "Jeans":                 ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh) — woven bottoms incl. jeans", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye) — woven casualwear", "QUATTRO FASHION LIMITED (Bangladesh) — woven trousers/bottoms"],
    "Hoodies & Sweatshirts": ["Echotex Ltd (Bangladesh) — all-gender jersey hoodies/sweatshirts", "SM Knitwear Ltd (Bangladesh) — sweatshirts/hoodies", "SOUTH EAST TEXTILES (PVT.) LIMITED (Bangladesh) — jersey hoodies/sweatshirts, kids/men/women", "AKADEMI TEKSTIL SANAYI VE TICARET A.S. (Türkiye) — fashion knitwear", "Afflatus Clothing Pvt. Ltd. (India, Manesar) — jersey hoodies"],
    "Tops & T-Shirts":       ["Echotex Ltd (Bangladesh) — all-gender jersey tops/tees", "SOUTH EAST TEXTILES (PVT.) LIMITED (Bangladesh) — jersey tops, kids/men/women", "SM Knitwear Ltd (Bangladesh) — T-shirts/tank tops", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye) — circular knit tops", "AKADEMI TEKSTIL SANAYI VE TICARET A.S. (Türkiye) — fashion knit tops"],
    "Activewear":            ["SQ Birichina Limited (Bangladesh) — activewear specialist, LEED Platinum", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye) — knit leggings/active tops", "Liz Fashion Industry Ltd (Bangladesh) — sportswear"],
    "School Uniform":        ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh) — woven school shirts/trousers", "Echotex Ltd (Bangladesh) — jersey school polos/sweatshirts, all ages", "SOUTH EAST TEXTILES (PVT.) LIMITED (Bangladesh) — jersey school wear, kids/adults", "QUATTRO FASHION LIMITED (Bangladesh) — woven school shirts", "Quantum Knits Pvt. Ltd. (India, Coimbatore) — schoolwear polos (jersey), confirmed SJ"],
    "Coats & Jackets":       ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh) — casual woven jackets", "Hirdaramani Clothing (Private) Limited (Sri Lanka) — outerwear/casualwear", "Hirdaramani Industries (Private) Limited (Sri Lanka) — jackets/outerwear"],
    "Formal Shirts":         ["QUATTRO FASHION LIMITED (Bangladesh) — woven formal shirts, men's & ladies'", "Babylon Garments Ltd (Bangladesh) — men's woven formal shirts, confirmed SJ", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye) — woven formal shirts"],
    "Knitwear & Jumpers":    ["Agile Sweater (Cambodia) Co Ltd (Cambodia) — full-fashion sweaters/pullovers", "Indesore Sweater Ltd (Bangladesh) — sweaters/pullovers/cardigans", "AMAN KNITTINGS LTD (Bangladesh, Savar) — hand-flat knit sweaters (2,000 machines)", "SQ CELSIUS LIMITED (Bangladesh) — full-fashion knitwear acrylic-to-cashmere", "AKADEMI TEKSTIL SANAYI VE TICARET A.S. (Türkiye) — ladies'/men's fashion knitwear", "Hangzhou Yukai Garments Co Ltd (China) — sweaters/scarves/shawls", "Ningbo Seduno Knitting Co (China) — cardigans/pullovers/cut-and-sew knitwear"],
    "Pyjamas & Nightwear":   ["Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye) — PJ sets, nightwear, all-gender", "Paramount Garments Pvt. Ltd. (India, Okhla) — ladies nightwear/beachwear, confirmed SJ", "Ningbo Seduno Knitting Co (China) — sleepwear/knitwear basics"],
    "Swimwear":              ["SQ Birichina Limited (Bangladesh) — swimwear specialist, LEED Platinum", "Hirdaramani Clothing (Private) Limited (Sri Lanka) — swimwear"],
    "Sleepsuits & Bodysuits":["Echotex Ltd (Bangladesh) — jersey bodysuits/babywear", "SOUTH EAST TEXTILES (PVT.) LIMITED (Bangladesh) — jersey babywear/bodysuits, kids", "SM Knitwear Ltd (Bangladesh) — toddler/babies knitwear", "Ningbo Seduno Knitting Co (China) — knitwear basics/underwear"],
    "Rompers & Outfits":     ["AKH Knitting and Dyeing Ltd (Bangladesh) — confirmed SJ babywear supplier", "New Harvest (China) — confirmed SJ baby knitwear", "Pearl Apparels (India, Gurgaon) — woven baby garments, confirmed SJ", "Jay Jay Mills (Sri Lanka) — confirmed SJ baby jersey knits", "Poppy's Knitwear — confirmed SJ babywear"],
    "Baby":                  ["AKH Knitting and Dyeing Ltd (Bangladesh) — confirmed SJ babywear supplier", "New Harvest (China) — confirmed SJ baby knitwear", "Pearl Apparels (India, Gurgaon) — woven baby garments, confirmed SJ", "Jay Jay Mills (Sri Lanka) — confirmed SJ baby jersey knits", "Poppy's Knitwear — confirmed SJ babywear"],
    "Lingerie & Intimates":  ["SQ Birichina Limited (Bangladesh) — lingerie + intimate specialist, LEED Platinum", "Hirdaramani Clothing (Private) Limited (Sri Lanka) — loungewear/intimates", "Penti Corap San. ve Tic. A.S. (Türkiye) — intimates/legwear, 86M pairs/yr"],
    "Blazers & Suits":       ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh) — tailored woven garments", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye) — woven formal casualwear"],
    "Chinos & Trousers":     ["Kenpark Bangladesh Apparel Pvt. Ltd. (K-3) (Bangladesh) — woven bottoms/chinos/trousers", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye) — woven trousers", "QUATTRO FASHION LIMITED (Bangladesh) — woven bottoms"],
    "Eveningwear":           ["Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye) — knitwear dresses/occasion tops", "Paramount Garments Pvt. Ltd. (India, Okhla) — ladies occasion dresses", "Afflatus Clothing Pvt. Ltd. (India, Manesar) — ladies occasion wear"],
    "Blouses & Tops":        ["Paramount Garments Pvt. Ltd. (India, Okhla) — ladies blouses/tops, confirmed SJ", "Afflatus Clothing Pvt. Ltd. (India, Manesar) — womenswear blouses/tops", "Era Tekstil Sanayi Ve Ticaret A.S. (Türkiye) — circular knit tops", "Indochine Apparel (Cambodia) Ltd (Cambodia) — woven blouses/shirts"],
    "T-Shirts & Polos":      ["Echotex Ltd (Bangladesh) — all-gender jersey T-shirts/polos", "SOUTH EAST TEXTILES (PVT.) LIMITED (Bangladesh) — jersey T-shirts/polos, kids/men/women", "SM Knitwear Ltd (Bangladesh) — T-shirts/polos", "AKADEMI TEKSTIL SANAYI VE TICARET A.S. (Türkiye) — fashion knit tops", "Quantum Knits Pvt. Ltd. (India, Coimbatore) — jersey polos, confirmed SJ"],
    "Casual Shirts":         ["QUATTRO FASHION LIMITED (Bangladesh) — woven casual shirts, men's & ladies'", "Babylon Garments Ltd (Bangladesh) — men's woven casual shirts, confirmed SJ", "Ugur Konfeksiyon San. Ve Tic. A.S. (Türkiye) — woven casual shirts", "Indochine Apparel (Cambodia) Ltd (Cambodia) — woven shirts/casual tops"],
    "Socks & Hosiery":       ["BONY TEKSTIL ISLETMELERI VE SAN. TIC. A.S. (Türkiye) — 100M pairs/yr socks specialist", "NBG Corap Imalati San. ve Tic. A.S. (Türkiye) — GOTS certified hosiery", "Murat Corap San. Tic. A.S. (Türkiye) — 40M pairs/yr hosiery", "Penti Corap San. ve Tic. A.S. (Türkiye) — legwear/hosiery/intimates", "Jiangyin Chaoyu Knitting Co (China) — sublimation print socks specialist"],
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
    //         LIVE SCRAPED: June 2026. 1,853 total facilities | 253 apparel-only (home textiles, food, tea excluded)
    //         src/data/msSuppliers2026.js contains full structured dataset.
    //         Apparel sourcing mix: Bangladesh:64(25%), China:47(19%), Sri Lanka:46(18%), Cambodia:33(13%), Türkiye:23(9%)
    //         India:14(6%), Vietnam:13(5%), Pakistan:7(3%), Egypt:5(2%), Morocco:1. Ethiopia: 0 (cleared — coffee coops only)
    //         M&S joined Bangladesh EIS 2024/25. 70%+ suppliers have worked with M&S >7 years.
    // Category↔vendor mapping verified via factory websites & trade intelligence (June 2026)
    // Key anchors confirmed: MAS Thurulie = M&S dedicated lingerie factory (world's 1st carbon-neutral apparel plant)
    // Youngone Cambodia = performance outerwear (North Face/Nike tier); Orient Craft = M&S/Ralph Lauren confirmed
    // Shahi Exports = India's largest apparel exporter (M&S confirmed); Artistic Milliners = C2C certified denim
    // SP Apparels Tirupur = babywear/kidswear specialist (50M garments/yr)
    // Sanko Tekstil / Kipas Tekstil / Nishat Chunian → primarily fabric/yarn suppliers, removed from garment categories
    default:                 ["Energypac Fashions Ltd (Bangladesh, Gazipur) — broad capability: blazers, shirts, jackets, trackwear", "Courtaulds Clothing Lanka (Pvt) Ltd (Sri Lanka) — lingerie, sportswear, outerwear, knitwear", "Hirdaramani Clothing (Private) Limited (Sri Lanka) — casualwear, swimwear, outerwear", "Dewhirst (Cambodia) Co Ltd (Cambodia) — casualwear/outerwear", "Shahi Exports Pvt Ltd (India, Bengaluru) — India's largest apparel exporter, M&S confirmed", "Orient Craft Limited (India, Gurgaon) — M&S confirmed, woven/embroidery/casualwear", "MAS Active (Pvt) Limited — Linea Intimo (Sri Lanka) — activewear/intimates"],
    "Dresses":               ["Shahi Exports Pvt Ltd (India, Bengaluru) — woven & knit ladies' dresses, M&S confirmed", "Texport Industries Pvt Ltd (India, Bengaluru) — woven/knit all-gender apparel", "Gokaldas Exports Ltd (India, Bengaluru) — woven dresses/blouses, M&S/Gap confirmed"],
    "Jeans":                 ["Artistic Milliners Pvt Ltd (Pakistan, Karachi) — world's first C2C certified denim, 30M garments/yr", "Pacific Jeans Cambodia (Cambodia) — premium 5-pocket & fashion-wash jeans specialist", "Arvind Limited — Denim Division (India, Ahmedabad) — vertically integrated denim"],
    "Hoodies & Sweatshirts": ["Energypac Fashions Ltd (Bangladesh, Gazipur) — sweatshirts/jerseys/pullovers", "Dekko Knitwears Ltd (Bangladesh, Dhaka) — T-shirts/polo/sweatshirts, Epyllion Group", "Epyllion Knitwears Limited (Bangladesh, Narayanganj) — circular knitwear hoodies/sweatshirts"],
    "Tops & T-Shirts":       ["KPR Mill Limited Unit II (India, Tirupur) — 95M garments/yr knitwear, T-shirts/polo", "Classic Polo Limited (India, Tirupur) — India's largest-selling T-shirt brand (Classic Polo)", "Energypac Fashions Ltd (Bangladesh, Gazipur) — jerseys/tops"],
    "Activewear":            ["MAS Active (Pvt) Limited — Linea Intimo (Sri Lanka) — sports bras, yoga wear, athleisure, Nike/Lululemon tier", "MAS Kreeda Pvt Ltd (Sri Lanka) — performance athletic wear, Nike dedicated", "Hirdaramani Clothing (Private) Limited (Sri Lanka) — activewear/swimwear"],
    "School Uniform":        ["Energypac Fashions Ltd (Bangladesh, Gazipur) — shirts/blazers/trousers", "KPR Mill Limited Unit II (India, Tirupur) — knit school polos/T-shirts", "Courtaulds Clothing Lanka (Pvt) Ltd (Sri Lanka) — broad garment capability"],
    "Coats & Jackets":       ["Youngone Cambodia Mfg. Co. Ltd. (Cambodia) — performance outerwear, The North Face/Nike/Adidas tier", "Dewhirst Cambodia Co Ltd (Cambodia) — casual & tailored outerwear", "Gokaldas Exports Ltd (India, Bengaluru) — jackets/suits/outerwear, M&S confirmed"],
    "Formal Shirts":         ["Orient Craft Limited (India, Gurgaon) — woven formal shirts, M&S/Ralph Lauren/Gap confirmed", "Gul Ahmed Textile Mills (Pakistan, Karachi) — woven shirts/shirting", "Aditya Birla Fashion — Madura (India, Bengaluru) — premium menswear shirts"],
    "Knitwear & Jumpers":    ["Dekko Knitwears Ltd (Bangladesh, Dhaka) — T-shirts/polo/knitwear, Epyllion Group", "Epyllion Knitwears Limited (Bangladesh, Narayanganj) — circular knitwear pullovers", "KPR Mill Limited Unit II (India, Tirupur) — knit tops/cardigans"],
    "Pyjamas & Nightwear":   ["SP Apparels Ltd (India, Tirupur) — babies' & children's knitwear specialist, 50M garments/yr", "Hela Intimates Lanka Pvt Ltd (Sri Lanka) — sleepwear/intimates, PVH/Michael Kors tier", "Brandix Lanka Limited (Sri Lanka) — M&S/Next confirmed, intimate & casual"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India, Tirupur) — babywear specialist: bodysuits/sleepsuits/infant knitwear", "Courtaulds Clothing Lanka (Pvt) Ltd (Sri Lanka) — babies' & children's garments", "Brandix Lanka Limited (Sri Lanka) — intimate/baby garments"],
    "Lingerie & Intimates":  ["MAS Holdings — MAS Intimates Thurulie (Sri Lanka) — M&S DEDICATED factory, world's first carbon-neutral apparel plant, LEED Platinum", "Hela Intimates Lanka Pvt Ltd (Sri Lanka) — bras/shapewear/sleepwear, Calvin Klein/Tommy Hilfiger tier", "Slimline Pvt Ltd (Sri Lanka) — MAS Holdings subsidiary, ladies' & men's intimate apparel", "Courtaulds Clothing Lanka (Pvt) Ltd (Sri Lanka) — lingerie/sportswear"],
    "Swimwear":              ["MAS Kreeda Pvt Ltd (Sri Lanka) — performance swimwear/athletic, Nike tier", "MAS Active (Pvt) Limited — Linea Intimo (Sri Lanka) — swimwear/beachwear/athleisure", "Hirdaramani Clothing (Private) Limited (Sri Lanka) — swimwear"],
    "Blazers & Suits":       ["Aydinli Group (Türkiye, Istanbul) — licensed menswear/womenswear (Pierre Cardin, Cacharel, US Polo Assn.), 672 stores", "Gokaldas Exports Ltd (India, Bengaluru) — suits/blazers/jackets", "Orient Craft Limited (India, Gurgaon) — woven tailored garments"],
    "Chinos & Trousers":     ["Artistic Milliners Pvt Ltd (Pakistan, Karachi) — woven bottoms/chinos alongside denim", "Arvind Limited — Denim Division (India, Ahmedabad) — woven & denim bottoms", "Gokaldas Exports Ltd (India, Bengaluru) — woven trousers/shorts"],
    "Eveningwear":           ["Shahi Exports Pvt Ltd (India, Bengaluru) — ladies' woven eveningwear", "Texport Industries Pvt Ltd (India, Bengaluru) — woven/knit occasion wear", "Gokaldas Exports Ltd (India, Bengaluru) — woven dresses/eveningwear"],
    "Blouses & Tops":        ["Shahi Exports Pvt Ltd (India, Bengaluru) — ladies' woven blouses/tops", "Texport Industries Pvt Ltd (India, Bengaluru) — woven/knit ladies' tops", "Brandix Lanka Limited (Sri Lanka) — woven & knit ladies' tops"],
    "T-Shirts & Polos":      ["KPR Mill Limited Unit II (India, Tirupur) — T-shirts/polo specialist", "Classic Polo Limited (India, Tirupur) — India's largest T-shirt brand", "Energypac Fashions Ltd (Bangladesh, Gazipur) — jerseys/T-shirts"],
    "Casual Shirts":         ["Orient Craft Limited (India, Gurgaon) — woven casualwear shirts, M&S confirmed", "Sapphire Textile Mills (Pakistan, Lahore) — woven apparel/shirts, vertically integrated", "Gul Ahmed Textile Mills (Pakistan, Karachi) — woven shirts"],
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
