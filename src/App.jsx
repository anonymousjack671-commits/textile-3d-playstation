import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LibraryGrid } from './components/LibraryGrid';
import { TextileDetail } from './components/TextileDetail';
import { GarmentRecommender } from './components/GarmentRecommender';
import { FiberGuide } from './components/FiberGuide';
import { FinishingGuide } from './components/FinishingGuide';
import { TestingGuide } from './components/TestingGuide';
import { TexaiChat } from './components/TexaiChat';
import { ShortlistPanel } from './components/ShortlistPanel';
import { TrustSection } from './components/TrustSection';
import { OnboardingModal } from './components/OnboardingModal';
import { RecentlyViewed } from './components/RecentlyViewed';
import { MarketWatchPanel } from './components/MarketWatchPanel';
import { NewsSectionPanel } from './components/NewsSectionPanel';
import { allTextiles } from './data/textiles';

// ── Back to Top button ────────────────────────────────────────────────────────
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="back-to-top-btn"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 100,
        width: '50px',
        height: '50px',
        borderRadius: 'var(--rounded-full)',
        background: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(0, 242, 254, 0.4)',
        transition: 'transform 0.2s',
      }}
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      ↑
    </button>
  );
};

// ── Footer ─────────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ borderTop: '1px solid var(--color-hairline-dark)', padding: '4rem 0 2rem 0', marginTop: '4rem', background: 'var(--color-canvas-dark)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

        {/* Brand */}
        <div>
          <h3 className="heading-xl" style={{ marginBottom: '0.75rem', fontWeight: 500 }}>
            <span style={{ color: 'var(--color-primary)' }}>Textile</span><span style={{ color: 'var(--color-on-dark)' }}>3D</span>
          </h3>
          <p className="body-sm text-muted" style={{ lineHeight: 1.6 }}>
            An interactive 3D library of fabric structures. Built for designers, buyers, and textile professionals worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--color-on-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[['#fiber-guide','Fiber Guide'],['#library','Textile Library'],['#garment-recommender','Garment Recommender'],['#finishing-guide','Finishing Guide'],['#testing-guide','Testing Standards']].map(([href, label]) => (
              <li key={href}><a href={href} style={{ color: 'var(--color-on-dark-mute)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseOver={e => e.target.style.color = 'var(--color-primary)'}
                onMouseOut={e => e.target.style.color = 'var(--color-on-dark-mute)'}
              >{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--color-on-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <a href="tel:+919717831115" style={{ color: 'var(--color-on-dark-mute)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
               onMouseOver={e => e.currentTarget.style.color = 'var(--color-primary)'}
               onMouseOut={e => e.currentTarget.style.color = 'var(--color-on-dark-mute)'}
            >
              📞 +91 971 783 1115
            </a>
            <p className="body-sm text-muted" style={{ lineHeight: 1.5 }}>
              For trade inquiries, sourcing support, or educational partnerships — reach out via WhatsApp or call directly.
            </p>
          </div>
        </div>

        {/* About */}
        <div>
          <h4 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--color-on-dark)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>About</h4>
          <p className="body-sm text-muted" style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
            Textile3D covers woven, knitted, and sustainable fabrics with interactive 3D visualization, GSM data, testing standards, and garment-to-fabric mapping.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://wa.me/919717831115" target="_blank" rel="noopener noreferrer"
               style={{ padding: '0.5rem 1.25rem', borderRadius: 'var(--rounded-full)', background: 'rgba(77,184,122,0.15)', color: '#4db87a', fontSize: '0.85rem', textDecoration: 'none', border: '1px solid rgba(77,184,122,0.3)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}
            >💬 WhatsApp</a>
          </div>
        </div>

      </div>

      <div style={{ borderTop: '1px solid var(--color-hairline-dark)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="caption-md text-muted">© 2026 Textile3D. Built for educational purposes. Prices shown in INR — indicative only.</p>
        <p className="caption-md text-muted">Data accuracy varies by region and market conditions. Sourcing hubs: India &amp; Pakistan.</p>
      </div>
    </div>
  </footer>
);

function App() {
  // ── State — all localStorage-persisted ──────────────────────────────────────
  const [selectedFabric, setSelectedFabric] = useState(null);

  const [userRole, setUserRole] = useState(() => {
    try { return JSON.parse(localStorage.getItem('t3d_userRole')) || null; }
    catch { return null; }
  });

  const [shortlist, setShortlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('t3d_shortlist')) || []; }
    catch { return []; }
  });

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try { return JSON.parse(localStorage.getItem('t3d_recentlyViewed')) || []; }
    catch { return []; }
  });

  const [shortlistOpen, setShortlistOpen] = useState(false);

  // ── Persist to localStorage whenever state changes ───────────────────────────
  useEffect(() => {
    try { localStorage.setItem('t3d_userRole', JSON.stringify(userRole)); }
    catch {}
  }, [userRole]);

  useEffect(() => {
    try { localStorage.setItem('t3d_shortlist', JSON.stringify(shortlist)); }
    catch {}
  }, [shortlist]);

  useEffect(() => {
    try { localStorage.setItem('t3d_recentlyViewed', JSON.stringify(recentlyViewed)); }
    catch {}
  }, [recentlyViewed]);

  const trackViewed = (fabric) => {
    if (fabric === null) {
      setSelectedFabric(null);
      return;
    }
    if (selectedFabric && selectedFabric.id === fabric.id) {
      setSelectedFabric(null);
      return;
    }
    setSelectedFabric(fabric);
    setRecentlyViewed(prev => {
      const filtered = prev.filter(f => f.id !== fabric.id);
      return [fabric, ...filtered].slice(0, 8);
    });
  };

  const toggleShortlist = (fabric) => {
    setShortlist(prev =>
      prev.find(f => f.id === fabric.id)
        ? prev.filter(f => f.id !== fabric.id)
        : [...prev, fabric]
    );
  };

  const isShortlisted = (fabricId) => shortlist.some(f => f.id === fabricId);

  return (
    <>
      <Navbar
        shortlistCount={shortlist.length}
        onOpenShortlist={() => setShortlistOpen(true)}
        userRole={userRole}
      />
      <main id="main-content">
        <Hero userRole={userRole} onRoleSelect={setUserRole} />
        <MarketWatchPanel />
        <NewsSectionPanel />
        <GarmentRecommender onSelectFabric={trackViewed} />
        <LibraryGrid
          onSelectFabric={trackViewed}
          selectedId={selectedFabric?.id}
          userRole={userRole}
          shortlist={shortlist}
          onToggleShortlist={toggleShortlist}
          isShortlisted={isShortlisted}
        />
        {selectedFabric ? (
          <TextileDetail
            fabric={selectedFabric}
            onBack={() => {
              setSelectedFabric(null);
              const libraryEl = document.getElementById('library');
              if (libraryEl) {
                const yOffset = -80; // Height of the sticky navbar
                const y = libraryEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            isShortlisted={isShortlisted(selectedFabric?.id)}
            onToggleShortlist={toggleShortlist}
            shortlist={shortlist}
          />
        ) : (
          /* Empty state — visible until user clicks a fabric card */
          <section id="details" className="band-dark" style={{ padding: '3rem 0' }}>
            <div className="container">
              <div style={{
                border: '1px dashed var(--color-hairline-dark)',
                borderRadius: 'var(--rounded-md)',
                padding: '3rem 2rem',
                textAlign: 'center',
                background: 'var(--color-surface-dark-card)',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>👆</div>
                <p className="body-md" style={{ color: 'var(--color-on-dark)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Click any fabric card above to view full specs
                </p>
                <p className="body-sm text-muted" style={{ maxWidth: '420px', margin: '0 auto' }}>
                  GSM data, fiber composition, wash care, CO₂ footprint, sourcing hubs, and more — all in one place.
                </p>
              </div>
            </div>
          </section>
        )}

        <FinishingGuide />
        <TestingGuide />
        <FiberGuide />
        <TrustSection />
        <RecentlyViewed fabrics={recentlyViewed} onSelect={trackViewed} />
      </main>
      <Footer />
      <TexaiChat userRole={userRole} selectedFabric={selectedFabric} />
      <ShortlistPanel
        open={shortlistOpen}
        onClose={() => setShortlistOpen(false)}
        shortlist={shortlist}
        onRemove={toggleShortlist}
        onSelectFabric={(fabric) => { setSelectedFabric(fabric); setShortlistOpen(false); }}
        userRole={userRole}
      />
      <OnboardingModal userRole={userRole} />
      <BackToTop />
    </>
  );
}

export default App;
