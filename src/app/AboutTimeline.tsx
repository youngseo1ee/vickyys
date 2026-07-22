"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const timelineLine = "/images/timeline-line-2.svg";
const timelineDotActive = "/images/timeline-dot-active.svg";
const timelineDotInactive = "/images/timeline-dot-inactive.svg";
const glowHero = "/images/glow-hero.svg";
const gradientEdge = "/images/about-gradient-edge.png";

const LINE_HEIGHT = 698.5;
const ACTIVE_TOP = 342;
const NEXT_TOP = 616;
const RISE_OFFSET = 40;
const TRANSITION = { duration: 0.45, ease: "easeInOut" as const };
const ACTIVE_COLOR = "#b0becb";
const NEXT_COLOR = "rgba(138,148,158,0.5)";

const timelineItems = [
  {
    year: "2023",
    photo: "/images/about-bg-2023-v2.png",
    cropPercent: { top: "-146.31%", left: "-1.54%", width: "141.38%", height: "401.69%" },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore terefeug ait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    year: "2024",
    photo: "/images/about-bg-2024-v2.png",
    cropPercent: { top: "-162.81%", left: "-17.43%", width: "117.44%", height: "331.48%" },
    paragraph:
      "dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut enimenzril dfd laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci ridfdf ullamcorper suscipit loero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore terefeug ait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer enim adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. bortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vh euismodh euismod.",
  },
  {
    year: "2025",
    photo: "/images/about-bg-2025-v2.png",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore terefeug ait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    year: "2026",
    photo: "/images/work-photo-new-3.png",
    tightCrop: true,
    paragraph:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore terefeug ait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

export default function AboutTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = timelineItems.length;
  const active = timelineItems[activeIndex];
  const nextIndex = (activeIndex + 1) % total;
  const next = timelineItems[nextIndex];

  const prefersReducedMotion = useReducedMotion();
  const transition = prefersReducedMotion ? { duration: 0.01 } : TRANSITION;
  const rise = prefersReducedMotion ? 0 : RISE_OFFSET;
  const textEnter = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 };
  const textExit = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -24 };

  const goToNext = () => setActiveIndex(nextIndex);

  const rows = [
    { item: active, isActive: true },
    { item: next, isActive: false },
  ];

  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={active.year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className="absolute inset-0"
          >
            {active.cropPercent ? (
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  src={active.photo}
                  className="absolute max-w-none object-cover opacity-[15%]"
                  style={active.cropPercent}
                />
              </div>
            ) : (
              <div
                className={active.tightCrop ? "absolute inset-x-0 w-full" : "absolute inset-0"}
                style={active.tightCrop ? { top: -948, height: 2558 } : undefined}
              >
                <Image alt="" src={active.photo} fill sizes="100vw" className="object-cover opacity-[15%]" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-[1440px] overflow-hidden">
        <div className="absolute -left-[308px] top-[33px] h-[804px] w-[1440px]">
          <Image alt="" src={glowHero} fill sizes="1440px" />
        </div>
      </div>

      <img
        alt=""
        src={gradientEdge}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[126px] w-full object-cover"
      />
      <img
        alt=""
        src={gradientEdge}
        className="pointer-events-none absolute inset-x-0 top-0 h-[126px] w-full rotate-180 object-cover"
      />

      <div className="relative flex items-center gap-[40px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="relative col-1 row-1 ml-[6px] w-0" style={{ height: LINE_HEIGHT }}>
            <div className="absolute inset-[0_-0.6px]">
              <img alt="" src={timelineLine} className="block h-full w-full" />
            </div>
          </div>

          <AnimatePresence initial={false}>
            {rows.map(({ item, isActive }) => (
              <motion.div
                key={item.year}
                role={isActive ? undefined : "button"}
                tabIndex={isActive ? undefined : 0}
                onClick={isActive ? undefined : goToNext}
                onKeyDown={
                  isActive
                    ? undefined
                    : (e) => {
                        if (e.key === "Enter" || e.key === " ") goToNext();
                      }
                }
                aria-label={isActive ? undefined : `${item.year}년으로 이동`}
                initial={{ opacity: 0, y: NEXT_TOP + rise }}
                animate={{ opacity: 1, y: isActive ? ACTIVE_TOP : NEXT_TOP }}
                exit={{ opacity: 0, y: ACTIVE_TOP - rise }}
                transition={transition}
                className={`relative col-1 row-1 flex items-center gap-[20px] ${
                  isActive ? "" : "cursor-pointer"
                }`}
              >
                <img
                  alt=""
                  src={isActive ? timelineDotActive : timelineDotInactive}
                  className="block size-[12px]"
                />
                <motion.p
                  animate={{ color: isActive ? ACTIVE_COLOR : NEXT_COLOR }}
                  transition={transition}
                  className="whitespace-nowrap font-suit text-[18px] font-semibold tracking-[-0.36px]"
                >
                  {item.year}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex w-[713px] flex-col items-start justify-center gap-[40px] text-white">
          <p className="whitespace-nowrap font-archivo-expanded text-[40px] font-bold">
            ABOUT <br />
            ME
          </p>
          <div className="relative min-h-[175px] w-full">
            <AnimatePresence initial={false}>
              <motion.p
                key={active.year}
                initial={textEnter}
                animate={{ opacity: 1, y: 0 }}
                exit={textExit}
                transition={transition}
                className="absolute inset-0 font-roboto text-[16px] tracking-[-0.32px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {active.paragraph}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
