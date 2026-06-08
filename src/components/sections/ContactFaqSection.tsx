import React, { useState } from 'react';
import { Reveal } from '@/components/ui/Motion';
import { MessageSquare, Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-ink">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <h4 className="font-sans text-[18px] md:text-xl font-bold text-ink pr-8">{question}</h4>
        <div className="shrink-0 w-8 h-8 rounded-full border-2 border-ink flex items-center justify-center bg-paper group-hover:bg-lime transition-colors">
          {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-sans text-[15px] md:text-[16px] font-medium leading-relaxed text-ink/80 max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export function ContactFaqSection() {
  const [submissionState, setSubmissionState] = useState<'idle' | 'success' | 'error'>('idle');

  const encodeFormData = (formData: FormData) => {
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      params.append(key, String(value));
    }

    return params.toString();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmissionState('idle');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmissionState('success');
      form.reset();
    } catch (error) {
      setSubmissionState('error');
    }
  };

  return (
    <section id="inquiry" className="bg-[#F5F4EF] w-full border-b-[2px] border-ink">
      {/* ORANGE MARQUEE */}
      <div className="w-full max-w-[100vw] h-[48px] md:h-[64px] bg-orange border-b-[2px] border-ink overflow-hidden flex items-center shrink-0">
        <style>{`
          @keyframes marquee-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-fast {
            animation: marquee-fast 40s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-marquee-fast {
              animation-duration: 100s;
            }
          }
        `}</style>
        <div className="flex whitespace-nowrap animate-marquee-fast font-mono text-[13px] md:text-[18px] font-bold uppercase tracking-[0.05em] text-ink items-center mt-[1px] w-max">
           {[...Array(8)].map((_, i) => (
             <React.Fragment key={i}>
                LET'S BUILD SOMETHING GREAT <span className="mx-4 md:mx-6 opacity-50 relative -top-[1px]">·</span> 
                NO FLUFF, JUST DESIGN <span className="mx-4 md:mx-6 opacity-50 relative -top-[1px]">·</span> 
                CONTACT US <span className="mx-4 md:mx-6 opacity-50 relative -top-[1px]">·</span> 
             </React.Fragment>
           ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-10 py-20 md:py-28 lg:py-32">
        
        {/* CONTACT ROW */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24 md:mb-32 lg:mb-40">
           
           {/* LEFT OCLUMN - HEADING & CARD */}
           <div className="w-full lg:w-[45%] flex flex-col">
              <Reveal direction="up">
                <h2 className="font-display font-[900] text-[clamp(44px,11vw,92px)] md:text-[clamp(82px,9vw,110px)] lg:text-[100px] leading-[0.88] tracking-tighter text-ink uppercase mb-8 lg:mb-12 break-words">
                  TELL US<br/>
                  WHAT<br/>
                  YOU'RE<br/>
                  <span className="whitespace-nowrap" style={{ letterSpacing: '-0.04em' }}>BUILDING.</span>
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="relative mt-4">
                 <div className="bg-lime p-6 md:p-8 border-2 border-ink shadow-[6px_6px_0px_#050505] -rotate-[2deg] hover:rotate-0 transition-transform origin-bottom-left max-w-sm relative z-10">
                    <div className="w-10 h-10 border-2 border-ink rounded-full flex items-center justify-center bg-paper mb-4 shadow-[2px_2px_0px_#050505]">
                       <MessageSquare size={18} className="text-ink fill-ink/10" strokeWidth={2.5} />
                    </div>
                    <h4 className="font-display text-[22px] md:text-2xl font-bold uppercase tracking-tight text-ink mb-2 leading-tight">
                       Good websites start with honest details.
                    </h4>
                    <p className="font-sans text-[14px] md:text-[15px] font-medium leading-[1.45] text-ink/90">
                       Don't hold back. The more we know, the faster we can move.
                    </p>
                 </div>
              </Reveal>
           </div>

           {/* RIGHT COLUMN - FORM */}
           <div className="w-full lg:w-[55%] relative">
              <Reveal direction="up" delay={0.3} className="h-full">
                 <div className="relative bg-white border-2 border-ink p-8 md:p-12 shadow-[8px_8px_0px_#050505] h-full flex flex-col pt-16 mt-8 lg:mt-0">
                    {/* Floating Blue Tag */}
                    <div className="absolute top-0 right-8 -translate-y-1/2 rotate-[4deg]">
                       <div className="bg-blue text-white font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-wider px-4 py-2 border-2 border-ink shadow-[4px_4px_0px_#050505]">
                         PROJECT INQUIRY
                       </div>
                    </div>

                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5 w-full flex-grow"
                    >
                       <input type="hidden" name="form-name" value="contact" />
                       <p hidden>
                         <label>
                           Don&apos;t fill this out:
                           <input name="bot-field" />
                         </label>
                       </p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="flex flex-col">
                             <label className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-ink/80">Name</label>
                             <input name="name" type="text" placeholder="John Doe" className="w-full border border-ink/30 focus:border-ink p-3 outline-none font-sans text-sm md:text-base font-medium text-ink bg-transparent transition-colors placeholder:text-ink/30 rounded-none" />
                          </div>
                          <div className="flex flex-col">
                             <label className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-ink/80">Email</label>
                             <input name="email" type="email" placeholder="john@example.com" className="w-full border border-ink/30 focus:border-ink p-3 outline-none font-sans text-sm md:text-base font-medium text-ink bg-transparent transition-colors placeholder:text-ink/30 rounded-none" />
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                          <div className="flex flex-col">
                             <label className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-ink/80">Brand / Company</label>
                             <input name="brand" type="text" placeholder="Acme Corp" className="w-full border border-ink/30 focus:border-ink p-3 outline-none font-sans text-sm md:text-base font-medium text-ink bg-transparent transition-colors placeholder:text-ink/30 rounded-none" />
                          </div>
                          <div className="flex flex-col">
                             <label className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-ink/80">Current Website</label>
                             <input name="website" type="url" placeholder="https://" className="w-full border border-ink/30 focus:border-ink p-3 outline-none font-sans text-sm md:text-base font-medium text-ink bg-transparent transition-colors placeholder:text-ink/30 rounded-none" />
                          </div>
                       </div>
                       
                       <div className="flex flex-col mt-2">
                          <label className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-ink/80">Primary Service</label>
                          <select name="service" defaultValue="" className="w-full border border-ink/30 focus:border-ink p-3 outline-none font-sans text-sm md:text-base font-medium text-ink bg-transparent transition-colors cursor-pointer rounded-none">
                             <option value="" disabled>Select a service...</option>
                             <option value="website">Website Design</option>
                             <option value="landing-page">Landing Page</option>
                             <option value="shopify">Shopify Store</option>
                             <option value="other">Other</option>
                          </select>
                       </div>

                       <div className="flex flex-col mt-2">
                          <label className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-ink/80">Estimated Budget</label>
                          <input name="budget" type="text" placeholder="e.g. $5,000" className="w-full border border-ink/30 focus:border-ink p-3 outline-none font-sans text-sm md:text-base font-medium text-ink bg-transparent transition-colors placeholder:text-ink/30 rounded-none" />
                       </div>

                       <div className="flex flex-col mt-2 mb-4">
                          <label className="font-mono text-[11px] font-bold uppercase tracking-wider mb-2 text-ink/80">Message</label>
                          <textarea name="message" rows={3} placeholder="Tell us about your goals, timeline, and what's broken right now..." className="w-full border border-ink/30 focus:border-ink p-3 outline-none font-sans text-sm md:text-base font-medium text-ink bg-transparent transition-colors placeholder:text-ink/30 resize-none rounded-none"></textarea>
                       </div>

                       <button type="submit" className="w-full bg-ink text-lime border-2 border-ink h-[56px] md:h-[64px] flex items-center justify-center font-mono text-[14px] md:text-base font-bold uppercase tracking-wider hover:bg-[#111] transition-colors mt-auto group">
                          Submit Inquiry <span className="ml-3 text-lg font-normal group-hover:translate-x-1 transition-transform">→</span>
                       </button>
                       {submissionState === 'success' && (
                         <p className="font-sans text-sm md:text-base font-medium text-ink mt-2">
                           Thanks — your enquiry has been submitted.
                         </p>
                       )}
                       {submissionState === 'error' && (
                         <p className="font-sans text-sm md:text-base font-medium text-ink mt-2">
                           Something went wrong. Please try again.
                         </p>
                       )}
                    </form>
                 </div>
              </Reveal>
           </div>
        </div>


        {/* FAQ ROW */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 border-t-2 border-ink pt-16 md:pt-24 lg:pt-32">
           
           <div className="w-full lg:w-[35%] flex flex-col items-start px-2">
              <Reveal direction="up">
                 <h2 className="font-display font-[900] text-7xl md:text-8xl tracking-tighter uppercase leading-none mb-4 text-ink">
                   FAQ
                 </h2>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                 <div className="bg-orange border-2 border-ink px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider shadow-[2px_2px_0px_#050505] -rotate-[3deg]">
                   READ BEFORE SENDING
                 </div>
              </Reveal>
           </div>

           <div className="w-full lg:w-[65%] flex flex-col px-2">
              <Reveal direction="up" delay={0.2} className="w-full">
                 <div className="border-t-2 border-ink">
                    <FAQItem 
                      question="How soon can you start?"
                      answer="We don’t usually need weeks to get started. Once the scope, content, and direction are clear, we can often begin quickly. Focused website projects are usually wrapped within 7–10 working days, while the full process, including research and refinement, can typically fit within 10–15 working days, depending on complexity."
                    />
                    <FAQItem 
                      question="Do you work with startups?"
                      answer="Yes, absolutely. We work with startups, small brands, and growing businesses that need a sharp online presence without dragging the process for months. If the idea is clear, we can move fast."
                    />
                    <FAQItem 
                      question="What happens after I submit this?"
                      answer="We’ll review your inquiry and get back with the next step. If it feels like a good fit, we’ll map out the scope, timeline, required content, and the best way to move your project forward."
                    />
                    <FAQItem 
                      question="Do you only design websites?"
                      answer="No. Alongside websites, we also work on graphic design, brand identity, Amazon listing visuals, A+ Content, storefront creatives, and other e-commerce platform designs. Some projects are full brand-to-website builds, while others are focused design deliverables."
                    />
                 </div>
              </Reveal>
           </div>
           
        </div>

      </div>
    </section>
  );
}
