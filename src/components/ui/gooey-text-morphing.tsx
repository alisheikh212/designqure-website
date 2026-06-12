"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
  align?: "left" | "center";
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
  align = "center",
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el1 = text1Ref.current;
    const el2 = text2Ref.current;
    if (!el1 || !el2) return;

    const n = texts.length;

    // el2 = currently showing, el1 = incoming next text
    // Set initial text immediately so there's no blank delay on first render
    let showingEl = el2;
    let incomingEl = el1;
    let currentIdx = 0;

    el2.textContent = texts[0];
    el2.style.opacity = "100%";
    el2.style.filter = "";
    el1.textContent = texts[1 % n];
    el1.style.opacity = "0%";
    el1.style.filter = "blur(8px)";

    let phase: "cooling" | "morphing" = "cooling";
    let elapsed = 0;
    let lastTime = Date.now();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const now = Date.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      elapsed += dt;

      if (phase === "cooling") {
        if (elapsed >= cooldownTime) {
          elapsed -= cooldownTime;
          phase = "morphing";
        }
        return;
      }

      // showingEl fades out, incomingEl fades in
      const t = Math.min(elapsed / morphTime, 1);
      const fOut = Math.max(1 - t, 0.001);
      const fIn = Math.max(t, 0.001);

      showingEl.style.opacity = `${Math.pow(fOut, 0.4) * 100}%`;
      showingEl.style.filter = `blur(${Math.min(8 / fOut - 8, 100)}px)`;
      incomingEl.style.opacity = `${Math.pow(fIn, 0.4) * 100}%`;
      incomingEl.style.filter = `blur(${Math.min(8 / fIn - 8, 100)}px)`;

      if (t >= 1) {
        incomingEl.style.opacity = "100%";
        incomingEl.style.filter = "";
        showingEl.style.opacity = "0%";
        showingEl.style.filter = "blur(8px)";

        // Swap roles
        const tmp = showingEl;
        showingEl = incomingEl;
        incomingEl = tmp;

        currentIdx = (currentIdx + 1) % n;
        incomingEl.textContent = texts[(currentIdx + 1) % n];

        elapsed = 0;
        phase = "cooling";
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [texts, morphTime, cooldownTime]);

  const isLeft = align === "left";

  return (
    // The SVG threshold filter MUST be on the same element that is the
    // containing block (position:relative) for the absolute spans.
    // Putting it on a child div lets the absolute spans escape its render context.
    <div
      className={cn("relative", className)}
      style={{ filter: "url(#gooey-morph)" }}
    >
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="gooey-morph">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <span
        ref={text1Ref}
        className={cn(
          "absolute inline-block select-none",
          isLeft ? "text-left" : "text-center",
          textClassName
        )}
      />
      <span
        ref={text2Ref}
        className={cn(
          "absolute inline-block select-none",
          isLeft ? "text-left" : "text-center",
          textClassName
        )}
      />
    </div>
  );
}
