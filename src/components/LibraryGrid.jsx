import React, { useState, useMemo } from 'react';
import { getCategoryData, allTextiles } from '../data/textiles';
import { ChevronRight, Search, X, Bookmark, BookmarkCheck } from 'lucide-react';

const ROLES = [
  { key: 'buyer',        emoji: '🛍️' },
  { key: 'designer',     emoji: '🎨' },
  { key: 'sourcing',     emoji: '🔗' },
  { key: 'technologist', emoji: '🔬' },
];

const TABS = [
  { key: 'woven',     label: 'Woven' },
  { key: 'knitted',   label: 'Knitted' },
  { key: 'sustainable', label: 'Sustainable' },
];

const QUICK_FILTERS = [
  { label: 'Lightweight',  test: f => { const gsm = f.gsm?.min || (f.gsmRange ? parseInt(f.gsmRange) : 999); return gsm < 150; } },
  { label: 'Midweight',    test: f => { const gsm = f.gsm?.min || (f.gsmRange ? parseInt(f.gsmRange) : 0); return gsm >= 150 && gsm < 280; } },
  { label: 'Heavyweight',  test: f => { const gsm = f.gsm?.min || (f.gsmRange ? parseInt(f.gsmRange) : 0); return gsm >= 280; } },
  { label: '3D Ready',     test: f => f.has3DModel !== false },
];

// Extract the lowest starting price from priceIndia object
const getStartingPrice = (priceIndia) => {
  if (!priceIndia || typeof priceIndia !== 'object') return null;
  let minNum = Infinity;
  let minDisplay = null;
  Object.values(priceIndia).forEach(v => {
    if (typeof v !== 'string') return;
    const match = v.match(/[\$₹]([\d.]+)/);
    if (match) {
      const num = parseFloat(match[1]);
      if (num < minNum) { minNum = num; minDisplay = v; }
    }
  });
  return minDisplay;
};

const ROLE_SAVE_LABEL = {
  buyer:        'Shortlist',
  designer:     'Moodboard',
  sourcing:     'Spec List',
  technologist: 'Tech List',
};

const ROLE_HEADINGS = {
  buyer:        { title: 'Textile Library',  subtitle: 'Compare fabrics by weight and type to find the best fit for your product and budget.' },
  designer:     { title: 'Fabric Explorer',  subtitle: 'Discover weave structures, textures and drape qualities to inspire your next collection.' },
  sourcing:     { title: 'Fabric Spec Sheet', subtitle: 'Full construction data, GSM ranges and technical properties for confident supplier briefing.' },
  technologist: { title: 'Technical Library', subtitle: 'Detailed construction specs, yarn counts, GSM ranges and weave classifications.' },
};

