'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Crown } from 'lucide-react';
import { fadeUp, floatY } from '@/lib/motion';
import listings from '@/data/listings.json';

export const FeaturedBanners = () => {
  const featuredListings = listings.filter(listing => listing.isFeatured).slice(0, 3);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {featuredListings.map((listing, index) => (
        <motion.div
          key={listing.id}
          variants={fadeUp}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <motion.div 
            variants={floatY}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 group overflow-hidden"
          >
            {listing.elite && (
              <div className="absolute top-4 right-4">
                <div className="bg-amber-400 rounded-full p-2 shadow-lg">
                  <Crown size={16} className="text-amber-900" />
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <div className="w-8 h-8 bg-amber-400 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{listing.name}</h3>
                <p className="text-sm text-gray-600">{listing.tagline}</p>
              </div>
            </div>
            
            <div className="relative h-32 rounded-lg overflow-hidden mb-4">
              <Image
                src={listing.images[0]}
                alt={listing.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {listing.badges.map((badge) => (
                <span
                  key={badge}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    badge === 'Elite' 
                      ? 'bg-amber-400 text-amber-900' 
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
            
            {listing.elite && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/20 to-amber-400/20 rounded-2xl pointer-events-none" />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};