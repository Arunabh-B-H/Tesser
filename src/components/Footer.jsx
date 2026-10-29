import React from 'react';
import { ArrowUp, Phone, MapPin } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import TesserLogo from './TesserLogo';
import { sound } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    sound.playDimensionalWhoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#ffffff',
        borderTop: '1.5px solid rgba(125, 10, 66, 0.15)',
        paddingTop: 80,
        paddingBottom: 40,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Plum Ambience */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '250px',
          background: 'radial-gradient(ellipse at bottom, rgba(125, 10, 66, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 10 }}>
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 48,
            marginBottom: 60,
          }}
        >
          {/* Col 1: Brand & Tagline */}
          <div style={{ maxWidth: 360 }}>
            <TesserLogo size="lg" showTagline={true} />
            <p
              style={{
                color: '#475569',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              The first professional campus exclusively engineered for Cost and Management Accounting (CMA) in Attingal, Trivandrum. Elite faculty, daily diagnostic tests, small batches, and dedicated residential hostels for boys and girls.
            </p>
          </div>

          {/* Col 2: Academic Dimensions */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#7d0a42',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              CMA Programs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#programs" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                CMA Foundation (+2 Entry)
              </a>
              <a href="#programs" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                CMA Intermediate (Direct Entry)
              </a>
              <a href="#programs" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                CMA Intermediate Both Groups
              </a>
              <a href="#programs" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                CMA Final Executive Pods
              </a>
              <a href="#calculator" style={{ color: '#7d0a42', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700 }}>
                Calculate Eligibility &amp; Roadmap &rarr;
              </a>
            </div>
          </div>

          {/* Col 3: Campus & Amenities */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#7d0a42',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              Attingal Campus
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="#campus" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                High-Tech Amphitheater Classrooms
              </a>
              <a href="#campus" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                Girls' Dedicated Hostel Suite
              </a>
              <a href="#campus" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                Boys' Dedicated Hostel Suite
              </a>
              <a href="#discipline" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                Daily 45-Min Test Discipline
              </a>
              <a href="#campus" style={{ color: '#334155', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                1-on-1 Mentorship Cabins
              </a>
            </div>
          </div>

          {/* Col 4: Official Hotlines & Social */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#7d0a42',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              Direct Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="tel:9567115221"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#7d0a42',
                  textDecoration: 'none',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <Phone size={15} style={{ color: '#7d0a42' }} />
                <span>+91 95671 15221</span>
              </a>

              <a
                href="tel:7902434312"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#7d0a42',
                  textDecoration: 'none',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <Phone size={15} style={{ color: '#7d0a42' }} />
                <span>+91 79024 34312</span>
              </a>

              <a
                href="https://www.instagram.com/tesser_official/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginTop: 6,
                }}
              >
                <InstagramIcon size={16} color="#7d0a42" />
                <span>@tesser_official (Instagram)</span>
              </a>

              <a
                href="https://www.google.com/search?q=Tesser+Institute"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#334155',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                <MapPin size={16} style={{ color: '#d97706' }} />
                <span>Google Verified Business Page</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: 28,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <div style={{ color: '#64748b', fontSize: '0.84rem' }}>
            &copy; {new Date().getFullYear()} Tesser Institute. All rights reserved. First Professional Campus Exclusively for CMA in Attingal, TVM.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Identity Theme: Luminous White &amp; Solid Deep Plum
            </span>

            <button
              onClick={scrollToTop}
              title="Return to Top"
              style={{
                width: 42,
                height: 42,
                borderRadius: '50%',
                background: '#fdf2f7',
                border: '1px solid rgba(125, 10, 66, 0.25)',
                color: '#7d0a42',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7d0a42';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fdf2f7';
                e.currentTarget.style.color = '#7d0a42';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