export const LibraryGrid = ({ onSelectFabric, selectedId, userRole, isShortlisted, onToggleShortlist }) => {
  const [activeTab, setActiveTab]       = useState('woven');
  const [searchQuery, setSearchQuery]   = useState('');
  const [quickFilter, setQuickFilter]   = useState(null);

  const isSearching = searchQuery.trim().length > 0;
  const currentData = getCategoryData(activeTab);

  const filteredData = useMemo(() => {
    // Universal search: when query present, search ALL fabrics across all tabs
    let data = isSearching ? allTextiles : currentData;

    // Text search — name, category, description, keyProperty, uses
    if (isSearching) {
      const q = searchQuery.toLowerCase();
      data = data.filter(item =>
        (item.name?.toLowerCase().includes(q)) ||
        (item.category?.toLowerCase().includes(q)) ||
        (item.description?.toLowerCase().includes(q)) ||
        (item.keyProperty?.toLowerCase().includes(q)) ||
        (item.source?.toLowerCase().includes(q)) ||
        (item.uses?.some(u => u.toLowerCase().includes(q)))
      );
    }

    // Quick filter (applies to current tab when not searching)
    if (quickFilter && !isSearching) {
      const qf = QUICK_FILTERS.find(f => f.label === quickFilter);
      if (qf) data = data.filter(qf.test);
    }

    return data;
  }, [currentData, searchQuery, quickFilter, isSearching]);

  const clearAll = () => { setSearchQuery(''); setQuickFilter(null); };
  const hasFilters = searchQuery.trim() || quickFilter;

  return (
    <section id="library" className="band band-light" style={{ position: 'relative' }}>
      <div className="container">

        {/* Header — adapts to user role */}
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          {userRole && (
            <div className="section-badge" style={{ marginBottom: '0.75rem', color: 'var(--color-primary)', borderColor: 'rgba(0, 242, 254, 0.3)', background: 'rgba(0, 242, 254, 0.08)' }}>
              {ROLES.find(r => r.key === userRole)?.emoji} Personalised for you
            </div>
          )}
          {!userRole && (
            <div className="section-badge" style={{ color: 'var(--color-primary)', borderColor: 'rgba(0, 242, 254, 0.3)', background: 'rgba(0, 242, 254, 0.08)' }}>
              🗂️ Fabric Library
            </div>
          )}
          <h2 className="display-lg" style={{ color: 'var(--color-ink)', marginBottom: '1rem' }}>
            {userRole ? ROLE_HEADINGS[userRole].title : <><span className="text-gradient">Textile</span> Library</>}
          </h2>
          <p className="body-md" style={{ color: 'var(--color-body-light)', maxWidth: '560px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            {userRole ? ROLE_HEADINGS[userRole].subtitle : 'Explore comprehensive data across weaves, knits, and sustainable fibres.'}
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>

          {/* Tabs — styled as PlayStation pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', opacity: isSearching ? 0.45 : 1, transition: 'opacity 0.2s', pointerEvents: isSearching ? 'none' : 'auto' }}>
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setQuickFilter(null); }}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--rounded-full)',
                  background: activeTab === tab.key ? 'var(--color-primary)' : 'transparent',
                  color: activeTab === tab.key ? '#ffffff' : 'var(--color-ink)',
                  border: activeTab === tab.key ? '1px solid transparent' : '1px solid var(--color-ash-light)',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: activeTab === tab.key ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab.key ? 'var(--shadow-glow)' : 'none'
                }}
              >
                {tab.label} Fabrics
              </button>
            ))}
            {isSearching && (
              <span style={{ fontSize: '0.75rem', color: 'var(--color-mute-light)', alignSelf: 'center', fontStyle: 'italic', fontFamily: 'Inter, sans-serif' }}>
                ← tabs paused while searching
              </span>
            )}
          </div>

          {/* Search bar */}
          <div style={{ maxWidth: '560px', margin: '0 auto', width: '100%', position: 'relative' }}>
            <label htmlFor="library-search" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              Search fabrics
            </label>
            <div style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-mute-light)', pointerEvents: 'none' }}>
              <Search size={18} />
            </div>
            <input
              id="library-search"
              type="text"
              placeholder="Search across all fabrics by name, type, use…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 2.8rem 0.85rem 3rem',
                borderRadius: 'var(--rounded-full)',
                background: 'var(--color-surface-soft)',
                border: '1px solid var(--color-ash-light)',
                color: 'var(--color-ink)',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s ease',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--color-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--color-ash-light)'}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute', right: '1.1rem', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-mute-light)',
                  display: 'flex', alignItems: 'center',
                }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Quick filter chips */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {QUICK_FILTERS.map(qf => (
              <button
                key={qf.label}
                onClick={() => setQuickFilter(quickFilter === qf.label ? null : qf.label)}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: 'var(--rounded-full)',
                  fontSize: '0.82rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: quickFilter === qf.label ? 'var(--color-primary)' : 'var(--color-ash-light)',
                  background: quickFilter === qf.label ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                  color: quickFilter === qf.label ? 'var(--color-primary)' : 'var(--color-mute-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {qf.label}
              </button>
            ))}
          </div>

          {/* Results count + clear — smart banner in search mode */}
          {isSearching ? (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0.65rem 1.25rem', borderRadius: 'var(--rounded-md)',
              background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.2)',
              flexWrap: 'wrap', gap: '0.5rem',
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontFamily: 'Inter, sans-serif' }}>
                🔍 Searching across all <strong>{allTextiles.length}</strong> fabrics
                {filteredData.length > 0
                  ? <> — <strong style={{ color: 'var(--color-ink)' }}>{filteredData.length} match{filteredData.length !== 1 ? 'es' : ''}</strong> found</>
                  : <> — <span style={{ color: 'var(--color-warning)' }}>no matches</span></>}
              </span>
              <button
                onClick={clearAll}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-mute-light)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'Inter, sans-serif' }}
              >
                <X size={12} /> Clear search
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-mute-light)', fontFamily: 'Inter, sans-serif' }}>
                Showing <strong style={{ color: 'var(--color-ink)' }}>{filteredData.length}</strong> of{' '}
                <strong style={{ color: 'var(--color-ink)' }}>{currentData.length}</strong> fabrics
              </span>
              {hasFilters && (
                <button
                  onClick={clearAll}
                  style={{
                    fontSize: '0.82rem', color: 'var(--color-primary)', background: 'none',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem',
                    textDecoration: 'underline', fontFamily: 'Inter, sans-serif',
                  }}
                >
                  <X size={12} /> Clear all filters
                </button>
              )}
            </div>
          )}

        </div>

        {/* Grid */}
        <div
          className="grid"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap: 'clamp(1rem, 3vw, 2rem)' }}
        >
          {filteredData.map(fabric => (
            <div
              key={fabric.id}
              className="product-card"
              style={{
                padding: '1.75rem',
                border: '1px solid',
                borderColor: selectedId === fabric.id ? 'var(--color-primary)' : 'var(--color-hairline-light)',
                background: selectedId === fabric.id ? '#ffffff' : 'var(--color-surface-card)',
                transform: selectedId === fabric.id ? 'translateY(-6px)' : 'none',
                boxShadow: selectedId === fabric.id ? 'var(--shadow-active)' : 'none',
                borderRadius: 'var(--rounded-md)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => {
                if (selectedId === fabric.id) {
                  onSelectFabric(null);
                } else {
                  onSelectFabric(fabric);
                  // Scroll straight to details with offset to account for sticky navbar
                  setTimeout(() => {
                    const el = document.getElementById('details');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }, 150);
                }
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{
                  fontSize: '0.72rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--rounded-full)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  background: fabric.badge === 'badge-woven' ? 'rgba(0,242,254,0.1)' : 'rgba(124,109,171,0.1)',
                  color: fabric.badge === 'badge-woven' ? 'var(--color-primary)' : '#7c6dab',
                  border: `1px solid ${fabric.badge === 'badge-woven' ? 'rgba(0,242,254,0.25)' : 'rgba(124,109,171,0.25)'}`
                }}>
                  {fabric.badgeText}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {/* Save / Shortlist button */}
                  {onToggleShortlist && (
                    <button
                      onClick={e => { e.stopPropagation(); onToggleShortlist(fabric); }}
                      title={isShortlisted?.(fabric.id) ? `Remove from ${ROLE_SAVE_LABEL[userRole] || 'Shortlist'}` : `Save to ${ROLE_SAVE_LABEL[userRole] || 'Shortlist'}`}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.3rem',
                        padding: '0.3rem 0.75rem', borderRadius: 'var(--rounded-full)',
                        border: '1px solid',
                        borderColor: isShortlisted?.(fabric.id) ? 'var(--color-primary)' : 'var(--color-ash-light)',
                        background: isShortlisted?.(fabric.id) ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                        color: isShortlisted?.(fabric.id) ? 'var(--color-primary)' : 'var(--color-mute-light)',
                        cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600,
                        fontFamily: 'Inter, sans-serif',
                        transition: 'all 0.2s',
                      }}
                      onMouseOver={e => { if (!isShortlisted?.(fabric.id)) { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; }}}
                      onMouseOut={e => { if (!isShortlisted?.(fabric.id)) { e.currentTarget.style.borderColor = 'var(--color-ash-light)'; e.currentTarget.style.color = 'var(--color-mute-light)'; }}}
                    >
                      {isShortlisted?.(fabric.id)
                        ? <><BookmarkCheck size={13} /> Saved</>
                        : <><Bookmark size={13} /> {ROLE_SAVE_LABEL[userRole] || 'Save'}</>
                      }
                    </button>
                  )}
                  {selectedId === fabric.id ? (
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        onSelectFabric(null);
                      }}
                      title="Clear Selection"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-commerce)',
                        cursor: 'pointer',
                        padding: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 5,
                      }}
                    >
                      <X size={18} />
                    </button>
                  ) : (
                    <ChevronRight size={18} color="var(--color-mute-light)" />
                  )}
                </div>
              </div>

              <h3 className="heading-md" style={{ marginBottom: '0.35rem', color: 'var(--color-ink)' }}>{fabric.name}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-body-light)', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>{fabric.category}</p>

              <div style={{ flexGrow: 1 }}>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--color-ink-elevated)',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.5,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {fabric.keyProperty
                    || (typeof fabric.construction === 'string' ? fabric.construction : null)
                    || fabric.description
                    || fabric.source
                    || (fabric.variants?.[0] && `Includes variants: ${fabric.variants.map(v => v.name).slice(0, 3).join(', ')}.`)
                    || 'A specialised textile structure with unique characteristics.'}
                </p>
              </div>

              {/* Uses chips — top 2 */}
              {fabric.uses?.length > 0 && (
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.85rem' }}>
                  {fabric.uses.slice(0, 2).map((use, i) => (
                    <span key={i} style={{
                      fontSize: '0.72rem', padding: '0.2rem 0.55rem', borderRadius: 'var(--rounded-sm)',
                      background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)',
                      color: 'var(--color-mute-light)', fontFamily: 'Inter, sans-serif',
                    }}>{use}</span>
                  ))}
                  {fabric.uses.length > 2 && (
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-mute-light)', alignSelf: 'center', fontFamily: 'Inter, sans-serif' }}>
                      +{fabric.uses.length - 2} more
                    </span>
                  )}
                </div>
              )}

              <div style={{
                marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--color-hairline-light)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                {/* GSM + Starting price */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span style={{ fontSize: '0.88rem', color: 'var(--color-ink)', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
                    {fabric.gsmRange
                      || fabric.gsmDisplay?.split(' (')[0]
                      || (fabric.gsm?.min ? `${fabric.gsm.min}–${fabric.gsm.max} GSM` : null)
                      || (fabric.variants?.[0]?.gsm ? `${fabric.variants[0].gsm.min}–${fabric.variants[0].gsm.max} GSM` : null)
                      || 'Varied GSM'}
                  </span>
                  {(() => {
                    const price = getStartingPrice(fabric.priceIndia);
                    return price ? (
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-link-light)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                        From {price}
                      </span>
                    ) : null;
                  })()}
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  {fabric.has3DModel === false && fabric.keyProperty && (
                    <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: 'var(--rounded-sm)', background: 'rgba(124,109,171,0.15)', color: '#7c6dab', border: '1px solid rgba(124,109,171,0.25)', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>3D Soon</span>
                  )}
                  {fabric.weightTag && (
                    <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: 'var(--rounded-sm)', background: 'rgba(0,242,254,0.1)', color: 'var(--color-primary)', border: '1px solid rgba(0,242,254,0.2)', fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{fabric.weightTag}</span>
                  )}
                  {fabric.decarbScore && (
                    <span style={{ fontSize: '0.85rem', color: 'var(--sustainable)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>♻ {fabric.decarbScore}</span>
                  )}
                </div>
              </div>

              {/* Discover CTA — guides users to click for full specs */}
              <div style={{
                marginTop: '0.85rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem', fontWeight: 600,
                color: selectedId === fabric.id ? 'var(--color-primary)' : 'var(--color-mute-light)',
                transition: 'color 0.2s',
                borderTop: '1px solid var(--color-hairline-light)',
                paddingTop: '0.75rem',
                fontFamily: 'Inter, sans-serif',
              }}>
                {selectedId === fabric.id ? '✓ Selected (Click to deselect)' : 'View full specs ↓'}
              </div>

            </div>
          ))}

          {filteredData.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '5rem 2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 className="heading-md" style={{ marginBottom: '0.75rem', color: 'var(--color-ink)' }}>
                No fabrics found
                {searchQuery && ` for "${searchQuery}"`}
              </h3>
              <p style={{ color: 'var(--color-body-light)', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif' }}>
                Try adjusting your search or removing quick filters.
              </p>
              <button
                onClick={clearAll}
                className="btn btn-secondary-light"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </div>
      {/* Mobile responsive overrides for LibraryGrid */}
      <style>{`
        @media (max-width: 480px) {
          #library .grid { gap: 0.85rem !important; }
          #library .filter-row { flex-direction: column !important; align-items: stretch !important; }
        }
      `}</style>

    </section>
  );
};
