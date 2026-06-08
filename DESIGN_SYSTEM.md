# DesignQure - Design System & Handoff Guide

This document is the source of truth for the DesignQure website's visual style. It is written to help future AI assistants, developers, and editors maintain the exact same design language when making updates, adding new sections, or modifying layouts.

## 1. Brand Summary
DesignQure is an agency that designs and builds sharp, premium digital experiences. The brand feels confident, bold, unapologetic, and fast-moving. The website is a digital reflection of this personality. It is not corporate or soft. It is designed to stand out through striking contrast, oversized typography, strong grid structures, and "brutalist but polished" aesthetics.

## 2. Visual Direction
The visual style is characterized by the following traits:
- **Brutalist:** Exposed borders, harsh lines, hard shadows, untamed structures.
- **Editorial:** High reliance on structural layout and typography as the primary visual medium.
- **Bold & Graphic:** Uses extreme contrast, large lettering, and vivid accent colors.
- **Compact & Dense:** Information is structured in tight grids or bento-style layouts.
- **High Contrast:** Dark themes or black/off-white compositions.
- **NOT SaaS:** Avoid soft UI, rounded corners, soft drop shadows, or generic illustrations.
- **NOT Fintech:** Avoid corporate blues, clinical spacing, or overly sterile interfaces.
- **NOT Corporate:** Maintain raw edge and creative energy; nothing should look like a template.

## 3. Color System
These are the exact colors driving the interface. **Do not introduce new shades or gradients.**

- **Ink (Black):** `#1A1A1A` — Used for text, borders, hard shadows, and dark backgrounds.
- **Paper (Off-White):** `#F3F1EA` — The primary website background color.
- **Electric Lime:** `#C9FF00` — Primary accent. Used for text highlights, CTA cards, specific badges.
- **Vibrant Orange:** `#FF4B1F` — Secondary accent. Used for marquee strips, urgent labels, notification badges.
- **Electric Blue:** `#245BFF` — Tertiary accent. Used for select full-bleed sections, specific project cards, or minor labels.
- **Muted (Grey):** `#DAD8CF` / `#F1F1F1` / `#D9D9D9` — Used for secondary panel backgrounds, placeholders, or borders.

## 4. Typography System
Typography is the most critical design element.

**Fonts:**
- **Display Font:** `Archivo Black` (or similar bold sans) — Used for massive headlines and numbers.
- **Body Font:** `Inter` — Used for paragraphs, structural UI copy structure, and usability text.
- **Mono/Label Font:** `Space Mono` — Used for micro-copy, timestamps, category tags, internal labels, buttons.

**Styling Rules:**
- **Headings:** Always uppercase, tracking-tighter (`-0.04em` to `-0.06em`), extremely tight line-height (`0.85` to `0.95`).
- **Paragraphs:** Medium weight (`font-medium`), well-spaced line-height (`1.4` to `1.5`), ink color (or `ink/90` / `ink/80` for readability).
- **Labels:** Mono font, bold, uppercase, strictly tracked out (`tracking-wider` to `tracking-widest`), small size (`10px` to `12px`).
- **Marquee Text:** Mono or narrow display, uppercase, spaced out, flanked by bullet points (`·`).
- **Uppercase Rule:** Use uppercase aggressively on navigation, labels, buttons, and big headers. Use sentence case strictly for paragraph/body text.

## 5. Layout System
The layout mimics technical blueprints and editorial magazines.

- **Section Spacing:** Generous vertical padding (`py-20` to `py-32` on desktop, `py-12` to `py-16` on mobile).
- **Grid Behavior:** Underlying visible grid lines (`bg-[length:40px_40px] linear-gradient...`) used on hero or specific panels. Real structural grids for features/portfolio.
- **Desktop Layouts:** Use wide 12-column grids (`max-w-[1180px]` to `max-w-7xl`). Embrace deliberate asymmetry.
- **Tablet Layouts:** Maintain standard 2-column or tight 3-column structures. Prevent breaking text layouts.
- **Mobile Layouts:** Stack neatly, maintain padding (`px-4`), avoid edge-bleeding unless intentional (like marquees or specific full-width background bars).
- **Alignment:** Only center elements when making a loud, single-focal-point statement (like a massive CTA). Left-align complex structures and cards.

