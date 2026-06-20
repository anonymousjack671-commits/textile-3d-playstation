import React from 'react';

export const FiberGuide = () => {
  return (
    <section id="fiber-guide" className="band band-light" style={{ position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge">🌿 Fiber Guide</div>
          <h2 className="display-md" style={{ fontWeight: 300, maxWidth: '700px', margin: '0 auto 1.5rem auto' }}>
            Complete <span className="text-gradient">Fiber Guide</span>
          </h2>
          <p className="body-md text-muted" style={{ maxWidth: '600px', margin: '0 auto 0 auto', lineHeight: 1.6 }}>
            Before understanding 3D structures, understand the building blocks. Fibres are the fundamental units twisted into yarns and woven or knitted into fabrics.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 'clamp(1rem, 3vw, 2rem)', marginBottom: '4rem' }}>
          
          {/* Natural Fibers */}
          <div className="product-card" style={{ borderTop: '4px solid var(--color-primary)' }}>
            <h3 className="heading-lg" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <span>🌿</span> Natural Fibers
            </h3>
            <p className="body-sm text-muted" style={{ marginBottom: '1.5rem' }}>
              Derived directly from nature (plants or animals). Highly prized for their comfort, breathability, and skin-friendliness.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🌱 Cotton (Plant)</strong>
                <p className="caption-md text-muted">Highly absorbent, soft, and breathable. The most widely used natural fiber for everyday apparel like T-shirts and denim.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🌾 Linen (Plant)</strong>
                <p className="caption-md text-muted">Made from flax. Extremely strong, cool to the touch, and moisture-wicking. Ideal for summer clothing.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🐑 Wool (Animal)</strong>
                <p className="caption-md text-muted">Exceptional insulator, elastic, and moisture-wicking. Perfect for cold climates, sweaters, and suiting.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🦋 Silk (Animal)</strong>
                <p className="caption-md text-muted">Known for its natural luster, smooth texture, and high tensile strength. Used for luxury fashion and lingerie.</p>
              </div>
            </div>
          </div>

          {/* Regenerated Fibers */}
          <div className="product-card" style={{ borderTop: '4px solid var(--color-commerce)' }}>
            <h3 className="heading-lg" style={{ color: 'var(--color-commerce)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <span>⚗️</span> Semi-Synthetic
            </h3>
            <p className="body-sm text-muted" style={{ marginBottom: '1.5rem' }}>
              Regenerated from natural raw materials (usually wood pulp) that are chemically processed to create a new, usable fiber.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🪵 Viscose / Rayon</strong>
                <p className="caption-md text-muted">Known for its fluid, beautiful drape and high absorbency. Often used as an affordable, breathable alternative to silk.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🌲 Lyocell / Tencel™</strong>
                <p className="caption-md text-muted">A modern, highly sustainable version of regenerated cellulose produced in a closed-loop system. Strong and very soft.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🌳 Modal</strong>
                <p className="caption-md text-muted">Derived from beechwood. Exceptionally soft, highly absorbent, and resistant to shrinking. Excellent for intimate wear.</p>
              </div>
            </div>
          </div>

          {/* Synthetic Fibers */}
          <div className="product-card" style={{ borderTop: '4px solid var(--color-primary-pressed)' }}>
            <h3 className="heading-lg" style={{ color: 'var(--color-primary-pressed)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
              <span>🧪</span> Synthetic Fibers
            </h3>
            <p className="body-sm text-muted" style={{ marginBottom: '1.5rem' }}>
              Entirely man-made, typically derived from petrochemicals. Engineered for extreme durability, elasticity, and specific performance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🛢️ Polyester</strong>
                <p className="caption-md text-muted">The world's most widely used fiber. Extremely durable, wrinkle-resistant, quick-drying, and inexpensive.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🧵 Nylon / Polyamide</strong>
                <p className="caption-md text-muted">Known for its incredibly high tensile strength, abrasion resistance, and elasticity. Used heavily in activewear and hosiery.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🧶 Acrylic</strong>
                <p className="caption-md text-muted">Designed specifically to mimic the warmth, bulk, and soft feel of wool, but much lighter. Common in affordable sweaters.</p>
              </div>
              <div style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline-light)', padding: '1rem', borderRadius: 'var(--rounded-md)' }}>
                <strong className="body-sm" style={{ color: 'var(--color-ink)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>🧘 Elastane / Spandex</strong>
                <p className="caption-md text-muted">Renowned for extreme elasticity (can stretch up to 600% and recover). Blended into fabrics for stretch and comfort.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="product-card" style={{ overflowX: 'auto' }}>
          <h3 className="heading-xl" style={{ marginBottom: '1.5rem', color: 'var(--color-ink)', fontWeight: 500 }}>📊 Quick Comparison</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-hairline-light)' }}>
                <th style={{ padding: '1rem', color: 'var(--color-mute-light)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Feature</th>
                <th style={{ padding: '1rem', color: 'var(--color-primary)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Natural Fibers</th>
                <th style={{ padding: '1rem', color: 'var(--color-commerce)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Semi-Synthetic</th>
                <th style={{ padding: '1rem', color: 'var(--color-primary-pressed)', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Synthetic Fibers</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-hairline-light)' }}>
                <td className="body-sm" style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-ink)' }}>Comfort</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Highly breathable & absorbent</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Very soft, highly absorbent</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Low absorption (can feel hot)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-hairline-light)' }}>
                <td className="body-sm" style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-ink)' }}>Durability</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Moderate (can wear out)</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Moderate (weaker when wet)</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Extremely high & resistant</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-hairline-light)' }}>
                <td className="body-sm" style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-ink)' }}>Care</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Often requires delicate care</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Requires gentle washing</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Easy-care, quick-drying</td>
              </tr>
              <tr>
                <td className="body-sm" style={{ padding: '1rem', fontWeight: 600, color: 'var(--color-ink)' }}>Sustainability</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Biodegradable, renewable</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Biodegradable, chemical-heavy</td>
                <td className="body-sm text-muted" style={{ padding: '1rem' }}>Not biodegradable, microplastics</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
