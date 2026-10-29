import React, { useState } from 'react';
import Preloader from './components/Preloader';
import DimensionCanvas from './components/DimensionCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DimensionPhilosophy from './components/DimensionPhilosophy';
import Programs from './components/Programs';
import CampusShowcase from './components/CampusShowcase';
import DailyDiscipline from './components/DailyDiscipline';
import EligibilityCalculator from './components/EligibilityCalculator';
import TestimonialsAndFaculty from './components/TestimonialsAndFaculty';
import ContactAndLocation from './components/ContactAndLocation';
import Footer from './components/Footer';
import VisitModal from './components/VisitModal';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  const handleReplayIntro = () => {
    setShowPreloader(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-[#7d0a42] selection:text-white">
      {/* Cinematic Non-1-100% Preloader */}
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Interactive Canvas Dimensional Particle Field */}
      <DimensionCanvas />

      {/* Ambient Gradient Overlays */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 bg-radial-plum-light" 
        style={{ pointerEvents: 'none' }} 
      />

      {/* Floating Glassmorphism Navbar */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <DimensionPhilosophy />
        <Programs onOpenModal={() => setIsModalOpen(true)} />
        <CampusShowcase />
        <DailyDiscipline />
        <EligibilityCalculator onOpenModal={() => setIsModalOpen(true)} />
        <TestimonialsAndFaculty />
        <ContactAndLocation />
      </main>

      {/* Cinematic Footer with Replay Button */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* Interactive Admission Inquiry Modal */}
      <VisitModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
