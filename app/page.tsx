'use client';

import dynamic from 'next/dynamic';
import { VideoHero } from '@/components/video-hero';
import { pageTransition } from '@/lib/motion';

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
);

export default function Home() {
  return (
    <MotionDiv
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <VideoHero />
    </MotionDiv>
  );
}