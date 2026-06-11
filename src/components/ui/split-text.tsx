import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextSplitProps {
  children: string;
  className?: string;
  // must include both h-[*em] and leading-[*] matching h1 line-height
  charClassName?: string;
  topClassName?: string;
  bottomClassName?: string;
  maxMove?: number;
  falloff?: number;
}

export const TextSplit = ({
  children,
  className,
  charClassName = "h-[1em] leading-none",
  topClassName,
  bottomClassName,
  maxMove = 50,
  falloff = 0.3,
}: TextSplitProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const getOffset = (index: number) => {
    if (hoverIndex === null) return 0;
    const distance = Math.abs(index - hoverIndex);
    return Math.max(0, maxMove * (1 - distance * falloff));
  };

  return (
    <span className={cn("inline-flex items-center", className)}>
      {children.split("").map((char, index) => {
        const offset = getOffset(index);
        const displayChar = char === " " ? " " : char;

        return (
          <span
            key={`${char}-${index}`}
            className={cn("inline-flex flex-col overflow-hidden w-auto", charClassName)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <motion.span
              initial={false}
              animate={{ y: `-${offset}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn("flex-1 overflow-hidden", topClassName)}
            >
              {displayChar}
            </motion.span>

            <motion.span
              initial={false}
              animate={{ y: `${offset}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn("flex-1 overflow-hidden", bottomClassName)}
            >
              <span className="block -translate-y-1/2">{displayChar}</span>
            </motion.span>
          </span>
        );
      })}
    </span>
  );
};
