import React, { useState } from 'react';
import { X, Trash2, ChevronRight, Download, BarChart2 } from 'lucide-react';

const ROLE_SAVE_LABEL = {
  buyer:        '🛍️ Shortlist',
  designer:     '🎨 Moodboard',
  sourcing:     '📋 Spec List',
  technologist: '🔬 Tech List',
};

const COMPARE_FIELDS = [
  { key: 'category',      label: 'Category' },
  { key: 'gsmRange',      label: 'GSM Range',      fallback: f => f.gsm?.min ? `${f.gsm.min}–${f.gsm.max}` : (f.variants?.[0]?.gsm?.min ? `${f.variants[0].gsm.min}–${f.variants[0].gsm.max}` : '—') },
  { key: 'weightTag',     label: 'Weight Class' },
  { key: 'keyProperty',   label: 'Key Property',   fallback: f => f.description?.slice(0,80) || '—' },
  { key: '_fiber',        label: 'Fiber',          fallback: f => f.fiber || f.composition || f.variants?.[0]?.blend || '—' },
  { key: '_price',        label: 'Starting Price', fallback: f => {
    const p = f.priceIndia;
    if (!p) return '—';
    const vals = Object.values(p);
    return vals[0] || '—';
  }},
  { key: 'co2KgPerKgFiber', label: 'CO₂ (kg/kg)',  fallback: f => f.co2KgPerKgFiber ? `${f.co2KgPerKgFiber} kg` : '—',
    bestFn: (vals) => { const nums = vals.map(v => parseFloat(v)).filter(n => !isNaN(n)); return nums.length ? Math.min(...nums) : null; },
    isNumeric: true },
  { key: 'decarbScore',   label: 'Eco Score' },
  { key: '_uses',         label: 'Top Uses',       fallback: f => f.uses?.slice(0,2).join(', ') || f.variants?.[0]?.uses?.slice(0,2).join(', ') || '—' },
  { key: '_sourcing',     label: 'Sourcing Hubs',  fallback: f => f.indiaSourcing?.slice(0,2).join(', ') || f.variants?.[0]?.indiaSourcing?.slice(0,2).join(', ') || '—' },
  { key: 'certifications',label: 'Certifications', fallback: f => Array.isArray(f.certifications) ? f.certifications.slice(0,2).join(', ') : (f.certifications || f.cert || '—') },
  { key: 'badge',         label: 'Type',           fallback: f => f.badgeText || f.badge || '—' },
];

const getField = (fabric, field) => {
  // Virtual keys prefixed with _ use only fallback
  if (field.key.startsWith('_')) return field.fallback ? field.fallback(fabric) : '—';
  const val = fabric[field.key];
  if (val !== undefined && val !== null && val !== '') return String(val);
  if (field.fallback) return field.fallback(fabric);
  return '—';
};

