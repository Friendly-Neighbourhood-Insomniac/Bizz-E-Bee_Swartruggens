'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSound } from '@/components/sound-context';
import { fadeUp, floatY } from '@/lib/motion';

export const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const { soundEnabled, toggleSound } = useSound();

  useEffect(() => {
    if (videoRef.current) {
      // Video should be muted unless user explicitly enabled sound
      videoRef.current.muted = !soundEnabled;
    }
  }, [soundEnabled]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video-Background.mp4" type="video/mp4" />
          <source src="/Video-Background.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23FFC107' fill-opacity='0.2'%3E%3Cpolygon points='30,0 60,15 60,45 30,60 0,45 0,15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeUp}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={floatY}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to the Hive 🐝
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover local businesses, deals, and what's buzzing in Swartruggens.
          </p>
          <Button 
            size="lg"
            onClick={() => router.push('/directory')}
            className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-2xl hover:scale-105"
          >
            Enter the Local Business Hive
          </Button>
          
          {/* Sound Toggle Prompt */}
          <div className="mt-8">
            <button
              onClick={toggleSound}
              className="bg-black/60 hover:bg-black/80 text-white px-6 py-3 rounded-full transition-all hover:scale-105 flex items-center space-x-2 mx-auto"
              aria-label={soundEnabled ? 'Mute video' : 'Enable video sound'}
            >
              {soundEnabled ? (
                <>
                  <VolumeX size={20} />
                  <span>Mute Video</span>
                </>
              ) : (
                <>
                  <Volume2 size={20} />
                  <span>Enable Sound</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
};