// Offline deep-dive intelligence database & generator for UK retail brands
// Enables fully functional "Deep Dive" drawer when the local TEXAI server is offline.

const BRAND_PROFILES = {
  primark: {
    overviewStance: "Primark leverages massive economies of scale to keep retail prices low. Sourcing focuses on high-efficiency conventional or BCI cotton and virgin polyester, with a recent transition plan to recycled synthetics.",
    sustainability: "Aligned with the Primark Cares program: committing to 100% sustainable cotton (BCI/recycled) and recycled polyester across all clothing by 2030. Currently conventional-heavy with basic BCI coverage.",
    sourcingInsight: "Sourcing is highly consolidated in low-cost hubs, utilizing long-term volume contracts in Bangladesh (Dhaka) and India (Tirupur) to maintain price margins.",
    upgradeAdvice: "To outperform Primark, avoid low-grade carded cotton or virgin polyester. Sourcing GOTS-certified organic cotton or GRS-certified recycled polyester with a certified OEKO-TEX 100 finish provides a distinct quality and safety premium.",
    vendors: ["Viyellatex Group (Bangladesh)", "DBL Group (Bangladesh)", "Tirupur Knitwear Hubs"],
    coo: "Bangladesh, India, China, Cambodia"
  },
  asda: {
    overviewStance: "Asda George focuses on high-volume supermarket retail. Clothing lines rely heavily on durable polyester-cotton blends and BCI cotton, using standard performance finishes to pass quality controls.",
    sustainability: "Asda's ESG goals focus on increasing recycled polyester (rPET) content and sourcing sustainable cotton. OEKO-TEX Standard 100 is mandatory for all children's lines.",
    sourcingInsight: "Procures mainly through large buying houses with vertical factory partnerships in Bangladesh and India (Coimbatore/Tirupur) to keep prices competitive.",
    upgradeAdvice: "TU/George can be beaten on sustainability and hand-feel. Sourcing 65% rPET / 35% Organic Cotton or using TENCEL blends instead of pure poly-cotton delivers a premium touch and stronger eco-credentials.",
    vendors: ["Coimbatore Textiles Ltd", "Dhaka Apparel Hubs", "SQ Group"],
    coo: "Bangladesh, India, Sri Lanka"
  },
  sainsburys: {
    overviewStance: "Sainsbury's TU position is built on volume family clothing. Sourcing emphasizes BCI cotton, recycled polyester (REPREVE), and poly-cotton blends, applying stain-resistant finishes to school uniform and kids lines.",
    sustainability: "Sainsbury's is committed to 100% sustainably sourced cotton (BCI/Organic) and transitioning to recycled polyester. GRS certifications are required for recycled content claims.",
    sourcingInsight: "Leverages vertical relationships in Coimbatore for uniform twills, and Tirupur for knitwear to achieve reliable fabric consistency.",
    upgradeAdvice: "Upgrade to organic cotton and non-fluorinated finishes. Sainsbury's TU relies on standard chemical coatings; using premium eco-finishes like Teflon EcoElite™ or Ruco-Bac MED™ adds strong marketing value.",
    vendors: ["Coimbatore Wovens", "Tirupur Knits Ltd", "Pacific Jeans"],
    coo: "India, Bangladesh, Turkey"
  },
  next: {
    overviewStance: "Next is the UK's leading mid-market fashion retailer. Sourcing emphasizes combed yarn, cotton-rich blends, and standard viscose, targeting solid wash-and-wear performance.",
    sustainability: "Targeting 90%+ responsible fibers (BCI, OCS, GRS, FSC-viscose) by 2025. Actively auditing supply chains for chemical safety (Reach compliant).",
    sourcingInsight: "Utilizes a balanced sourcing matrix: high-volume items in India and Bangladesh, quick-response fashion in Turkey and Eastern Europe.",
    upgradeAdvice: "Differentiate by shifting from standard viscose to LENZING™ ECOVERO™ or TENCEL™ Modal. Next's mid-tier pricing allows room for you to absorb the minor cost delta for far better environmental ratings.",
    vendors: ["Kipas Holding (Turkey)", "Surat Woven Clusters", "Ludhiana Knitwear Ltd"],
    coo: "Turkey, India, China, Bangladesh"
  },
  hm: {
    overviewStance: "H&M is a global leader in fast-fashion. Sourcing balances rapid turnaround with highly visible sustainability initiatives, relying on organic cotton blends, recycled polyester, and FSC-certified viscose.",
    sustainability: "Part of the H&M Conscious program: aiming for 100% recycled or sustainably sourced materials by 2030. Currently a top buyer of GOTS organic cotton and recycled polyester.",
    sourcingInsight: "Maintains a massive supplier network in Bangladesh and China, with quick-response production in Turkey for the European market.",
    upgradeAdvice: "Compete by focusing on local/regional premium sourcing and smaller batch transparency. H&M's massive supply chain often suffers from consistency issues; offering certified trace-to-source fabrics (GOTS/GRS) beats their fast-fashion volume.",
    vendors: ["Dada Group (China)", "Besta Knits (India)", "Aydinli Group (Turkey)"],
    coo: "Bangladesh, China, Turkey, India"
  },
  asos: {
    overviewStance: "ASOS is an online-only fast fashion giant targeting Gen Z. Sourcing focuses on highly fluid, lightweight fabrics (viscose, polyester blends, jersey) with quick lead times.",
    sustainability: "Under pressure to reduce fast-fashion footprint. Increasing use of LENZING™ ECOVERO™ viscose, GRS-certified recycled polyester, and circular design principles.",
    sourcingInsight: "Relies on a highly flexible, short-lead sourcing model with significant volume out of Turkey and China, and quick-turn factories in the UK.",
    upgradeAdvice: "ASOS fabrics are often lightweight to save on shipping costs. Beat them by sourcing heavier, premium GSM options (e.g. 180+ GSM for jersey or 240+ GSM for denim) which feel substantially more luxury and wash-resistant.",
    vendors: ["Kipas Denim (Turkey)", "Guangdong Garment Hubs", "Leicester Apparel Co."],
    coo: "Turkey, China, India, UK"
  },
  ms: {
    overviewStance: "M&S is the benchmark for UK mid-to-premium retail. Sourcing is characterized by strict quality standards, combed BCI/Organic cotton, TENCEL™ Modal, and high wool content in tailoring.",
    sustainability: "Guided by the Plan A sustainability program. OEKO-TEX Standard 100 is a mandatory requirement across all textile lines. Targeting 100% recycled polyester by 2026.",
    sourcingInsight: "Works with premium, vertically-integrated manufacturers in India (Tirupur, Ahmedabad), Bangladesh, and Sri Lanka, demanding strict social and chemical compliance.",
    upgradeAdvice: "To match or beat M&S, focus on GOTS organic cotton and closed-loop TENCEL™ Lyocell. Use high-performance natural blends (like cotton-silk or linen-TENCEL) to capture their premium demographic.",
    vendors: ["Mascot Knits (India)", "Arvind Mills (India)", "Brandix (Sri Lanka)"],
    coo: "India, Bangladesh, Sri Lanka, Turkey"
  },
  johnlewis: {
    overviewStance: "John Lewis is a premium UK department store. Sourcing prioritizes luxury fibers like Egyptian cotton, extra fine merino wool, pure silk, and GOTS-certified organic cotton.",
    sustainability: "Enforces strict animal welfare (RWS, RDS) and GOTS organic cotton standards. Focuses on durability, circularity, and ethical sourcing throughout the supply chain.",
    sourcingInsight: "Procures from high-end vertical mills in Portugal, Turkey, Italy, and premium organic clusters in India (Coimbatore/Tirupur).",
    upgradeAdvice: "John Lewis sets the gold standard for premium retail. Match them by using fully certified GOTS organic cotton, RWS certified wool, or fine Egyptian/Pima cotton, backed by transparent mill-to-shelf traceability.",
    vendors: ["Somelos (Portugal)", "Coimbatore Organic Weavers", "Loro Piana (Italy)"],
    coo: "India, Portugal, Turkey, Italy"
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

  return {
    overview,
    fabrics: [fabric],
    coo: profile.coo,
    knownVendors: profile.vendors,
    sustainabilityStance: profile.sustainability,
    sourcingInsight: profile.sourcingInsight,
    upgradeFor: upgradeFor
  };
};
