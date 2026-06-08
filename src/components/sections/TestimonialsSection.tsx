import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Motion';

type TestimonialTone = 'paper' | 'ink' | 'lime' | 'blue' | 'orange';
type TestimonialMotion = 'left' | 'right' | 'up';

interface Testimonial {
  label: string;
  quote: string;
  body: string;
  name: string;
  tone: TestimonialTone;
  size: 'feature' | 'medium' | 'small';
  motion: TestimonialMotion;
  className: string;
}

const testimonials: Testimonial[] = [
  {
    label: 'WEBSITE REDESIGN',
    quote: 'They made the brand feel bigger than it was.',
    body: 'We had a decent offer, but the website made us look small. The new direction gave us the kind of presence we needed before sending traffic.',
    name: 'Founder, Product Brand',
    tone: 'ink',
    size: 'feature',
    motion: 'up',
    className: 'md:col-span-2 lg:col-span-7 lg:row-span-2',
  },
  {
    label: 'LANDING PAGE',
    quote: 'The page finally explained the offer clearly.',
    body: 'Before this, people kept asking what we actually did. The new layout made the message obvious without making the design boring.',
    name: 'Service Business Owner',
    tone: 'lime',
    size: 'medium',
    motion: 'right',
    className: 'md:col-span-1 lg:col-span-5',
  },
  {
    label: 'E-COMMERCE',
    quote: 'It stopped looking like a template.',
    body: 'The product pages started feeling more premium, more deliberate, and much easier to trust.',
    name: 'E-commerce Founder',
    tone: 'paper',
    size: 'medium',
    motion: 'right',
    className: 'md:col-span-1 lg:col-span-5',
  },
  {
    label: 'PORTFOLIO SITE',
    quote: 'Clean, bold, and not corporate.',
    body: 'Exactly the kind of site I wanted for my personal brand.',
    name: 'Independent Consultant',
    tone: 'orange',
    size: 'small',
    motion: 'left',
    className: 'md:col-span-1 lg:col-span-4',
  },
  {
    label: 'BRAND WEBSITE',
    quote: 'The first impression changed completely.',
    body: 'People started taking the brand more seriously after the redesign.',
    name: 'Startup Founder',
    tone: 'blue',
    size: 'small',
    motion: 'up',
    className: 'md:col-span-1 lg:col-span-4',
  },
  {
    label: 'DESIGN SYSTEM',
    quote: 'It felt custom from the first scroll.',
    body: 'Nothing looked copied. The site had its own attitude.',
    name: 'Creative Lead',
    tone: 'paper',
    size: 'small',
    motion: 'right',
    className: 'md:col-span-2 lg:col-span-4',
  },
];

const toneClasses: Record<TestimonialTone, string> = {
  paper: 'bg-paper text-ink',
  ink: 'bg-ink text-paper',
  lime: 'bg-lime text-ink',
  blue: 'bg-blue text-white',
  orange: 'bg-orange text-ink',
};

const labelClasses: Record<TestimonialTone, string> = {
  paper: 'bg-ink text-lime border-ink',
  ink: 'bg-lime text-ink border-paper',
  lime: 'bg-ink text-lime border-ink',
  blue: 'bg-paper text-ink border-ink',
  orange: 'bg-paper text-ink border-ink',
};

function TestimonialCard({ testimonial, index }: { key?: React.Key; testimonial: Testimonial; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const isFeature = testimonial.size === 'feature';
  const isMedium = testimonial.size === 'medium';
  const motionOffset = testimonial.motion === 'left' ? -36 : testimonial.motion === 'right' ? 36 : 0;

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: motionOffset, y: testimonial.motion === 'up' ? 28 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
      className={`border-[2px] border-ink shadow-[6px_6px_0px_#050505] md:shadow-[8px_8px_0px_#050505] p-5 md:p-6 lg:p-7 flex flex-col justify-between min-h-[260px] md:min-h-[300px] ${isFeature ? 'lg:min-h-[520px]' : isMedium ? 'lg:min-h-[250px]' : 'lg:min-h-[230px]'} ${toneClasses[testimonial.tone]} ${testimonial.className}`}
    >
      <div>
        <div className={`inline-flex border-[2px] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.08em] mb-6 ${labelClasses[testimonial.tone]}`}>
          {testimonial.label}
        </div>
        <blockquote className={`font-display font-black uppercase leading-[0.95] tracking-[-0.045em] ${isFeature ? 'text-[clamp(34px,7vw,66px)]' : isMedium ? 'text-[clamp(25px,4vw,38px)]' : 'text-[24px] md:text-[28px]'} max-w-full break-words`}>
          “{testimonial.quote}”
        </blockquote>
      </div>

      <div className="mt-8">
        <p className={`font-sans font-medium leading-[1.45] ${isFeature ? 'text-[16px] md:text-[18px] max-w-xl' : 'text-[14px] md:text-[15px]'} ${testimonial.tone === 'ink' || testimonial.tone === 'blue' ? 'text-current/90' : 'text-ink/85'}`}>
          {testimonial.body}
        </p>
        <div className={`mt-5 pt-4 border-t-[2px] font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.08em] ${testimonial.tone === 'ink' || testimonial.tone === 'blue' ? 'border-current/40 text-current/80' : 'border-ink/30 text-ink/70'}`}>
          {testimonial.name}
        </div>
      </div>
    </motion.article>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-paper text-ink py-20 md:py-28 lg:py-32 px-4 md:px-8 lg:px-10 border-b-[2px] border-ink overflow-hidden">
      <div className="max-w-[1180px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-10 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-[760px]">
            <Reveal direction="up" className="w-full">
              <h2 className="font-display font-black text-[clamp(42px,12vw,72px)] md:text-[clamp(64px,8vw,96px)] lg:text-[104px] uppercase leading-[0.88] tracking-[-0.06em] text-ink break-words">
                CLIENT WORDS,<br />
                WITHOUT THE<br />
                POLISH.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.1} className="mt-6 md:mt-7 max-w-xl">
              <p className="font-sans text-[16px] md:text-[18px] font-medium leading-[1.45] text-ink/85">
                A few notes from founders and teams who needed their websites to look sharper, clearer, and harder to ignore.
              </p>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15}>
            <div className="bg-orange text-ink font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-wider px-3 py-2 border-[2px] border-ink shadow-[3px_3px_0px_#050505] -rotate-[3deg] w-fit lg:max-w-[230px]">
              NO FAKE SMILES. JUST FEEDBACK.
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.label} testimonial={testimonial} index={index} />
          ))}
        </div>

        <Reveal direction="up" delay={0.1} className="mt-10 md:mt-12 lg:mt-14">
          <div className="border-[2px] border-ink bg-[#F1F1F1] shadow-[6px_6px_0px_#050505] px-5 py-5 md:px-7 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <p className="font-display font-black text-[24px] md:text-[32px] lg:text-[38px] uppercase leading-[0.95] tracking-[-0.04em] text-ink">
              READY TO MAKE YOUR WEBSITE SOUND LIKE THIS?
            </p>
            <a href="#inquiry" className="inline-flex items-center justify-center bg-ink text-lime border-[2px] border-ink h-[50px] md:h-[54px] px-6 md:px-8 font-mono text-[12px] md:text-[13px] font-bold uppercase tracking-wider hover:bg-lime hover:text-ink transition-colors shadow-[4px_4px_0px_#050505] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none w-fit shrink-0">
              START A PROJECT <ArrowRight size={16} strokeWidth={3} className="ml-2" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
