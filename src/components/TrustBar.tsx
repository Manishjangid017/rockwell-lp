import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  suffix?: string;
  trigger: boolean;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  decimals = 0,
  suffix = '',
  trigger,
  duration = 1800,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentValue = easedProgress * target;
      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [trigger, target, duration]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
};

export const TrustBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(barRef, { once: true, margin: '0px' });

  const stats = [
    {
      target: 8.5,
      decimals: 1,
      suffix: '',
      label: 'Acres Campus',
    },
    {
      target: 3,
      decimals: 0,
      suffix: '',
      label: 'Academic Blocks',
    },
    {
      target: 15,
      decimals: 0,
      suffix: '',
      label: 'Years of Academic Excellence',
    },
    {
      target: 2.6,
      decimals: 1,
      suffix: 'L',
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
                  <AnimatedCounter
                    target={stat.target}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    trigger={isInView}
                  />
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
