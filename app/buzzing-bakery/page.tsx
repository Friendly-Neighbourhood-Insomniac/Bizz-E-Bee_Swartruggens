'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, Star, Cookie, Clock, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

export default function BuzzingBakeryPage() {
  const business = {
    name: "Buzzing Bakery",
    tagline: "Fresh bread daily, sweet treats always.",
    rating: 4.6,
    phone: "+27777666555",
    whatsapp: "https://wa.me/27777666555",
    elite: false,
    images: [
      "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1070855/pexels-photo-1070855.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    services: [
      "Fresh Artisan Breads Daily",
      "Custom Birthday & Wedding Cakes",
      "Pastries & Sweet Treats",
      "Corporate Catering Orders",
      "Gluten-Free & Vegan Options"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Buzzing Bakery</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Buzzing Bakery has been delighting Swartruggens with fresh-baked goods for over 9 years. 
              Every morning, our skilled bakers arrive early to prepare artisan breads, flaky pastries, 
              and decadent cakes using traditional techniques and the finest ingredients. We're passionate 
              about creating sweet moments for our community, one delicious bite at a time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Cookie className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Fresh Daily</p>
                  <p className="text-sm text-gray-600">Baked every morning</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Quality Ingredients</p>
                  <p className="text-sm text-gray-600">Premium sourced</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Custom Orders</p>
                  <p className="text-sm text-gray-600">Special occasions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Open Daily</p>
                  <p className="text-sm text-gray-600">6AM - 5PM</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Baked Goods</h3>
              <div className="grid grid-cols-2 gap-4">
                {business.images.map((image, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${business.name} baked goods ${index + 1}`}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Fresh Baked Goodness?</h2>
          <p className="text-gray-600 mb-6">
            Visit Buzzing Bakery for the freshest breads and sweetest treats in Swartruggens. Order your custom cake today!
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