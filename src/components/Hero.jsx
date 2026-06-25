import React from 'react';
import { ArrowRight, Zap, X, BarChart3, Layers, Sparkles, Bot } from 'lucide-react';

// ── Role definitions ──────────────────────────────────────────────────────────
const ROLES = [
  { key: 'buyer',        emoji: '🛍️', label: 'Buyer' },
  { key: 'designer',     emoji: '🎨', label: 'Designer' },
  { key: 'sourcing',     emoji: '🔗', label: 'Sourcing Manager' },
  { key: 'technologist', emoji: '🔬', label: 'Technologist' },
];

const ROLE_CONTENT = {
  buyer: {
    tagline: 'Find the right fabric at the right price — faster than ever.',
    tools: [
      { icon: '🗂️', label: 'Textile Library',       desc: 'Browse 200+ fabrics filtered by GSM, weight & type',   href: '#library' },
      { icon: '📈', label: 'Market Intelligence',    desc: 'Live indicative pricing from India & Pakistan hubs',    href: '#library' },
      { icon: '👗', label: 'Garment Recommender',    desc: 'Find the right fabric matched to your product brief',   href: '#garment-recommender' },
      { icon: '🤖', label: 'Ask TEXAI',            desc: 'Tell TEXAI what you need — get matched in seconds',      action: 'chat' },
    ],
    color: 'var(--color-primary)',
    hex: '#00f2fe',
    bg: 'rgba(0, 242, 254, 0.08)',
    border: 'rgba(0, 242, 254, 0.25)',
  },
  designer: {
    tagline: 'Explore textures, drape and structure to bring your vision to life.',
    tools: [
      { icon: '🧊', label: '3D Fabric Viewer',       desc: 'Visualise weave structures interactively in 3D',        href: '#library' },
      { icon: '🌿', label: 'Fiber Guide',             desc: 'Understand how fibres affect drape, feel & finish',     href: '#fiber-guide' },
      { icon: '✨', label: 'Finishing Guide',         desc: 'Explore finishes that transform fabric appearance',     href: '#finishing-guide' },
      { icon: '👗', label: 'Garment Recommender',    desc: 'Match fabric properties to your design intent',         href: '#garment-recommender' },
    ],
    color: 'var(--color-marathon-yellow)',
    hex: '#a259ff',
    bg: 'rgba(162, 89, 255, 0.08)',
    border: 'rgba(162, 89, 255, 0.25)',
  },
  sourcing: {
    tagline: 'Streamline supplier selection with specs, pricing & compliance data.',
    tools: [
      { icon: '📋', label: 'Full Tech Specs',         desc: 'GSM ranges, construction details & yarn counts',        href: '#library' },
      { icon: '📈', label: 'Market Intelligence',    desc: 'Compare India vs Pakistan pricing & lead times',        href: '#library' },
      { icon: '🧪', label: 'Testing Standards',      desc: 'Check compliance requirements before sampling',         href: '#testing-guide' },
      { icon: '🤖', label: 'Ask TEXAI',            desc: 'Get spec insights & supplier guidance instantly',       action: 'chat' },
    ],
    color: 'var(--color-primary)',
    hex: '#00f2fe',
    bg: 'rgba(0, 242, 254, 0.08)',
    border: 'rgba(0, 242, 254, 0.25)',
  },
  technologist: {
    tagline: 'Deep-dive into construction, testing standards & technical specifications.',
    tools: [
      { icon: '🧪', label: 'Testing Standards',      desc: 'ISO, AATCC & ASTM standards for all fabric types',      href: '#testing-guide' },
      { icon: '🗂️', label: 'Textile Library',        desc: 'Full construction data: weave type, yarn count, GSM',   href: '#library' },
      { icon: '🌿', label: 'Fiber Guide',             desc: 'Detailed fibre properties, blends & performance data',  href: '#fiber-guide' },
      { icon: '⚗️', label: 'Finishing Guide',        desc: 'Chemical & mechanical finishing processes explained',   href: '#finishing-guide' },
    ],
    color: 'var(--color-commerce)',
    hex: '#ff007f',
    bg: 'rgba(255, 0, 127, 0.08)',
    border: 'rgba(255, 0, 127, 0.25)',
  },
};

