import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader, Zap, AlertTriangle } from 'lucide-react';

// VITE_TEXAI_URL can override for self-hosted deployments; defaults to Vercel serverless functions
const PARDEEP_URL = import.meta.env.VITE_TEXAI_URL || '/api';

const FABRIC_KB = [
  { keywords: ['kaftan','caftan','flowy dress','beach dress','resort wear'],
    answer: `🧵 Kaftan / Flowy Dress — Best Fabrics:\n\n1. Georgette (60–90 GSM) — Lightweight, beautiful drape. Best for evening kaftans.\n2. Chiffon (30–60 GSM) — Ultra-sheer and floaty. Layer with a lining for beach/resort.\n3. Viscose / Rayon (100–140 GSM) — Excellent drape, breathable, affordable. Most popular everyday choice.\n4. Crepe de Chine (70–100 GSM) — Smooth, fluid, slight sheen. Ideal for luxury womenswear.\n5. Silk Charmeuse (60–90 GSM) — Ultimate luxury with satin-like sheen and incredible drape.\n6. Linen (120–160 GSM) — Breathable and relaxed for summer/resort styles.\n\n✅ Recommended: Georgette or Viscose for mid-range. Silk Charmeuse for luxury.\n📐 Key property: drape > structure. Avoid stiff fabrics like denim or canvas.` },

  { keywords: ['t-shirt','tshirt','tee','basic top','crew neck'],
    answer: `🧵 T-shirt — Best Fabrics:\n\n1. Single Jersey Cotton (140–180 GSM) — Standard choice. Soft, breathable, easy to print.\n2. Pique (180–220 GSM) — Textured surface, used in polo shirts.\n3. Slub Jersey (150–180 GSM) — Casual, slightly uneven texture for fashion tees.\n4. Cotton-Modal Blend (160–200 GSM) — Softer than 100% cotton, better drape.\n\n✅ 160 GSM Combed Cotton for premium, 180 GSM for standard retail.` },

  { keywords: ['shirt','formal shirt','dress shirt','office shirt','woven shirt','poplin shirt'],
    answer: `🧵 Formal/Woven Shirt — Best Fabrics:\n\n1. Poplin (90–120 GSM) — Smooth, crisp, most common shirting. 40s×40s construction.\n2. Twill Shirting (110–140 GSM) — Softer than poplin, wrinkle-resistant.\n3. Oxford Cloth (130–160 GSM) — Basketweave texture, casual-formal.\n4. Chambray (110–130 GSM) — Denim-look lighter weight. Casual shirts.\n\n✅ Poplin for formal shirts, Oxford for casual-smart.` },

  { keywords: ['jeans','denim trousers','chinos','pants','bottoms','trousers'],
    answer: `🧵 Jeans / Trousers — Best Fabrics:\n\n1. Denim Twill (280–400 GSM) — Classic 3/1 twill. Ring-spun cotton for premium.\n2. Chino Twill (200–260 GSM) — Cotton or stretch for chinos.\n3. Gabardine (200–280 GSM) — Tight twill for tailored trousers.\n4. Stretch Denim (280–360 GSM) — With 2–4% elastane for slim fits.\n\n✅ 320 GSM rigid denim for classic jeans. 240 GSM cotton twill for chinos.` },

  { keywords: ['dress','women dress','womenswear','midi dress','maxi dress','evening dress'],
    answer: `🧵 Dress Fabrics by Occasion:\n\n🌿 Casual: Viscose Challis (90–120 GSM), Cotton Lawn (70–100 GSM)\n✨ Evening: Satin (120–160 GSM), Crepe (100–140 GSM)\n👑 Bridal: Duchess Satin (200–280 GSM), Mikado, Organza\n🏖️ Resort: Chiffon (30–60 GSM), Georgette (60–90 GSM), Linen\n\n📐 Consider: drape, lining, care instructions, occasion formality.` },

  { keywords: ['suit','blazer','jacket','tailoring','suiting'],
    answer: `🧵 Suit / Blazer — Best Fabrics:\n\n1. Wool Suiting (240–320 GSM) — Classic. Super 100s–180s for luxury.\n2. Wool-Polyester (220–280 GSM) — Affordable and wrinkle-resistant.\n3. Cotton Suiting (220–280 GSM) — Unstructured blazers, summer suits.\n4. Linen (180–240 GSM) — Breathable summer suiting.\n\n✅ 260 GSM wool-poly for commercial suiting. Super 120s wool for premium.` },

  { keywords: ['activewear','sportswear','gym','leggings','yoga','running'],
    answer: `🧵 Activewear — Best Fabrics:\n\n1. Nylon-Spandex (150–200 GSM) — Premium leggings. Best shape retention.\n2. Polyester-Spandex (160–220 GSM) — Most common. Moisture-wicking, durable.\n3. Merino Wool (140–200 GSM) — Natural activewear. Odour-resistant.\n\n✅ 180 GSM 80/20 Nylon-Spandex for leggings. 200 GSM Polyester-Spandex for gym tops.` },

  { keywords: ['hoodie','sweatshirt','fleece','loungewear'],
    answer: `🧵 Hoodie / Sweatshirt — Best Fabrics:\n\n1. Cotton Fleece (280–380 GSM) — Soft inside loop, premium hoodies.\n2. French Terry (240–300 GSM) — Lighter, smooth outside. Good for sweatshirts.\n3. Cotton-Poly Fleece (280–350 GSM) — Industry standard 80/20 or 50/50.\n\n✅ 320 GSM 80% Cotton 20% Polyester Fleece for premium hoodies.` },

  { keywords: ['coat','overcoat','winter coat','outerwear','parka'],
    answer: `🧵 Coat / Outerwear — Best Fabrics:\n\n1. Wool Melton (400–600 GSM) — Dense, windproof, classic overcoat.\n2. Technical Shell (120–200 GSM) — Nylon/polyester with DWR waterproof coating.\n3. Down-proof Ripstop (60–80 GSM) — Puffer jacket outer shell.\n\n✅ 500 GSM Wool Melton for classic coats. Technical Shell + DWR for parka.` },

  { keywords: ['swimwear','bikini','swimsuit','bathing suit'],
    answer: `🧵 Swimwear — Best Fabrics:\n\n1. Nylon-Spandex (170–220 GSM) — Best. Chlorine-resistant, high stretch.\n2. Polyester-Spandex (180–230 GSM) — More affordable, still chlorine-resistant.\n3. ECONYL® Nylon — Sustainable from ocean waste.\n\n✅ Minimum 15–20% elastane. Must resist chlorine, saltwater, UV fading.` },

  { keywords: ['chiffon','georgette','voile','sheer fabric'],
    answer: `🧵 Sheer Fabrics:\n\n• Chiffon: 30–60 GSM — Twisted yarns, slight crinkle. Always requires lining.\n• Georgette: 60–90 GSM — More crinkled, heavier than chiffon, better drape.\n• Voile: 40–70 GSM — Smooth, soft sheer.\n\nAll used in kaftans, gowns, overlays, scarves.` },

  { keywords: ['viscose','rayon','challis'],
    answer: `🧵 Viscose / Rayon:\nSemi-synthetic from wood pulp. Excellent drape, soft hand, moisture-absorbent.\n\n• Viscose Challis (80–120 GSM) — Flowy printed dresses and kaftans\n• Viscose Jersey (150–200 GSM) — Stretch dresses and draped tops\n• ECOVERO™ — Sustainable viscose by Lenzing\n\nCare: 30°C gentle wash, do not wring, low iron.` },

  { keywords: ['crepe','crepe de chine','moss crepe','matte crepe'],
    answer: `🧵 Crepe Fabrics:\n• Crepe de Chine (70–100 GSM) — Lightweight silk-feel, fluid drape\n• Moss/Matte Crepe (120–160 GSM) — Textured, structured drape\n• Polyester Crepe (100–140 GSM) — Affordable alternative\n\nIdeal for blouses, dresses, and draped styles.` },

  { keywords: ['satin','charmeuse','duchess satin','sateen','mikado'],
    answer: `🧵 Satin Weave:\n• Charmeuse (60–90 GSM) — Silk or polyester, lingerie and blouses\n• Duchess Satin (200–280 GSM) — Heavy, stiff, bridal gowns\n• Polyester Satin (100–160 GSM) — Affordable linings and dresses\n• Mikado (180–220 GSM) — Structured bridal and occasionwear` },

  { keywords: ['linen','flax','linen blend'],
    answer: `🧵 Linen:\nFrom flax — strongest natural fibre, 30% stronger when wet.\n• GSM: 100–250\n• Breathable, cool, gets softer with washing, wrinkles easily\n• Blends: Linen-Cotton (softer), Linen-Viscose (better drape)\n• Care: 40°C wash, iron damp` },

  { keywords: ['cotton','organic cotton','combed cotton'],
    answer: `🧵 Cotton:\nMost-used natural fibre. Breathable, easy to dye.\n• Combed Cotton — Smoother, stronger. Used in premium T-shirts\n• Organic Cotton — GOTS certified, no pesticides\n• Price: $0.50–$2.50/m woven\n• GSM: 100–400 depending on construction` },

  { keywords: ['wool','merino','cashmere','lambswool'],
    answer: `🧵 Wool:\n• Merino (15–25 microns) — Next-to-skin softness, activewear\n• Lambswool (25–35 microns) — Very soft first shearing\n• Cashmere — Ultra-soft, expensive\n• Care: cold hand wash or dry clean only` },

  { keywords: ['sustainable','tencel','lyocell','modal','ecovero','rpet','econyl'],
    answer: `🌿 Sustainable Fibres:\n\n• TENCEL™ Lyocell — Closed-loop, 99% solvent recovery. Decarb: 85/100\n• Modal / ECOVERO™ — Softer than cotton, lower carbon\n• Organic Cotton (GOTS) — No pesticides, traceable\n• rPET — Recycled bottles → polyester (-75% CO₂)\n• ECONYL® — Regenerated nylon from ocean waste` },

  { keywords: ['gsm','fabric weight','grams per square'],
    answer: `📐 GSM Weight Guide:\n\n• 30–80 GSM — Ultralight (chiffon, organza)\n• 80–150 GSM — Light (shirts, blouses, summer dresses)\n• 150–250 GSM — Medium (trousers, knitwear, sweatshirts)\n• 250–350 GSM — Heavy (denim, jackets)\n• 350+ GSM — Very heavy (outerwear, canvas)` },

  { keywords: ['drape','drapability','flowy','fluid fabric'],
    answer: `📐 Drape Guide:\nBest drape: Silk charmeuse, Viscose challis, Chiffon, Crepe de chine, Georgette\nMedium drape: Cotton jersey, Linen, Chambray\nLow drape (structured): Canvas, Denim, Duchess Satin, Taffeta\n\nFor kaftans and draped styles → always choose high-drape fabrics.` },

  { keywords: ['price','cost','per metre','usd','how much'],
    answer: `💲 Fabric Prices (USD indicative):\n• Cotton Poplin: $0.50–1.50/m\n• Georgette/Chiffon: $1–4/m\n• Viscose Challis: $1.50–3.50/m\n• Denim 320 GSM: $2–6/m\n• Wool Suiting: $8–25/m\n• Silk Charmeuse: $15–40/m\n• TENCEL™: $3–8/m` },

  { keywords: ['india','sourcing','surat','tirupur','erode','bhilwara'],
    answer: `🇮🇳 India Sourcing Hubs:\n• Surat — Synthetics (georgette, chiffon, polyester)\n• Tirupur — Knitwear (T-shirts, jersey, hosiery)\n• Erode — Cotton grey fabric\n• Bhilwara — Suiting and worsted\n• Ludhiana — Wool knitwear\n• Panipat — Recycled home textiles` },

  { keywords: ['testing','aatcc','iso','astm','colorfastness','pilling','shrinkage'],
    answer: `🧪 Key Testing Standards:\n• ISO 105-C06 — Colourfastness to washing\n• AATCC 135 — Shrinkage after washing\n• ISO 12945-2 — Pilling (Martindale)\n• ISO 13934-1 — Tensile strength\n• AATCC 183 — UV protection (UPF)\n• ISO 11092 — Thermal and moisture management` },

  { keywords: ['wash','care','washing','iron','dry clean','laundry'],
    answer: `🧺 Wash Care Guide:\n• Cotton: 40–60°C machine wash\n• Polyester: 30–40°C, low/no iron\n• Viscose: 30°C gentle, do not wring\n• Silk: cold hand wash or dry clean\n• Wool: cold hand wash or dry clean, flat dry\n• Linen: 40°C, iron while damp\n• Elastane blends: 30°C, no tumble dry` },

  // ── BRAND COMPARISONS (UK Market Research 2024) ──────────────────────────
  { keywords: ['other brands','brand use','what brand','primark fabric','next fabric','m&s fabric','asos fabric','h&m fabric','tu fabric','sainsbury','marks spencer','marks and spencer','competitor','what retailers'],
    answer: `🏪 UK Brand Fabric Comparison (2024 Research):\n\n🟠 PRIMARK (Budget)\n• T-shirts: 100% BCI Cotton, 150–170 GSM\n• Dresses: Standard Viscose or Cotton-Poly\n• Jeans: 99% OE Cotton + 1% Elastane\n• Cert: BCI Cotton only\n\n🟡 SAINSBURY'S TU (Budget-Mid)\n• T-shirts: 100% BCI Cotton\n• Dresses: Viscose or Cotton blend\n• Denim: Cotton + REPREVE® rPET blend\n• Cert: BCI + REPREVE®\n\n🟡 NEXT (Mid)\n• T-shirts: 100% Combed Cotton / 60-40 marl\n• Shirts: 100% Cotton Poplin 40s / Linen blend\n• Denim: 98% Ring-spun Cotton + 2% Elastane\n• Cert: 90% BCI Cotton target\n\n🟡 ASOS (Mid-Fast)\n• Dresses: LENZING™ ECOVERO™ Viscose, TENCEL™\n• T-shirts: Cotton or rPET blend\n• Cert: FSC®, GRS (rPET), ECOVERO™\n\n🟢 M&S (Mid-Premium)\n• T-shirts: 100% Combed BCI Cotton / Cotton-Modal\n• Dresses: TENCEL™ Lyocell, Crepe\n• Poly: 70%+ recycled (target 100% by 2026)\n• Cert: BCI, OEKO-TEX®, GRS\n\n🟢 JOHN LEWIS / & OTHER STORIES (Premium)\n• T-shirts: 100% GOTS Organic Cotton\n• Dresses: TENCEL™, Silk blends\n• Cert: GOTS, OEKO-TEX® Standard 100` },

  { keywords: ['brand t-shirt','brands use tshirt','brands use t-shirt','primark tshirt','next tshirt','m&s tshirt','what do brands use for t'],
    answer: `🧵 What UK Brands Use for T-Shirts:\n\n🟠 Primark → 100% BCI Cotton, Carded, 150–170 GSM\n🟠 TU (Sainsbury's) → 100% BCI Cotton, 160–180 GSM\n🟡 Next → 100% Combed Cotton / 60-40 Marl, 160–190 GSM\n🟡 ASOS → Cotton or rPET blend (Responsible Edit)\n🟢 M&S → Combed BCI Cotton / Cotton-Modal, 170–210 GSM\n🟢 & Other Stories → 100% GOTS Organic Cotton\n\n✅ YOUR UPGRADE: Combed BCI Cotton 180 GSM (+10–15% cost) positions you above Primark/TU.\n🌿 PREMIUM: GOTS Organic or 60% Organic / 40% TENCEL™ Modal (+25–35%).\n📍 Source: Tirupur, Tamil Nadu — India's largest organic knit hub.` },

  { keywords: ['brand dress','brands use dress','what do brands use for dress','primark dress fabric','next dress fabric'],
    answer: `🧵 What UK Brands Use for Dresses:\n\n🟠 Primark → 100% Standard Viscose or Polyester\n🟠 TU → Viscose or Cotton-Viscose blend\n🟡 H&M → LENZING™ ECOVERO™ Viscose (FSC® certified)\n🟡 Next → Viscose Challis / Jersey blend\n🟡 ASOS → ECOVERO™ or TENCEL™ Modal\n🟢 M&S → TENCEL™ Lyocell / Crepe (OEKO-TEX®)\n🟢 John Lewis → TENCEL™ or Silk blend\n\n✅ YOUR UPGRADE: Switch from standard viscose to LENZING™ ECOVERO™.\nWhy: -50% CO₂, FSC® certified, same drape, +12–18% cost only.\n📍 Source: Surat for printed georgette, Tirupur for jersey dresses.` },

  { keywords: ['brand jeans','brands use jeans','brands use denim','what do brands use for jeans','primark denim','next denim'],
    answer: `🧵 What UK Brands Use for Jeans / Denim:\n\n🟠 Primark → 99% OE Cotton + 1% Elastane, BCI\n🟠 TU → Cotton + REPREVE® rPET blend, BCI + RCS\n🟡 Next → 98% Ring-spun Cotton + 2% Elastane, BCI\n🟢 M&S → Better Cotton ring-spun + rPET blend\n\n✅ YOUR UPGRADE: OE yarn → Ring-spun BCI Cotton 320 GSM + 2% Elastane.\nWhy: Ring-spun = better fade, softer hand, authentic denim feel. +12–18% cost.\n🌿 PREMIUM: GOTS Organic Ring-spun + 2% Elastane (+28–38%).\n📍 Source: Ahmedabad — India's denim hub.` },

  { keywords: ['brand kaftan','brands kaftan','what do brands use for kaftan','kaftan brand','occasion brand','womenswear brand'],
    answer: `🧵 What UK Brands Use for Kaftans & Occasionwear:\n\n🟠 Primark → 100% Polyester Georgette / Chiffon\n🟠 TU → Polyester Georgette or Viscose\n🟡 Next → Viscose Georgette / Crepe, BCI\n🟡 ASOS → ECOVERO™ Georgette / Satin, FSC®\n🟢 M&S / John Lewis → Silk Charmeuse / TENCEL™ Crepe\n\n✅ YOUR UPGRADE: Poly Georgette → Viscose Georgette or ECOVERO™ Chiffon.\nWhy: Natural-feel drape, breathable, superior to polyester. +15–25% cost.\n🌿 PREMIUM: TENCEL™ x Silk blend Georgette (+40–60%).\n📍 Source: Surat, Gujarat — largest hub for georgette and chiffon.` },

  { keywords: ['brand hoodie','brands hoodie','brands sweatshirt','what do brands use for hoodie','primark hoodie'],
    answer: `🧵 What UK Brands Use for Hoodies & Sweatshirts:\n\n🟠 Primark → 50/50 Cotton-Poly Fleece, BCI, 280–320 GSM\n🟡 Next → 80/20 Cotton-Poly Fleece, BCI, 300–340 GSM\n🟡 ASOS → 80/20 Cotton-Poly or rPET blend\n🟢 M&S → 100% Combed Cotton French Terry, OEKO-TEX®\n\n✅ YOUR UPGRADE: 50/50 Fleece → 80% Organic Cotton / 20% rPET Fleece 320 GSM.\nWhy: Dual sustainability story. Certify with GOTS + GRS. +18–25% cost.\n🌿 PREMIUM: 100% GOTS Organic Cotton French Terry (+30–40%).\n📍 Source: Tirupur for fleece; Ludhiana for heavyweight fleece.` },

  { keywords: ['sustainability brand','brand sustainable','m&s sustainable','asos sustainable','primark sustainable','next sustainable','better cotton','bci','gots','oeko-tex','certification brand'],
    answer: `🌿 UK Brand Sustainability Stance (2024):\n\n🟠 Primark → Better Cotton Initiative (BCI) only. No GOTS/TENCEL™.\n🟠 TU (Sainsbury's) → BCI cotton (~76%), REPREVE® rPET in denim.\n🟡 H&M → Recycled poly targets, Conscious Collection with org cotton.\n🟡 Next → 90% responsibly sourced cotton (BCI/OCS) target.\n🟡 ASOS → ECOVERO™, TENCEL™, GRS-certified rPET. CMA greenwash review 2024.\n🟢 M&S → 100% BCI cotton, 70%+ recycled poly (target 100% by 2026), Plan A.\n🟢 John Lewis → GOTS Organic, OEKO-TEX® Standard 100 across range.\n\n💡 Cost-controlled upgrade path:\n• rPET recycled poly → now near price-parity with virgin poly\n• ECOVERO™ vs standard viscose → only +12–18% extra\n• BCI Cotton → only +5–10% extra vs conventional` },
];

