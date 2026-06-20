import React from 'react';
import { MessageCircle, Factory } from 'lucide-react';
import { SupplierCard } from './SupplierCard';

const WA_NUMBER = '919717831115';

const buildListingMessage = (kind) =>
  encodeURIComponent(
    `Hi! I run a ${kind} and I'd like to get listed on Textile3D's Supplier Directory ` +
    `(Featured / Verified / Standard tiers available). Could you share more details on how to get listed?`
  );

const openListingEnquiry = (kind) => {
  window.open(`https://wa.me/${WA_NUMBER}?text=${buildListingMessage(kind)}`, '_blank', 'noopener');
};

/**
 * SupplierSection — shows a heading, a grid of SupplierCards, and a
 * "Get Listed" CTA banner aimed at mills/manufacturers (monetisation growth loop).
 *
 * Props:
 *  - icon: emoji shown in the section badge
 *  - title: section heading
 *  - subtitle: short description below heading
 *  - suppliers: array of supplier objects (already filtered/sorted)
 *  - context: string passed to "Connect" CTAs (e.g. fabric or garment name)
 *  - listingKind: 'fabric mill' | 'garment manufacturing unit' — for the Get Listed CTA
 */
export const SupplierSection = ({ icon = '🏭', title, subtitle, suppliers, context, listingKind = 'fabric mill or garment manufacturing unit' }) => {
  if (!suppliers || suppliers.length === 0) return null;

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <div className="section-badge" style={{ marginBottom: '0.6rem' }}>{icon} {title}</div>
        {subtitle && (
          <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '640px' }}>
            {subtitle}
          </p>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', gap: '1.25rem' }}>
        {suppliers.map(supplier => (
          <SupplierCard key={supplier.id} supplier={supplier} context={context} />
        ))}
      </div>

      {/* Get Listed CTA — monetisation growth loop */}
      <div style={{
        marginTop: '1.25rem', padding: '1.1rem 1.4rem', borderRadius: '14px',
        background: 'rgba(200,169,110,0.05)', border: '1px dashed rgba(200,169,110,0.25)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '1rem', flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Factory size={20} color="var(--accent-primary)" />
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Run a {listingKind}? <strong style={{ color: 'var(--text-main)' }}>Get listed in this directory</strong> and reach buyers, designers & sourcing teams worldwide.
          </p>
        </div>
        <button
          onClick={() => openListingEnquiry(listingKind)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0,
            padding: '0.55rem 1.1rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 700,
            background: 'rgba(200,169,110,0.12)', border: '1px solid var(--accent-primary)',
            color: 'var(--accent-primary)', cursor: 'pointer', transition: 'all 0.2s',
          }}
          onMouseOver={e => { e.currentTarget.style.background = 'rgba(200,169,110,0.22)'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'rgba(200,169,110,0.12)'; }}
        >
          <MessageCircle size={14} /> List Your Business
        </button>
      </div>
    </div>
  );
};
