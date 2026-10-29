import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Preloader from './components/Preloader';
import DimensionCanvas from './components/DimensionCanvas';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DimensionPhilosophy from './components/DimensionPhilosophy';
import DimensionalScroll3D from './components/DimensionalScroll3D';
import Programs from './components/Programs';
import CampusShowcase from './components/CampusShowcase';
import DailyDiscipline from './components/DailyDiscipline';
import VideoReviews from './components/VideoReviews';
import EligibilityCalculator from './components/EligibilityCalculator';
import MeetFounders from './components/MeetFounders';
import TestimonialsAndFaculty from './components/TestimonialsAndFaculty';
import ContactAndLocation from './components/ContactAndLocation';
import Footer from './components/Footer';
import VisitModal from './components/VisitModal';
import FloatingConnector from './components/FloatingConnector';
import TesserBotTrigger from './components/TesserBotTrigger';
import TesserBotModal from './components/TesserBotModal';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBotOpen, setIsBotOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#7d0a42] selection:text-white">
      {/* Interactive Top Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Cinematic Non-1-100% Preloader */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Interactive Canvas Dimensional Particle Field */}
      <DimensionCanvas />

      {/* Ambient Radial Gradient Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-radial-plum-light" 
        style={{ pointerEvents: 'none' }} 
      />

      {/* Floating Minimalist Navbar */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Main Content Sections with Scroll In-View Reveal Transitions */}
      <main className="relative z-10">
        <Hero onOpenModal={() => setIsModalOpen(true)} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <DimensionPhilosophy />
        </motion.div>

        {/* Pinned Scroll-Driven Visionary Leadership Showcase: Abhinav & Ajmal */}
        <MeetFounders onOpenModal={() => setIsModalOpen(true)} />

        {/* AIAF / Dribbble-grade Pinned 3D Interactive Dimensional Scroll Journey */}
        <DimensionalScroll3D onOpenModal={() => setIsModalOpen(true)} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <Programs onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <CampusShowcase />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <DailyDiscipline />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <VideoReviews onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <EligibilityCalculator onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <TestimonialsAndFaculty />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <ContactAndLocation />
        </motion.div>
      </main>

      {/* Clean Luxury Footer */}
      <Footer />

      {/* Floating Vertical Connector Capsule on the LEFT (Phone, WhatsApp, Instagram, Facebook) */}
      <FloatingConnector />

      {/* Floating Tesser AI Bot Trigger on the RIGHT with Authentic Tesser Logo */}
      <TesserBotTrigger 
        isOpen={isBotOpen} 
        onClick={() => setIsBotOpen(!isBotOpen)} 
      />

      {/* Interactive AI Admission Counselor Chatbot Modal on the Bottom-Right */}
      <TesserBotModal 
        isOpen={isBotOpen} 
        onClose={() => setIsBotOpen(false)} 
      />

      {/* Priority Admission Inquiry Modal */}
      <VisitModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
