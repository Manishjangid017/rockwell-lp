import React, { useRef } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Calendar,
  Navigation,
  Bus,
  ShieldCheck,
} from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";

export const LocationTransport: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px 0px" });

  const headerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const tagVariants: Variants = {
    hidden: { opacity: 0, x: -35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -45, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const descVariants: Variants = {
    hidden: { opacity: 0, x: -30, y: 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="location-contact"
      className="py-20 lg:py-28 bg-[#fafafc] border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Staggered Slide-In & Ease-In */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mb-14"
        >
          <motion.div
            variants={tagVariants}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F5D9F] mb-3"
          >
            <span className="w-6 h-px bg-[#EF7D2D]" />
            <span>Visit Us & Connect</span>
          </motion.div>
          <motion.h2
            variants={titleVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292727] tracking-tight mb-4"
          >
            Location & Contact
          </motion.h2>
          <motion.p
            variants={descVariants}
            className="text-base text-slate-600 font-normal leading-relaxed"
          >
            Conveniently situated in Shamshabad with seamless access to South
            Hyderabad, Gachibowli, Financial District, and Airport Road via
            designated transport zones.
          </motion.p>
        </motion.div>

        {/* 3-Column Balanced Grid with Cascading Stagger */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* 1. Campus Address & Contact */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5D9F] mb-4">
                <MapPin className="w-4 h-4 text-[#EF7D2D]" />
                <span>Campus Location</span>
              </div>

              <div className="text-lg font-bold text-[#292727] mb-1">
                Rockwell International School
              </div>
              <div className="text-xs text-[#2F5D9F] font-semibold mb-3">
                Shamshabad Campus · Hyderabad
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                D.No 15-14, KSR X Road, Kolan Estates, Near Milestone
                Kandakatla, Satamrai, Shamshabad, Hyderabad, Telangana - 501218
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Admissions Helpline
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+919000079992"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2F5D9F] hover:text-[#1d3d6b] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#EF7D2D]" />
                  <span>+91 9000079992</span>
                </a>
                <a
                  href="tel:+919000079993"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#2F5D9F] hover:text-[#1d3d6b] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#EF7D2D]" />
                  <span>+91 9000079993</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. Working Hours & Timings */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5D9F] mb-4">
                <Clock className="w-4 h-4 text-[#EF7D2D]" />
                <span>Working Hours</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#2F5D9F]" />
                    <span>Office & Admissions Desk</span>
                  </div>
                  <div className="space-y-1 text-xs text-slate-600 font-medium">
                    <div className="flex justify-between">
                      <span>Mon–Fri:</span>
                      <span className="font-semibold text-slate-900">
                        09:00 am – 5:00 pm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold text-slate-900">
                        09:00 am – 1:00 pm
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#292727] mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#2F5D9F]" />
                    <span>Academic School Timings</span>
                  </div>
                  <div className="space-y-1 text-xs text-slate-600 font-medium">
                    <div className="flex justify-between">
                      <span>Mon–Sat:</span>
                      <span className="font-semibold text-slate-900">
                        08:30 am – 3:30 pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Campus tours available during office hours by prior appointment.
              </span>
            </div>
          </motion.div>

          {/* 3. Transport Network & Zones */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5D9F] mb-4">
                <Bus className="w-4 h-4 text-[#EF7D2D]" />
                <span>Transport Network</span>
              </div>

              <div className="text-lg font-bold text-[#292727] mb-1">
                Direct Transport Service
              </div>
              <div className="text-xs text-emerald-700 font-semibold mb-3">
                Zones 1, 2, 3, and 4 Fully Covered
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Safe, GPS-monitored transportation network connecting key
                residential hubs across South Hyderabad and Western corridors:
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#EF7D2D] mt-0.5 shrink-0" />
                  <span>
                    <strong>Zone 1:</strong> Shamshabad, Satamrai, Airport Road,
                    Kolan Estates
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#EF7D2D] mt-0.5 shrink-0" />
                  <span>
                    <strong>Zone 2:</strong> Rajendranagar, Aramghar, Attapur,
                    PVNR Expressway
                  </span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <Navigation className="w-3.5 h-3.5 text-[#EF7D2D] mt-0.5 shrink-0" />
                  <span>
                    <strong>Zones 3 & 4:</strong> Gachibowli, Financial
                    District, Nanakramguda & South Hyderabad
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
