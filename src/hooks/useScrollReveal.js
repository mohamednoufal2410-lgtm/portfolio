import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
    ...options,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const animation = {
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  return { ref, isInView, animation };
}

export function staggerContainer(staggerDelay = 0.08) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
