import React from 'react';
import { Reveal } from '@/components/ui/Motion';
import { motion } from 'motion/react';

const PROCESS_STEPS = [
  {
    num: "01",
    title: "DISCOVERY",
    copy: "We start with what the brand needs to say, who it needs to convince, and what the website actually needs to achieve."
  },
  {
    num: "02",
    title: "CREATIVE DIRECTION",
    copy: "We establish the visual language, structure, mood, references, typography, and the level of boldness your brand can own."
  },
  {
    num: "03",
    title: "WIREFRAME",
    copy: "We map the page flow before styling anything, so every section has a job and every CTA has a reason."
  },
  {
    num: "04",
    title: "VISUAL DESIGN",
    copy: "We bring the system to life with layout, contrast, type, color, interaction details, and a visual identity people remember."
  },
  {
    num: "05",
    title: "BUILD",
    copy: "We turn the design into a responsive website with clean structure, smooth interactions, and strong mobile behavior."
  },
  {
    num: "06",
    title: "REFINEMENT",
    copy: "We tighten spacing, fix weak sections, test responsiveness, and polish the experience before launch."
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-paper border-b border-ink">
      
      {/* HERO AREA */}
      <div className="pt-[60px] pb-[40px] md:pt-[140px] md:pb-[100px] px-4 md:px-6 relative overflow-hidden border-b-[2px] border-ink">
        {/* Subtle Purple & Yellow Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[300px] md:w-[600px] aspect-square rounded-full bg-[#8b9cff] blur-[80px] md:blur-[140px] opacity-40 md:opacity-30 pointer-events-none" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[300px] md:w-[700px] aspect-square rounded-full bg-[#d4ff44] blur-[80px] md:blur-[140px] opacity-40 md:opacity-30 pointer-events-none" />

        <div className="max-w-[1180px] mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal direction="up" className="relative max-w-[500px] w-full shrink-0">
            <div className="inline-flex font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.06em] bg-orange text-ink px-2 py-1 mb-[10px] md:mb-6 -rotate-[4deg] origin-bottom-left border-[2px] border-ink shadow-[2px_2px_0px_#050505] relative md:absolute md:-top-[20px] md:translate-x-64 shrink-0">
              NO FLUFF. JUST EXECUTION.
            </div>
            
            <h2 className="font-display font-black uppercase text-[clamp(28px,10vw,48px)] md:text-[clamp(42px,5vw,72px)] leading-[0.9] md:leading-[0.9] tracking-[-0.04em] text-ink mb-3 md:mb-4 relative z-10 pt-2 md:pt-6 max-w-full break-words">
              CREATIVE WORK<br />NEEDS STRUCTURE.
            </h2>
            
            <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[1.4] text-ink max-w-[360px] mt-[12px] md:mt-[14px]">
              Just not boring structure. Here is how we build bold digital experiences.
            </p>
          </Reveal>

          {/* Animated Process Object / Right Space */}
          <div className="hidden md:flex flex-1 relative h-[340px] lg:h-[400px] w-full max-w-[340px] lg:max-w-[500px] items-center justify-center -mr-0 lg:-mr-12 perspective-1000 flex-shrink-0">
            <motion.div 
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }} 
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center transform-style-3d scale-[0.8] lg:scale-100"
            >
              {/* Soft Lime Glow */}
              <motion.div 
                className="absolute w-[240px] h-[240px] bg-[#C9FF00] blur-[80px] rounded-full opacity-30 mix-blend-multiply"
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.1, 0.9] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />

              {/* Main Morphing Wireframe Outline */}
              <motion.div 
                className="absolute w-[240px] h-[240px] border-[1.5px] border-[#245BFF]/70"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                animate={{ 
                  borderRadius: [
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "40% 60% 70% 30% / 40% 70% 30% 60%",
                    "30% 70% 70% 30% / 30% 30% 70% 70%"
                  ],
                  rotate: [0, 15, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              >
                {/* Secondary inner ring/lines attached to primary */}
                <motion.div 
                  className="absolute inset-[24px] border-[1px] border-black/20"
                  animate={{ rotate: [0, -25, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                  style={{ borderRadius: "inherit" }}
                />
              </motion.div>

              {/* Orbiting / Attached Nodes */}
              <motion.div 
                className="absolute w-[300px] h-[300px]"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              >
                {/* Blue Node */}
                <div className="absolute top-[20%] left-[20%] w-[6px] h-[6px] bg-[#245BFF] rounded-full shadow-[0_0_8px_#245BFF]" />
                {/* Lime Node */}
                <div className="absolute bottom-[20%] right-[20%] w-[8px] h-[8px] bg-[#C9FF00] rounded-none border border-black" />
              </motion.div>

              {/* Corner Crop Marks (Static but floating) */}
              <div className="absolute w-[320px] h-[320px] pointer-events-none opacity-30">
                 <div className="absolute top-0 left-0 w-4 h-4 border-t-[1.5px] border-l-[1.5px] border-black" />
                 <div className="absolute top-0 right-0 w-4 h-4 border-t-[1.5px] border-r-[1.5px] border-black" />
                 <div className="absolute bottom-0 left-0 w-4 h-4 border-b-[1.5px] border-l-[1.5px] border-black" />
                 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-[1.5px] border-r-[1.5px] border-black" />
                 <div className="absolute top-1/2 left-0 w-2 h-[1.5px] bg-black -translate-x-1" />
                 <div className="absolute top-1/2 right-0 w-2 h-[1.5px] bg-black translate-x-1" />
                 <div className="absolute top-0 left-1/2 h-2 w-[1.5px] bg-black -translate-y-1" />
                 <div className="absolute bottom-0 left-1/2 h-2 w-[1.5px] bg-black translate-y-1" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* LIME MARQUEE */}
      <div className="w-full h-[28px] md:h-[34px] bg-lime border-b-[2px] border-ink overflow-hidden flex items-center shrink-0">
        <div className="flex whitespace-nowrap animate-marquee font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-ink items-center mt-[1px]">
           {[...Array(8)].map((_, i) => (
             <React.Fragment key={i}>
                STRATEGY FIRST <span className="mx-3 opacity-50">✦</span>
                BOLD DESIGN <span className="mx-3 opacity-50">✦</span>
                FLAWLESS BUILD <span className="mx-3 opacity-50">✦</span>
                STRONGER PRESENCE <span className="mx-3 opacity-50">✦</span>
             </React.Fragment>
           ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="py-16 md:py-24 container mx-auto px-4 md:px-8 max-w-full overflow-hidden">
         <Reveal direction="up" className="text-center mb-10 md:mb-[48px]">
           <h3 className="font-display text-[clamp(28px,8vw,42px)] md:text-[clamp(42px,5vw,64px)] lg:text-[clamp(52px,6vw,82px)] font-bold uppercase tracking-tighter max-w-full break-words leading-[0.95]">THE PLAYBOOK</h3>
         </Reveal>

         <div className="max-w-[1000px] mx-auto relative px-0 pb-12 w-full">
            {/* Center Line Always Center */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-ink z-0" />

            <div className="space-y-[32px] md:space-y-[48px] lg:space-y-[72px] relative z-10 w-full flex flex-col pt-4">
              {PROCESS_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                
                const getBadgeColor = (num: string) => {
                  switch (num) {
                    case '01': return 'bg-lime text-ink';
                    case '02': return 'bg-orange text-ink';
                    case '03': return 'bg-lime text-ink';
                    case '04': return 'bg-ink text-paper';
                    case '05': return 'bg-paper text-ink';
                    case '06': return 'bg-lime text-ink';
                    default: return 'bg-lime text-ink';
                  }
                };

                const numColorClass = getBadgeColor(step.num);

                return (
                  <div key={step.num} className="flex w-full justify-between items-center relative">
                     
                     {/* Left Container */}
                     <div className="w-[calc(50%-16px)] md:w-[calc(50%-32px)] lg:w-[calc(50%-56px)] flex justify-end relative">
                        {isEven && (
                           <Reveal direction="up" className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[320px] lg:max-w-[420px]">
                             <div className="bg-[#F5F4EF] border-[2px] border-ink p-3 sm:p-4 md:p-6 lg:p-8 shadow-[4px_4px_0px_#050505] md:shadow-[6px_6px_0px_#050505] lg:shadow-[8px_8px_0px_#050505] text-left w-full transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_#050505] lg:hover:shadow-[4px_4px_0px_#050505]">
                                <h4 className="font-display text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] font-bold uppercase tracking-tight mb-1 md:mb-2 lg:mb-3 text-ink leading-[1.1]">{step.title}</h4>
                                <p className="font-sans text-[9.5px] sm:text-[11px] md:text-[14px] lg:text-[16px] font-medium leading-[1.35] md:leading-[1.45] text-ink/90">{step.copy}</p>
                             </div>
                           </Reveal>
                        )}
                     </div>

                     {/* Center Number Badge */}
                     <div className={`shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24px] sm:w-[28px] md:w-[38px] lg:w-[48px] h-[24px] sm:h-[28px] md:h-[38px] lg:h-[48px] border-[2px] border-ink flex items-center justify-center font-mono font-bold text-[10px] sm:text-[11px] md:text-[14px] lg:text-[16px] z-20 ${numColorClass} shadow-[2px_2px_0px_#050505] md:shadow-[3px_3px_0px_#050505] lg:shadow-[4px_4px_0px_#050505] transition-transform hover:scale-110`}>
                        {step.num}
                     </div>

                     {/* Right Container */}
                     <div className="w-[calc(50%-16px)] md:w-[calc(50%-32px)] lg:w-[calc(50%-56px)] flex justify-start relative">
                        {!isEven && (
                           <Reveal direction="up" className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[320px] lg:max-w-[420px]">
                             <div className="bg-[#F5F4EF] border-[2px] border-ink p-3 sm:p-4 md:p-6 lg:p-8 shadow-[4px_4px_0px_#050505] md:shadow-[6px_6px_0px_#050505] lg:shadow-[8px_8px_0px_#050505] text-left w-full relative transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_#050505] lg:hover:shadow-[4px_4px_0px_#050505]">
                                <h4 className="font-display text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] font-bold uppercase tracking-tight mb-1 md:mb-2 lg:mb-3 text-ink leading-[1.1]">{step.title}</h4>
                                <p className="font-sans text-[9.5px] sm:text-[11px] md:text-[14px] lg:text-[16px] font-medium leading-[1.35] md:leading-[1.45] text-ink/90">{step.copy}</p>
                                {index === 5 && (
                                  <div className="absolute -top-[10px] -right-[10px] md:-top-[14px] md:-right-[14px] bg-orange text-ink font-mono font-bold text-[8px] md:text-[10px] uppercase px-2 py-0.5 border-[2px] border-ink whitespace-nowrap shadow-[2px_2px_0px_#050505] md:shadow-[3px_3px_0px_#050505] rotate-[8deg]">
                                    LAUNCH
                                  </div>
                                )}
                             </div>
                           </Reveal>
                        )}
                     </div>

                  </div>
                );
              })}
            </div>
         </div>
      </div>

      {/* PANELS */}
      <div className="border-t border-ink pb-24 md:pb-32 pt-16 md:pt-24">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              
              {/* Panel 1 */}
              <Reveal direction="up" delay={0.2} className="h-full">
                <div className="bg-paper border-2 border-ink p-6 lg:p-8 h-full">
                  <h4 className="font-display text-2xl lg:text-3xl font-bold uppercase border-b border-ink/20 pb-4 mb-6">WHAT YOU’LL NEED</h4>
                  <ul className="space-y-3 lg:space-y-4 font-mono text-xs lg:text-sm font-bold uppercase tracking-wide">
                     {[
                       'Your objectives',
                       'Existing website or references',
                       'Brand assets',
                       'Product or service info',
                       'Competitor links',
                       'Any must-have pages'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <span className="text-blue mt-0.5 shrink-0">■</span>
                         <span>{item}</span>
                       </li>
                     ))}
                  </ul>
                </div>
              </Reveal>

              {/* Panel 2 */}
              <Reveal direction="up" delay={0.4} className="h-full">
                <div className="bg-lime border-2 border-ink p-6 lg:p-8 h-full flex flex-col">
                  <h4 className="font-display text-2xl lg:text-3xl font-bold uppercase border-b border-ink/20 pb-4 mb-6">WHAT YOU’LL GET</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                    <div className="bg-paper border border-ink p-4 flex flex-col pt-6 lg:pt-8 h-full">
                      <span className="font-mono text-[10px] lg:text-xs font-bold mb-1">FINAL FILES</span>
                      <p className="font-sans text-[11px] lg:text-xs font-medium">High-res design assets and layout system.</p>
                    </div>
                    <div className="bg-paper border border-ink p-4 flex flex-col pt-6 lg:pt-8 h-full">
                      <span className="font-mono text-[10px] lg:text-xs font-bold mb-1">PRODUCTION CODE</span>
                      <p className="font-sans text-[11px] lg:text-xs font-medium">Responsive build ready for launch.</p>
                    </div>
                    <div className="bg-paper border border-ink p-4 flex flex-col pt-6 lg:pt-8 h-full">
                      <span className="font-mono text-[10px] lg:text-xs font-bold mb-1">STYLE GUIDE</span>
                      <p className="font-sans text-[11px] lg:text-xs font-medium">Visual direction and reusable design rules.</p>
                    </div>
                    <div className="bg-paper border border-ink p-4 flex flex-col pt-6 lg:pt-8 h-full">
                      <span className="font-mono text-[10px] lg:text-xs font-bold mb-1">IMPACT</span>
                      <p className="font-sans text-[11px] lg:text-xs font-medium">A sharper presence that looks intentional.</p>
                    </div>
                  </div>
                </div>
              </Reveal>

           </div>
        </div>
      </div>

    </section>
  );
}
