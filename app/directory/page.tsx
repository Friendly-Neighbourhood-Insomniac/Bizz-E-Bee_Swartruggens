'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { CategoryGrid } from '@/components/category-grid';
import { FeaturedBanners } from '@/components/featured-banners';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

export default function DirectoryPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-b from-cream-50 to-white"
    >
      {/* Honeycomb Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23FFC107' fill-opacity='0.3'%3E%3Cpolygon points='30,0 60,15 60,45 30,60 0,45 0,15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center">
            <SectionHeader
              title="Welcome to the Swartruggens Business Hive"
              subtitle="Here's what's buzzing:"
              centered
            />
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={fadeUp} className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search businesses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white shadow-sm"
              />
            </div>
          </motion.div>

          {/* Categories Grid */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
            <CategoryGrid />
          </motion.div>

          {/* Featured Listings */}
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Businesses</h2>
            <FeaturedBanners />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}