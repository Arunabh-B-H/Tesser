import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Building, Sparkles, PhoneCall, ArrowUpRight, Award, Clock } from 'lucide-react';
import { sound } from '../utils/sound';
import WhatsAppIcon from './WhatsAppIcon';

function ProgressiveCounter({ from = 1, to, prefix = '', suffix = '', duration = 1800, delay = 0, isReady = true }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isReady || !isInView) return;

    let startTime = null;
    let animationFrame;

    const timeout = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic easeOut curve
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from + (to - from) * eased);
        setCount(current);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, isReady, from, to, duration, delay]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Hero({ onOpenModal, isReady = true }) {
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setCardRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const tickerItems = [
    'Admissions Active for 2025–2026 CMA Batches (Foundation, Inter & Final)',
    'ICMAI All India Ranks 8, 15 & 24 Produced in Kerala',
    "South Kerala's First Dedicated CMA Campus at Attingal, TVM",
    'Daily 45-Min Timed Model Testing Engine with Same-Day Corrections',
    'Strict 1:25 Micro-Batch Cohorts for 100% Personal Attention',
    'Supervised Boys & Girls Residential Hostels in Attingal',
    'Direct Mentorship by Practicing Cost Accountants & Industry Leaders',
    'Admission Hotlines: +91 95671 15221 / +91 79024 34312',
  ];

  const duplicatedTicker = [...tickerItems, ...tickerItems];

  return (
    <section 
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '86px',
        paddingBottom: '0px',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      {/* Soft Ambient Magenta & Plum Radial Bloom over Luminous Canvas */}
      <div 
        style={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '960px',
          height: '480px',
          background: 'radial-gradient(ellipse at center, rgba(196, 30, 115, 0.11) 0%, rgba(125, 10, 66, 0.05) 50%, transparent 75%)',
          filter: 'blur(65px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Main Hero Container */}
      <div 
        className="container-max" 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          width: '100%',
          paddingTop: '12px',
          paddingBottom: '10px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 36,
            alignItems: 'center',
          }}
        >
          {/* Left Column: Kinetic Typography & CTAs */}
          <div>
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', marginBottom: 12 }}
            >
              <div 
                className="badge-plum badge-plum-pulse"
                style={{ padding: '5px 13px', fontSize: '0.74rem' }}
              >
                <span>First Professional Campus Exclusively For CMA</span>
                <span style={{ opacity: 0.4 }}>|</span>
                <span style={{ color: '#0f172a', fontWeight: 800 }}>Attingal, TVM</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="hero-headline"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.1rem, 3.6vw, 3.25rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0f172a',
                marginBottom: 14,
              }}
            >
              Step Into Your <br />
              <span 
                style={{ 
                  color: '#7d0a42', 
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                Next Dimension
                <svg
                  style={{
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    width: '100%',
                    height: '9px',
                    opacity: 0.9,
                  }}
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 9C70 2 230 2 298 9"
                    stroke="#7d0a42"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Of CMA Mastery.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hero-subtitle"
              style={{
                fontSize: 'clamp(0.88rem, 1.05vw, 0.98rem)',
                lineHeight: 1.55,
                color: '#334155',
                maxWidth: 550,
                marginBottom: 20,
                fontWeight: 450,
              }}
            >
              Conventional coaching dilutes CMA with unrelated commerce courses. 
              At <strong style={{ color: '#7d0a42', fontWeight: 700 }}>TESSER Institute</strong>, 
              every lecture, daily test, and mentor hour is exclusively calibrated for 
              ICMAI Cost &amp; Management Accounting. Small batches, daily tests, and dedicated hostels for boys &amp; girls in Attingal.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 12,
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenModal) onOpenModal();
                }}
                className="btn-primary-plum shimmer-sweep hero-cta-btn-enroll"
                style={{ padding: '13px 26px', fontSize: '0.94rem' }}
              >
                <span>Enroll for 2025-26 Batch</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20want%20to%20know%20more%20about%20CMA%20admissions%20and%20campus%20facilities."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="btn-secondary-charcoal hero-cta-btn-whatsapp"
                style={{ padding: '13px 22px', fontSize: '0.92rem' }}
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Counselor</span>
              </a>
            </motion.div>

            {/* Quick Direct Call Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hero-hotlines-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                color: '#64748b',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontWeight: 600 }}>
                <PhoneCall size={13} style={{ color: '#7d0a42' }} />
                Direct Hotlines:
              </span>
              <a 
                href="tel:9567115221" 
                style={{ color: '#7d0a42', textDecoration: 'none', fontWeight: 800 }}
              >
                9567115221
              </a>
              <span style={{ opacity: 0.3 }}>•</span>
              <a 
                href="tel:7902434312" 
                style={{ color: '#7d0a42', textDecoration: 'none', fontWeight: 800 }}
              >
                7902434312
              </a>
            </motion.div>
          </div>

          {/* Right Column: 3D Holographic Dimensional Card (Proportionately Resized) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              perspective: 1200,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Interactive 3D Tilting Card */}
            <div
              className="hero-3d-card"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                width: '100%',
                maxWidth: 430,
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                background: '#ffffff',
                borderRadius: 20,
                border: '1.5px solid rgba(125, 10, 66, 0.16)',
                boxShadow: isHovered 
                  ? '0 24px 50px -10px rgba(125, 10, 66, 0.2), 0 8px 20px -3px rgba(15, 23, 42, 0.06)' 
                  : '0 14px 35px -8px rgba(125, 10, 66, 0.1), 0 4px 14px -2px rgba(15, 23, 42, 0.04)',
              }}
            >
              {/* Card Header Media */}
              <div
                style={{
                  height: 175,
                  position: 'relative',
                  overflow: 'hidden',
                  borderTopLeftRadius: 19,
                  borderTopRightRadius: 19,
                }}
              >
                <img
                  src="/assets/campus_hero.jpg"
                  alt="Tesser Institute Executive Lounge"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.05)',
                  }}
                />
                
                {/* Floating Campus Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(125, 10, 66, 0.18)',
                    borderRadius: 12,
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '0 6px 18px rgba(15, 23, 42, 0.1)',
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      background: '#7d0a42',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src="/assets/tesser_emblem.png"
                      alt="Tesser Logo"
                      style={{
                        width: '85%',
                        height: '85%',
                        objectFit: 'contain',
                        filter: 'brightness(0) invert(1)',
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
                      TESSER CAMPUS
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      ATTINGAL • TVM
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body Highlights Grid */}
              <div style={{ padding: '16px 18px' }}>
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ padding: '8px 10px', background: '#fdf2f7', borderRadius: 10, border: '1px solid rgba(125, 10, 66, 0.1)' }}>
                    <div style={{ fontSize: '0.64rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <ShieldCheck size={11} /> CURRICULUM
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a', marginTop: 2 }}>
                      100% Exclusively CMA
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>No generalized dilution</div>
                  </div>

                  <div style={{ padding: '8px 10px', background: '#fdf2f7', borderRadius: 10, border: '1px solid rgba(125, 10, 66, 0.1)' }}>
                    <div style={{ fontSize: '0.64rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Users size={11} /> BATCH RATIO
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a', marginTop: 2 }}>
                      Small Batches
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>1-on-1 personalized mentor</div>
                  </div>

                  <div style={{ padding: '8px 10px', background: '#fdf2f7', borderRadius: 10, border: '1px solid rgba(125, 10, 66, 0.1)' }}>
                    <div style={{ fontSize: '0.64rem', color: '#059669', fontFamily: 'var(--font-mono)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Sparkles size={11} /> DAILY RIGOR
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a', marginTop: 2 }}>
                      Daily Tests
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>ICMAI exam simulation</div>
                  </div>

                  <div style={{ padding: '8px 10px', background: '#fdf2f7', borderRadius: 10, border: '1px solid rgba(125, 10, 66, 0.1)' }}>
                    <div style={{ fontSize: '0.64rem', color: '#0284c7', fontFamily: 'var(--font-mono)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Building size={11} /> RESIDENCE
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a', marginTop: 2 }}>
                      Hostels Available
                    </div>
                    <div style={{ fontSize: '0.66rem', color: '#64748b' }}>Dedicated for Boys &amp; Girls</div>
                  </div>
                </div>

                {/* Live Admissions Badge Footer */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '0.74rem',
                  }}
                >
                  <span style={{ color: '#64748b', fontFamily: 'var(--font-mono)' }}>Admissions Status:</span>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#15803d',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#16a34a',
                        boxShadow: '0 0 6px #16a34a',
                      }}
                    />
                    2025–2026 Batch Active
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Feature Badges Ribbon (Resized Proportionately to fit 1st view) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hero-stats-ribbon"
          style={{
            marginTop: 20,
            marginBottom: 12,
            padding: '12px 22px',
            borderRadius: 16,
            background: '#ffffff',
            border: '1.5px solid rgba(125, 10, 66, 0.14)',
            boxShadow: '0 8px 24px -4px rgba(125, 10, 66, 0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <div className="hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="hero-stat-num" style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#7d0a42' }}>
              <ProgressiveCounter from={0} to={1} prefix="#" duration={800} delay={200} isReady={isReady} />
            </div>
            <div>
              <div className="hero-stat-title" style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>Exclusive Campus</div>
              <div className="hero-stat-desc" style={{ fontSize: '0.74rem', color: '#64748b' }}>First dedicated CMA hub in Attingal</div>
            </div>
          </div>

          <div className="hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="hero-stat-num" style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#b45309' }}>
              <ProgressiveCounter from={1} to={25} prefix="1:" duration={1500} delay={300} isReady={isReady} />
            </div>
            <div>
              <div className="hero-stat-title" style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>Small Cohorts</div>
              <div className="hero-stat-desc" style={{ fontSize: '0.74rem', color: '#64748b' }}>Every doubt answered individually</div>
            </div>
          </div>

          <div className="hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="hero-stat-num" style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#047857' }}>
              <ProgressiveCounter from={1} to={365} duration={1900} delay={400} isReady={isReady} />
            </div>
            <div>
              <div className="hero-stat-title" style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>Daily Testing Engine</div>
              <div className="hero-stat-desc" style={{ fontSize: '0.74rem', color: '#64748b' }}>Continuous exam conditioning</div>
            </div>
          </div>

          <div className="hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="hero-stat-num" style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#0284c7' }}>
              <ProgressiveCounter from={1} to={24} suffix="/7" duration={1400} delay={500} isReady={isReady} />
            </div>
            <div>
              <div className="hero-stat-title" style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>Hostels &amp; Mentorship</div>
              <div className="hero-stat-desc" style={{ fontSize: '0.74rem', color: '#64748b' }}>Safe, focused residential campus</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DOCKED FULL-WIDTH TICKER STRIP AT BOTTOM OF FIRST SCREEN VIEW (Inspired by Screenshot 2) */}
      <div
        className="hero-ticker-docked"
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, #38031d 0%, #5c0731 50%, #38031d 100%)',
          borderTop: '1px solid rgba(240, 199, 109, 0.35)',
          boxShadow: '0 -4px 20px rgba(56, 3, 29, 0.2)',
          display: 'flex',
          alignItems: 'center',
          height: 42,
          position: 'relative',
          zIndex: 20,
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {/* Pinned Left Pill Badge matching Screenshot 2 [ NEW ] */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '0 16px',
            background: '#38031d',
            height: '100%',
            zIndex: 10,
            borderRight: '1px solid rgba(240, 199, 109, 0.25)',
            boxShadow: '4px 0 12px rgba(0, 0, 0, 0.3)',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              background: '#f0c76d',
              color: '#38031d',
              borderRadius: 6,
              padding: '2px 8px',
              fontSize: '0.68rem',
              fontWeight: 900,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
            }}
          >
            NEW
          </span>
          <span
            style={{
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            ADMISSIONS
          </span>
        </div>

        {/* Scrolling Ticker Strip */}
        <div 
          className="marquee-container marquee-mask" 
          style={{ 
            flex: 1, 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => {
            sound.playClick();
            if (onOpenModal) onOpenModal();
          }}
        >
          <div className="marquee-track-hero" style={{ animationDuration: '38s' }}>
            {duplicatedTicker.map((text, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '0 24px',
                  whiteSpace: 'nowrap',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.01em',
                }}
              >
                <span>{text}</span>
                <span style={{ color: '#f0c76d', opacity: 0.7, fontSize: '0.85rem' }}>
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-section {
            padding-top: 80px !important;
            padding-bottom: 0px !important;
            min-height: auto !important;
          }
          .hero-headline {
            font-size: clamp(1.9rem, 7.2vw, 2.3rem) !important;
            line-height: 1.12 !important;
            margin-bottom: 12px !important;
          }
          .hero-subtitle {
            font-size: 0.88rem !important;
            line-height: 1.5 !important;
            margin-bottom: 16px !important;
          }
          .hero-cta-group {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            gap: 8px !important;
            margin-bottom: 14px !important;
          }
          .hero-cta-btn-enroll,
          .hero-cta-btn-whatsapp {
            width: 100% !important;
            padding: 12px 18px !important;
            font-size: 0.9rem !important;
            justify-content: center !important;
            box-sizing: border-box !important;
          }
          .hero-hotlines-row {
            flex-wrap: wrap !important;
            gap: 6px 10px !important;
            font-size: 0.78rem !important;
          }
          .hero-3d-card {
            transform: none !important;
            max-width: 100% !important;
          }
          .hero-stats-ribbon {
            margin-top: 20px !important;
            margin-bottom: 12px !important;
            padding: 14px 12px !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px 8px !important;
          }
          .hero-stat-item {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2px !important;
          }
          .hero-stat-num {
            font-size: 1.45rem !important;
            line-height: 1 !important;
            margin-bottom: 2px !important;
          }
          .hero-stat-title {
            font-size: 0.78rem !important;
            line-height: 1.2 !important;
          }
          .hero-stat-desc {
            font-size: 0.68rem !important;
            line-height: 1.2 !important;
          }
        }
      `}</style>
    </section>
  );
}
