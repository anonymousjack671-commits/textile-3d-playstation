import React from 'react';
import { Shield, Zap, Globe, BookOpen } from 'lucide-react';

const STATS = [
  { value: '200+',  label: 'Fabric Structures',       sub: 'Woven, knitted & sustainable' },
  { value: '18+',   label: 'India Sourcing Hubs',     sub: 'Tirupur, Surat, Ludhiana & more' },
  { value: '50+',   label: 'Garment Categories',      sub: 'Mapped to fabric recommendations' },
  { value: '100%',  label: 'Free to Use',             sub: 'No account, no paywall' },
];

const TESTIMONIALS = [
  {
    quote: "I used to spend 2–3 days researching fabric options for a brief. With Textile3D I now find the right fabric in under 20 minutes — specs, pricing, and sourcing in one place.",
    name: 'Priya S.',
    role: 'Senior Buyer',
    company: 'UK Fashion Retailer',
    emoji: '🛍️',
    color: 'var(--woven)',
  },
  {
    quote: "The 3D weave visualiser is something I'd been looking for for years. My design team uses it every week to explain fabric structures to manufacturers who aren't textile experts.",
    name: 'Rohan M.',
    role: 'Creative Director',
    company: 'Sustainable Apparel Brand',
    emoji: '🎨',
    color: 'var(--accent-secondary)',
  },
  {
    quote: "As a sourcing manager, the market intelligence panel alone is worth its weight in gold. Live brand comparisons and upgrade paths — it's changed how I brief suppliers.",
    name: 'Anita K.',
    role: 'Sourcing Manager',
    company: 'Global Clothing Manufacturer',
    emoji: '🔗',
    color: 'var(--sustainable)',
  },
];

const TRUST_BADGES = [
  { icon: '🌿', label: 'GOTS Aware',       desc: 'Organic cotton supply chain data' },
  { icon: '♻️', label: 'GRS Referenced',    desc: 'Recycled content certification info' },
  { icon: '✅', label: 'OEKO-TEX Covered', desc: 'Testing standard documentation' },
  { icon: '🏭', label: 'India Sourcing',    desc: 'Direct mill & hub intelligence' },
];

const FEATURES = [
  { icon: <Zap size={20} color="var(--color-primary)" />, title: 'Instant AI Matching', desc: 'Type your brief in plain English. Get ranked fabric matches in seconds — no forms, no dropdowns.' },
  { icon: <Globe size={20} color="var(--color-primary)" />,  title: 'Live Market Intelligence', desc: 'Real brand comparisons, upgrade paths and pricing — powered by Gemini AI, always online via serverless cloud.' },
  { icon: <BookOpen size={20} color="var(--color-marathon-yellow)" />, title: 'Deep Technical Library', desc: 'Full construction specs, testing standards, GSM ranges and 3D weave visualisations — all in one place.' },
  { icon: <Shield size={20} color="var(--color-commerce)" />,       title: 'Compliance Ready',   desc: 'GOTS, OEKO-TEX, GRS, BCI, RWS — certification requirements documented for every fabric type.' },
];

export const TrustSection = () => {
  const getTestimonialColor = (col) => {
    if (col === 'var(--woven)') return 'var(--color-primary)';
    if (col === 'var(--accent-secondary)') return 'var(--color-marathon-yellow)';
    return 'var(--color-commerce)';
  };

  return (
    <section id="trust-section" className="band band-dark" style={{ position: 'relative' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Shield size={12} style={{ marginRight: '0.4rem' }} /> Trusted by Textile Professionals
          </div>
          <h2 className="display-md" style={{ fontWeight: 700, maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            Built for the Industry. Loved by the People in It.
          </h2>
          <p className="body-md text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            From junior designers to senior sourcing managers — Textile3D is the reference tool professionals actually keep open.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {STATS.map(s => (
            <div key={s.value} className="product-card-dark" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div className="display-md" style={{ fontWeight: 500, color: 'var(--color-primary)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1, marginBottom: '0.5rem' }}>{s.value}</div>
              <div className="body-strong" style={{ color: 'var(--color-on-dark)', fontSize: '1rem', margin: '0.5rem 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              <div className="caption-md text-muted">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Feature highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {FEATURES.map(f => (
            <div key={f.title} className="product-card-dark" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {f.icon}
                <h4 className="heading-md" style={{ margin: 0, color: 'var(--color-on-dark)' }}>{f.title}</h4>
              </div>
              <p className="body-sm text-muted" style={{ lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {TESTIMONIALS.map(t => {
            const color = getTestimonialColor(t.color);
            return (
              <div key={t.name} className="product-card-dark" style={{ display: 'flex', flexDirection: 'column', justify: 'space-between', gap: '1.5rem' }}>
                <p className="body-sm text-muted" style={{ fontStyle: 'italic', margin: 0, borderLeft: `3px solid ${color}`, paddingLeft: '1rem', lineHeight: 1.7 }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                    background: 'rgba(255,255,255,0.05)',
                    border: `1px solid ${color}`, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.2rem',
                  }}>
                    {t.emoji}
                  </div>
                  <div>
                    <p className="body-sm" style={{ margin: 0, fontWeight: 600, color: 'var(--color-on-dark)' }}>{t.name}</p>
                    <p className="caption-md text-muted" style={{ margin: 0 }}>{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          {TRUST_BADGES.map(b => (
            <div key={b.label} style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.6rem 1.1rem', borderRadius: 'var(--rounded-md)',
              background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)',
            }}>
              <span style={{ fontSize: '1.1rem' }}>{b.icon}</span>
              <div>
                <p className="body-sm" style={{ margin: 0, fontWeight: 600, color: 'var(--color-on-dark)' }}>{b.label}</p>
                <p className="caption-md text-muted" style={{ margin: 0 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
