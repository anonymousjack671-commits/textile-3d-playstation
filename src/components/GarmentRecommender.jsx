import React, { useState, useMemo } from 'react';
import { Search, Leaf, Layers, Tag, ArrowRight } from 'lucide-react';
import { MarketIntelligencePanel } from './MarketIntelligencePanel';
import { SupplierSection } from './SupplierSection';
import { allTextiles, sustainableFibers } from '../data/textiles';
import { garmentTaxonomy } from '../data/garment-taxonomy';
import { getMatchingGarmentVendors } from '../data/suppliers';

// ── Scoring: structured direct match + tiered text relevance ─────────────
// Phase 1 — direct fabricId match from taxonomy (highest signal, range 0–30)
function getDirectScore(fabric, garment) {
  if (!garment?.fabricIds) return 0;
  const match = garment.fabricIds.find(f => f.id === fabric.id);
  if (!match) return 0;
  // Scale 1–100 suitability score → 0–30 recommender points
  return Math.round((match.score / 100) * 30);
}

// Phase 2 — GSM window bonus (0–8 points)
function getGsmBonus(fabric, garment) {
  if (!garment?.gsmRange) return 0;
  const { min, max } = garment.gsmRange;
  const fMin = fabric.gsm?.min || fabric.gsmMin;
  const fMax = fabric.gsm?.max || fabric.gsmMax;
  if (!fMin || !fMax) return 0;
  // Overlap check
  const overlapMin = Math.max(fMin, min);
  const overlapMax = Math.min(fMax, max);
  if (overlapMax < overlapMin) return 0; // No overlap
  const overlapRatio = (overlapMax - overlapMin) / (max - min);
  return Math.round(overlapRatio * 8);
}

// Phase 3 — stretch compatibility (0–5 points)
function getStretchBonus(fabric, garment) {
  if (!garment?.stretchRequired) return 0;
  const req = garment.stretchRequired;
  // Determine fabric's stretch level from its data
  const text = JSON.stringify(fabric).toLowerCase();
  const hasElastane = text.includes('elastane') || text.includes('spandex') || text.includes('lycra');
  const isKnit = fabric.badge === 'badge-knitted';
  const isPerformance = fabric.id === 'performance-knits' || fabric.id === 'warp-knits';
  const fabricStretch = isPerformance ? 'high' : isKnit ? 'medium' : hasElastane ? 'medium' : 'none';

  const stretchMap = { none: 0, low: 1, medium: 2, high: 3 };
  const reqLevel = stretchMap[req] || 0;
  const fabLevel = stretchMap[fabricStretch] || 0;

  if (req === 'none') return fabLevel === 0 ? 5 : 0;
  if (req === 'high') return fabLevel >= 2 ? 5 : fabLevel === 1 ? 2 : 0;
  if (req === 'medium') return fabLevel >= 1 ? 5 : 0;
  return 3; // low requirement — most fabrics pass
}

// Phase 4 — text relevance (0–16 points, unchanged from v2)
function scoreTextRelevance(fabric, searchTerms) {
  let score = 0;

  const allVariantUses = (fabric.variants || []).flatMap(v =>
    Array.isArray(v.uses) ? v.uses : (v.uses ? [v.uses] : [])
  ).join(' ').toLowerCase();

  const allVariantNames = (fabric.variants || []).map(v => v.name || '').join(' ').toLowerCase();

  const topUses = Array.isArray(fabric.uses) ? fabric.uses.join(' ') : (fabric.uses || '');

  const haystack = [
    fabric.name,
    fabric.category,
    fabric.family,
    fabric.keyProperty,
    fabric.story,
    topUses,
    fabric.construction,
    allVariantUses,
    allVariantNames,
    Array.isArray(fabric.commonFibers) ? fabric.commonFibers.join(' ') : '',
    Array.isArray(fabric.season) ? fabric.season.join(' ') : '',
    Array.isArray(fabric.finish) ? fabric.finish.join(' ') : '',
  ].join(' ').toLowerCase();

  for (const term of searchTerms) {
    const t = term.toLowerCase();
    if (fabric.name.toLowerCase() === t)                 score += 8;
    else if (fabric.name.toLowerCase().includes(t))      score += 5;
    else if (allVariantNames.includes(t))                score += 4;
    else if (fabric.category?.toLowerCase().includes(t)) score += 3;
    else if (topUses.toLowerCase().includes(t))          score += 3;
    else if (allVariantUses.includes(t))                 score += 2;
    else if (haystack.includes(t))                       score += 1;
  }
  // Cap text score at 16 so it cannot outrank a curated direct match
  return Math.min(score, 16);
}

