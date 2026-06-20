import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles, Bookmark, MessageCircle } from 'lucide-react';

const STORAGE_KEY = 'textile3d_onboarded_v1';

const STEPS = [
  {
    icon: <Sparkles size={32} color="var(--accent-primary)" />,
    emoji: '🔍',
    title: 'Describe What You Need',
    desc: 'Skip the dropdowns. Just type your brief in plain English — "lightweight breathable cotton for summer shirts" — and get ranked fabric matches instantly.',
    cta: 'Try the Brief Matcher',
    href: '#brief-matcher',
    color: 'var(--accent-primary)',
    bg: 'rgba(200,169,110,0.06)',
    border: 'rgba(200,169,110,0.2)',
  },
  {
    icon: <Bookmark size={32} color="var(--accent-secondary)" />,
    emoji: '📌',
    title: 'Save Your Favourites',
    desc: 'Click Save on any fabric card to build your Shortlist. Compare fabrics side-by-side and export to CSV — perfect for sharing with your team or supplier.',
    cta: 'Browse the Library',
    href: '#library',
    color: 'var(--accent-secondary)',
    bg: 'rgba(124,109,171,0.06)',
    border: 'rgba(124,109,171,0.2)',
  },
  {
    icon: <MessageCircle size={32} color="var(--sustainable)" />,
    emoji: '🤖',
    title: 'Ask Kaal AI Anything',
    desc: 'Kaal is your textile intelligence assistant. Ask about GSM, certifications, supplier hubs, testing standards — or just describe a garment and get fabric recommendations.',
    cta: 'Open Kaal Chat',
    action: 'chat',
    color: 'var(--sustainable)',
    bg: 'rgba(77,184,122,0.06)',
    border: 'rgba(77,184,122,0.2)',
  },
];

export const OnboardingModal = ({ userRole }) => {
  const [visible, setVisible] = useState(false);
  const [step, setStep]       = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      const done = localStorage.getItem(STORAGE_KEY);
      if (!done) {
        const timer = setTimeout(() => setVisible(true), 1800);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const dismiss = (markDone = true) => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      if (markDone) {
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
      }
    }, 280);
  };

  const handleCTA = (s) => {
    if (s.action === 'chat') {
      dismiss();
      setTimeout(() => {
        const btn = document.getElementById('kaal-chat-toggle');
        if (btn) btn.click();
      }, 350);
    } else {
      dismiss();
      setTimeout(() => {
        const el = document.querySelector(s.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else dismiss();
  };

  if (!visible) return null;

  const current = STEPS[step];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => dismiss()}
        style={{
          position: 'fixed', inset: 0, zIndex: 300,
          background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)',
          opacity: closing ? 0 : 1, transition: 'opacity 0.28s ease',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', top: '50%', left: '50%', zIndex: 301,
        transform: 'translate(-50%, -50%)',
        width: 'min(520px, calc(100vw - 2rem))',
        background: 'rgba(10,12,22,0.98)',
        border: `1px solid ${current.border}`,
        borderRadius: '24px', padding: '2.5rem',
        backdropFilter: 'blur(24px)',
        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
        opacity: closing ? 0 : 1,
        transition: 'opacity 0.28s ease, transform 0.28s ease',
      }}>
        {/* Close */}
        <button
          onClick={() => dismiss()}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', padding: '0.25rem',
          }}
        >
          <X size={18} />
        </button>

        {/* Step indicator */}
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '2rem' }}>
          {STEPS.map((_, i) => (
            <div
              key={i}
              style={{
                height: '3px', flex: 1, borderRadius: '2px',
                background: i <= step ? current.color : 'rgba(255,255,255,0.1)',
                transition: 'background 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => setStep(i)}
            />
          ))}
        </div>

        {/* Content */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '20px', margin: '0 auto 1.5rem',
            background: current.bg, border: `1px solid ${current.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {current.icon}
          </div>

          <div style={{ fontSize: '0.72rem', color: current.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem' }}>
            Step {step + 1} of {STEPS.length}
          </div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>
            {current.title}
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '380px', margin: '0 auto' }}>
            {current.desc}
          </p>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
          <button
            onClick={() => handleCTA(current)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.75rem 1.5rem', borderRadius: '10px',
              background: `linear-gradient(135deg, ${current.color}, ${current.color}cc)`,
              border: 'none', color: current.color === 'var(--accent-primary)' ? '#000' : '#fff',
              fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer',
            }}
          >
            {current.cta} <ArrowRight size={15} />
          </button>

          {step < STEPS.length - 1 ? (
            <button
              onClick={next}
              style={{
                padding: '0.75rem 1.25rem', borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid var(--glass-border)',
                color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer',
              }}
            >
              Next tip →
            </button>
          ) : (
            <button
              onClick={() => dismiss()}
              style={{
                padding: '0.75rem 1.25rem', borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid var(--glass-border)',
                color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer',
              }}
            >
              Get started
            </button>
          )}
        </div>

        {/* Skip */}
        <p style={{ textAlign: 'center', marginTop: '1.25rem', margin: '1.25rem 0 0' }}>
          <button
            onClick={() => dismiss()}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Skip tour
          </button>
        </p>
      </div>
    </>
  );
};
