import React from 'react';
import { Reveal, Parallax } from '@/components/ui/Motion';
import { TextSplit } from '@/components/ui/split-text';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { WorkSection } from '@/components/sections/WorkSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactFaqSection } from '@/components/sections/ContactFaqSection';

export function Home() {
  return (
    <div id="home" className="bg-paper min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-[32px] md:pt-[56px] lg:pt-[90px] pb-10 md:pb-[64px] min-h-auto md:min-h-[calc(100vh-64px)] flex items-start md:items-center overflow-visible md:overflow-hidden hero-grid">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 overflow-visible">
            
            {/* LEFT COLUMN: 50% width approx */}
            <div className="w-full md:w-[58%] lg:w-[50%] relative lg:pl-6">
              {/* Ghost text in background */}
              <Parallax offset={40} className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 lg:-left-24 z-[-1] pointer-events-none select-none overflow-visible opacity-30 md:opacity-100">
                <div className="font-display font-black text-[8rem] md:text-[12rem] lg:text-[22rem] leading-none text-ink/[0.04] select-none">
                  DESIGN
                </div>
              </Parallax>

              <Reveal direction="up" delay={0.1}>
                 <div className="inline-flex font-mono text-[9px] md:text-[10px] uppercase tracking-[0.1em] bg-blue text-white px-[8px] md:px-[10px] py-[5px] md:py-[6px] mb-[18px] md:mb-6 font-bold -rotate-[4deg] md:-rotate-[5deg] shadow-[2px_2px_0px_#050505] origin-bottom-left">
                   DIGITAL AGENCY
                 </div>
              </Reveal>

              {/* Headline */}
              <Reveal direction="up" delay={0.2} className="relative z-10 w-full">
                <h1 className="font-display font-black text-[clamp(44px,13vw,72px)] md:text-[clamp(62px,8vw,92px)] lg:text-[clamp(74px,8vw,118px)] uppercase leading-[0.88] md:leading-[0.9] lg:leading-[0.85] tracking-[-0.055em] md:tracking-[-0.065em] text-ink w-full md:max-w-[560px] lg:max-w-full break-words">
                  WEBSITES<br />
                  THAT MAKE<br />
                  <span className="relative inline-flex items-center text-orange">
                    <TextSplit maxMove={80} falloff={0.3} charClassName="h-[0.88em] leading-[0.88] md:h-[0.9em] md:leading-[0.9] lg:h-[0.85em] lg:leading-[0.85]">SMALL</TextSplit>
                    <span className="absolute -bottom-[4px] lg:-bottom-[6px] left-0 right-0 h-[5px] md:h-[6px] lg:h-[8px] bg-ink pointer-events-none" aria-hidden="true" />
                  </span><br />
                  <span className="relative inline-flex items-center text-orange">
                    <TextSplit maxMove={80} falloff={0.3} charClassName="h-[0.88em] leading-[0.88] md:h-[0.9em] md:leading-[0.9] lg:h-[0.85em] lg:leading-[0.85]">BRANDS</TextSplit>
                    <span className="absolute -bottom-[4px] lg:-bottom-[6px] left-0 right-0 h-[5px] md:h-[6px] lg:h-[8px] bg-ink pointer-events-none" aria-hidden="true" />
                  </span><br />
                  LOOK<br />
                  SERIOUS.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.3} className="relative z-10 mt-5 md:mt-6 lg:mt-8">
                 <p className="font-sans text-[16px] md:text-[18px] leading-[1.45] md:leading-[1.55] font-medium text-[#1A1A1A] w-full md:max-w-[420px] lg:max-w-[440px]">
                   We're a website design agency building high-converting, brutalist websites that refuse to blend in. For brands with taste, ambition, and something to prove.
                 </p>
              </Reveal>

              <Reveal direction="up" delay={0.4} className="relative z-10 mt-6 lg:mt-10">
                 <a href="#work" className="inline-flex items-center justify-center font-mono text-[11px] font-bold uppercase tracking-[0.1em] bg-lime text-ink px-8 h-[44px] md:h-[48px] border-[2px] border-ink hover:translate-x-[2px] hover:translate-y-[2px] transition-transform shadow-[4px_4px_0px_#050505] hover:shadow-none w-fit">
                    VIEW SELECTED WORK <ArrowRight size={16} strokeWidth={3} className="rotate-90 ml-2" />
                 </a>
              </Reveal>
            </div>

            {/* RIGHT COLUMN: Hidden on mobile */}
            <div className="hidden md:flex w-full md:w-[38%] lg:w-[28%] relative flex-col items-start lg:items-end justify-center lg:pr-12">
               
               <Parallax offset={-20} className="w-full max-w-[320px] lg:max-w-[340px]">
                 <div className="relative p-2 border-[2px] border-ink bg-paper shadow-[12px_12px_0px_#050505] rotate-[3deg] transition-transform hover:rotate-0">
                   {/* Abstract project image area */}
                   <div className="w-full aspect-[4/5] bg-ink relative overflow-hidden flex flex-col items-center justify-center group border-[2px] border-ink">
                      {/* Geometric shape for abstract UI */}
                      <div className="w-[80%] h-[80%] bg-[#111] border-[2px] border-ink/40 relative flex items-center justify-center -translate-y-4 shadow-2xl">
                        <div className="w-16 h-[2px] bg-paper/20 absolute top-4 left-4" />
                        <div className="w-full h-[60%] bg-paper absolute bottom-0 border-t-[2px] border-ink/40 flex overflow-hidden">
                           <div className="w-1/3 border-r-[2px] border-ink/20 bg-[#e8e6df]" />
                           <div className="w-2/3 grid grid-cols-2 grid-rows-2">
                             <div className="border-r-[2px] border-b-[2px] border-ink/10" />
                             <div className="border-b-[2px] border-ink/10" />
                             <div className="border-r-[2px] border-ink/10" />
                             <div />
                           </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 right-4 z-20">
                         <div className="font-mono text-[11px] bg-orange text-ink px-2 py-0.5 border-[2px] border-ink uppercase font-bold tracking-widest shadow-[2px_2px_0px_#050505]">
                           LIVE
                         </div>
                      </div>
                   </div>
                   
                   <div className="mt-4 mb-2 px-2 flex flex-col font-mono uppercase">
                      <div className="flex justify-between items-start">
                        <div className="text-[14px] font-bold text-ink">PROJECT X</div>
                        <ArrowUpRight size={16} strokeWidth={2.5} className="text-ink" />
                      </div>
                      <div className="text-[11px] font-bold tracking-[0.05em] text-ink/70 mt-1">E-Commerce Redesign</div>
                   </div>
                 </div>
               </Parallax>

               {/* Decorative guide mark */}
               <div className="hidden lg:block absolute -bottom-16 -left-12 w-8 h-8 rounded-full border-[2px] border-dotted border-ink/40" />
            </div>

        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full max-w-[100vw] h-[48px] md:h-[78px] bg-lime border-b-[2px] border-black overflow-hidden flex items-center shrink-0 border-t-[2px]">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee {
              animation-duration: 120s;
            }
          }
        `}</style>
        <div className="flex whitespace-nowrap animate-marquee font-display text-[14px] md:text-[24px] font-black uppercase tracking-[0.04em] text-ink items-center mt-[1px] w-max">
           {[...Array(6)].map((_, i) => (
             <React.Fragment key={i}>
                BRUTALIST DESIGN SYSTEMS <span className="mx-4 md:mx-5 opacity-50 text-[10px] md:text-[18px] relative -top-[1px] md:-top-[2px]">★</span> 
                NO CORPORATE FLUFF <span className="mx-4 md:mx-5 opacity-50 text-[10px] md:text-[18px] relative -top-[1px] md:-top-[2px]">★</span> 
                JUST RAW IMPACT <span className="mx-4 md:mx-5 opacity-50 text-[10px] md:text-[18px] relative -top-[1px] md:-top-[2px]">★</span> 
                WEBSITES BUILT FOR CONVERSION <span className="mx-4 md:mx-5 opacity-50 text-[10px] md:text-[18px] relative -top-[1px] md:-top-[2px]">★</span> 
             </React.Fragment>
           ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <section className="py-12 md:py-20 lg:py-16 px-4 md:px-8 lg:px-10 border-b border-ink max-w-[100vw] overflow-hidden">
        <div className="container mx-auto">
          
          {/* Top Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12 gap-6 border-b border-ink/20 pb-6">
             <Reveal direction="up" className="flex items-start gap-3 md:gap-4 w-full">
               <div className="font-mono text-xs font-bold mt-1.5 md:mt-2 shrink-0">01 /</div>
               <h2 className="font-display text-[clamp(34px,11vw,48px)] md:text-[clamp(42px,6vw,64px)] lg:text-5xl font-bold uppercase tracking-tight leading-none text-ink w-full break-words">
                 WHAT WE DO
               </h2>
             </Reveal>
             <Reveal direction="left" delay={0.1}>
               <p className="font-mono text-[11px] md:text-xs font-bold max-w-[240px] uppercase text-ink/70 leading-relaxed md:text-right">
                 Core services engineered to elevate your brand from amateur to authority.
               </p>
             </Reveal>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-12 lg:grid-cols-12 gap-y-8 md:gap-x-8 lg:gap-x-12">
             
             {/* LEFT SIDE */}
             <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center relative">
               <Reveal direction="up" delay={0.2}>
                  <div className="font-display font-bold text-[6rem] md:text-[8rem] lg:text-[14rem] leading-none text-muted opacity-30 select-none -mb-6 md:-mb-10 lg:-mb-12">
                    01
                  </div>
               </Reveal>
               <Reveal direction="up" delay={0.3} className="relative z-10 w-full max-w-lg mt-4 md:mt-6">
                  <h3 className="font-display font-bold text-[28px] md:text-4xl lg:text-5xl uppercase mb-3 md:mb-4 tracking-tighter w-full break-words">WEBSITE DESIGN</h3>
                  <p className="font-sans text-[15px] md:text-[17px] lg:text-xl font-bold leading-snug text-ink/90">
                    Bespoke digital experiences built from the ground up. We craft your landing page design, website structure, and modern brand identity.
                  </p>
               </Reveal>
             </div>

             {/* RIGHT SIDE */}
             <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-4 mt-4 lg:mt-0 w-full">
                
                {/* Orange Card */}
                <Reveal direction="left" delay={0.4} className="w-full">
                  <div className="bg-orange border border-ink p-5 flex flex-col justify-between h-[120px] md:h-32 w-full relative">
                    <div className="flex justify-between items-start">
                       <span className="font-mono text-xs font-bold text-ink">02</span>
                       <ArrowUpRight size={16} className="text-ink" />
                    </div>
                    <div>
                       <h4 className="font-display text-[20px] md:text-2xl font-bold uppercase mb-1 tracking-tight">LANDING PAGES</h4>
                       <p className="font-sans text-[13px] md:text-sm font-bold leading-tight text-ink">
                         High-converting single-page experiences.
                       </p>
                    </div>
                  </div>
                </Reveal>

                {/* Lime Card */}
                <Reveal direction="left" delay={0.5} className="w-full">
                  <div className="bg-lime border border-ink p-5 flex flex-col justify-between h-[120px] md:h-32 w-full relative">
                    <div className="flex justify-between items-start">
                       <span className="font-mono text-xs font-bold text-ink">03</span>
                       <ArrowUpRight size={16} className="text-ink" />
                    </div>
                    <div>
                       <h4 className="font-display text-[20px] md:text-2xl font-bold uppercase mb-1 tracking-tight">SHOPIFY</h4>
                       <p className="font-sans text-[13px] md:text-sm font-bold leading-tight text-ink">
                         E-commerce brand visuals that sell — Shopify to Amazon.
                       </p>
                    </div>
                  </div>
                </Reveal>

             </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-6 md:gap-x-8 lg:gap-x-12 mt-8 md:mt-12 lg:mt-24 items-end">
             <div className="hidden md:block md:col-span-7 lg:col-span-7"></div>
             <div className="col-span-1 md:col-span-5 lg:col-span-5 flex flex-row flex-wrap gap-x-6 gap-y-4 items-center border-t border-ink/20 pt-6 md:pt-8 w-full">
                <Reveal direction="up" delay={0.6}>
                  <div className="flex items-center gap-1.5 group cursor-pointer w-max">
                     <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform stroke-ink" />
                     <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink group-hover:text-blue transition-colors">PORTFOLIOS</span>
                  </div>
                </Reveal>
                <Reveal direction="up" delay={0.7}>
                  <div className="flex items-center gap-1.5 group cursor-pointer w-max">
                     <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform stroke-ink" />
                     <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink group-hover:text-blue transition-colors">REDESIGNS</span>
                  </div>
                </Reveal>
             </div>
          </div>

        </div>
      </section>

      <WorkSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <TestimonialsSection />
      <ContactFaqSection />

    </div>
  );
}
