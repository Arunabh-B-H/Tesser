import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Trophy, Clock, CheckCircle, ArrowRight, Download, Star } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Programs({ onOpenModal }) {
  const [selectedDimension, setSelectedDimension] = useState('inter'); // 'foundation', 'inter', 'final'

  const programs = {
    foundation: {
      dimension: 'DIMENSION 01',
      title: 'CMA Foundation',
      subtitle: 'The Strategic Genesis for +2 / Higher Secondary Aspirants',
      eligibility: 'Passed 10+2 / Higher Secondary (Commerce / Science / Arts)',
      duration: '6 Months Intensive',
      batchTypes: 'Morning Regular & Full-Day Immersion',
      accentColor: '#7d0a42',
      papers: [
        'Paper 1: Fundamentals of Business Laws and Business Communication',
        'Paper 2: Fundamentals of Financial and Cost Accounting',
        'Paper 3: Fundamentals of Business Mathematics and Statistics',
        'Paper 4: Fundamentals of Business Economics and Management',
      ],
      features: [
        'Bridge coaching for non-maths / science background students',
        'Daily 50-MCQ speed drill with instant accuracy analytics',
        'Small batch attention with zero peer hesitation',
        'Free ICMAI registration assistance and study kit',
      ],
      careerNote: 'Lays the rock-solid base to crack CMA Inter on your very first attempt.',
    },
    inter: {
      dimension: 'DIMENSION 02',
      title: 'CMA Intermediate',
      badge: 'MOST POPULAR ENROLLMENT',
      subtitle: 'The Executive Core (Group 1 & Group 2 Master Curriculum)',
      eligibility: 'Passed CMA Foundation OR Any Degree Graduate (Direct Entry)',
      duration: '8 to 10 Months (Single or Both Groups)',
      batchTypes: 'Full-Day Campus Immersion & Executive Batches',
      accentColor: '#7d0a42',
      papers: [
        'Group 1: Corporate Accounting & Cost Accounting (P5 & P8)',
        'Group 1: Direct & Indirect Taxation + Business Laws (P6 & P7)',
        'Group 2: Operations Management & Strategic Management (P9)',
        'Group 2: Corporate Accounting & Financial Management (P10 & P11)',
      ],
      features: [
        'Comprehensive 360-degree coverage of both Group 1 & Group 2',
        'Daily 45-minute timed descriptive tests simulating ICMAI answer sheets',
        'Individual error tracking in costing formulas and tax provisions',
        'Residential hostel package with guided evening study tables',
      ],
      careerNote: 'Qualifying CMA Inter unlocks high-paying industrial corporate apprenticeships.',
    },
    final: {
      dimension: 'DIMENSION 03',
      title: 'CMA Final',
      subtitle: 'The Apex of Strategic Financial Leadership & Cost Audit',
      eligibility: 'Passed CMA Intermediate Both Groups',
      duration: '8 to 12 Months Specialized Mentoring',
      batchTypes: 'Advanced Case-Study & Hybrid Study Pods',
      accentColor: '#7d0a42',
      papers: [
        'Group 3: Corporate Economic Laws & Strategic Cost Management',
        'Group 3: Direct Tax Laws & International Taxation',
        'Group 4: Corporate Financial Reporting & Management Audit',
        'Group 4: Strategic Performance Management & Valuation',
      ],
      features: [
        'Mentored by practicing CMAs, CFOs, and Cost Audit partners',
        'Real-world M&A valuation & cost audit documentation simulations',
        'National mock exam rankings with detailed rubric evaluations',
        'Campus placement guidance for top MNCs & PSU manufacturing giants',
      ],
      careerNote: 'Certified Cost and Management Accountants command starting packages from ₹8L to ₹25L+ PA.',
    },
  };

  const current = programs[selectedDimension];

  return (
    <section id="programs" style={{ padding: '24px 0 20px 0', scrollMarginTop: '80px', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="container-max" style={{ maxWidth: 1100, padding: '0 20px', position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 12px auto' }}>
          <span className="section-tag" style={{ marginBottom: 5, fontSize: '0.70rem', padding: '2px 10px' }}>CURRICULUM ARCHITECTURE</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.45rem, 2vw, 1.85rem)', lineHeight: 1.15, marginBottom: 5 }}>
            The Three Dimensions of <br />
            <span className="gradient-text-plum">CMA Certification.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', fontSize: '0.82rem', lineHeight: 1.4, maxWidth: 590 }}>
            Tailored learning pathways designed around the latest ICMAI syllabus. Choose your entry level and experience specialized academic coaching in Attingal.
          </p>
        </div>

        {/* Tab Selection */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 14,
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(programs).map(([key, item]) => {
            const isSelected = selectedDimension === key;
            return (
              <button
                key={key}
                onClick={() => {
                  sound.playClick();
                  setSelectedDimension(key);
                }}
                className="programs-tab-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 16px',
                  borderRadius: 10,
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isSelected ? '1.5px solid #7d0a42' : '1.5px solid #e2e8f0',
                  background: isSelected ? 'linear-gradient(135deg, #931252, #7d0a42)' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#475569',
                  boxShadow: isSelected ? '0 6px 18px -3px rgba(125, 10, 66, 0.3)' : '0 2px 5px rgba(15, 23, 42, 0.04)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: isSelected ? '#fce7f1' : '#94a3b8',
                    fontWeight: 700,
                  }}
                >
                  {item.dimension}
                </span>
                <span>{item.title}</span>
                {item.badge && (
                  <span
                    style={{
                      fontSize: '0.58rem',
                      background: isSelected ? '#ffffff' : '#7d0a42',
                      color: isSelected ? '#7d0a42' : '#ffffff',
                      padding: '1px 6px',
                      borderRadius: 9999,
                      fontWeight: 800,
                    }}
                  >
                    HOT
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Program Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDimension}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="programs-showcase-card"
            style={{
              maxWidth: 1040,
              margin: '0 auto',
              padding: '18px 22px',
              background: '#ffffff',
              borderRadius: 18,
              border: '2px solid rgba(125, 10, 66, 0.32)',
              boxShadow: '0 10px 25px -4px rgba(125, 10, 66, 0.08)',
            }}
          >
            <div
              className="programs-inner-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 20,
                alignItems: 'stretch',
              }}
            >
              {/* Left Column: Details & Papers */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.70rem',
                        fontWeight: 800,
                        color: '#7d0a42',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {current.dimension}
                    </span>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        fontSize: '0.66rem',
                        fontWeight: 700,
                        color: '#b45309',
                        background: '#fef3c7',
                        padding: '2px 8px',
                        borderRadius: 9999,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <Clock size={11} />
                      <span>{current.duration}</span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: '#0f172a',
                      marginBottom: 2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {current.title}
                  </h3>

                  <p style={{ color: '#334155', fontSize: '0.80rem', marginBottom: 10, lineHeight: 1.35 }}>
                    {current.subtitle}
                  </p>

                  {/* Eligibility Notice */}
                  <div
                    style={{
                      background: '#fdf2f7',
                      border: '1px solid rgba(125, 10, 66, 0.18)',
                      borderLeft: `3.5px solid ${current.accentColor}`,
                      padding: '7px 12px',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ fontSize: '0.66rem', color: '#7d0a42', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      Eligibility Criteria
                    </div>
                    <div style={{ fontSize: '0.80rem', fontWeight: 700, color: '#0f172a', marginTop: 1 }}>
                      {current.eligibility}
                    </div>
                  </div>

                  {/* Core Papers Covered */}
                  <div>
                    <h4 style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: 5 }}>
                      Core ICMAI Modules Covered
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {current.papers.map((paper, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            fontSize: '0.78rem',
                            color: '#1e293b',
                            fontWeight: 500,
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: '50%',
                              backgroundColor: current.accentColor,
                              flexShrink: 0,
                            }}
                          />
                          <span>{paper}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Differentiators & CTA */}
              <div
                style={{
                  background: '#faf8f9',
                  border: '1.5px solid rgba(125, 10, 66, 0.25)',
                  borderRadius: 16,
                  padding: '14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <Star size={15} style={{ color: '#d97706' }} />
                    The Tesser Dimension Advantage
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
                    {current.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <CheckCircle size={14} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: '0.76rem', color: '#334155', lineHeight: 1.3, fontWeight: 500 }}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      padding: '7px 11px',
                      borderRadius: 8,
                      background: '#ffffff',
                      border: '1px solid rgba(125, 10, 66, 0.18)',
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ fontSize: '0.66rem', color: '#7d0a42', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                      CAREER TRAJECTORY
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#0f172a', fontWeight: 600, marginTop: 2, lineHeight: 1.3 }}>
                      {current.careerNote}
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      if (onOpenModal) onOpenModal();
                    }}
                    className="btn-primary-plum shimmer-sweep"
                    style={{ width: '100%', justifyContent: 'center', padding: '8px 14px', fontSize: '0.82rem', borderRadius: 9 }}
                  >
                    <span>Enroll In {current.title}</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="https://wa.me/919567115221?text=Hi%20Tesser%20Institute%2C%20please%20send%20me%20the%20detailed%20syllabus%20and%20fee%20structure%20for%20CMA%20coaching."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="btn-secondary-charcoal"
                    style={{ width: '100%', justifyContent: 'center', padding: '7px 12px', fontSize: '0.76rem', borderRadius: 9 }}
                  >
                    <Download size={13} />
                    <span>Download Syllabus Blueprint (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .programs-showcase-card {
            padding: 22px 16px !important;
            border-radius: 18px !important;
          }
          .programs-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .programs-tab-btn {
            padding: 9px 14px !important;
            font-size: 0.82rem !important;
            gap: 6px !important;
          }
        }
      `}</style>
    </section>
  );
}
