import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
}

export const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth editorial easeOutCubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
