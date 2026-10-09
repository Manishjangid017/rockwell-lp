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
import StickyContactBar from './components/StickyContactBar.tsx';
import { PrivacyPolicy } from './components/PrivacyPolicy.tsx';
import { TermsAndConditions } from './components/TermsAndConditions.tsx';

export const FEE_STRUCTURE_PDF_URL = '/Fee-Structure-2026-27.pdf'; // Aapki fee structure PDF ka path
export const BROCHURE_PDF_URL = '/shamshabad-brochure-print-1.pdf';
const SESSION_KEY = 'riss_ty_data';
export const triggerPdfDownload = (fileUrl: string, fileName: string) => {
  try {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Direct download failed, opening in new tab:', error);
    window.open(fileUrl, '_blank');
  }
};
// ── Landing Page ──────────────────────────────────────────────────────────────
function LandingPage() {
  const navigate = useNavigate();
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [, setSelectedCurriculum] = useState('');
  const [requestedDoc, setRequestedDoc] = useState<'brochure' | 'fee_structure' | 'general'>('general');
  // LandingPage component ke andar:
  // const handleFormSubmit = (data: ThankYouData) => {
  //   const submitData: ThankYouData = {
  //     ...data,
  //     requestedDoc: requestedDoc, // Current state ("brochure" | "fee_structure" | "general")
  //   };

  //   sessionStorage.setItem(SESSION_KEY, JSON.stringify(submitData));
  //   navigate("/thank-you", { state: { data: submitData } });
  // };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyClick = () => {
    setRequestedDoc('general');
    scrollToSection('hero-admission-form');
  };
  const handleBrochureClick = () => {
    setRequestedDoc('brochure');
    scrollToSection('hero-admission-form');
  };

  const handleFeeStructureClick = () => {
    window.dispatchEvent(
      new CustomEvent('open-admission-form', {
        detail: {
          document: 'fee_structure',
        },
      }),
    );
    scrollToSection('hero-admission-form');
  };

  const handleFormSubmit = (data: ThankYouData) => {
    sessionStorage.removeItem('pdf_download_triggered');

    const submitData: ThankYouData = {
      ...data,
      requestedDoc: requestedDoc,
    };

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(submitData));
    navigate('/thank-you', { state: { data: submitData } });
  };

  const handleCurriculumSelect = (curriculum: string) => {
    setSelectedCurriculum(curriculum);
    scrollToSection('hero-admission-form');
  };
  // const downloadBrochure = async (
  //   filename = "shamshabad-brochure-print.pdf",
  // ) => {
  //   try {
  //     const response = await fetch(BROCHURE_PDF_URL);
  //     if (!response.ok) throw new Error("File fetch failed");

  //     const blob = await response.blob();
  //     const blobUrl = window.URL.createObjectURL(blob);

  //     const link = document.createElement("a");
  //     link.href = blobUrl;
  //     link.download = filename;
  //     document.body.appendChild(link);
  //     link.click();

  //     // Cleanup
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(blobUrl);
  //   } catch (error) {
  //     console.error(
  //       "Direct download failed, opening in new tab instead:",
  //       error,
  //     );
  //     // Fallback: Agar blob block ho jaye to new tab mein PDF open karein
  //     window.open(BROCHURE_PDF_URL, "_blank");
  //   }
  // };

  return (
    <div className="min-h-screen bg-white text-[#292727] flex flex-col font-sans selection:bg-[#2F5D9F] selection:text-white">
      <Header onApplyClick={handleApplyClick} />
      <main className="flex-grow">
        <Hero onApplyClick={handleApplyClick} onBrochureClick={handleBrochureClick} onFormSubmit={handleFormSubmit} />
        <TrustBar />
        <WhyRockwell />
        <Academics onApplyForCurriculum={handleCurriculumSelect} />
        <AcademicCounsellingCTA onCounsellorClick={handleApplyClick} />
        <CampusFacilities onOpenVirtualTour={() => setIsTourOpen(true)} />
        <ParentVoices />
        <FAQ onFeeStructureClick={handleFeeStructureClick} /> <LocationTransport />
      </main>

      <Footer />
      <StickyContactBar onApplyClick={handleApplyClick} />
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
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
}
