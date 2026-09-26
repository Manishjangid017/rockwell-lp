import React from 'react';
import rockwellColorLogo from '../assets/images/rockwell_logo.png';
import rockwellWhiteLogo from '../assets/images/rockwell_logo_white.png';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-12 w-auto',
  variant = 'color',
}) => {
  const isWhite = variant === 'white';
  const logoSrc = isWhite ? rockwellWhiteLogo : rockwellColorLogo;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Rockwell International School Shamshabad Logo"
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};