export const ShortlistPanel = ({ open, onClose, shortlist, onRemove, onSelectFabric, userRole }) => {
  const [view, setView] = useState('list'); // 'list' | 'compare'
  const listLabel = ROLE_SAVE_LABEL[userRole] || '📌 Shortlist';

  const exportCSV = () => {
    const headers = ['Name', 'Category', 'GSM Range', 'Weight', 'Key Property'];
    const rows = shortlist.map(f => [
      f.name,
      f.category || '',
      f.gsm?.min ? `${f.gsm.min}–${f.gsm.max}` : (f.gsmRange || ''),
      f.weightTag || '',
      f.keyProperty || f.description || '',
    ]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'fabric-shortlist.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
        }}
      />

      {/* Panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
        width: 'min(480px, 100vw)',
        background: 'rgba(10,12,22,0.98)',
        borderLeft: '1px solid var(--glass-border)',
        backdropFilter: 'blur(24px)',
        display: 'flex', flexDirection: 'column',
        animation: 'slideInRight 0.28s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to   { transform: translateX(0);    opacity: 1; }
          }
          @media (max-width: 480px) {
            /* Shortlist panel full-width on phones */
            .shortlist-panel-inner { padding: 1rem !important; }
            .shortlist-header      { padding: 1rem !important; flex-wrap: wrap !important; gap: 0.5rem !important; }
            .shortlist-compare-table { overflow-x: auto !important; -webkit-overflow-scrolling: touch; }
          }
        `}</style>

        {/* Header */}
        <div className="shortlist-header" style={{
          padding: '1.5rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{listLabel}</h3>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {shortlist.length} fabric{shortlist.length !== 1 ? 's' : ''} saved
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {shortlist.length > 1 && (
              <button
                onClick={() => setView(v => v === 'compare' ? 'list' : 'compare')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem',
                  background: view === 'compare' ? 'rgba(200,169,110,0.15)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${view === 'compare' ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                  color: view === 'compare' ? 'var(--accent-primary)' : 'var(--text-muted)',
                  cursor: 'pointer', fontWeight: 600,
                }}
              >
                <BarChart2 size={13} /> Compare
              </button>
            )}
            {shortlist.length > 0 && (
              <button
                onClick={exportCSV}
                title="Export as CSV"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.8rem',
                  background: 'rgba(77,184,122,0.08)', border: '1px solid rgba(77,184,122,0.25)',
                  color: 'var(--sustainable)', cursor: 'pointer', fontWeight: 600,
                }}
              >
                <Download size={13} /> Export
              </button>
            )}
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: '0.3rem' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem' }}>

          {shortlist.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📌</div>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                Your {listLabel.split(' ')[1] || 'list'} is empty
              </p>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                Click the save button on any fabric card in the library to add it here.
              </p>
            </div>
          )}

          {/* ── LIST VIEW ── */}
          {view === 'list' && shortlist.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {shortlist.map(fabric => (
                <div
                  key={fabric.id}
                  style={{
                    padding: '1rem 1.1rem',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--glass-border)',
                    display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(200,169,110,0.35)'}
                  onMouseOut={e => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                >
                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ margin: '0 0 0.2rem', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {fabric.name}
                    </p>
                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {fabric.category}
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {(fabric.gsmRange || (fabric.gsm?.min && `${fabric.gsm.min}–${fabric.gsm.max} GSM`)) && (
                        <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(200,169,110,0.1)', color: 'var(--accent-primary)', border: '1px solid rgba(200,169,110,0.2)' }}>
                          {fabric.gsmRange || `${fabric.gsm.min}–${fabric.gsm.max} GSM`}
                        </span>
                      )}
                      {fabric.weightTag && (
                        <span style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}>
                          {fabric.weightTag}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flexShrink: 0 }}>
                    <button
                      onClick={() => onSelectFabric(fabric)}
                      title="View full detail"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.25rem',
                        padding: '0.35rem 0.65rem', borderRadius: '7px', fontSize: '0.75rem',
                        background: 'rgba(200,169,110,0.1)', border: '1px solid rgba(200,169,110,0.25)',
                        color: 'var(--accent-primary)', cursor: 'pointer', fontWeight: 600,
                      }}
                    >
                      View <ChevronRight size={11} />
                    </button>
                    <button
                      onClick={() => onRemove(fabric)}
                      title="Remove from list"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '0.35rem', borderRadius: '7px',
                        background: 'rgba(224,107,90,0.08)', border: '1px solid rgba(224,107,90,0.2)',
                        color: '#e06b5a', cursor: 'pointer',
                      }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── COMPARE VIEW ── */}
          {view === 'compare' && shortlist.length > 1 && (
            <div className="shortlist-compare-table" style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '0.6rem 0.75rem', color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.3)' }}>
                      Property
                    </th>
                    {shortlist.map(f => (
                      <th key={f.id} style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--glass-border)', minWidth: '130px', background: 'rgba(0,0,0,0.3)', textAlign: 'left' }}>
                        <div style={{ fontWeight: 700, color: 'var(--accent-primary)', fontSize: '0.82rem', marginBottom: '0.2rem' }}>{f.name}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{f.badgeText || f.category}</div>
                        <button
                          onClick={() => onRemove(f)}
                          style={{ background: 'none', border: 'none', color: 'rgba(224,107,90,0.6)', cursor: 'pointer', fontSize: '0.68rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.2rem', padding: 0 }}
                        >
                          <X size={10} /> remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_FIELDS.map((field, fi) => {
                    // Compute raw values for best-highlighting
                    const rawVals = shortlist.map(f => getField(f, field));
                    const bestVal = field.bestFn ? field.bestFn(rawVals) : null;
                    return (
                      <tr key={field.key} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: fi % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                        <td style={{ padding: '0.65rem 0.75rem', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {field.label}
                        </td>
                        {shortlist.map((f, fi2) => {
                          const val = rawVals[fi2];
                          const isBest = bestVal !== null && parseFloat(val) === bestVal;
                          return (
                            <td key={f.id} style={{
                              padding: '0.65rem 0.75rem',
                              color: isBest ? '#2ed573' : val === '—' ? 'rgba(255,255,255,0.2)' : 'var(--text-main)',
                              verticalAlign: 'top', lineHeight: 1.5,
                              fontWeight: isBest ? 700 : 400,
                            }}>
                              {isBest && <span style={{ fontSize: '0.65rem', marginRight: '0.25rem' }}>✓</span>}{val}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                ✓ <span style={{ color: '#2ed573' }}>Green</span> = best value for that metric
              </p>
            </div>
          )}
        </div>

        {/* Footer tip */}
        {shortlist.length > 0 && view === 'list' && (
          <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.02)' }}>
            <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              💡 Use <strong style={{ color: 'var(--text-main)' }}>Compare</strong> to view fabrics side-by-side, or <strong style={{ color: 'var(--sustainable)' }}>Export</strong> as CSV for your team.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
