import React, { useState, useEffect } from 'react';

// ── Helpers ────────────────────────────────────────────────────────────────────
function timeAgo(dateStr) {
  if (!dateStr) return '';
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

const CATEGORIES = ['All', 'Technology', 'Sustainability', 'Sourcing', 'Industry'];

const CAT_COLORS = {
  Technology:    '#00f2fe',
  Sustainability:'#4db87a',
  Sourcing:      '#f0c94e',
  Industry:      '#e06b5a',
};

// ── Skeleton Card ─────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div style={{
    background: 'var(--color-surface-dark-card)',
    border: '1px solid var(--color-hairline-dark)',
    borderRadius: 'var(--rounded-md)', overflow: 'hidden',
    animation: 'pulse 1.6s ease-in-out infinite',
  }}>
    <div style={{ height: 160, background: 'var(--color-hairline-dark)', opacity: 0.4 }} />
    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ height: 12, width: '40%', background: 'var(--color-hairline-dark)', borderRadius: 4, opacity: 0.5 }} />
      <div style={{ height: 16, width: '90%', background: 'var(--color-hairline-dark)', borderRadius: 4, opacity: 0.4 }} />
      <div style={{ height: 16, width: '70%', background: 'var(--color-hairline-dark)', borderRadius: 4, opacity: 0.3 }} />
      <div style={{ height: 12, width: '100%', background: 'var(--color-hairline-dark)', borderRadius: 4, opacity: 0.25 }} />
      <div style={{ height: 12, width: '80%', background: 'var(--color-hairline-dark)', borderRadius: 4, opacity: 0.2 }} />
    </div>
    <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
  </div>
);

