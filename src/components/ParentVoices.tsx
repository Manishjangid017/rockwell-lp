import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import parentOneImg from '../assets/images/parent_avatar_one_1790331074090.jpg';
import parentTwoImg from '../assets/images/parent_avatar_two_1790331087628.jpg';
import parentThreeImg from '../assets/images/parent_avatar_three_1790331100539.jpg';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: string;
  avatar: string;
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
      avatar: parentOneImg,
    },
    {
      id: 2,
      quote:
        "Rockwell school has a dedicated Principal and an amazing staff, which makes it one of the rare schools that truly demonstrates its motto and philosophy ‘Nurture every child’s potential’. The school not only focuses on academics, but also on extra-curricular activities to ensure the children experience a balanced education. Rockwell is like another home where the child feels secure, enjoys learning and inculcates good values.",
      author: 'Eleanor Mansukhani',
      role: 'Parent of Rockwellian',
      rating: '5.0/5',
      avatar: parentTwoImg,
    },
    {
      id: 3,
      quote:
        'Really impressed with Rockwell on the emphasis they have on the all round development of a child. The infrastructure, teaching staff, focus on education, activities like sports and music helps build confidence, skills and all round personality of children. Happy my child is in Rockwell! All the best!',
      author: 'Janardhanan',
      role: 'Parent of Rockwellian',
      rating: '5.0/5',
      avatar: parentThreeImg,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const total = testimonials.length;

  const handlePrev = () => {
    setSlideDirection('left');
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setSlideDirection('right');
    setStartIndex((prev) => (prev + 1) % total);
  };

  // Get current 3 items for display
  const visibleItems = [
    testimonials[startIndex % total],
    testimonials[(startIndex + 1) % total],
    testimonials[(startIndex + 2) % total],
  ];

  return (
    <section
      ref={sectionRef}
      id="parent-voices"
      className="py-16 sm:py-20 lg:py-24 bg-[#edf2fc] border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Clean White Card Container matching reference image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200/80"
        >
          {/* Top Header Row with Title and Circular Arrow Navigation Buttons */}
          <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#EF7D2D] mb-1">
                Community Trust
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292727] tracking-tight">
                Voices of Proud Parents
              </h2>
            </div>

            {/* Circular Navigation Buttons matching reference image */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181b] hover:bg-[#2F5D9F] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181b] hover:bg-[#2F5D9F] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 3 Testimonial Cards Side-by-Side matching reference image */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={startIndex}
                initial={{
                  opacity: 0,
                  x: slideDirection === 'right' ? 24 : -24,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: slideDirection === 'right' ? -24 : 24,
                }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
              >
                {visibleItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-[#2F5D9F]/40 hover:shadow-md transition-all duration-200 h-full"
                  >
                    <div className="flex-1 flex flex-col">
                      {/* Top Row: Stars on left, Rating score on right */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#EF7D2D] text-[#EF7D2D]"
                            />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-slate-800 tracking-tight">
                          {item.rating}
                        </span>
                      </div>

                      {/* Middle: Testimonial Quote */}
                      <p className="text-sm sm:text-[14px] text-slate-600 leading-relaxed font-normal mb-6 flex-1">
                        "{item.quote.replace(/^["']|["']$/g, '')}"
                      </p>
                    </div>

                    {/* Bottom Row: Avatar on left, Author Name and Role beside */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-11 h-11 rounded-full object-cover shrink-0 border border-slate-100 shadow-2xs"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[#292727] truncate">
                          {item.author}
                        </div>
                        <div className="text-xs text-slate-500 font-normal truncate mt-0.5">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator for Active Index */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSlideDirection(idx > startIndex ? 'right' : 'left');
                  setStartIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  startIndex === idx
                    ? 'w-6 bg-[#2F5D9F]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
