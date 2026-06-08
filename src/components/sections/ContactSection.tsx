import React from 'react';
import { Reveal } from '@/components/ui/Motion';
import { motion, useReducedMotion } from 'framer-motion';

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const titleAnimate = shouldReduceMotion ? {} : {
    y: [0, -1.5, 0, 1, 0],
    rotate: [0, 0.3, 0, -0.2, 0],
    scale: [1, 1.002, 1, 0.998, 1]
  };

  const textAnimate = shouldReduceMotion ? {} : {
    y: [0, 1, 0, -1.5, 0],
    rotate: [0, -0.3, 0, 0.2, 0],
    scale: [1, 0.998, 1, 1.002, 1]
  };

  return (
    <section id="final-cta" className="bg-blue text-paper py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-10 text-center flex flex-col items-center">
        
        <Reveal direction="up" className="w-full">
          <motion.h2 
            animate={titleAnimate}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="font-display text-[clamp(28px,11vw,64px)] md:text-[clamp(44px,7vw,72px)] lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter mb-5 md:mb-6 lg:mb-8 max-w-5xl mx-auto w-full break-words"
          >
            YOUR WEBSITE IS EITHER HELPING YOUR BRAND OR <span className="text-lime">QUIETLY DAMAGING IT.</span>
          </motion.h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <motion.p 
            animate={textAnimate}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
            className="font-sans text-[16px] md:text-[20px] lg:text-2xl font-bold max-w-xl lg:max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12 text-paper/90 px-2 md:px-0"
          >
            If the design feels outdated, unclear, or forgettable, people feel it before they can explain it.
          </motion.p>
        </Reveal>

      </div>
    </section>
  );
}
