'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Crown, Phone, MessageCircle, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { scaleHover } from '@/lib/motion';

interface Listing {
  id: string;
  name: string;
  tagline: string;
  category: string;
  rating: number;
  logo: string;
  images: string[];
  badges: string[];
  elite: boolean;
  ctas: {
    call: string;
    wa: string;
  };
  isFeatured: boolean;
}

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard = ({ listing }: ListingCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <motion.div
      variants={scaleHover}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
        listing.elite ? 'border-amber-300 ring-2 ring-amber-100' : 'border-gray-200'
      }`}
    >
      {/* Image Carousel */}
      <div className="relative h-48 overflow-hidden group">
        <Image
          src={listing.images[currentImageIndex]}
          alt={`${listing.name} image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {listing.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {listing.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Elite Badge */}
        {listing.elite && (
          <div className="absolute top-3 right-3">
            <div className="bg-amber-400 rounded-full p-2 shadow-lg">
              <Crown size={16} className="text-amber-900" />
            </div>
          </div>
        )}

        {/* Other Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {listing.badges.filter(badge => badge !== 'Elite').map((badge) => (
            <span
              key={badge}
              className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-amber-400 rounded-full"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{listing.name}</h3>
            <p className="text-sm text-gray-600">{listing.tagline}</p>
          </div>
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 20, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.2 }}
          className="flex space-x-2 mt-4"
        >
          <a
            href={listing.ctas.call}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
            aria-label={`Call ${listing.name}`}
          >
            <Phone size={14} />
            <span>Call</span>
          </a>
          <a
            href={listing.ctas.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
            aria-label={`WhatsApp ${listing.name}`}
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </a>
          <Link
            href={`/${listing.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
            className="flex-1 bg-amber-400 hover:bg-amber-500 text-black px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
          >
            <Eye size={14} />
            <span>Visit</span>
          </Link>
        </motion.div>
      </div>

      {/* Elite Glow Effect */}
      {listing.elite && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300/10 to-amber-400/10 pointer-events-none" />
      )}
    </motion.div>
  );
};