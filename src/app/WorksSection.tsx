"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import WorksStack, { BAND_COUNT } from "./WorksStack";

export default function WorksSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const projectNumber = expanded === null ? null : BAND_COUNT - expanded;
  const projectLabel = projectNumber === null ? "" : String(projectNumber).padStart(3, "0");

  return (
    <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-[98px]">
      <div className="flex flex-col items-start gap-[20px] text-white">
        <p className="whitespace-nowrap font-archivo-expanded text-[40px] font-bold">WORKS</p>
        <div
          className="font-roboto text-[16px] tracking-[-0.32px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="whitespace-nowrap">Lorem ipsum dolor sit amet, consectetuer  adipiscing elit, sed </p>
          <p className="whitespace-nowrap">diam nonummy nibh tincidunt ut laoreet aliquam erat volutpat. </p>
          <p className="whitespace-nowrap">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam</p>
          <p className="whitespace-nowrap">corper suscipit lobortis nisl ut aliquip ex ea consequat. </p>
        </div>
        <AnimatePresence>
          {projectNumber !== null && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-center justify-center whitespace-nowrap rounded-[40px] border border-[#6c97e3] bg-gradient-to-r from-[rgba(156,192,255,0.3)] to-[rgba(101,155,246,0.3)] px-[20px] py-[8px] font-roboto text-[16px] font-medium text-white"
            >
              View Project {projectLabel}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className="relative flex shrink-0 items-center justify-center">
        <WorksStack expanded={expanded} onExpandedChange={setExpanded} />
      </div>
    </div>
  );
}
