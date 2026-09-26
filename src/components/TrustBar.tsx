import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TrustBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, margin: '-40px 0px' });

  const stats = [
    {
      value: '8.5',
      unit: '',
      label: 'Acres Campus',
    },
    {
      value: '3',
      unit: '',
      label: 'Academic Blocks',
    },
    {
      value: '15',
      unit: '',
      label: 'Years of Academic Excellence',
    },
    {
      value: '2.6L',
      unit: '',
      label: 'Sq.ft of Sports Facilities',
    },
  ];

  return (
    <section ref={barRef} className="relative z-20 bg-white border-b border-slate-100 py-10 lg:py-14 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 lg:pt-0' : idx % 2 !== 0 ? 'pt-0' : ''
              }`}
            >
              <div className="flex items-baseline justify-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2F5D9F] tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#EF7D2D] ml-1.5 mb-2 shrink-0" />
              </div>
              <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-[#292727] tracking-tight uppercase max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

