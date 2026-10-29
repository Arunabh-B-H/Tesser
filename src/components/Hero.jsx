import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Building, FileCheck2, Sparkles, MessageCircle, PhoneCall } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Hero({ onOpenModal }) {
  const [cardRotate, setCardRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    setCardRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Soft Ambient Plum Radial Bloom on White */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '950px',
          height: '550px',
          background: 'radial-gradient(ellipse at center, rgba(125, 10, 66, 0.07) 0%, rgba(125, 10, 66, 0.02) 50%, transparent 75%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48,
            alignItems: 'center',
          }}
        >
          {/* Left Column: Kinetic Typography & CTAs */}
          <div>
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ display: 'inline-flex', marginBottom: 20 }}
            >
              <div className="badge-plum badge-plum-pulse">
                <span>First Professional Campus Exclusively For CMA</span>
                <span style={{ opacity: 0.4 }}>|</span>
                <span style={{ color: '#0f172a', fontWeight: 800 }}>Attingal, TVM</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5.2vw, 4.3rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#0f172a',
                marginBottom: 24,
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
                    bottom: -6,
                    left: 0,
                    width: '100%',
                    height: '10px',
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
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.18rem)',
                lineHeight: 1.65,
                color: '#334155',
                maxWidth: 580,
                marginBottom: 36,
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
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                alignItems: 'center',
                marginBottom: 38,
              }}
            >
              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenModal) onOpenModal();
                }}
                className="btn-primary-plum shimmer-sweep"
                style={{ padding: '16px 34px', fontSize: '1rem' }}
              >
                <span>Enroll for 2025-26 Batch</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20want%20to%20know%20more%20about%20CMA%20admissions%20and%20campus%20facilities."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="btn-secondary-charcoal"
                style={{ padding: '16px 28px', fontSize: '0.98rem' }}
              >
                <MessageCircle size={18} style={{ color: '#16a34a' }} />
                <span>WhatsApp Counselor</span>
              </a>
            </motion.div>

            {/* Quick Direct Call Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                color: '#64748b',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}>
                <PhoneCall size={14} style={{ color: '#7d0a42' }} />
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

          {/* Right Column: 3D Holographic Dimensional Badge & Campus Glimpse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              perspective: 1200,
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Interactive 3D Tilting Card */}
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                width: '100%',
                maxWidth: 480,
                transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: isHovered ? 'none' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                background: '#ffffff',
                borderRadius: 22,
                border: '1px solid rgba(125, 10, 66, 0.18)',
                boxShadow: isHovered 
                  ? '0 28px 60px -12px rgba(125, 10, 66, 0.22), 0 10px 24px -4px rgba(15, 23, 42, 0.08)' 
                  : '0 16px 40px -10px rgba(125, 10, 66, 0.12), 0 6px 16px -2px rgba(15, 23, 42, 0.05)',
              }}
            >
              {/* Card Header Media */}
              <div
                style={{
                  height: 250,
                  position: 'relative',
                  overflow: 'hidden',
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
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
                    transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    transition: 'transform 0.7s ease',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(125,10,66,0.1) 0%, rgba(255,255,255,0.92) 100%)',
                  }}
                />

                {/* Overlaid Authentic 3D Impossible Emblem */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    zIndex: 3,
                  }}
                >
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 16,
                      background: '#ffffff',
                      border: '1px solid rgba(125, 10, 66, 0.25)',
                      padding: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(125, 10, 66, 0.18)',
                    }}
                  >
                    <img
                      src="/assets/tesser_symbol.png"
                      alt="Tesser"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: '#7d0a42',
                        letterSpacing: '0.08em',
                        display: 'block',
                        lineHeight: 1,
                      }}
                    >
                      TESSER CAMPUS
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: '#1e2022',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                      }}
                    >
                      ATTINGAL • TVM
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body - Key Dimension Metrics */}
              <div style={{ padding: '24px 22px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div
                    style={{
                      padding: '14px',
                      borderRadius: 14,
                      background: '#fdf2f7',
                      border: '1px solid rgba(125, 10, 66, 0.12)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#7d0a42', marginBottom: 5 }}>
                      <ShieldCheck size={16} />
                      <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.05em' }}>
                        CURRICULUM
                      </span>
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a' }}>
                      100% Exclusively CMA
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: 2 }}>
                      No generalized dilution
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '14px',
                      borderRadius: 14,
                      background: '#fdf2f7',
                      border: '1px solid rgba(125, 10, 66, 0.12)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#b45309', marginBottom: 5 }}>
                      <Users size={16} />
                      <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.05em' }}>
                        BATCH RATIO
                      </span>
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a' }}>
                      Small Batches
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: 2 }}>
                      1-on-1 personalized mentor
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '14px',
                      borderRadius: 14,
                      background: '#fdf2f7',
                      border: '1px solid rgba(125, 10, 66, 0.12)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#047857', marginBottom: 5 }}>
                      <FileCheck2 size={16} />
                      <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.05em' }}>
                        DAILY RIGOR
                      </span>
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a' }}>
                      Daily Tests
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: 2 }}>
                      ICMAI exam simulation
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '14px',
                      borderRadius: 14,
                      background: '#fdf2f7',
                      border: '1px solid rgba(125, 10, 66, 0.12)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#0284c7', marginBottom: 5 }}>
                      <Building size={16} />
                      <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.05em' }}>
                        RESIDENCE
                      </span>
                    </div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a' }}>
                      Hostels Available
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: 2 }}>
                      Dedicated for Boys &amp; Girls
                    </div>
                  </div>
                </div>

                {/* Status Footer */}
                <div
                  style={{
                    marginTop: 18,
                    paddingTop: 14,
                    borderTop: '1px solid #f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                    Admissions Status:
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#15803d',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        backgroundColor: '#16a34a',
                        boxShadow: '0 0 6px #16a34a',
                      }}
                    />
                    2025-2026 Batch Active
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Feature Badges Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: 70,
            padding: '22px 30px',
            borderRadius: 18,
            background: '#ffffff',
            border: '1px solid rgba(125, 10, 66, 0.14)',
            boxShadow: '0 10px 30px -5px rgba(125, 10, 66, 0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#7d0a42' }}>
              #1
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>Exclusive Campus</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>First dedicated CMA hub in Attingal</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#b45309' }}>
              1:25
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>Small Cohorts</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Every doubt answered individually</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#047857' }}>
              365
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>Daily Testing Engine</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Continuous exam conditioning</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: '#0284c7' }}>
              24/7
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>Hostels &amp; Mentorship</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Safe, focused residential campus</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
