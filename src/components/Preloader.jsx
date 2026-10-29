import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/sound';

export default function Preloader({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: Assemble, 1: Pulse & Focus, 2: Shockwave, 3: Complete

  useEffect(() => {
    // Stage 0: Initial build-up
    const t1 = setTimeout(() => {
      setStage(1);
      sound.playDimensionalWhoosh();
    }, 900);

    // Stage 1 -> 2: Dimensional focus
    const t2 = setTimeout(() => {
      setStage(2);
      sound.playChime(659.25, 0.5); // E5
    }, 2200);

    // Stage 2 -> 3: Complete & smooth white reveal
    const t3 = setTimeout(() => {
      setStage(3);
      if (onComplete) onComplete();
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage(3);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.04,
            filter: 'blur(8px)',
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden select-none"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Ambient Plum Glow on White Canvas */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(125, 10, 66, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Perspective Isometric Grid */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(to right, rgba(125, 10, 66, 0.04) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(125, 10, 66, 0.04) 1px, transparent 1px)
              `,
              backgroundSize: '44px 44px',
              maskImage: 'radial-gradient(circle at center, black 35%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 35%, transparent 70%)',
              transform: 'perspective(600px) rotateX(60deg) translateY(120px)',
              pointerEvents: 'none',
              opacity: stage >= 1 ? 0.9 : 0.4,
              transition: 'opacity 1s ease'
            }}
          />

          {/* Central Dimensional Core */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Concentric Rotating Precision Rings */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ 
                scale: stage >= 2 ? [1, 2] : [0.95, 1.05, 0.95],
                opacity: stage >= 2 ? [0.6, 0] : [0.25, 0.55, 0.25],
                rotate: 360
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                scale: stage >= 2 ? { duration: 0.75, ease: 'easeOut' } : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
                opacity: stage >= 2 ? { duration: 0.75, ease: 'easeOut' } : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
              }}
              style={{
                position: 'absolute',
                width: 250,
                height: 250,
                borderRadius: '50%',
                border: '1.5px dashed rgba(125, 10, 66, 0.3)',
                pointerEvents: 'none'
              }}
            />

            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: stage >= 2 ? [1, 2.6] : [0.98, 1.02, 0.98],
                opacity: stage >= 2 ? [0.5, 0] : [0.15, 0.35, 0.15],
                rotate: -360
              }}
              transition={{
                rotate: { duration: 22, repeat: Infinity, ease: 'linear' },
                scale: stage >= 2 ? { duration: 0.85, ease: 'easeOut' } : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                opacity: stage >= 2 ? { duration: 0.85, ease: 'easeOut' } : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
              }}
              style={{
                position: 'absolute',
                width: 330,
                height: 330,
                borderRadius: '50%',
                border: '1px solid rgba(125, 10, 66, 0.18)',
                pointerEvents: 'none'
              }}
            />

            {/* Solid Deep Plum / Magenta Geometric Emblem */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -25 }}
              animate={{ 
                scale: stage === 2 ? 1.2 : 1, 
                opacity: 1, 
                rotate: 0 
              }}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="relative"
              style={{
                width: 135,
                height: 135,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Soft Rose-Plum Halo */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.2, 0.45, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  inset: -15,
                  background: 'radial-gradient(circle, rgba(125, 10, 66, 0.25) 0%, transparent 70%)',
                  filter: 'blur(16px)',
                  borderRadius: '50%',
                  zIndex: 0
                }}
              />

              {/* The Authentic Geometric Emblem in Solid Deep Reddish-Purple */}
              <img 
                src="/assets/tesser_symbol.png" 
                alt="Tesser Impossible Geometry"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 1,
                  filter: 'drop-shadow(0 10px 25px rgba(125, 10, 66, 0.35))'
                }}
              />
            </motion.div>

            {/* Typography: Solid Deep Plum "TESSER" & Charcoal Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
              style={{
                textAlign: 'center',
                marginTop: 28,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <h1 
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.6rem',
                  fontWeight: 900,
                  letterSpacing: '0.14em',
                  color: '#7d0a42', // Solid Deep Plum / Reddish-Purple
                  textTransform: 'uppercase',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(125, 10, 66, 0.15)'
                }}
              >
                TESSER
              </h1>

              <motion.div 
                initial={{ opacity: 0, letterSpacing: '0.12em' }}
                animate={{ opacity: 1, letterSpacing: '0.28em' }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#1e2022', // Clean Charcoal Grey / Off-Black
                  textTransform: 'uppercase',
                  marginTop: 6
                }}
              >
                YOUR NEXT DIMENSION
              </motion.div>

              {/* Status Indicator */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#7d0a42',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginTop: 18,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#fdf2f7',
                  border: '1px solid rgba(125, 10, 66, 0.2)',
                  padding: '6px 14px',
                  borderRadius: 9999,
                  fontWeight: 700
                }}
              >
                <span 
                  style={{ 
                    width: 6, 
                    height: 6, 
                    borderRadius: '50%', 
                    backgroundColor: '#7d0a42',
                    boxShadow: '0 0 6px #7d0a42' 
                  }} 
                />
                EXCLUSIVELY FOR CMA • ATTINGAL, TVM
              </motion.div>
            </motion.div>
          </div>

          {/* Skip Action */}
          <button
            onClick={handleSkip}
            style={{
              position: 'absolute',
              bottom: 30,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#64748b',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px 12px',
              transition: 'color 0.2s ease',
              zIndex: 20
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#7d0a42')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
          >
            Click anywhere or tap to enter &rarr;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
