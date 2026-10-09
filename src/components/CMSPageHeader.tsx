import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const CMSPageHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/');
    // Scroll to form after navigation
    setTimeout(() => {
      const el = document.getElementById('hero-admission-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Logo */}
          <a
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5D9F] rounded-lg transition-transform hover:opacity-95"
            aria-label="Rockwell International School Home"
          >
            <div className="h-11 sm:h-12 transition-all duration-300">
              <Logo
                variant="color"
                className="h-full w-auto max-w-[190px] sm:max-w-[230px]"
                showSubtitle={true}
              />
            </div>
          </a>

          {/* Right: Apply for Admission Button */}
          <button
            onClick={handleApplyClick}
            className="bg-[#EF7D2D] hover:bg-[#d96c21] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span className="hidden sm:inline">Apply for Admission</span>
            <span className="sm:hidden">Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
