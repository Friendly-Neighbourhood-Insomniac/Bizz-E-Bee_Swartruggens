import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 }
};

export const floatY: Variants = {
  animate: {
    y: [-4, 4],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

export const scaleHover: Variants = {
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

export const slideUpHover: Variants = {
  whileHover: {
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

export const sparkleHover: Variants = {
  whileHover: {
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      repeat: 2,
      ease: "easeInOut"
    }
  }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: 8,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};