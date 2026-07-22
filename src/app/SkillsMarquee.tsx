"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const iconFigma = "/images/icon-figma.svg";
const iconMidjourney = "/images/icon-midjourney.svg";
const iconFramer = "/images/icon-framer.svg";

const LG_SCALE = 40 / 24;

type Badge =
  | { kind: "icon"; src: string; width: number; height: number }
  | { kind: "text"; text: string; color: string };

type Skill = {
  id: string;
  label: string;
  bg: string;
  badge: Badge;
  description: string[];
  highlight?: boolean;
};

const skills: Skill[] = [
  {
    id: "figma",
    label: "Figma",
    bg: "bg-black",
    badge: { kind: "icon", src: iconFigma, width: 11.722, height: 16.744 },
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
      "magna aliquam erat volutpat.",
    ],
  },
  {
    id: "photoshop",
    label: "Photpshop",
    bg: "bg-[#001e36]",
    badge: { kind: "text", text: "Ps", color: "#33abff" },
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
      "magna aliquam erat volutpat.",
    ],
  },
  {
    id: "illustrator",
    label: "Illustrator",
    bg: "bg-[#330000]",
    badge: { kind: "text", text: "Ai", color: "#ff9a01" },
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
      "magna aliquam erat volutpat.",
    ],
  },
  {
    id: "aftereffect",
    label: "Aftereffect",
    bg: "bg-[#00005b]",
    badge: { kind: "text", text: "Ae", color: "#9999ff" },
    highlight: true,
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
      "magna aliquam erat volutpat.",
    ],
  },
  {
    id: "midjourney",
    label: "Midjourney",
    bg: "bg-[#111212]",
    badge: { kind: "icon", src: iconMidjourney, width: 16.174, height: 13.135 },
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
      "magna aliquam erat volutpat.",
    ],
  },
  {
    id: "indesign",
    label: "Indesign",
    bg: "bg-[#49021f]",
    badge: { kind: "text", text: "Id", color: "#fe3367" },
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
      "magna aliquam erat volutpat.",
    ],
  },
  {
    id: "framer",
    label: "Framer",
    bg: "bg-black",
    badge: { kind: "icon", src: iconFramer, width: 9.577, height: 14.366 },
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,",
      "sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
      "magna aliquam erat volutpat.",
    ],
  },
];

function SkillBadge({ badge, bg, size }: { badge: Badge; bg: string; size: "sm" | "lg" }) {
  const box = size === "sm" ? 24 : 40;
  const radius = size === "sm" ? 6 : 9;
  const fontSize = size === "sm" ? 12.5 : 21;
  const scale = size === "sm" ? 1 : LG_SCALE;

  return (
    <div
      className={`flex shrink-0 items-center justify-center ${bg}`}
      style={{ width: box, height: box, borderRadius: radius }}
    >
      {badge.kind === "icon" ? (
        <img
          alt=""
          src={badge.src}
          style={{ width: badge.width * scale, height: badge.height * scale }}
        />
      ) : (
        <p className="font-inter font-semibold" style={{ color: badge.color, fontSize }}>
          {badge.text}
        </p>
      )}
    </div>
  );
}

export default function SkillsMarquee() {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expanded]);

  const expandedSkill = expanded ? skills.find((s) => s.id === expanded.split(":")[1]) : undefined;

  return (
    <div className="relative flex w-full items-center py-[8px]">
      <div className="w-full overflow-hidden">
        <div
          className="flex w-max items-center gap-[80px]"
          style={{ animation: "skills-marquee 42s linear infinite" }}
        >
          {[0, 1].map((copy) =>
            skills.map((skill) => {
              const key = `${copy}:${skill.id}`;
              return (
                <motion.button
                  key={key}
                  type="button"
                  layoutId={key}
                  onClick={() => setExpanded(key)}
                  className={`flex shrink-0 items-center justify-center gap-[8px] whitespace-nowrap border border-white/50 px-[20px] py-[8px] ${
                    skill.highlight ? "rounded-[200px] backdrop-blur-[4px]" : "rounded-[100px]"
                  }`}
                  style={{ visibility: expanded === key ? "hidden" : "visible" }}
                >
                  <SkillBadge badge={skill.badge} bg={skill.bg} size="sm" />
                  <p className="font-roboto text-[18px] font-medium text-white/80">{skill.label}</p>
                </motion.button>
              );
            }),
          )}
        </div>
      </div>

      <AnimatePresence>
        {expanded && expandedSkill && (
          <>
            <motion.div
              key="catcher"
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(null)}
            />
            <motion.button
              key="card"
              type="button"
              layoutId={expanded}
              onClick={() => setExpanded(null)}
              className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-center gap-[14px] rounded-[200px] border border-white/70 bg-[rgba(8,8,8,0.4)] px-[80px] py-[40px] text-left backdrop-blur-[4px]"
            >
              <div className="flex items-center gap-[14px]">
                <SkillBadge badge={expandedSkill.badge} bg={expandedSkill.bg} size="lg" />
                <p
                  className="whitespace-nowrap bg-clip-text font-roboto text-[28px] font-semibold text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, #ffffff, #b1b8be)" }}
                >
                  {expandedSkill.label}
                </p>
              </div>
              <div
                className="font-roboto text-[18px] tracking-[-0.36px] text-[#b5bbc1]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {expandedSkill.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
