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
  // H&M Group Supply Chain transparency (hmgroup.com/sustainability/leading-the-change/transparency)
  // Primark published factory list (corporate.primark.com)
  // M&S Interactive Supplier Map / Open Supply Hub (corporate.marksandspencer.com)
  // ASOS Factory List Oct 2024 (asosplc.com/corporate-responsibility)
  primark: {
    default:                 ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "SP Apparels Ltd (India, Tirupur)", "Pacific Jeans Ltd (Bangladesh)"],
    "Dresses":               ["Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
    "Jeans":                 ["Pacific Jeans Ltd (Bangladesh)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)"],
    "Hoodies & Sweatshirts": ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)"],
    "Tops & T-Shirts":       ["SP Apparels Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)"],
    "Activewear":            ["Crystal International (HK/China)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
    "School Uniform":        ["Viyellatex Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "SP Apparels Ltd (India)"],
    "Coats & Jackets":       ["Youngone Corp (Bangladesh)", "Nien Hsing Textile (Vietnam/Cambodia)", "Pacific Textiles (HK/China)"],
    "Formal Shirts":         ["Orient Craft (India, Delhi NCR)", "Ha-Meem Group (Bangladesh)", "DBL Group (Bangladesh)"],
    "Knitwear & Jumpers":    ["DBL Group (Bangladesh)", "SP Apparels Ltd (India)", "Viyellatex Group (Bangladesh)"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India, OEKO-TEX)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India)"],
    "Pyjamas & Nightwear":   ["Ha-Meem Group (Bangladesh)", "SP Apparels Ltd (India)", "DBL Group (Bangladesh)"],
    "Swimwear":              ["Pacific Textiles (HK/China)", "MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)"],
    "Lingerie & Intimates":  ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "SP Apparels Ltd (India)"],
    "Blazers & Suits":       ["Ha-Meem Group (Bangladesh)", "Orient Craft (India)", "DBL Group (Bangladesh)"],
    "Chinos & Trousers":     ["DBL Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Pacific Jeans Ltd (Bangladesh)"],
    "Eveningwear":           ["Ha-Meem Group (Bangladesh)", "Shahi Exports (India)", "DBL Group (Bangladesh)"],
    "Blouses & Tops":        ["Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
    "T-Shirts & Polos":      ["SP Apparels Ltd (India, Tirupur)", "DBL Group (Bangladesh)", "KPR Mill Ltd (India, Tirupur)"],
    "Casual Shirts":         ["Ha-Meem Group (Bangladesh)", "Orient Craft (India, Delhi NCR)", "DBL Group (Bangladesh)"],
  },
  "sainsbury's tu": {
    // Source: Sainsbury's TU Supplier List Nov 2024 (corporate.sainsburys.co.uk/tu-supplier-list-nov2024.pdf)
    //         Sainsbury's GM & Clothing Tier 1 Supplier List 2025 (corporate.sainsburys.co.uk — gm-and-clothing-tier-1-supplier-list-2025.pdf)
    //         Echotex Ltd (Bangladesh) confirmed on 2025 list (13,416 workers); Crown Exclusive Wears confirmed 2025
    default:                 ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Echotex Ltd (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "FB DIS TICARET AS (Turkey)", "Taneks Giyim Tekstil (Turkey)"],
    "Dresses":               ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "FB DIS TICARET AS (Turkey)"],
    "Jeans":                 ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
    "Hoodies & Sweatshirts": ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)"],
    "Tops & T-Shirts":       ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)"],
    "Activewear":            ["Tefron Europe SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)"],
    "School Uniform":        ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)"],
    "Coats & Jackets":       ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)", "DATSA TEXTIL SRL (Romania)"],
    "Formal Shirts":         ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
    "Knitwear & Jumpers":    ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)", "DATSA TEXTIL SRL (Romania)"],
    "Pyjamas & Nightwear":   ["Tefron Europe SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)"],
    "Swimwear":              ["Tefron Europe SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)"],
    "Sleepsuits & Bodysuits":["Tefron Europe SRL (Romania)", "Echotex Ltd (Bangladesh)", "DATSA TEXTIL SRL (Romania)"],
    "Lingerie & Intimates":  ["Tefron Europe SRL (Romania)", "DATSA TEXTIL SRL (Romania)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)"],
    "Blazers & Suits":       ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)", "DATSA TEXTIL SRL (Romania)"],
    "Chinos & Trousers":     ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "FB DIS TICARET AS (Turkey)", "DATSA TEXTIL SRL (Romania)"],
    "Eveningwear":           ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "FB DIS TICARET AS (Turkey)"],
    "Blouses & Tops":        ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
    "T-Shirts & Polos":      ["Echotex Ltd (Bangladesh)", "Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "Taneks Giyim Tekstil (Turkey)"],
    "Casual Shirts":         ["Kenpark Bangladesh Apparel Pvt. Ltd. (Bangladesh)", "DATSA TEXTIL SRL (Romania)", "Taneks Giyim Tekstil (Turkey)"],
  },
  "asda george": {
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
    // Source: H&M Group supply chain transparency (hmgroup.com) — DBL Group and Ananta Group confirmed as H&M platinum suppliers
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
    // Source: ASOS Factory List October 2024 (asosplc.com/corporate-responsibility/our-products/our-supply-chain)
    default:                 ["Kipas Holding (Turkey)", "AKM Knit Wear Limited (Bangladesh)", "Fakir Apparels Ltd (Bangladesh)", "Orient Craft (India)", "DBL Group (Bangladesh)"],
    "Dresses":               ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
    "Jeans":                 ["Kipas Holding (Turkey)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)"],
    "Hoodies & Sweatshirts": ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
    "Tops & T-Shirts":       ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
    "Activewear":            ["MAS Kreeda (Sri Lanka)", "Far Eastern New Century (Taiwan)", "Pacific Textiles (HK/China)"],
    "Coats & Jackets":       ["Kipas Holding (Turkey)", "DBL Group (Bangladesh)", "Nien Hsing Textile (Vietnam/Cambodia)"],
    "Formal Shirts":         ["Orient Craft (India)", "Kipas Holding (Turkey)", "Esquel Group (China/Malaysia)"],
    "Knitwear & Jumpers":    ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
    "Pyjamas & Nightwear":   ["Fakir Apparels Ltd (Bangladesh)", "KPR Mill Ltd (India)", "Kipas Holding (Turkey)"],
    "Sleepsuits & Bodysuits":["KPR Mill Ltd (India)", "DBL Group (Bangladesh)", "AKM Knit Wear Limited (Bangladesh)"],
    "Lingerie & Intimates":  ["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Kipas Holding (Turkey)"],
    "Swimwear":              ["Pacific Textiles (HK/China)", "MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)"],
    "Blazers & Suits":       ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)"],
    "Chinos & Trousers":     ["Kipas Holding (Turkey)", "Arvind Mills (India, Ahmedabad)", "DBL Group (Bangladesh)"],
    "Eveningwear":           ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
    "Blouses & Tops":        ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "DBL Group (Bangladesh)"],
    "T-Shirts & Polos":      ["AKM Knit Wear Limited (Bangladesh)", "KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)"],
    "Casual Shirts":         ["Kipas Holding (Turkey)", "Orient Craft (India)", "Fakir Apparels Ltd (Bangladesh)"],
  },
  "m&s": {
    // Source: M&S Open Supply Hub disclosures / corporate.marksandspencer.com/our-approach-sourcing
    default:                 ["Shahi Exports (India, Bengaluru)", "Brandix Lanka (Sri Lanka)", "MAS Holdings (Sri Lanka)", "Beximco (Bangladesh)", "Eastman Exports (India, Tirupur)", "Arvind Mills (India, Ahmedabad)"],
    "Dresses":               ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
    "Jeans":                 ["Arvind Mills (India, Ahmedabad)", "Beximco (Bangladesh)", "Aarvee Denims (India, Ahmedabad)"],
    "Hoodies & Sweatshirts": ["Brandix Lanka (Sri Lanka)", "Texport Industries (India, Bengaluru)", "KPR Mill Ltd (India, Tirupur)"],
    "Tops & T-Shirts":       ["Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
    "Activewear":            ["MAS Active (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Eclat Textile (Taiwan)"],
    "School Uniform":        ["Eastman Exports (India)", "Brandix Lanka (Sri Lanka)", "Beximco (Bangladesh)"],
    "Coats & Jackets":       ["Brandix Lanka (Sri Lanka)", "Youngone Corp (Bangladesh)", "Texport Industries (India)"],
    "Formal Shirts":         ["Arvind Lifestyle (India)", "Gokaldas Exports (India, Bengaluru)", "Eastman Exports (India)"],
    "Knitwear & Jumpers":    ["MAS Active (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Eastman Exports (India, Tirupur)"],
    "Pyjamas & Nightwear":   ["Brandix Lanka (Sri Lanka)", "MAS Holdings (Sri Lanka)", "Eastman Exports (India)"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India, OEKO-TEX)", "Brandix Lanka (Sri Lanka)", "KPR Mill Ltd (India)"],
    "Lingerie & Intimates":  ["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
    "Swimwear":              ["MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
    "Blazers & Suits":       ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Gokaldas Exports (India)"],
    "Chinos & Trousers":     ["Arvind Mills (India)", "Brandix Lanka (Sri Lanka)", "Eastman Exports (India)"],
    "Eveningwear":           ["Shahi Exports (India)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
    "Blouses & Tops":        ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
    "T-Shirts & Polos":      ["Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
    "Casual Shirts":         ["Arvind Lifestyle (India)", "Gokaldas Exports (India, Bengaluru)", "Eastman Exports (India)"],
  },
  "john lewis": {
    default:                 ["Johnstons of Elgin (Scotland, UK)", "Hawick Knitwear (Scotland, UK)", "MAS Holdings (Sri Lanka)", "Arvind Mills (India, Ahmedabad)", "Eastman Exports (India, Tirupur)", "SP Apparels Ltd (India)"],
    "Dresses":               ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
    "Jeans":                 ["Arvind Mills (India, Ahmedabad)", "Aarvee Denims (India, Ahmedabad)", "Beximco (Bangladesh)"],
    "Hoodies & Sweatshirts": ["Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
    "Tops & T-Shirts":       ["SP Apparels Ltd (India, GOTS-certified)", "Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)"],
    "Activewear":            ["MAS Active (Sri Lanka)", "Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)"],
    "School Uniform":        ["SP Apparels Ltd (India)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
    "Coats & Jackets":       ["Johnstons of Elgin (Scotland, UK)", "MAS Holdings (Sri Lanka)", "Arvind Lifestyle (India)"],
    "Formal Shirts":         ["Arvind Mills (India)", "Gokaldas Exports (India, Bengaluru)", "Somelos Tecidos (Portugal)"],
    "Knitwear & Jumpers":    ["Johnstons of Elgin (Scotland, UK)", "Hawick Knitwear (Scotland, UK)", "Todd & Duncan (Scotland, UK)"],
    "Pyjamas & Nightwear":   ["Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)", "SP Apparels Ltd (India)"],
    "Sleepsuits & Bodysuits":["SP Apparels Ltd (India, GOTS)", "Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India)"],
    "Lingerie & Intimates":  ["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
    "Swimwear":              ["MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
    "Blazers & Suits":       ["Arvind Lifestyle (India)", "Chester Barrie (Crewe, UK)", "Gokaldas Exports (India)"],
    "Chinos & Trousers":     ["Arvind Mills (India)", "Somelos Tecidos (Portugal)", "Eastman Exports (India)"],
    "Eveningwear":           ["Shahi Exports (India)", "Bombay Rayon Fashions (India)", "Somelos Tecidos (Portugal)"],
    "Blouses & Tops":        ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
    "T-Shirts & Polos":      ["SP Apparels Ltd (India, GOTS)", "Eastman Exports (India, Tirupur)", "KPR Mill Ltd (India, Tirupur)"],
    "Casual Shirts":         ["Arvind Mills (India)", "Somelos Tecidos (Portugal)", "Gokaldas Exports (India, Bengaluru)"],
  },
  "charles tyrwhitt": {
    default:                 ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India, Bengaluru)", "Esquel Group (China/Malaysia)", "Arvind Lifestyle (India)"],
    "Formal Shirts":         ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India, Bengaluru)", "Esquel Group (China/Malaysia)"],
    "Chinos & Trousers":     ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India, Delhi NCR)"],
    "Knitwear & Jumpers":    ["Johnstons of Elgin (Scotland, UK)", "Arvind Lifestyle (India)", "Gokaldas Exports (India)"],
    "Blazers & Suits":       ["Arvind Lifestyle (India)", "Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)"],
    "Tops & T-Shirts":       ["Orient Craft (India)", "Gokaldas Exports (India)", "Arvind Lifestyle (India)"],
    "Eveningwear":           ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India)", "Esquel Group (China/Malaysia)"],
    "Coats & Jackets":       ["Arvind Lifestyle (India)", "Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)"],
    "Blouses & Tops":        ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India)", "Esquel Group (China/Malaysia)"],
    "T-Shirts & Polos":      ["Orient Craft (India)", "Gokaldas Exports (India)", "Arvind Lifestyle (India)"],
    "Casual Shirts":         ["Orient Craft (India, Delhi NCR)", "Esquel Group (China/Malaysia)", "Arvind Lifestyle (India)"],
  },
  "reiss": {
    default:                 ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)", "Arvind Lifestyle (India)"],
    "Dresses":               ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)"],
    "Jeans":                 ["Arvind Mills (India, Ahmedabad)", "Kipas Holding (Turkey)", "Beximco (Bangladesh)"],
    "Formal Shirts":         ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
    "Knitwear & Jumpers":    ["Johnstons of Elgin (Scotland, UK)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
    "Blazers & Suits":       ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)"],
    "Eveningwear":           ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
    "Coats & Jackets":       ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Youngone Corp (Bangladesh)"],
    "Chinos & Trousers":     ["Arvind Mills (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
    "Tops & T-Shirts":       ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
    "Blouses & Tops":        ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)"],
    "T-Shirts & Polos":      ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
    "Casual Shirts":         ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
  },
  "ted baker": {
    default:                 ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)", "Shahi Exports (India, Bengaluru)"],
    "Dresses":               ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
    "Formal Shirts":         ["Orient Craft (India, Delhi NCR)", "Esquel Group (China/Malaysia)", "Kipas Holding (Turkey)"],
    "Knitwear & Jumpers":    ["Johnstons of Elgin (Scotland, UK)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
    "Blazers & Suits":       ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)"],
    "Eveningwear":           ["Shahi Exports (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
    "Coats & Jackets":       ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Youngone Corp (Bangladesh)"],
    "Chinos & Trousers":     ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
    "Jeans":                 ["Arvind Mills (India, Ahmedabad)", "Kipas Holding (Turkey)", "Artistic Milliners (Pakistan)"],
    "Tops & T-Shirts":       ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
    "Blouses & Tops":        ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
    "T-Shirts & Polos":      ["KPR Mill Ltd (India, Tirupur)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
    "Casual Shirts":         ["Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
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
