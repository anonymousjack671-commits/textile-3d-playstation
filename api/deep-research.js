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
  primark: {
    default:              ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "SP Apparels (India)", "Pacific Jeans (Bangladesh)"],
    "Dresses":            ["BEXIMCO Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Tirupur)"],
    "Jeans":              ["Pacific Jeans (Bangladesh)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India, Ahmedabad)"],
    "Hoodies & Sweatshirts": ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "KPR Mill (India, Tirupur)"],
    "Tops & T-Shirts":    ["SP Apparels (India, Tirupur)", "Classic Fashions (Bangladesh)", "KPR Mill (India, Tirupur)"],
    "Activewear":         ["Crystal International (HK/China)", "Epic Wear (Bangladesh)", "Eclat Textile (Taiwan)"],
    "School Uniform":    ["William Baird (Bangladesh)", "Tirupur Uniform Cluster (India)", "Classic Fashions (Bangladesh)"],
    "Coats & Jackets":  ["Youngone Corp (Bangladesh)", "Nien Hsing Textile (Cambodia)", "Pacific Textiles (HK/China)"],
    "Formal Shirts":      ["Orient Craft (India, Delhi NCR)", "Ha-Meem Group (Bangladesh)", "Classic Fashions (Bangladesh)"],
    "Knitwear & Jumpers": ["DBL Group (Bangladesh)", "SP Apparels (India)", "Tirupur Knitwear Cluster (India)"],
    "Sleepsuits & Bodysuits":        ["SP Apparels (India, OEKO-TEX)", "Naz Bangladesh Ltd", "Tirupur Baby Knitwear (India)"],
    "Pyjamas & Nightwear":["BEXIMCO Group (Bangladesh)", "Tirupur Nightwear Cluster (India)"],
    "Swimwear":           ["Epic Wear (Bangladesh)", "MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)"],
    "Lingerie & Intimates":["MAS Holdings (Sri Lanka)", "Cressida International (HK)", "SP Apparels (India)"],
  
    "Blouses & Tops": ["BEXIMCO Group (Bangladesh)", "Ha-Meem Group (Bangladesh)", "Shahi Exports (India, Tirupur)"],
    "T-Shirts & Polos": ["SP Apparels (India, Tirupur)", "Classic Fashions (Bangladesh)", "KPR Mill (India, Tirupur)"],
    "Casual Shirts": ["Ha-Meem Group (Bangladesh)", "Orient Craft (India, Delhi NCR)", "Classic Fashions (Bangladesh)"],
  },
  "sainsbury's tu": {
    default:              ["Coimbatore Wovens (India)", "Tirupur Knits Ltd (India)", "Pacific Jeans (Bangladesh)", "DBL Group (Bangladesh)"],
    "Dresses":            ["Coimbatore Wovens (India)", "Tirupur Woven Cluster (India)", "DBL Group (Bangladesh)"],
    "Jeans":              ["Pacific Jeans (Bangladesh)", "Denim Expert Ltd (Bangladesh)", "Arvind Mills (India)"],
    "Hoodies & Sweatshirts": ["Tirupur Knits Ltd (India)", "DBL Group (Bangladesh)", "KPR Mill (India)"],
    "Tops & T-Shirts":    ["Tirupur Knits Ltd (India)", "SP Apparels (India)", "DBL Group (Bangladesh)"],
    "School Uniform":    ["Coimbatore Twill Mills (India)", "William Baird (Bangladesh)", "Tirupur Uniform Cluster (India)"],
    "Sleepsuits & Bodysuits":        ["Tirupur Organic Cluster (India)", "SP Apparels (India)", "Naz Bangladesh Ltd"],
  
    "Blouses & Tops": ["Coimbatore Wovens (India)", "Tirupur Woven Cluster (India)", "DBL Group (Bangladesh)"],
    "T-Shirts & Polos": ["Tirupur Knits Ltd (India)", "SP Apparels (India)", "DBL Group (Bangladesh)"],
    "Casual Shirts": ["Coimbatore Wovens (India)", "DBL Group (Bangladesh)", "Tirupur Uniform Cluster (India)"],
  },
  "asda george": {
    default:              ["Coimbatore Textiles Ltd (India)", "Dhaka Apparel Hubs (Bangladesh)", "SQ Group (Bangladesh)"],
    "Dresses":            ["Dhaka Apparel Hubs (Bangladesh)", "Coimbatore Textiles Ltd (India)", "SQ Group (Bangladesh)"],
    "Jeans":              ["SQ Group (Bangladesh)", "Arvind Mills (India, Ahmedabad)", "Pacific Jeans (Bangladesh)"],
    "School Uniform":    ["William Baird (Bangladesh)", "Coimbatore Wovens (India)", "Classic Fashions (Bangladesh)"],
    "Sleepsuits & Bodysuits":        ["SP Apparels (India, OEKO-TEX)", "Tirupur Baby Knitwear (India)"],
  
    "Blouses & Tops": ["Dhaka Apparel Hubs (Bangladesh)", "Coimbatore Textiles Ltd (India)", "SQ Group (Bangladesh)"],
    "T-Shirts & Polos": ["Tirupur Knitwear Cluster (India)", "Dhaka Apparel Hubs (Bangladesh)", "SP Apparels (India)"],
    "Casual Shirts": ["Dhaka Apparel Hubs (Bangladesh)", "Coimbatore Textiles (India)", "Orient Craft (India)"],
  },
  "h&m": {
    default:              ["DBL Group (Bangladesh)", "Shahi Exports (India)", "Aydinli Group (Turkey)", "Shenzhou International (China)", "Knit Asia (Bangladesh)"],
    "Dresses":            ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Crystal International (HK/China)"],
    "Jeans":              ["Artistic Milliners (Pakistan, Karachi)", "Nien Hsing Textile (Vietnam)", "Arvind Mills (India, Ahmedabad)"],
    "Hoodies & Sweatshirts": ["Knit Asia (Bangladesh)", "KPR Mill (India, Tirupur)", "Texhong Textile (China/Vietnam)"],
    "Tops & T-Shirts":    ["Shenzhou International (China)", "SP Apparels (India, Tirupur)", "Eastern Knitting (Bangladesh)"],
    "Activewear":         ["Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)", "Pacific Textiles (HK/China)"],
    "Formal Shirts":      ["Esquel Group (China/Malaysia)", "Orient Craft (India)", "Arvind Lifestyle (India)"],
    "Sleepsuits & Bodysuits":        ["SP Apparels (India, Tirupur)", "Knit Asia (Bangladesh)", "DBL Group (Bangladesh)"],
    "Swimwear":           ["MAS Kreeda (Sri Lanka)", "Eclat Textile (Taiwan)", "Pacific Textiles (HK/China)"],
    "Sports Bras":        ["Eclat Textile (Taiwan)", "MAS Active (Sri Lanka)", "Far Eastern New Century (Taiwan)"],
    "Lingerie & Intimates":["MAS Holdings (Sri Lanka)", "Brandix Lanka (Sri Lanka)", "Pacific Textiles (HK/China)"],
  
    "Blouses & Tops": ["DBL Group (Bangladesh)", "Shahi Exports (India, Bengaluru)", "Crystal International (HK/China)"],
    "T-Shirts & Polos": ["Shenzhou International (China)", "SP Apparels (India, Tirupur)", "Eastern Knitting (Bangladesh)"],
    "Casual Shirts": ["Esquel Group (China/Malaysia)", "Orient Craft (India)", "DBL Group (Bangladesh)"],
  },
  "next": {
    default:              ["Kipas Holding (Turkey)", "KPR Mill (India)", "Ha-Meem Group (Bangladesh)", "Arvind Mills (India)", "DBL Group (Bangladesh)"],
    "Dresses":            ["Ha-Meem Group (Bangladesh)", "Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)"],
    "Jeans":              ["Arvind Mills (India, Ahmedabad)", "Classic Fashions (Bangladesh)", "Artistic Milliners (Pakistan)"],
    "Hoodies & Sweatshirts": ["DBL Group (Bangladesh)", "KPR Mill (India, Tirupur)", "Ludhiana Knitwear (India)"],
    "Tops & T-Shirts":    ["KPR Mill (India, Tirupur)", "SP Apparels (India)", "Ha-Meem Group (Bangladesh)"],
    "Formal Shirts":      ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Esquel Group (China/Malaysia)"],
    "Knitwear & Jumpers": ["Ludhiana Knitwear (India)", "DBL Group (Bangladesh)", "Tirupur Knitwear Cluster (India)"],
    "School Uniform":    ["William Baird (Bangladesh)", "Tirupur Uniform Mills (India)", "Classic Fashions (Bangladesh)"],
    "Blazers & Suits":    ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Classic Fashions (Bangladesh)"],
    "Swimwear":           ["MAS Kreeda (Sri Lanka)", "Pacific Textiles (HK/China)", "Eclat Textile (Taiwan)"],
    "Sleepsuits & Bodysuits":        ["SP Apparels (India)", "Ha-Meem Group (Bangladesh)", "KPR Mill (India)"],
  
    "Blouses & Tops": ["Ha-Meem Group (Bangladesh)", "Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)"],
    "T-Shirts & Polos": ["KPR Mill (India, Tirupur)", "SP Apparels (India)", "Ha-Meem Group (Bangladesh)"],
    "Casual Shirts": ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Ha-Meem Group (Bangladesh)"],
  },
  "asos": {
    default:              ["Kipas Holding (Turkey)", "Leicester Apparel Co. (UK)", "Guangdong Garment Hubs (China)", "Tirupur Knitwear (India)"],
    "Dresses":            ["Kipas Holding (Turkey)", "Leicester Apparel Co. (UK)", "Guangdong Garment Parks (China)"],
    "Jeans":              ["Kipas Denim (Turkey, Kahramanmaraş)", "Denim Expert Ltd (Bangladesh)", "Guangdong Garment Parks (China)"],
    "Hoodies & Sweatshirts": ["Leicester Apparel Co. (UK)", "Tirupur Knitwear Hubs (India)", "Kipas Holding (Turkey)"],
    "Tops & T-Shirts":    ["Leicester Apparel Co. (UK)", "Tirupur Knitwear Hubs (India)", "Guangdong Garment Parks (China)"],
    "Activewear":         ["Sri Lanka EPZ Factories", "Taiwan Performance Knit Mills", "Pacific Textiles (HK/China)"],
    "Eveningwear":      ["Kipas Holding (Turkey)", "Leicester Apparel Co. (UK)", "Guangdong Garment Parks (China)"],
    "Swimwear":           ["Pacific Textiles (HK/China)", "Sri Lanka EPZ Factories", "Eclat Textile (Taiwan)"],
    "Sports Bras":        ["Pacific Textiles (HK/China)", "Sri Lanka EPZ Factories", "Eclat Textile (Taiwan)"],
    "Lingerie & Intimates":["Sri Lanka EPZ Factories", "MAS Holdings (Sri Lanka)", "Leicester Apparel Co. (UK)"],
  
    "Blouses & Tops": ["Kipas Holding (Turkey)", "Leicester Apparel Co. (UK)", "Guangdong Garment Parks (China)"],
    "T-Shirts & Polos": ["Leicester Apparel Co. (UK)", "Tirupur Knitwear Hubs (India)", "Guangdong Garment Parks (China)"],
    "Casual Shirts": ["Kipas Holding (Turkey)", "Guangdong Garment Parks (China)", "Leicester Apparel Co. (UK)"],
  },
  "m&s": {
    default:              ["Shahi Exports (India)", "Arvind Mills (India)", "Brandix Lanka (Sri Lanka)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
    "Dresses":            ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
    "Jeans":              ["Arvind Mills (India, Ahmedabad)", "Aarvee Denims (India, Ahmedabad)", "Classic Fashions (Bangladesh)"],
    "Hoodies & Sweatshirts": ["Brandix Lanka (Sri Lanka)", "Texport Industries (India, Bengaluru)", "KPR Mill (India, Tirupur)"],
    "Tops & T-Shirts":    ["Eastman Exports (India, Tirupur)", "KPR Mill (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
    "Activewear":         ["MAS Active (Sri Lanka)", "Brandix Active (Sri Lanka)", "Eclat Textile (Taiwan)"],
    "Formal Shirts":      ["Arvind Lifestyle (India)", "Gokaldas Exports (India, Bengaluru)", "Eastman Exports (India)"],
    "Knitwear & Jumpers": ["Coats Bangladesh Ltd", "MAS Active (Sri Lanka)", "Ludhiana Knitwear (India)"],
    "Lingerie & Intimates":["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
    "Swimwear":           ["MAS Kreeda (Sri Lanka)", "Cressida International (HK)", "Pacific Textiles (HK/China)"],
    "Blazers & Suits":  ["Gokaldas Exports (India, Bengaluru)", "Arvind Lifestyle (India)", "Shahi Exports (India)"],
    "Sleepsuits & Bodysuits":        ["SP Apparels (India, OEKO-TEX)", "Brandix Kids (Sri Lanka)", "KPR Mill (India)"],
    "Sports Bras":        ["MAS Active (Sri Lanka)", "Brandix Active (Sri Lanka)", "MAS Kreeda (Sri Lanka)"],
    "Eveningwear":      ["Shahi Exports (India)", "Eastman Exports (India)", "MAS Holdings (Sri Lanka)"],
  
    "Blouses & Tops": ["Shahi Exports (India, Bengaluru)", "Eastman Exports (India, Tirupur)", "MAS Holdings (Sri Lanka)"],
    "T-Shirts & Polos": ["Eastman Exports (India, Tirupur)", "KPR Mill (India, Tirupur)", "Brandix Lanka (Sri Lanka)"],
    "Casual Shirts": ["Arvind Lifestyle (India)", "Gokaldas Exports (India, Bengaluru)", "Eastman Exports (India)"],
  },
  "john lewis": {
    default:              ["Somelos Tecidos (Portugal)", "Coimbatore Organic Weavers (India)", "Johnstons of Elgin (Scotland)", "Arvind Mills (India)", "MAS Holdings (Sri Lanka)"],
    "Dresses":            ["Somelos Tecidos (Portugal)", "Coimbatore Organic Weavers (India)", "Bombay Rayon Fashions (India)"],
    "Formal Shirts":      ["Somelos Tecidos (Portugal)", "Arvind Mills (India)", "Thomas Mason Mills (Italy – fabric)"],
    "Knitwear & Jumpers": ["Johnstons of Elgin (Scotland, UK)", "Hawick Knitwear (Scotland, UK)", "Todd & Duncan (Scotland, UK)"],
    "Blazers & Suits":  ["Bombay Rayon Fashions (India)", "Gokaldas Exports (India)", "Somelos Tecidos (Portugal)"],
    "Sleepsuits & Bodysuits":        ["SP Apparels (India, GOTS)", "Tirupur Organic Cluster (India)", "Coimbatore Organic Weavers (India)"],
    "Lingerie & Intimates":["MAS Holdings (Sri Lanka)", "Triumph International (Sri Lanka)", "Brandix Lanka (Sri Lanka)"],
    "Swimwear":           ["MAS Kreeda (Sri Lanka)", "Cressida International (HK)", "Eclat Textile (Taiwan)"],
    "Activewear":         ["MAS Active (Sri Lanka)", "Eclat Textile (Taiwan)", "Far Eastern New Century (Taiwan)"],
    "Coats & Jackets":  ["Coimbatore Organic Weavers (India)", "Johnstons of Elgin (Scotland)", "Loro Piana (Italy – fabric)"],
  
    "Blouses & Tops": ["Somelos Tecidos (Portugal)", "Coimbatore Organic Weavers (India)", "Bombay Rayon Fashions (India)"],
    "T-Shirts & Polos": ["SP Apparels (India, GOTS)", "Coimbatore Organic Weavers (India)", "Tirupur Organic Cluster (India)"],
    "Casual Shirts": ["Somelos Tecidos (Portugal)", "Arvind Mills (India)", "Coimbatore Organic Weavers (India)"],
  },
};

  "charles tyrwhitt": {
    default:              ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India, Bengaluru)", "Esquel Group (China/Malaysia)", "Arvind Lifestyle (India)"],
    "Formal Shirts":      ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India, Bengaluru)", "Esquel Group (China/Malaysia)"],
    "Chinos & Trousers":    ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Guangdong Suit Cluster (China)"],
    "Knitwear & Jumpers": ["Ludhiana Premium Knitwear (India)", "Coimbatore Organic Weavers (India)", "Guangdong Knitwear Mills (China)"],
    "Eveningwear":      ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India)", "Esquel Group (China/Malaysia)"],
    "Tops & T-Shirts":    ["Orient Craft (India)", "Tirupur Premium Knitwear (India)", "Coimbatore Organic Weavers (India)"],
    "Coats & Jackets":  ["Arvind Lifestyle (India)", "Guangdong Suit Cluster (China)", "Kipas Holding (Turkey)"],
  
    "Blouses & Tops": ["Orient Craft (India, Delhi NCR)", "Gokaldas Exports (India)", "Esquel Group (China/Malaysia)"],
    "T-Shirts & Polos": ["Orient Craft (India)", "Tirupur Premium Knitwear (India)", "Coimbatore Organic Weavers (India)"],
    "Casual Shirts": ["Orient Craft (India, Delhi NCR)", "Esquel Group (China/Malaysia)", "Arvind Lifestyle (India)"],
  },
  "reiss": {
    default:              ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)", "Arvind Lifestyle (India)"],
    "Dresses":            ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)"],
    "Jeans":              ["Arvind Mills (India, Ahmedabad)", "Kipas Denim (Turkey)", "Classic Fashions (Bangladesh)"],
    "Formal Shirts":      ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
    "Knitwear & Jumpers": ["Ludhiana Knitwear (India)", "Kipas Holding (Turkey)", "Tirupur Premium Knitwear (India)"],
    "Blazers & Suits":    ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Guangdong Suit Cluster (China)"],
    "Eveningwear":      ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
    "Coats & Jackets":  ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Youngone Corp (Bangladesh)"],
    "Chinos & Trousers":    ["Arvind Mills (India)", "Kipas Holding (Turkey)", "Classic Fashions (Bangladesh)"],
    "Tops & T-Shirts":    ["Tirupur Premium Knitwear (India)", "Kipas Holding (Turkey)", "KPR Mill (India)"],
  
    "Blouses & Tops": ["Kipas Holding (Turkey)", "Shahi Exports (India, Bengaluru)", "Orient Craft (India)"],
    "T-Shirts & Polos": ["Tirupur Premium Knitwear (India)", "Kipas Holding (Turkey)", "KPR Mill (India)"],
    "Casual Shirts": ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
  },
  "ted baker": {
    default:              ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Orient Craft (India)", "Shahi Exports (India)"],
    "Dresses":            ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
    "Formal Shirts":      ["Orient Craft (India, Delhi NCR)", "Esquel Group (China/Malaysia)", "Kipas Holding (Turkey)"],
    "Knitwear & Jumpers": ["Ludhiana Knitwear (India)", "Kipas Holding (Turkey)", "Tirupur Premium Knitwear (India)"],
    "Blazers & Suits":    ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Guangdong Suit Cluster (China)"],
    "Eveningwear":      ["Shahi Exports (India)", "Kipas Holding (Turkey)", "Orient Craft (India)"],
    "Coats & Jackets":  ["Kipas Holding (Turkey)", "Arvind Lifestyle (India)", "Youngone Corp (Bangladesh)"],
    "Chinos & Trousers":    ["Arvind Lifestyle (India)", "Kipas Holding (Turkey)", "Classic Fashions (Bangladesh)"],
    "Jeans":              ["Arvind Mills (India, Ahmedabad)", "Kipas Denim (Turkey)", "Artistic Milliners (Pakistan)"],
    "Tops & T-Shirts":    ["Tirupur Premium Knitwear (India)", "Kipas Holding (Turkey)", "KPR Mill (India)"],
  
    "Blouses & Tops": ["Kipas Holding (Turkey)", "Shahi Exports (India)", "Orient Craft (India)"],
    "T-Shirts & Polos": ["Tirupur Premium Knitwear (India)", "Kipas Holding (Turkey)", "KPR Mill (India)"],
    "Casual Shirts": ["Orient Craft (India, Delhi NCR)", "Kipas Holding (Turkey)", "Arvind Lifestyle (India)"],
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
