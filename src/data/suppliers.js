// ============================================================
// SUPPLIER DIRECTORY — Fabric Mills & Garment Manufacturers
// Placeholder/sample data for the monetisable Supplier Directory.
// Tiers: 'featured' (paid top placement) > 'verified' (vetted) > 'standard' (free listing)
// ============================================================

export const SUPPLIER_TIERS = {
  featured: {
    label: 'Featured Partner',
    icon: '⭐',
    color: '#c8a96e',
    bg: 'rgba(200,169,110,0.12)',
    border: 'rgba(200,169,110,0.4)',
  },
  verified: {
    label: 'Verified Supplier',
    icon: '✅',
    color: '#4db87a',
    bg: 'rgba(77,184,122,0.1)',
    border: 'rgba(77,184,122,0.3)',
  },
  standard: {
    label: 'Listed Supplier',
    icon: '📋',
    color: 'var(--text-muted)',
    bg: 'rgba(255,255,255,0.03)',
    border: 'var(--glass-border)',
  },
};

// ── Fabric Mills ─────────────────────────────────────────────────────────────
export const fabricSuppliers = [
  {
    id: 'mill-vraj-cotton',
    type: 'mill',
    tier: 'featured',
    name: 'Vraj Cotton Mills',
    location: 'Surat, Gujarat',
    logo: '🧵',
    specialties: ['Cotton Shirting', 'Poplin & Twill', 'Bottomweights'],
    matchBadges: ['badge-woven'],
    matchFiberTags: ['cotton', 'poplin', 'twill', 'chambray', 'denim', 'canvas', 'drill'],
    moq: '500 m / colour',
    leadTime: '15–18 days',
    certifications: ['OEKO-TEX Std 100', 'GOTS'],
    yearsInBusiness: 22,
    rating: 4.8,
    description: 'Vertically integrated cotton weaving unit supplying shirting, bottomweight and workwear fabrics to brands across Europe & the Middle East.',
  },
  {
    id: 'mill-tirupur-knit',
    type: 'mill',
    tier: 'verified',
    name: 'Tirupur Knit Works',
    location: 'Tirupur, Tamil Nadu',
    logo: '🧶',
    specialties: ['Jersey & Interlock', 'Rib Knits', 'Activewear Fabrics'],
    matchBadges: ['badge-knitted'],
    matchFiberTags: ['jersey', 'interlock', 'rib', 'knit', 'spandex', 'lycra', 'elastane', 'pique'],
    moq: '300 kg / colour',
    leadTime: '12–15 days',
    certifications: ['GRS', 'OEKO-TEX Std 100'],
    yearsInBusiness: 15,
    rating: 4.6,
    description: 'Circular knitting specialists producing single & double jersey, rib and performance knits for activewear and casualwear brands.',
  },
  {
    id: 'mill-ecofiber-collective',
    type: 'mill',
    tier: 'featured',
    name: 'EcoFiber Collective',
    location: 'Coimbatore, Tamil Nadu',
    logo: '🌿',
    specialties: ['Organic Cotton', 'Recycled Polyester', 'Tencel & Hemp'],
    matchBadges: ['badge-sustainable'],
    matchFiberTags: ['organic', 'recycled', 'tencel', 'lyocell', 'hemp', 'bamboo', 'rpet', 'jute', 'banana'],
    moq: '1,000 m / colour',
    leadTime: '20–25 days',
    certifications: ['GOTS', 'GRS', 'Fair Trade'],
    yearsInBusiness: 9,
    rating: 4.9,
    description: 'Closed-loop sustainable fibre house specialising in certified organic, recycled and regenerative fabric production for eco-conscious brands.',
  },
  {
    id: 'mill-bhilwara-wool',
    type: 'mill',
    tier: 'verified',
    name: 'Bhilwara Wool & Worsted',
    location: 'Bhilwara, Rajasthan',
    logo: '🐑',
    specialties: ['Wool & Wool Blends', 'Suiting', 'Tweed & Melton'],
    matchBadges: ['badge-woven'],
    matchFiberTags: ['wool', 'tweed', 'melton', 'gabardine', 'suiting', 'cavalry', 'herringbone'],
    moq: '300 m / colour',
    leadTime: '18–22 days',
    certifications: ['Woolmark', 'OEKO-TEX Std 100'],
    yearsInBusiness: 30,
    rating: 4.5,
    description: 'India\'s leading worsted wool weaving mill, producing suiting, coating and tweed fabrics for premium menswear and outerwear brands.',
  },
  {
    id: 'mill-bareilly-silk',
    type: 'mill',
    tier: 'standard',
    name: 'Bareilly Silk & Sheers',
    location: 'Varanasi, Uttar Pradesh',
    logo: '🪡',
    specialties: ['Silk', 'Chiffon & Georgette', 'Organza & Voile'],
    matchBadges: ['badge-woven'],
    matchFiberTags: ['silk', 'chiffon', 'georgette', 'organza', 'voile', 'satin', 'crepe', 'charmeuse', 'dupioni'],
    moq: '200 m / colour',
    leadTime: '25–30 days',
    certifications: ['Silk Mark'],
    yearsInBusiness: 12,
    rating: 4.3,
    description: 'Traditional silk weaving cluster producing fine sheers, georgettes and silk blends for evening wear and bridal fashion houses.',
  },
];

