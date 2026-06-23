import React, { useState } from 'react';
import { Fabric3DViewer } from './Fabric3DViewer';
import { MessageCircle, Bookmark, BookmarkCheck, Share2, Sparkles, X } from 'lucide-react';
import { SupplierSection } from './SupplierSection';
import { getMatchingMills } from '../data/suppliers';

const WA_NUMBER = '919717831115';

const buildWAMessage = (fabricName) =>
  encodeURIComponent(
    `Hi! I'm interested in *${fabricName}* and would like to know more about pricing, availability, and sampling. Could you please help?`
  );

const openWhatsApp = (fabricName) => {
  window.open(`https://wa.me/${WA_NUMBER}?text=${buildWAMessage(fabricName)}`, '_blank', 'noopener');
};

// Sticky action bar — always visible while reading detail
const StickyBar = ({ fabric, isShortlisted, onToggleShortlist, onRequestSample }) => (
  <div style={{
    position: 'sticky', bottom: 0, zIndex: 40,
    background: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(20px)',
    borderTop: '1px solid var(--color-hairline-dark)',
    padding: '0.85rem 0',
    marginTop: '3rem',
  }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Space Grotesk, sans-serif' }}>
          {fabric.name}
        </p>
        <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-on-dark-mute)', fontFamily: 'Inter, sans-serif' }}>{fabric.category}</p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flexShrink: 0 }}>
        {onToggleShortlist && (
          <button
            onClick={() => onToggleShortlist(fabric)}
            className="btn btn-secondary-dark"
            style={{
              height: '42px', fontSize: '0.88rem', padding: '0 1.2rem',
              borderColor: isShortlisted ? 'var(--color-primary)' : 'var(--color-hairline-dark)',
              background: isShortlisted ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
              color: isShortlisted ? 'var(--color-primary)' : '#fff',
            }}
          >
            {isShortlisted ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}
            {isShortlisted ? 'Saved' : 'Save'}
          </button>
        )}
        <button
          onClick={() => {
            const url = window.location.href;
            if (navigator.share) {
              navigator.share({ title: fabric.name, url });
            } else {
              navigator.clipboard.writeText(url);
            }
          }}
          className="btn btn-secondary-dark"
          style={{ height: '42px', fontSize: '0.88rem', padding: '0 1.2rem' }}
        >
          <Share2 size={15} /> Share
        </button>
        
        {/* Request Sample Button */}
        <button
          onClick={onRequestSample}
          className="btn btn-commerce"
          style={{ height: '42px', fontSize: '0.88rem', padding: '0 1.2rem' }}
        >
          📦 Request Sample
        </button>

        <button
          onClick={() => openWhatsApp(fabric.name)}
          className="btn"
          style={{
            height: '42px', fontSize: '0.88rem', padding: '0 1.2rem',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#fff',
          }}
        >
          <MessageCircle size={16} /> Enquire on WhatsApp
        </button>
      </div>
    </div>
  </div>
);

