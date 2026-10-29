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
    <section id="programs" style={{ padding: '100px 0', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container-max" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 50px auto' }}>
          <span className="section-tag">CURRICULUM ARCHITECTURE</span>
          <h2 className="section-title">
            The Three Dimensions of <br />
            <span className="gradient-text-plum">CMA Certification.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Tailored learning pathways designed around the latest ICMAI syllabus. Choose your entry level and experience specialized academic coaching in Attingal.
          </p>
        </div>

        {/* Tab Selection */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 44,
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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 28px',
                  borderRadius: 14,
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: isSelected ? '1px solid #7d0a42' : '1px solid #e2e8f0',
                  background: isSelected ? 'linear-gradient(135deg, #931252, #7d0a42)' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#475569',
                  boxShadow: isSelected ? '0 8px 24px -4px rgba(125, 10, 66, 0.35)' : '0 2px 6px rgba(15, 23, 42, 0.04)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
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
                      fontSize: '0.64rem',
                      background: isSelected ? '#ffffff' : '#7d0a42',
                      color: isSelected ? '#7d0a42' : '#ffffff',
                      padding: '2px 8px',
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            style={{
              maxWidth: 1060,
              margin: '0 auto',
              padding: '42px 36px',
              background: '#ffffff',
              borderRadius: 24,
              border: '1px solid rgba(125, 10, 66, 0.2)',
              boxShadow: '0 16px 45px -8px rgba(125, 10, 66, 0.1)',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 40,
                alignItems: 'center',
              }}
            >
              {/* Left Column: Details & Papers */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: '#7d0a42',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {current.dimension}
                  </span>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#b45309',
                      background: '#fef3c7',
                      padding: '3px 10px',
                      borderRadius: 9999,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <Clock size={12} />
                    <span>{current.duration}</span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#0f172a',
                    marginBottom: 8,
                  }}
                >
                  {current.title}
                </h3>

                <p style={{ color: '#334155', fontSize: '0.96rem', marginBottom: 22, lineHeight: 1.55 }}>
                  {current.subtitle}
                </p>

                {/* Eligibility Notice */}
                <div
                  style={{
                    background: '#fdf2f7',
                    borderLeft: `4px solid ${current.accentColor}`,
                    padding: '12px 18px',
                    borderRadius: '0 10px 10px 0',
                    marginBottom: 26,
                  }}
                >
                  <div style={{ fontSize: '0.76rem', color: '#7d0a42', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    Eligibility Criteria
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginTop: 2 }}>
                    {current.eligibility}
                  </div>
                </div>

                {/* Core Papers Covered */}
                <div style={{ marginBottom: 26 }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: 12 }}>
                    Core ICMAI Modules Covered
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {current.papers.map((paper, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          fontSize: '0.88rem',
                          color: '#1e293b',
                          fontWeight: 500,
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
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

              {/* Right Column: Key Differentiators & CTA */}
              <div
                style={{
                  background: '#faf8f9',
                  border: '1px solid rgba(125, 10, 66, 0.15)',
                  borderRadius: 20,
                  padding: '32px 28px',
                }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.18rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: 18,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Star size={18} style={{ color: '#d97706' }} />
                  The Tesser Dimension Advantage
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                  {current.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <CheckCircle size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.5, fontWeight: 500 }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    padding: '14px 18px',
                    borderRadius: 12,
                    background: '#ffffff',
                    border: '1px solid rgba(125, 10, 66, 0.2)',
                    marginBottom: 24,
                  }}
                >
                  <div style={{ fontSize: '0.78rem', color: '#7d0a42', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                    CAREER TRAJECTORY
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#0f172a', fontWeight: 600, marginTop: 4, lineHeight: 1.45 }}>
                    {current.careerNote}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      if (onOpenModal) onOpenModal();
                    }}
                    className="btn-primary-plum"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Enroll In {current.title}</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href="https://wa.me/919567115221?text=Hi%20Tesser%20Institute%2C%20please%20send%20me%20the%20detailed%20syllabus%20and%20fee%20structure%20for%20CMA%20coaching."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="btn-secondary-charcoal"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                  >
                    <Download size={15} />
                    <span>Download Syllabus Blueprint (WhatsApp)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
