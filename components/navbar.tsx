'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BeeIcon } from '@/lib/icons';
import { useModal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

export const NavBar = () => {
  const { openModal } = useModal();

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ duration: 0.2 }}
            >
              <BeeIcon size={28} className="text-amber-600" />
            </motion.div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
              Bizz-E-Bee
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/deals" 
              className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
            >
              Deals
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={openModal}
              className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-2 rounded-full transition-all hover:shadow-lg"
            >
              List my business
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};