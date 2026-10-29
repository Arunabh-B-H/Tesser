import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/sound';
import TesserLogo from './TesserLogo';

export default function VisitModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('CMA Intermediate');
  const [hostel, setHostel] = useState('Yes, need Hostel');
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    sound.playClick();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playChime(659.25, 0.4);
    setDone(true);

    const waMsg = `Hello Tesser Institute, I want to apply for the 2025-26 CMA Batch:%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AProgram: ${encodeURIComponent(program)}%0AHostel: ${encodeURIComponent(hostel)}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919567115221?text=${waMsg}`, '_blank');
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
      >
        {/* Soft Dim Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 520,
            padding: '38px 34px',
            background: '#ffffff',
            borderRadius: 24,
            border: '1.5px solid rgba(125, 10, 66, 0.25)',
            zIndex: 10,
            boxShadow: '0 25px 60px -10px rgba(125, 10, 66, 0.2), 0 10px 20px rgba(15, 23, 42, 0.08)',
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: '#f1f5f9',
              border: 'none',
              color: '#475569',
              borderRadius: 8,
              padding: 6,
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#e2e8f0')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#f1f5f9')}
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
              <TesserLogo size="sm" showTagline={false} />
            </div>
            <div className="badge-plum" style={{ marginBottom: 8 }}>
              ADMISSIONS OPEN 2025-26
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.55rem',
                fontWeight: 900,
                color: '#0f172a',
                marginBottom: 4,
              }}
            >
              Priority Admission Desk
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem' }}>
              First Professional Campus Exclusively For CMA in Attingal, TVM
            </p>
          </div>

          {done ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <CheckCircle size={48} style={{ color: '#7d0a42', margin: '0 auto 16px auto' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>Connecting to WhatsApp...</h4>
              <p style={{ color: '#334155', fontSize: '0.9rem', marginTop: 6 }}>
                Our senior academic mentor will respond immediately.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter student name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    color: '#0f172a',
                    fontSize: '0.94rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9567115221"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 10,
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    color: '#0f172a',
                    fontSize: '0.94rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#334155', marginBottom: 6, fontWeight: 700 }}>
                    Program
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 10px',
                      borderRadius: 10,
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      color: '#0f172a',
                      fontSize: '0.88rem',
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
                    Hostel Accommodation
                  </label>
                  <select
                    value={hostel}
                    onChange={(e) => setHostel(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 10px',
                      borderRadius: 10,
                      background: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      outline: 'none',
                    }}
                  >
                    <option value="Yes, Girls Hostel">Girls Hostel</option>
                    <option value="Yes, Boys Hostel">Boys Hostel</option>
                    <option value="Day Scholar">Day Scholar</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: '0.8rem',
                  color: '#15803d',
                  fontWeight: 600,
                }}
              >
                <ShieldCheck size={16} />
                <span>Small batch guarantee (capped at 25 students)</span>
              </div>

              <button
                type="submit"
                className="btn-primary-plum shimmer-sweep"
                style={{ width: '100%', justifyContent: 'center', padding: '15px' }}
              >
                <Send size={16} />
                <span>Confirm &amp; Direct Chat on WhatsApp</span>
              </button>

              <div style={{ textAlign: 'center', marginTop: 4 }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                  Or call directly:{' '}
                  <a href="tel:9567115221" style={{ color: '#7d0a42', textDecoration: 'none', fontWeight: 800 }}>
                    9567115221
                  </a>{' '}
                  /{' '}
                  <a href="tel:7902434312" style={{ color: '#7d0a42', textDecoration: 'none', fontWeight: 800 }}>
                    7902434312
                  </a>
                </span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
