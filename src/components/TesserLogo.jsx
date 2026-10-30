import React from 'react';

/**
 * TesserLogo Component
 * Features the iconic 3D chiral impossible prism emblem in Deep Plum / Magenta
 * along with the clean geometric typography "TESSER" in solid, deep reddish-purple hue
 * and the tagline "YOUR NEXT DIMENSION" in dark, clean charcoal/black.
 */
export default function TesserLogo({ 
  size = 'md', 
  showTagline = true, 
  className = '',
  symbolOnly = false 
}) {
  const dimensions = {
    sm: { symbol: 44, fontMain: '1.42rem', fontTag: '0.54rem', gap: '12px' },
    md: { symbol: 52, fontMain: '1.68rem', fontTag: '0.62rem', gap: '14px' },
    lg: { symbol: 68, fontMain: '2.25rem', fontTag: '0.78rem', gap: '16px' },
    hero: { symbol: 96, fontMain: '3.2rem', fontTag: '0.96rem', gap: '20px' },
  }[size] || { symbol: 48, fontMain: '1.5rem', fontTag: '0.58rem', gap: '12px' };

  return (
    <div 
      className={`inline-flex items-center select-none ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: dimensions.gap }}
    >
      {/* 3D Chiral Impossible Geometric Emblem */}
      <div 
        className="relative flex-shrink-0"
        style={{ 
          width: dimensions.symbol, 
          height: dimensions.symbol,
          position: 'relative'
        }}
      >
        <img 
          src="/assets/tesser_symbol.png" 
          alt="Tesser Emblem" 
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(125,10,66,0.25)] transition-transform duration-300 hover:scale-105 hover:rotate-3"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {!symbolOnly && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: dimensions.fontMain,
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: '#7d0a42', // Solid, deep reddish-purple hue
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            TESSER
          </span>
          {showTagline && (
            <span 
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: dimensions.fontTag,
                fontWeight: 800,
                letterSpacing: '0.24em',
                color: '#1e2022', // Charcoal Grey / Black tagline
                textTransform: 'uppercase',
                marginTop: '4px',
                lineHeight: 1
              }}
            >
              YOUR NEXT DIMENSION
            </span>
          )}
        </div>
      )}
    </div>
  );
}
