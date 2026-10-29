import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Sparkles, ArrowRight, CheckCircle2, Shield, TrendingUp, Layers, ChevronDown } from 'lucide-react';
import { sound } from '../utils/sound';

export default function DimensionalScroll3D({ onOpenModal }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0); // 0: Foundation, 1: Intermediate, 2: Final

  // Scroll Progress Tracking across the tall pinned container (350vh)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Silky spring physics for scroll scrub
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Track active stage based on scroll
  useEffect(() => {
    return smoothProgress.on('change', (v) => {
      if (v < 0.35) {
        setActiveStage(0);
      } else if (v < 0.7) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    });
  }, [smoothProgress]);

  // Three.js WebGL 3D Interactive Tesseract & Hyper-Prism Engine
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = canvas.clientWidth || 600;
    const height = canvas.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Master Group for 3D Tesseract
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Outer 4D Hypercube Wireframe (Solid Deep Plum #7d0a42)
    const outerSize = 2.4;
    const outerGeometry = new THREE.BoxGeometry(outerSize, outerSize, outerSize);
    const outerEdges = new THREE.EdgesGeometry(outerGeometry);
    const outerLineMaterial = new THREE.LineBasicMaterial({
      color: 0x7d0a42,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    const outerWireframe = new THREE.LineSegments(outerEdges, outerLineMaterial);
    masterGroup.add(outerWireframe);

    // 2. Outer Vertex Anchor Spheres (Theme Magenta #c41e73)
    const sphereGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xc41e73,
      emissive: 0x7d0a42,
      emissiveIntensity: 0.6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const vertexSpheres = [];
    const half = outerSize / 2;
    const corners = [
      [-half, -half, -half],
      [half, -half, -half],
      [half, half, -half],
      [-half, half, -half],
      [-half, -half, half],
      [half, -half, half],
      [half, half, half],
      [-half, half, half],
    ];
    corners.forEach((pos) => {
      const sp = new THREE.Mesh(sphereGeo, sphereMat);
      sp.position.set(pos[0], pos[1], pos[2]);
      masterGroup.add(sp);
      vertexSpheres.push(sp);
    });

    // 3. Inner Morphing Tesseract Core (Solid Deep Plum Polyhedron)
    const innerSize = 1.25;
    const innerGeometry = new THREE.OctahedronGeometry(innerSize, 0);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x7d0a42,
      emissive: 0x4a0525,
      emissiveIntensity: 0.5,
      metalness: 0.75,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.88,
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    masterGroup.add(innerCore);

    // Inner wireframe overlay
    const innerEdges = new THREE.EdgesGeometry(innerGeometry);
    const innerLineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
    const innerWire = new THREE.LineSegments(innerEdges, innerLineMat);
    innerCore.add(innerWire);

    // 4. Connecting 4D Dimensional Rays (outer corners to inner core)
    const rayLines = [];
    const rayMaterial = new THREE.LineBasicMaterial({
      color: 0x931252,
      transparent: true,
      opacity: 0.45,
    });
    corners.forEach((c) => {
      const points = [new THREE.Vector3(c[0], c[1], c[2]), new THREE.Vector3(0, 0, 0)];
      const rayGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(rayGeo, rayMaterial);
      masterGroup.add(line);
      rayLines.push(line);
    });

    // 5. Orbiting Dimensional Particle Halo
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.2 + (Math.random() - 0.5) * 0.8;
      particlePos[i * 3] = Math.cos(angle) * radius;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 0.9;
      particlePos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x7d0a42,
      size: 0.05,
      transparent: true,
      opacity: 0.75,
    });
    const particleHalo = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particleHalo);

    // 6. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const plumRimLight = new THREE.DirectionalLight(0xc41e73, 2.8);
    plumRimLight.position.set(-5, -3, -4);
    scene.add(plumRimLight);

    const centralGlow = new THREE.PointLight(0x7d0a42, 2.5, 10);
    scene.add(centralGlow);

    // Mouse Parallax Physics
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.6;
      targetMouseY = y * 0.6;
    };

    window.addEventListener('pointermove', handlePointerMove);

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const newWidth = canvas.clientWidth || 600;
      const newHeight = canvas.clientHeight || 600;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      const scrollVal = smoothProgress.get() || 0;

      // Mouse Lerp Damping
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      // Primary Scroll-Driven 4D Transformation (Alex Bender style scrub)
      // Rotates across 720 degrees on Y, 360 degrees on X as user scrolls
      masterGroup.rotation.y = scrollVal * Math.PI * 4 + mouseX * 0.5 + elapsed * 0.15;
      masterGroup.rotation.x = Math.sin(scrollVal * Math.PI * 2) * 0.6 + mouseY * 0.5;
      masterGroup.rotation.z = Math.cos(scrollVal * Math.PI) * 0.35;

      // Morphing Inner Core based on Dimension Stage
      innerCore.rotation.x = -elapsed * 0.4 - scrollVal * Math.PI * 3;
      innerCore.rotation.y = elapsed * 0.5 + scrollVal * Math.PI * 3;

      // Dimensional Expansion / Explosion on Scroll
      // Stage 1: Compact; Stage 2: Expanded; Stage 3: Hyper-Expanded
      const expansion = 1 + scrollVal * 0.45;
      outerWireframe.scale.set(expansion, expansion, expansion);

      // Inner core breathing scale
      const innerScale = 1.0 + Math.sin(elapsed * 2) * 0.06 + scrollVal * 0.35;
      innerCore.scale.set(innerScale, innerScale, innerScale);

      // Dynamic vertex breathing
      vertexSpheres.forEach((sp, idx) => {
        const c = corners[idx];
        const push = 1 + Math.sin(elapsed * 3 + idx) * 0.05 + scrollVal * 0.45;
        sp.position.set(c[0] * push, c[1] * push, c[2] * push);
      });

      // Update 4D Ray Lines connecting to outer corners
      rayLines.forEach((line, idx) => {
        const c = corners[idx];
        const push = 1 + Math.sin(elapsed * 3 + idx) * 0.05 + scrollVal * 0.45;
        const positions = line.geometry.attributes.position.array;
        positions[0] = c[0] * push;
        positions[1] = c[1] * push;
        positions[2] = c[2] * push;
        line.geometry.attributes.position.needsUpdate = true;
      });

      // Halo Rotation
      particleHalo.rotation.y = -elapsed * 0.3 - scrollVal * Math.PI * 2;
      particleHalo.rotation.x = Math.sin(elapsed * 0.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      outerGeometry.dispose();
      innerGeometry.dispose();
      sphereGeo.dispose();
      particleGeo.dispose();
    };
  }, [smoothProgress]);

  // Stage Data for the 3 Dimensions of CMA
  const stages = [
    {
      id: 0,
      label: 'Foundation',
      dimension: 'DIMENSION 01',
      badge: 'PHASE 01 // FOUNDATION GENESIS',
      title: 'The Strategic Genesis.',
      subtitle: '+2 to ICMAI Foundation Mastery with Speed-Drill Accuracy',
      desc: 'We strip away rote memorization. Designed for students completing Higher Secondary, our foundation immersion builds core fluency in Business Laws, Financial Accounting, Economics, and Statistics through daily 50-MCQ speed drills.',
      metricValue: '94.8%',
      metricLabel: 'Speed Drill Accuracy',
      telemetry: [
        { label: 'MCQ Velocity', value: '45s / Question' },
        { label: 'Cohort Limit', value: 'Strict 25 Capped' },
        { label: 'Bridge Maths', value: '100% Mentored' },
      ],
      highlights: [
        'Bridge coaching for non-maths and science background students',
        'Daily 50-MCQ speed drill engine with instant analytical feedback',
        'Direct registration assistance with ICMAI national portal',
      ],
      accent: '#7d0a42',
    },
    {
      id: 1,
      label: 'Intermediate',
      dimension: 'DIMENSION 02',
      badge: 'PHASE 02 // THE EXECUTIVE CORE',
      title: 'The Daily 45-Min Test Engine.',
      subtitle: 'Where 8-Hour Classrooms Turn Into High-Scoring Exam Reflexes',
      desc: 'CMA Intermediate Group 1 & Group 2 cannot be cleared by listening alone. At Tesser, every student sits for a mandatory 45-minute timed descriptive test at 4 PM daily, simulating real ICMAI answer booklets with same-day error diagnostics.',
      metricValue: '88.4%',
      metricLabel: 'Foundation-to-Inter Pass Rate',
      telemetry: [
        { label: 'Daily Mock', value: '45 Min at 4:00 PM' },
        { label: 'Evaluation', value: 'Same-Day by 6:00 PM' },
        { label: 'Hostel Access', value: 'Boys & Girls in Attingal' },
      ],
      highlights: [
        'Full dual-group coverage: Cost Accounting, Corporate Tax & GST',
        'Exact ICMAI booklet simulation eliminates exam room anxiety',
        'On-campus residential hostels with supervised evening study tables',
      ],
      accent: '#931252',
    },
    {
      id: 2,
      label: 'Final Apex',
      dimension: 'DIMENSION 03',
      badge: 'PHASE 03 // CORPORATE APEX',
      title: 'The C-Suite Valuation Dimension.',
      subtitle: 'Strategic Cost Auditing, M&A Valuation & Direct Placement',
      desc: 'The apex of management accounting. CMA Final candidates are mentored directly by practicing CMAs and corporate auditors in strategic performance management, valuation models, and board-level financial governance.',
      metricValue: '₹7L - ₹22L+',
      metricLabel: 'Industry Starting Packages',
      telemetry: [
        { label: 'Recruiters', value: 'Big 4 + Fortune 500' },
        { label: 'Curriculum', value: 'Advanced SAP & Audit' },
        { label: 'Apprenticeship', value: 'Corporate Direct Entry' },
      ],
      highlights: [
        'Corporate case studies mentored by active Cost Audit partners',
        'Placement pathway with Deloitte, PwC, EY, KPMG, Tata, Reliance',
        'Global certification readiness and alumni executive network',
      ],
      accent: '#7d0a42',
    },
  ];

  const currentStage = stages[activeStage];

  // Quick navigation clicks for the stages
  const scrollToStage = (stageIndex) => {
    sound.playClick();
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalHeight = rect.height - window.innerHeight;
    const targetScroll = containerTop + (stageIndex / 2) * totalHeight;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="dimension-scroll"
      style={{
        position: 'relative',
        height: '350vh', // 3.5x viewport height for smooth scrubbed scroll
        backgroundColor: '#ffffff',
      }}
    >
      {/* Sticky 100vh Viewport Container */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(125, 10, 66, 0.04) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      >
        {/* Ambient Subtle Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(rgba(125, 10, 66, 0.09) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            opacity: 0.65,
            pointerEvents: 'none',
          }}
        />

        {/* Top Control Bar with Dimension Pill Switchers */}
        <div
          style={{
            position: 'absolute',
            top: 86,
            left: 0,
            right: 0,
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 24px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255, 255, 255, 0.92)',
              border: '1.5px solid rgba(125, 10, 66, 0.18)',
              borderRadius: 9999,
              padding: '6px 8px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 10px 30px rgba(125, 10, 66, 0.08)',
            }}
          >
            {stages.map((st, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={st.id}
                  onClick={() => scrollToStage(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 18px',
                    borderRadius: 9999,
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: 'none',
                    background: isCurrent
                      ? 'linear-gradient(135deg, #931252, #7d0a42)'
                      : 'transparent',
                    color: isCurrent ? '#ffffff' : '#64748b',
                    boxShadow: isCurrent
                      ? '0 4px 15px rgba(125, 10, 66, 0.35)'
                      : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      opacity: isCurrent ? 0.9 : 0.6,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{st.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Centerpiece 3D Canvas Canvas Layout */}
        <div
          className="container-max"
          style={{
            position: 'relative',
            zIndex: 20,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1320,
            margin: '0 auto',
            padding: '100px 32px 60px 32px',
          }}
        >
          {/* LEFT COLUMN: Dynamic Kinetic Typography on Scroll */}
          <div
            style={{
              width: '37%',
              maxWidth: 430,
              zIndex: 25,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Stage Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '5px 14px',
                    borderRadius: 9999,
                    background: '#fdf2f7',
                    border: '1.5px solid rgba(125, 10, 66, 0.22)',
                    color: '#7d0a42',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    marginBottom: 16,
                  }}
                >
                  <Sparkles size={13} />
                  <span>{currentStage.badge}</span>
                </div>

                {/* Main Headline */}
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                    fontWeight: 900,
                    color: '#0f172a',
                    lineHeight: 1.15,
                    marginBottom: 12,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {currentStage.title}
                </h2>

                {/* Subtitle with Solid Plum Accent */}
                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: '#7d0a42',
                    lineHeight: 1.45,
                    marginBottom: 18,
                  }}
                >
                  {currentStage.subtitle}
                </h3>

                {/* Description Body */}
                <p
                  style={{
                    color: '#334155',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    marginBottom: 24,
                  }}
                >
                  {currentStage.desc}
                </p>

                {/* Highlights List */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    marginBottom: 28,
                  }}
                >
                  {currentStage.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        fontSize: '0.88rem',
                        color: '#1e293b',
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: '#7d0a42', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Primary Action Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <button
                    onClick={() => {
                      sound.playClick();
                      if (onOpenModal) onOpenModal();
                    }}
                    className="btn-primary-plum shimmer-sweep"
                    style={{ padding: '12px 24px', fontSize: '0.92rem' }}
                  >
                    <span>Apply for {currentStage.dimension}</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href="#programs"
                    onClick={() => sound.playClick()}
                    className="btn-secondary-charcoal"
                    style={{ padding: '12px 20px', fontSize: '0.9rem' }}
                  >
                    <span>View Syllabus</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER 3D WEBGL TESSERACT VIEWPORT */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: 620,
              height: 560,
              zIndex: 15,
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <canvas
              ref={canvasRef}
              style={{
                width: '100%',
                height: '100%',
                cursor: 'grab',
                display: 'block',
              }}
            />
          </div>

          {/* RIGHT COLUMN: Interactive 3D Telemetry HUD Card on Scroll */}
          <div
            style={{
              width: '35%',
              maxWidth: 400,
              zIndex: 25,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 0.94, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.94, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1.5px solid rgba(125, 10, 66, 0.22)',
                  borderRadius: 24,
                  padding: '34px 28px',
                  boxShadow:
                    '0 25px 60px -10px rgba(125, 10, 66, 0.15), 0 10px 25px rgba(15, 23, 42, 0.05)',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Top Glowing Trim */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #7d0a42, #c41e73, #7d0a42)',
                  }}
                />

                {/* Stage Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Layers size={18} style={{ color: '#7d0a42' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: '#7d0a42',
                      }}
                    >
                      3D DIMENSION TELEMETRY
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 900,
                      color: '#0f172a',
                    }}
                  >
                    0{activeStage + 1} / 03
                  </span>
                </div>

                {/* Big Metric Callout */}
                <div
                  style={{
                    background: '#fdf2f7',
                    border: '1px solid rgba(125, 10, 66, 0.15)',
                    borderRadius: 16,
                    padding: '20px 24px',
                    marginBottom: 24,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem',
                      fontWeight: 900,
                      color: '#7d0a42',
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {currentStage.metricValue}
                  </div>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: '#475569',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {currentStage.metricLabel}
                  </div>
                </div>

                {/* Telemetry Data Grid */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    marginBottom: 20,
                  }}
                >
                  {currentStage.telemetry.map((t, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        background: '#ffffff',
                        border: '1px solid #f1f5f9',
                        borderRadius: 10,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.82rem',
                          color: '#64748b',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                        }}
                      >
                        {t.label}
                      </span>
                      <span
                        style={{
                          fontSize: '0.88rem',
                          color: '#0f172a',
                          fontWeight: 800,
                        }}
                      >
                        {t.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Guaranteed Exclusivity Seal */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '0.78rem',
                    color: '#15803d',
                    fontWeight: 700,
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: 14,
                  }}
                >
                  <Shield size={15} />
                  <span>Attingal TVM Campus Exclusive • No General Commerce</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Interactive Scroll Indicator Cue */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#7d0a42',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Scroll to rotate 4D Hypercube // Drag cursor to tilt
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} style={{ color: '#7d0a42' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
