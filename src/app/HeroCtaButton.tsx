"use client";

import { motion, useReducedMotion } from "motion/react";

export default function HeroCtaButton() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <a href="#about" className="relative block overflow-hidden rounded-[40px] p-[1px]">
      <motion.div
        className="absolute inset-[-150%]"
        style={{
          background:
            "conic-gradient(from 0deg, #6c97e3 0deg, #eaf1ff 18deg, #6c97e3 40deg, #6c97e3 360deg)",
        }}
        initial={{ rotate: 0 }}
        animate={prefersReducedMotion ? { rotate: 0 } : { rotate: 360 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 3.5, repeat: Infinity, ease: "linear" }
        }
      />
      <div
        className="relative flex items-center justify-center rounded-[40px] bg-[#080808] px-[40px] py-[12px]"
        style={{ backgroundImage: "linear-gradient(to right, rgba(156,192,255,0.3), rgba(101,155,246,0.3))" }}
      >
        <p className="whitespace-nowrap font-roboto text-[18px] font-medium text-white/90">
          Know Me More
        </p>
      </div>
    </a>
  );
}
