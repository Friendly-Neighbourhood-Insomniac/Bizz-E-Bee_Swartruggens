'use client';

import { motion } from 'framer-motion';
import { VideoHero } from '@/components/video-hero';
import { pageTransition } from '@/lib/motion';

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <VideoHero />
    </motion.div>
  );
}