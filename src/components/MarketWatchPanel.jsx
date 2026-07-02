import React, { useState } from 'react';
import { MARKET_WATCH_BRANDS } from '../data/marketWatch';

// ── Helpers ────────────────────────────────────────────────────────────────────
function nextMonday() {
  const d = new Date();
  const day = d.getDay();
  const daysUntil = day === 0 ? 1 : 8 - day;
  d.setDate(d.getDate() + daysUntil);
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
}

function timeAgo(iso) {
  if (!iso) return '';
  const diff = (Date.now() - new Date(iso)) / 1000;
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

// ── Section config ─────────────────────────────────────────────────────────────
const SECTION_META = [
  { key: 'vendors',       label: 'Vendors & Factories', icon: '🏭' },
  { key: 'sustainability',label: 'Sustainability',       icon: '♻️' },
  { key: 'sourcing',      label: 'Sourcing Strategy',   icon: '🌍' },
  { key: 'strategy',      label: 'Brand Strategy',      icon: '📈' },
  { key: 'pricing',       label: 'Retail Pricing',      icon: '💷' },
  { key: 'launches',      label: 'New Launches',        icon: '🚀' },
  { key: 'gossip',        label: 'Industry Gossip',     icon: '📢' },
];

// ── Pending State ─────────────────────────────────────────────────────────────
const PendingState = ({ brand }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    padding: '4rem 2rem', textAlign: 'center', gap: '1.5rem',
  }}>
    <div style={{ fontSize: '3rem' }}>⏳</div>
    <div>
      <p style={{ color: 'var(--color-on-dark)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        First briefing arriving {nextMonday()}
      </p>
      <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.9rem', maxWidth: 400, margin: '0 auto' }}>
        The {brand.name} intelligence agent runs every Monday morning — covering vendors, sustainability,
        sourcing strategy, brand news, pricing and more.
      </p>
    </div>
    <div style={{
      display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem',
    }}>
      {SECTION_META.map(s => (
        <span key={s.key} style={{
          padding: '0.35rem 0.85rem', borderRadius: 'var(--rounded-full)',
          background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)',
          fontSize: '0.8rem', color: 'var(--color-on-dark-mute)',
        }}>
          {s.icon} {s.label}
        </span>
      ))}
    </div>
  </div>
);

// ── Section Card ───────────────────────────────────────────────────────────────
const SectionCard = ({ icon, label, content, quiet }) => (
  <div style={{
    background: 'var(--color-surface-dark-card)',
    border: '1px solid var(--color-hairline-dark)',
    borderRadius: 'var(--rounded-md)',
    padding: '1.25rem',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
      <span style={{ fontSize: '1.1rem' }}>{icon}</span>
      <span style={{
        fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase',
        letterSpacing: '0.06em', color: 'var(--color-on-dark)',
      }}>{label}</span>
    </div>
    {quiet
      ? <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.85rem', fontStyle: 'italic' }}>Quiet this week.</p>
      : <p style={{ color: 'var(--color-body-dark)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{content}</p>
    }
  </div>
);

// ── So What Card ──────────────────────────────────────────────────────────────
const SoWhatCard = ({ bullets }) => (
  <div style={{
    background: 'rgba(0, 242, 254, 0.04)',
    border: '1px solid rgba(0, 242, 254, 0.25)',
    borderRadius: 'var(--rounded-md)',
    padding: '1.5rem',
    gridColumn: '1 / -1',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
      <span style={{ fontSize: '1.1rem' }}>💡</span>
      <span style={{
        fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase',
        letterSpacing: '0.06em', color: 'var(--color-primary)',
      }}>So What? — Supplier Implications</span>
    </div>
    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {(bullets || []).map((b, i) => (
        <li key={i} style={{ color: 'var(--color-body-dark)', fontSize: '0.88rem', lineHeight: 1.65 }}>{b}</li>
      ))}
    </ul>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────────
export const MarketWatchPanel = () => {
  const [activeBrand, setActiveBrand] = useState('primark');
  const brand = MARKET_WATCH_BRANDS.find(b => b.key === activeBrand) || MARKET_WATCH_BRANDS[0];
  const hasData = brand.sections !== null;
  const quietWeeks = brand.sections?.quietWeeks || [];

  return (
    <section id="market-watch" style={{ padding: '5rem 0', background: 'var(--color-canvas-dark)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <h2 className="heading-xl" style={{ color: 'var(--color-on-dark)', margin: 0 }}>
              Market Watch
            </h2>
          </div>
          <p className="body-md text-muted" style={{ maxWidth: 560 }}>
            Weekly brand intelligence — vendors, sustainability, sourcing strategy & retail moves.
            Updated every Monday by dedicated AI agents.
          </p>
        </div>

        {/* Brand Tabs */}
        <div style={{
          display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem',
          paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-hairline-dark)',
        }}>
          {MARKET_WATCH_BRANDS.map(b => {
            const isActive = b.key === activeBrand;
            const hasUpdate = b.sections !== null;
            return (
              <button
                key={b.key}
                onClick={() => setActiveBrand(b.key)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.45rem 1rem', borderRadius: 'var(--rounded-full)',
                  border: '1px solid',
                  borderColor: isActive ? b.tierColor : 'var(--color-hairline-dark)',
                  background: isActive ? `${b.tierColor}18` : 'transparent',
                  color: isActive ? b.tierColor : 'var(--color-on-dark-mute)',
                  fontFamily: 'Inter, sans-serif', fontWeight: isActive ? 700 : 400,
                  fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s',
                  position: 'relative',
                }}
              >
                <span style={{ fontSize: '0.9rem' }}>{b.icon}</span>
                {b.name}
                {hasUpdate && (
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#4db87a', marginLeft: 2,
                  }} title="New briefing available" />
                )}
              </button>
            );
          })}
        </div>

        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2rem' }}>{brand.icon}</span>
            <div>
              <h3 style={{ color: 'var(--color-on-dark)', fontWeight: 800, fontSize: '1.3rem', margin: 0 }}>
                {brand.name}
              </h3>
              <span style={{
                fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', color: brand.tierColor,
              }}>{brand.tier} Tier</span>
            </div>
          </div>
          {hasData && (
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.8rem', margin: 0 }}>
                Week of {brand.weekOf}
              </p>
              <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.75rem', margin: 0 }}>
                Updated {timeAgo(brand.lastUpdated)}
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        {!hasData ? (
          <div style={{
            background: 'var(--color-surface-dark-card)',
            border: '1px solid var(--color-hairline-dark)',
            borderRadius: 'var(--rounded-lg)',
          }}>
            <PendingState brand={brand} />
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem',
          }}>
            {SECTION_META.map(s => (
              <SectionCard
                key={s.key}
                icon={s.icon}
                label={s.label}
                content={brand.sections[s.key]}
                quiet={quietWeeks.includes(s.key) || !brand.sections[s.key]}
              />
            ))}
            {brand.sections?.soWhat?.length > 0 && (
              <SoWhatCard bullets={brand.sections.soWhat} />
            )}
          </div>
        )}

        {/* Footer note */}
        <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.78rem', marginTop: '2rem', textAlign: 'center' }}>
          Intelligence gathered every Monday via web search — vendors, OSH disclosures, sustainability reports, trade press & analyst commentary.
        </p>
      </div>

      <style>{`
        #market-watch .container { max-width: 1200px; }
        @media (max-width: 640px) {
          #market-watch { padding: 3rem 0; }
        }
      `}</style>
    </section>
  );
};
