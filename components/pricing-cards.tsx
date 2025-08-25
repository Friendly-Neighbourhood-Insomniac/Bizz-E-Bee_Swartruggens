'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/components/ui/modal';
import { scaleHover, sparkleHover } from '@/lib/motion';

const pricingPlans = [
  {
    name: 'Basic Business Kickstart',
    price: 'R500',
    period: 'month',
    features: [
      'Online mini-site listing',
      'Free branded advert',
      '2 monthly advert posts on social media'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Game Changer',
    price: 'R750',
    period: 'month',
    features: [
      'Everything in Kickstart',
      'Animated banner for mini-site',
      'Choice of Lead Capture OR Quote Builder widget'
    ],
    popular: false,
    cta: 'Level Up'
  },
  {
    name: 'Elite Enterprise',
    price: 'R1000',
    period: 'month',
    features: [
      'Everything in Game Changer',
      '1 animated custom advert',
      'Weekly social media ad posts',
      'Featured listing on home page',
      'Both Lead Capture AND Quote Builder widgets',
      'Elite Listing badge'
    ],
    popular: true,
    cta: 'Go Elite'
  }
];

export const PricingCards = () => {
  const { openModal } = useModal();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.name}
          variants={plan.popular ? sparkleHover : scaleHover}
          whileHover={plan.popular ? "whileHover" : { y: -8 }}
          className={`relative bg-white rounded-2xl shadow-lg p-8 border transition-all duration-300 hover:shadow-2xl ${
            plan.popular 
              ? 'border-amber-300 ring-2 ring-amber-100 scale-105' 
              : 'border-gray-200'
          }`}
        >
          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                <Crown size={16} />
                <span>Most Popular</span>
              </div>
            </div>
          )}

          {/* Elite Sparkles */}
          {plan.popular && (
            <>
              <Sparkles className="absolute top-4 right-4 text-amber-400" size={20} />
              <Sparkles className="absolute bottom-4 left-4 text-amber-400" size={16} />
            </>
          )}

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start space-x-3">
                <Check size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            onClick={openModal}
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              plan.popular
                ? 'bg-amber-400 hover:bg-amber-500 text-black hover:shadow-lg'
                : 'bg-gray-900 hover:bg-gray-800 text-white'
            }`}
          >
            {plan.cta}
          </Button>

          {/* Elite Glow Effect */}
          {plan.popular && (
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300/10 to-amber-400/10 rounded-2xl pointer-events-none" />
          )}
        </motion.div>
      ))}
    </div>
  );
};