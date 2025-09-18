'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeader } from '@/components/section-header';
import { ListingCarousel } from '@/components/listing-carousel';
import { TopRatedList } from '@/components/top-rated-list';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

export default function ServicesPage() {
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
              title="Services"
              subtitle="Professional services to help your business and personal needs in Swartruggens"
              centered
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <ListingCarousel category="services" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <TopRatedList
              category="services"
              title="Top Rated Services Businesses"
              renderAction={(business) => (
                <Link
                  href={`/${business.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                  className="font-semibold text-gray-900 hover:text-amber-600 transition-colors"
                >
                  {business.name}
                </Link>
              )}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}