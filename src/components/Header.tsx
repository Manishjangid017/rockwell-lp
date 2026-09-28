import React, { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Logo } from "./Logo.tsx";

interface HeaderProps {
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Dynamic active tab highlighting based on scroll position
      const sections = [
        { name: "Parent Voices", id: "parent-voices" },
        { name: "Campus & Facilities", id: "campus-facilities" },
        { name: "Academics", id: "academics" },
        { name: "About Us", id: "why-rockwell" },
      ];

      if (scrollPosition < 320) {
        setActiveNav("");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 180;
          if (scrollPosition >= top) {
            setActiveNav(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#why-rockwell" },
    { name: "Academics", href: "#academics", hasDropdown: false },
    {
      name: "Campus & Facilities",
      href: "#campus-facilities",
      hasDropdown: false,
    },
    { name: "Parent Voices", href: "#parent-voices", hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-100 ${
        isScrolled ? "shadow-sm py-2.5" : "shadow-xs py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Logo */}
          <a
            href="#"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5D9F] rounded-lg transition-transform hover:opacity-95"
            aria-label="Rockwell International School Home"
          >
            <div
              className={`transition-all duration-300 ${isScrolled ? "h-11 sm:h-12" : "h-12 sm:h-13"}`}
            >
              <Logo
                variant="color"
                className="h-full w-auto max-w-[190px] sm:max-w-[230px]"
                showSubtitle={true}
              />
            </div>
          </a>

          {/* Center: Desktop Navigation with Bigger Tabs & Interactive Hover State */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`group inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl sm:rounded-2xl text-[15px] sm:text-base font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                    isActive
                      ? "bg-[#2F5D9F] text-white shadow-sm"
                      : "text-slate-700 hover:bg-[#2F5D9F] hover:text-white hover:shadow-sm"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Contact & Primary Action */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            {/* <div className="flex items-center gap-3.5 text-xs font-semibold">
              <a
                href="tel:+919000079992"
                className="flex items-center gap-1.5 text-[#2F5D9F] hover:text-[#1e3b68] transition-colors"
                title="Call Admissions"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">+91 90000 79992</span>
                <span className="xl:hidden">Call</span>
              </a>

              <a
                href="https://wa.me/919000079992"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition-colors"
                title="WhatsApp Admissions"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div> */}

            <button
              onClick={onApplyClick}
              className="bg-[#EF7D2D] hover:bg-[#d96c21] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Bar: Contact Icons + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2.5">
            {/* <a
              href="tel:+919000079992"
              className="p-2 rounded-lg text-[#2F5D9F] bg-blue-50 transition-colors"
              aria-label="Call Admissions"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919000079992"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-emerald-600 bg-emerald-50 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a> */}
            <button
              onClick={onApplyClick}
              className="bg-[#EF7D2D] hover:bg-[#d96c21] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#292727] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2F5D9F]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 mb-5">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveNav(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-bold py-2.5 px-3.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-[#2F5D9F] text-white shadow-xs"
                      : "text-[#292727] hover:bg-slate-100 hover:text-[#2F5D9F]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
              <span>Admissions Helpline:</span>
              <a href="tel:+919000079992" className="text-[#2F5D9F] font-bold">
                +91 90000 79992
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full bg-[#EF7D2D] hover:bg-[#d96c21] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
