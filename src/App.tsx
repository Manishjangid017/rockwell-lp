import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustBar } from './components/TrustBar.tsx';
import { WhyRockwell } from './components/WhyRockwell.tsx';
import { Academics } from './components/Academics.tsx';
import { AcademicCounsellingCTA } from './components/AcademicCounsellingCTA.tsx';
import { CampusFacilities } from './components/CampusFacilities.tsx';
import { ParentVoices } from './components/ParentVoices.tsx';
import { FAQ } from './components/FAQ.tsx';
import { LocationTransport } from './components/LocationTransport.tsx';
import { Footer } from './components/Footer.tsx';
import { CampusTourModal } from './components/CampusTourModal.tsx';
import { ThankYouPage, type ThankYouData } from './components/ThankYouPage.tsx';

const BROCHURE_PDF_URL = '/shamshabad-brochure-print.pdf';
const SESSION_KEY = 'riss_ty_data';

function downloadBrochure() {
  const a = document.createElement('a');
  a.href = BROCHURE_PDF_URL;
  a.download = 'shamshabad-brochure-print.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ── Landing Page ──────────────────────────────────────────────────────────────
function LandingPage() {
  const navigate = useNavigate();
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [, setSelectedCurriculum] = useState('');

  const handleFormSubmit = (data: ThankYouData) => {
    // Persist in sessionStorage so a hard-refresh on /thank-you still works
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
    navigate('/thank-you', { state: { data } });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyClick = () => scrollToSection('hero-admission-form');

  const handleCurriculumSelect = (curriculum: string) => {
    setSelectedCurriculum(curriculum);
    scrollToSection('hero-admission-form');
  };

  return (
    <div className="min-h-screen bg-white text-[#292727] flex flex-col font-sans selection:bg-[#2F5D9F] selection:text-white">
      <Header onApplyClick={handleApplyClick} />
      <main className="flex-grow">
        <Hero onApplyClick={handleApplyClick} onBrochureClick={downloadBrochure} onFormSubmit={handleFormSubmit} />
        <TrustBar />
        <WhyRockwell />
        <Academics onApplyForCurriculum={handleCurriculumSelect} />
        <AcademicCounsellingCTA onCounsellorClick={handleApplyClick} />
        <CampusFacilities onOpenVirtualTour={() => setIsTourOpen(true)} />
        <ParentVoices />
        <FAQ onFeeStructureClick={downloadBrochure} />
        <LocationTransport />
      </main>

      <Footer />

      <CampusTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onBookVisit={() => scrollToSection('hero-admission-form')}
      />
    </div>
  );
}

// ── Thank You Route ───────────────────────────────────────────────────────────
function ThankYouRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Try router state (normal navigation)
  let data = (location.state as { data?: ThankYouData } | null)?.data;

  // 2. Fall back to sessionStorage (page refresh)
  if (!data) {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) {
      try {
        data = JSON.parse(stored) as ThankYouData;
      } catch {
        data = undefined;
      }
    }
  }

  // 3. Nothing at all → send home (declarative, no render-time navigate call)
  if (!data) {
    return <Navigate to="/" replace />;
  }

  const handleBack = () => {
    sessionStorage.removeItem(SESSION_KEY);
    navigate('/');
  };

  return <ThankYouPage data={data} onBack={handleBack} />;
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/thank-you" element={<ThankYouRoute />} />
    </Routes>
  );
}
