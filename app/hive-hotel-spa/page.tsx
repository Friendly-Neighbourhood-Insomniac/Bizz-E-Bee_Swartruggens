'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, Star, Building, Clock, Shield, Award, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

export default function HiveHotelSpaPage() {
  const business = {
    name: "Hive Hotel & Spa",
    tagline: "Luxury accommodation, world-class service.",
    rating: 4.9,
    phone: "+27999888777",
    whatsapp: "https://wa.me/27999888777",
    elite: true,
    images: [
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    services: [
      "5-Star Hotel Suites",
      "Full-Service Spa & Wellness",
      "Fine Dining Restaurant",
      "Conference & Event Facilities",
      "Concierge & Valet Services"
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
        
        {/* Elite Badge */}
        {business.elite && (
          <div className="absolute top-6 right-6">
            <div className="bg-amber-400 rounded-full p-3 shadow-lg">
              <Crown size={24} className="text-amber-900" />
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{business.name}</h1>
            <p className="text-xl mb-4">{business.tagline}</p>
            {business.elite && (
              <div className="mb-2">
                <span className="bg-amber-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Elite Business
                </span>
              </div>
            )}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Hive Hotel & Spa</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hive Hotel & Spa represents the pinnacle of luxury hospitality in Swartruggens. 
              Our 5-star establishment has been setting the standard for excellence for over 12 years, 
              offering world-class accommodations, exceptional dining, and a full-service spa. 
              Every detail is crafted to provide an unforgettable experience for discerning travelers.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Building className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">5-Star Luxury</p>
                  <p className="text-sm text-gray-600">Premium suites</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">World-Class Spa</p>
                  <p className="text-sm text-gray-600">Wellness center</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">Fine Dining</p>
                  <p className="text-sm text-gray-600">Gourmet restaurant</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-amber-600" size={24} />
                <div>
                  <p className="font-semibold">24/7 Concierge</p>
                  <p className="text-sm text-gray-600">Personal service</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Hotel</h3>
              <div className="grid grid-cols-2 gap-4">
                {business.images.map((image, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${business.name} hotel ${index + 1}`}
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
        <motion.div variants={fadeUp} className="mt-12 bg-amber-50 rounded-2xl p-8 text-center border-2 border-amber-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for 5-Star Luxury?</h2>
          <p className="text-gray-600 mb-6">
            Experience world-class hospitality at Hive Hotel & Spa. Reserve your luxury suite today!
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