const STATS = [
  { value: '200+', label: 'Fabric Structures',    icon: <Layers size={20} /> },
  { value: '3D',   label: 'Interactive Viewer',   icon: <Sparkles size={20} /> },
  { value: 'Live', label: 'Market Intelligence',  icon: <BarChart3 size={20} /> },
  { value: 'AI',   label: 'Smart Recommender',    icon: <Bot size={20} /> },
];

// ── Toolkit card ─────────────────────────────────────────────────────────────
const ToolkitCard = ({ roleKey, onClear }) => {
  const content = ROLE_CONTENT[roleKey];
  const roleLabel = ROLES.find(r => r.key === roleKey)?.label || roleKey;

  const handleToolClick = (tool) => {
    if (tool.action === 'chat') {
      const chatBtn = document.getElementById('texai-chat-toggle');
      if (chatBtn) chatBtn.click();
    }
  };

  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto 2.5rem auto',
      padding: '1.75rem 2rem',
      borderRadius: 'var(--rounded-md)',
      background: content.bg,
      border: `1px solid ${content.border}`,
      backdropFilter: 'blur(12px)',
      animation: 'fadeSlideIn 0.3s ease',
      position: 'relative',
    }}>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: '0.75rem', color: content.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem', fontFamily: 'Inter, sans-serif' }}>
            Your Toolkit — {roleLabel}
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-on-dark)', lineHeight: 1.5, maxWidth: '520px', fontFamily: 'Inter, sans-serif' }}>
            {content.tagline}
          </p>
        </div>
        <button onClick={onClear} aria-label="Clear role" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-dark-mute)', padding: '0.25rem', flexShrink: 0, marginLeft: '1rem' }}>
          <X size={16} />
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: '0.65rem' }}>
        {content.tools.map(tool =>
          tool.action ? (
            <button key={tool.label} onClick={() => handleToolClick(tool)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem', padding: '0.85rem 1rem', borderRadius: 'var(--rounded-md)', background: 'rgba(0, 242, 254, 0.03)', border: '1px solid var(--color-hairline-dark)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', color: 'inherit' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = content.hex; e.currentTarget.style.background = content.bg; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-hairline-dark)'; e.currentTarget.style.background = 'rgba(0, 242, 254, 0.03)'; }}
            >
              <span style={{ fontSize: '1.1rem' }}>{tool.icon}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-on-dark)', fontFamily: 'Inter, sans-serif' }}>{tool.label}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-on-dark-mute)', lineHeight: 1.4, fontFamily: 'Inter, sans-serif' }}>{tool.desc}</span>
            </button>
          ) : (
            <a key={tool.label} href={tool.href}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem', padding: '0.85rem 1rem', borderRadius: 'var(--rounded-md)', background: 'rgba(0, 242, 254, 0.03)', border: '1px solid var(--color-hairline-dark)', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = content.hex; e.currentTarget.style.background = content.bg; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-hairline-dark)'; e.currentTarget.style.background = 'rgba(0, 242, 254, 0.03)'; }}
            >
              <span style={{ fontSize: '1.1rem' }}>{tool.icon}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-on-dark)', fontFamily: 'Inter, sans-serif' }}>{tool.label}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-on-dark-mute)', lineHeight: 1.4, fontFamily: 'Inter, sans-serif' }}>{tool.desc}</span>
            </a>
          )
        )}
      </div>
    </div>
  );
};