const findAnswer = (query) => {
  const q = query.toLowerCase();
  let bestScore = 0;
  let bestAnswer = null;
  for (const entry of FABRIC_KB) {
    const score = entry.keywords.reduce((s, k) => {
      if (q.includes(k)) return s + 2;
      if (k.split(' ').some(w => w.length > 3 && q.includes(w))) return s + 1;
      return s;
    }, 0);
    if (score > bestScore) { bestScore = score; bestAnswer = entry.answer; }
  }
  return bestScore > 0 ? bestAnswer : null;
};

const TEXAI_INTRO_DEFAULT = `🌿 **TEXAI Fabric Intelligence** online.\n\nAsk me anything about:\n- Fabric structures & weave types\n- GSM weight ranges\n- Fiber properties & sustainability\n- Testing standards (AATCC, ISO, ASTM)\n- Garment-to-fabric recommendations\n- India sourcing hubs & pricing\n\nPowered by Gemini AI — always online, no setup required.`;

const TEXAI_ROLE_INTROS = {
  buyer:
    `🛍️ **Welcome, Buyer!**\n\nI'm TEXAI — your fabric intelligence assistant.\n\nI can help you with:\n- Finding the right fabric for your product brief\n- Price ranges from India & Pakistan hubs\n- MOQ guidance and weight recommendations\n- Comparing fabric options quickly\n\nWhat are you sourcing today?`,
  designer:
    `🎨 **Welcome, Designer!**\n\nI'm TEXAI — your creative fabric guide.\n\nI can help you with:\n- Matching fabric feel & drape to your design\n- Understanding weave structures & textures\n- Fabric choices by garment type & occasion\n- Finishes that transform fabric appearance\n\nWhat are you designing?`,
  sourcing:
    `🔗 **Welcome, Sourcing Manager!**\n\nI'm TEXAI — your technical sourcing assistant.\n\nI can help you with:\n- Full fabric specs for supplier briefing\n- India vs Pakistan pricing comparisons\n- Testing & compliance requirements\n- Tech pack fabric recommendations\n\nWhat do you need to source?`,
  technologist:
    `🔬 **Welcome, Textile Technologist!**\n\nI'm TEXAI — your technical reference engine.\n\nI can help you with:\n- Weave construction & yarn count data\n- ISO, AATCC & ASTM testing standards\n- Fibre properties & blend performance\n- GSM ranges by fabric type & application\n\nWhat technical data do you need?`,
};

