import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowRight, Sparkles, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function CmaToppers({ onOpenModal }) {
  // Active slide cohort: 'final' | 'intermediate'
  const [activeTab, setActiveTab] = useState('final');
  const [isPaused, setIsPaused] = useState(false);

  // 1. CMA Final Achievers (3 Verified ICMAI Students)
  const finalAchievers = [
    {
      id: 'final-1',
      name: 'HAREES',
      cohort: 'final',
      programTitle: 'CMA',
      programSub: 'FINAL',
      badge: '★ GROUP 4 QUALIFIED ★',
      status: 'QUALIFIED',
      details: 'Group 4 Cleared in First Attempt • Tesser Finalist',
      photo: '/assets/toppers/harees.jpg',
    },
    {
      id: 'final-2',
      name: 'ADWAID G',
      cohort: 'final',
      programTitle: 'CMA',
      programSub: 'FINAL',
      badge: '★ GROUP 4 QUALIFIED ★',
      status: 'QUALIFIED',
      details: 'Group 4 Cleared • Advanced Financial & Cost Management',
      photo: '/assets/toppers/adwaid.jpg',
    },
    {
      id: 'final-3',
      name: 'DURGA S',
      cohort: 'final',
      programTitle: 'CMA',
      programSub: 'FINAL',
      badge: '★ GROUP 4 QUALIFIED ★',
      status: 'QUALIFIED',
      details: 'Group 4 Cleared • Strategic Performance Valuation',
      photo: '/assets/toppers/durga.jpg',
    },
  ];

  // 2. CMA Intermediate Achievers (3 Verified ICMAI Students)
  const intermediateAchievers = [
    {
      id: 'inter-1',
      name: 'HANEEN',
      cohort: 'intermediate',
      programTitle: 'CMA',
      programSub: 'INTERMEDIATE',
      badge: '★ BOTH GROUP QUALIFIED ★',
      status: 'QUALIFIED',
      details: 'Both Groups Cleared in Single Session',
      photo: '/assets/toppers/haneen.jpg',
    },
    {
      id: 'inter-2',
      name: 'ASWATHI N',
      cohort: 'intermediate',
      programTitle: 'CMA',
      programSub: 'INTERMEDIATE',
      badge: '★ GROUP 2 QUALIFIED ★',
      status: 'QUALIFIED',
      details: 'Group 2 Cleared with High Accounting Aggregate',
      photo: '/assets/toppers/aswathi.jpg',
    },
    {
      id: 'inter-3',
      name: 'ARCHA S',
      cohort: 'intermediate',
      programTitle: 'CMA',
      programSub: 'INTERMEDIATE',
      badge: '★ BOTH GROUP QUALIFIED ★',
      status: 'QUALIFIED',
      details: 'Both Groups Cleared • Attingal Residential Scholar',
      photo: '/assets/toppers/archa.jpg',
    },
  ];

  // Exactly 3 image cards displayed on screen at any time
  const displayToppers = activeTab === 'final' ? finalAchievers : intermediateAchievers;

  const headlineText =
    activeTab === 'final' ? 'Our CMA Final Achievers' : 'Our CMA Intermediate Achievers';

  // Automatic 3-Second Conveyor Slide Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev === 'final' ? 'intermediate' : 'final'));
    }, 3000); // 3 seconds interval

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTabChange = (tab) => {
    sound.playClick();
    setActiveTab(tab);
  };

  const handleToggleNext = () => {
    sound.playClick();
    setActiveTab((prev) => (prev === 'final' ? 'intermediate' : 'final'));
  };

  // Shared Achiever Card Component matching authentic reference design
  const renderCard = (t) => (
    <motion.div
      key={t.id}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        background: '#ffffff',
        borderRadius: 22,
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(125, 10, 66, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04)',
        border: '1.5px solid rgba(125, 10, 66, 0.22)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* 1. Upper Solid Deep Plum & Burgundy Banner (Matching Actual Tesser Posters) */}
      <div
        style={{
          background: 'linear-gradient(155deg, #7d0a42 0%, #58062d 60%, #430421 100%)',
          padding: '20px 18px 14px 18px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 250,
        }}
      >
        {/* Subtle Gold Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 12,
            opacity: 0.85,
            pointerEvents: 'none',
          }}
        >
          <Star size={14} fill="#e5b85c" color="#e5b85c" />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 12,
            opacity: 0.85,
            pointerEvents: 'none',
          }}
        >
          <Star size={14} fill="#e5b85c" color="#e5b85c" />
        </div>

        {/* Header: CMA FINAL / CMA INTERMEDIATE (In Authentic Luxury Gold Typography) */}
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.95rem',
              fontWeight: 900,
              color: '#f0c76d', // Rich Gold
              letterSpacing: '0.04em',
              lineHeight: 1,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            {t.programTitle}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.88rem',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              lineHeight: 1.2,
              marginTop: 2,
            }}
          >
            {t.programSub}
          </div>
        </div>

        {/* Gold Pill Badge: GROUP 4 QUALIFIED / BOTH GROUP QUALIFIED */}
        <div
          style={{
            background: 'rgba(240, 199, 109, 0.15)',
            border: '1.5px solid #e5b85c',
            borderRadius: 9999,
            padding: '4px 14px',
            color: '#f0c76d',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            marginBottom: 14,
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          {t.badge}
        </div>

        {/* Student Face Photo in Crisp Rounded Frame */}
        <div
          style={{
            position: 'relative',
            width: 122,
            height: 126,
            borderRadius: 18,
            overflow: 'hidden',
            border: '2.5px solid rgba(240, 199, 109, 0.7)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            backgroundColor: '#ffffff',
          }}
        >
          <img
            src={t.photo}
            alt={t.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </div>
      </div>

      {/* 2. Gold Name Plaque (Matching Authentic Tesser Name Badge) */}
      <div
        style={{
          background: '#12040b', // Dark Obsidian Base
          borderTop: '2px solid #d4af37',
          borderBottom: '2px solid #d4af37',
          padding: '8px 12px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <Star size={12} fill="#e5b85c" color="#e5b85c" />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.98rem',
            fontWeight: 900,
            color: '#f0c76d', // Gold typography
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {t.name}
        </span>
        <Star size={12} fill="#e5b85c" color="#e5b85c" />
      </div>

      {/* 3. Lower Box with QUALIFIED Status */}
      <div
        style={{
          background: '#ffffff',
          padding: '18px 16px 20px 16px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        {/* Status Pill */}
        <div
          style={{
            background: '#fdf2f7',
            border: '1px solid rgba(125, 10, 66, 0.25)',
            color: '#7d0a42',
            fontSize: '0.64rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 900,
            letterSpacing: '0.1em',
            padding: '3px 10px',
            borderRadius: 9999,
            marginBottom: 8,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <CheckCircle2 size={12} style={{ color: '#7d0a42' }} />
          <span>ICMAI RESULT STATUS</span>
        </div>

        {/* Big Callout: QUALIFIED */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.3rem',
            fontWeight: 900,
            color: '#7d0a42', // Solid Deep Plum
            lineHeight: 1,
            letterSpacing: '0.02em',
            marginBottom: 6,
          }}
        >
          {t.status}
        </div>

        <div
          style={{
            fontSize: '0.78rem',
            color: '#475569',
            fontWeight: 600,
            maxWidth: 240,
            lineHeight: 1.4,
          }}
        >
          {t.details}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="toppers"
      style={{
        padding: '76px 0 64px 0',
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      <div className="container-max" style={{ padding: '0 20px', maxWidth: 1240, margin: '0 auto' }}>
        {/* Main Outer Container in Tesser Luxury Blush & Plum Theme */}
        <div
          className="toppers-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            background: 'linear-gradient(145deg, #fdf8fa 0%, #faf1f5 50%, #fdf8fa 100%)',
            border: '1.5px solid rgba(125, 10, 66, 0.18)',
            borderRadius: 28,
            padding: '44px 38px 38px 38px',
            boxShadow: '0 16px 40px -12px rgba(125, 10, 66, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Ambient Plum Glow & Trophy Watermark */}
          <div
            style={{
              position: 'absolute',
              top: -30,
              right: -30,
              opacity: 0.04,
              pointerEvents: 'none',
            }}
          >
            <Trophy size={300} style={{ color: '#7d0a42' }} />
          </div>

          {/* Header Row: Subtitle + Title + Cohort Pill Switcher + Action Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              marginBottom: 32,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#7d0a42',
                  letterSpacing: '0.06em',
                  marginBottom: 6,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  textTransform: 'uppercase',
                }}
              >
                <Sparkles size={14} />
                <span>Verified ICMAI Results • Attingal Campus</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#0f172a',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  margin: 0,
                  transition: 'opacity 0.2s ease',
                }}
              >
                {headlineText}
              </h2>
            </div>

            {/* Action Bar: Cohort Switcher + Enroll CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              {/* Luxury Segmented Pill Switcher (Only Final & Intermediate) */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#ffffff',
                  border: '1.5px solid rgba(125, 10, 66, 0.2)',
                  borderRadius: 9999,
                  padding: '4px',
                  boxShadow: '0 2px 10px rgba(125, 10, 66, 0.05)',
                  gap: 4,
                }}
              >
                <button
                  onClick={() => handleTabChange('final')}
                  style={{
                    background: activeTab === 'final' ? '#7d0a42' : 'transparent',
                    color: activeTab === 'final' ? '#ffffff' : '#7d0a42',
                    border: 'none',
                    borderRadius: 9999,
                    padding: '8px 18px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: activeTab === 'final' ? '0 2px 8px rgba(125, 10, 66, 0.25)' : 'none',
                  }}
                >
                  CMA Final (3)
                </button>

                <button
                  onClick={() => handleTabChange('intermediate')}
                  style={{
                    background: activeTab === 'intermediate' ? '#7d0a42' : 'transparent',
                    color: activeTab === 'intermediate' ? '#ffffff' : '#7d0a42',
                    border: 'none',
                    borderRadius: 9999,
                    padding: '8px 18px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.22s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: activeTab === 'intermediate' ? '0 2px 8px rgba(125, 10, 66, 0.25)' : 'none',
                  }}
                >
                  CMA Intermediate (3)
                </button>
              </div>

              {/* Enroll Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenModal) onOpenModal();
                }}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid rgba(125, 10, 66, 0.28)',
                  color: '#7d0a42',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  padding: '10px 22px',
                  borderRadius: 9999,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 14px rgba(125, 10, 66, 0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#7d0a42';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = '#7d0a42';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(125, 10, 66, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#7d0a42';
                  e.currentTarget.style.borderColor = 'rgba(125, 10, 66, 0.28)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(125, 10, 66, 0.08)';
                }}
              >
                <span>Enroll for Next Batch</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Exactly 3 Real Achiever Cards (Animated Conveyor Slide Every 3 Seconds) */}
          <div style={{ position: 'relative', overflow: 'hidden', maxWidth: 1080, margin: '0 auto 30px auto' }}>
            <div
              className="toppers-slider-track"
              style={{
                display: 'flex',
                width: '200%',
                transform: activeTab === 'final' ? 'translateX(0%)' : 'translateX(-50%)',
                transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Slide 1: CMA Final (3 Cards) */}
              <div
                className="toppers-grid"
                style={{
                  width: '50%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 24,
                  padding: '0 6px',
                  boxSizing: 'border-box',
                }}
              >
                {finalAchievers.map(renderCard)}
              </div>

              {/* Slide 2: CMA Intermediate (3 Cards) */}
              <div
                className="toppers-grid"
                style={{
                  width: '50%',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 24,
                  padding: '0 6px',
                  boxSizing: 'border-box',
                }}
              >
                {intermediateAchievers.map(renderCard)}
              </div>
            </div>
          </div>

          {/* Interactive Cohort Switcher Dots & Auto-Slide Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              marginTop: 10,
            }}
          >
            {/* Prev Arrow */}
            <button
              onClick={handleToggleNext}
              aria-label="Previous Batch"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.2)',
                borderRadius: '50%',
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#7d0a42',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7d0a42';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#7d0a42';
              }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Exactly 2 Dots for the 2 Batches */}
            {[
              { id: 'final', label: 'CMA Final' },
              { id: 'intermediate', label: 'CMA Intermediate' },
            ].map((cohort) => (
              <button
                key={cohort.id}
                onClick={() => handleTabChange(cohort.id)}
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  width: activeTab === cohort.id ? 30 : 8,
                  height: 8,
                  borderRadius: 9999,
                  background: activeTab === cohort.id ? '#7d0a42' : 'rgba(125, 10, 66, 0.25)',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Switch to ${cohort.label}`}
                title={cohort.label}
              />
            ))}

            {/* Next Arrow */}
            <button
              onClick={handleToggleNext}
              aria-label="Next Batch"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.2)',
                borderRadius: '50%',
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#7d0a42',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7d0a42';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#7d0a42';
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Supporting Trust Strip below the card container */}
        <div
          className="toppers-footer-strip"
          style={{
            marginTop: 36,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 320px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.45rem',
                fontWeight: 900,
                color: '#0f172a',
                lineHeight: 1.25,
                margin: '0 0 6px 0',
              }}
            >
              Premier CMA Final & Intermediate Coaching Hub in Kerala
            </h3>
            <p
              style={{
                fontSize: '0.88rem',
                color: '#64748b',
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Tesser Institute is the first dedicated Cost and Management Accounting campus in Attingal, TVM.
              Engineered with daily 45-minute timed mock tests, practicing chartered CMA faculty, and on-campus residential hostels.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                background: '#faf8f9',
                border: '1px solid rgba(125, 10, 66, 0.16)',
                borderRadius: 14,
                padding: '10px 18px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.18rem', fontWeight: 900, color: '#7d0a42' }}>100%</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                CMA FOCUS ONLY
              </div>
            </div>

            <div
              style={{
                background: '#faf8f9',
                border: '1px solid rgba(125, 10, 66, 0.16)',
                borderRadius: 14,
                padding: '10px 18px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '1.18rem', fontWeight: 900, color: '#7d0a42' }}>FINAL &amp; INTER</div>
              <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                VERIFIED QUALIFIED
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                if (onOpenModal) onOpenModal();
              }}
              className="btn-primary-plum shimmer-sweep"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              <span>Join 2025–26 CMA Batch</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Styles for Mobile Horizontal Scroll */}
      <style>{`
        @media (max-width: 1024px) {
          .toppers-container {
            padding: 28px 16px 24px 16px !important;
            border-radius: 20px !important;
          }
          .toppers-slider-track {
            display: flex !important;
            width: 200% !important;
          }
          .toppers-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 768px) {
          .toppers-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 14px !important;
            padding-bottom: 8px !important;
          }
          .toppers-grid > div {
            flex: 0 0 260px !important;
            scroll-snap-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