// Combined scoring entry point
function scoreFabric(fabric, searchTerms, garment) {
  const textScore   = scoreTextRelevance(fabric, searchTerms);
  const directScore = getDirectScore(fabric, garment);
  const gsmBonus    = getGsmBonus(fabric, garment);
  const stretchBonus = getStretchBonus(fabric, garment);
  return textScore + directScore + gsmBonus + stretchBonus;
}

// Confidence label based on final composite score
function getConfidenceLabel(score) {
  if (score >= 38) return { label: 'Ideal Match',   color: '#4db87a' };
  if (score >= 24) return { label: 'Great Match',   color: '#00f2fe' };
  if (score >= 12) return { label: 'Good Match',    color: '#f5a623' };
  return               { label: 'Possible Match', color: '#9c8ed5' };
}

// ── Sustainable swap map ───────────────────────────────────────────────────
function getSustainableSwap(fabric) {
  const text = JSON.stringify(fabric).toLowerCase();
  if (text.includes('cotton'))   return 'organic-cotton';
  if (text.includes('polyester') || text.includes('nylon')) return 'rpet';
  if (text.includes('viscose') || text.includes('rayon'))  return 'tencel-lyocell';
  if (text.includes('wool'))     return 'recycled-wool';
  return null;
}

// ── GSM display ────────────────────────────────────────────────────────────
function getGsmLabel(fabric) {
  if (fabric.gsm?.min)        return `${fabric.gsm.min}–${fabric.gsm.max} GSM`;
  if (fabric.gsmMin)           return `${fabric.gsmMin}–${fabric.gsmMax} GSM`;
  if (fabric.gsmDisplay)       return fabric.gsmDisplay.split('(')[0].trim();
  if (fabric.variants?.[0]?.gsm) {
    const v = fabric.variants[0].gsm;
    return `${v.min}–${v.max} GSM`;
  }
  return 'Varied GSM';
}

// ── Weight tag colour ──────────────────────────────────────────────────────
const WEIGHT_COLORS = {
  SHEER:         { bg: 'rgba(0,242,254,0.1)', color: '#53b1ff', border: 'rgba(0,242,254,0.2)' },
  LIGHT:         { bg: 'rgba(77,184,122,0.1)', color: '#4db87a', border: 'rgba(77,184,122,0.2)' },
  MEDIUM:        { bg: 'rgba(255,206,33,0.1)', color: '#f5a623', border: 'rgba(255,206,33,0.2)'  },
  'LIGHT-MEDIUM':{ bg: 'rgba(222,255,32,0.1)', color: '#deff20', border: 'rgba(222,255,32,0.2)' },
  'MEDIUM-HEAVY':{ bg: 'rgba(213,59,0,0.1)', color: '#d53b00', border: 'rgba(213,59,0,0.2)'  },
  HEAVY:         { bg: 'rgba(200,27,58,0.1)', color: '#c81b3a', border: 'rgba(200,27,58,0.2)' },
};

