'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, Star, BookOpen, Clock, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

export default function BeeBooksMorePage() {
  const business = {
    name: "Bee Books & More",
    tagline: "Stories that inspire, knowledge that grows.",
    rating: 4.4,
    phone: "+27888555222",
    whatsapp: "https://wa.me/27888555222",
    elite: false,
    images: [
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    services: [
      "Wide Selection of Books",
      "Educational Materials & Textbooks",
      "Stationery & Office Supplies",
      "Gift Items & Souvenirs",
      "Special Orders & Book Clubs"
    ]
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={20} className="text-amber-400 fill-current" />);
    }
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={20} className="text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={20} className="text-amber-400 fill-current" />
          </div>
        </div>
      );
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={20} className="text-gray-300" />);
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
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={business.images[0]}
          alt={business.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{business.name}</h1>
            <p className="text-xl mb-4">{business.tagline}</p>
            <div className="flex items-center justify-center space-x-2 mb-6">
              {renderStars(business.rating)}
              <span className="text-white font-semibold ml-2">{business.rating}</span>
            </div>
            <div className="flex space-x-4 justify-center">
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a href={`tel:${business.phone}`}>
                  <Phone size={16} className="mr-2" />
                  Call Now
                </a>
              </Button>
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-12"
        >
          {/* About Section */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Bee Books & More</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bee Books & More has been nurturing the love of reading in Swartruggens for over 8 years. 
              We believe that books have the power to inspire, educate, and transform lives. Our carefully 
              curated selection includes everything from bestselling novels to educational materials, 
              ensuring there's something for every reader and learner.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Wide Selection</p>
                  <p className="text-sm text-gray-600">All genres covered</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Quality Materials</p>
                  <p className="text-sm text-gray-600">Educational focus</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Special Orders</p>
                  <p className="text-sm text-gray-600">Find any book</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Open Daily</p>
                  <p className="text-sm text-gray-600">9AM - 6PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="space-y-4">
              {business.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-amber-100">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="font-medium text-gray-900">{service}</span>
                </div>
              ))}
            </div>
            
            {/* Image Gallery */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Bookstore</h3>
              <div className="grid grid-cols-2 gap-4">
                {business.images.map((image, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${business.name} store ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div variants={fadeUp} className="mt-12 bg-amber-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Discover Your Next Great Read?</h2>
          <p className="text-gray-600 mb-6">
            Visit Bee Books & More for an inspiring selection of books and educational materials. Let us help you find the perfect read!
          </p>
          <div className="flex space-x-4 justify-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <a href={`tel:${business.phone}`}>
                <Phone size={20} className="mr-2" />
                {business.phone}
              </a>
            </Button>
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}