## 6. Component Rules
- **Buttons (Links):** Sharp rectangles. Solid ink background with lime text, or solid lime with ink text. `2px` ink borders. No rounded corners. Hover effects are subtle transform/translates or color swaps. Arrow icons (`→`, `↗`) are highly encouraged.
- **Cards:** White, Paper, or Accent background. `border-[2px] border-ink`. Hard offset drop shadows (e.g., `shadow-[6px_6px_0px_#1A1A1A]`). **Zero `border-radius`** (unless drawing literal circles).
- **Portfolio Cards:** Sharp bordered images with tracking labels. Title, Mono category, brief description. Hover features a zoomed image or shifted arrow, with hard shadows reacting on hover.
- **Service Cards:** Often feature oversized typography, list items, hard borders. Tilted accent sticker badges (`-rotate-[3deg]`) overlayed on top.
- **CTA Blocks:** Edge-to-edge full width. Plain, clean backgrounds (`#F1F1F1` or `#F3F1EA`). No inset borders, no visible background grid underneath. Simply massive center text.
- **Marquee Bars:** Narrow strips running edge-to-edge globally. Bold text looping continuously with `border-y-2 border-ink`.
- **Process Timeline:** Center vertical line (`2px border-ink`). Alternating left/right brutalist cards. Numbered square badges directly on the line.
- **Navigation:** Thick bottom border. Clean, minimal links. Usually fixed or sticky.
- **Footer:** Massive block text, large brutalist links, dense typographic footer.

## 7. Animation Rules
Motion should feel mechanical, deliberate, and snappy.

- **Scroll Reveals:** Use subtle fade-in and slight slide-up (`y: 40px` to `0`).
- **Hovers:** Sharp, physical movement. Buttons/cards shift `-translate-y-1 translate-x-1` and hard shadows shrink tightly or disappear.
- **Marquee Speed:** Linear, constant, CSS keyframes. Typically `40s` to `60s` duration for smooth reading.
- **Hero/Text Movements:** Gentle, continuous floating/jiggling using pure `ease-in-out` loops on tiny increments (e.g. `1.5px` shift, `0.3deg` rotation), but disabled via `prefers-reduced-motion`.
- **What to Avoid:** No bouncy spring animations. No slow, dreamy dissolves. No heavy parallax that breaks sections. Keep it tight.

## 8. Responsive Rules
The system must never break at different screen widths. Keep styles highly contextual.

- **Desktop (`lg`, `min-[900px]`):** Massive text, complex asymmetric grids, visible rigid structure.
- **Tablet (`md`):** Reduce text sizes using `clamp()`. Scale down cards but maintain the multi-column or alternating structural logic (like the vertical timeline).
- **Mobile (`sm` / default):** 
  - Switch to standard stacking for standard sections.
  - For structural elements like the timeline, keep the visual system (e.g., center line with mini-cards) rather than just stacking a boring list.
  - Shrink hard shadows (e.g., `8px` goes to `4px`).
  - No horizontal scrolling overflow (`overflow-x-hidden` on body).
  - Simplify animations or rely purely on layout.

## 9. Do Not Do List (Strict Warnings)
- **DO NOT** use rounded corners anywhere (no `rounded-md`, `rounded-full` etc. except for actual circles).
- **DO NOT** use soft, blurry box-shadows (`box-shadow: 0 4px 6px rgba(0,0,0,0.1)`). Use solid offsets (`box-shadow: 4px 4px 0px #1A1A1A`).
- **DO NOT** use modern SaaS gradients (no purple/blue glows, no mesh gradients).
- **DO NOT** center everything. Centering is exclusively for massive, focused Hero or CTA sections.
- **DO NOT** use default Bootstrap/Tailwind standard spacings blindly; use the custom dense typography rules.
- **DO NOT** split massive uppercase words aggressively (e.g. `BUILDING.` should stay on one line).

## 10. Future Change Instructions (Before Making Any Change)
Future AI Tools, Developers, or Editors:
1. **Inspect Existing Components:** Look at `WorkSection.tsx`, `ProcessSection.tsx`, and `ContactFaqSection.tsx` before writing new code. Emulate their exact class configurations.
2. **Reuse Existing Utilities:** Use the exact colors defined in `tailwind` (`bg-ink`, `bg-paper`, `text-lime`) and explicitly defined fonts (`font-display`, `font-sans`, `font-mono`).
3. **Follow the Architecture:** Use standard `<Reveal>` wrappers from `Motion.tsx` for entry animations. 
4. **Test Breakpoints:** Always apply distinct `md:` and `lg:` classes. Rely on `clamp()` for fluid typography where possible.
5. **DO NOT deviate:** You are maintaining a brutalist, editorial system. Do not improvise by adding generic UI kit pieces.

## 11. Example Prompt for Future Edits
_Copy and paste this prompt when asking an AI (like Claude Code, Cursor, or Codex) to build a new section for this site:_

> "I need you to build a new [Describe Section] for the DesignQure website. Before generating any code, strictly review the `DESIGN_SYSTEM.md` file in the root directory. You must use the exact styling, Tailwind classes, fonts, and aggressive brutalist layout patterns described in the design system. Do not use rounded corners, soft shadows, or SaaS aesthetics. Ensure the component utilizes existing colors (ink, paper, lime, orange) and uses hard offset box shadows. Build it responsive with explicit mobile, tablet, and desktop rules, avoiding generic auto-stacking if a more structural brutalist layout works better."