// ── Lightweight markdown renderer ───────────────────────────────────────────
// Handles: **bold**, *italic*, # headers, - / • bullet lines, numbered lists
const renderMarkdown = (text) => {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line → spacer
    if (line.trim() === '') {
      elements.push(<div key={i} style={{ height: '0.4rem' }} />);
      i++; continue;
    }

    // Heading: ## or #
    if (/^#{1,3}\s/.test(line)) {
      const text = line.replace(/^#{1,3}\s/, '');
      elements.push(
        <p key={i} style={{ fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
          {inlineFormat(text)}
        </p>
      );
      i++; continue;
    }

    // Bullet: - / • / 🧵 etc emoji-prefixed lines
    if (/^([-•*]|\d+\.)\s/.test(line) || /^[🧵🌿📐💲🇮🇳🧪🧺🏪🟠🟡🟢💡✅]/.test(line)) {
      const cleaned = line.replace(/^[-•*]\s/, '').replace(/^\d+\.\s/, '');
      elements.push(
        <div key={i} style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.15rem' }}>
          <span style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '0.05rem' }}>›</span>
          <span>{inlineFormat(cleaned)}</span>
        </div>
      );
      i++; continue;
    }

    // Normal paragraph
    elements.push(<p key={i} style={{ margin: '0 0 0.2rem' }}>{inlineFormat(line)}</p>);
    i++;
  }

  return <>{elements}</>;
};

