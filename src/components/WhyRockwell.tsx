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
        <div className="relative space-y-12 sm:space-y-16 pb-12">
          {features.map((item, index) => {
            const topOffset = 90 + index * 24;
            const zIndex = 10 + index * 5;

            return (
              <div
                key={item.title}
                style={{
                  top: `${topOffset}px`,
                  zIndex: zIndex,
                }}
                className="sticky w-full bg-white text-[#292727] rounded-[28px] sm:rounded-[34px] p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/90 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Media artwork container */}
                  <div className="lg:col-span-5 w-full">
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 group">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Typography & Description Only */}
                  <div className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2F5D9F] tracking-tight mb-4 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
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




