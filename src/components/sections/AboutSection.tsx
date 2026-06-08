import React from 'react';
import { Reveal } from '@/components/ui/Motion';

export function AboutSection() {
  return (
    <section id="about" className="bg-ink text-paper py-20 md:py-24 border-b border-lime">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        
        <Reveal direction="up">
          <div className="max-w-5xl mb-12 md:mb-16 lg:mb-20">
            <h2 className="font-display text-[clamp(26px,9vw,48px)] md:text-[clamp(42px,6vw,56px)] lg:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-4 md:mb-6 lg:mb-8 text-paper max-w-full break-words">
              DESIGNQURE EXISTS BECAUSE MOST SMALL-BRAND WEBSITES LOOK SCARED.
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] lg:text-2xl font-bold max-w-2xl text-paper/80 leading-snug">
              Too safe. Too template-looking. Too forgettable. We build websites with enough taste to stand out and enough structure to still make sense.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          <Reveal direction="up" delay={0.2} className="h-full">
            <div className="border-[2px] border-paper bg-ink p-[24px] md:p-6 lg:p-8 h-full flex flex-col justify-end min-h-[200px] md:min-h-[220px] lg:min-h-[240px] hover:bg-paper hover:text-ink transition-colors cursor-default">
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 opacity-50 block">01 /</span>
              <h3 className="font-display text-[24px] md:text-[20px] lg:text-3xl font-bold uppercase leading-[0.9] tracking-tight">
                FIRST IMPRESSIONS ARE BUSINESS ASSETS.
              </h3>
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.3} className="h-full">
            <div className="border-[2px] border-paper bg-lime text-ink p-[24px] md:p-6 lg:p-8 h-full flex flex-col justify-end min-h-[200px] md:min-h-[220px] lg:min-h-[240px] hover:bg-paper transition-colors cursor-default">
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 opacity-50 block">02 /</span>
              <h3 className="font-display text-[24px] md:text-[20px] lg:text-3xl font-bold uppercase leading-[0.9] tracking-tight">
                CREATIVE DOES NOT MEAN UNCLEAR.
              </h3>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.4} className="h-full">
            <div className="border-[2px] border-paper bg-paper text-ink p-[24px] md:p-6 lg:p-8 h-full flex flex-col justify-end min-h-[200px] md:min-h-[220px] lg:min-h-[240px] hover:bg-lime transition-colors cursor-default">
              <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 opacity-50 block">03 /</span>
              <h3 className="font-display text-[24px] md:text-[20px] lg:text-3xl font-bold uppercase leading-[0.9] tracking-tight">
                SMALL BRANDS DESERVE STRONG PRESENCE.
              </h3>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
