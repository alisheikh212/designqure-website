import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-paper border-b border-ink h-16 flex items-center">
      <div className="w-full px-4 md:px-8 lg:px-10 flex items-center justify-between h-full">
        
        {/* LOGO */}
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="font-sans font-black text-[19px] tracking-tight relative z-50">
          <span className="text-ink">Design</span><span className="text-blue">Qure</span>
        </a>
        
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
          {LINKS.map(link => {
            return (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "font-mono font-semibold text-[10px] uppercase tracking-[0.14em] transition-colors hover:text-blue text-ink"
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center h-full">
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="hidden md:flex items-center justify-center font-mono text-[10px] tracking-[0.08em] font-semibold uppercase bg-ink text-paper px-[22px] h-[32px] transition-transform hover:-translate-y-[2px]"
          >
            Start a Project <ArrowRight size={12} strokeWidth={3} className="ml-1" />
          </a>
          
          <button 
            className="md:hidden z-50 relative p-3 -mr-3"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed top-16 left-0 w-full bg-paper z-40 flex flex-col border-b border-ink overflow-hidden"
          >
            <nav className="flex flex-col w-full">
              {LINKS.map((link, index) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`font-mono text-base font-bold uppercase tracking-widest text-ink hover:text-blue w-full px-6 py-4 ${index !== 0 ? 'border-t border-ink/10' : ''}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-ink w-full px-6 py-4 pb-6 bg-paper">
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 font-mono text-[14px] font-bold uppercase text-paper bg-ink py-4 border border-ink hover:bg-lime hover:text-ink transition-colors"
                >
                  Start a Project <ArrowRight size={16} strokeWidth={3} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
