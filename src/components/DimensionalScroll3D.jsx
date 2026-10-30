import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Layers, RotateCcw } from 'lucide-react';
import { sound } from '../utils/sound';

export default function DimensionalScroll3D({ onOpenModal }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0); // 0: Foundation, 1: Intermediate, 2: Final

  // 3D WebGL Engine for the Tesser Chiral Emblem
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let width = canvas.clientWidth || 540;
    let height = canvas.clientHeight || 540;

    // Scene & Perspective Camera
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

    // Master Group for 3D Emblem & Celestial Rings
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 1. Tesser Iconic Chiral 3-Blade Ribbon Geometry (Exact Polygon)
    const shape = new THREE.Shape();
    const outerCoords = [
      [1.93, 0],
      [1.651, -0.144],
      [1.535, -0.271],
      [1.553, -0.416],
      [1.511, -0.55],
      [1.525, -0.711],
      [1.543, -0.891],
      [1.52, -1.064],
      [1.384, -1.161],
      [1.242, -1.242],
      [1.113, -1.327],
      [0.979, -1.398],
      [0.854, -1.478],
      [0.732, -1.57],
      [0.592, -1.628],
      [0.455, -1.697],
      [0.318, -1.803],
      [0.164, -1.873],
      [0, -1.979],
      [-0.181, -2.07],
      [-0.387, -2.193],
      [-0.628, -2.342],
      [-0.855, -2.348],
      [-1.035, -2.22],
      [-1.225, -2.121],
      [-1.405, -2.007],
      [-1.527, -1.82],
      [-1.522, -1.522],
      [-1.516, -1.272],
      [-1.54, -1.079],
      [-1.714, -0.99],
      [-1.884, -0.878],
      [-2.093, -0.762],
      [-2.27, -0.608],
      [-2.266, -0.4],
      [-2.268, -0.198],
      [-2.252, 0],
      [-2.268, 0.198],
      [-2.266, 0.4],
      [-2.27, 0.608],
      [-2.255, 0.821],
      [-2.265, 1.056],
      [-2.271, 1.311],
      [-2.27, 1.589],
      [-2.274, 1.908],
      [-2.064, 2.064],
      [-1.845, 2.199],
      [-1.632, 2.331],
      [-1.348, 2.336],
      [-0.931, 1.996],
      [-0.719, 1.976],
      [-0.557, 2.079],
      [-0.382, 2.169],
      [-0.198, 2.268],
      [0, 2.375],
      [0.198, 2.268],
      [0.382, 2.169],
      [0.557, 2.079],
      [0.719, 1.976],
      [0.878, 1.884],
      [1.039, 1.8],
      [1.192, 1.702],
      [1.352, 1.611],
      [1.505, 1.505],
      [1.687, 1.415],
      [1.865, 1.306],
      [2.057, 1.188],
      [2.265, 1.056],
      [2.255, 0.821],
      [2.27, 0.608],
      [2.266, 0.4],
      [2.268, 0.198]
    ];

    shape.moveTo(outerCoords[0][0], outerCoords[0][1]);
    for (let i = 1; i < outerCoords.length; i++) {
      shape.lineTo(outerCoords[i][0], outerCoords[i][1]);
    }
    shape.closePath();

    // Central Triangular Void
    const holePath = new THREE.Path();
    const holeCoords = [
      [0.02, 0],
      [0, -0.22],
      [-0.08, -0.21],
      [-0.17, -0.14],
      [-0.32, -0.06],
      [-0.4, 0],
      [-0.67, 0.25],
      [-0.55, 0.33],
      [-0.36, 0.44],
      [-0.18, 0.54],
      [0, 0.64],
    ];
    holePath.moveTo(holeCoords[0][0], holeCoords[0][1]);
    for (let i = 1; i < holeCoords.length; i++) {
      holePath.lineTo(holeCoords[i][0], holeCoords[i][1]);
    }
    holePath.closePath();
    shape.holes.push(holePath);

    const extrudeSettings = {
      depth: 0.38,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    };

    const logoGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    logoGeometry.center();
    logoGeometry.computeVertexNormals();

    // 2. Authentic Tesser Magenta / Plum Materials
    const frontMaterial = new THREE.MeshStandardMaterial({
      color: 0x931252, // Vibrant Tesser Magenta Plum
      emissive: 0x5a0b32, // Internal plum radiance
      emissiveIntensity: 0.48,
      metalness: 0.18,
      roughness: 0.26,
      side: THREE.DoubleSide,
    });

    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a1b30, // Shadow wine plum
      emissive: 0x320818, // Warm subtle shadow glow
      emissiveIntensity: 0.4,
      metalness: 0.24,
      roughness: 0.32,
      side: THREE.DoubleSide,
    });

    const logoMesh = new THREE.Mesh(logoGeometry, [frontMaterial, sideMaterial]);
    logoMesh.scale.set(0.68, 0.68, 0.68);
    masterGroup.add(logoMesh);

    // 3. Beveled Razor-Sharp Edge Wireframe
    const edgeGeo = new THREE.EdgesGeometry(logoGeometry, 24);
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xff66aa, // Luminous rose-magenta edge lines
      transparent: true,
      opacity: 0.65,
    });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    logoMesh.add(edgeLines);

    // 4. Celestial Orbital Rings (Compact & Perfectly Framed)
    const ringGroup = new THREE.Group();
    masterGroup.add(ringGroup);

    // Gold Celestial Orbit Ring
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.014, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.38;
    ring1.rotation.y = Math.PI * 0.12;
    ringGroup.add(ring1);

    // Plum Celestial Orbit Ring
    const ringGeo2 = new THREE.TorusGeometry(2.75, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x931252,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI * 0.32;
    ring2.rotation.y = -Math.PI * 0.22;
    ringGroup.add(ring2);

    // Orbiting Satellites (Golden with Plum Emissive Core)
    const satelliteGeo = new THREE.SphereGeometry(0.065, 16, 16);
    const satelliteMat = new THREE.MeshStandardMaterial({
      color: 0xf0c76d,
      emissive: 0x7d0a42,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.15,
    });
    const satellites = [
      new THREE.Mesh(satelliteGeo, satelliteMat),
      new THREE.Mesh(satelliteGeo, satelliteMat),
      new THREE.Mesh(satelliteGeo, satelliteMat),
    ];
    satellites.forEach((s) => ringGroup.add(s));

    // 5. Floating Dust Particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 2.0 + (Math.random() - 0.5) * 1.5;
      particlePos[i * 3] = Math.cos(angle) * radius;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 3.0;
      particlePos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x7d0a42,
      size: 0.038,
      transparent: true,
      opacity: 0.55,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // 6. Cinema Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.6);
    keyLight.position.set(5, 6, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff69b4, 2.2);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xf0c76d, 1.8);
    fillLight.position.set(0, -6, 5);
    scene.add(fillLight);

    const cursorLight = new THREE.PointLight(0xffffff, 1.2, 16);
    cursorLight.position.set(0, 0, 7);
    scene.add(cursorLight);

    // 7. Interactive Drag & Mouse Physics
    let isDragging = false;
    let previousPointer = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };
    let baseRotation = { x: 0.08, y: -0.15 };
    let dragRotation = { x: 0, y: 0 };
    let targetParallax = { x: 0, y: 0 };
    let currentParallax = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isDragging = true;
      previousPointer = { x: e.clientX, y: e.clientY };
      canvas.style.cursor = 'grabbing';
    };

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetParallax.x = nx * 0.25;
      targetParallax.y = ny * 0.25;

      cursorLight.position.x = nx * 3;
      cursorLight.position.y = ny * 3;

      if (isDragging) {
        const deltaX = e.clientX - previousPointer.x;
        const deltaY = e.clientY - previousPointer.y;
        rotationVelocity.y = deltaX * 0.007;
        rotationVelocity.x = deltaY * 0.007;
        dragRotation.y += rotationVelocity.y;
        dragRotation.x += rotationVelocity.x;
        previousPointer = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const newWidth = canvas.clientWidth || 440;
      const newHeight = canvas.clientHeight || 420;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTime) * 0.001;

      // Parallax smoothing
      currentParallax.x += (targetParallax.x - currentParallax.x) * 0.06;
      currentParallax.y += (targetParallax.y - currentParallax.y) * 0.06;

      if (isDragging) {
        // Dragging physics
      } else {
        // Inertia damping
        dragRotation.x += rotationVelocity.x;
        dragRotation.y += rotationVelocity.y;
        rotationVelocity.x *= 0.92;
        rotationVelocity.y *= 0.92;
      }

      // Elegant front-facing floating oscillation (subtle ±20 deg floating tilt)
      const ambientFloatY = Math.sin(elapsed * 0.75) * 0.32;
      const ambientFloatX = Math.cos(elapsed * 0.5) * 0.08;

      // Stage scale targets
      const stageScales = [0.68, 0.74, 0.8];
      const baseScale = stageScales[activeStage] || 0.68;
      const breath = 1 + Math.sin(elapsed * 2) * 0.02;
      const targetScale = baseScale * breath;
      logoMesh.scale.set(targetScale, targetScale, targetScale);

      // Apply rotation: Base + Ambient Float + Drag Offset + Cursor Parallax
      logoMesh.rotation.x = baseRotation.x + ambientFloatX + dragRotation.x + currentParallax.y;
      logoMesh.rotation.y = baseRotation.y + ambientFloatY + dragRotation.y + currentParallax.x;

      // Animate orbital rings
      ring1.rotation.z = elapsed * 0.22;
      ring2.rotation.z = -elapsed * 0.25;

      // Animate satellites
      satellites.forEach((s, i) => {
        const sAngle = elapsed * 0.8 + (i * Math.PI * 2) / 3;
        const sR = 2.35;
        s.position.x = Math.cos(sAngle) * sR;
        s.position.y = Math.sin(sAngle) * sR * 0.38;
        s.position.z = Math.sin(sAngle) * sR * 0.58;
      });

      // Animate particle field
      particleField.rotation.y = -elapsed * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      logoGeometry.dispose();
      edgeGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      satelliteGeo.dispose();
      particleGeo.dispose();
      frontMaterial.dispose();
      sideMaterial.dispose();
      edgeMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      satelliteMat.dispose();
      particleMat.dispose();
    };
  }, [activeStage]);

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

  const selectStage = (stageIndex) => {
    sound.playClick();
    setActiveStage(stageIndex);
  };

  return (
    <section
      ref={containerRef}
      id="dimension-scroll"
      className="dimensional-scroll-section"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#faf7f9',
        padding: '50px 0 60px 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Technical Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(125, 10, 66, 0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.65,
          pointerEvents: 'none',
        }}
      />

      <div className="container-max" style={{ position: 'relative', zIndex: 10, padding: '0 24px' }}>
        {/* Top Control Bar with Dimension Pill Switchers */}
        <div
          className="dimensional-top-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255, 255, 255, 0.94)',
              border: '1.5px solid rgba(125, 10, 66, 0.18)',
              borderRadius: 9999,
              padding: '5px 8px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 10px 30px rgba(125, 10, 66, 0.08)',
            }}
          >
            {stages.map((st, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <button
                  key={st.id}
                  onClick={() => selectStage(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 20px',
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

        {/* 3-Column Layout: Left Narrative - Center Grand 3D Canvas - Right Telemetry HUD */}
        <div className="dimensional-content-grid">
          {/* LEFT COLUMN: Narrative & Credentials */}
          <div className="dimensional-story-col">
            <div style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
              {stages.map((st, idx) => {
                const isCurrent = activeStage === idx;
                return (
                  <motion.div
                    key={st.id}
                    initial={false}
                    animate={{
                      opacity: isCurrent ? 1 : 0,
                      y: isCurrent ? 0 : idx < activeStage ? -12 : 12,
                      pointerEvents: isCurrent ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ gridArea: 'stack' }}
                  >
                    {/* Stage Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '4px 12px',
                        borderRadius: 9999,
                        background: '#fdf2f7',
                        border: '1.5px solid rgba(125, 10, 66, 0.22)',
                        color: '#7d0a42',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        marginBottom: 12,
                      }}
                    >
                      <Sparkles size={12} />
                      <span>{st.badge}</span>
                    </div>

                    {/* Main Headline */}
                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.9rem, 2.6vw, 2.45rem)',
                        fontWeight: 900,
                        color: '#0f172a',
                        lineHeight: 1.15,
                        marginBottom: 8,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {st.title}
                    </h2>

                    {/* Subtitle */}
                    <h3
                      style={{
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: '#7d0a42',
                        lineHeight: 1.45,
                        marginBottom: 14,
                      }}
                    >
                      {st.subtitle}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: '#334155',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        marginBottom: 18,
                      }}
                    >
                      {st.desc}
                    </p>

                    {/* Highlights */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        marginBottom: 22,
                      }}
                    >
                      {st.highlights.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            fontSize: '0.82rem',
                            color: '#1e293b',
                            fontWeight: 600,
                          }}
                        >
                          <CheckCircle2 size={14} style={{ color: '#7d0a42', flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <button
                        onClick={() => {
                          sound.playClick();
                          if (onOpenModal) onOpenModal();
                        }}
                        className="btn-primary-plum shimmer-sweep"
                        style={{ padding: '10px 20px', fontSize: '0.86rem' }}
                      >
                        <span>Apply for {st.dimension}</span>
                        <ArrowRight size={14} />
                      </button>

                      <a
                        href="#programs"
                        onClick={() => sound.playClick()}
                        className="btn-secondary-charcoal"
                        style={{ padding: '10px 16px', fontSize: '0.86rem' }}
                      >
                        <span>View Syllabus</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CENTER COLUMN: Grand Interactive 3D Tesser Emblem */}
          <div className="dimensional-canvas-wrap">
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

          {/* RIGHT COLUMN: Telemetry HUD Card */}
          <div className="dimensional-hud-col">
            <div style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
              {stages.map((st, idx) => {
                const isCurrent = activeStage === idx;
                return (
                  <motion.div
                    key={st.id}
                    initial={false}
                    animate={{
                      opacity: isCurrent ? 1 : 0,
                      scale: isCurrent ? 1 : 0.96,
                      y: isCurrent ? 0 : idx < activeStage ? -12 : 12,
                      pointerEvents: isCurrent ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      gridArea: 'stack',
                      background: 'rgba(255, 255, 255, 0.96)',
                      border: '1.5px solid rgba(125, 10, 66, 0.2)',
                      borderRadius: 22,
                      padding: '28px 24px',
                      boxShadow:
                        '0 24px 55px -10px rgba(125, 10, 66, 0.14), 0 8px 20px rgba(15, 23, 42, 0.04)',
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
                        height: 3,
                        background: 'linear-gradient(90deg, #7d0a42, #c41e73, #7d0a42)',
                      }}
                    />

                    {/* Stage Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 16,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <Layers size={16} style={{ color: '#7d0a42' }} />
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.74rem',
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
                          fontSize: '0.8rem',
                          fontWeight: 900,
                          color: '#0f172a',
                        }}
                      >
                        0{idx + 1} / 03
                      </span>
                    </div>

                    {/* Metric Callout */}
                    <div
                      style={{
                        background: '#fdf2f7',
                        border: '1px solid rgba(125, 10, 66, 0.15)',
                        borderRadius: 14,
                        padding: '16px 20px',
                        marginBottom: 18,
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '2.3rem',
                          fontWeight: 900,
                          color: '#7d0a42',
                          lineHeight: 1,
                          marginBottom: 4,
                        }}
                      >
                        {st.metricValue}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: '#475569',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {st.metricLabel}
                      </div>
                    </div>

                    {/* Telemetry Grid */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        marginBottom: 16,
                      }}
                    >
                      {st.telemetry.map((t, tIdx) => (
                        <div
                          key={tIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '8px 12px',
                            background: '#ffffff',
                            border: '1px solid #f1f5f9',
                            borderRadius: 8,
                            boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '0.78rem',
                              color: '#64748b',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                            }}
                          >
                            {t.label}
                          </span>
                          <span
                            style={{
                              fontSize: '0.84rem',
                              color: '#0f172a',
                              fontWeight: 800,
                            }}
                          >
                            {t.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Exclusivity Seal */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 7,
                        fontSize: '0.74rem',
                        color: '#15803d',
                        fontWeight: 700,
                        borderTop: '1px solid #f1f5f9',
                        paddingTop: 12,
                      }}
                    >
                      <Shield size={14} />
                      <span>Attingal TVM Campus Exclusive • No General Commerce</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dimensional-content-grid {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
          width: 100%;
        }
        .dimensional-story-col {
          width: 32%;
          max-width: 380px;
          flex-shrink: 0;
          z-index: 20;
        }
        .dimensional-canvas-wrap {
          flex: 1;
          height: 420px;
          max-width: 440px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 15;
          margin: 0 auto;
        }
        .dimensional-hud-col {
          width: 31%;
          max-width: 360px;
          flex-shrink: 0;
          z-index: 20;
        }

        @media (max-width: 1024px) {
          .dimensional-content-grid {
            flex-direction: column !important;
            gap: 28px !important;
          }
          .dimensional-canvas-wrap {
            width: 100% !important;
            max-width: 460px !important;
            height: 400px !important;
            order: 1;
          }
          .dimensional-story-col {
            width: 100% !important;
            max-width: 600px !important;
            order: 2;
          }
          .dimensional-hud-col {
            width: 100% !important;
            max-width: 600px !important;
            order: 3;
          }
        }
      `}</style>
    </section>
  );
}
