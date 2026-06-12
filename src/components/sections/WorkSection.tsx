import React from 'react';
import { Reveal } from '@/components/ui/Motion';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioProjects } from '@/data/portfolioProjects';

export function WorkSection() {
  return (
    <section id="work" className="pt-[56px] md:pt-[72px] lg:pt-[90px] bg-paper px-4 md:px-8 lg:px-10 hero-grid border-b-[2px] border-ink overflow-hidden">
      <div className="max-w-[1180px] mx-auto w-full">
        
        {/* HEADER */}
        <div className="relative mb-12 md:mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          <div className="w-full max-w-[620px] relative z-10">
            <Reveal direction="up" className="w-full">
              <h2 className="font-display font-black text-[clamp(36px,12vw,58px)] md:text-[clamp(52px,7vw,82px)] lg:text-[clamp(52px,6vw,92px)] uppercase leading-[0.9] tracking-tighter text-ink whitespace-pre-wrap max-w-full break-words">
                {"WORK WITH\nMORE ATTITUDE\nTHAN A\nTEMPLATE."}
              </h2>
              <p className="font-sans text-[15px] md:text-[18px] leading-[1.45] font-medium text-ink mt-4 md:mt-6 max-w-[420px]">
                From e-commerce stores to portfolio websites, we craft sites that feel sharper than standard brochures, brand decks, and template themes.
              </p>
            </Reveal>
          </div>

          <div className="hidden md:block font-display font-black text-[120px] lg:text-[180px] xl:text-[220px] leading-none text-ink/[0.04] select-none pointer-events-none md:-mb-4 lg:-mb-8">
            02
          </div>
        </div>

        {/* PROJECT COLLAGE */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 gap-y-[32px] md:gap-x-5 md:gap-y-12 lg:gap-x-4 lg:gap-y-16 relative z-10 w-full overflow-hidden">
          
          {portfolioProjects.map((project, index) => {
            
            const getContainerClasses = (idx: number) => {
              switch (idx) {
                case 0: return {
                  wrapper: "md:col-span-2 lg:col-span-7",
                  imageWrapper: "h-[240px] md:h-[340px] lg:h-[420px] max-h-[420px]"
                };
                case 1: return {
                  wrapper: "md:col-span-1 lg:col-span-4 lg:col-start-9 lg:-ml-[32px] lg:mt-[80px]",
                  imageWrapper: "h-[240px] md:h-[260px] lg:aspect-[3/4] max-h-[420px]"
                };
                case 2: return {
                  wrapper: "md:col-span-1 lg:col-span-6 lg:col-start-1 lg:-mt-[40px]",
                  imageWrapper: "h-[200px] md:h-[260px] lg:aspect-[16/9] max-h-[380px]"
                };
                case 3: return {
                  wrapper: "md:col-span-1 lg:col-span-5 lg:col-start-8 lg:mt-[20px]",
                  imageWrapper: "h-[220px] md:h-[240px] lg:aspect-[4/3] max-h-[380px]"
                };
                case 4: return {
                  wrapper: "md:col-span-1 lg:col-span-5 lg:col-start-2 lg:mt-[60px]",
                  imageWrapper: "h-[220px] md:h-[240px] lg:aspect-[4/3] max-h-[360px]"
                };
                case 5: return {
                  wrapper: "md:col-span-2 lg:col-span-4 lg:col-start-8 lg:-mt-[20px]",
                  imageWrapper: "h-[240px] md:h-[300px] lg:aspect-[3/4] max-h-[400px]"
                };
                default: return {
                  wrapper: "md:col-span-2 lg:col-span-6",
                  imageWrapper: "h-[240px] md:h-[340px] lg:aspect-[16/9]"
                };
              }
            };

            const getBadgeColor = (status: string, idx: number) => {
              if (status.toUpperCase() === "CONCEPT") return "bg-paper text-ink";
              const colors = ["bg-blue text-white", "bg-orange text-ink", "bg-lime text-ink"];
              return colors[idx % colors.length];
            };

            const classes = getContainerClasses(index);
            const badgeClass = getBadgeColor(project.status, index);

            return (
              <a 
                key={index}
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex flex-col group cursor-pointer relative z-10 transition-transform hover:-translate-y-1 ${classes.wrapper}`}
              >
                <Reveal direction="up" delay={index % 2 === 0 ? 0 : 0.1} className="w-full h-full flex flex-col">
                  <div className={`w-full border-[2px] border-ink p-[2px] mb-3 md:mb-4 relative overflow-hidden bg-ink ${classes.imageWrapper}`}>
                    {/* Abstract Fallback */}
                    <div className="absolute inset-0 bg-[#D9D9D9] flex items-center justify-center -z-10 group-hover:bg-[#EAEAEA] transition-colors">
                      <div className="w-[60%] h-[20%] border-t border-b border-black/10 relative flex items-center justify-center -skew-x-[20deg]" />
                    </div>

                    {/* Image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.alt || project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] relative z-10 block"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}

                    {/* Status Badge */}
                    {project.status && (
                      <div className="absolute top-3 right-3 lg:top-4 lg:right-4 z-20">
                        <div className={`font-mono text-[9px] md:text-[10px] px-2 py-0.5 border-[2px] border-ink uppercase font-bold tracking-widest shadow-[2px_2px_0px_#050505] ${badgeClass}`}>
                          {project.status}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-1 md:px-0 flex-grow flex flex-col">
                    <h3 className="font-display text-[20px] md:text-[22px] lg:text-[26px] font-black uppercase mb-1.5 leading-none tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <div className="font-mono text-[9.5px] md:text-[10.5px] font-bold uppercase tracking-[0.06em] text-ink/70 mb-2 md:mb-2.5">
                      {project.category}
                    </div>
                    <p className="font-sans text-[13px] md:text-[14.5px] lg:text-[15px] font-medium leading-[1.45] text-ink max-w-[400px] mb-3 md:mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-ink flex items-center group-hover:text-blue transition-colors mt-auto">
                      EXPLORE <ArrowUpRight size={14} strokeWidth={2.5} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Reveal>
              </a>
            );
          })}
        </div>

      </div>

      {/* CTA BOTTOM */}
      <div className="mt-12 md:mt-16 lg:mt-24 relative flex flex-col items-center w-[calc(100%+32px)] md:w-[calc(100%+64px)] lg:w-[calc(100%+80px)] -mx-4 md:-mx-8 lg:-mx-10 z-20 py-[64px] lg:py-[78px] bg-[#F1F1F1] border-t border-ink">
         <div className="flex flex-col items-center w-full px-4 md:px-6 max-w-[1180px] mx-auto">
            <div className="text-center w-full flex flex-col items-center">
               <motion.h2 
                 initial={{ opacity: 0, y: -40, rotate: 0, scale: 1 }}
                 whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ type: "spring", stiffness: 40, damping: 20, mass: 1, duration: 1 }}
                 className="font-display font-[900] uppercase text-[clamp(44px,13vw,64px)] md:text-[clamp(48px,9vw,72px)] lg:text-[clamp(58px,7vw,86px)] leading-[0.9] tracking-[-0.06em] text-black text-center w-full mx-auto max-w-full break-words"
               >
                READY TO<br />BREAK<br />THINGS?
              </motion.h2>
              <Reveal direction="up" delay={0.3} className="w-full">
                <a href="#contact" className="inline-flex items-center justify-center font-sans font-[800] text-[14px] md:text-[15px] lg:text-[16px] uppercase tracking-[0.03em] bg-black text-[#C9FF00] px-[22px] min-w-[220px] h-[50px] md:h-[52px] lg:h-[54px] hover:bg-[#1A1A1A] transition-colors mt-[16px] lg:mt-[20px] w-fit mx-auto">
                   START A PROJECT <span className="ml-[6px] font-normal text-[18px] relative -top-[1px]">→</span>
                </a>
              </Reveal>
           </div>
        </div>
      </div>
    </section>
  );
}
