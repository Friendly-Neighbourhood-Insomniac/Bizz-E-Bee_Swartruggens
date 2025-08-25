'use client';

import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';
import { pageTransition, fadeUp } from '@/lib/motion';

export default function HivePoolServicesPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-gradient-to-b from-cream-50 to-white flex items-center justify-center"
    >
      <motion.div variants={fadeUp} className="text-center max-w-md mx-auto px-4">
        <div className="bg-amber-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <Construction size={48} className="text-amber-600" />
        </div>
        <div className="bg-amber-400 text-black px-6 py-3 rounded-full text-lg font-bold mb-4 inline-block">
          Detailed Listings Coming Soon
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Hive Pool Services</h1>
        <p className="text-gray-600 mb-6">
          We're working on creating a detailed page for this business. Check back soon for the full experience!
        </p>
        <div className="text-sm text-gray-500">
          In the meantime, you can contact them directly from the directory listings.
        </div>
      </motion.div>
    </motion.div>
  );
}