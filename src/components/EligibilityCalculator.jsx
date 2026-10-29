import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sparkles, Send, Clock, Home, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export default function EligibilityCalculator({ onOpenModal }) {
  const [qualification, setQualification] = useState('plus2'); // 'plus2', 'graduate', 'foundation_cleared'
  const [accommodation, setAccommodation] = useState('girls_hostel'); // 'girls_hostel', 'boys_hostel', 'dayscholar'
  const [targetTerm, setTargetTerm] = useState('dec2025'); // 'dec2025', 'june2026'
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = (e) => {
    e.preventDefault();
    sound.playChime(659.25, 0.4);
    setCalculated(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#7d0a42', '#aa1860', '#b45309', '#0f172a'],
      });
    } catch {
      // safe fallback
    }
  };

  const getRecommendation = () => {
    if (qualification === 'plus2') {
      return {
        entry: 'CMA Foundation Route',
        timeline: 'Approx 3 Years (Foundation + Inter + Final + Practical Training)',
        immediateStep: 'Enroll in CMA Foundation (Morning Regular or Full-Day Immersion)',
        hostelText: accommodation.includes('hostel')
          ? `Priority reservation in ${accommodation === 'girls_hostel' ? "Tesser Girls' Residence" : "Tesser Boys' Residence"} in Attingal.`
          : 'Day scholar batch with early transport connectivity.',
        whatsappText: `Hello Tesser Institute, I completed Plus Two (+2) and wish to join CMA Foundation with ${accommodation.replace('_', ' ')} for the ${targetTerm} exam term.`,
      };
    } else if (qualification === 'graduate') {
      return {
        entry: 'Direct Entry to CMA Intermediate',
        timeline: 'Approx 2 Years (Direct Inter Both Groups + Final + Articleship)',
        immediateStep: 'Exempt from Foundation! Direct registration for CMA Inter Group 1 & 2',
        hostelText: accommodation.includes('hostel')
          ? `Priority executive desk in ${accommodation === 'girls_hostel' ? "Tesser Girls' Residence" : "Tesser Boys' Residence"}.`
          : 'Day scholar full-immersion schedule.',
        whatsappText: `Hello Tesser Institute, I am a Graduate eligible for Direct Entry into CMA Intermediate. I need details on batch timing and ${accommodation.replace('_', ' ')}.`,
      };
    } else {
      return {
        entry: 'CMA Intermediate Group 1 & 2 Fast Track',
        timeline: '1.5 to 2 Years to Final Certification',
        immediateStep: 'Intensive Numerical Problem Labs and Daily 45m Model Tests',
        hostelText: accommodation.includes('hostel')
          ? `Dedicated quiet study pod in ${accommodation === 'girls_hostel' ? "Girls Hostel" : "Boys Hostel"} in Attingal.`
          : 'Day scholar batch.',
        whatsappText: `Hello Tesser Institute, I have passed CMA Foundation and want to join CMA Inter Both Groups with ${accommodation.replace('_', ' ')}.`,
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="calculator" style={{ padding: '100px 0', backgroundColor: '#faf8f9', position: 'relative' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 50px auto' }}>
          <span className="section-tag">PERSONALIZED ADMISSION ADVISOR</span>
          <h2 className="section-title">
            Find Your Exact <br />
            <span className="gradient-text-plum">CMA Entry Roadmap.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Whether you are stepping out of 12th standard or graduating from college, our intelligent eligibility engine maps your accelerated route to becoming a Cost and Management Accountant.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '42px 36px',
            background: '#ffffff',
            borderRadius: 24,
            border: '1px solid rgba(125, 10, 66, 0.18)',
            boxShadow: '0 16px 45px -8px rgba(125, 10, 66, 0.08)',
          }}
        >
          <form onSubmit={handleCalculate}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 28,
                marginBottom: 36,
              }}
            >
              {/* Question 1: Qualification */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: '#7d0a42',
                    fontWeight: 800,
                    marginBottom: 10,
                    letterSpacing: '0.05em',
                  }}
                >
                  1. YOUR CURRENT QUALIFICATION
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 12,
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    color: '#0f172a',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    outline: 'none',
                    boxShadow: '0 2px 4px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <option value="plus2">Passed 10+2 / Higher Secondary (Plus Two)</option>
                  <option value="graduate">Graduate (B.Com / BBA / Any Degree Direct Entry)</option>
                  <option value="foundation_cleared">Already Cleared CMA Foundation</option>
                </select>
              </div>

              {/* Question 2: Accommodation */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: '#7d0a42',
                    fontWeight: 800,
                    marginBottom: 10,
                    letterSpacing: '0.05em',
                  }}
                >
                  2. ACCOMMODATION PREFERENCE
                </label>
                <select
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 12,
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    color: '#0f172a',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    outline: 'none',
                    boxShadow: '0 2px 4px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <option value="girls_hostel">Girls Hostel (Residential in Attingal)</option>
                  <option value="boys_hostel">Boys Hostel (Residential in Attingal)</option>
                  <option value="dayscholar">Day Scholar (Local Attingal / Trivandrum)</option>
                </select>
              </div>

              {/* Question 3: Target Exam Term */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: '#7d0a42',
                    fontWeight: 800,
                    marginBottom: 10,
                    letterSpacing: '0.05em',
                  }}
                >
                  3. TARGET EXAM TERM
                </label>
                <select
                  value={targetTerm}
                  onChange={(e) => setTargetTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: 12,
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    color: '#0f172a',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    outline: 'none',
                    boxShadow: '0 2px 4px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <option value="dec2025">December 2025 ICMAI Exam Term</option>
                  <option value="june2026">June 2026 ICMAI Exam Term</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="btn-primary-plum shimmer-sweep"
                style={{ padding: '16px 36px', fontSize: '1rem' }}
              >
                <Calculator size={18} />
                <span>Calculate My Dimension Roadmap</span>
              </button>
            </div>
          </form>

          {/* Result Output Window */}
          <AnimatePresence>
            {calculated && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  marginTop: 36,
                  paddingTop: 32,
                  borderTop: '1px solid #f1f5f9',
                }}
              >
                <div
                  style={{
                    background: '#fdf2f7',
                    border: '1.5px solid rgba(125, 10, 66, 0.25)',
                    borderRadius: 18,
                    padding: '30px 26px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#7d0a42', marginBottom: 10 }}>
                    <Sparkles size={18} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.1em' }}>
                      YOUR TAILORED ADMISSION VERDICT
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 900,
                      color: '#0f172a',
                      marginBottom: 14,
                    }}
                  >
                    {rec.entry}
                  </h3>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: 16,
                      marginBottom: 26,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <GraduationCap size={18} style={{ color: '#7d0a42', flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>IMMEDIATE ACTION</div>
                        <div style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 700 }}>{rec.immediateStep}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <Clock size={18} style={{ color: '#b45309', flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>ESTIMATED TIME TO CMA</div>
                        <div style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 700 }}>{rec.timeline}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <Home size={18} style={{ color: '#047857', flexShrink: 0, marginTop: 2 }} />
                      <div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>CAMPUS ACCOMMODATION</div>
                        <div style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 700 }}>{rec.hostelText}</div>
                      </div>
                    </div>
                  </div>

                  {/* Immediate WhatsApp Pre-filled trigger */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                    <a
                      href={`https://wa.me/919567115221?text=${encodeURIComponent(rec.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-plum"
                      style={{ padding: '14px 28px', fontSize: '0.94rem' }}
                    >
                      <Send size={16} />
                      <span>Send Application to WhatsApp (9567115221)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        if (onOpenModal) onOpenModal();
                      }}
                      className="btn-secondary-charcoal"
                      style={{ padding: '14px 24px', fontSize: '0.94rem' }}
                    >
                      <span>Book In-Person Campus Visit</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
