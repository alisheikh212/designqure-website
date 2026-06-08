import React from 'react';

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-ink text-paper border-t border-lime py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-widest text-paper">
              DESIGNQURE
            </h2>
            <div className="font-mono text-xs uppercase text-paper/50">
              <p>DesignQure © 2026.</p>
              <p>Built for brands with taste.</p>
            </div>
          </div>

          <div>
            <nav className="grid grid-cols-2 gap-x-12 gap-y-4 font-mono text-xs font-bold uppercase tracking-widest">
              <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-lime transition-colors">Home</a>
              <a href="#work" onClick={(e) => handleScroll(e, '#work')} className="hover:text-lime transition-colors">Work</a>
              <a href="#process" onClick={(e) => handleScroll(e, '#process')} className="hover:text-lime transition-colors">Process</a>
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-lime transition-colors">About</a>
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-lime transition-colors">Contact</a>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}
