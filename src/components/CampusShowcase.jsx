import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, BookOpen } from 'lucide-react';
import { sound } from '../utils/sound';

export default function CampusShowcase() {
  const [activeFacility, setActiveFacility] = useState('classroom');

  const facilities = {
    classroom: {
      title: 'Modern High-Tech Classrooms',
      subtitle: 'Acoustically Tuned Amphitheaters for Deep Intellectual Absorption',
      image: '/assets/classroom.jpg',
      tag: 'ACADEMIC ARENA',
      points: [
        'Tiered executive seating ensuring zero obstruction to the digital podium',
        'Interactive smart digital boards with real-time financial modeling displays',
        'Complete climate control to maintain supreme mental alertness',
        'Small batch capacity capped at 25 desks for direct eye contact with professors',
      ],
      spec: '25 Max Capacity • 4K Digital Panels • Full AC',
    },
    hostel: {
      title: 'Dedicated Residential Hostels (Boys & Girls)',
      subtitle: 'Safe, Distraction-Free Living Right in Attingal',
      image: '/assets/hostel.jpg',
      tag: 'RESIDENTIAL ECOSYSTEM',
      points: [
        'Separate dedicated hostel wings for boys and girls with 24/7 warden supervision',
        'Personal study desks and high-speed Wi-Fi in every residential suite',
        'Wholesome, hygienic South & North Indian meals prepared fresh daily',
        'Eliminates the exhausting 2-3 hour daily public commute from distant towns',
      ],
      spec: 'Separate Wings • 24/7 Security • Study Pods • Nutritious Dining',
    },
    lounge: {
      title: 'Executive Study Lounges & Mentorship Pods',
      subtitle: 'Collaborative Space for Case Studies & One-on-One Mentoring',
      image: '/assets/campus_hero.jpg',
      tag: 'INNOVATION HUB',
      points: [
        'Floor-to-ceiling glass architectural lounge with deep plum ambient lighting',
        'Dedicated 1-on-1 mentor cabins for resolving individual accounting doubts',
        'Extensive ICMAI library containing all past 15-year suggested answer keys',
        'High-speed reference terminals for exploring real corporate financial filings',
      ],
      spec: '1-on-1 Mentor Rooms • ICMAI Library • High-Speed Connectivity',
    },
  };

  const current = facilities[activeFacility];

  return (
    <section id="campus" style={{ padding: '34px 0 16px 0', scrollMarginTop: '80px', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="container-max" style={{ maxWidth: 1100, padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 12px auto' }}>
          <span className="section-tag" style={{ marginBottom: 5, fontSize: '0.70rem', padding: '2px 10px' }}>ATTINGAL CAMPUS &amp; RESIDENCE</span>
          <h2 className="section-title" style={{ marginBottom: 6, lineHeight: 1.15 }}>
            Engineered For Focus. <br />
            <span className="gradient-text-plum">Built For Champions.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', fontSize: '0.84rem', lineHeight: 1.4, maxWidth: 620 }}>
            Preparing for CMA requires mental endurance. Our state-of-the-art campus and dedicated residential hostel ecosystem in Attingal ensure your energy is spent on mastering concepts, not surviving the commute.
          </p>
        </div>

        {/* Facility Selector Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 14,
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => {
              sound.playClick();
              setActiveFacility('classroom');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '7px 18px',
              borderRadius: 10,
              fontFamily: 'var(--font-display)',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: activeFacility === 'classroom' ? '1.5px solid #7d0a42' : '1.5px solid #e2e8f0',
              background: activeFacility === 'classroom' ? 'linear-gradient(135deg, #931252, #7d0a42)' : '#ffffff',
              color: activeFacility === 'classroom' ? '#ffffff' : '#475569',
              boxShadow: activeFacility === 'classroom' ? '0 6px 18px rgba(125, 10, 66, 0.28)' : '0 2px 5px rgba(15, 23, 42, 0.04)',
            }}
          >
            <Building2 size={15} />
            <span>Modern Classrooms</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveFacility('hostel');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '7px 18px',
              borderRadius: 10,
              fontFamily: 'var(--font-display)',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: activeFacility === 'hostel' ? '1.5px solid #7d0a42' : '1.5px solid #e2e8f0',
              background: activeFacility === 'hostel' ? 'linear-gradient(135deg, #931252, #7d0a42)' : '#ffffff',
              color: activeFacility === 'hostel' ? '#ffffff' : '#475569',
              boxShadow: activeFacility === 'hostel' ? '0 6px 18px rgba(125, 10, 66, 0.28)' : '0 2px 5px rgba(15, 23, 42, 0.04)',
            }}
          >
            <Home size={15} />
            <span>Boys &amp; Girls Hostels</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveFacility('lounge');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '7px 18px',
              borderRadius: 10,
              fontFamily: 'var(--font-display)',
              fontSize: '0.84rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              border: activeFacility === 'lounge' ? '1.5px solid #7d0a42' : '1.5px solid #e2e8f0',
              background: activeFacility === 'lounge' ? 'linear-gradient(135deg, #931252, #7d0a42)' : '#ffffff',
              color: activeFacility === 'lounge' ? '#ffffff' : '#475569',
              boxShadow: activeFacility === 'lounge' ? '0 6px 18px rgba(125, 10, 66, 0.28)' : '0 2px 5px rgba(15, 23, 42, 0.04)',
            }}
          >
            <BookOpen size={15} />
            <span>Study Pods &amp; Lounge</span>
          </button>
        </div>

        {/* Feature Display Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFacility}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            style={{
              borderRadius: 18,
              overflow: 'hidden',
              background: '#ffffff',
              border: '2px solid rgba(125, 10, 66, 0.32)',
              boxShadow: '0 10px 25px -4px rgba(125, 10, 66, 0.08)',
            }}
          >
            <div
              className="campus-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'stretch',
              }}
            >
              {/* Media Half */}
              <div
                style={{
                  position: 'relative',
                  minHeight: 250,
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(125, 10, 66, 0.25)',
                    borderRadius: 9999,
                    padding: '4px 12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#7d0a42',
                    fontWeight: 800,
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                  }}
                >
                  {current.tag}
                </div>
              </div>

              {/* Text & Points Half */}
              <div
                style={{
                  padding: '18px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#7d0a42',
                      fontWeight: 800,
                      marginBottom: 3,
                      letterSpacing: '0.08em',
                    }}
                  >
                    CAMPUS HIGHLIGHT
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: '#0f172a',
                      marginBottom: 2,
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {current.title}
                  </h3>

                  <p style={{ color: '#334155', fontSize: '0.80rem', marginBottom: 10, lineHeight: 1.35 }}>
                    {current.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
                    {current.points.map((pt, i) => (
                      <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span
                          style={{
                            width: 17,
                            height: 17,
                            borderRadius: '50%',
                            backgroundColor: '#fdf2f7',
                            border: '1px solid rgba(125, 10, 66, 0.25)',
                            color: '#7d0a42',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ fontSize: '0.78rem', color: '#1e293b', lineHeight: 1.3, fontWeight: 500 }}>
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    background: '#fdf2f7',
                    border: '1px solid rgba(125, 10, 66, 0.18)',
                    borderRadius: 10,
                    padding: '7px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: '0.68rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                    SPECIFICATIONS:
                  </span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>
                    {current.spec}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .campus-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
