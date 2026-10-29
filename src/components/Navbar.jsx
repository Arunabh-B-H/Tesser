import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import TesserLogo from './TesserLogo';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined, clean, non-cluttered navigation links
  const navLinks = [
    { name: 'Why CMA', href: '#philosophy' },
    { name: 'Founders', href: '#founders' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus & Hostels', href: '#campus' },
    { name: 'Video Reviews', href: '#videos' },
    { name: 'Eligibility', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '10px 32px' : '16px 32px',
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.88)',
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
            maxWidth: 1280,
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Logo on Left */}
          <a 
            href="#" 
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <TesserLogo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation - Centered, Single-line, No Wrapping */}
          <nav 
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              whiteSpace: 'nowrap',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#334155',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  padding: '6px 2px',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7d0a42';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#334155';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls - Minimalist & Balanced */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 16,
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            {/* Direct Phone Hotline Link */}
            <a
              href="tel:9567115221"
              className="hidden-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: '#1e293b',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '8px 14px',
                borderRadius: 10,
                border: '1px solid rgba(125, 10, 66, 0.15)',
                background: '#ffffff',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7d0a42';
                e.currentTarget.style.color = '#7d0a42';
                e.currentTarget.style.background = '#fdf2f7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(125, 10, 66, 0.15)';
                e.currentTarget.style.color = '#1e293b';
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              <Phone size={13} style={{ color: '#7d0a42' }} />
              <span>9567115221</span>
            </a>

            {/* Clean Primary CTA Button */}
            <button
              onClick={() => {
                if (onOpenModal) onOpenModal();
              }}
              className="btn-primary-plum shimmer-sweep"
              style={{
                padding: '9px 20px',
                fontSize: '0.88rem',
                fontWeight: 700,
                borderRadius: 10,
                whiteSpace: 'nowrap',
              }}
            >
              <span>Admissions Open</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation"
              style={{
                display: 'none',
                background: '#fdf2f7',
                border: '1px solid rgba(125, 10, 66, 0.2)',
                color: '#7d0a42',
                padding: 7,
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
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 16,
              right: 16,
              zIndex: 39,
              background: '#ffffff',
              border: '1px solid rgba(125, 10, 66, 0.22)',
              borderRadius: 18,
              padding: '24px 20px',
              boxShadow: '0 20px 50px rgba(125, 10, 66, 0.15)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
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

              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href="tel:9567115221"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '12px',
                    borderRadius: 10,
                    background: '#fdf2f7',
                    color: '#7d0a42',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                  }}
                >
                  <Phone size={15} style={{ color: '#7d0a42' }} />
                  Call: 9567115221 / 7902434312
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenModal) onOpenModal();
                  }}
                  className="btn-primary-plum"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Apply for 2025-26 Batch</span>
                  <ArrowUpRight size={16} />
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
      `}</style>
    </>
  );
}
