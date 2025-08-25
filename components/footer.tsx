'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BeeIcon } from '@/lib/icons';

export const Footer = () => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BeeIcon size={24} className="text-amber-400" />
              <span className="text-xl font-bold">Bizz-E-Bee</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting local businesses with the Swartruggens community.
            </p>
            <p className="text-sm text-gray-400">
              Made with 💛 in Swartruggens
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Home
              </Link>
              <Link href="/directory" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Directory
              </Link>
              <Link href="/deals" className="block text-gray-300 hover:text-amber-400 transition-colors">
                Deals
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-amber-400 transition-colors">
                About
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Accessibility</h3>
            <button
              onClick={() => setAnimationsEnabled(!animationsEnabled)}
              className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
            >
              {animationsEnabled ? 'Pause animations' : 'Enable animations'}
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2024 Bizz-E-Bee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};