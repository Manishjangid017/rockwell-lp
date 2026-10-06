import React from "react";
import rockwellColorLogo from "../assets/images/rockwell_logo.png";
import rockwellWhiteLogo from "../assets/images/Rockwell-international-school-shamshabad.webp";

interface LogoProps {
  className?: string;
  variant?: "color" | "white";
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "h-12 w-auto",
  variant = "color",
}) => {
  const isWhite = variant === "white";
  const logoSrc = isWhite ? rockwellWhiteLogo : rockwellColorLogo;

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${
        isWhite ? "h-[150px] w-auto" : className
      }`}
    >
      <img
        src={logoSrc}
        alt="rockwell international"
        className="w-full h-full object-contain"
        loading="eager"
      />
    </div>
  );
};
