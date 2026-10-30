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
import CmaToppers from './components/CmaToppers';
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
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 overflow-x-hidden selection:bg-[#7d0a42] selection:text-white">
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
        <Hero onOpenModal={() => setIsModalOpen(true)} isReady={!showPreloader} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <DimensionPhilosophy />
        </motion.div>

        {/* Visionary Leadership Showcase: Abhinav & Ajmal - Slides in from side */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MeetFounders onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>

        {/* 3D Interactive Dimensional Journey - Slides in from side (Desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <DimensionalScroll3D onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>

        {/* CMA National Rank Holders & Toppers Showcase (Inspired by Reference Screenshot) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <CmaToppers onOpenModal={() => setIsModalOpen(true)} />
        </motion.div>

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
