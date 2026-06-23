import React, { useState } from 'react';
import { FINISHING_PROCESSES } from '../data/textiles';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORY_COLORS = {
  CHEMICAL:   { color: 'var(--color-primary)', bg: 'rgba(0, 242, 254, 0.08)',  border: 'rgba(0, 242, 254, 0.25)'  },
  MECHANICAL: { color: '#7c6dab', bg: 'rgba(124, 109, 171, 0.08)', border: 'rgba(124, 109, 171, 0.25)' },
  THERMAL:    { color: 'var(--color-commerce)', bg: 'rgba(213, 59, 0, 0.08)',  border: 'rgba(213, 59, 0, 0.25)'  },
  BIOLOGICAL: { color: '#4db87a', bg: 'rgba(77, 184, 122, 0.08)',  border: 'rgba(77, 184, 122, 0.25)'  },
};

const getCategory = (process) => {
  const cat = (process.category || '').toUpperCase();
  for (const key of Object.keys(CATEGORY_COLORS)) {
    if (cat.includes(key)) return key;
  }
  return 'CHEMICAL';
};

export const FinishingGuide = () => {
  const [openIdx, setOpenIdx] = useState(null);

  if (!FINISHING_PROCESSES || FINISHING_PROCESSES.length === 0) return null;

  return (
    <section id="finishing-guide" className="band band-light" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge" style={{ color: 'var(--color-primary)', borderColor: 'rgba(0, 242, 254, 0.3)', background: 'rgba(0, 242, 254, 0.08)' }}>
            ✨ Finishing Guide
          </div>
          <h2 className="display-lg" style={{ color: 'var(--color-ink)', marginBottom: '1rem' }}>
            Finishing <span className="text-gradient">Processes</span>
          </h2>
          <p className="body-md" style={{ color: 'var(--color-body-light)', maxWidth: '560px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Chemical and mechanical treatments applied after weaving or knitting. Click any process to expand full details, pricing, and verification methods.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxWidth: '900px', margin: '0 auto' }}>
          {FINISHING_PROCESSES.map((process, idx) => {
            const catKey  = getCategory(process);
            const cat     = CATEGORY_COLORS[catKey];
            const isOpen  = openIdx === idx;

            return (
              <div
                key={idx}
                style={{
                  borderRadius: 'var(--rounded-md)',
                  border: `1px solid ${isOpen ? cat.border : 'var(--color-hairline-light)'}`,
                  background: isOpen ? '#ffffff' : 'var(--color-surface-card)',
                  boxShadow: isOpen ? 'var(--shadow-active)' : 'none',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* ── Header row (always visible) ── */}
                <button
                  aria-expanded={isOpen}
                  aria-controls={`finish-detail-${idx}`}
                  id={`finish-trigger-${idx}`}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.1rem 1.4rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--color-ink)',
                  }}
                >
                  <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{process.icon || '⚙️'}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 600, fontSize: '1.05rem', fontFamily: 'Inter, sans-serif' }}>{process.name}</span>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.07em',
                        textTransform: 'uppercase', padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--rounded-full)', color: cat.color,
                        fontFamily: 'Inter, sans-serif',
                        background: cat.bg, border: `1px solid ${cat.border}`,
                      }}>
                        {catKey}
                      </span>
                      {process.priceImpact && (
                        <span style={{ fontSize: '0.82rem', color: 'var(--color-commerce)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                          {process.priceImpact}
                        </span>
                      )}
                    </div>
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.88rem', color: 'var(--color-mute-light)', fontFamily: 'Inter, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: isOpen ? 'normal' : 'nowrap' }}>
                      {process.simpleDefinition}
                    </p>
                  </div>
                  <span style={{ color: cat.color, flexShrink: 0 }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {/* ── Expanded detail panel ── */}
                {isOpen && (
                  <div
                    id={`finish-detail-${idx}`}
                    role="region"
                    aria-labelledby={`finish-trigger-${idx}`}
                    style={{ padding: '0 1.4rem 1.4rem 1.4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                  >
                    <div id="finishing-detail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '1rem' }}>
                      {process.whatItAddsToFabric && (
                        <div style={{ padding: '1rem', borderRadius: 'var(--rounded-md)', background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)' }}>
                          <strong style={{ display: 'block', color: cat.color, marginBottom: '0.4rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>What it adds</strong>
                          <p style={{ fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--color-ink-elevated)', fontFamily: 'Inter, sans-serif' }}>{process.whatItAddsToFabric}</p>
                        </div>
                      )}
                      {process.howItWorks && (
                        <div style={{ padding: '1rem', borderRadius: 'var(--rounded-md)', background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)' }}>
                          <strong style={{ display: 'block', color: 'var(--color-ink)', marginBottom: '0.4rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif' }}>How it works</strong>
                          <p style={{ fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--color-ink-elevated)', fontFamily: 'Inter, sans-serif' }}>{process.howItWorks}</p>
                        </div>
                      )}
                    </div>

                    {process.testToVerify && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--rounded-md)', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0, fontFamily: 'Inter, sans-serif' }}>Verifiable by:</span>
                        <span style={{ fontSize: '0.88rem', color: 'var(--color-link-light)', fontFamily: 'Inter, sans-serif' }}>
                          {Array.isArray(process.testToVerify) ? process.testToVerify.join(' · ') : process.testToVerify}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 480px) {
          #finishing-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
