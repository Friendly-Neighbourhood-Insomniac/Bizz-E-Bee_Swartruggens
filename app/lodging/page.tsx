'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/section-header';
import { ListingCarousel } from '@/components/listing-carousel';
import { TopRatedList } from '@/components/top-rated-list';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

export default function LodgingPage() {
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
              title="Lodging"
              subtitle="Hotels, B&Bs, and accommodation options in Swartruggens"
              centered
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <ListingCarousel category="lodging" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <TopRatedList category="lodging" title="Top Rated Lodging Businesses" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}