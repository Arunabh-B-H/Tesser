import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/sound';

/**
 * Minimalist Luxury Emblem Preloader with Expanding Card / Scale-Out Morph Transition
 * 
 * - Pure background-removed Tesser 3D prism emblem centered on pristine white canvas
 * - Smooth dimensional rotation & breathing scale
 * - Clean: No percentage numbers, no status text, no progress bars, no halo circles
 * - Seamless NeoLeaf-style Expanding Card / Scale-Out Morph transition into hero view
 */
export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('active'); // 'active' -> 'morph' -> 'expanding' -> 'done'
  const transitionStarted = useRef(false);

  const startMorphTransition = () => {
    if (transitionStarted.current) return;
    transitionStarted.current = true;

    // Phase 1: Shrink into floating rounded viewport card (reveals hero edges)
    setPhase('morph');

    try {
      sound.playChime(659.25, 0.4);
    } catch (e) {}

    // Phase 2: Explosive Scale-Out / Frame Expansion Reveal
    setTimeout(() => {
      setPhase('expanding');
      try {
        sound.playDimensionalWhoosh();
      } catch (e) {}
    }, 380);

    // Final Handover: Complete and unmount
    setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 980);
  };

  useEffect(() => {
    // Initial sound cue on mount
    try {
      sound.playDimensionalWhoosh();
    } catch (e) {}

    // Clean spin for 1.5s, then initiate the morph transition
    const autoTransitionTimer = setTimeout(() => {
      startMorphTransition();
    }, 1500);

    return () => {
      clearTimeout(autoTransitionTimer);
    };
  }, []);

  const handleSkip = () => {
    if (phase === 'active') {
      startMorphTransition();
    }
  };

  if (phase === 'done') return null;

  return (
    <motion.div
      onClick={handleSkip}
      initial={{ scale: 1, borderRadius: '0px', opacity: 1, filter: 'blur(0px)' }}
      animate={
        phase === 'active'
          ? { scale: 1, borderRadius: '0px', opacity: 1, filter: 'blur(0px)' }
          : phase === 'morph'
          ? {
              scale: 0.88,
              borderRadius: '36px',
              opacity: 1,
              filter: 'blur(0px)',
            }
          : phase === 'expanding'
          ? {
              scale: 1.44,
              borderRadius: '64px',
              opacity: 0,
              filter: 'blur(22px)',
            }
          : {}
      }
      transition={
        phase === 'morph'
          ? { duration: 0.36, ease: [0.25, 1, 0.5, 1] }
          : phase === 'expanding'
          ? { duration: 0.58, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0.2 }
      }
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        pointerEvents: phase === 'expanding' || phase === 'done' ? 'none' : 'auto',
        boxShadow:
          phase === 'morph'
            ? '0 30px 90px -10px rgba(125, 10, 66, 0.32), 0 10px 40px -10px rgba(15, 23, 42, 0.18)'
            : 'none',
        border:
          phase === 'morph'
            ? '2px solid rgba(125, 10, 66, 0.28)'
            : '0px solid transparent',
      }}
    >
      {/* Centered Pure Background-Removed Logo */}
      <motion.div
        animate={
          phase === 'morph'
            ? { scale: [1, 1.08, 1], transition: { duration: 0.32 } }
            : phase === 'expanding'
            ? { scale: 0.9, opacity: 0, transition: { duration: 0.25 } }
            : { scale: 1 }
        }
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 140,
            height: 140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Continuous Dimensional Spin with Subtle Harmonic Breathing */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              rotate: { duration: 4.2, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2.1, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/assets/tesser_symbol.png"
              alt="Tesser Emblem"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 24px rgba(125, 10, 66, 0.35))',
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle Skip Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.66rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#94a3b8',
          pointerEvents: 'none',
          opacity: phase === 'active' ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        Click anywhere to enter
      </div>
    </motion.div>
  );
}
