'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ListingCarousel } from '@/components/listing-carousel';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';
import listings from '@/data/listings.json';

export default function HomeGardenPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-b from-cream-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="Home & Garden"
              subtitle="Home improvement, gardening, and landscaping services"
              centered
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <ListingCarousel category="home-garden" />
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Top Rated Home & Garden Businesses
            </h2>
            <div className="space-y-4">
              {listings
                .filter(listing => listing.category === 'home-garden')
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 5)
                .map((business, index) => (
                  <div
                    key={business.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-amber-400 text-black font-bold rounded-full text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">{business.name}</span>
                        <p className="text-sm text-gray-600">{business.tagline}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(business.rating) ? "text-amber-400 fill-current" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">{business.rating}</span>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}