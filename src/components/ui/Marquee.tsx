import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface MarqueeProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

export function Marquee({ text, className, containerClassName }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden w-full border-y-2 border-ink py-4 bg-lime", containerClassName)}>
      <motion.div
        className="flex whitespace-nowrap min-w-full"
        animate={{
          x: [0, -1035], // Approximate scroll amount. In a real app we'd measure width.
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className={cn("font-display font-bold text-2xl tracking-widest text-ink mx-4", className)}>
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
