import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import TesserLogo from './TesserLogo';
import { sound } from '../utils/sound';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined, clean, non-cluttered navigation links
  const navLinks = [
    { name: 'Why CMA', href: '#philosophy' },
    { name: 'Founders', href: '#founders' },
    { name: 'Toppers', href: '#toppers' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus', href: '#campus' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Eligibility', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className="navbar-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '8px 24px' : '12px 24px',
          background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.84)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(125, 10, 66, 0.12)' : '1px solid rgba(125, 10, 66, 0.06)',
          boxShadow: scrolled ? '0 4px 20px -2px rgba(125, 10, 66, 0.05)' : 'none',
        }}
      >
        <div 
          className="container-max"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1240,
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Logo on Left - Proportioned cleanly */}
          <a 
            href="#" 
            onClick={() => sound.playClick()}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <TesserLogo size="sm" showTagline={true} />
          </a>

          {/* Desktop Navigation - Centered, Spacious, Single-line, No Wrapping */}
          <nav 
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 22,
              whiteSpace: 'nowrap',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sound.playClick()}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#475569',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  padding: '5px 2px',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7d0a42';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#475569';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls - Pure CTA without cluttered phone number */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 12,
              flexShrink: 0,
              whiteSpace: 'nowrap',
            }}
          >
            {/* Clean Primary CTA Button */}
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenModal) onOpenModal();
              }}
              className="btn-primary-plum shimmer-sweep nav-cta-desktop"
              style={{
                padding: '8px 18px',
                fontSize: '0.84rem',
                fontWeight: 700,
                borderRadius: 10,
                whiteSpace: 'nowrap',
                boxShadow: '0 6px 18px -2px rgba(125, 10, 66, 0.3)',
              }}
            >
              <span>Admissions Open</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation"
              style={{
                display: 'none',
                background: '#fdf2f7',
                border: '1px solid rgba(125, 10, 66, 0.2)',
                color: '#7d0a42',
                padding: 6,
                borderRadius: 8,
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 64,
              left: 14,
              right: 14,
              zIndex: 39,
              background: '#ffffff',
              border: '1.5px solid rgba(125, 10, 66, 0.22)',
              borderRadius: 18,
              padding: '22px 18px',
              boxShadow: '0 20px 50px rgba(125, 10, 66, 0.16)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    textDecoration: 'none',
                    padding: '8px 4px',
                    borderBottom: '1px solid #f1f5f9',
                  }}
                >
                  {link.name}
                </a>
              ))}

              <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href="tel:9567115221"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '11px',
                    borderRadius: 10,
                    background: '#fdf2f7',
                    color: '#7d0a42',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    fontWeight: 800,
                  }}
                >
                  <Phone size={14} style={{ color: '#7d0a42' }} />
                  Call: 95671 15221 / 79024 34312
                </a>

                <button
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                    if (onOpenModal) onOpenModal();
                  }}
                  className="btn-primary-plum"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  <span>Apply for 2025-26 Batch</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 640px) {
          .navbar-header {
            padding: 8px 14px !important;
          }
          .nav-cta-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
