'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}: SectionHeaderProps) => {
  return (
    <motion.div 
      variants={fadeUp}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};