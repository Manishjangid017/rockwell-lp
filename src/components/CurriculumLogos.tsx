import React from 'react';
import cbseLocalLogo from '../assets/images/cbse_logo.jpg';
import cambridgeLocalLogo from '../assets/images/cambridge_logo.svg';

interface CurriculumLogosProps {
  variant?: 'light' | 'dark';
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const cbseRemoteLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSztkbE260u13eHgUu8ZnAlM2ixlTvDNYYBdNS13tBCFZdEH44M2Hi1yH&s=10';
const cambridgeRemoteLogo = 'https://getvectorlogo.com/wp-content/uploads/2019/04/cambridge-assessment-international-education-vector-logo.png';

export const CurriculumLogos: React.FC<CurriculumLogosProps> = ({
  variant = 'light',
  align = 'left',
  className = '',
}) => {
  const isDark = variant === 'dark';

  const alignmentClass =
    align === 'center'
      ? 'justify-center'
      : align === 'right'
      ? 'justify-end'
      : 'justify-start';

  return (
    <div className={`flex flex-wrap items-center ${alignmentClass} gap-4 sm:gap-5 ${className}`}>
      {/* CBSE Affiliation Card */}
      <div
        className={`w-38 sm:w-44 md:w-48 h-22 sm:h-24 md:h-26 rounded-2xl bg-white flex items-center justify-center p-3 sm:p-4 transition-all duration-300 hover:scale-[1.02] ${
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
          className="max-h-14 sm:max-h-16 md:max-h-17 w-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Cambridge Assessment International Education Card */}
      <div
        className={`w-46 sm:w-52 md:w-58 h-22 sm:h-24 md:h-26 rounded-2xl bg-white flex items-center justify-center p-3.5 sm:p-4.5 transition-all duration-300 hover:scale-[1.02] ${
          isDark
            ? 'shadow-lg hover:shadow-2xl border border-white/90'
            : 'shadow-sm hover:shadow-md border border-slate-200'
        }`}
        title="Cambridge Assessment International Education"
      >
        <img
          src={cambridgeLocalLogo}
          onError={(e) => {
            if (e.currentTarget.src !== cambridgeRemoteLogo) {
              e.currentTarget.src = cambridgeRemoteLogo;
            }
          }}
          alt="Cambridge Assessment International Education"
          className="max-h-9 sm:max-h-11 md:max-h-12 w-auto max-w-[90%] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

