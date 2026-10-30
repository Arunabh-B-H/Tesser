import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Clock, Users, Building, ShieldCheck, ArrowUpRight, Flame } from 'lucide-react';
import { sound } from '../utils/sound';

export default function HeroAnnouncementStrip({ onOpenModal }) {
  const tickerItems = [
    {
      icon: <Sparkles size={15} color="#f0c76d" />,
      tag: 'ADMISSIONS 2025–26',
      text: 'Admissions Open for CMA Foundation, Inter & Final Batches',
      action: 'Apply Now',
    },
    {
      icon: <Award size={15} color="#f0c76d" />,
      tag: 'PROVEN RANKS',
      text: 'ICMAI All India Rank 8, 15 & 24 Produced in Kerala',
      action: 'View Toppers',
    },
    {
      icon: <Building size={15} color="#f0c76d" />,
      tag: 'EXCLUSIVE CAMPUS',
      text: "South Kerala's First Exclusively Dedicated CMA Campus at Attingal, TVM",
      action: 'Explore Campus',
    },
    {
      icon: <Clock size={15} color="#f0c76d" />,
      tag: 'TESTING ENGINE',
      text: 'Daily 45-Minute Timed ICMAI Pattern Exam with Same-Day Faculty Feedback',
      action: 'Learn More',
    },
    {
      icon: <Users size={15} color="#f0c76d" />,
      tag: '1:25 MICRO-COHORTS',
      text: 'Strict 25-Student Batch Cap for Uncompromised Personal Attention',
      action: 'Check Seats',
    },
    {
      icon: <ShieldCheck size={15} color="#f0c76d" />,
      tag: 'HOSTELS & LIVING',
      text: 'Safe Supervised Boys & Girls Hostels with 24/7 Study Atmosphere',
      action: 'Inspect Hostels',
    },
    {
      icon: <Flame size={15} color="#f0c76d" />,
      tag: 'FACULTY GUILD',
      text: 'Direct Mentorship by Practicing Cost Accountants & Industry Leaders',
      action: 'Meet Faculty',
    },
  ];

  // Duplicate items for seamless infinite marquee loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 20,
        backgroundColor: '#4e0629',
        background: 'linear-gradient(90deg, #3d0320 0%, #6e093a 50%, #3d0320 100%)',
        borderTop: '1px solid rgba(240, 199, 109, 0.25)',
        borderBottom: '1px solid rgba(240, 199, 109, 0.25)',
        boxShadow: '0 8px 24px -4px rgba(78, 6, 41, 0.25)',
        overflow: 'hidden',
        padding: '12px 0',
      }}
    >
      <div className="marquee-container marquee-mask" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="marquee-track-hero">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                sound.playClick();
                if (onOpenModal) onOpenModal();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '0 28px',
                cursor: 'pointer',
                userSelect: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Icon */}
              <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {item.icon}
              </span>

              {/* Tag */}
              <span
                style={{
                  background: 'rgba(240, 199, 109, 0.18)',
                  border: '1px solid rgba(240, 199, 109, 0.35)',
                  color: '#f0c76d',
                  borderRadius: 6,
                  padding: '2px 8px',
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                }}
              >
                {item.tag}
              </span>

              {/* Text */}
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {item.text}
              </span>

              {/* Action pill */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 3,
                  color: '#f0c76d',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                <span>{item.action}</span>
                <ArrowUpRight size={12} />
              </span>

              {/* Diamond Divider */}
              <span style={{ color: 'rgba(240, 199, 109, 0.4)', fontSize: '0.9rem', marginLeft: 16 }}>
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

