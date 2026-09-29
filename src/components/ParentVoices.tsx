import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: string;
}

export const ParentVoices: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px 0px" });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Rockwell truly has stood by its word - HOLISTIC DEVELOPMENT. The development in the spheres of academics & sports which I witness in my child is truly heartening. Thank you 'Rockwell'",
      author: "S Ram Chandran",
      role: "Parent of Rockwellian",
      rating: "5.0/5",
    },
    {
      id: 2,
      quote:
        "Rockwell school has a dedicated Principal and an amazing staff, which makes it one of the rare schools that truly demonstrates its motto and philosophy ‘Nurture every child’s potential’. The school not only focuses on academics, but also on extra-curricular activities to ensure the children experience a balanced education. Rockwell is like another home where the child feels secure, enjoys learning and inculcates good values.",
      author: "Eleanor Mansukhani",
      role: "Parent of Rockwellian",
      rating: "5.0/5",
    },
    {
      id: 3,
      quote:
        "Really impressed with Rockwell on the emphasis they have on the all round development of a child. The infrastructure, teaching staff, focus on education, activities like sports and music helps build confidence, skills and all round personality of children. Happy my child is in Rockwell! All the best!",
      author: "Janardhanan",
      role: "Parent of Rockwellian",
      rating: "5.0/5",
    },
  ];

  // Desktop 3D cover-flow state
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonials.length;

  // Mobile carousel state & ref
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  // 3-second auto-rotation for desktop
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, total, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const cards = container.children;
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIdx = 0;
    let minDiff = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    setActiveMobileIdx(closestIdx);
  };

  const scrollToMobileCard = (index: number) => {
    if (!mobileScrollRef.current) return;
    const cards = mobileScrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveMobileIdx(index);
    }
  };

  const handleMobilePrev = () => {
    const nextIdx = Math.max(0, activeMobileIdx - 1);
    scrollToMobileCard(nextIdx);
  };

  const handleMobileNext = () => {
    const nextIdx = Math.min(testimonials.length - 1, activeMobileIdx + 1);
    scrollToMobileCard(nextIdx);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1] as const,
        staggerChildren: 0.1,
      },
    },
  };

  const headerTitleVariants: Variants = {
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

  const headerControlsVariants: Variants = {
    hidden: { opacity: 0, x: 45 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const stageVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.15,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const mobileCarouselVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.15,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="parent-voices"
      className="py-16 sm:py-20 lg:py-24 bg-[#edf2fc] border-t border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main White Card Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-3xl p-4 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80 overflow-hidden"
        >
          {/* 1. MOBILE VIEW (sm:hidden): Clean, touch-friendly swipeable testimonials */}
          <div className="sm:hidden">
            {/* Mobile Header Row */}
            <motion.div
              variants={headerTitleVariants}
              className="flex items-center justify-between mb-4 px-1"
            >
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#EF7D2D] mb-0.5">
                  Parent Feedback
                </div>
                <h2 className="text-lg font-extrabold text-[#292727] tracking-tight">
                  Voices of Proud Parents
                </h2>
              </div>

              {/* Mobile Nav Arrows */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleMobilePrev}
                  disabled={activeMobileIdx === 0}
                  aria-label="Previous testimonial"
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    activeMobileIdx === 0
                      ? "bg-slate-50 border-slate-200 text-slate-300 opacity-40 cursor-not-allowed"
                      : "bg-white border-slate-200 text-[#162740] shadow-xs active:scale-95"
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleMobileNext}
                  disabled={activeMobileIdx === testimonials.length - 1}
                  aria-label="Next testimonial"
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    activeMobileIdx === testimonials.length - 1
                      ? "bg-slate-50 border-slate-200 text-slate-300 opacity-40 cursor-not-allowed"
                      : "bg-white border-slate-200 text-[#162740] shadow-xs active:scale-95"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Swipeable Carousel */}
            <motion.div
              variants={mobileCarouselVariants}
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 -mx-1 px-1 scrollbar-none touch-pan-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="w-[84vw] max-w-[325px] shrink-0 snap-center rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Rating & Quote Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#EF7D2D] text-[#EF7D2D]"
                          />
                        ))}
                        <span className="ml-1 text-xs font-bold text-slate-800">
                          {item.rating}
                        </span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-50 text-[#2F5D9F] flex items-center justify-center">
                        <Quote className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs text-slate-700 leading-relaxed font-normal mb-4">
                      "{item.quote.replace(/^["']|["']$/g, "")}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-xs font-bold text-[#292727] tracking-tight">
                      {item.author}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {item.role}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Mobile Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToMobileCard(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeMobileIdx === idx
                      ? "w-6 bg-[#2F5D9F]"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 2. DESKTOP VIEW (hidden sm:block): 3D Cover-Flow Stage */}
          <div className="hidden sm:block">
            {/* Top Header Row with Title and Navigation Controls */}
            <div className="flex flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
              <motion.div variants={headerTitleVariants}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292727] tracking-tight">
                  Voices of Proud Parents
                </h2>
              </motion.div>

              {/* Circular Navigation Buttons */}
              <motion.div
                variants={headerControlsVariants}
                className="flex items-center gap-3 shrink-0"
              >
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181b] hover:bg-[#2F5D9F] text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
                  aria-label="Previous testimonial"
                  title="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181b] hover:bg-[#2F5D9F] text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
                  aria-label="Next testimonial"
                  title="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </motion.div>
            </div>

            {/* 3-Card Stage: 1 Front Center Card & 2 Side Flanking Cards */}
            <motion.div
              variants={stageVariants}
              className="relative min-h-[380px] sm:min-h-[340px] md:min-h-[310px] flex items-center justify-center py-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Left Quick Navigation Overlay Button */}
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:left-4 z-30 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-[#2F5D9F] shadow-md border border-slate-200 transition-all cursor-pointer hover:scale-105 active:scale-95 hidden sm:flex items-center justify-center"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Quick Navigation Overlay Button */}
              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-4 z-30 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-[#2F5D9F] shadow-md border border-slate-200 transition-all cursor-pointer hover:scale-105 active:scale-95 hidden sm:flex items-center justify-center"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Render all 3 cards with 3D/Cover-Flow Positioning */}
              {testimonials.map((item, idx) => {
                const offset = (idx - activeIndex + total) % total;

                let xPos = "0%";
                let scale = 1;
                let opacity = 1;
                let zIndex = 20;
                let isCenter = false;

                if (offset === 0) {
                  xPos = "0%";
                  scale = 1;
                  opacity = 1;
                  zIndex = 20;
                  isCenter = true;
                } else if (offset === 1) {
                  xPos = "52%";
                  scale = 0.88;
                  opacity = 0.55;
                  zIndex = 10;
                } else if (offset === 2) {
                  xPos = "-52%";
                  scale = 0.88;
                  opacity = 0.55;
                  zIndex = 10;
                }

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveIndex(idx);
                      }
                    }}
                    animate={{
                      x: xPos,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 0.1, 0.25, 1] as const,
                    }}
                    className={`absolute w-[94%] sm:w-[82%] md:w-[68%] lg:w-[62%] max-w-[660px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white border transition-shadow duration-300 ${
                      isCenter
                        ? "border-[#2F5D9F]/40 shadow-xl cursor-default"
                        : "border-slate-200/90 shadow-sm hover:opacity-80 cursor-pointer"
                    }`}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Top Row: Star Ratings & Decorative Quote Mark */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#EF7D2D] text-[#EF7D2D]"
                              />
                            ))}
                            <span className="ml-2 text-xs sm:text-sm font-bold text-slate-800">
                              {item.rating}
                            </span>
                          </div>

                          <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2F5D9F] flex items-center justify-center">
                            <Quote className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                          "{item.quote.replace(/^["']|["']$/g, "")}"
                        </p>
                      </div>

                      {/* Bottom Row: Parent Details */}
                      <div className="pt-4 border-t border-slate-100">
                        <div className="text-sm sm:text-base font-bold text-[#292727] tracking-tight">
                          {item.author}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Dots Indicator & Auto-Play Progress */}
            <div className="flex items-center justify-center gap-2.5 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-8 bg-[#2F5D9F]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
