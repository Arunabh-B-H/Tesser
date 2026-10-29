import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import TesserLogo from './TesserLogo';
import { sound } from '../utils/sound';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const active = sound.toggleSound();
    setIsAudioActive(active);
  };

  const navLinks = [
    { name: 'Why CMA Exclusive', href: '#philosophy' },
    { name: 'Programs', href: '#programs' },
    { name: 'Campus & Hostels', href: '#campus' },
    { name: 'Daily Discipline', href: '#discipline' },
    { name: 'Eligibility Matrix', href: '#calculator' },
    { name: 'Location & Contact', href: '#contact' },
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
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: scrolled ? '12px 24px' : '20px 24px',
          background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(125, 10, 66, 0.12)' : '1px solid rgba(125, 10, 66, 0.05)',
          boxShadow: scrolled ? '0 8px 25px -5px rgba(125, 10, 66, 0.06)' : 'none',
        }}
      >
        <div 
          className="container-max"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a 
            href="#" 
            onClick={() => sound.playClick()}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <TesserLogo size="md" showTagline={true} />
          </a>

          {/* Desktop Navigation */}
          <nav 
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 28,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sound.playClick()}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#334155',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
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

          {/* Right Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Ambient Sound Toggle Button */}
            <button
              onClick={handleSoundToggle}
              title={isAudioActive ? 'Mute Ambient Audio' : 'Enable Cinematic Ambient Audio'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: isAudioActive ? '#fdf2f7' : 'rgba(125, 10, 66, 0.04)',
                border: isAudioActive ? '1px solid #7d0a42' : '1px solid rgba(125, 10, 66, 0.15)',
                borderRadius: 9999,
                padding: '7px 14px',
                color: isAudioActive ? '#7d0a42' : '#64748b',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                transition: 'all 0.2s ease',
              }}
            >
              {isAudioActive ? <Volume2 size={14} color="#7d0a42" /> : <VolumeX size={14} />}
              <span className="hidden-tablet" style={{ display: 'inline-block' }}>
                {isAudioActive ? 'AUDIO ON' : 'AUDIO OFF'}
              </span>
              {isAudioActive && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <span className="audio-bar-1" />
                  <span className="audio-bar-2" />
                  <span className="audio-bar-3" />
                </div>
              )}
            </button>

            {/* Direct Call Quick Link */}
            <a
              href="tel:9567115221"
              onClick={() => sound.playClick()}
              className="hidden-mobile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                color: '#1e293b',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 700,
                padding: '8px 14px',
                borderRadius: 10,
                border: '1px solid rgba(125, 10, 66, 0.15)',
                background: '#ffffff',
                boxShadow: '0 2px 6px rgba(125, 10, 66, 0.04)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7d0a42';
                e.currentTarget.style.color = '#7d0a42';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(125, 10, 66, 0.15)';
                e.currentTarget.style.color = '#1e293b';
              }}
            >
              <Phone size={14} style={{ color: '#7d0a42' }} />
              <span>9567115221</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenModal) onOpenModal();
              }}
              className="btn-primary-plum"
              style={{
                padding: '10px 20px',
                fontSize: '0.88rem',
                borderRadius: 10,
              }}
            >
              <Sparkles size={14} />
              <span>Admissions Open</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="mobile-toggle-btn"
              style={{
                display: 'none',
                background: '#fdf2f7',
                border: '1px solid rgba(125, 10, 66, 0.2)',
                color: '#7d0a42',
                padding: 8,
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 76,
              left: 16,
              right: 16,
              zIndex: 39,
              background: '#ffffff',
              border: '1px solid rgba(125, 10, 66, 0.25)',
              borderRadius: 18,
              padding: '24px 20px',
              boxShadow: '0 20px 50px rgba(125, 10, 66, 0.15)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
                    fontSize: '0.9rem',
                    fontWeight: 700,
                  }}
                >
                  <Phone size={15} style={{ color: '#7d0a42' }} />
                  Call: 9567115221 / 7902434312
                </a>

                <button
                  onClick={() => {
                    sound.playClick();
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
        @media (max-width: 768px) {
          .hidden-tablet {
            display: none !important;
          }
        }
        .audio-bar-1, .audio-bar-2, .audio-bar-3 {
          display: inline-block;
          width: 2px;
          background-color: #7d0a42;
          border-radius: 1px;
        }
        .audio-bar-1 { height: 10px; animation: bounceBar 0.6s infinite alternate ease-in-out; }
        .audio-bar-2 { height: 14px; animation: bounceBar 0.8s 0.2s infinite alternate ease-in-out; }
        .audio-bar-3 { height: 8px; animation: bounceBar 0.7s 0.4s infinite alternate ease-in-out; }
        @keyframes bounceBar {
          0% { height: 4px; }
          100% { height: 14px; }
        }
      `}</style>
    </>
  );
}
