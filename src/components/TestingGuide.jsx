import React from 'react';
import { TESTING_STANDARDS } from '../data/textiles';

export const TestingGuide = () => {
  if (!TESTING_STANDARDS || Object.keys(TESTING_STANDARDS).length === 0) return null;

  // Helper to format camelCase and snake_case category names to Title Case
  const formatCategory = (str) => {
    const withSpaces = str.replace(/_/g, ' ');
    const result = withSpaces.replace(/([A-Z])/g, ' $1');
    return result.trim().replace(/\b\w/g, c => c.toUpperCase());
  };

  const getOrgColor = (org) => {
    const o = org ? org.toUpperCase() : '';
    if (o.includes('ISO')) return { bg: 'var(--color-primary)', text: '#ffffff' };
    if (o.includes('AATCC')) return { bg: 'var(--color-commerce)', text: '#ffffff' };
    if (o.includes('ASTM')) return { bg: 'var(--color-marathon-yellow)', text: '#000000' };
    return { bg: 'rgba(255, 255, 255, 0.2)', text: 'var(--color-on-dark)' };
  };

  return (
    <section id="testing-guide" className="band band-elevated" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">🧪 Testing Standards</div>
          <h2 className="display-md" style={{ fontWeight: 300, maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
            Testing <span className="text-gradient">Standards</span>
          </h2>
          <p className="body-md text-muted" style={{ maxWidth: '600px', margin: '0 auto 0 auto', lineHeight: 1.6 }}>
            A comprehensive guide to AATCC, ISO, and ASTM testing methods used to ensure textile quality, durability, and safety.
          </p>
        </div>

        {Object.entries(TESTING_STANDARDS).map(([category, tests], catIdx) => (
          <div key={catIdx} style={{ marginBottom: '4rem' }}>
            <h3 className="heading-xl" style={{ color: 'var(--color-on-dark)', marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '3px solid var(--color-primary)' }}>
              {formatCategory(category)}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {tests.map((test, idx) => {
                const orgStyle = getOrgColor(test.organization);
                return (
                  <div key={idx} className="product-card-dark" style={{ position: 'relative', overflow: 'hidden', padding: '2.5rem 2rem' }}>
                    {/* Standard Ribbon */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '1.2rem', 
                      right: '-2.2rem', 
                      background: orgStyle.bg, 
                      color: orgStyle.text, 
                      padding: '0.2rem 3rem', 
                      transform: 'rotate(45deg)', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      letterSpacing: '0.05em',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
                    }}>
                      {test.organization}
                    </div>

                    <div style={{ marginBottom: '1.5rem', paddingRight: '4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                        <h4 className="heading-xl" style={{ margin: 0, fontWeight: 500, color: 'var(--color-on-dark)' }}>{test.code}</h4>
                        {test.equivalentISO && (
                          <span style={{ background: 'var(--color-surface-dark-elevated)', border: '1px solid var(--color-hairline-dark)', padding: '0.2rem 0.6rem', borderRadius: 'var(--rounded-sm)', fontSize: '0.8rem', color: 'var(--color-on-dark-mute)' }}>
                            Eq: {test.equivalentISO}
                          </span>
                        )}
                      </div>
                      <p className="body-md" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{test.title}</p>
                    </div>

                    <div id="testing-inner-grid" className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: '2rem' }}>
                      {/* Left Column */}
                      <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                          <strong className="body-sm" style={{ display: 'block', color: 'var(--color-on-dark)', marginBottom: '0.3rem', fontWeight: 600 }}>🔍 What it checks:</strong>
                          <p className="body-sm" style={{ color: 'var(--color-on-dark)', fontSize: '1rem' }}>{test.simpleWhat}</p>
                        </div>
                        
                        {test.whyItMatters && (
                          <div style={{ marginBottom: '1.5rem', background: 'rgba(213, 59, 0, 0.08)', borderLeft: '3px solid var(--color-commerce)', padding: '1rem', borderRadius: '0 var(--rounded-md) var(--rounded-md) 0' }}>
                            <strong className="caption-md" style={{ display: 'block', color: 'var(--color-commerce)', marginBottom: '0.3rem', fontWeight: 600 }}>⚠️ Why it matters:</strong>
                            <p className="body-sm text-muted" style={{ margin: 0 }}>{test.whyItMatters}</p>
                          </div>
                        )}

                        {test.principle && (
                          <div>
                            <strong className="caption-md" style={{ display: 'block', color: 'var(--color-on-dark)', marginBottom: '0.3rem', fontWeight: 600 }}>⚙️ Principle:</strong>
                            <p className="body-sm text-muted" style={{ lineHeight: 1.5 }}>
                              {typeof test.principle === 'string' ? test.principle : JSON.stringify(test.principle)}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div style={{ background: 'var(--color-surface-dark-elevated)', border: '1px solid var(--color-hairline-dark)', padding: '1.5rem', borderRadius: 'var(--rounded-md)' }}>
                        {test.typicalRequirement && (
                          <div style={{ marginBottom: '1.5rem' }}>
                            <strong className="caption-md" style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>✅ Typical Requirement</strong>
                            {typeof test.typicalRequirement === 'string' ? (
                              <p className="body-sm" style={{ color: 'var(--color-on-dark)', margin: 0 }}>{test.typicalRequirement}</p>
                            ) : (
                              <ul className="body-sm" style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--color-on-dark)' }}>
                                {Object.entries(test.typicalRequirement).map(([k, v], i) => (
                                  <li key={i} style={{ marginBottom: '0.3rem' }}><strong style={{ fontWeight: 600 }}>{k.replace(/_/g, ' ')}:</strong> {v}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}

                        {test.scale && (
                          <div style={{ marginBottom: '1.5rem' }}>
                            <strong className="caption-md" style={{ display: 'block', color: 'var(--color-marathon-yellow)', marginBottom: '0.5rem', fontWeight: 600 }}>Scale / Rating</strong>
                            {typeof test.scale === 'string' ? (
                              <p className="body-sm text-muted" style={{ margin: 0 }}>{test.scale}</p>
                            ) : (
                              <ul className="body-sm text-muted" style={{ margin: 0, paddingLeft: '1.2rem' }}>
                                {Object.entries(test.scale).map(([k, v], i) => (
                                  <li key={i} style={{ marginBottom: '0.2rem' }}><strong style={{ fontWeight: 600 }}>{k}:</strong> {v}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}

                        {test.applicableTo && Array.isArray(test.applicableTo) && (
                          <div>
                            <strong className="caption-md" style={{ display: 'block', color: 'var(--color-on-dark)', marginBottom: '0.5rem', fontWeight: 600 }}>Applies to:</strong>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                              {test.applicableTo.map((app, i) => (
                                <span key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--color-hairline-dark)', padding: '0.3rem 0.8rem', borderRadius: 'var(--rounded-full)', fontSize: '0.8rem', color: 'var(--color-on-dark-mute)' }}>
                                  {app}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </div>
      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 480px) {
          #testing-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