// ── Hero ──────────────────────────────────────────────────────────────────────
export const Hero = ({ userRole, onRoleSelect }) => {
  return (
    <section className="band band-dark" style={{ padding: '7rem 0 5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Cyber-Tech Radial Glow */}
      <div style={{
        position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 242, 254, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', top: '0', left: '60%', transform: 'translateX(-50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(162, 89, 255, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Top badge */}
        <div className="section-badge" style={{
          marginBottom: '2.5rem',
          color: 'var(--color-primary)',
          borderColor: 'rgba(0, 242, 254, 0.2)',
          background: 'rgba(0, 242, 254, 0.06)'
        }}>
          <Zap size={12} />
          Built for Textile Professionals
        </div>

        {/* Headline */}
        <h1 className="display-xl" style={{
          margin: '0 auto 1.75rem auto',
          maxWidth: '820px',
          color: 'var(--color-on-dark)'
        }}>
          Find the Right Fabric.<br />
          <span className='text-gradient'>Powered by Intelligence.</span>
        </h1>

        {/* Subtitle */}
        <p className="body-md" style={{
          maxWidth: '520px',
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.6,
          color: 'var(--color-body-dark)'
        }}>
          Your complete textile intelligence hub — 3D visualisation, AI garment matching,
          live market prices and full technical specs.
        </p>

        {/* Role chips */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          flexWrap: 'wrap', gap: '0.55rem',
          marginBottom: userRole ? '1.5rem' : '2.5rem',
          alignItems: 'center',
        }}>
          <span style={{ color: 'var(--color-body-dark)', fontSize: '0.85rem', marginRight: '0.15rem', fontFamily: 'Inter, sans-serif' }}>I am a</span>
          {ROLES.map(role => {
            const isActive = userRole === role.key;
            const rc = ROLE_CONTENT[role.key];
            return (
              <button
                key={role.key}
                onClick={() => onRoleSelect(isActive ? null : role.key)}
                aria-pressed={isActive}
                style={{
                  padding: '0.42rem 1.2rem',
                  borderRadius: 'var(--rounded-full)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'Inter, sans-serif',
                  border: `1px solid ${isActive ? rc.hex : 'rgba(0, 242, 254, 0.1)'}`,
                  background: isActive ? rc.bg : 'rgba(0, 242, 254, 0.04)',
                  color: isActive ? '#fff' : 'var(--color-on-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseOver={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = rc.hex;
                    e.currentTarget.style.background = rc.bg;
                  }
                }}
                onMouseOut={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.1)';
                    e.currentTarget.style.background = 'rgba(0, 242, 254, 0.04)';
                  }
                }}
              >
                {role.emoji} {role.label}
              </button>
            );
          })}
        </div>

        {/* Toolkit card */}
        {userRole && <ToolkitCard roleKey={userRole} onClear={() => onRoleSelect(null)} />}

        {/* CTA buttons */}
        <div
          className="btn-stack-mobile"
          style={{
            display: 'flex', justifyContent: 'center',
            gap: '0.85rem', flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          <a href="#garment-recommender" style={{ textDecoration: 'none' }}>
            <button id="hero-primary-cta" className="btn btn-primary" style={{ gap: '0.5rem' }}>
              AI Garment Recommender <ArrowRight size={17} />
            </button>
          </a>
          <a href="#library" style={{ textDecoration: 'none' }}>
            <button id="hero-secondary-cta" className="btn btn-secondary-dark">
              Explore Fabric Library
            </button>
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="stats-bar-mobile"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            maxWidth: '660px',
            margin: '0 auto',
            background: 'var(--color-surface-dark-elevated)',
            border: '1px solid var(--color-hairline-dark)',
            borderRadius: 'var(--rounded-md)',
            overflow: 'hidden',
          }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{
              textAlign: 'center',
              padding: '1.6rem 0.75rem',
              borderRight: i < STATS.length - 1 ? '1px solid var(--color-hairline-dark)' : 'none',
            }}>
              <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.6rem', fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1, marginBottom: '0.3rem',
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.73rem', color: 'var(--color-on-dark-mute)', letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