export const TextileDetail = ({ fabric, onBack, isShortlisted, onToggleShortlist, shortlist = [], onToggleVariantShortlist }) => {
  if (!fabric) return null;

  const [activeTab, setActiveTab] = useState('tech'); // 'tech', 'variants', 'qa'
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [sampleType, setSampleType] = useState('A4 Swatch (Free)');
  const [sampleSubmitted, setSampleSubmitted] = useState(false);

  const renderWashCare = (washCare) => {
    if (!washCare) return null;
    
    // Handle old array format (from v2 dataset)
    if (Array.isArray(washCare)) {
      return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', background: 'var(--surface)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
          {washCare.map((w, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>{w.icon || '🧺'}</span>
              <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{w.text}</span>
            </div>
          ))}
        </div>
      );
    }

    // Handle new v3.1 object format
    return (
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem', background: 'var(--surface)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
        {washCare.temp && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🌊</span>
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{washCare.temp}</span>
          </div>
        )}
        {washCare.machine !== undefined && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🌀</span>
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{washCare.machine ? 'Machine Wash' : 'Hand Wash Only'}</span>
          </div>
        )}
        {washCare.iron && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🔥</span>
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Iron: {washCare.iron}</span>
          </div>
        )}
        {washCare.dryCleaning !== undefined && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.2rem' }}>🚫</span>
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{washCare.dryCleaning ? 'Dry Clean Safe' : 'Do Not Dry Clean'}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
    <section className="band band-dark" id="details">
      <div className="container">

        {/* Top bar with Back Button and Close Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          {onBack ? (
            <button
              onClick={onBack}
              className="btn btn-secondary-dark"
              style={{ height: '42px', fontSize: '0.88rem', padding: '0 1.2rem' }}
            >
              ← Back to Library
            </button>
          ) : <div />}
          
          {onBack && (
            <button
              onClick={onBack}
              title="Close Details / Deselect"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'rgba(224, 107, 90, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(224, 107, 90, 0.4)';
                e.currentTarget.style.color = '#e06b5a';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#fff';
              }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{
              fontSize: '0.72rem',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--rounded-full)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
              background: fabric.badge === 'badge-woven' ? 'rgba(0,112,209,0.1)' : 'rgba(124,109,171,0.1)',
              color: fabric.badge === 'badge-woven' ? 'var(--color-primary)' : '#9c8ed5',
              border: `1px solid ${fabric.badge === 'badge-woven' ? 'rgba(0,112,209,0.25)' : 'rgba(124,109,171,0.25)'}`
            }}>{fabric.badgeText || 'TEXTILE'}</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--color-on-dark-mute)', fontFamily: 'Inter, sans-serif' }}>{fabric.category}</span>
          </div>
          <h2 className="display-lg" style={{ color: '#fff', marginBottom: '1rem' }}>
            {fabric.name}
          </h2>
          <p className="body-md" style={{ color: 'var(--color-body-dark)', maxWidth: '800px', lineHeight: 1.6 }}>
            {typeof fabric.construction === 'string' ? fabric.construction : (fabric.source || fabric.description)}
          </p>

          {/* Story — narrative block */}
          {fabric.story && (
            <p style={{ fontSize: '0.95rem', color: 'var(--color-on-dark-mute)', maxWidth: '800px', lineHeight: 1.7, marginTop: '0.75rem', fontStyle: 'italic', borderLeft: '3px solid var(--color-primary)', paddingLeft: '1rem', fontFamily: 'Inter, sans-serif' }}>
              {fabric.story}
            </p>
          )}

          {/* Key property badge */}
          {fabric.keyProperty && (
            <div style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: 'var(--rounded-full)', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.25)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'Inter, sans-serif' }}>Key Property</span>
              <span style={{ fontSize: '0.9rem', color: '#fff', fontFamily: 'Inter, sans-serif' }}>{fabric.keyProperty}</span>
            </div>
          )}

          {/* Common fibers chips */}
          {fabric.commonFibers && fabric.commonFibers.length > 0 && (
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {fabric.commonFibers.map((f, i) => (
                <span key={i} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: 'var(--rounded-full)', background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)', color: 'var(--color-on-dark-mute)', fontFamily: 'Inter, sans-serif' }}>{f}</span>
              ))}
            </div>
          )}

          {/* Pricing summary + WhatsApp CTA */}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Price range from priceIndia */}
            {fabric.priceIndia && typeof fabric.priceIndia === 'object' && (
              <div style={{
                display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
              }}>
                {Object.entries(fabric.priceIndia).slice(0, 3).map(([tier, price]) => (
                  <div key={tier} style={{
                    padding: '0.4rem 0.85rem', borderRadius: 'var(--rounded-md)',
                    background: 'rgba(0, 242, 254, 0.07)', border: '1px solid rgba(0, 242, 254, 0.2)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    <span style={{ fontSize: '0.62rem', color: 'var(--color-on-dark-mute)', textTransform: 'capitalize', fontWeight: 600 }}>{tier}</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 700 }}>{price}</span>
                  </div>
                ))}
              </div>
            )}
             <button
              onClick={() => setSampleModalOpen(true)}
              className="btn btn-commerce"
              style={{ height: '42px', fontSize: '0.88rem', padding: '0 1.2rem' }}
            >
              📦 Request Swatch Sample
            </button>

            <button
              onClick={() => openWhatsApp(fabric.name)}
              className="btn"
              style={{
                height: '42px', fontSize: '0.88rem', padding: '0 1.2rem',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff',
              }}
            >
              <MessageCircle size={17} /> Enquire on WhatsApp
            </button>

            {/* Ask Kaal AI about this fabric */}
            <button
              onClick={() => {
                const chatBtn = document.getElementById('kaal-chat-toggle');
                if (chatBtn) chatBtn.click();
              }}
              className="btn"
              style={{
                height: '42px', fontSize: '0.88rem', padding: '0 1.2rem',
                background: 'rgba(0, 242, 254, 0.12)', border: '1px solid rgba(0, 242, 254, 0.35)',
                color: 'var(--color-primary)',
              }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(0, 242, 254, 0.2)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(0, 242, 254, 0.12)'; }}
            >
              <Sparkles size={15} /> Ask Kaal AI
            </button>
          </div>

          {/* India sourcing chips */}
          {fabric.indiaSourcing && fabric.indiaSourcing.length > 0 && (
            <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-on-dark-mute)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>🇮🇳 Sourcing:</span>
              {fabric.indiaSourcing.map((s, i) => (
                <span key={i} style={{ fontSize: '0.78rem', padding: '0.2rem 0.6rem', borderRadius: 'var(--rounded-md)', background: 'rgba(0, 242, 254, 0.08)', border: '1px solid rgba(0, 242, 254, 0.2)', color: 'var(--color-primary)', fontFamily: 'Inter, sans-serif' }}>{s}</span>
              ))}
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div id="fabric-specs-tabs" style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--color-hairline-dark)', overflowX: 'auto', paddingBottom: '0.75rem' }}>
          <button 
            onClick={() => setActiveTab('tech')}
            style={{ 
              padding: '0.5rem 1.2rem', 
              borderRadius: 'var(--rounded-full)',
              background: activeTab === 'tech' ? 'var(--color-primary)' : 'transparent', 
              border: activeTab === 'tech' ? '1px solid transparent' : '1px solid var(--color-hairline-dark)',
              color: '#fff', 
              cursor: 'pointer', 
              fontWeight: activeTab === 'tech' ? 600 : 400, 
              fontSize: '0.95rem',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            Technical Specs
          </button>
          {fabric.variants && Array.isArray(fabric.variants) && fabric.variants.length > 0 && (
            <button 
              onClick={() => setActiveTab('variants')}
              style={{ 
                padding: '0.5rem 1.2rem', 
                borderRadius: 'var(--rounded-full)',
                background: activeTab === 'variants' ? 'var(--color-primary)' : 'transparent', 
                border: activeTab === 'variants' ? '1px solid transparent' : '1px solid var(--color-hairline-dark)',
                color: '#fff', 
                cursor: 'pointer', 
                fontWeight: activeTab === 'variants' ? 600 : 400, 
                fontSize: '0.95rem',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              Variants & Constructions
            </button>
          )}
          {(fabric.testingStandards || fabric.defects) && (
            <button 
              onClick={() => setActiveTab('qa')}
              style={{ 
                padding: '0.5rem 1.2rem', 
                borderRadius: 'var(--rounded-full)',
                background: activeTab === 'qa' ? 'var(--color-primary)' : 'transparent', 
                border: activeTab === 'qa' ? '1px solid transparent' : '1px solid var(--color-hairline-dark)',
                color: '#fff', 
                cursor: 'pointer', 
                fontWeight: activeTab === 'qa' ? 600 : 400, 
                fontSize: '0.95rem',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              Quality & Testing
            </button>
          )}
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          
          {/* Left Column - Dynamic Tab Content */}
          <div>
            
            {activeTab === 'tech' && (
              <div className="glass-panel fade-in" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>🏗 Base Specifications</h3>
                
                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  {fabric.weaveNotation && (
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text)' }}>Weave Notation</strong>
                      <span className="text-muted">{fabric.weaveNotation}</span>
                    </div>
                  )}
                  {fabric.interlacingRatio && (
                    <div>
                      <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text)' }}>Interlacing Ratio</strong>
                      <span className="text-muted">{fabric.interlacingRatio}</span>
                    </div>
                  )}
                  {fabric.yarnRequirements && (
                    <div style={{ gridColumn: '1 / -1' }}>
                      <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text)' }}>🧶 Yarn Requirements</strong>
                      <p className="text-muted">{fabric.yarnRequirements}</p>
                    </div>
                  )}
                </div>

                {fabric.finishingProcesses && Array.isArray(fabric.finishingProcesses) && (
                  <div style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text)' }}>💧 Compatible Finishing</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {fabric.finishingProcesses.map((p, i) => (
                        <span key={i} style={{ background: 'var(--surface2)', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem', color: 'var(--text)' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Show top-level washCare in Tech tab if there are no variants to show it */}
                {(!fabric.variants || fabric.variants.length === 0) && fabric.washCare && (
                  <div style={{ marginTop: '2rem' }}>
                    <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>🧺 Wash Care Instructions</strong>
                    {renderWashCare(fabric.washCare)}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'variants' && fabric.variants && Array.isArray(fabric.variants) && (
              <div className="fade-in">
                {fabric.variants.map((variant, vIdx) => {
                  // Build a saveable object that the ShortlistPanel understands
                  const variantId = `${fabric.id}--${(variant.name || '').toLowerCase().replace(/\s+/g, '-')}`;
                  const variantFabricObj = {
                    id: variantId,
                    name: `${variant.name} (${fabric.name})`,
                    category: fabric.category || fabric.family || '',
                    badge: fabric.badge,
                    badgeText: fabric.badgeText,
                    gsmRange: variant.gsm?.min ? `${variant.gsm.min}–${variant.gsm.max} GSM` : (fabric.gsmLabel || ''),
                    gsm: variant.gsm || fabric.gsm,
                    weightTag: fabric.weightTag || '',
                    keyProperty: variant.altNames?.join(', ') || fabric.keyProperty || '',
                    description: `Variant of ${fabric.name}. ${variant.altNames ? 'Also: ' + variant.altNames.join(', ') : ''}`.trim(),
                    // keep parent so ShortlistPanel "View" still works
                    _parentFabric: fabric,
                  };
                  const isSaved = shortlist.some(f => f.id === variantId);
                  const handleVariantSave = () => {
                    if (onToggleShortlist) onToggleShortlist(variantFabricObj);
                  };
                  return (
                  <div key={vIdx} className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    {/* Variant header row with Save button */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent2)', margin: 0 }}>{variant.name}</h3>
                        {variant.altNames && Array.isArray(variant.altNames) && (
                          <p className="text-muted" style={{ margin: '0.35rem 0 0' }}>Also known as: {variant.altNames.join(', ')}</p>
                        )}
                      </div>
                      {onToggleShortlist && (
                        <button
                          onClick={handleVariantSave}
                          title={isSaved ? 'Remove from shortlist' : 'Save this variant'}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '0.4rem',
                            padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600,
                            flexShrink: 0, cursor: 'pointer', transition: 'all 0.2s',
                            border: '1px solid',
                            borderColor: isSaved ? 'var(--accent-primary)' : 'var(--glass-border)',
                            background: isSaved ? 'rgba(200,169,110,0.12)' : 'rgba(255,255,255,0.05)',
                            color: isSaved ? 'var(--accent-primary)' : 'var(--text-muted)',
                          }}
                          onMouseOver={e => { if (!isSaved) { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; e.currentTarget.style.color = 'var(--accent-primary)'; } }}
                          onMouseOut={e => { if (!isSaved) { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-muted)'; } }}
                        >
                          {isSaved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
                          {isSaved ? 'Saved' : 'Save Variant'}
                        </button>
                      )}
                    </div>
                    
                    {/* GSM Progress Bar */}
                    {variant.gsm && (variant.gsm.min || variant.gsm.max) && (
                      <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <strong style={{ color: 'var(--text-main)' }}>⚖ Weight Range (GSM)</strong>
                          <span className="text-muted">{variant.gsm.min || 0} - {variant.gsm.max || 'Varied'} GSM</span>
                        </div>
                        <div className="progress-bar-bg" style={{ background: 'var(--surface2)', height: '8px', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                          <div className="progress-bar-fill" style={{ 
                            position: 'absolute',
                            height: '100%',
                            background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
                            borderRadius: '4px',
                            left: variant.gsm.min ? `${Math.max(0, (variant.gsm.min / 500) * 100)}%` : '0%',
                            width: (variant.gsm.max && variant.gsm.min) ? `${Math.min(100, ((variant.gsm.max - variant.gsm.min) / 500) * 100)}%` : '50%'
                          }}></div>
                        </div>
                      </div>
                    )}

                    {/* Wash Care */}
                    <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                      <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>🧺 Wash Care Instructions</strong>
                      {(variant.washCare || fabric.washCare) && renderWashCare(variant.washCare || fabric.washCare)}
                    </div>

                    {variant.construction && (
                      <div style={{ background: 'var(--surface2)', padding: '1rem', borderRadius: '8px', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                        <h4 style={{ color: 'var(--text)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>📐 Base Construction</h4>
                        <div style={{ display: 'flex', gap: '2rem', color: 'var(--muted)' }}>
                          {variant.construction.epi && <span><strong>EPI:</strong> {variant.construction.epi}</span>}
                          {variant.construction.ppi && <span><strong>PPI:</strong> {variant.construction.ppi}</span>}
                          {variant.construction.yarnCount && <span><strong>Yarn:</strong> {variant.construction.yarnCount}</span>}
                        </div>
                        {variant.construction.note && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--muted)' }}><em>Note: {variant.construction.note}</em></p>}
                      </div>
                    )}

                    {variant.commonConstructions && Array.isArray(variant.commonConstructions) && variant.commonConstructions.length > 0 && (
                      <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ color: 'var(--text)', marginBottom: '1rem', fontSize: '1.1rem' }}>📐 Common Constructions</h4>
                        <div style={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                            <thead>
                              <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text)' }}>
                                <th style={{ padding: '0.5rem' }}>EPIxPPI</th>
                                <th style={{ padding: '0.5rem' }}>Yarn Count</th>
                                <th style={{ padding: '0.5rem' }}>GSM</th>
                                <th style={{ padding: '0.5rem' }}>Blend</th>
                              </tr>
                            </thead>
                            <tbody>
                              {variant.commonConstructions.map((cc, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                                  <td style={{ padding: '0.8rem 0.5rem', color: 'var(--muted)' }}>{cc.epi}x{cc.ppi}</td>
                                  <td style={{ padding: '0.8rem 0.5rem', color: 'var(--muted)' }}>{cc.yarn}</td>
                                  <td style={{ padding: '0.8rem 0.5rem', color: 'var(--accent3)' }}>{cc.gsm}</td>
                                  <td style={{ padding: '0.8rem 0.5rem', color: 'var(--muted)' }}>{cc.blend}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {variant.priceIndia && typeof variant.priceIndia === 'object' && (
                      <div>
                        <h4 style={{ color: 'var(--text)', marginBottom: '1rem', fontSize: '1.1rem' }}>💰 Price Range by Fiber Type</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {Object.entries(variant.priceIndia).map(([fiber, price], idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--surface2)', padding: '0.8rem 1rem', borderRadius: '4px' }}>
                              <span style={{ color: 'var(--muted)', textTransform: 'capitalize' }}>{fiber}</span>
                              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>
            )}


            {activeTab === 'qa' && (
              <div className="fade-in">
                {fabric.testingStandards && Array.isArray(fabric.testingStandards) && (
                  <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent3)' }}>✅ Testing Standards</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      {fabric.testingStandards.map((std, i) => (
                        <li key={i} style={{ padding: '1rem', background: 'var(--surface2)', borderRadius: '8px', marginBottom: '0.8rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <strong style={{ color: 'var(--text)' }}>{std.method}</strong>
                            <span style={{ color: 'var(--accent2)', fontSize: '0.9rem' }}>{std.category}</span>
                          </div>
                          <p className="text-muted" style={{ fontSize: '0.95rem' }}>{std.description}</p>
                          {std.requirement && <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--sustainable)' }}>Required: {std.requirement}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {fabric.defects && Array.isArray(fabric.defects) && (
                  <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', borderLeft: '4px solid var(--co2-high)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--co2-high)' }}>⚠️ Common Defects</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                      {fabric.defects.map((defect, i) => (
                        <li key={i} style={{ padding: '1rem', background: 'var(--surface2)', borderRadius: '8px', marginBottom: '0.8rem' }}>
                          <strong style={{ display: 'block', color: 'var(--text)', marginBottom: '0.3rem' }}>{defect.name}</strong>
                          <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{defect.description}</p>
                          <p style={{ fontSize: '0.85rem', color: 'var(--accent)' }}><strong>Cause:</strong> {defect.cause}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

          </div>
          
          {/* Right Column - 3D Viewer, Eco & Sourcing */}
          <div>
            <div style={{ position: 'sticky', top: '6rem' }}>
              
              {fabric.visual3D ? (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>🧵 3D Visualization</h3>
                  <Fabric3DViewer structure={fabric.visual3D} />
                </div>
              ) : (
                <div className="glass-panel" style={{ width: '100%', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                   <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧵</span>
                   <p className="text-muted" style={{ fontSize: '1.2rem' }}>3D Structure Model in Development</p>
                </div>
              )}

              {/* Sustainability Profile & CO2 Meter */}
              {fabric.decarbScore && (
                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem', border: '1px solid rgba(77, 184, 122, 0.3)', background: 'linear-gradient(to bottom, rgba(77, 184, 122, 0.05), transparent)' }}>
                  {/* Header row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--sustainable)' }}>🌿 Sustainability Profile</h3>
                  </div>

                  {/* CO₂ Comparison Chart */}
                  {fabric.co2Conventional && fabric.co2KgPerKgFiber && (
                    <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', marginBottom: '1.2rem', fontSize: '1rem' }}>
                        🏭 Carbon Footprint Comparison <span className="text-muted" style={{ fontWeight: 'normal', fontSize: '0.85rem' }}>(kg CO₂eq / kg fiber)</span>
                      </strong>
                      {(() => {
                        const maxVal = Math.max(fabric.co2Conventional, fabric.co2KgPerKgFiber);
                        const conventionalPct = Math.round((fabric.co2Conventional / maxVal) * 92);
                        const thisPct = Math.max(2, Math.round((fabric.co2KgPerKgFiber / maxVal) * 92));
                        return (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Conventional Bar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', width: '120px', flexShrink: 0, fontWeight: 500 }}>Conventional Fiber</span>
                              <div style={{ flex: 1, height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' }}>
                                <div style={{ height: '100%', background: 'linear-gradient(90deg, #c0392b, #ff4757)', width: `${conventionalPct}%`, borderRadius: '6px', boxShadow: '0 0 10px rgba(255,71,87,0.4)', transition: 'width 0.6s ease' }}></div>
                              </div>
                              <span style={{ fontSize: '0.9rem', fontWeight: 700, width: '80px', textAlign: 'right', color: '#ff4757' }}>{fabric.co2Conventional} kg</span>
                            </div>
                            {/* This Fiber Bar */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', width: '120px', flexShrink: 0, fontWeight: 700 }}>This Fiber</span>
                              <div style={{ flex: 1, height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' }}>
                                <div style={{
                                  height: '100%',
                                  background: fabric.co2KgPerKgFiber < 2.5 ? 'linear-gradient(90deg, #2d9e5f, #2ed573)' : 'linear-gradient(90deg, #c8a96e, #fbc531)',
                                  width: `${thisPct}%`,
                                  borderRadius: '6px',
                                  boxShadow: fabric.co2KgPerKgFiber < 2.5 ? '0 0 10px rgba(46,213,115,0.4)' : '0 0 10px rgba(251,197,49,0.4)',
                                  transition: 'width 0.6s ease',
                                }}></div>
                              </div>
                              <span style={{ fontSize: '0.9rem', fontWeight: 700, width: '80px', textAlign: 'right', color: fabric.co2KgPerKgFiber < 2.5 ? '#2ed573' : '#fbc531' }}>
                                {fabric.co2KgPerKgFiber} kg
                              </span>
                            </div>
                            {/* Savings label */}
                            {fabric.co2KgPerKgFiber < fabric.co2Conventional && (
                              <p style={{ margin: 0, fontSize: '0.8rem', textAlign: 'right' }}>
                                <span style={{ color: '#2ed573', fontWeight: 700 }}>
                                  ↓ {Math.round((1 - fabric.co2KgPerKgFiber / fabric.co2Conventional) * 100)}% lower CO₂ vs conventional
                                </span>
                              </p>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  )}
                  {/* CO2 Meter END */}

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                    {fabric.waterSavingPct && (
                      <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                        <span style={{ color: 'var(--accent3)', display: 'block', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>{fabric.waterSavingPct}%</span>
                        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>💧 Water Savings</span>
                      </div>
                    )}
                    {fabric.energySavingPct && (
                      <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                        <span style={{ color: '#f0c94e', display: 'block', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>{fabric.energySavingPct}%</span>
                        <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>⚡ Energy Savings</span>
                      </div>
                    )}
                  </div>

                  {fabric.carbonFootprint && (
                    <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--surface2)', borderRadius: '8px' }}>
                      <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>🏭 Carbon Footprint Reduction</strong>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>{fabric.carbonFootprint}</p>
                    </div>
                  )}

                  {fabric.biodegradable && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sustainable)', fontSize: '0.95rem', fontWeight: 600 }}>
                      <span>🌱</span> 100% Biodegradable
                    </div>
                  )}

                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(135deg, #4db87a, #2d9e5f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {fabric.decarbScore}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.4 }}>
                      ♻ Decarbonisation Impact Score<br/>
                      <span style={{ opacity: 0.7 }}>(composite: CO₂ reduction + water + biodegradability)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* India Sourcing Hubs */}
              {fabric.indiaSourcing && Array.isArray(fabric.indiaSourcing) && fabric.indiaSourcing.length > 0 && (
                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1.5rem' }}>🇮🇳 India Sourcing Hubs</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {fabric.indiaSourcing.map((hub, i) => (
                      <span key={i} style={{ background: 'var(--surface2)', padding: '0.8rem 1.2rem', borderRadius: '8px', color: 'var(--text)', fontSize: '1.1rem' }}>
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Supplier Directory — Verified mills for this fabric */}
        <SupplierSection
          icon="🏭"
          title={`Verified Suppliers for ${fabric.name}`}
          subtitle="Connect directly with mills that specialise in this fabric type — request quotes, MOQs and lead times."
          suppliers={getMatchingMills(fabric, { limit: 3 })}
          context={fabric.name}
          listingKind="fabric mill"
        />
      </div>
    </section>

    {/* Sticky action bar */}
    <StickyBar
      fabric={fabric}
      isShortlisted={isShortlisted}
      onToggleShortlist={onToggleShortlist}
      onRequestSample={() => setSampleModalOpen(true)}
    />

    {/* Request Sample Modal */}
    {sampleModalOpen && (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}>
        <div style={{
          width: '100%', maxWidth: '500px', padding: '2.5rem', position: 'relative',
          border: '1px solid var(--color-hairline-dark)',
          boxShadow: 'var(--shadow-active)',
          background: 'var(--color-surface-dark-elevated)',
          borderRadius: 'var(--rounded-md)'
        }}>
          {/* Close button */}
          <button
            onClick={() => { setSampleModalOpen(false); setSampleSubmitted(false); }}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              background: 'none', border: 'none', color: 'var(--color-on-dark-mute)',
              cursor: 'pointer', padding: '0.25rem',
            }}
          >
            <X size={20} />
          </button>

          {!sampleSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSampleSubmitted(true); }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem' }}>📦</span>
                <div>
                  <h3 className="heading-xl" style={{ margin: 0, color: '#fff' }}>
                    Request Sample
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-on-dark-mute)', fontFamily: 'Inter, sans-serif' }}>
                    Match with certified Indian mills (Coming Soon!)
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-on-dark)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  Selected Fabric
                </label>
                <div style={{ padding: '0.75rem 1rem', borderRadius: 'var(--rounded-md)', background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)', color: '#fff', fontSize: '0.95rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  {fabric.name} <span style={{ fontSize: '0.75rem', color: 'var(--color-on-dark-mute)' }}>({fabric.category})</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-on-dark)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  Select Sample Type
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['A4 Swatch (Free)', '1 Meter Sample', '5 Meters Roll'].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSampleType(type)}
                      style={{
                        padding: '0.5rem 0.9rem', borderRadius: 'var(--rounded-md)', fontSize: '0.82rem', fontWeight: 600,
                        cursor: 'pointer', border: '1px solid',
                        fontFamily: 'Inter, sans-serif',
                        borderColor: sampleType === type ? 'var(--color-primary)' : 'var(--color-hairline-dark)',
                        background: sampleType === type ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                        color: sampleType === type ? '#fff' : 'var(--color-on-dark-mute)',
                        transition: 'all 0.2s',
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label htmlFor="sample-email" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-on-dark)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  Work Email Address
                </label>
                <input
                  id="sample-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--rounded-md)',
                    background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)',
                    color: '#fff', fontSize: '0.95rem', outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <label htmlFor="sample-location" style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-on-dark)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  Delivery Location / Country
                </label>
                <input
                  id="sample-location"
                  type="text"
                  required
                  placeholder="e.g. London, UK"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--rounded-md)',
                    background: 'var(--color-surface-dark-card)', border: '1px solid var(--color-hairline-dark)',
                    color: '#fff', fontSize: '0.95rem', outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Submit Request
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🚧</div>
              <h3 className="heading-xl" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Digital Hub Coming Soon!
              </h3>
              <p className="body-sm" style={{ lineHeight: 1.6, marginBottom: '1.5rem', color: 'var(--color-on-dark-mute)' }}>
                Thank you! Your request for a <strong>{sampleType}</strong> of <strong>{fabric.name}</strong> has been logged.<br/><br/>
                We are currently onboarding top certified mills in Surat, Tirupur, and Coimbatore for direct-to-designer shipping. Our sourcing team will contact you at <strong>{email}</strong> within 24 hours with manual quotes.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => openWhatsApp(fabric.name)}
                  className="btn"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    color: '#fff',
                  }}
                >
                  <MessageCircle size={18} /> Chat with Sourcing Agent Now
                </button>
                
                <button
                  type="button"
                  onClick={() => { setSampleModalOpen(false); setSampleSubmitted(false); }}
                  className="btn btn-secondary-dark"
                  style={{ width: '100%', height: '42px', fontSize: '0.88rem' }}
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};