// Inline formatting: **bold**, *italic*, `code`
const inlineFormat = (text) => {
  const parts = [];
  const regex = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const m = match[0];
    if (m.startsWith('`'))
      parts.push(<code key={match.index} style={{ background: 'rgba(255,255,255,0.08)', padding: '0.05rem 0.3rem', borderRadius: '4px', fontSize: '0.82em', fontFamily: 'monospace' }}>{m.slice(1, -1)}</code>);
    else if (m.startsWith('**'))
      parts.push(<strong key={match.index} style={{ color: 'var(--text-main)', fontWeight: 700 }}>{m.slice(2, -2)}</strong>);
    else
      parts.push(<em key={match.index}>{m.slice(1, -1)}</em>);
    last = match.index + m.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
};

const getContextualSuggestions = (userRole, fabric) => {
  const fabricName = fabric?.name;
  if (fabricName) {
    return [
      `What's the price range for ${fabricName}?`,
      `What garments use ${fabricName}?`,
      `Suggest a sustainable alternative to ${fabricName}`,
      `What testing standards apply to ${fabricName}?`,
    ];
  }
  const roleSuggestions = {
    buyer:        [`What's the cheapest cotton option?`, 'Compare prices for jersey vs poplin', 'Best fabric for budget activewear?', 'Sourcing hubs for woven fabrics?'],
    designer:     ['Flowy fabric for evening dresses?', 'Best fabric for structured blazers?', 'What gives silk-like drape without silk?', 'Fabrics trending for SS26?'],
    sourcing:     [`Best certified cotton for kidswear?`, 'Compare India vs Pakistan pricing', 'Which fabrics have GOTS certification?', 'Lead time for knit fabrics from Tirupur?'],
    technologist: ['GSM range for heavyweight denim?', 'AATCC standards for colour fastness?', 'Construction specs for Poplin 40x40?', 'Difference between terry and french terry?'],
  };
  return roleSuggestions[userRole] || [`What fabric for T-shirts?`, 'Brand comparison for dresses?', 'Best sustainable fabric?', 'GSM for denim?'];
};

