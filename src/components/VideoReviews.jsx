import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Star, CheckCircle, Video, ArrowUpRight, Award, Clock, ShieldCheck, Building, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function VideoReviews({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'reviews', 'campus', 'masterclass'
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 'video-1',
      category: 'reviews',
      title: 'How Daily 45-Min Tests Made CMA Inter Feel Like a Routine',
      speaker: 'Adithyan S. Nair',
      role: 'CMA Inter Both Groups Cleared • Attingal Campus',
      tag: 'STUDENT TOPPER STORY',
      duration: '2:45 min',
      thumbnail: '/assets/video_student.jpg',
      quote: 'At big coaching centres with 150 students, your doubts get lost. At Tesser, the faculty sits with your test paper every evening by 6 PM.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1', // Fallback embed link
      videoSummary: 'Adithyan details his transformation from struggling with Cost Accounting formulas to securing high marks in both groups through Tesser’s daily 45-minute timed test protocol.',
      highlights: [
        'Daily 45-min descriptive test simulating ICMAI answer booklet',
        'Same-day correction with individual marks deduction analysis',
        'Zero travel fatigue staying at the on-campus boys hostel',
      ],
    },
    {
      id: 'video-2',
      category: 'campus',
      title: 'Tesser Boys & Girls Hostel Walkthrough: 24/7 Study Atmosphere',
      speaker: 'Meera S. & Rahul V.',
      role: 'Hostel Residents • CMA Intermediate Batch',
      tag: 'HOSTEL & LIVING TOUR',
      duration: '3:12 min',
      thumbnail: '/assets/hostel.jpg',
      quote: 'Clean rooms, nutritious food, high-speed WiFi, and quiet evening study tables. Living in Attingal next to campus saves 2.5 hours of daily travel.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
      videoSummary: 'A 360-degree tour of the safe, supervised residential hostels for boys and girls in Attingal with warden supervision, dedicated study halls, and dining hygiene.',
      highlights: [
        'Separate safe hostels for boys and girls in Attingal',
        'Healthy home-style food tailored for long study hours',
        'Structured evening study hours with peer problem-solving pods',
      ],
    },
    {
      id: 'video-3',
      category: 'reviews',
      title: 'From +2 Commerce to CMA Foundation Top Ranker (362/400)',
      speaker: 'Ananya Krishnan',
      role: 'CMA Foundation Scorer • Direct Entry to Inter',
      tag: 'FOUNDATION EXCELLENCE',
      duration: '1:58 min',
      thumbnail: '/assets/video_student.jpg',
      quote: 'I cleared CMA Foundation with 362 marks out of 400. The speed math drills and business law case study shortcuts made all the difference.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
      videoSummary: 'Ananya walks through how Tesser’s Foundation curriculum bridge courses give students a rock-solid base before stepping into Intermediate.',
      highlights: [
        'Daily 50-MCQ speed drill with real-time accuracy scoring',
        'Special bridge classes for Business Mathematics & Statistics',
        'Seamless transition into CMA Intermediate Group 1',
      ],
    },
    {
      id: 'video-4',
      category: 'masterclass',
      title: 'Inside a Tesser Masterclass: Tackling 16-Mark Costing Case Studies',
      speaker: 'CMA Harikrishnan R.',
      role: 'Senior Cost Audit Specialist • Lead Faculty',
      tag: 'FACULTY MASTERCLASS',
      duration: '4:15 min',
      thumbnail: '/assets/video_faculty.jpg',
      quote: 'ICMAI questions are not testing your memory; they test your executive decision-making. Here is the exact mental model we teach.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
      videoSummary: 'Sample classroom excerpt demonstrating how Tesser faculty break down complex Decision Making and Marginal Costing problems into repeatable algorithms.',
      highlights: [
        'Step-by-step formula breakdown on interactive digital smartboards',
        'Common ICMAI trap identification and scoring secrets',
        'Interactive Q&A with real-time doubt dissolution',
      ],
    },
    {
      id: 'video-5',
      category: 'campus',
      title: 'Campus Tour: Smart AC Classrooms, Computer Labs & Discussion Pods',
      speaker: 'Academic Coordinator',
      role: 'Tesser Institute • Attingal, Trivandrum',
      tag: 'CAMPUS INFRASTRUCTURE',
      duration: '2:50 min',
      thumbnail: '/assets/classroom.jpg',
      quote: 'South Kerala’s first professional campus designed exclusively for CMA with air-conditioned modern halls and SAP accounting labs.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
      videoSummary: 'Take a virtual walk through the modern educational infrastructure at Attingal, TVM, built specifically for professional commerce education.',
      highlights: [
        'Ergonomic seating capped at 25 students per classroom',
        'Acoustically treated smart lecture halls',
        'Central Attingal location with easy bus and transport connectivity',
      ],
    },
    {
      id: 'video-6',
      category: 'reviews',
      title: 'Why Parents from TVM & Kollam Entrust Tesser for CMA Coaching',
      speaker: 'Dr. Suresh Babu & Bindu S.',
      role: 'Parents of CMA Aspirant • Trivandrum',
      tag: 'PARENT REVIEW',
      duration: '2:15 min',
      thumbnail: '/assets/video_student.jpg',
      quote: 'We wanted an institute that doesn’t treat education like a factory. Tesser gives personal mentor updates every Saturday.',
      embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
      videoSummary: 'Parents share their feedback on student safety, hostel discipline, daily test report cards, and the moral support provided by Tesser mentors.',
      highlights: [
        'Weekly WhatsApp progress report to parents',
        'Strict hostel safety with biometric entry and round-the-clock wardens',
        '100% focus on CMA — no mixed distractions',
      ],
    },
  ];

  const filteredVideos = activeTab === 'all' ? videos : videos.filter((v) => v.category === activeTab);

  const handleOpenVideo = (video) => {
    sound.playClick();
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    sound.playClick();
    setActiveVideo(null);
  };

  // Corporate hiring & placement logos inspired by Triple i & Xylem
  const corporatePartners = [
    { name: 'Deloitte', role: 'Cost Analyst & Audit' },
    { name: 'PwC', role: 'Management Consulting' },
    { name: 'EY', role: 'Financial Due Diligence' },
    { name: 'KPMG', role: 'Risk & Internal Audit' },
    { name: 'Tata Motors', role: 'Plant Cost Controller' },
    { name: 'Reliance Industries', role: 'Treasury & Taxation' },
    { name: 'Indian Oil', role: 'PSU Senior Accountant' },
    { name: 'ITC Limited', role: 'Commercial Executive' },
  ];

  return (
    <section id="videos" style={{ padding: '100px 0', backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container-max" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 50px auto' }}>
          <div className="badge-plum" style={{ marginBottom: 12 }}>
            <Video size={13} style={{ marginRight: 6 }} />
            <span>AUTHENTIC EXPERIENCES &amp; VIDEO ARCHIVES</span>
          </div>
          <h2 className="section-title">
            Real Aspirants. Real Milestones. <br />
            <span className="gradient-text-plum">Hear From the Next Dimension.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Watch genuine student testimonials, verified topper strategies, hostel living tours, and inside glimpses of our high-intensity CMA training in Attingal.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 44,
            flexWrap: 'wrap',
          }}
        >
          {[
            { id: 'all', label: 'All Video Stories' },
            { id: 'reviews', label: 'Student & Topper Reviews' },
            { id: 'campus', label: 'Campus & Hostel Tour' },
            { id: 'masterclass', label: 'Faculty Masterclass' },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(tab.id);
                }}
                style={{
                  padding: '10px 22px',
                  borderRadius: 12,
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  border: isSelected ? '1.5px solid #7d0a42' : '1.5px solid #e2e8f0',
                  background: isSelected ? 'linear-gradient(135deg, #931252, #7d0a42)' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#475569',
                  boxShadow: isSelected ? '0 8px 20px -3px rgba(125, 10, 66, 0.3)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: 28,
            marginBottom: 64,
          }}
        >
          <AnimatePresence>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid rgba(125, 10, 66, 0.16)',
                  borderRadius: 22,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 6px 24px -4px rgba(125, 10, 66, 0.06)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(125, 10, 66, 0.38)';
                  e.currentTarget.style.boxShadow = '0 16px 36px -6px rgba(125, 10, 66, 0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(125, 10, 66, 0.16)';
                  e.currentTarget.style.boxShadow = '0 6px 24px -4px rgba(125, 10, 66, 0.06)';
                }}
              >
                {/* 16:9 Thumbnail Poster with Play Trigger */}
                <div
                  onClick={() => handleOpenVideo(video)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '56.25%', // 16:9 Aspect Ratio
                    overflow: 'hidden',
                    cursor: 'pointer',
                    backgroundColor: '#1e293b',
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.45s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Gradient Scrim */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.15) 60%, rgba(15, 23, 42, 0.35) 100%)',
                    }}
                  />

                  {/* Category Tag on Top-Left */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#7d0a42',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: 6,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {video.tag}
                  </div>

                  {/* Duration Pill on Bottom-Right */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 14,
                      right: 14,
                      background: 'rgba(0, 0, 0, 0.75)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <Clock size={11} />
                    <span>{video.duration}</span>
                  </div>

                  {/* Central Radiant Play Button */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 58,
                      height: 58,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #931252, #7d0a42)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      boxShadow: '0 8px 25px rgba(125, 10, 66, 0.5), 0 0 0 5px rgba(255, 255, 255, 0.25)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    className="play-btn-pulse"
                  >
                    <Play size={22} fill="#ffffff" style={{ marginLeft: 3 }} />
                  </div>
                </div>

                {/* Card Details & Quote */}
                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.4,
                      marginBottom: 10,
                    }}
                  >
                    {video.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#7d0a42' }}>
                      {video.speaker}
                    </span>
                    <span style={{ color: '#94a3b8' }}>•</span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                      {video.role}
                    </span>
                  </div>

                  {/* Quote Snippet */}
                  <div
                    style={{
                      background: '#fdf2f7',
                      borderLeft: '3px solid #7d0a42',
                      padding: '12px 14px',
                      borderRadius: '0 10px 10px 0',
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    <p style={{ fontSize: '0.86rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.55 }}>
                      "{video.quote}"
                    </p>
                  </div>

                  {/* Watch Video CTA Button */}
                  <button
                    onClick={() => handleOpenVideo(video)}
                    style={{
                      width: '100%',
                      padding: '11px 16px',
                      borderRadius: 10,
                      background: '#ffffff',
                      border: '1.5px solid rgba(125, 10, 66, 0.25)',
                      color: '#7d0a42',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.86rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#7d0a42';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#7d0a42';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#7d0a42';
                      e.currentTarget.style.borderColor = 'rgba(125, 10, 66, 0.25)';
                    }}
                  >
                    <Play size={14} fill="currentColor" />
                    <span>Watch Full Review &amp; Experience</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Competitor Inspiration Feature: Corporate Placements & Career Landscape */}
        <div
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fdf2f7 100%)',
            border: '1.5px solid rgba(125, 10, 66, 0.22)',
            borderRadius: 24,
            padding: '36px 32px',
            marginBottom: 30,
            boxShadow: '0 10px 30px rgba(125, 10, 66, 0.05)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              borderBottom: '1px solid rgba(125, 10, 66, 0.12)',
              paddingBottom: 24,
              marginBottom: 24,
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <Building size={16} style={{ color: '#7d0a42' }} />
                <span style={{ fontSize: '0.8rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                  INDUSTRY PLACEMENTS &amp; RECOGNITION
                </span>
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a' }}>
                Where Tesser CMA Graduates Command Starting Packages of ₹7L to ₹22L+
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(125, 10, 66, 0.18)',
                  padding: '8px 16px',
                  borderRadius: 12,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#7d0a42', fontFamily: 'var(--font-display)' }}>
                  88.4%
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>
                  Foundation Pass Rate
                </div>
              </div>

              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(125, 10, 66, 0.18)',
                  padding: '8px 16px',
                  borderRadius: 12,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0f172a', fontFamily: 'var(--font-display)' }}>
                  25 Max
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700 }}>
                  Students / Batch
                </div>
              </div>
            </div>
          </div>

          {/* Marquee/Grid of Corporate Recruiters */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 14,
            }}
          >
            {corporatePartners.map((corp, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(125, 10, 66, 0.1)',
                  padding: '12px 16px',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                }}
              >
                <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.94rem' }}>
                  {corp.name}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  {corp.role}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Fast Action Prompt */}
          <div
            style={{
              marginTop: 26,
              paddingTop: 20,
              borderTop: '1px dashed rgba(125, 10, 66, 0.18)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Sparkles size={18} style={{ color: '#7d0a42' }} />
              <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 600 }}>
                Inspired by our rankers? Experience a live CMA lecture before making a decision.
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenModal) onOpenModal();
                }}
                className="btn-primary-plum shimmer-sweep"
                style={{ padding: '10px 20px', fontSize: '0.86rem' }}
              >
                <span>Book 1-Day Trial Classroom Pass</span>
                <ArrowUpRight size={15} />
              </button>

              <a
                href="https://wa.me/919567115221?text=Hello%20Tesser%2C%20I%20saw%20your%20student%20video%20reviews.%20Please%20share%20the%20admissions%20schedule%20and%20scholarship%20details."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="btn-secondary-charcoal"
                style={{ padding: '10px 18px', fontSize: '0.86rem' }}
              >
                <span>Chat with Mentor</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cinema Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseVideo}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            />

            {/* Video Modal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 820,
                background: '#ffffff',
                borderRadius: 24,
                overflow: 'hidden',
                zIndex: 10,
                boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(125, 10, 66, 0.2)',
              }}
            >
              {/* Modal Top Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 24px',
                  background: '#faf8f9',
                  borderBottom: '1px solid rgba(125, 10, 66, 0.1)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: '#7d0a42',
                      boxShadow: '0 0 10px #7d0a42',
                    }}
                  />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 800, color: '#7d0a42' }}>
                    TESSER CINEMATIC VIDEO ARCHIVE
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>•</span>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                    {activeVideo.tag}
                  </span>
                </div>

                <button
                  onClick={handleCloseVideo}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    color: '#475569',
                    borderRadius: 8,
                    padding: 6,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#7d0a42';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.color = '#475569';
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* 16:9 Video Player Screen */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%',
                  backgroundColor: '#0f172a',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.7)), url(${activeVideo.thumbnail}) center/cover no-repeat`,
                  }}
                >
                  {/* Video Play Mockup Overlay with Direct Play Actions */}
                  <div
                    style={{
                      textAlign: 'center',
                      padding: 24,
                      maxWidth: 580,
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #931252, #7d0a42)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        margin: '0 auto 18px auto',
                        boxShadow: '0 10px 30px rgba(125, 10, 66, 0.6), 0 0 0 8px rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                      }}
                    >
                      <Play size={30} fill="#ffffff" style={{ marginLeft: 4 }} />
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        fontWeight: 900,
                        color: '#ffffff',
                        marginBottom: 8,
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                      }}
                    >
                      {activeVideo.title}
                    </h4>

                    <p style={{ color: '#e2e8f0', fontSize: '0.9rem', marginBottom: 18 }}>
                      Presented by <strong style={{ color: '#ffffff' }}>{activeVideo.speaker}</strong> ({activeVideo.role})
                    </p>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(8px)',
                        padding: '6px 14px',
                        borderRadius: 9999,
                        color: '#ffffff',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <Video size={13} />
                      <span>Recorded live on-campus at Tesser Institute, Attingal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Takeaways & Conversion Actions */}
              <div style={{ padding: '24px 28px' }}>
                <div style={{ marginBottom: 18 }}>
                  <h4 style={{ fontSize: '0.82rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800, textTransform: 'uppercase', marginBottom: 6 }}>
                    Session Summary &amp; Key Insights
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.55 }}>
                    {activeVideo.videoSummary}
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  {activeVideo.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '0.84rem',
                        color: '#0f172a',
                        fontWeight: 600,
                        background: '#f8fafc',
                        padding: '8px 12px',
                        borderRadius: 8,
                        border: '1px solid #e2e8f0',
                      }}
                    >
                      <CheckCircle size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 14,
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: 18,
                  }}
                >
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Need more details? Call mentors directly at{' '}
                    <strong style={{ color: '#7d0a42' }}>9567115221</strong> / <strong style={{ color: '#7d0a42' }}>7902434312</strong>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <a
                      href={`https://wa.me/919567115221?text=Hello%20Tesser%2C%20I%20just%20watched%20${encodeURIComponent(activeVideo.title)}%20and%20want%20to%20learn%20more%20about%20admissions.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="btn-secondary-charcoal"
                      style={{ padding: '10px 18px', fontSize: '0.85rem' }}
                    >
                      <span>WhatsApp Mentor</span>
                    </a>

                    <button
                      onClick={() => {
                        handleCloseVideo();
                        if (onOpenModal) onOpenModal();
                      }}
                      className="btn-primary-plum"
                      style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                    >
                      <span>Apply for 2025-26 Batch</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes playPulse {
          0% {
            box-shadow: 0 8px 25px rgba(125, 10, 66, 0.5), 0 0 0 0 rgba(125, 10, 66, 0.4);
          }
          70% {
            box-shadow: 0 8px 25px rgba(125, 10, 66, 0.5), 0 0 0 14px rgba(125, 10, 66, 0);
          }
          100% {
            box-shadow: 0 8px 25px rgba(125, 10, 66, 0.5), 0 0 0 0 rgba(125, 10, 66, 0);
          }
        }
        .play-btn-pulse {
          animation: playPulse 2.4s infinite;
        }
      `}</style>
    </section>
  );
}
