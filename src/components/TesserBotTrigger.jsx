import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';
import { sound } from '../utils/sound';

export default function TesserBotTrigger({ isOpen, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="tesser-bot-trigger-wrap"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 48,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        {/* Floating Interactive Tooltip/Label */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered || !isOpen ? 1 : 0, x: isHovered || !isOpen ? 0 : 10 }}
          transition={{ duration: 0.25 }}
          className="tesser-bot-trigger-tooltip"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            border: '1.5px solid rgba(125, 10, 66, 0.25)',
            padding: '8px 16px',
            borderRadius: '9999px',
            boxShadow: '0 10px 25px -5px rgba(125, 10, 66, 0.15)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#c41e73',
              boxShadow: '0 0 8px #e62886',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.84rem',
                fontWeight: 800,
                color: '#7d0a42', // Solid Deep Plum
              }}
            >
              Ask TESSA AI
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                color: '#64748b',
                fontWeight: 600,
              }}
            >
              CMA Admission Bot
            </span>
          </div>
        </motion.div>

        {/* Main Bot Trigger Button with Authentic Tesser Geometric Logo */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => {
            setIsHovered(true);
            sound.playClick();
          }}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            sound.playChime(659.25, 0.3);
            onClick();
          }}
          aria-label="Toggle Tesser CMA Admission Bot"
          className="tesser-bot-trigger-btn"
          style={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '2px solid rgba(125, 10, 66, 0.28)',
            boxShadow: '0 12px 35px -6px rgba(125, 10, 66, 0.3), 0 4px 12px rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            padding: '11px',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Subtle Ambient Plum Halo behind logo */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(125, 10, 66, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Authentic Tesser Logo Symbol */}
          <img
            src="/assets/tesser_symbol.png"
            alt="Tesser Bot"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 6px rgba(125, 10, 66, 0.35))',
              transform: isHovered ? 'rotate(10deg)' : 'rotate(0deg)',
              transition: 'transform 0.35s ease',
            }}
          />

          {/* Floating Green Online Beacon */}
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: '#c41e73',
              border: '2px solid #ffffff',
              boxShadow: '0 0 10px #e62886',
            }}
          />

          {/* Floating "AI" Pill */}
          <span
            style={{
              position: 'absolute',
              bottom: '-4px',
              backgroundColor: '#7d0a42',
              color: '#ffffff',
              fontSize: '0.62rem',
              fontWeight: 900,
              fontFamily: 'var(--font-mono)',
              padding: '1px 6px',
              borderRadius: '9999px',
              boxShadow: '0 2px 6px rgba(125, 10, 66, 0.4)',
              letterSpacing: '0.04em',
            }}
          >
            AI
          </span>
        </motion.button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .tesser-bot-trigger-wrap {
            right: 14px !important;
            bottom: 18px !important;
            gap: 0 !important;
          }
          .tesser-bot-trigger-tooltip {
            display: none !important;
          }
          .tesser-bot-trigger-btn {
            width: 50px !important;
            height: 50px !important;
            padding: 9px !important;
          }
        }
      `}</style>
    </>
  );
}
