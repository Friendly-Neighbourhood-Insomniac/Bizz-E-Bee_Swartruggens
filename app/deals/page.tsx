'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/section-header';
import { PricingCards } from '@/components/pricing-cards';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

export default function DealsPage() {
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
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <SectionHeader
              title="Pick your growth plan"
              subtitle="Choose the perfect package to showcase your business and connect with the Swartruggens community"
              centered
            />
          </motion.div>

          {/* Pricing Cards */}
          <motion.div variants={fadeUp}>
            <PricingCards />
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={fadeUp} className="text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              All plans include 24/7 support, mobile-optimized listings, and analytics dashboard. 
              Upgrade or downgrade anytime. No setup fees.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}