'use client';

import { motion } from 'framer-motion';
import { UserPlus, Upload, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { BeeMascot } from '@/components/bee-mascot';
import { pageTransition, fadeUp, staggerChildren } from '@/lib/motion';

const steps = [
  {
    icon: UserPlus,
    title: 'Join',
    description: 'Sign up and tell us about your business. We\'ll help you create the perfect listing.'
  },
  {
    icon: Upload,
    title: 'We Publish',
    description: 'Our team optimizes your listing and publishes it across our platform and social channels.'
  },
  {
    icon: TrendingUp,
    title: 'You Get Buzz',
    description: 'Watch your business grow with increased visibility, leads, and customer engagement.'
  }
];

export default function AboutPage() {
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
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center">
            <div className="mb-8">
              <BeeMascot size={150} />
            </div>
            <SectionHeader
              title="How Bizz-E-Bee Works"
              subtitle="Getting your business buzzing in Swartruggens is as easy as 1-2-3"
              centered
            />
          </motion.div>

          {/* 3-Step Process */}
          <motion.div variants={fadeUp}>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors">
                        <IconComponent size={32} className="text-amber-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Bizz-E-Bee?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Focus</h3>
                    <p className="text-gray-600">Built specifically for Swartruggens businesses and community.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
                    <p className="text-gray-600">Perfect experience on all devices, especially mobile.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Easy Contact</h3>
                    <p className="text-gray-600">One-click calling and WhatsApp integration.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social Integration</h3>
                    <p className="text-gray-600">Automated social media posts to boost your reach.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                    <p className="text-gray-600">Track views, calls, and engagement with detailed insights.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-amber-400 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Our local team is here to help you succeed.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}