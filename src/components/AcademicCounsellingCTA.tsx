import React, { useRef } from 'react';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface AcademicCounsellingCTAProps {
  onCounsellorClick: () => void;
}

export const AcademicCounsellingCTA: React.FC<AcademicCounsellingCTAProps> = ({
  onCounsellorClick,
}) => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ctaRef, { once: true, margin: '-40px 0px' });

  return (
    <section ref={ctaRef} className="relative bg-[#2F5D9F] text-white py-14 lg:py-16 overflow-hidden">
      {/* Abstract curved shapes inspired by the Rockwell logo */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-10">
        <svg viewBox="0 0 300 300" className="w-full h-full object-cover" fill="none">
          <path
            d="M 50 280 C 120 220, 200 120, 250 20 C 180 80, 110 180, 50 280 Z"
            fill="#FFFFFF"
          />
          <circle cx="260" cy="20" r="18" fill="#FFA85C" />
        </svg>
      </div>
      <div className="absolute left-[-50px] bottom-[-50px] w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FFA85C] mb-2.5">
              <MessageSquare className="w-4 h-4" />
              <span>Academic Counselling CTA · Admission Form</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Unsure which curriculum suits your child best?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
              Our experienced academic advisors will guide you through curriculum pathways, assessment patterns, and student transition support.
            </p>
          </div>

          {/* Action & Contact */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href="tel:+919000079992"
              className="px-5 py-3.5 rounded-lg border border-white/25 hover:border-white/50 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-[#FFA85C]" />
              <span>+91 90000 79992</span>
            </a>

            <button
              onClick={onCounsellorClick}
              className="bg-[#EF7D2D] hover:bg-[#df6e1f] text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Talk to an Academic Counsellor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

