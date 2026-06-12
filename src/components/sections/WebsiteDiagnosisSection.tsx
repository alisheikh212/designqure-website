import React from 'react';
import { Reveal } from '@/components/ui/Motion';
import { ArrowRight } from 'lucide-react';

const CHECKLIST_ITEMS = [
  'First impression audit',
  'Homepage clarity',
  'Trust & credibility gaps',
  'Mobile experience',
  'CTA & lead flow',
  'Visual positioning',
];

interface Props {
  onRequestDiagnosis: () => void;
}

export function WebsiteDiagnosisSection({ onRequestDiagnosis }: Props) {
  return (
    <section
      id="diagnosis"
      className="bg-paper border-b-[2px] border-ink py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-10 overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">

          {/* LEFT COLUMN */}
          <div className="w-full lg:w-[42%] flex flex-col">
            <Reveal direction="up">
              <div className="inline-flex items-center font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.08em] bg-orange text-ink px-3 py-[6px] border-[2px] border-ink shadow-[2px_2px_0px_#050505] -rotate-[3deg] origin-bottom-left mb-6 w-fit">
                NOT SURE IF YOUR WEBSITE IS THE PROBLEM?
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="font-display font-black text-[clamp(36px,9vw,54px)] md:text-[clamp(40px,6vw,58px)] lg:text-[54px] uppercase leading-[0.88] tracking-[-0.04em] text-ink mb-6 max-w-full break-words">
                GET YOUR<br />
                WEBSITE<br />
                DIAGNOSED<br />
                BEFORE YOU<br />
                SPEND MONEY<br />
                REDESIGNING IT.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="font-sans text-[15px] md:text-[16px] font-medium leading-[1.5] text-ink/75 max-w-[360px]">
                Your website may not look broken. But it might be making people trust you less, compare you harder, and leave faster.
              </p>
            </Reveal>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[58%]">
            <Reveal direction="left" delay={0.15}>
              <div className="bg-[#F5F4EF] border-[2px] border-ink shadow-[8px_8px_0px_#050505]">

                {/* Card header */}
                <div className="border-b-[2px] border-ink px-6 md:px-8 py-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.08em] text-ink">
                    WHAT WE&apos;LL REVIEW
                  </span>
                  <span className="bg-lime text-ink font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 border-[2px] border-ink shadow-[2px_2px_0px_#050505]">
                    FREE
                  </span>
                </div>

                {/* Checklist rows */}
                <div className="flex flex-col">
                  {CHECKLIST_ITEMS.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-ink/10 last:border-b-0 px-6 md:px-8 py-4 flex items-center gap-4 group hover:bg-lime transition-colors cursor-default"
                    >
                      <span className="font-mono text-[10px] font-bold text-ink/35 shrink-0 w-6 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans text-[14px] md:text-[15px] font-bold text-ink leading-tight">
                        {item}
                      </span>
                      <ArrowRight
                        size={12}
                        strokeWidth={2.5}
                        className="ml-auto text-ink/20 group-hover:text-ink group-hover:translate-x-0.5 transition-transform shrink-0"
                      />
                    </div>
                  ))}
                </div>

                {/* CTA footer */}
                <div className="border-t-[2px] border-ink px-6 md:px-8 py-6 bg-paper">
                  <button
                    type="button"
                    onClick={onRequestDiagnosis}
                    className="w-full bg-ink text-lime border-[2px] border-ink h-[52px] md:h-[56px] flex items-center justify-center font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-[#1A1A1A] transition-colors group shadow-[4px_4px_0px_#050505] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                  >
                    REQUEST FREE DIAGNOSIS
                    <ArrowRight size={14} strokeWidth={3} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink/35 text-center mt-3">
                    No commitment. No sales pitch.
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
