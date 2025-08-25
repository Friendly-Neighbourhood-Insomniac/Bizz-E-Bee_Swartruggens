'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ListingCarousel } from '@/components/listing-carousel';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';
import categories from '@/data/categories.json';
import listings from '@/data/listings.json';

const filterOptions = [
  { label: 'Open Now', active: false },
  { label: 'Top Rated', active: true },
  { label: 'Pro', active: false },
];

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  // Get top 5 businesses for this category, sorted by rating
  const categoryListings = listings
    .filter(listing => listing.category === params.slug)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={14} className="text-amber-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={14} className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={14} className="text-amber-400 fill-current" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={14} className="text-gray-300" />
      );
    }

    return stars;
  };

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
          {/* Header */}
          <motion.div variants={fadeUp}>
            <SectionHeader
              title={category.label}
              subtitle={`Discover the best ${category.label.toLowerCase()} businesses in Swartruggens`}
              centered
            />
          </motion.div>

          {/* Filter Pills */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="flex space-x-2 bg-white rounded-full p-2 shadow-sm border border-gray-200">
              {filterOptions.map((filter) => (
                <button
                  key={filter.label}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter.active
                      ? 'bg-amber-400 text-black shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Business Carousel */}
          <motion.div variants={fadeUp}>
            <ListingCarousel category={category.slug} />
          </motion.div>

          {/* Top Rated Businesses List */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Top Rated {category.label} Businesses
            </h2>
            <div className="space-y-4">
              {categoryListings.map((business, index) => (
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
                      {renderStars(business.rating)}
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