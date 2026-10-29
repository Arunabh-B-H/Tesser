import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle, Navigation, Clock } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
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
    <section id="contact" style={{ padding: '100px 0', backgroundColor: '#faf8f9', position: 'relative' }}>
      <div className="container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: 740, margin: '0 auto 60px auto' }}>
          <span className="section-tag">CONNECT WITH ADMISSIONS</span>
          <h2 className="section-title">
            Visit Our Attingal Campus. <br />
            <span className="gradient-text-plum">Begin Your CMA Era.</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Schedule an in-person campus walk-through, inspect our modern classrooms and residential hostel facilities, and consult 1-on-1 with our academic directors.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          {/* Left Column: Campus Details & Direct Hotlines */}
          <div>
            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.16)',
                borderRadius: 22,
                padding: '36px 30px',
                marginBottom: 24,
                boxShadow: '0 8px 30px -4px rgba(125, 10, 66, 0.06)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  color: '#0f172a',
                  marginBottom: 22,
                }}
              >
                TESSER INSTITUTE, ATTINGAL
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {/* Location */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: '#fdf2f7',
                      color: '#7d0a42',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(125, 10, 66, 0.18)',
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                      CAMPUS LOCATION
                    </div>
                    <div style={{ fontSize: '0.96rem', color: '#0f172a', fontWeight: 700, marginTop: 2 }}>
                      Attingal, Thiruvananthapuram (TVM), Kerala — India
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#64748b', marginTop: 2 }}>
                      Exclusively Dedicated CMA Campus with Boys &amp; Girls Hostels
                    </div>
                  </div>
                </div>

                {/* Direct Phones */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: '#fdf2f7',
                      color: '#7d0a42',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(125, 10, 66, 0.18)',
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                      OFFICIAL ADMISSION HOTLINES
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 6 }}>
                      <a
                        href="tel:9567115221"
                        onClick={() => sound.playClick()}
                        style={{
                          color: '#7d0a42',
                          fontWeight: 800,
                          fontSize: '1.08rem',
                          textDecoration: 'none',
                          background: '#fdf2f7',
                          padding: '5px 12px',
                          borderRadius: 8,
                          border: '1px solid rgba(125, 10, 66, 0.2)',
                        }}
                      >
                        +91 95671 15221
                      </a>

                      <a
                        href="tel:7902434312"
                        onClick={() => sound.playClick()}
                        style={{
                          color: '#7d0a42',
                          fontWeight: 800,
                          fontSize: '1.08rem',
                          textDecoration: 'none',
                          background: '#fdf2f7',
                          padding: '5px 12px',
                          borderRadius: 8,
                          border: '1px solid rgba(125, 10, 66, 0.2)',
                        }}
                      >
                        +91 79024 34312
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: '#fdf2f7',
                      color: '#7d0a42',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(125, 10, 66, 0.18)',
                    }}
                  >
                    <InstagramIcon size={22} color="#7d0a42" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                      INSTAGRAM CHANNEL
                    </div>
                    <a
                      href="https://www.instagram.com/tesser_official/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      style={{
                        color: '#7d0a42',
                        fontWeight: 700,
                        fontSize: '0.96rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        marginTop: 2,
                      }}
                    >
                      @tesser_official
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: '#fdf2f7',
                      color: '#7d0a42',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(125, 10, 66, 0.18)',
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                      CAMPUS TIMINGS
                    </div>
                    <div style={{ fontSize: '0.94rem', color: '#0f172a', fontWeight: 700, marginTop: 2 }}>
                      Monday – Saturday: 08:30 AM – 06:00 PM
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                      Hostel premises staffed 24/7 with dedicated wardens
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Transport Directions */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid rgba(125, 10, 66, 0.14)',
                borderRadius: 18,
                padding: '24px 26px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                boxShadow: '0 4px 18px rgba(125, 10, 66, 0.04)',
              }}
            >
              <Navigation size={28} style={{ color: '#0284c7', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.96rem' }}>
                  Seamless Connectivity in Attingal
                </div>
                <div style={{ color: '#475569', fontSize: '0.84rem', marginTop: 2 }}>
                  Located on the main transit corridor, easily reachable within minutes from Attingal KSRTC Depot and Chirayinkeezhu Station.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-Person Campus Visit & Inquiry Form */}
          <div
            style={{
              background: '#ffffff',
              border: '1.5px solid rgba(125, 10, 66, 0.22)',
              borderRadius: 24,
              padding: '40px 34px',
              boxShadow: '0 16px 45px -8px rgba(125, 10, 66, 0.1)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.55rem',
                fontWeight: 900,
                color: '#0f172a',
                marginBottom: 6,
              }}
            >
              Book Campus Tour / Fast Inquiry
            </h3>
            <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: 26 }}>
              Receive instant confirmation and our detailed CMA prospectus brochure via WhatsApp.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '30px',
                  borderRadius: 16,
                  background: '#fdf2f7',
                  border: '1.5px solid #7d0a42',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={46} style={{ color: '#7d0a42', margin: '0 auto 14px auto' }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>
                  Inquiry Received!
                </h4>
                <p style={{ color: '#334155', fontSize: '0.92rem', marginBottom: 16 }}>
                  Opening WhatsApp to connect you directly with the Admissions Director at Attingal...
                </p>
                <div style={{ fontSize: '0.84rem', color: '#7d0a42', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
                  Hotline: +91 9567115221
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
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
                      padding: '13px 16px',
                      borderRadius: 12,
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxShadow: '0 2px 4px rgba(15, 23, 42, 0.03)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
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
                      padding: '13px 16px',
                      borderRadius: 12,
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxShadow: '0 2px 4px rgba(15, 23, 42, 0.03)',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
                      Interested Level
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 14px',
                        borderRadius: 12,
                        background: '#ffffff',
                        border: '1.5px solid #e2e8f0',
                        color: '#0f172a',
                        fontSize: '0.9rem',
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
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
                      Hostel Requirement
                    </label>
                    <select
                      value={formData.hostel}
                      onChange={(e) => setFormData({ ...formData, hostel: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 14px',
                        borderRadius: 12,
                        background: '#ffffff',
                        border: '1.5px solid #e2e8f0',
                        color: '#0f172a',
                        fontSize: '0.9rem',
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
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
                    Specific Questions / Preferred Visit Date
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Let us know any questions regarding batches, hostels or syllabus..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: 12,
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-plum shimmer-sweep"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem' }}
                >
                  <Send size={18} />
                  <span>Submit &amp; Connect to WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
