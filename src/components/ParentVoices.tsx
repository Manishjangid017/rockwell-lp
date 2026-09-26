import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: string;
}

export const ParentVoices: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px 0px' });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Rockwell truly has stood by its word - HOLISTIC DEVELOPMENT. The development in the spheres of academics & sports which I witness in my child is truly heartening. Thank you 'Rockwell'",
      author: 'S Ram Chandran',
      role: 'Parent of Rockwellian',
      rating: '5.0/5',
    },
    {
      id: 2,
      quote:
        'Rockwell school has a dedicated Principal and an amazing staff, which makes it one of the rare schools that truly demonstrates its motto and philosophy ‘Nurture every child’s potential’. The school not only focuses on academics, but also on extra-curricular activities to ensure the children experience a balanced education. Rockwell is like another home where the child feels secure, enjoys learning and inculcates good values.',
      author: 'Eleanor Mansukhani',
      role: 'Parent of Rockwellian',
      rating: '5.0/5',
    },
    {
      id: 3,
      quote:
        'Really impressed with Rockwell on the emphasis they have on the all round development of a child. The infrastructure, teaching staff, focus on education, activities like sports and music helps build confidence, skills and all round personality of children. Happy my child is in Rockwell! All the best!',
      author: 'Janardhanan',
      role: 'Parent of Rockwellian',
      rating: '5.0/5',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = testimonials.length;

  // 3-second auto-rotation to cycle 1st -> 2nd -> 3rd -> 1st
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, total, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
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
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80 overflow-hidden"
        >
          {/* Top Header Row with Title and Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292727] tracking-tight">
                Voices of Proud Parents
              </h2>
            </div>

            {/* Circular Navigation Buttons */}
            <div className="flex items-center gap-3 shrink-0">
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
            </div>
          </div>

          {/* 3-Card Stage: 1 Front Center Card & 2 Side Flanking Cards with Left/Right Buttons */}
          <div
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
              // Calculate relative position based on activeIndex
              // 0: Center (front), 1: Right, 2: Left (for 3 items)
              const offset = (idx - activeIndex + total) % total;

              let xPos = '0%';
              let scale = 1;
              let opacity = 1;
              let zIndex = 20;
              let isCenter = false;

              if (offset === 0) {
                // Front and center
                xPos = '0%';
                scale = 1;
                opacity = 1;
                zIndex = 20;
                isCenter = true;
              } else if (offset === 1) {
                // Right card
                xPos = '52%';
                scale = 0.88;
                opacity = 0.55;
                zIndex = 10;
              } else if (offset === 2) {
                // Left card
                xPos = '-52%';
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
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`absolute w-[94%] sm:w-[82%] md:w-[68%] lg:w-[62%] max-w-[660px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white border transition-shadow duration-300 ${
                    isCenter
                      ? 'border-[#2F5D9F]/40 shadow-xl cursor-default'
                      : 'border-slate-200/90 shadow-sm hover:opacity-80 cursor-pointer'
                  }`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Top Row: Star Ratings & Decorative Quote Mark */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#EF7D2D] text-[#EF7D2D]" />
                          ))}
                          <span className="ml-2 text-xs sm:text-sm font-bold text-slate-800">{item.rating}</span>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2F5D9F] flex items-center justify-center">
                          <Quote className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-6">
                        "{item.quote.replace(/^["']|["']$/g, '')}"
                      </p>
                    </div>

                    {/* Bottom Row: Parent Details */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-sm sm:text-base font-bold text-[#292727] tracking-tight">{item.author}</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">{item.role}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Dots Indicator & Auto-Play Progress */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-[#2F5D9F]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
