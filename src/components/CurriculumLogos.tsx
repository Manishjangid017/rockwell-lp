import React from 'react';
import cbseLocalLogo from '../assets/images/cbse_logo.jpg';

interface CurriculumLogosProps {
  variant?: 'light' | 'dark';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const cbseRemoteLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSztkbE260u13eHgUu8ZnAlM2ixlTvDNYYBdNS13tBCFZdEH44M2Hi1yH&s=10';
const cambridgeLogo =
  'https://getvectorlogo.com/wp-content/uploads/2019/04/cambridge-assessment-international-education-vector-logo.png';

export const CurriculumLogos: React.FC<CurriculumLogosProps> = ({
  variant = 'light',
  align = 'left',
  className = '',
}) => {
  const isDark = variant === 'dark';

  const alignmentClass = align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex flex-wrap items-center ${alignmentClass} gap-4 sm:gap-6 ${className}`}>
      {/* CBSE Affiliation Card */}
      <div
        className={`w-42 sm:w-48 md:w-52 h-26 sm:h-28 md:h-32 rounded-2xl bg-white flex items-center justify-center p-3 sm:p-4 transition-all duration-300 hover:scale-[1.02] ${
          isDark
            ? 'shadow-lg hover:shadow-2xl border border-white/90'
            : 'shadow-sm hover:shadow-md border border-slate-200'
        }`}
        title="CBSE Affiliation"
      >
        <img
          src={cbseLocalLogo}
          onError={(e) => {
            if (e.currentTarget.src !== cbseRemoteLogo) {
              e.currentTarget.src = cbseRemoteLogo;
            }
          }}
          alt="CBSE - Central Board of Secondary Education"
          className="max-h-18 sm:max-h-20 md:max-h-24 w-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Cambridge Assessment International Education Card */}
      <div
        className={`w-56 sm:w-68 md:w-76 h-26 sm:h-28 md:h-32 rounded-2xl bg-white flex items-center justify-center p-3 sm:p-4 transition-all duration-300 hover:scale-[1.02] ${
          isDark
            ? 'shadow-lg hover:shadow-2xl border border-white/90'
            : 'shadow-sm hover:shadow-md border border-slate-200'
        }`}
        title="Cambridge Assessment International Education"
      >
        <img
          src={cambridgeLogo}
          alt="Cambridge Assessment International Education"
          className="max-h-18 sm:max-h-20 md:max-h-24 w-full max-w-[96%] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};