// ── News Card ─────────────────────────────────────────────────────────────────
const NewsCard = ({ article }) => {
  const [imgErr, setImgErr] = useState(false);
  const catColor = CAT_COLORS[article.category] || '#00f2fe';

  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{
        background: 'var(--color-surface-dark-card)',
        border: '1px solid var(--color-hairline-dark)',
        borderRadius: 'var(--rounded-md)',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'pointer',
      }}
        onMouseOver={e => {
          e.currentTarget.style.borderColor = `${catColor}55`;
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.borderColor = 'var(--color-hairline-dark)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Thumbnail */}
        {article.thumbnail && !imgErr ? (
          <div style={{ height: 160, overflow: 'hidden', flexShrink: 0 }}>
            <img
              src={article.thumbnail}
              alt=""
              onError={() => setImgErr(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ) : (
          <div style={{
            height: 80, flexShrink: 0,
            background: `linear-gradient(135deg, ${catColor}15 0%, transparent 100%)`,
            borderBottom: `1px solid ${catColor}20`,
            display: 'flex', alignItems: 'center', paddingLeft: '1.25rem',
          }}>
            <span style={{ fontSize: '1.8rem', opacity: 0.6 }}>
              {article.category === 'Technology' ? '🔬' : article.category === 'Sustainability' ? '♻️' : article.category === 'Sourcing' ? '🌍' : '📰'}
            </span>
          </div>
        )}

        {/* Body */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
          {/* Meta row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{
              padding: '0.2rem 0.65rem', borderRadius: 'var(--rounded-full)',
              background: `${catColor}18`, border: `1px solid ${catColor}35`,
              fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.05em', color: catColor, whiteSpace: 'nowrap',
            }}>{article.category}</span>
            <span style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.75rem', flexShrink: 0 }}>
              {article.source}
            </span>
            <span style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.75rem', marginLeft: 'auto', flexShrink: 0 }}>
              {timeAgo(article.pubDate)}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            color: 'var(--color-on-dark)', fontWeight: 700, fontSize: '0.95rem',
            lineHeight: 1.45, margin: 0,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {article.title}
          </h3>

          {/* Description */}
          <p style={{
            color: 'var(--color-on-dark-mute)', fontSize: '0.82rem', lineHeight: 1.6,
            margin: 0, flex: 1,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {article.description}
          </p>

          {/* Read more */}
          <span style={{
            color: catColor, fontSize: '0.8rem', fontWeight: 600,
            marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem',
          }}>
            Read article →
          </span>
        </div>
      </div>
    </a>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────────
export const NewsSectionPanel = () => {
  const [articles, setArticles]     = useState([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(false);
  const [activeCategory, setActive] = useState('All');
  const [fetchedAt, setFetchedAt]   = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch('/api/fabric-news');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        setArticles(data.articles || []);
        setFetchedAt(data.fetchedAt);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <section id="news-section" style={{ padding: '5rem 0', background: 'var(--color-surface-dark-elevated, #0a0e1f)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📰</span>
              <h2 className="heading-xl" style={{ color: 'var(--color-on-dark)', margin: 0 }}>
                Textile Industry News
              </h2>
            </div>
            <p className="body-md text-muted" style={{ maxWidth: 520, margin: 0 }}>
              Daily updates on fiber innovation, fabric technology, sustainability breakthroughs & global sourcing shifts.
            </p>
          </div>
          {fetchedAt && (
            <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.75rem', margin: 0, alignSelf: 'flex-end' }}>
              Refreshed {timeAgo(fetchedAt)}
            </p>
          )}
        </div>

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat;
            const color = CAT_COLORS[cat] || 'var(--color-primary)';
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '0.4rem 1rem', borderRadius: 'var(--rounded-full)',
                  border: '1px solid',
                  borderColor: isActive ? color : 'var(--color-hairline-dark)',
                  background: isActive ? `${color}18` : 'transparent',
                  color: isActive ? color : 'var(--color-on-dark-mute)',
                  fontFamily: 'Inter, sans-serif', fontWeight: isActive ? 700 : 400,
                  fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {cat === 'All' ? '⚡ All' : cat === 'Technology' ? '🔬 Technology' : cat === 'Sustainability' ? '♻️ Sustainability' : cat === 'Sourcing' ? '🌍 Sourcing' : '📰 Industry'}
              </button>
            );
          })}
          {!loading && !error && (
            <span style={{ marginLeft: 'auto', alignSelf: 'center', color: 'var(--color-on-dark-mute)', fontSize: '0.8rem' }}>
              {filtered.length} articles
            </span>
          )}
        </div>

        {/* Grid */}
        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : error ? (
          <div style={{
            textAlign: 'center', padding: '5rem 2rem',
            background: 'var(--color-surface-dark-card)',
            border: '1px solid var(--color-hairline-dark)',
            borderRadius: 'var(--rounded-lg)',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📡</div>
            <p style={{ color: 'var(--color-on-dark)', fontWeight: 700, marginBottom: '0.5rem' }}>
              Unable to fetch news right now
            </p>
            <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.9rem' }}>
              Our news feed is temporarily unavailable. Check back shortly.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div style={{
            textAlign: 'center', padding: '5rem 2rem',
            background: 'var(--color-surface-dark-card)',
            border: '1px solid var(--color-hairline-dark)',
            borderRadius: 'var(--rounded-lg)',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
            <p style={{ color: 'var(--color-on-dark)', fontWeight: 700 }}>No articles in this category yet</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.25rem' }}>
            {filtered.map(article => (
              <NewsCard key={article.id || article.link} article={article} />
            ))}
          </div>
        )}

        {/* Sources note */}
        <p style={{ color: 'var(--color-on-dark-mute)', fontSize: '0.75rem', marginTop: '2.5rem', textAlign: 'center' }}>
          Sources: Fibre2Fashion · Textile World · Just Style · Textile Today · Vogue Business · Business of Fashion · Wazir Advisors &nbsp;·&nbsp; Refreshes hourly
        </p>
      </div>

      <style>{`
        #news-section .container { max-width: 1200px; }
        @media (max-width: 640px) {
          #news-section { padding: 3rem 0; }
        }
      `}</style>
    </section>
  );
};
