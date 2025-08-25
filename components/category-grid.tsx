'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Wrench, 
  Hammer, 
  Utensils, 
  Store, 
  Sparkles, 
  Hotel, 
  Heart, 
  Car, 
  Home, 
  Calendar 
} from 'lucide-react';
import { fadeUp, staggerChildren, scaleHover } from '@/lib/motion';
import categories from '@/data/categories.json';

const iconMap = {
  Wrench,
  Hammer,
  Utensils,
  Store,
  Sparkles,
  Hotel,
  Heart,
  Car,
  Home,
  Calendar
};

export const CategoryGrid = () => {
  return (
    <motion.div 
      variants={staggerChildren}
      initial="initial"
      animate="animate"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
    >
      {categories.map((category) => {
        const IconComponent = iconMap[category.icon as keyof typeof iconMap];
        
        return (
          <motion.div key={category.slug} variants={fadeUp}>
            <Link href={`/${category.slug}`}>
              <motion.div
                variants={scaleHover}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                    <IconComponent size={24} className="text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                    {category.label}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};