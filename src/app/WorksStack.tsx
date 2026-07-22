"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

// Geometry sampled from the Figma vectors (Rectangle 1321319249..248):
// topWidth(i) = 466.667 + 33.3333*i, bottomWidth(i) = 400.483 + 25.468*i,
// height(i) = 202.232 + 14.445*i, y(i) = 74.5817*i  (i = 0 back/smallest .. 7 front/largest)
export const BAND_COUNT = 8;
const SCALE = 0.95;
const EASE = [0.22, 1, 0.36, 1] as const;
const MAX_OFFSET = 26;
const GAP_BOOST = 16;
const ROTATE_MAX = 5;
const Y_STEP = 74.5817 * SCALE - 30;

const PHOTOS = [
  "/images/work-photo-1.png",
  "/images/work-photo-2.png",
  "/images/work-photo-3.png",
  "/images/work-photo-4.png",
  "/images/work-photo-5.png",
  "/images/work-photo-6.png",
  "/images/work-photo-7.png",
  "/images/work-photo-8.png",
];

type Band = { topW: number; botW: number; h: number; y: number };

const BANDS: Band[] = Array.from({ length: BAND_COUNT }, (_, i) => ({
  topW: (466.667 + 33.3333 * i) * SCALE,
  botW: (400.483 + 25.468 * i) * SCALE,
  h: (202.232 + 14.445 * i) * SCALE,
  y: Y_STEP * i,
}));

const CONTAINER_W = BANDS[BAND_COUNT - 1].topW;
const CONTAINER_H = BANDS[BAND_COUNT - 1].y + BANDS[BAND_COUNT - 1].h + GAP_BOOST * (BAND_COUNT - 1);

function bandOffsetScale(i: number) {
  return 0.35 + 0.65 * (i / (BAND_COUNT - 1));
}

function bandSpring(i: number) {
  return { stiffness: 110 + i * 30, damping: 16 + i * 1.4 };
}

function StackBand({
  index,
  band,
  photo,
  isExpanded,
  onClick,
  mvX,
  mvY,
  mvHover,
}: {
  index: number;
  band: Band;
  photo: string;
  isExpanded: boolean;
  onClick: () => void;
  mvX: ReturnType<typeof useMotionValue<number>>;
  mvY: ReturnType<typeof useMotionValue<number>>;
  mvHover: ReturnType<typeof useMotionValue<number>>;
}) {
  const springCfg = bandSpring(index);
  const offsetScale = bandOffsetScale(index);
  const sx = useSpring(mvX, springCfg);
  const sy = useSpring(mvY, springCfg);
  const hoverSpread = useSpring(mvHover, { stiffness: 170, damping: 24 });

  const px = useTransform(sx, (v) => v * MAX_OFFSET * offsetScale);
  const py = useTransform([sy, hoverSpread], ([syVal, spreadVal]: number[]) => {
    return syVal * MAX_OFFSET * offsetScale * 0.55 + spreadVal * index * GAP_BOOST;
  });
  const rotate = useTransform(sx, (v) => v * ROTATE_MAX * offsetScale);

  const width = isExpanded ? CONTAINER_W : band.topW;
  const height = isExpanded ? BANDS[BAND_COUNT - 1].h + 100 : band.h;
  const insetPct = isExpanded ? 0 : ((band.topW - band.botW) / 2 / band.topW) * 100;
  const bottomEdge = band.y + band.h;
  const top = isExpanded ? bottomEdge - height : band.y;
  const left = (CONTAINER_W - width) / 2;

  return (
    <motion.button
      type="button"
      aria-label={`work item ${index + 1}`}
      onClick={onClick}
      className="absolute overflow-hidden bg-[#d9d9d9]"
      style={{
        zIndex: isExpanded ? 50 : index,
        boxShadow: "0 -14px 22px rgba(0,0,0,0.2)",
        x: isExpanded ? 0 : px,
        y: isExpanded ? 0 : py,
        rotate: isExpanded ? 0 : rotate,
      }}
      initial={false}
      animate={{
        width,
        height,
        top,
        left,
        clipPath: `polygon(0% 0%, 100% 0%, ${100 - insetPct}% 100%, ${insetPct}% 100%)`,
      }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <img alt="" src={photo} className="pointer-events-none absolute inset-0 size-full object-cover" />
    </motion.button>
  );
}

export default function WorksStack({
  expanded,
  onExpandedChange,
}: {
  expanded: number | null;
  onExpandedChange: (index: number | null) => void;
}) {
  const setExpanded = onExpandedChange;
  const containerRef = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const mvHover = useMotionValue(0);

  useEffect(() => {
    if (expanded === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expanded, setExpanded]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mvX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mvY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };

  const handleMouseEnter = () => {
    mvHover.set(1);
  };

  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
    mvHover.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ width: CONTAINER_W, height: CONTAINER_H }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            key="catcher"
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
          />
        )}
      </AnimatePresence>

      {BANDS.map((band, i) => (
        <StackBand
          key={i}
          index={i}
          band={band}
          photo={PHOTOS[i]}
          isExpanded={expanded === i}
          onClick={() => setExpanded(expanded === i ? null : i)}
          mvX={mvX}
          mvY={mvY}
          mvHover={mvHover}
        />
      ))}
    </div>
  );
}
