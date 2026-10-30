import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Cpu, Award, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function DimensionPhilosophy() {
  const [activeTab, setActiveTab] = useState('tesser'); // 'tesser' vs 'traditional'

  const pillars = [
    {
      id: '01',
      icon: <Target size={24} style={{ color: '#7d0a42' }} />,
      title: 'Zero Syllabus Dilution',
      description:
        'We do not offer CA, CS, or general B.Com. 100% of our academic infrastructure, faculty hours, and mock test papers are engineered exclusively for ICMAI Cost & Management Accounting.',
      stat: '100% Exclusive',
    },
    {
      id: '02',
      icon: <Zap size={24} style={{ color: '#b45309' }} />,
      title: 'The Daily Testing Discipline',
      description:
        'Waiting for term exams is obsolete. Tesser students write daily 45-minute timed exam papers matching exact ICMAI standards, turning exam anxiety into habitual reflex.',
      stat: 'Daily 45m Tests',
    },
    {
      id: '03',
      icon: <Cpu size={24} style={{ color: '#047857' }} />,
      title: 'Small Cohort Micro-Mentorship',
      description:
        'Capped at small batches so no student remains a face in the crowd. Faculty track every individual numerical mistake in cost accounting and law interpretation.',
      stat: 'Max 25 Cohort',
    },
    {
      id: '04',
      icon: <Award size={24} style={{ color: '#0284c7' }} />,
      title: 'Residential Immersion in Attingal',
      description:
        'Dedicated modern hostel facilities for boys and girls with supervised evening study hours, hygienic dining, and zero daily commute fatigue.',
      stat: 'Boys & Girls Hostels',
    },
  ];

  return (
    <section id="philosophy" style={{ padding: '100px 0', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 60px auto' }}>
          <span className="section-tag">THE PHILOSOPHY OF EXCLUSIVITY</span>
          <h2 className="section-title">
            Why CMA Cannot Be Taught Like <br />
            <span className="gradient-text-plum">Ordinary Commerce.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Cost and Management Accounting demands surgical precision in corporate strategy, financial control, and indirect taxation. A generalized coaching center treats CMA as an afterthought. At Tesser, it is our singular mission.
          </p>
        </div>

        {/* Interactive Comparison Switcher */}
        <div 
          style={{
            maxWidth: 960,
            margin: '0 auto 70px auto',
            padding: '36px 32px',
            background: '#ffffff',
            borderRadius: 22,
            border: '1px solid rgba(125, 10, 66, 0.16)',
            boxShadow: '0 12px 35px -5px rgba(125, 10, 66, 0.08)',
          }}
        >
          {/* Toggle Buttons */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              marginBottom: 32,
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('tesser');
              }}
              style={{
                padding: '12px 26px',
                borderRadius: 9999,
                fontFamily: 'var(--font-display)',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: activeTab === 'tesser' ? '1px solid #7d0a42' : '1px solid #e2e8f0',
                background: activeTab === 'tesser' ? 'linear-gradient(135deg, #931252, #7d0a42)' : '#ffffff',
                color: activeTab === 'tesser' ? '#ffffff' : '#64748b',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === 'tesser' ? '0 8px 20px rgba(125, 10, 66, 0.3)' : 'none',
              }}
            >
              ★ The TESSER "Next Dimension" Protocol
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('traditional');
              }}
              style={{
                padding: '12px 26px',
                borderRadius: 9999,
                fontFamily: 'var(--font-display)',
                fontSize: '0.92rem',
                fontWeight: 600,
                border: activeTab === 'traditional' ? '1px solid #94a3b8' : '1px solid #e2e8f0',
                background: activeTab === 'traditional' ? '#f1f5f9' : '#ffffff',
                color: activeTab === 'traditional' ? '#0f172a' : '#64748b',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Conventional Coaching Centers
            </button>
          </div>

          {/* Comparison Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {activeTab === 'tesser' ? (
              <>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={22} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '1.02rem', fontWeight: 800, marginBottom: 4 }}>
                      100% Dedicated CMA Faculty
                    </h4>
                    <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      Professors who live and breathe ICMAI criteria, with specialized industry experience in costing and forensic accounting.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={22} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '1.02rem', fontWeight: 800, marginBottom: 4 }}>
                      Daily ICMAI Test Simulation
                    </h4>
                    <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      Students write daily timed answer papers. Mistakes are corrected within 24 hours, guaranteeing rapid compounding mastery.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={22} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '1.02rem', fontWeight: 800, marginBottom: 4 }}>
                      Strict Small Batches
                    </h4>
                    <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      Every student is assigned a dedicated faculty mentor to monitor mental stamina, study schedules, and doubt resolution.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={22} style={{ color: '#16a34a', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '1.02rem', fontWeight: 800, marginBottom: 4 }}>
                      On-Campus Hostel Eco-System
                    </h4>
                    <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      Separate modern hostels for boys and girls in Attingal. Clean, quiet study rooms that remove travel exhaustion.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <XCircle size={22} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#475569', fontSize: '1.02rem', fontWeight: 700, marginBottom: 4 }}>
                      Mixed Mass Classrooms
                    </h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      100 to 200 students packed together with CA and B.Com students, where individual doubts get lost.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <XCircle size={22} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#475569', fontSize: '1.02rem', fontWeight: 700, marginBottom: 4 }}>
                      Infrequent Monthly Exams
                    </h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      Only conducting a mock test at the very end of syllabus completion, leaving zero time to fix conceptual flaws.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <XCircle size={22} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#475569', fontSize: '1.02rem', fontWeight: 700, marginBottom: 4 }}>
                      Zero Residential Support
                    </h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      Students lose 2 to 3 hours every day commuting from rural Trivandrum, draining their study focus and energy.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <XCircle size={22} style={{ color: '#dc2626', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ color: '#475569', fontSize: '1.02rem', fontWeight: 700, marginBottom: 4 }}>
                      CMA Treated as Secondary
                    </h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.55 }}>
                      Most institutions prioritize CA and offer CMA as a sideline option with shared, generic notes.
                    </p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: 24,
          }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              whileHover={{ y: -6 }}
              onMouseEnter={() => sound.playClick()}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.14)',
                borderRadius: 20,
                padding: '32px 26px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px -2px rgba(125, 10, 66, 0.04)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: '#fdf2f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(125, 10, 66, 0.16)',
                  }}
                >
                  {pillar.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: '#7d0a42',
                    fontWeight: 800,
                  }}
                >
                  PILLAR {pillar.id}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: 12,
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  color: '#334155',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: 20,
                  flexGrow: 1,
                }}
              >
                {pillar.description}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#7d0a42',
                  background: '#fdf2f7',
                  padding: '6px 14px',
                  borderRadius: 8,
                  alignSelf: 'flex-start',
                  border: '1px solid rgba(125, 10, 66, 0.12)',
                }}
              >
                <ChevronRight size={14} style={{ color: '#7d0a42' }} />
                <span>{pillar.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
