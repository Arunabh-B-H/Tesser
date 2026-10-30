import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, BookCheck, Award, MessageSquareCheck, Moon } from 'lucide-react';
import { sound } from '../utils/sound';

export default function DailyDiscipline() {
  const [activeStep, setActiveStep] = useState(2); // Default on Daily Test

  const schedule = [
    {
      time: '08:30 AM - 11:00 AM',
      period: 'MORNING DRILL',
      title: 'Deep Concept Ingestion',
      desc: 'High-focus faculty masterclasses exploring core accounting theorems, statutory legal precedents, and mathematical costing models.',
      icon: <BrainCircuit size={20} />,
      tag: 'Faculty Masterclass',
    },
    {
      time: '11:30 AM - 01:15 PM',
      period: 'MIDDAY WORKSHOP',
      title: 'Practical Numerical Solving Labs',
      desc: 'Hands-on calculation sprints where students solve past 10-year ICMAI RTP (Revision Test Papers) and MTPs with step-by-step working notes.',
      icon: <BookCheck size={20} />,
      tag: 'Practical Drill',
    },
    {
      time: '02:00 PM - 03:00 PM',
      period: 'THE SIGNATURE RITUAL',
      title: 'Daily ICMAI Model Test',
      desc: 'Every single day, students sit in exam hall silence for a strict 45-minute timed test. This systematically eliminates exam phobia.',
      icon: <Award size={20} />,
      tag: 'Non-Negotiable',
      highlight: true,
    },
    {
      time: '03:45 PM - 05:30 PM',
      period: 'AFTERNOON ANALYTICS',
      title: '1-on-1 Mentor Diagnostic',
      desc: 'The morning test is graded same-day. Faculty sits with the student to review calculation errors, time management, and presentation aesthetics.',
      icon: <MessageSquareCheck size={20} />,
      tag: 'Personal Mentoring',
    },
    {
      time: '06:30 PM - 09:30 PM',
      period: 'EVENING IMMERSION',
      title: 'Supervised Hostel Study Pods',
      desc: 'Students at the boys and girls hostels continue disciplined study hours in quiet library suites with resident tutor doubt support.',
      icon: <Moon size={20} />,
      tag: 'Hostel Protocol',
    },
  ];

  return (
    <section id="discipline" style={{ padding: '100px 0', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 60px auto' }}>
          <span className="section-tag">THE REPEATABLE FORMULA</span>
          <h2 className="section-title">
            The Daily Discipline Engine <br />
            <span className="gradient-text-plum">Behind CMA AIR Ranks.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Success in CMA is not an accident of genius—it is the compounding result of daily tests, immediate feedback loops, and structured hostel immersion in Attingal.
          </p>
        </div>

        {/* Interactive Schedule Timeline */}
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          {schedule.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.01 }}
                onClick={() => {
                  sound.playClick();
                  setActiveStep(idx);
                }}
                style={{
                  padding: '24px 28px',
                  cursor: 'pointer',
                  borderRadius: 18,
                  border: isSelected ? '2px solid #7d0a42' : '1px solid rgba(125, 10, 66, 0.14)',
                  background: isSelected ? '#fdf2f7' : '#ffffff',
                  boxShadow: isSelected 
                    ? '0 12px 35px -5px rgba(125, 10, 66, 0.15)' 
                    : '0 4px 15px -2px rgba(125, 10, 66, 0.04)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                  }}
                >
                  {/* Left block: Time & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: isSelected ? '#7d0a42' : '#fdf2f7',
                        color: isSelected ? '#ffffff' : '#7d0a42',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        border: isSelected ? 'none' : '1px solid rgba(125, 10, 66, 0.2)',
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.76rem',
                          color: '#7d0a42',
                          letterSpacing: '0.08em',
                          fontWeight: 700,
                        }}
                      >
                        {item.time} • {item.period}
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#0f172a',
                          marginTop: 2,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Right block: Badge */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        padding: '6px 14px',
                        borderRadius: 9999,
                        background: item.highlight ? '#7d0a42' : '#ffffff',
                        border: item.highlight ? '1px solid #7d0a42' : '1px solid rgba(125, 10, 66, 0.2)',
                        color: item.highlight ? '#ffffff' : '#7d0a42',
                        boxShadow: item.highlight ? '0 4px 12px rgba(125, 10, 66, 0.25)' : 'none',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Expanded description on selected */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{
                      marginTop: 18,
                      paddingTop: 16,
                      borderTop: '1px solid rgba(125, 10, 66, 0.12)',
                      color: '#334155',
                      fontSize: '0.94rem',
                      lineHeight: 1.6,
                      fontWeight: 500,
                    }}
                  >
                    {item.desc}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
