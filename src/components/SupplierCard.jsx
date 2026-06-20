import React from 'react';
import { MessageCircle, MapPin, Star, Clock, Package, ShieldCheck } from 'lucide-react';
import { SUPPLIER_TIERS } from '../data/suppliers';

const WA_NUMBER = '919717831115';

const buildConnectMessage = (supplier, context) =>
  encodeURIComponent(
    `Hi! I'd like to connect with *${supplier.name}* (${supplier.location}) on Textile3D` +
    (context ? ` regarding *${context}*` : '') +
    `. Could you help facilitate an introduction and share pricing/MOQ details?`
  );

const openConnect = (supplier, context) => {
  window.open(`https://wa.me/${WA_NUMBER}?text=${buildConnectMessage(supplier, context)}`, '_blank', 'noopener');
};

export const SupplierCard = ({ supplier, context }) => {
  const tier = SUPPLIER_TIERS[supplier.tier] || SUPPLIER_TIERS.standard;
  const isFeatured = supplier.tier === 'featured';

  return (
    <div
      className="glass-card"
      style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: isFeatured ? `1px solid ${tier.border}` : undefined,
        boxShadow: isFeatured ? `0 0 0 1px ${tier.border}, 0 8px 24px rgba(200,169,110,0.08)` : undefined,
      }}
    >
      {/* Tier badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '12px',
            background: tier.bg, border: `1px solid ${tier.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem', flexShrink: 0,
          }}>
            {supplier.logo}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)', lineHeight: 1.25 }}>
              {supplier.name}
            </p>
            <p style={{ margin: '0.15rem 0 0', fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={11} /> {supplier.location}
            </p>
          </div>
        </div>
        <span style={{
          flexShrink: 0, fontSize: '0.65rem', fontWeight: 700, padding: '0.25rem 0.55rem',
          borderRadius: '9999px', background: tier.bg, border: `1px solid ${tier.border}`,
          color: tier.color, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.04em',
          display: 'flex', alignItems: 'center', gap: '0.25rem',
        }}>
          {tier.icon} {tier.label}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '0.9rem', flexGrow: 0 }}>
        {supplier.description}
      </p>

      {/* Specialty chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.9rem' }}>
        {supplier.specialties.map((s, i) => (
          <span key={i} style={{
            fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '6px',
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            color: 'var(--text-main)',
          }}>
            {s}
          </span>
        ))}
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem',
        marginBottom: '0.9rem', fontSize: '0.78rem', color: 'var(--text-muted)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Package size={13} /> MOQ: <strong style={{ color: 'var(--text-main)' }}>{supplier.moq}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Clock size={13} /> Lead: <strong style={{ color: 'var(--text-main)' }}>{supplier.leadTime}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Star size={13} color="#f0c94e" /> <strong style={{ color: 'var(--text-main)' }}>{supplier.rating}</strong> rating
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <ShieldCheck size={13} /> <strong style={{ color: 'var(--text-main)' }}>{supplier.yearsInBusiness}</strong> yrs
        </div>
      </div>

      {/* Certifications */}
      {supplier.certifications && supplier.certifications.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
          {supplier.certifications.map((c, i) => (
            <span key={i} style={{
              fontSize: '0.68rem', padding: '0.18rem 0.55rem', borderRadius: '6px',
              background: 'rgba(77,184,122,0.08)', border: '1px solid rgba(77,184,122,0.25)',
              color: 'var(--sustainable)', fontWeight: 600,
            }}>
              {c}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <button
        onClick={() => openConnect(supplier, context)}
        style={{
          marginTop: 'auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          padding: '0.65rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700,
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          border: 'none', color: '#fff', cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(37,211,102,0.25)',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.35)'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,211,102,0.25)'; }}
      >
        <MessageCircle size={15} /> Connect via WhatsApp
      </button>
    </div>
  );
};