export const GarmentRecommender = ({ onSelectFabric }) => {
  const [activeCategory, setActiveCategory] = useState(garmentTaxonomy[0].category);
  const [selectedGarment, setSelectedGarment] = useState(null);
  const [customQuery, setCustomQuery] = useState('');

  const currentCategoryObj = garmentTaxonomy.find(c => c.category === activeCategory);

  const handleSelectGarment = (garment) => {
    setSelectedGarment(garment);
    setCustomQuery('');
  };

  const handleCustomSearch = (e) => {
    setCustomQuery(e.target.value);
    setSelectedGarment(null);
  };

  // ── Build ranked recommendations ──────────────────────────────────────────
  const recommendations = useMemo(() => {
    const rawSearch = customQuery.trim();
    if (!selectedGarment && rawSearch.length < 2) return [];

    let searchTerms = [];
    if (selectedGarment) {
      // Build search tags from garment brief
      searchTerms = [
        selectedGarment.name,
        ...(selectedGarment.fabrics || []),
        ...(selectedGarment.properties || []),
        activeCategory,
      ];
    } else {
      searchTerms = rawSearch.split(/\s+/).filter(t => t.length >= 2);
    }

    let pool = allTextiles
      .map(fabric => {
        const score = scoreFabric(fabric, searchTerms, selectedGarment);
        return { fabric, score };
      })
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score);

    // Fallbacks if pool is dry
    if (pool.length < 5) {
      const seen = new Set(pool.map(r => r.fabric.id));
      const categoryMatches = allTextiles
        .filter(f => !seen.has(f.id) && f.category?.toLowerCase() === activeCategory.toLowerCase())
        .map(f => ({ fabric: f, score: 1 }));
      pool = [...pool, ...categoryMatches];
    }
    if (pool.length < 5) {
      const seen2 = new Set(pool.map(r => r.fabric.id));
      const genericMatches = allTextiles
        .filter(f => !seen2.has(f.id) && f.badge === 'badge-woven')
        .map(f => ({ fabric: f, score: 0.8 }))
        .slice(0, 5 - pool.length);
      pool = [...pool, ...genericMatches];
    }
    if (pool.length < 7) {
      const seen3 = new Set(pool.map(r => r.fabric.id));
      const wovenFill = allTextiles
        .filter(f => !seen3.has(f.id) && f.badge === 'badge-woven')
        .map(f => ({ fabric: f, score: 0.5 }))
        .slice(0, 7 - pool.length);
      pool = [...pool, ...wovenFill];
    }
    if (pool.length < 7) {
      const seen4 = new Set(pool.map(r => r.fabric.id));
      const knittedFill = allTextiles
        .filter(f => !seen4.has(f.id) && f.badge === 'badge-knitted')
        .map(f => ({ fabric: f, score: 0.2 }))
        .slice(0, 7 - pool.length);
      pool = [...pool, ...knittedFill];
    }

    // Cap at 10 — clean 2-3 row grid
    const final = pool.slice(0, 10);

    // Enrich each result
    return final.map(({ fabric, score }) => {
      const swapId = getSustainableSwap(fabric);
      const sustainableSwap = swapId ? sustainableFibers.find(f => f.id === swapId) : null;
      const gsmLabel = getGsmLabel(fabric);
      const topSourcingHub = (fabric.indiaSourcing || fabric.variants?.[0]?.indiaSourcing || [])[0] || null;
      const confidence = getConfidenceLabel(score);
      return { fabric, score, sustainableSwap, gsmLabel, topSourcingHub, confidence };
    });
  }, [selectedGarment, customQuery]);

  return (
    <section id="garment-recommender" className="band band-dark" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Background Radial Glow */}
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '900px', height: '400px', background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 242, 254, 0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge" style={{ color: 'var(--color-primary)', borderColor: 'rgba(0,242,254,0.3)', background: 'rgba(0,242,254,0.08)' }}>
            👗 Garment Recommender
          </div>
          <h2 className="display-lg" style={{ color: '#fff', marginBottom: '1rem' }}>
            Precise <span className="text-gradient">Fabric Matching</span>
          </h2>
          <p className="body-md" style={{ color: 'var(--color-body-dark)', maxWidth: '560px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Select a garment category and we'll rank the most suitable fabrics from our library — woven and knitted — by relevance.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
          <div className="tabs-scroll" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {garmentTaxonomy.map(tax => (
              <button
                key={tax.category}
                onClick={() => { setActiveCategory(tax.category); setSelectedGarment(null); }}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--rounded-full)',
                  background: activeCategory === tax.category ? 'var(--color-primary)' : 'rgba(0, 242, 254, 0.03)',
                  color: '#fff',
                  border: activeCategory === tax.category ? '1px solid transparent' : '1px solid var(--color-hairline-dark)',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: activeCategory === tax.category ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Layers size={15} />
                {tax.category}
              </button>
            ))}
          </div>

          {/* Sub-garment chips */}
          <div style={{ background: 'var(--color-surface-dark-elevated)', padding: '2rem', borderRadius: 'var(--rounded-md)', border: '1px solid var(--color-hairline-dark)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: '#fff', textAlign: 'center', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Select a specific product in <span style={{ color: 'var(--color-primary)' }}>{activeCategory}</span>:
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxHeight: '280px', overflowY: 'auto' }}>
              {currentCategoryObj.garments.map(garment => (
                <button
                  key={garment.name}
                  onClick={() => handleSelectGarment(garment)}
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: 'var(--rounded-md)',
                    background: selectedGarment?.name === garment.name ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255,255,255,0.02)',
                    color: selectedGarment?.name === garment.name ? 'var(--color-primary)' : 'var(--color-on-dark)',
                    border: `1px solid ${selectedGarment?.name === garment.name ? 'var(--color-primary)' : 'var(--color-hairline-dark)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'Inter, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.92rem'
                  }}
                  onMouseOver={e => { if (selectedGarment?.name !== garment.name) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                  onMouseOut={e => { if (selectedGarment?.name !== garment.name) e.currentTarget.style.borderColor = 'var(--color-hairline-dark)'; }}
                >
                  <Tag size={14} />
                  {garment.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Custom search */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '2rem auto', textAlign: 'center' }}>
          <label htmlFor="garment-custom-search" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-on-dark-mute)', fontSize: '0.95rem', fontFamily: 'Inter, sans-serif' }}>
            Or search by fabric name / keyword:
          </label>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)' }}>
              <Search size={18} />
            </div>
            <input
              id="garment-custom-search"
              type="text"
              placeholder="e.g., jersey, poplin, fleece, chiffon..."
              value={customQuery}
              onChange={handleCustomSearch}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 3rem',
                borderRadius: 'var(--rounded-md)',
                background: 'var(--color-surface-dark-elevated)',
                border: '1px solid var(--color-hairline-dark)',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s ease'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-hairline-dark)'}
            />
          </div>
        </div>

        {/* ── Results ── */}
        {(selectedGarment || customQuery.length >= 2) && (
          <div style={{ position: 'relative', zIndex: 1, marginTop: '2.5rem' }}>

            {/* Header */}
            <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-hairline-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 className="heading-xl" style={{ color: '#fff', marginBottom: '0.3rem' }}>
                  Recommended Fabrics
                </h3>
                <p className="body-sm" style={{ color: 'var(--color-on-dark-mute)' }}>
                  Best matches for <strong>{selectedGarment ? selectedGarment.name : `"${customQuery}"`}</strong> — ranked by relevance · click any card to view full specs
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-on-dark-mute)', fontFamily: 'Inter, sans-serif' }}>Showing {recommendations.length} fabrics</span>
                <span className="badge" style={{ fontSize: '0.82rem', fontFamily: 'Inter, sans-serif', background: 'var(--color-surface-dark-elevated)', border: '1px solid var(--color-hairline-dark)', padding: '0.3rem 0.8rem', borderRadius: 'var(--rounded-full)', color: '#fff' }}>
                  {recommendations.filter(r => r.fabric.badge === 'badge-woven').length} Woven · {recommendations.filter(r => r.fabric.badge === 'badge-knitted').length} Knitted
                </span>
              </div>
            </div>

            {recommendations.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem', background: 'var(--color-surface-dark-elevated)', borderRadius: 'var(--rounded-md)', border: '1px solid var(--color-hairline-dark)' }}>
                <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '1.1rem', fontFamily: 'Inter, sans-serif' }}>
                  No fabrics matched. Try a different garment or use the search box with a fabric name like "jersey" or "poplin".
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))', gap: '1.25rem' }}>
                {recommendations.map(({ fabric, gsmLabel, sustainableSwap, topSourcingHub, confidence }, idx) => {
                  const wtColors = WEIGHT_COLORS[fabric.weightTag] || WEIGHT_COLORS['MEDIUM'];
                  return (
                    <div
                      key={fabric.id}
                      className="glass-card"
                      style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', cursor: 'pointer', position: 'relative', background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)', borderRadius: 'var(--rounded-md)' }}
                      onClick={() => {
                        onSelectFabric(fabric);
                        setTimeout(() => {
                          const el = document.getElementById('details');
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }, 150);
                      }}
                    >
                      {/* Badge row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <span style={{
                          fontSize: '0.72rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--rounded-full)',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          fontFamily: 'Inter, sans-serif',
                          background: fabric.badge === 'badge-woven' ? 'rgba(0,242,254,0.1)' : 'rgba(124,109,171,0.1)',
                          color: fabric.badge === 'badge-woven' ? 'var(--color-primary)' : '#9c8ed5',
                          border: `1px solid ${fabric.badge === 'badge-woven' ? 'rgba(0,242,254,0.25)' : 'rgba(124,109,171,0.25)'}`
                        }}>
                          {fabric.badgeText || 'WOVEN'}
                        </span>
                        <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                          {confidence && selectedGarment && (
                            <span style={{ fontSize: '0.62rem', padding: '0.15rem 0.5rem', borderRadius: '9999px', fontWeight: 700, background: `${confidence.color}18`, color: confidence.color, border: `1px solid ${confidence.color}40`, fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>
                              {confidence.label}
                            </span>
                          )}
                          {fabric.weightTag && (
                            <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.55rem', borderRadius: '9999px', fontWeight: 700, background: wtColors.bg, color: wtColors.color, border: `1px solid ${wtColors.border}`, fontFamily: 'Inter, sans-serif' }}>
                              {fabric.weightTag}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Name + category */}
                      <h4 className="heading-md" style={{ color: '#fff', marginBottom: '0.25rem', lineHeight: 1.2 }}>{fabric.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-on-dark-mute)', marginBottom: '0.75rem', fontFamily: 'Inter, sans-serif' }}>{fabric.family || fabric.category}</p>

                      {/* Key property */}
                      <p style={{ fontSize: '0.88rem', color: 'var(--color-on-dark-mute)', lineHeight: 1.5, flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>
                        {fabric.keyProperty || (typeof fabric.construction === 'string' ? fabric.construction : `${fabric.variants?.length || 0} variants`)}
                      </p>

                      {/* GSM */}
                      <div style={{ padding: '0.6rem 0.9rem', borderRadius: 'var(--rounded-md)', background: 'rgba(200, 162, 200, 0.08)', border: '1px solid rgba(200, 162, 200, 0.18)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-on-dark-mute)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>Weight</span>
                        <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'Inter, sans-serif' }}>{gsmLabel}</span>
                      </div>

                      {/* Sustainable swap + sourcing */}
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        {sustainableSwap && (
                          <span style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: 'var(--rounded-md)', background: 'rgba(77,184,122,0.1)', border: '1px solid rgba(77,184,122,0.25)', color: 'var(--sustainable)', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'Inter, sans-serif' }}>
                            🌿 {sustainableSwap.name}
                          </span>
                        )}
                        {topSourcingHub && (
                          <span style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: 'var(--rounded-md)', background: 'rgba(0, 242, 254, 0.03)', border: '1px solid var(--color-hairline-dark)', color: 'var(--color-on-dark-mute)', fontFamily: 'Inter, sans-serif' }}>
                            🇮🇳 {topSourcingHub}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem', color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                        View Full Specs <ArrowRight size={14} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* UK Market Intelligence Panel */}
        {selectedGarment && (
          <div style={{ position: 'relative', zIndex: 1, marginTop: '2rem' }}>
            <MarketIntelligencePanel garmentName={selectedGarment.name} />
          </div>
        )}

        {/* Garment Manufacturer Directory */}
        {selectedGarment && (
          <div style={{ position: 'relative', zIndex: 1 }}>
            <SupplierSection
              icon="🏭"
              title={`Manufacturers for ${selectedGarment.name}`}
              subtitle="Connect with CMT units and export houses that specialise in producing this garment category — request quotes, MOQs and lead times."
              suppliers={getMatchingGarmentVendors(selectedGarment, activeCategory, { limit: 3 })}
              context={selectedGarment.name}
              listingKind="garment manufacturing unit"
            />
          </div>
        )}

        {/* Mobile responsive overrides */}
        <style>{`
          @media (max-width: 480px) {
            .tabs-scroll { justify-content: flex-start !important; }
          }
        `}</style>

      </div>
    </section>
  );
};
