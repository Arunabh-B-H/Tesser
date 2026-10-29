import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3.5px',
        background: 'linear-gradient(90deg, #7d0a42 0%, #c41e73 60%, #e62886 100%)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 100,
        boxShadow: '0 0 10px rgba(125, 10, 66, 0.5)',
      }}
    />
  );
}
