import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { sound } from '../utils/sound';

export default function TestimonialsAndFaculty() {
  const reviews = [
    {
      name: 'Adithyan S. Nair',
      role: 'CMA Intermediate (Both Groups Cleared)',
      text: 'Joining Tesser was the turning point in my CMA journey. Most colleges in TVM combine CA and CMA classes, but Tesser is 100% focused on ICMAI pattern. The daily 45-minute tests made the real exam feel like just another routine day at the campus.',
      score: 5,
      batch: '2024 Batch',
    },
    {
      name: 'Ananya Krishnan',
      role: 'CMA Foundation Top Scorer',
      text: "Coming from a science background in +2, I was terrified of accounting fundamentals. The faculty at Tesser gave me individual attention that bridge-course tutors never provide. The girls' hostel in Attingal is super safe, calm, and perfect for focused study.",
      score: 5,
      batch: '2024 Batch (Hostelite)',
    },
    {
      name: 'Rahul Varma',
      role: 'CMA Inter Group 1 Rank Aspirant',
      text: 'The small batch size of 25 is real, not just a marketing gimmick. If you miss a step in Cost Accounting or GST, the faculty notices immediately during the same-day test evaluation. No commute stress thanks to the on-campus boys hostel.',
      score: 5,
      batch: '2024 Batch (Hostelite)',
    },
  ];

  const faculty = [
    {
      name: 'CMA Harikrishnan R.',
      designation: 'Senior Faculty & Cost Audit Specialist',
      papers: 'Strategic Cost Management & Decision Making',
      experience: '12+ Years ICMAI Coaching',
    },
    {
      name: 'Adv. Meenakshi S.',
      designation: 'Corporate Law & Taxation Consultant',
      papers: 'Corporate Laws, Direct & Indirect Tax (GST)',
      experience: '9+ Years Professional Bar & Academics',
    },
    {
      name: 'Prof. Suresh Kumar FCA',
      designation: 'Financial Accounting & Valuation Chair',
      papers: 'Corporate Financial Reporting & Financial Management',
      experience: '15+ Years Elite Mentorship',
    },
  ];

  return (
    <section id="reviews" style={{ padding: '100px 0', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 60px auto' }}>
          <span className="section-tag">FACULTY EXCELLENCE &amp; CREDIBILITY</span>
          <h2 className="section-title">
            Guided by Masters. <br />
            <span className="gradient-text-plum">Proven by Results.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            At Tesser, you are mentored by practicing CMAs and chartered professionals who have mastered the exact psychology of ICMAI evaluations.
          </p>
        </div>

        {/* Faculty Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 70,
          }}
        >
          {faculty.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.16)',
                borderRadius: 20,
                padding: '30px 26px',
                boxShadow: '0 4px 18px rgba(125, 10, 66, 0.04)',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #931252, #7d0a42)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(125, 10, 66, 0.25)',
                  }}
                >
                  {f.name.split(' ')[1]?.[0] || 'T'}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#0f172a',
                    }}
                  >
                    {f.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    {f.designation}
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#fdf2f7',
                  borderRadius: 12,
                  padding: '12px 16px',
                  marginBottom: 14,
                  border: '1px solid rgba(125, 10, 66, 0.1)',
                }}
              >
                <div style={{ fontSize: '0.74rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  PRIMARY MODULES:
                </div>
                <div style={{ fontSize: '0.88rem', color: '#0f172a', fontWeight: 600, marginTop: 2 }}>
                  {f.papers}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.8rem',
                  color: '#15803d',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                }}
              >
                <CheckCircle size={15} />
                <span>{f.experience}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Spotlight Banner */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid rgba(125, 10, 66, 0.2)',
            borderRadius: 22,
            padding: '30px 32px',
            marginBottom: 60,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            boxShadow: '0 12px 35px -5px rgba(125, 10, 66, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: '#fef3c7',
                border: '1px solid #fde68a',
                padding: '10px 18px',
                borderRadius: 14,
              }}
            >
              <Star size={22} fill="#d97706" color="#d97706" />
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#b45309', fontFamily: 'var(--font-display)' }}>
                5.0
              </span>
            </div>
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                Highly Rated by Students on Google Reviews
              </h4>
              <p style={{ fontSize: '0.86rem', color: '#475569' }}>
                "Tesser Institute Attingal — Top Professional Coaching for Cost &amp; Management Accounting"
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a
              href="https://www.google.com/search?q=Tesser+Institute"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="btn-secondary-charcoal"
              style={{ padding: '11px 22px', fontSize: '0.88rem' }}
            >
              <span>View On Google Search</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="https://www.instagram.com/tesser_official/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="btn-primary-plum"
              style={{ padding: '11px 22px', fontSize: '0.88rem' }}
            >
              <InstagramIcon size={16} color="#ffffff" />
              <span>@tesser_official</span>
            </a>
          </div>
        </div>

        {/* Student Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: 24,
          }}
        >
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.14)',
                borderRadius: 20,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 6px 20px -3px rgba(125, 10, 66, 0.05)',
                transition: 'all 0.3s ease',
              }}
            >
              <Quote
                size={40}
                style={{
                  color: 'rgba(125, 10, 66, 0.08)',
                  position: 'absolute',
                  top: 20,
                  right: 20,
                }}
              />

              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(rev.score)].map((_, s) => (
                  <Star key={s} size={16} fill="#d97706" color="#d97706" />
                ))}
              </div>

              <p
                style={{
                  color: '#334155',
                  fontSize: '0.94rem',
                  lineHeight: 1.65,
                  marginBottom: 24,
                  flexGrow: 1,
                  fontWeight: 450,
                }}
              >
                "{rev.text}"
              </p>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16 }}>
                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.02rem' }}>
                  {rev.name}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#7d0a42', marginTop: 2, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {rev.role} • {rev.batch}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
