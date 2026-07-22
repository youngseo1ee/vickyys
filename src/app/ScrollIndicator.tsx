"use client";

import { motion, useReducedMotion } from "motion/react";

const scrollArrow = "/images/icon-scroll-arrow.svg";

export default function ScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute bottom-[40px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-[14px]">
      <p
        className="whitespace-nowrap font-roboto text-[14px] font-medium text-white/90"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Scroll to explore
      </p>
      <motion.img
        alt=""
        src={scrollArrow}
        className="block h-[19px] w-[18px]"
        initial={{ y: 0 }}
        animate={prefersReducedMotion ? { y: 0 } : { y: [0, 8, 0] }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </div>
  );
}
