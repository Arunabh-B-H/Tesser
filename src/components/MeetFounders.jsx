import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Sparkles, Quote, Award, Shield, CheckCircle2, ArrowRight, MessageSquare, ChevronDown, UserCheck } from 'lucide-react';
import { sound } from '../utils/sound';
import WhatsAppIcon from './WhatsAppIcon';

export default function MeetFounders({ onOpenModal }) {
  const containerRef = useRef(null);
  const [activeFounder, setActiveFounder] = useState(0); // 0: Abhinav, 1: Ajmal

  // Detect mobile screen width (≤ 1024px)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pinned scroll tracking across 240vh scroll track (Desktop)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring physics for scrubbing (Desktop)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 26,
    restDelta: 0.001,
  });

  // Update active founder based on scroll threshold (Desktop)
  useEffect(() => {
    if (isMobile) return;
    return smoothProgress.on('change', (v) => {
      if (v < 0.5) {
        setActiveFounder(0);
      } else {
        setActiveFounder(1);
      }
    });
  }, [smoothProgress, isMobile]);

  const founders = [
    {
      id: 0,
      name: 'Ajmal',
      role: 'Founder & Executive Operations Director',
      badge: 'FOUNDER // EXECUTIVE OPERATIONS & CAMPUS',
      image: '/assets/founder_ajmal.jpg',
      quote:
        'A student’s cognitive focus must never be compromised by travel exhaustion, unsafe accommodations, or lack of guidance. We engineered Tesser as a residential sanctuary with modern hostels, smart AC halls, and round-the-clock mentorship.',
      bio: 'Driving Tesser’s state-of-the-art campus infrastructure, student living, and strategic partnerships. Ajmal established the premier boys and girls residential hostels in Attingal alongside corporate placement pathways.',
      metrics: [
        { label: 'Campus Facility', value: 'AC Smart Campus' },
        { label: 'Hostel Immersion', value: 'Boys & Girls (Attingal)' },
        { label: 'Career Horizon', value: '₹7L - ₹22L+ Big 4' },
      ],
      commitments: [
        'Safe, supervised hostels with nutritious dining & quiet study tables',
        'Zero daily commute fatigue—campus within peaceful walking distance',
        'Corporate networking with Big 4 firms, PSUs, and MNC recruiters',
      ],
      visionTag: 'The Strategic Infrastructure Built for National Rank Holders',
    },
    {
      id: 1,
      name: 'Abhinav',
      role: 'Co-Founder & Academic Vision Director',
      badge: 'CO-FOUNDER // ACADEMIC VISION & CURRICULUM',
      image: '/assets/founder_abhinav.jpg',
      quote:
        'When we founded Tesser in Attingal, our mission was unequivocal: build South Kerala’s premier citadel dedicated 100% exclusively to Cost and Management Accounting. No mixed batches, no diluted focus—just pure, surgical mastery of the ICMAI syllabus.',
      bio: 'Steering Tesser’s academic philosophy, curriculum rigor, and daily testing discipline. Abhinav pioneered the signature 45-minute daily timed mock test engine that turns high-pressure exams into everyday habit.',
      metrics: [
        { label: 'Exclusivity Index', value: '100% CMA Only' },
        { label: 'Academic Rigor', value: 'Daily 45m Mocks' },
        { label: 'Teaching Ratio', value: '1:25 Micro-Batch' },
      ],
      commitments: [
        'Curating practicing CMAs and chartered faculty with proven rank records',
        'Direct student error diagnosis every evening by 6:00 PM',
        'Personal mentoring to eliminate peer hesitation and fear of costing',
      ],
      visionTag: 'The Academic Precision Behind Attingal’s Top CMA Scorers',
    },
  ];

  const current = founders[activeFounder];

  // Direct founder selection with sound & silky tab transition
  const selectFounder = (index) => {
    sound.playClick();
    setActiveFounder(index);
  };

  // =========================================================================
  // 1. DESKTOP VIEW (>1024px): Restored Original Luxury Showcase with Switcher Pill
  //    - No 240vh scroll-trap or unpinned dead white gap!
  //    - Direct instant switching between 01 Abhinav & 02 Ajmal via floating pill
  //    - No bottom "SCROLL TO TRANSITION" cue
  //    - Perfectly centered in luxury viewport with seamless flow into 3D section
  // =========================================================================
  if (!isMobile) {
    return (
      <section
        id="founders"
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '110px 0 60px 0',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Luxury Radial Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(125, 10, 66, 0.04) 0%, rgba(255, 255, 255, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Subtle Luxury Pattern Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(125, 10, 66, 0.08) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            opacity: 0.65,
            pointerEvents: 'none',
          }}
        />

        {/* Top Floating Founder Switcher Pill */}
        <div
          style={{
            position: 'relative',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255, 255, 255, 0.94)',
              border: '1.5px solid rgba(125, 10, 66, 0.18)',
              borderRadius: 9999,
              padding: '6px 8px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 10px 30px rgba(125, 10, 66, 0.08)',
            }}
          >
            {founders.map((f, idx) => {
              const isSelected = activeFounder === idx;
              return (
                <button
                  key={f.id}
                  onClick={() => selectFounder(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 22px',
                    borderRadius: 9999,
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: 'none',
                    background: isSelected
                      ? 'linear-gradient(135deg, #931252, #7d0a42)'
                      : 'transparent',
                    color: isSelected ? '#ffffff' : '#64748b',
                    boxShadow: isSelected
                      ? '0 4px 15px rgba(125, 10, 66, 0.35)'
                      : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      opacity: isSelected ? 0.9 : 0.6,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{f.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className="container-max"
          style={{
            position: 'relative',
            zIndex: 20,
            width: '100%',
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 48,
          }}
        >
          {/* LEFT: Pinned Luxury Portrait Showcase (CSS Grid Stack Crossfade) */}
          <div
            style={{
              width: '42%',
              maxWidth: 460,
              flexShrink: 0,
              position: 'relative',
            }}
          >
            {/* Ambient Background Plum Glow */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '110%',
                height: '110%',
                borderRadius: 32,
                background:
                  'radial-gradient(circle, rgba(125, 10, 66, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(30px)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateAreas: '"stack"',
                position: 'relative',
                zIndex: 2,
              }}
            >
              {founders.map((f, idx) => {
                const isSelected = activeFounder === idx;
                return (
                  <motion.div
                    key={f.id}
                    initial={false}
                    animate={{
                      opacity: isSelected ? 1 : 0,
                      scale: isSelected ? 1 : 0.96,
                      pointerEvents: isSelected ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      gridArea: 'stack',
                      borderRadius: 28,
                      overflow: 'hidden',
                      background: '#ffffff',
                      border: '2px solid rgba(125, 10, 66, 0.25)',
                      boxShadow:
                        '0 30px 70px -15px rgba(125, 10, 66, 0.2), 0 10px 25px rgba(15, 23, 42, 0.06)',
                    }}
                  >
                    {/* 3:4 Aspect Ratio Portrait */}
                    <div style={{ position: 'relative', width: '100%', paddingTop: '125%' }}>
                      <img
                        src={f.image}
                        alt={f.name}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top center',
                          transition: 'transform 0.6s ease',
                        }}
                      />

                      {/* Gradient Scrim */}
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.15) 50%, rgba(15, 23, 42, 0.05) 100%)',
                        }}
                      />

                      {/* Top-Right Leadership Tag */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 18,
                          right: 18,
                          background: 'rgba(255, 255, 255, 0.95)',
                          color: '#7d0a42',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 800,
                          padding: '5px 12px',
                          borderRadius: 9999,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          letterSpacing: '0.04em',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <UserCheck size={13} />
                        <span>FOUNDER DIRECT</span>
                      </div>

                      {/* Floating Identity Banner at the base of Portrait */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '26px 24px',
                          backdropFilter: 'blur(8px)',
                          background:
                            'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 80%, transparent 100%)',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            color: '#fce7f1',
                            letterSpacing: '0.08em',
                            marginBottom: 4,
                          }}
                        >
                          {f.badge}
                        </div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '2rem',
                            fontWeight: 900,
                            color: '#ffffff',
                            lineHeight: 1.1,
                            marginBottom: 4,
                          }}
                        >
                          {f.name}
                        </h3>
                        <div
                          style={{
                            fontSize: '0.88rem',
                            color: '#cbd5e1',
                            fontWeight: 600,
                          }}
                        >
                          {f.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Dynamic Kinetic Editorial Story on Scroll (CSS Grid Stack Crossfade) */}
          <div
            style={{
              width: '58%',
              maxWidth: 640,
              zIndex: 25,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateAreas: '"stack"',
              }}
            >
              {founders.map((f, idx) => {
                const isSelected = activeFounder === idx;
                return (
                  <motion.div
                    key={f.id}
                    initial={false}
                    animate={{
                      opacity: isSelected ? 1 : 0,
                      x: isSelected ? 0 : idx < activeFounder ? -20 : 20,
                      pointerEvents: isSelected ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      gridArea: 'stack',
                    }}
                  >
                    {/* Section Super-Tag */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '5px 14px',
                        borderRadius: 9999,
                        background: '#fdf2f7',
                        border: '1.5px solid rgba(125, 10, 66, 0.22)',
                        color: '#7d0a42',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        marginBottom: 16,
                      }}
                    >
                      <Sparkles size={13} />
                      <span>MEET OUR FOUNDERS // 0{idx + 1} OF 02</span>
                    </div>

                    {/* Main Headline */}
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.2rem, 3.2vw, 2.9rem)',
                        fontWeight: 900,
                        color: '#0f172a',
                        lineHeight: 1.15,
                        marginBottom: 10,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      Architects of the <br />
                      <span className="gradient-text-plum">CMA Dimension.</span>
                    </h2>

                    <div
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: '#7d0a42',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: 18,
                      }}
                    >
                      {f.visionTag}
                    </div>

                    {/* Founder's Direct Quote Box */}
                    <div
                      style={{
                        background: '#faf8f9',
                        border: '1.5px solid rgba(125, 10, 66, 0.16)',
                        borderRadius: 20,
                        padding: '24px 22px',
                        marginBottom: 22,
                        position: 'relative',
                        boxShadow: '0 4px 16px rgba(125, 10, 66, 0.04)',
                      }}
                    >
                      <Quote
                        size={36}
                        style={{
                          color: 'rgba(125, 10, 66, 0.12)',
                          position: 'absolute',
                          top: 14,
                          right: 18,
                        }}
                      />
                      <p
                        style={{
                          fontSize: '0.98rem',
                          color: '#1e293b',
                          lineHeight: 1.6,
                          fontStyle: 'italic',
                          fontWeight: 500,
                          position: 'relative',
                          zIndex: 2,
                        }}
                      >
                        "{f.quote}"
                      </p>
                    </div>

                    {/* Bio Summary */}
                    <p
                      style={{
                        color: '#475569',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        marginBottom: 20,
                      }}
                    >
                      {f.bio}
                    </p>

                    {/* 3 Pillars / Commitments */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        marginBottom: 24,
                      }}
                    >
                      {f.commitments.map((c, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            fontSize: '0.88rem',
                            color: '#0f172a',
                            fontWeight: 600,
                          }}
                        >
                          <CheckCircle2 size={16} style={{ color: '#7d0a42', flexShrink: 0 }} />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>

                    {/* Telemetry Metrics Bar */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 12,
                        marginBottom: 26,
                      }}
                    >
                      {f.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          style={{
                            background: '#ffffff',
                            border: '1px solid rgba(125, 10, 66, 0.16)',
                            padding: '12px 14px',
                            borderRadius: 14,
                            textAlign: 'center',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '1.05rem',
                              fontWeight: 900,
                              color: '#7d0a42',
                              fontFamily: 'var(--font-display)',
                              marginBottom: 2,
                            }}
                          >
                            {m.value}
                          </div>
                          <div
                            style={{
                              fontSize: '0.72rem',
                              color: '#64748b',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                            }}
                          >
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <button
                        onClick={() => {
                          sound.playClick();
                          if (onOpenModal) onOpenModal();
                        }}
                        className="btn-primary-plum shimmer-sweep"
                        style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                      >
                        <span>Schedule Founder Mentorship Desk</span>
                        <ArrowRight size={16} />
                      </button>

                      <a
                        href={`https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20would%20like%20to%20connect%20regarding%20CMA%20admissions%20under%20the%20guidance%20of%20founders%20${encodeURIComponent(f.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="btn-secondary-charcoal"
                        style={{ padding: '12px 20px', fontSize: '0.9rem' }}
                      >
                        <WhatsAppIcon size={16} />
                        <span>WhatsApp Office</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Non-Overlapping Transition Pill */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 36,
            position: 'relative',
            zIndex: 30,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#ffffff',
              border: '1.5px solid rgba(125, 10, 66, 0.2)',
              borderRadius: 9999,
              padding: '6px 14px',
              boxShadow: '0 4px 16px rgba(125, 10, 66, 0.08)',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                color: '#64748b',
                letterSpacing: '0.04em',
              }}
            >
              TRANSITION:
            </span>
            <button
              onClick={() => selectFounder(0)}
              style={{
                background: activeFounder === 0 ? '#7d0a42' : 'transparent',
                color: activeFounder === 0 ? '#ffffff' : '#7d0a42',
                border: 'none',
                borderRadius: 9999,
                padding: '4px 12px',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              01 AJMAL
            </button>
            <span style={{ color: '#cbd5e1', fontSize: '0.75rem', fontWeight: 700 }}>→</span>
            <button
              onClick={() => selectFounder(1)}
              style={{
                background: activeFounder === 1 ? '#7d0a42' : 'transparent',
                color: activeFounder === 1 ? '#ffffff' : '#7d0a42',
                border: 'none',
                borderRadius: 9999,
                padding: '4px 12px',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              02 ABHINAV
            </button>
          </div>
        </div>
      </section>
    );
  }

  // =========================================================================
  // 2. MOBILE VIEW (≤1024px): Full Sequential Story Flow
  //    User scrolls down:
  //    1. Full Founder 1 (Abhinav) photo & complete description
  //    2. User reaches Founder 2 (Ajmal) directly FROM THE PHOTO ITSELF!
  //    3. Full Founder 2 (Ajmal) complete description
  // =========================================================================
  return (
    <section
      id="founders"
      style={{
        padding: '56px 0 64px 0',
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      <div className="container-max" style={{ padding: '0 16px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div
            className="badge-plum"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 14,
            }}
          >
            <Sparkles size={13} />
            <span>MEET OUR FOUNDERS // LEADERSHIP</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 7.5vw, 2.45rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: 10,
            }}
          >
            Architects of the <br />
            <span className="gradient-text-plum">CMA Dimension.</span>
          </h2>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#64748b',
              lineHeight: 1.55,
              maxWidth: 420,
              margin: '0 auto',
            }}
          >
            Direct mentorship from South Kerala’s premier CMA academicians and campus leaders in Attingal.
          </p>
        </div>

        {/* Sequential Founder Cards Flow */}
        {founders.map((f, idx) => (
          <div key={f.id} className="founder-mobile-block" style={{ marginBottom: idx === 0 ? 44 : 0 }}>
            {/* Separator Pill between Founder 1 and Founder 2 */}
            {idx === 1 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '36px 0 28px 0',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: '50%',
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(125, 10, 66, 0.22), transparent)',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    background: '#ffffff',
                    border: '1.5px solid rgba(125, 10, 66, 0.22)',
                    color: '#7d0a42',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    padding: '5px 14px',
                    borderRadius: 9999,
                    boxShadow: '0 4px 14px rgba(125, 10, 66, 0.08)',
                  }}
                >
                  CO-FOUNDER 02 // ACADEMIC VISION &amp; CURRICULUM
                </span>
              </div>
            )}

            {/* 1. Founder Luxury Portrait Card (User sees founder from the photo itself!) */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 400,
                margin: '0 auto 24px auto',
                borderRadius: 24,
                overflow: 'hidden',
                background: '#ffffff',
                border: '2px solid rgba(125, 10, 66, 0.24)',
                boxShadow: '0 20px 50px -10px rgba(125, 10, 66, 0.2), 0 8px 20px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div style={{ position: 'relative', width: '100%', paddingTop: '125%' }}>
                <img
                  src={f.image}
                  alt={f.name}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />

                {/* Gradient Scrim */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 50%, rgba(15, 23, 42, 0.05) 100%)',
                  }}
                />

                {/* Top-Right Leadership Tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'rgba(255, 255, 255, 0.96)',
                    color: '#7d0a42',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 9999,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  <UserCheck size={12} />
                  <span>FOUNDER DIRECT</span>
                </div>

                {/* Floating Identity Banner at the base of Portrait */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '22px 20px',
                    backdropFilter: 'blur(8px)',
                    background:
                      'linear-gradient(to top, rgba(15, 23, 42, 0.94) 0%, rgba(15, 23, 42, 0.65) 80%, transparent 100%)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: '#fce7f1',
                      letterSpacing: '0.08em',
                      marginBottom: 4,
                    }}
                  >
                    {f.badge}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.9rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1.1,
                      marginBottom: 4,
                    }}
                  >
                    {f.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      color: '#cbd5e1',
                      fontWeight: 600,
                    }}
                  >
                    {f.role}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Full Founder Description, Quote, Bio, Metrics & CTAs */}
            <div style={{ maxWidth: 440, margin: '0 auto' }}>
              {/* Vision Tag */}
              <div
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  color: '#7d0a42',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: 14,
                  lineHeight: 1.35,
                }}
              >
                {f.visionTag}
              </div>

              {/* Founder's Direct Quote Box */}
              <div
                style={{
                  background: '#faf8f9',
                  border: '1.5px solid rgba(125, 10, 66, 0.16)',
                  borderRadius: 18,
                  padding: '20px 18px',
                  marginBottom: 18,
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(125, 10, 66, 0.04)',
                }}
              >
                <Quote
                  size={32}
                  style={{
                    color: 'rgba(125, 10, 66, 0.12)',
                    position: 'absolute',
                    top: 12,
                    right: 14,
                  }}
                />
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#1e293b',
                    lineHeight: 1.58,
                    fontStyle: 'italic',
                    fontWeight: 500,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  "{f.quote}"
                </p>
              </div>

              {/* Bio Summary */}
              <p
                style={{
                  color: '#475569',
                  fontSize: '0.9rem',
                  lineHeight: 1.58,
                  marginBottom: 18,
                }}
              >
                {f.bio}
              </p>

              {/* 3 Pillars / Commitments */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                {f.commitments.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: '0.86rem',
                      color: '#0f172a',
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{ color: '#7d0a42', flexShrink: 0, marginTop: 2 }}
                    />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              {/* Telemetry Metrics Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 8,
                  marginBottom: 22,
                }}
              >
                {f.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(125, 10, 66, 0.16)',
                      padding: '10px 8px',
                      borderRadius: 12,
                      textAlign: 'center',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 900,
                        color: '#7d0a42',
                        fontFamily: 'var(--font-display)',
                        marginBottom: 2,
                        lineHeight: 1.15,
                      }}
                    >
                      {m.value}
                    </div>
                    <div
                      style={{
                        fontSize: '0.66rem',
                        color: '#64748b',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        lineHeight: 1.2,
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  gap: 10,
                }}
              >
                <button
                  onClick={() => {
                    sound.playClick();
                    if (onOpenModal) onOpenModal();
                  }}
                  className="btn-primary-plum shimmer-sweep"
                  style={{
                    width: '100%',
                    padding: '13px 20px',
                    fontSize: '0.92rem',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <span>Schedule Founder Mentorship Desk</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={`https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20would%20like%20to%20connect%20regarding%20CMA%20admissions%20under%20the%20guidance%20of%20founders%20${encodeURIComponent(f.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="btn-secondary-charcoal"
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    fontSize: '0.92rem',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp Office</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
