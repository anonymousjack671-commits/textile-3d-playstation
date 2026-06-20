import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export const RecentlyViewed = ({ fabrics, onSelect }) => {
  const scrollRef = useRef(null);

  if (!fabrics || fabrics.length < 2) return null;

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 240, behavior: 'smooth' });
    }
  };

  const handleSelect = (fabric) => {
    onSelect(fabric);
    setTimeout(() => {
      const el = document.getElementById('fabric-specs-tabs') || document.getElementById('details');
      if (el) {
        const yOffset = -80; // Height of the sticky navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="band-elevated" style={{ padding: '3rem 0', position: 'relative', borderTop: '1px solid var(--color-hairline-dark)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Clock size={16} color="var(--color-on-dark-mute)" />
            <h3 className="heading-md" style={{ margin: 0, color: 'var(--color-on-dark-mute)', fontWeight: 500 }}>
              Recently Viewed
            </h3>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={() => scroll(-1)}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-hairline-dark)', borderRadius: 'var(--rounded-md)', padding: '0.4rem 0.6rem', cursor: 'pointer', color: 'var(--color-on-dark-mute)', display: 'flex', alignItems: 'center', transition: 'var(--transition)' }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll(1)}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-hairline-dark)', borderRadius: 'var(--rounded-md)', padding: '0.4rem 0.6rem', cursor: 'pointer', color: 'var(--color-on-dark-mute)', display: 'flex', alignItems: 'center', transition: 'var(--transition)' }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          style={{
            display: 'flex', gap: '1rem', overflowX: 'auto',
            scrollbarWidth: 'none', msOverflowStyle: 'none',
            paddingBottom: '0.5rem',
          }}
        >
          <style>{`::-webkit-scrollbar { display: none; }`}</style>
          {fabrics.map((fabric, i) => (
            <button
              key={`${fabric.id}-${i}`}
              onClick={() => handleSelect(fabric)}
              style={{
                flexShrink: 0, width: '220px', padding: '1.25rem',
                borderRadius: 'var(--rounded-md)', textAlign: 'left', cursor: 'pointer',
                background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)',
                transition: 'var(--transition)', color: 'inherit',
                display: 'flex', flexDirection: 'column', gap: '0.4rem',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 112, 209, 0.15)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-hairline-dark)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <span className={`badge ${fabric.badge}`} style={{ fontSize: '0.55rem', marginBottom: '0.2rem', display: 'inline-block' }}>
                {fabric.badgeText}
              </span>
              <p style={{ margin: '0.3rem 0 0.1rem', fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-on-dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {fabric.name}
              </p>
              <p className="caption-md text-muted" style={{ margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {fabric.category}
              </p>
              {(fabric.gsm?.min || fabric.gsmRange) && (
                <p style={{ margin: '0.4rem 0 0', fontSize: '0.72rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  {fabric.gsm?.min ? `${fabric.gsm.min}–${fabric.gsm.max} GSM` : fabric.gsmRange}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
