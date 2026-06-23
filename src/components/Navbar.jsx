import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, Sparkles, Bookmark } from 'lucide-react';

const NAV_LINKS = [
  { href: '#garment-recommender',  label: 'Garments' },
  { href: '#library',              label: 'Library' },
  { href: '#finishing-guide',      label: 'Finishes' },
  { href: '#testing-guide',        label: 'Testing' },
  { href: '#fiber-guide',          label: 'Fibers' },
];

const ROLE_LIST_LABEL = {
  buyer:        'Shortlist',
  designer:     'Moodboard',
  sourcing:     'Spec List',
  technologist: 'Tech List',
};

export const Navbar = ({ shortlistCount = 0, onOpenShortlist, userRole }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        padding: '0.85rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--color-hairline-dark)',
        background: scrolled ? 'rgba(5, 8, 20, 0.95)' : 'rgba(5, 8, 20, 0.85)',
        transition: 'background 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          {/* Logo */}
          <a href="#main-content" style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Layers size={26} color="var(--color-primary)" />
              <span style={{ fontSize: '1.25rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-on-dark)' }}>
                Textile<span style={{ color: 'var(--color-primary)' }}>3D</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav — centered absolutely */}
          <div id="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {NAV_LINKS.map(link => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-body-dark)',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.92rem',
                    transition: 'color 0.2s',
                    padding: '0.4rem 0.75rem',
                    borderRadius: 'var(--rounded-md)',
                    background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                  }}
                  onMouseOver={e => { if (!isActive) e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { if (!isActive) e.currentTarget.style.color = 'var(--color-body-dark)'; }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right side actions */}
          <div id="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
            {/* Shortlist button */}
            <button
              onClick={onOpenShortlist}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.45rem 1rem', borderRadius: 'var(--rounded-full)',
                background: shortlistCount > 0 ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                border: '1px solid',
                borderColor: shortlistCount > 0 ? 'rgba(0, 242, 254, 0.25)' : 'var(--color-hairline-dark)',
                color: shortlistCount > 0 ? 'var(--color-primary)' : 'var(--color-body-dark)',
                cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem',
                transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
                position: 'relative',
              }}
              aria-label="Open shortlist"
            >
              <Bookmark size={13} />
              {ROLE_LIST_LABEL[userRole] || 'Shortlist'}
              {shortlistCount > 0 && (
                <span style={{
                  position: 'absolute', top: '-6px', right: '-6px',
                  minWidth: '18px', height: '18px', borderRadius: '50%',
                  background: 'var(--color-primary)', color: '#050814',
                  fontSize: '0.65rem', fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0 4px',
                }}>
                  {shortlistCount}
                </span>
              )}
            </button>

            {/* AI Chat CTA — always visible in nav */}
            <button
              onClick={() => {
                const chatBtn = document.getElementById('kaal-chat-toggle');
                if (chatBtn) chatBtn.click();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.1rem',
                borderRadius: 'var(--rounded-full)',
                background: 'rgba(0, 242, 254, 0.06)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                color: 'var(--color-primary)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.02em',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(0, 242, 254, 0.15)';
                e.currentTarget.style.borderColor = 'var(--color-primary)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(0, 242, 254, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
              }}
              aria-label="Open AI Chat"
            >
              <Sparkles size={14} />
              Ask Kaal AI
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-on-dark)',
              padding: '0.5rem'
            }}
            id="hamburger-btn"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 49,
          background: 'rgba(5,8,20,0.6)',
          backdropFilter: 'blur(4px)',
        }} onClick={() => setMobileOpen(false)}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '280px',
            height: '100%',
            background: 'var(--color-surface-dark-elevated)',
            borderLeft: '1px solid var(--color-hairline-dark)',
            padding: '5rem 2rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }} onClick={e => e.stopPropagation()}>
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: activeSection === link.href.replace('#','') ? 'var(--color-primary)' : 'var(--color-on-dark)',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '1.2rem',
                  padding: '1rem',
                  borderRadius: 'var(--rounded-md)',
                  background: activeSection === link.href.replace('#','') ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                  display: 'block',
                  transition: 'all 0.2s'
                }}
              >
                {link.label}
              </a>
            ))}
            {/* Shortlist in mobile menu */}
            <button
              onClick={() => { setMobileOpen(false); onOpenShortlist?.(); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                marginTop: '0.5rem', padding: '1rem', borderRadius: 'var(--rounded-md)',
                background: shortlistCount > 0 ? 'rgba(0, 242, 254, 0.08)' : 'rgba(0, 242, 254, 0.03)',
                border: `1px solid ${shortlistCount > 0 ? 'rgba(0, 242, 254, 0.2)' : 'var(--color-hairline-dark)'}`,
                color: shortlistCount > 0 ? 'var(--color-primary)' : 'var(--color-on-dark-mute)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', width: '100%',
              }}
            >
              <Bookmark size={18} /> {ROLE_LIST_LABEL[userRole] || 'Shortlist'}
              {shortlistCount > 0 && (
                <span style={{ marginLeft: 'auto', background: 'var(--color-primary)', color: '#fff', borderRadius: '50%', minWidth: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, padding: '0 5px' }}>
                  {shortlistCount}
                </span>
              )}
            </button>

            {/* AI Chat in mobile menu */}
            <button
              onClick={() => {
                setMobileOpen(false);
                const chatBtn = document.getElementById('kaal-chat-toggle');
                if (chatBtn) chatBtn.click();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                padding: '1rem',
                borderRadius: 'var(--rounded-md)',
                background: 'rgba(0, 242, 254, 0.06)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                color: 'var(--color-primary)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <Sparkles size={18} /> Ask Kaal AI
            </button>
          </div>
        </div>
      )}

      {/* Mobile CSS */}
      <style>{`
        @media (max-width: 768px) {
          #desktop-nav    { display: none !important; }
          #navbar-actions { display: none !important; }
          #hamburger-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
};
