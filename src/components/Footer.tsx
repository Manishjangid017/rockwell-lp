import React from 'react';
import { Logo } from './Logo.tsx';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1f1e1e] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block" aria-label="Rockwell International School">
              <Logo
                variant="white"
                className="w-48 sm:w-56 h-auto"
                showSubtitle={true}
              />
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Nurturing every child’s potential through internationally acclaimed CBSE and Cambridge pathways in an inspiring 8.5-acre modern campus.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFA85C]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="#why-rockwell" className="hover:text-white transition-colors">
                  Why Rockwell Is Different
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Academics & Curricula
                </a>
              </li>
              <li>
                <a href="#campus-facilities" className="hover:text-white transition-colors">
                  Campus & Facilities
                </a>
              </li>
              <li>
                <a href="#parent-voices" className="hover:text-white transition-colors">
                  Parent Voices
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admissions (Grade 1–7)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFA85C]">
              Contact Information
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EF7D2D] shrink-0 mt-0.5" />
                <span>
                  D.No 15-14, KSR X Road, Kolan Estates, Near Milestone Kandakatla, Satamrai, Shamshabad, Hyderabad, Telangana - 501218
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EF7D2D] shrink-0" />
                <div className="flex items-center gap-2 font-mono">
                  <a href="tel:+919000079992" className="hover:text-white transition-colors">
                    +91 9000079992
                  </a>
                  <span>·</span>
                  <a href="tel:+919000079993" className="hover:text-white transition-colors">
                    +91 9000079993
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#EF7D2D] shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-200">Office:</span> Mon–Fri: 09:00 am – 5:00 pm, Sat: 09:00 am – 1:00 pm
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <Clock className="w-4 h-4 opacity-50 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-300">School Timings:</span> Mon–Sat: 08:30 am – 3:30 pm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Rockwell International School Shamshabad. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span>Design and developed by Mediagarh</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
