import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Quote, Award, Shield, CheckCircle2, ArrowRight, MessageSquare, UserCheck } from 'lucide-react';
import { sound } from '../utils/sound';
import WhatsAppIcon from './WhatsAppIcon';

gsap.registerPlugin(ScrollTrigger);

export default function MeetFounders({ onOpenModal }) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  const [activeFounder, setActiveFounder] = useState(0); // 0: Ajmal, 1: Abhinav

  // Detect mobile screen width (< 768px)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // GSAP Vault ScrollTrigger Horizontal Section Implementation (Desktop)
  useEffect(() => {
    if (isMobile) return;

    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!track || !section || !stage) return;

      const getScrollDist = () => {
        return track.scrollWidth - window.innerWidth;
      };

      const st = ScrollTrigger.create({
        trigger: section,
        pin: stage,
        start: 'top top',
        end: () => '+=' + getScrollDist(),
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const dist = getScrollDist();
          // Horizontal panning across the track
          gsap.set(track, { x: -self.progress * dist });

          // Active founder switcher based on threshold
          setActiveFounder(self.progress > 0.45 ? 1 : 0);

          // Update bottom progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${Math.max(0.08, self.progress)})`;
          }
        },
      });

      // Parallax on image portraits inside the track
      gsap.to('.founders-parallax-img-0', {
        x: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => '+=' + getScrollDist() * 0.5,
          scrub: true,
        },
      });

      gsap.fromTo(
        '.founders-parallax-img-1',
        { x: 35 },
        {
          x: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: () => '+=' + getScrollDist() * 0.45,
            end: () => '+=' + getScrollDist(),
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [isMobile]);

  // Direct founder selection with sound & smooth scroll to target trigger point
  const scrollToFounder = (index) => {
    sound.playClick();
    setActiveFounder(index);
    if (!trackRef.current || !sectionRef.current) return;
    const dist = trackRef.current.scrollWidth - window.innerWidth;
    const targetY = sectionRef.current.offsetTop + (index === 0 ? 0 : dist);
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  // =========================================================================
  // 1. DESKTOP VIEW (≥768px): GSAP Vault Horizontal Scroll Section
  //    - GSAP ScrollTrigger pins stage for EXACT track.scrollWidth - window.innerWidth
  //    - Zero blank gaps, zero dead scroll, zero overshoot
  //    - Seamless release directly into the next section
  // =========================================================================
  if (!isMobile) {
    return (
      <section
        ref={sectionRef}
        id="founders"
        className="founders-horizontal-container"
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#faf7f9',
        }}
      >
        {/* Viewport Stage Pinned by GSAP ScrollTrigger */}
        <div
          ref={stageRef}
          className="founders-pinned-stage"
          style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            minHeight: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#faf7f9',
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(125, 10, 66, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          }}
        >
          {/* Subtle Technical Constellation Dot Grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(rgba(125, 10, 66, 0.08) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
              opacity: 0.65,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Top Rail Bar (GSAP Vault rail-cue & quick switcher) */}
          <div
            className="founders-top-bar"
            style={{
              position: 'relative',
              zIndex: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 48px 0 48px',
            }}
          >
            {/* GSAP Vault Arrow & Cue */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                color: '#64748b',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              <div className="founders-cue-arrow" />
              <span>KEEP SCROLLING — THE FOUNDERS JOURNEY RUNS SIDEWAYS</span>
            </div>

            {/* Direct Quick-Jump Switcher */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255, 255, 255, 0.94)',
                border: '1.5px solid rgba(125, 10, 66, 0.18)',
                borderRadius: 9999,
                padding: '4px 6px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 24px rgba(125, 10, 66, 0.08)',
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
                      padding: '6px 18px',
                      borderRadius: 9999,
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.82rem',
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
                        fontSize: '0.72rem',
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

          {/* Centerpiece Moving Track */}
          <div
            className="founders-track-viewport"
            style={{
              position: 'relative',
              zIndex: 20,
              width: '100%',
              flex: 1,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              ref={trackRef}
              className="founders-horizontal-track"
              style={{
                display: 'flex',
                height: '100%',
                width: '200vw',
                willChange: 'transform',
              }}
            >
              {founders.map((f) => (
                <div
                  key={f.id}
                  className="founders-panel"
                  style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 48px',
                    borderRight: f.id === 0 ? '1px solid rgba(125, 10, 66, 0.12)' : 'none',
                  }}
                >
                  <div
                    className="container-max"
                    style={{
                      width: '100%',
                      maxWidth: 1240,
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 48,
                    }}
                  >
                    {/* LEFT COLUMN: Narrative & Credentials */}
                    <div
                      style={{
                        width: '56%',
                        maxWidth: 640,
                        zIndex: 25,
                      }}
                    >
                      {/* Oversized Subtle Chapter Watermark */}
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(3.8rem, 5.5vw, 5.2rem)',
                          fontWeight: 900,
                          color: 'rgba(125, 10, 66, 0.08)',
                          lineHeight: 0.8,
                          marginBottom: -6,
                          userSelect: 'none',
                        }}
                      >
                        0{f.id + 1}
                      </div>

                      {/* Section Super-Tag */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '4px 12px',
                          borderRadius: 9999,
                          background: '#fdf2f7',
                          border: '1.5px solid rgba(125, 10, 66, 0.22)',
                          color: '#7d0a42',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          letterSpacing: '0.06em',
                          marginBottom: 8,
                        }}
                      >
                        <Sparkles size={12} />
                        <span>{f.badge}</span>
                      </div>

                      {/* Main Headline */}
                      <h2
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.85rem, 2.4vw, 2.35rem)',
                          fontWeight: 900,
                          color: '#0f172a',
                          lineHeight: 1.15,
                          marginBottom: 4,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        Architects of the <span className="gradient-text-plum">CMA Dimension.</span>
                      </h2>

                      {/* Founder Name & Role Line */}
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.55rem',
                            fontWeight: 900,
                            color: '#7d0a42',
                          }}
                        >
                          {f.name}
                        </h3>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            color: '#64748b',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {f.role}
                        </span>
                      </div>

                      {/* Vision Tag */}
                      <div
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          color: '#7d0a42',
                          fontFamily: 'var(--font-mono)',
                          marginBottom: 10,
                        }}
                      >
                        {f.visionTag}
                      </div>

                      {/* Founder's Direct Quote Box */}
                      <div
                        style={{
                          background: '#faf8f9',
                          border: '1.5px solid rgba(125, 10, 66, 0.16)',
                          borderRadius: 14,
                          padding: '12px 16px',
                          marginBottom: 10,
                          position: 'relative',
                          boxShadow: '0 4px 16px rgba(125, 10, 66, 0.04)',
                        }}
                      >
                        <Quote
                          size={22}
                          style={{
                            color: 'rgba(125, 10, 66, 0.12)',
                            position: 'absolute',
                            top: 8,
                            right: 10,
                          }}
                        />
                        <p
                          style={{
                            fontSize: '0.84rem',
                            color: '#1e293b',
                            lineHeight: 1.48,
                            fontStyle: 'italic',
                            fontWeight: 500,
                            position: 'relative',
                            zIndex: 2,
                            margin: 0,
                          }}
                        >
                          "{f.quote}"
                        </p>
                      </div>

                      {/* Bio Summary */}
                      <p
                        style={{
                          color: '#475569',
                          fontSize: '0.82rem',
                          lineHeight: 1.45,
                          marginBottom: 10,
                        }}
                      >
                        {f.bio}
                      </p>

                      {/* 3 Pillars / Commitments */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 5,
                          marginBottom: 12,
                        }}
                      >
                        {f.commitments.map((c, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              fontSize: '0.8rem',
                              color: '#0f172a',
                              fontWeight: 600,
                            }}
                          >
                            <CheckCircle2 size={13} style={{ color: '#7d0a42', flexShrink: 0 }} />
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
                          marginBottom: 14,
                        }}
                      >
                        {f.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            style={{
                              background: '#ffffff',
                              border: '1px solid rgba(125, 10, 66, 0.16)',
                              padding: '6px 8px',
                              borderRadius: 8,
                              textAlign: 'center',
                              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                            }}
                          >
                            <div
                              style={{
                                fontSize: '0.9rem',
                                fontWeight: 900,
                                color: '#7d0a42',
                                fontFamily: 'var(--font-display)',
                                marginBottom: 1,
                              }}
                            >
                              {m.value}
                            </div>
                            <div
                              style={{
                                fontSize: '0.62rem',
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <button
                          onClick={() => {
                            sound.playClick();
                            if (onOpenModal) onOpenModal();
                          }}
                          className="btn-primary-plum shimmer-sweep"
                          style={{ padding: '9px 18px', fontSize: '0.84rem' }}
                        >
                          <span>Schedule Founder Mentorship Desk</span>
                          <ArrowRight size={14} />
                        </button>

                        <a
                          href={`https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20would%20like%20to%20connect%20regarding%20CMA%20admissions%20under%20the%20guidance%20of%20founders%20${encodeURIComponent(f.name)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sound.playClick()}
                          className="btn-secondary-charcoal"
                          style={{ padding: '9px 15px', fontSize: '0.84rem' }}
                        >
                          <WhatsAppIcon size={14} />
                          <span>WhatsApp Office</span>
                        </a>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: The Visual Plate (GSAP Vault figure.plate style) */}
                    <div
                      style={{
                        width: '40%',
                        maxWidth: 390,
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
                          borderRadius: 28,
                          background:
                            'radial-gradient(circle, rgba(125, 10, 66, 0.16) 0%, rgba(255, 255, 255, 0) 70%)',
                          filter: 'blur(28px)',
                          zIndex: 1,
                          pointerEvents: 'none',
                        }}
                      />

                      <figure
                        className="plate"
                        style={{
                          position: 'relative',
                          zIndex: 2,
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            borderRadius: 22,
                            overflow: 'hidden',
                            background: '#ffffff',
                            border: '2px solid rgba(125, 10, 66, 0.22)',
                            boxShadow:
                              '0 24px 55px -15px rgba(125, 10, 66, 0.2), 0 8px 20px rgba(15, 23, 42, 0.06)',
                          }}
                        >
                          {/* 3:4 Aspect Ratio Portrait Container */}
                          <div style={{ position: 'relative', width: '100%', paddingTop: '118%', overflow: 'hidden' }}>
                            <img
                              src={f.image}
                              alt={f.name}
                              className={`founders-parallax-img-${f.id}`}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: '-6%',
                                width: '112%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                willChange: 'transform',
                              }}
                            />

                            {/* Gradient Scrim */}
                            <div
                              style={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                  'linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.12) 50%, rgba(15, 23, 42, 0.04) 100%)',
                              }}
                            />

                            {/* Top-Right Leadership Tag */}
                            <div
                              style={{
                                position: 'absolute',
                                top: 14,
                                right: 14,
                                background: 'rgba(255, 255, 255, 0.95)',
                                color: '#7d0a42',
                                fontSize: '0.68rem',
                                fontFamily: 'var(--font-mono)',
                                fontWeight: 800,
                                padding: '4px 9px',
                                borderRadius: 9999,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                letterSpacing: '0.04em',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 5,
                              }}
                            >
                              <UserCheck size={11} />
                              <span>FOUNDER DIRECT</span>
                            </div>

                            {/* Floating Identity Banner at the base of Portrait */}
                            <div
                              style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '16px 16px',
                                backdropFilter: 'blur(8px)',
                                background:
                                  'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 80%, transparent 100%)',
                              }}
                            >
                              <div
                                style={{
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '0.68rem',
                                  fontWeight: 800,
                                  color: '#fce7f1',
                                  letterSpacing: '0.08em',
                                  marginBottom: 2,
                                }}
                              >
                                {f.badge}
                              </div>
                              <h3
                                style={{
                                  fontFamily: 'var(--font-display)',
                                  fontSize: '1.6rem',
                                  fontWeight: 900,
                                  color: '#ffffff',
                                  lineHeight: 1.1,
                                  marginBottom: 2,
                                }}
                              >
                                {f.name}
                              </h3>
                              <div
                                style={{
                                  fontSize: '0.78rem',
                                  color: '#cbd5e1',
                                  fontWeight: 600,
                                }}
                              >
                                {f.role}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* GSAP Vault Figcaption */}
                        <figcaption
                          style={{
                            textAlign: 'center',
                            marginTop: 6,
                            fontSize: '0.72rem',
                            color: '#94a3b8',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          Fig. 0{f.id + 1} — {f.id === 0 ? 'Executive Operations & Residential Infrastructure' : 'Academic Vision & Daily 45-Min Testing Engine'}, Attingal Campus
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Rail Progress (GSAP Vault rail-progress style) */}
          <div
            className="founders-bottom-progress"
            style={{
              position: 'relative',
              zIndex: 30,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              padding: '0 48px 18px 48px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                fontWeight: 800,
              }}
            >
              <span style={{ color: '#7d0a42' }}>
                0{activeFounder + 1} / 02 • {founders[activeFounder].name.toUpperCase()} // FOUNDERS ARCHITECTURE
              </span>
              <span style={{ color: '#94a3b8', letterSpacing: '0.04em' }}>
                DIRECT MENTORSHIP • ATTINGAL TVM CAMPUS
              </span>
            </div>

            <div
              style={{
                width: '100%',
                height: 3,
                borderRadius: 9999,
                background: 'rgba(125, 10, 66, 0.12)',
                overflow: 'hidden',
              }}
            >
              <div
                ref={progressBarRef}
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #931252, #c41e73, #7d0a42)',
                  transform: 'scaleX(0.08)',
                  transformOrigin: 'left center',
                  transition: 'transform 0.1s linear',
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          .founders-cue-arrow {
            width: 20px;
            height: 2px;
            background: #7d0a42;
            position: relative;
            animation: foundersArrowSlide 1.8s ease-in-out infinite;
          }
          .founders-cue-arrow::after {
            content: '';
            position: absolute;
            right: 0;
            top: -3px;
            width: 6px;
            height: 6px;
            border-top: 2px solid #7d0a42;
            border-right: 2px solid #7d0a42;
            transform: rotate(45deg);
          }
          @keyframes foundersArrowSlide {
            0%, 100% { transform: translateX(0); opacity: 0.8; }
            50% { transform: translateX(5px); opacity: 1; }
          }
        `}</style>
      </section>
    );
  }

  // =========================================================================
  // 2. MOBILE VIEW (<768px): Seamless Sequential Story Flow
  // =========================================================================
  return (
    <section
      id="founders"
      style={{
        padding: '48px 0',
        backgroundColor: '#faf7f9',
        position: 'relative',
      }}
    >
      <div className="container-max" style={{ padding: '0 16px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div
            className="badge-plum"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 10,
            }}
          >
            <Sparkles size={12} />
            <span>MEET OUR FOUNDERS // LEADERSHIP</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.9rem, 6.5vw, 2.3rem)',
              fontWeight: 900,
              color: '#0f172a',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: 8,
            }}
          >
            Architects of the <br />
            <span className="gradient-text-plum">CMA Dimension.</span>
          </h2>
          <p
            style={{
              fontSize: '0.86rem',
              color: '#475569',
              maxWidth: 520,
              margin: '0 auto',
              lineHeight: 1.5,
            }}
          >
            Tesser was founded with a singular conviction: CMA demands surgical specialization and direct executive mentorship.
          </p>
        </div>

        {/* Founder Cards Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {founders.map((f) => (
            <div
              key={f.id}
              style={{
                background: '#ffffff',
                borderRadius: 20,
                border: '1.5px solid rgba(125, 10, 66, 0.18)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(125, 10, 66, 0.08)',
              }}
            >
              {/* Portrait Header */}
              <div style={{ position: 'relative', width: '100%', height: 320 }}>
                <img
                  src={f.image}
                  alt={f.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    right: 16,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: '#fce7f1',
                      letterSpacing: '0.06em',
                      marginBottom: 2,
                    }}
                  >
                    {f.badge}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      lineHeight: 1.1,
                      marginBottom: 2,
                    }}
                  >
                    {f.name}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600 }}>
                    {f.role}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px 18px' }}>
                {/* Quote */}
                <div
                  style={{
                    background: '#fdf2f7',
                    border: '1px solid rgba(125, 10, 66, 0.14)',
                    borderRadius: 12,
                    padding: '12px 14px',
                    marginBottom: 16,
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: '#1e293b',
                      fontStyle: 'italic',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    "{f.quote}"
                  </p>
                </div>

                <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.55, marginBottom: 16 }}>
                  {f.bio}
                </p>

                {/* Commitments */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 18 }}>
                  {f.commitments.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '0.78rem',
                        color: '#0f172a',
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={13} style={{ color: '#7d0a42', flexShrink: 0 }} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 6,
                    marginBottom: 18,
                  }}
                >
                  {f.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      style={{
                        background: '#faf8f9',
                        border: '1px solid rgba(125, 10, 66, 0.12)',
                        padding: '6px 4px',
                        borderRadius: 8,
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.82rem',
                          fontWeight: 900,
                          color: '#7d0a42',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: '0.58rem',
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

                {/* Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      if (onOpenModal) onOpenModal();
                    }}
                    className="btn-primary-plum shimmer-sweep"
                    style={{ padding: '10px 16px', fontSize: '0.82rem', justifyContent: 'center', width: '100%' }}
                  >
                    <span>Schedule Founder Mentorship Desk</span>
                    <ArrowRight size={13} />
                  </button>

                  <a
                    href={`https://wa.me/919567115221?text=Hello%20Tesser%20Institute%2C%20I%20would%20like%20to%20connect%20regarding%20CMA%20admissions%20under%20the%20guidance%20of%20founders%20${encodeURIComponent(f.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="btn-secondary-charcoal"
                    style={{ padding: '10px 16px', fontSize: '0.82rem', justifyContent: 'center', width: '100%' }}
                  >
                    <WhatsAppIcon size={13} />
                    <span>WhatsApp Office</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
