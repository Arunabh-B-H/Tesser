import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Sparkles, Quote, Award, Shield, CheckCircle2, ArrowRight, MessageSquare, ChevronDown, UserCheck } from 'lucide-react';
import { sound } from '../utils/sound';

export default function MeetFounders({ onOpenModal }) {
  const containerRef = useRef(null);
  const [activeFounder, setActiveFounder] = useState(0); // 0: Abhinav, 1: Ajmal

  // Pinned scroll tracking across 240vh scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring physics for scrubbing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 26,
    restDelta: 0.001,
  });

  // Update active founder based on scroll threshold
  useEffect(() => {
    return smoothProgress.on('change', (v) => {
      if (v < 0.5) {
        setActiveFounder(0);
      } else {
        setActiveFounder(1);
      }
    });
  }, [smoothProgress]);

  const founders = [
    {
      id: 0,
      name: 'Abhinav',
      role: 'Co-Founder & Academic Vision Director',
      badge: 'CO-FOUNDER // ACADEMIC ARCHITECT',
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
    {
      id: 1,
      name: 'Ajmal',
      role: 'Co-Founder & Executive Operations Director',
      badge: 'CO-FOUNDER // CAMPUS & STRATEGY',
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
  ];

  const current = founders[activeFounder];

  // Smooth scroll to founder
  const scrollToFounder = (index) => {
    sound.playClick();
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (index === 0 ? 0.1 : 0.85) * totalHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="founders"
      style={{
        position: 'relative',
        height: '240vh', // 2.4x viewport height for smooth 2-phase scroll
        backgroundColor: '#ffffff',
      }}
    >
      {/* Pinned Sticky 100vh Viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(125, 10, 66, 0.04) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      >
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
            position: 'absolute',
            top: 86,
            left: 0,
            right: 0,
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
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
                  onClick={() => scrollToFounder(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 20px',
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
            padding: '90px 32px 50px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 48,
          }}
        >
          {/* LEFT: Pinned Luxury Portrait Showcase (Morphed by Scroll) */}
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

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFounder}
                initial={{ opacity: 0, scale: 0.94, rotateY: 8 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.94, rotateY: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'relative',
                  zIndex: 2,
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
                    src={current.image}
                    alt={current.name}
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
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 80%, transparent 100%)',
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
                      {current.badge}
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
                      {current.name}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.88rem',
                        color: '#cbd5e1',
                        fontWeight: 600,
                      }}
                    >
                      {current.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Dynamic Kinetic Editorial Story on Scroll */}
          <div
            style={{
              width: '58%',
              maxWidth: 640,
              zIndex: 25,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFounder}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
                  <span>MEET OUR FOUNDERS // 0{activeFounder + 1} OF 02</span>
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
                  {current.visionTag}
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
                    "{current.quote}"
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
                  {current.bio}
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
                  {current.commitments.map((c, i) => (
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
                  {current.metrics.map((m, idx) => (
                    <div
                      key={idx}
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
                    href={`https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20would%20like%20to%20connect%20regarding%20CMA%20admissions%20under%20the%20guidance%20of%20founders%20${encodeURIComponent(current.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="btn-secondary-charcoal"
                    style={{ padding: '12px 20px', fontSize: '0.9rem' }}
                  >
                    <MessageSquare size={15} />
                    <span>WhatsApp Office</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Interactive Scroll Hint */}
        <div
          style={{
            position: 'absolute',
            bottom: 22,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#7d0a42',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to transition: 01 Abhinav ──► 02 Ajmal
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} style={{ color: '#7d0a42' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
