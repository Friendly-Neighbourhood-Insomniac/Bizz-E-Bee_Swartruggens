'use client';

import { motion } from 'framer-motion';

export const BeeMascot = ({ size = 120 }) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 2, -2, 0],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="inline-block"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Body */}
        <ellipse cx="60" cy="70" rx="25" ry="35" fill="#FFC107" stroke="#FFB300" strokeWidth="2" />
        
        {/* Stripes */}
        <ellipse cx="60" cy="55" rx="20" ry="4" fill="#333" />
        <ellipse cx="60" cy="70" rx="20" ry="4" fill="#333" />
        <ellipse cx="60" cy="85" rx="20" ry="4" fill="#333" />
        
        {/* Head */}
        <circle cx="60" cy="35" r="18" fill="#FFC107" stroke="#FFB300" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="54" cy="30" r="3" fill="#333" />
        <circle cx="66" cy="30" r="3" fill="#333" />
        <circle cx="55" cy="29" r="1" fill="white" />
        <circle cx="67" cy="29" r="1" fill="white" />
        
        {/* Antennae */}
        <line x1="52" y1="20" x2="48" y2="12" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        <line x1="68" y1="20" x2="72" y2="12" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        <circle cx="48" cy="12" r="2" fill="#333" />
        <circle cx="72" cy="12" r="2" fill="#333" />
        
        {/* Wings */}
        <motion.ellipse
          cx="40"
          cy="45"
          rx="12"
          ry="20"
          fill="rgba(255, 255, 255, 0.7)"
          stroke="#E0E0E0"
          strokeWidth="1"
          animate={{
            scaleX: [1, 1.1, 1],
            scaleY: [1, 0.9, 1]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.ellipse
          cx="80"
          cy="45"
          rx="12"
          ry="20"
          fill="rgba(255, 255, 255, 0.7)"
          stroke="#E0E0E0"
          strokeWidth="1"
          animate={{
            scaleX: [1, 1.1, 1],
            scaleY: [1, 0.9, 1]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Smile */}
        <path d="M 54 40 Q 60 45 66 40" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Stinger */}
        <polygon points="60,105 58,115 62,115" fill="#333" />
      </svg>
    </motion.div>
  );
};