// ── Garment Manufacturers ───────────────────────────────────────────────────
export const garmentSuppliers = [
  {
    id: 'vendor-bangalore-apparel',
    type: 'garment',
    tier: 'featured',
    name: 'Bangalore Apparel Studio',
    location: 'Bangalore, Karnataka',
    logo: '👗',
    specialties: ['Dresses & Blouses', 'Lingerie & Nightwear', 'Small-Batch Production'],
    specialtyCategories: ['Womenswear', 'Nightwear & Lingerie'],
    specialtyKeywords: ['dress', 'blouse', 'top', 'lingerie', 'nightwear', 'camisole', 'robe'],
    moq: '300 pcs / style',
    leadTime: '25–30 days',
    certifications: ['SEDEX', 'BSCI'],
    yearsInBusiness: 14,
    rating: 4.8,
    description: 'Full-package CMT unit specialising in womenswear and intimate apparel with strong sampling and small-batch capability.',
  },
  {
    id: 'vendor-ludhiana-knitwear',
    type: 'garment',
    tier: 'featured',
    name: 'Ludhiana Knitwear Exports',
    location: 'Ludhiana, Punjab',
    logo: '🏃',
    specialties: ['T-Shirts & Polos', 'Sweatshirts', 'Activewear'],
    specialtyCategories: ['Menswear', 'Kids (Boys & Girls)'],
    specialtyKeywords: ['t-shirt', 'sweatshirt', 'activewear', 'knitwear', 'polo', 'hoodie', 'tracksuit'],
    moq: '500 pcs / style',
    leadTime: '20–25 days',
    certifications: ['WRAP', 'OEKO-TEX Std 100'],
    yearsInBusiness: 18,
    rating: 4.7,
    description: 'Large-scale knitwear export house producing T-shirts, fleece and activewear for global sportswear and casualwear brands.',
  },
  {
    id: 'vendor-ncr-denim',
    type: 'garment',
    tier: 'verified',
    name: 'NCR Denim Manufacturing Co.',
    location: 'Faridabad, NCR',
    logo: '👖',
    specialties: ['Denim Jeans & Jackets', 'Washes & Distressing', 'Casualwear'],
    specialtyCategories: ['Menswear', 'Womenswear'],
    specialtyKeywords: ['denim', 'jeans', 'jacket', 'casualwear', 'twill', 'cargo'],
    moq: '1,000 pcs / style',
    leadTime: '30–35 days',
    certifications: ['SEDEX', 'GOTS'],
    yearsInBusiness: 20,
    rating: 4.6,
    description: 'End-to-end denim manufacturing with in-house laundry, washes and finishing for jeans, jackets and denim casualwear.',
  },
  {
    id: 'vendor-tirupur-babywear',
    type: 'garment',
    tier: 'standard',
    name: 'Tirupur Babywear Co.',
    location: 'Tirupur, Tamil Nadu',
    logo: '👶',
    specialties: ['Infant Rompers & Onesies', 'Kidswear', 'Organic Babywear'],
    specialtyCategories: ['Baby', 'Kids (Boys & Girls)'],
    specialtyKeywords: ['baby', 'infant', 'romper', 'onesie', 'kidswear', 'bodysuit'],
    moq: '1,000 pcs / style',
    leadTime: '18–20 days',
    certifications: ['OEKO-TEX Std 100', 'GOTS'],
    yearsInBusiness: 10,
    rating: 4.4,
    description: 'Specialist babywear and kidswear manufacturer with GOTS-certified organic cotton sourcing and softline finishing.',
  },
];

const TIER_RANK = { featured: 0, verified: 1, standard: 2 };

// ── Match fabric mills to a given fabric ────────────────────────────────────
export function getMatchingMills(fabric, { limit = 3 } = {}) {
  if (!fabric) return fabricSuppliers.slice(0, limit);

  const fiberText = [
    Array.isArray(fabric.commonFibers) ? fabric.commonFibers.join(' ') : '',
    fabric.name,
    fabric.category,
    fabric.keyProperty,
    Array.isArray(fabric.finish) ? fabric.finish.join(' ') : '',
  ].join(' ').toLowerCase();

  const scored = fabricSuppliers.map(mill => {
    let score = 0;
    if (mill.matchBadges?.includes(fabric.badge)) score += 3;
    mill.matchFiberTags?.forEach(tag => {
      if (fiberText.includes(tag.toLowerCase())) score += 2;
    });
    return { mill, score };
  });

  return scored
    .sort((a, b) => (b.score - a.score) || (TIER_RANK[a.mill.tier] - TIER_RANK[b.mill.tier]) || (b.mill.rating - a.mill.rating))
    .slice(0, limit)
    .map(s => s.mill);
}

// ── Match garment manufacturers to a garment / category ─────────────────────
export function getMatchingGarmentVendors(garment, activeCategory, { limit = 3 } = {}) {
  const text = `${garment?.name || ''} ${(garment?.searchTerms || []).join(' ')}`.toLowerCase();

  const scored = garmentSuppliers.map(vendor => {
    let score = 0;
    if (activeCategory && vendor.specialtyCategories?.includes(activeCategory)) score += 3;
    vendor.specialtyKeywords?.forEach(k => {
      if (text.includes(k.toLowerCase())) score += 2;
    });
    return { vendor, score };
  });

  return scored
    .sort((a, b) => (b.score - a.score) || (TIER_RANK[a.vendor.tier] - TIER_RANK[b.vendor.tier]) || (b.vendor.rating - a.vendor.rating))
    .slice(0, limit)
    .map(s => s.vendor);
}
