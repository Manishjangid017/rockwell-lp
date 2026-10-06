import React, { useState, useRef } from "react";
import {
  FlaskConical,
  BookOpen,
  Monitor,
  UtensilsCrossed,
  Users2,
  Trophy,
  Palette,
  Bus,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface CampusFacilitiesProps {
  onOpenVirtualTour?: () => void;
}
const facilitiesData = [
  {
    id: "science-labs",
    name: "Science Labs",
    icon: FlaskConical,
    tag: "Experiential STEM",
    description:
      "Hands-on science learning with modern equipment that inspires curiosity, experimentation, and innovation.",
    image:
      "https://mauliarts.in/assets/images/integrated-science-lab-in-india.jpg",
    alt: "cbse schools in near me",
  },
  {
    id: "library",
    name: "Library",
    icon: BookOpen,
    tag: "Knowledge Hub",
    description:
      "A well-stocked learning space that nurtures reading, research, curiosity, and independent learning.",
    image:
      "https://img.magnific.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "best schools near me cbse",
  },
  {
    id: "computer-lab",
    name: "Computer Lab",
    icon: Monitor,
    tag: "Digital Literacy",
    description:
      "A technology-enabled space where students develop digital literacy, coding, research, and computational skills.",
    image:
      "https://stxaviersdhenkanal.org/wp-content/uploads/2024/07/360_F_220240507_Z8WDjgJliVAL5i41G2WjQtAVkSC066lV.jpg",
    alt: "top cbse schools",
  },
  {
    id: "kitchen-dining",
    name: "Kitchen & Dining Hall",
    icon: UtensilsCrossed,
    tag: "Nutrition & Wellness",
    description:
      "A hygienic and comfortable dining space serving nutritious, balanced vegetarian meals for students.",
    image:
      "https://i.shgcdn.com/573981e9-e1c8-4238-8256-c632ee25203b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    alt: "cbse schools near me",
  },
  {
    id: "staff-room",
    name: "Staff Room",
    icon: Users2,
    tag: "Faculty Community",
    description:
      "A collaborative space that supports teacher planning, professional development, and meaningful collaboration.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtvuJYZCu7HYiHqXoG4r4O9FVTiwj8GLwpDRB38Cv_w&s=10",
    alt: "best private schools in shamshabad",
  },
  {
    id: "outdoor-infrastructure",
    name: "Outdoor Infrastructure",
    icon: Trophy,
    tag: "2.6L Sq.ft Sports Complex",
    description:
      "World-class sports facilities and play areas that promote fitness, teamwork, coordination, and sportsmanship.",
    image:
      "https://rockwellshamshabad.com/wp-content/uploads/2025/03/ROCKWELL-SCHOOL-IMAGE-.jpg",
    alt: "primary schools around me",
  },
  {
    id: "indoor-infrastructure",
    name: "Indoor Infrastructure",
    icon: Palette,
    tag: "Creative & Performing Arts",
    description:
      "Dedicated spaces for music, dance, arts, crafts, indoor sports, and activities that encourage creativity and self-expression.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJy-6GhBdGtImealvdOeYCy_QV_73hmJjIrdDjHGZLag&s=10",
    alt: "best schools near me",
  },
  {
    id: "transport",
    name: "Transport",
    icon: Bus,
    tag: "GPS & Real-time Tracking",
    description:
      "GPS-enabled buses with trained staff, CCTV, first-aid, and real-time tracking for safe and reliable student transportation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA82YIz2OHgDTOCDoCs5gqSjCvwW6jGGmJR2bMIkUxRQ&s=10",
    alt: "schools nearby",
  },
];

export const CampusFacilities: React.FC<CampusFacilitiesProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px 0px" });

  const [activeTab, setActiveTab] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const selectedFacility = facilitiesData[activeTab];

  const handleMobileScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.8));
      if (index >= 0 && index < facilitiesData.length) {
        setActiveTab(index);
      }
    }
  };

  const scrollToFacility = (index: number) => {
    setActiveTab(index);
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.clientWidth || 320;
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + 14),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="campus-facilities"
      className="py-20 lg:py-28 bg-[#fafafc]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F5D9F] mb-3">
              <span className="w-6 h-px bg-[#EF7D2D]" />
              <span>Campus & Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292727] tracking-tight mb-4">
              Life at Rockwell
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mt-2 font-normal">
              A thoughtfully designed campus that makes learning engaging and
              meaningful. Modern facilities support curiosity, creativity, and
              hands-on learning. Every space is designed to help students learn,
              grow, and thrive.
            </p>
          </div>
        </motion.div>

        {/* Interactive Facilities Presentation */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 -mx-4 px-4 scrollbar-none touch-pan-x"
            style={{ scrollbarWidth: "none" }}
          >
            {facilitiesData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="w-[84vw] max-w-[320px] shrink-0 snap-center bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#2F5D9F] px-2.5 py-1 rounded-lg text-xs font-bold shadow-xs flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#EF7D2D]" />
                      <span>{item.name}</span>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                      {index + 1} / {facilitiesData.length}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#EF7D2D] mb-1">
                        {item.tag}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#292727] mb-1.5">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              type="button"
              aria-label="Previous facility"
              disabled={activeTab === 0}
              onClick={() => scrollToFacility(activeTab - 1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                activeTab === 0
                  ? "bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed opacity-40"
                  : "bg-white border-slate-200 text-[#162740] shadow-xs hover:border-[#2F5D9F] hover:text-[#2F5D9F] active:scale-95"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-1">
              {facilitiesData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to facility ${idx + 1}`}
                  onClick={() => scrollToFacility(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? "w-6 bg-[#2F5D9F]"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next facility"
              disabled={activeTab === facilitiesData.length - 1}
              onClick={() => scrollToFacility(activeTab + 1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                activeTab === facilitiesData.length - 1
                  ? "bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed opacity-40"
                  : "bg-white border-slate-200 text-[#162740] shadow-xs hover:border-[#2F5D9F] hover:text-[#2F5D9F] active:scale-95"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP VIEW (Sidebar Tabs + Spotlight Display) ================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Interactive List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
              Select a facility to view
            </div>

            {facilitiesData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-white border-[#2F5D9F]/40 shadow-sm text-[#292727]"
                      : "bg-transparent border-transparent hover:bg-white/80 hover:border-slate-200 text-slate-600"
                  }`}
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#2F5D9F] text-white"
                          : "bg-slate-100 group-hover:bg-slate-200 text-slate-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#292727] tracking-tight">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        {item.tag}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? "text-[#2F5D9F] translate-x-1"
                        : "text-slate-300 group-hover:text-slate-500"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Preview Card (With Framer Motion Animations) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFacility.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={selectedFacility.image}
                      alt={selectedFacility.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#2F5D9F] px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-xs">
                      {selectedFacility.name}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF7D2D] mb-2">
                      <span>Facility Spotlight</span>
                      <span>·</span>
                      <span>Shamshabad Campus</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#292727] mb-3">
                      {selectedFacility.name}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      {selectedFacility.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
