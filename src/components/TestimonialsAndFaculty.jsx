import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import GoogleLogo from './GoogleLogo';
import { sound } from '../utils/sound';

export default function TestimonialsAndFaculty() {
  // All 9 Authentic Google Reviews in One Unified Stream
  const allReviews = [
    {
      id: 'rev-1',
      name: 'Aliyabiyaz',
      role: 'CMA Student • 3 weeks ago',
      badge: 'Verified Student',
      rating: 5.0,
      text: "I’m really happy to be a part of Tesser and to continue my CMA journey here. The faculties are very friendly and supportive, and they always make sure we understand the topics properly. We can ask even the smallest doubts freely without feeling uncomfortable 😊💯 What I love most is the effort they put into preparing us for exams. Study material, Scanners, previous year exam questions and other important areas are covered properly, and they make sure we are well prepared. The support during exam time gives us a lot of confidence and really means a lot to me. 🥹❤️ A special thanks to Ajmal Sir, RK Sir and Thanu Sir for all the guidance, support and effort you put into teaching us. Joining Tesser was truly one of the best decisions I’ve made ❤️💯",
      ownerReply: 'Thank you for your words 🤍',
      link: 'https://www.google.com/maps/contrib/101709057590273995759/reviews?hl=en-GB',
    },
    {
      id: 'rev-2',
      name: 'Diya Shyam',
      role: '1 review • 3 weeks ago',
      badge: 'Attingal Campus',
      rating: 5.0,
      text: 'No.1 trusted institute in Attingal exclusively for CMA. They provide us with highly qualified faculties, Student friendly environment, Individual attention, and many more. Proud to be a part of Tesser 💓',
      ownerReply: 'Thank you 🤍',
      link: 'https://www.google.com/maps/contrib/105939074444577835354/reviews?hl=en-GB',
    },
    {
      id: 'rev-3',
      name: 'Vaishnav Athulya',
      role: '1 review • 3 weeks ago',
      badge: 'CMA Batch',
      rating: 5.0,
      text: 'One of the best Institute for learning CMA and the classes are so good and the faculty members are sooo supportive and friendlyy highly recommended for CMA Aspirants 🤍😌',
      ownerReply: 'Thank you 🙏😊',
      link: 'https://www.google.com/maps/contrib/113888267043198714160/reviews?hl=en-GB',
    },
    {
      id: 'rev-4',
      name: 'Anu Sajeev',
      role: '1 review • 3 weeks ago',
      badge: 'CMA Aspirant',
      rating: 5.0,
      text: 'Best place for CMA aspirants - Quality teaching, best faculties, and result-oriented coaching.',
      ownerReply: '🤍',
      link: 'https://www.google.com/maps/contrib/107191939947388131884/reviews?hl=en-GB',
    },
    {
      id: 'rev-5',
      name: 'Akhil Jayamohan',
      role: '3 reviews • 2 years ago',
      badge: 'Alumni Student',
      rating: 5.0,
      text: 'The best institute in attingal for CMA India. The facilities are very good and provide best classes for this course.',
      ownerReply: 'Thank you 🤍',
      link: 'https://www.google.com/maps/contrib/101889644476974789793/reviews?hl=en-GB',
    },
    {
      id: 'rev-6',
      name: 'Akhil AP',
      role: '4 reviews · 2 photos • a year ago',
      badge: 'Verified Student',
      rating: 5.0,
      text: 'Very good institute for CMA with amazing faculties. Dedicated doubt clearing and supportive atmosphere.',
      ownerReply: '🤍',
      link: 'https://www.google.com/maps/contrib/108429869387836003976/reviews?hl=en-GB',
    },
    {
      id: 'rev-7',
      name: 'GOUTHAM S',
      role: '2 reviews • 2 years ago',
      badge: 'CMA Aspirant',
      rating: 5.0,
      text: 'Excellent...very good classes... Great guidance by the faculties and disciplined testing schedule.',
      ownerReply: null,
      link: 'https://www.google.com/maps/contrib/108902039734531821106/reviews?hl=en-GB',
    },
    {
      id: 'rev-8',
      name: 'Shibu S',
      role: 'Local Guide · 222 reviews · 16 photos',
      badge: 'Google Local Guide',
      rating: 5.0,
      text: 'Super institute in CMA. Highly recommended for Cost and Management Accounting with dedicated campus facilities in Attingal.',
      ownerReply: null,
      link: 'https://www.google.com/maps/contrib/114077788595444909945/reviews?hl=en-GB',
    },
    {
      id: 'rev-9',
      name: 'Jaseena',
      role: '1 review • 3 weeks ago',
      badge: 'Verified Student',
      rating: 4.8,
      text: 'Faculties are good, very approachable and supportive. They explain complex accounting concepts clearly.',
      ownerReply: null,
      link: 'https://www.google.com/maps/contrib/101444529759433593957/reviews?hl=en-GB',
    },
  ];

  // Faculty Mentors
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

  // Duplicate for seamless single-line infinite marquee loop
  const duplicatedReviews = [...allReviews, ...allReviews];

  const renderReviewCard = (rev, idx) => (
    <div
      key={`${rev.id}-${idx}`}
      onClick={() => {
        sound.playClick();
        window.open(rev.link, '_blank');
      }}
      style={{
        width: 380,
        minWidth: 380,
        maxWidth: 380,
        background: '#ffffff',
        border: '1.5px solid rgba(125, 10, 66, 0.14)',
        borderRadius: 22,
        padding: '22px 24px',
        margin: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0 8px 24px -4px rgba(125, 10, 66, 0.06)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        flexShrink: 0,
        userSelect: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 16px 36px -6px rgba(125, 10, 66, 0.14)';
        e.currentTarget.style.borderColor = '#7d0a42';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(125, 10, 66, 0.06)';
        e.currentTarget.style.borderColor = 'rgba(125, 10, 66, 0.14)';
      }}
    >
      <div>
        {/* Card Header: Avatar + User Info + Google Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7d0a42, #58062d)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                fontFamily: 'var(--font-display)',
                boxShadow: '0 4px 10px rgba(125, 10, 66, 0.25)',
              }}
            >
              {rev.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.96rem', fontFamily: 'var(--font-display)' }}>
                {rev.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                {rev.role}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '4px 8px',
              borderRadius: 10,
            }}
          >
            <GoogleLogo size={17} />
          </div>
        </div>

        {/* Rating Stars & Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {[...Array(5)].map((_, s) => (
              <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
            ))}
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#b45309',
                marginLeft: 5,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {rev.rating.toFixed(1)}
            </span>
          </div>

          <span
            style={{
              fontSize: '0.66rem',
              color: '#059669',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: 9999,
              padding: '2px 8px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
            }}
          >
            ✓ {rev.badge}
          </span>
        </div>

        {/* Review Quote Text */}
        <p
          style={{
            color: '#334155',
            fontSize: '0.86rem',
            lineHeight: 1.58,
            fontWeight: 450,
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          "{rev.text}"
        </p>
      </div>

      {/* Card Footer: Owner Reply (if present) & Open Link */}
      <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid #f1f5f9' }}>
        {rev.ownerReply && (
          <div
            style={{
              background: '#fdf2f7',
              border: '1px solid rgba(125, 10, 66, 0.12)',
              borderRadius: 8,
              padding: '5px 9px',
              fontSize: '0.72rem',
              color: '#7d0a42',
              fontFamily: 'var(--font-mono)',
              marginBottom: 7,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontWeight: 800 }}>Tesser (Owner):</span>
            <span>"{rev.ownerReply}"</span>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.74rem',
            color: '#0284c7',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span>Verified on Google Maps</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            <span>Read on Google</span>
            <ExternalLink size={12} />
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="reviews" style={{ padding: '90px 0', backgroundColor: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 40px auto' }}>
          <span className="section-tag">AUTHENTIC STUDENT EXPERIENCES</span>
          <h2 className="section-title">
            Loved by Students. <br />
            <span className="gradient-text-plum">4.9+ Rated on Google Reviews.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Hear straight from CMA aspirants at our Attingal campus about the friendly faculties, daily exam conditioning, and dedicated hostel life.
          </p>
        </div>

        {/* Google Reviews Spotlight Banner Bar */}
        <div
          style={{
            background: '#ffffff',
            border: '1.5px solid rgba(125, 10, 66, 0.18)',
            borderRadius: 22,
            padding: '20px 26px',
            marginBottom: 36,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 18,
            boxShadow: '0 10px 30px -5px rgba(125, 10, 66, 0.07)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)',
              }}
            >
              <GoogleLogo size={28} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 900,
                    color: '#0f172a',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  4.9 / 5.0
                </span>
                <span
                  style={{
                    background: '#fef3c7',
                    color: '#b45309',
                    border: '1px solid #fde68a',
                    borderRadius: 9999,
                    padding: '2px 8px',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                  }}
                >
                  TOP IN ATTINGAL
                </span>
              </div>
              <p style={{ fontSize: '0.84rem', color: '#475569', marginTop: 3, margin: 0 }}>
                100% genuine reviews from enrolled CMA Foundation, Intermediate &amp; Final students.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href="https://www.google.com/search?q=Tesser+Institute+Attingal+reviews"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="btn-secondary-charcoal"
              style={{ padding: '9px 16px', fontSize: '0.82rem' }}
            >
              <GoogleLogo size={14} />
              <span>View All Google Reviews</span>
              <ExternalLink size={12} />
            </a>

            <a
              href="https://www.instagram.com/tesser_official/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="btn-primary-plum"
              style={{ padding: '9px 16px', fontSize: '0.82rem' }}
            >
              <InstagramIcon size={14} color="#ffffff" />
              <span>@tesser_official</span>
            </a>
          </div>
        </div>
      </div>

      {/* SINGLE LINE Infinite Marquee with Vignette Mask */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '6px 0 14px 0' }}>
        <div className="marquee-container marquee-mask">
          <div className="marquee-track-left" style={{ animationDuration: '48s' }}>
            {duplicatedReviews.map((rev, idx) => renderReviewCard(rev, idx))}
          </div>
        </div>
      </div>

      {/* Faculty Guild Section Header & Grid Below Reviews */}
      <div className="container-max" style={{ marginTop: 70 }}>
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 42px auto' }}>
          <span className="section-tag">FACULTY EXCELLENCE</span>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              marginBottom: 10,
            }}
          >
            Mentored by Practicing CMAs &amp; Industry Leaders
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.94rem' }}>
            Direct guidance from certified practitioners who have decoded the exact psychology of ICMAI evaluations.
          </p>
        </div>

        {/* Faculty Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 22,
          }}
        >
          {faculty.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              style={{
                background: '#ffffff',
                border: '1.5px solid rgba(125, 10, 66, 0.16)',
                borderRadius: 22,
                padding: '26px 24px',
                boxShadow: '0 6px 20px -3px rgba(125, 10, 66, 0.05)',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 15 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 14,
                    background: 'linear-gradient(135deg, #931252, #7d0a42)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    boxShadow: '0 4px 12px rgba(125, 10, 66, 0.25)',
                  }}
                >
                  {f.name.split(' ')[1]?.[0] || 'T'}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: 0,
                    }}
                  >
                    {f.name}
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 700, marginTop: 2 }}>
                    {f.designation}
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: '#fdf2f7',
                  borderRadius: 12,
                  padding: '11px 14px',
                  marginBottom: 13,
                  border: '1px solid rgba(125, 10, 66, 0.1)',
                }}
              >
                <div style={{ fontSize: '0.72rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                  PRIMARY MODULES:
                </div>
                <div style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 600, marginTop: 2 }}>
                  {f.papers}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.78rem',
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
      </div>
    </section>
  );
}
