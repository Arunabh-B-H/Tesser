import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Send, CheckCircle, Navigation, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ContactAndLocation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'CMA Intermediate',
    hostel: 'Yes, need hostel facility',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playChime(659.25, 0.5);
    setSubmitted(true);

    const waText = `New Inquiry from Tesser Website:%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0ACourse: ${encodeURIComponent(formData.course)}%0AHostel: ${encodeURIComponent(formData.hostel)}%0AMsg: ${encodeURIComponent(formData.message || 'I want to visit the campus and discuss admissions.')}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919567115221?text=${waText}`, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '24px 0 20px 0', scrollMarginTop: '80px', backgroundColor: 'transparent', position: 'relative' }}>
      <div className="container-max" style={{ maxWidth: 1100, padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 14px auto' }}>
          <span className="section-tag" style={{ marginBottom: 5, fontSize: '0.70rem', padding: '2px 10px' }}>CONNECT WITH ADMISSIONS</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.45rem, 2vw, 1.85rem)', lineHeight: 1.15, marginBottom: 5 }}>
            Visit Our Attingal Campus. <br />
            <span className="gradient-text-plum">Begin Your CMA Era.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto', fontSize: '0.82rem', lineHeight: 1.4, maxWidth: 590 }}>
            Schedule an in-person campus walk-through, inspect our modern classrooms and residential hostel facilities, and consult 1-on-1 with our academic directors.
          </p>
        </div>

        {/* Main 2-Column Symmetrical Layout (Equal Height on Desktop, Responsive on Mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 18,
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Campus Details & Interactive Google Map */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              height: '100%',
            }}
          >
            {/* Card 1: Campus Identity & Schedule */}
            <div
              style={{
                background: '#ffffff',
                border: '2px solid rgba(125, 10, 66, 0.32)',
                borderRadius: 18,
                padding: '14px 18px',
                boxShadow: '0 10px 25px -4px rgba(125, 10, 66, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: 9,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    color: '#0f172a',
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  TESSER INSTITUTE, ATTINGAL
                </h3>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    background: '#fdf2f7',
                    color: '#7d0a42',
                    border: '1px solid rgba(125, 10, 66, 0.28)',
                    borderRadius: 9999,
                    padding: '2px 8px',
                    fontSize: '0.62rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                  }}
                >
                  <Sparkles size={10} />
                  CENTRAL CAMPUS
                </span>
              </div>

              {/* Campus Location */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: '#fdf2f7',
                    color: '#7d0a42',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(125, 10, 66, 0.25)',
                  }}
                >
                  <MapPin size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800, letterSpacing: '0.04em' }}>
                    CAMPUS LOCATION
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#0f172a', fontWeight: 700, marginTop: 1 }}>
                    Attingal, Thiruvananthapuram (TVM), Kerala — India
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 1, lineHeight: 1.25 }}>
                    Exclusively Dedicated CMA Campus with Boys &amp; Girls Hostels
                  </div>
                </div>
              </div>

              {/* Subtle Elegant Divider */}
              <div style={{ height: 1, backgroundColor: 'rgba(125, 10, 66, 0.08)' }} />

              {/* Campus Timings */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: '#fdf2f7',
                    color: '#7d0a42',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(125, 10, 66, 0.25)',
                  }}
                >
                  <Clock size={15} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800, letterSpacing: '0.04em' }}>
                    CAMPUS TIMINGS
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#0f172a', fontWeight: 700, marginTop: 1 }}>
                    Monday – Saturday: 08:30 AM – 06:00 PM
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 1, lineHeight: 1.25 }}>
                    Hostel premises staffed 24/7 with dedicated wardens
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Interactive Campus Google Map Direction Card */}
            <div
              style={{
                flex: 1,
                minHeight: 160,
                background: '#ffffff',
                border: '2px solid rgba(125, 10, 66, 0.32)',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 10px 25px -4px rgba(125, 10, 66, 0.08)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Dark Header Bar */}
              <div
                style={{
                  background: '#0d1527',
                  padding: '8px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 6,
                  flexShrink: 0,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Navigation size={13} style={{ color: '#38bdf8', transform: 'rotate(45deg)', flexShrink: 0 }} />
                  </motion.div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '0.02em',
                    }}
                  >
                    Tesser Institute • Attingal Campus Pin
                  </span>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      borderRadius: 9999,
                      padding: '1px 6px',
                      fontSize: '0.56rem',
                      color: '#38bdf8',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                    }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        backgroundColor: '#38bdf8',
                        boxShadow: '0 0 6px #38bdf8',
                        display: 'inline-block',
                      }}
                    />
                    LIVE PIN
                  </span>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Attingal%2C+Thiruvananthapuram%2C+Kerala"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    color: '#38bdf8',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7dd3fc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#38bdf8')}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Embedded Interactive Google Map filling remaining height symmetrically */}
              <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: 120, backgroundColor: '#e2e8f0' }}>
                <iframe
                  title="Tesser Institute Attingal Campus Location Map"
                  src="https://maps.google.com/maps?q=Attingal%2C%20Thiruvananthapuram%2C%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Clean Transit Sub-bar */}
              <div
                style={{
                  background: '#f8fafc',
                  borderTop: '1px solid #f1f5f9',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: '0.70rem',
                  color: '#475569',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                <span style={{ color: '#0284c7', fontWeight: 800 }}>•</span>
                <span>Main Transit Corridor • Minutes from Attingal KSRTC Depot &amp; Station</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Person Campus Visit & Inquiry Form (Card 3) */}
          <div
            style={{
              background: '#ffffff',
              border: '2px solid rgba(125, 10, 66, 0.32)',
              borderRadius: 18,
              padding: '18px 22px',
              boxShadow: '0 10px 25px -4px rgba(125, 10, 66, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.22rem',
                  fontWeight: 900,
                  color: '#0f172a',
                  marginBottom: 2,
                  letterSpacing: '-0.01em',
                }}
              >
                Book Campus Tour / Fast Inquiry
              </h3>
              <p style={{ color: '#475569', fontSize: '0.78rem', marginBottom: 10, lineHeight: 1.35 }}>
                Receive instant confirmation and our detailed CMA prospectus brochure via WhatsApp.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '22px 18px',
                    borderRadius: 14,
                    background: '#fdf2f7',
                    border: '1.5px solid #7d0a42',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle size={36} style={{ color: '#7d0a42', margin: '0 auto 8px auto' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: 4 }}>
                    Inquiry Received!
                  </h4>
                  <p style={{ color: '#334155', fontSize: '0.82rem', marginBottom: 10 }}>
                    Opening WhatsApp to connect you directly with the Admissions Director at Attingal...
                  </p>
                  <div style={{ fontSize: '0.76rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                    Hotline: +91 9567115221
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#334155', marginBottom: 2, fontWeight: 700 }}>
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '6px 11px',
                        borderRadius: 8,
                        background: '#ffffff',
                        border: '1.5px solid #e2e8f0',
                        color: '#0f172a',
                        fontSize: '0.82rem',
                        outline: 'none',
                        boxShadow: '0 1px 3px rgba(15, 23, 42, 0.03)',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#334155', marginBottom: 2, fontWeight: 700 }}>
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9567115221"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '6px 11px',
                        borderRadius: 8,
                        background: '#ffffff',
                        border: '1.5px solid #e2e8f0',
                        color: '#0f172a',
                        fontSize: '0.82rem',
                        outline: 'none',
                        boxShadow: '0 1px 3px rgba(15, 23, 42, 0.03)',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', color: '#334155', marginBottom: 2, fontWeight: 700 }}>
                        Interested Level
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '6px 9px',
                          borderRadius: 8,
                          background: '#ffffff',
                          border: '1.5px solid #e2e8f0',
                          color: '#0f172a',
                          fontSize: '0.80rem',
                          fontWeight: 600,
                          outline: 'none',
                        }}
                      >
                        <option value="CMA Foundation">CMA Foundation</option>
                        <option value="CMA Intermediate">CMA Intermediate</option>
                        <option value="CMA Final">CMA Final</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.72rem', color: '#334155', marginBottom: 2, fontWeight: 700 }}>
                        Hostel Requirement
                      </label>
                      <select
                        value={formData.hostel}
                        onChange={(e) => setFormData({ ...formData, hostel: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '6px 9px',
                          borderRadius: 8,
                          background: '#ffffff',
                          border: '1.5px solid #e2e8f0',
                          color: '#0f172a',
                          fontSize: '0.80rem',
                          fontWeight: 600,
                          outline: 'none',
                        }}
                      >
                        <option value="Girls Hostel">Girls Hostel</option>
                        <option value="Boys Hostel">Boys Hostel</option>
                        <option value="Day Scholar">Day Scholar</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: '#334155', marginBottom: 2, fontWeight: 700 }}>
                      Specific Questions / Preferred Visit Date
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Let us know any questions regarding batches, hostels or syllabus..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '6px 11px',
                        borderRadius: 8,
                        background: '#ffffff',
                        border: '1.5px solid #e2e8f0',
                        color: '#0f172a',
                        fontSize: '0.82rem',
                        outline: 'none',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-plum shimmer-sweep"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '9px 15px',
                      fontSize: '0.86rem',
                      borderRadius: 10,
                      marginTop: 2,
                    }}
                  >
                    <Send size={14} />
                    <span>Submit &amp; Connect to WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
