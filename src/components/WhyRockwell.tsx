import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import whyRockwell1 from '../assets/images/why_rockwell_1.jpg';
import whyRockwell2 from '../assets/images/why_rockwell_2.jpg';
import whyRockwell3 from '../assets/images/why_rockwell_3.jpg';
import whyRockwell4 from '../assets/images/why_rockwell_4.jpg';

export const WhyRockwell: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px 0px' });

  const features = [
    {
      title: 'Student Growth',
      description:
        'At RIS, we focus on overall student growth, which goes much beyond the textbooks. We encourage our kids to learn from the environment, to think, and to explore creativity within themselves.',
      image: whyRockwell1,
      alt: 'Rockwell International School Student Growth and Collaborative Learning',
    },
    {
      title: 'Focus on Targets',
      description:
        'Learning is never confined to the classrooms. Children learn from each other and from various different activities. Our campus encourages learning from sports, activities, and performing arts, ensuring that kids develop holistically.',
      image: whyRockwell2,
      alt: 'Rockwell Students Sports and Performing Arts Training',
    },
    {
      title: 'Best Learning Practices',
      description:
        'We have created a learning environment that fosters various learning methodologies. From projects to experiments to field visits, we work on bringing lessons to life so that kids learn from experience.',
      image: whyRockwell3,
      alt: 'Hands-on Experiments and Experiential Science Practices',
    },
    {
      title: 'Interdisciplinary Model',
      description:
        'We combine various fields of study and lessons in order to fortify creativity, analytical thinking, expression, and inquisitiveness. This model nurtures children to grow up to be thinkers, dreamers, and doers',
      image: whyRockwell4,
      alt: 'Interdisciplinary Creative and Analytical Learning Model',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-rockwell"
      className="py-20 lg:py-28 bg-[#fafafc] text-[#292727] relative border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2F5D9F] mb-3">
            <span className="w-6 h-px bg-[#EF7D2D]" />
            <span>Why Rockwell Is Different</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#292727] tracking-tight mb-2">
            What sets us apart
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A peek into the highlights of Rockwell International School
          </p>
        </motion.div>

        {/* Scroll-Driven Sticky Stacking Cards */}
        <div className="relative space-y-6 sm:space-y-8 pb-12">
          {features.map((item, index) => {
            const zIndex = 10 + index * 10;

            return (
              <div
                key={item.title}
                style={{
                  top: '96px',
                  zIndex: zIndex,
                }}
                className="sticky w-full bg-[#2F5D9F] text-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-[0_-12px_36px_rgba(0,0,0,0.28)] shadow-2xl border border-[#254b82] transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Media artwork container */}
                  <div className="lg:col-span-5 w-full">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/20 bg-slate-900 group">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Typography & Description Only */}
                  <div className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold tracking-widest uppercase text-orange-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                        0{index + 1} / 0{features.length}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
