import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextSplitProps {
  children: string;
  className?: string;
  charClassName?: string;
  topClassName?: string;
  bottomClassName?: string;
  maxMove?: number;
  falloff?: number;
}

export const TextSplit = ({
  children,
  className,
  charClassName = "h-[1em]",
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
    <div className={cn("relative flex items-center justify-start", className)}>
      {children.split("").map((char, index) => {
        const offset = getOffset(index);
        const displayChar = char === " " ? " " : char;

        return (
          <div
            key={`${char}-${index}`}
            className={cn("relative flex flex-col w-auto leading-none overflow-hidden", charClassName)}
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
          </div>
        );
      })}
    </div>
  );
};