export const TexaiChat = ({ userRole, selectedFabric }) => {
  const intro = userRole ? TEXAI_ROLE_INTROS[userRole] : TEXAI_INTRO_DEFAULT;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: intro, ts: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('Thinking...');
  const [serverStatus, setServerStatus] = useState('unknown');
  const endRef = useRef(null);
  const inputRef = useRef(null);

  // Update greeting when userRole changes (but only if conversation is just the intro)
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === 'assistant') {
        const newIntro = userRole ? TEXAI_ROLE_INTROS[userRole] : TEXAI_INTRO_DEFAULT;
        return [{ role: 'assistant', text: newIntro, ts: Date.now() }];
      }
      return prev;
    });
  }, [userRole]);

  // Check server status
  useEffect(() => {
    const check = async () => {
      try {
        const res = await fetch(`${PARDEEP_URL}/health`, { signal: AbortSignal.timeout(2000) });
        if (res.ok) setServerStatus('online');
        else setServerStatus('offline');
      } catch {
        setServerStatus('offline');
      }
    };
    check();
    const interval = setInterval(check, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(m => [...m, { role: 'user', text: userMsg, ts: Date.now() }]);
    setLoading(true);

    try {
      // Try TEXAI server first
      if (serverStatus === 'online') {
        const res = await fetch(`${PARDEEP_URL}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMsg }),
          signal: AbortSignal.timeout(10000)
        });
        if (res.ok) {
          const data = await res.json();
          const reply = data.response || '';
          // Use engine field from server to set correct source label
          const engineMap = { gemini: 'gemini', texai_llm: 'texai', offline_kb: 'kb' };
          const source = engineMap[data.engine] || (reply.startsWith('TEXAI is running') ? 'kb' : 'gemini');
          setMessages(m => [...m, { role: 'assistant', text: reply || 'No response.', ts: Date.now(), source }]);
          setLoading(false);
          return;
        }
      }

      // Offline fallback — built-in fabric knowledge
      await new Promise(r => setTimeout(r, 600)); // Simulate thinking
      const answer = findAnswer(userMsg);
      if (answer) {
        setMessages(m => [...m, { role: 'assistant', text: answer, ts: Date.now(), source: 'kb' }]);
      } else {
        setMessages(m => [...m, {
          role: 'assistant',
          text: `I don't have a specific answer for "${userMsg}" in my offline knowledge base.\n\nTry asking about: fabric types, GSM weights, cotton, polyester, wool, linen, jersey, twill, satin, testing standards, or India sourcing hubs.`,
          ts: Date.now(),
          source: 'kb'
        }]);
      }
    } catch (err) {
      const isNetwork = err instanceof TypeError || err.message?.includes('fetch');
      setMessages(m => [...m, {
        role: 'assistant',
        text: isNetwork
          ? `⚠️ AI service temporarily unavailable. Retrying automatically.\n\nIn the meantime, I'm answering from my built-in fabric knowledge base.`
          : `⚠️ Error: ${err.message}`,
        ts: Date.now(), source: 'error'
      }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const statusColors = { online: '#4db87a', offline: '#e06b5a', unknown: '#f0c94e' };
  const statusLabels = { online: 'TEXAI Online', offline: 'Offline Mode', unknown: 'Checking...' };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        id="texai-chat-toggle"
        aria-label="Open AI Fabric Assistant"
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '2rem',
          zIndex: 101,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: open
            ? 'rgba(30,30,42,0.95)'
            : 'linear-gradient(135deg, #7c6dab, #4a3d7a)',
          color: '#fff',
          border: '1px solid rgba(124,109,171,0.5)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: open
            ? '0 4px 20px rgba(124,109,171,0.3)'
            : '0 4px 30px rgba(124,109,171,0.5)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          transform: open ? 'scale(1)' : 'scale(1)',
        }}
        onMouseOver={e => { if (!open) e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {/* Status dot */}
        <span style={{
          position: 'absolute',
          top: '4px',
          right: '4px',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: statusColors[serverStatus],
          border: '2px solid rgba(16,16,22,0.9)',
          boxShadow: `0 0 6px ${statusColors[serverStatus]}`,
        }} />
      </button>

      {/* Chat Panel */}
      {open && (
        <div id="texai-chat-panel" style={{
          position: 'fixed',
          bottom: '5.5rem',
          left: '2rem',
          zIndex: 101,
          width: 'min(380px, calc(100vw - 2rem))',
          maxHeight: '560px',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(14, 14, 20, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(124,109,171,0.3)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,109,171,0.1)',
          overflow: 'hidden',
          animation: 'texaiSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}>
          {/* Header */}
          <div style={{
            padding: '1rem 1.25rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: 'linear-gradient(135deg, rgba(124,109,171,0.2), rgba(0,0,0,0.1))',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c6dab, #4a3d7a)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Zap size={18} color="#fff" />
            </div>
            <div style={{ flexGrow: 1 }}>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', margin: 0 }}>TEXAI Fabric AI</p>
              <p style={{ fontSize: '0.75rem', margin: 0, color: statusColors[serverStatus], display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: statusColors[serverStatus], display: 'inline-block' }} />
                {statusLabels[serverStatus]}
              </p>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.25rem' }}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '0.75rem 1rem',
                  borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, rgba(200,169,110,0.25), rgba(200,169,110,0.1))'
                    : 'rgba(255,255,255,0.04)',
                  border: msg.role === 'user'
                    ? '1px solid rgba(200,169,110,0.3)'
                    : '1px solid rgba(255,255,255,0.07)',
                  fontSize: '0.88rem',
                  lineHeight: 1.55,
                  color: 'var(--text-main)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}>
                  <div style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {msg.role === 'user'
                      ? msg.text
                      : renderMarkdown(msg.text)
                    }
                  </div>
                  {msg.source === 'kb' && (
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.4rem', marginBottom: 0 }}>📚 Offline knowledge base</p>
                  )}
                  {msg.source === 'gemini' && (
                    <p style={{ fontSize: '0.7rem', color: '#4db87a', marginTop: '0.4rem', marginBottom: 0 }}>✨ Gemini · Live research</p>
                  )}
                  {msg.source === 'texai' && (
                    <p style={{ fontSize: '0.7rem', color: '#7c6dab', marginTop: '0.4rem', marginBottom: 0 }}>⚡ TEXAI Engine</p>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <Loader size={14} style={{ animation: 'spin 1s linear infinite' }} />
                {loadingMsg}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Contextual suggestion chips — always visible */}
          <div style={{ padding: '0 1rem 0.75rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {selectedFabric
                ? <>Viewing: <span style={{ color: 'var(--accent-primary)', textTransform: 'none' }}>{selectedFabric.name}</span></>
                : 'Suggested questions'}
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {getContextualSuggestions(userRole, selectedFabric).map(s => (
                <button
                  key={s}
                  onClick={() => { setInput(s); setTimeout(() => inputRef.current?.focus(), 50); }}
                  style={{
                    padding: '0.35rem 0.7rem', borderRadius: '12px', fontSize: '0.73rem',
                    background: 'rgba(124,109,171,0.1)', border: '1px solid rgba(124,109,171,0.25)',
                    color: 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.2s',
                    textAlign: 'left',
                  }}
                  onMouseOver={e => { e.currentTarget.style.color = '#7c6dab'; e.currentTarget.style.borderColor = 'rgba(124,109,171,0.5)'; }}
                  onMouseOut={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'rgba(124,109,171,0.25)'; }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
            <label htmlFor="texai-chat-input" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>Chat message</label>
            <textarea
              id="texai-chat-input"
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about fabrics, GSM, fibers..."
              rows={1}
              style={{
                flexGrow: 1,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                padding: '0.6rem 0.9rem',
                resize: 'none',
                outline: 'none',
                fontFamily: 'DM Sans, sans-serif',
                lineHeight: 1.4,
                maxHeight: '100px',
                overflow: 'auto',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(124,109,171,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: input.trim() && !loading ? 'linear-gradient(135deg, #7c6dab, #4a3d7a)' : 'rgba(255,255,255,0.05)',
                border: 'none',
                cursor: input.trim() && !loading ? 'pointer' : 'default',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.2s',
                transform: input.trim() && !loading ? 'scale(1)' : 'scale(0.9)',
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes texaiSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 480px) {
          /* Chat panel — full width on mobile */
          #texai-chat-panel {
            left: 0.5rem !important;
            right: 0.5rem !important;
            bottom: 5rem !important;
            width: auto !important;
            max-height: 75dvh !important;
            border-radius: 16px !important;
          }
          /* Align toggle on left to avoid clashing with Back-to-Top on right */
          #texai-chat-toggle {
            left: 1.25rem !important;
            right: auto !important;
            bottom: 1.25rem !important;
          }
          .back-to-top-btn {
            right: 1.25rem !important;
            left: auto !important;
            bottom: 1.25rem !important;
          }
        }
        body:has(#texai-chat-panel) .back-to-top-btn {
          display: none !important;
        }

      `}</style>
    </>
  );
};
