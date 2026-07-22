import Image from "next/image";
import AboutTimeline from "./AboutTimeline";
import SkillsMarquee from "./SkillsMarquee";
import WorksSection from "./WorksSection";
import ScrollIndicator from "./ScrollIndicator";
import HeroCtaButton from "./HeroCtaButton";

const glowSkills = "/images/glow-skills.svg";
const glowWorks = "/images/glow-works-v2.svg";
const searchIcon = "/images/search-icon-dark.svg";
const socialIcon1 = "/images/social-icon-1-dark.svg";
const socialIcon2 = "/images/social-icon-2-dark.svg";

const navItems = [
  { number: "01", label: "ABOUT ME", href: "#about" },
  { number: "02", label: "SKILLS", href: "#skills" },
  { number: "03", label: "WORKS", href: "#works" },
  { number: "04", label: "CONTACT", href: "#contact" },
];

const footerLinks = ["이영서 소개", "이영서 가이드라인", "이영서 회칙"];

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-start bg-[#080808]">
      <header className="fixed inset-x-0 top-0 z-50 flex h-[80px] w-full items-center justify-between bg-white/10 px-[98px] backdrop-blur-sm">
        <p
          className="bg-clip-text font-archivo text-[16px] font-bold text-transparent"
          style={{ backgroundImage: "linear-gradient(to right, #ffffff, #bcd3fb)" }}
        >
          YOUNGSEOLEE
        </p>
        <nav className="flex items-center gap-[28px]">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-[8px] whitespace-nowrap font-roboto font-medium"
            >
              <span className="text-[12px] text-white/50">{item.number}</span>
              <span className="text-[16px] text-white/90">{item.label}</span>
            </a>
          ))}
          <img alt="검색" src={searchIcon} className="block size-[24px]" />
        </nav>
      </header>

      <section className="relative flex h-[900px] w-full snap-start flex-col items-center justify-center overflow-clip bg-[#080808] scroll-mt-[80px]">
        <div className="relative flex flex-col items-center gap-[60px]" style={{ transform: "translateY(30.5px)" }}>
          <div className="flex flex-col items-center gap-[20px] whitespace-nowrap">
            <p
              className="font-roboto text-[24px] font-semibold text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Hello, I&rsquo;m Youngseo Lee
            </p>
            <div
              className="bg-clip-text text-center font-archivo-expanded text-[44px] font-bold tracking-[-0.44px] text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #ffffff, #bcd3fb, #ffffff)" }}
            >
              <p>I&rsquo;m a designer who finds overlooked</p>
              <p>problems in everyday life</p>
            </div>
          </div>
          <HeroCtaButton />
        </div>

        <ScrollIndicator />
      </section>

      <section id="about" className="relative flex h-[900px] w-full snap-start scroll-mt-[80px] flex-col items-center justify-center overflow-clip bg-[#080808]">
        <AboutTimeline />
      </section>

      <section id="skills" className="relative flex h-[900px] w-full snap-start scroll-mt-[80px] flex-col items-center overflow-clip bg-[#080808]">
        <div className="relative mx-auto h-full w-full max-w-[1920px]">
          <div className="pointer-events-none absolute left-1/2 top-[592px] h-[113px] w-[2526px] -translate-x-1/2">
            <Image alt="" src={glowSkills} fill sizes="2526px" />
          </div>

          <div className="absolute left-0 top-[467px] w-full">
            <SkillsMarquee />
          </div>
        </div>

        <div
          className="pointer-events-none absolute left-0 top-[3px] z-10 h-[800px] w-[313px]"
          style={{ backgroundImage: "linear-gradient(to right, #080808, rgba(8,8,8,0))" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-[3px] z-10 h-[800px] w-[313px]"
          style={{ backgroundImage: "linear-gradient(to left, #080808, rgba(8,8,8,0))" }}
        />

        <div className="pointer-events-none absolute inset-0 z-20 mx-auto h-full w-full max-w-[1440px]">
          <div className="pointer-events-auto absolute left-[98px] top-[140px] flex flex-col items-start gap-[20px] whitespace-nowrap text-white">
            <p className="font-archivo-expanded text-[40px] font-bold">SKILLS</p>
            <div className="font-roboto text-[16px] tracking-[-0.32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p>Lorem ipsum dolor sit amet, consectetuer</p>
              <p>adipiscing elit, tincidunt ut laoreet aliquam</p>
              <p>erat dolor sit volutpat.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="relative flex h-[900px] w-full snap-start scroll-mt-[80px] flex-col items-center justify-center overflow-clip bg-[#080808]">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full w-full max-w-[1440px]">
          <div className="absolute left-1/2 bottom-[-462px] h-[924px] w-[2190px] -translate-x-1/2">
            <Image alt="" src={glowWorks} fill sizes="2190px" />
          </div>
        </div>
        <WorksSection />
      </section>

      <section id="contact" className="relative flex h-[900px] w-full scroll-mt-[80px] flex-col items-center justify-center overflow-clip bg-[#080808]">
        <div className="flex flex-col items-start gap-[60px]">
          <div className="flex w-full flex-col items-start gap-[20px] whitespace-nowrap text-white">
            <p className="font-archivo-expanded text-[40px] font-bold">CONTACT</p>
            <div className="font-roboto text-[16px] tracking-[-0.32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
              <p>tincidunt ut laoreet aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
            </div>
          </div>
          <form className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[12px]">
              <input
                type="text"
                placeholder="Name"
                className="w-[200px] rounded-[100px] border border-white/50 bg-transparent px-[16px] py-[8px] font-roboto text-[16px] font-medium text-[rgba(188,211,251,0.9)] placeholder:text-[rgba(188,211,251,0.9)] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-[320px] rounded-[100px] border border-white/50 bg-transparent px-[16px] py-[8px] font-roboto text-[16px] font-medium text-[rgba(188,211,251,0.9)] placeholder:text-[rgba(188,211,251,0.9)] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center whitespace-nowrap rounded-[40px] border border-[#6c97e3]/50 px-[20px] py-[8px] font-roboto text-[16px] font-medium text-white/50"
              style={{ backgroundImage: "linear-gradient(to right, rgba(156,192,255,0.2), rgba(101,155,246,0.2))" }}
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="flex w-full flex-col items-start bg-[#0e1420] px-[98px] py-[80px]">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col items-start gap-[40px] text-[16px] text-white/80">
            <p className="whitespace-nowrap font-archivo font-bold">YOUNGSEOLEE</p>
            <div className="w-[193px] font-pretendard leading-[1.6]">
              {footerLinks.map((link) => (
                <p key={link} className="underline decoration-solid [text-underline-position:from-font]">
                  {link}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-[40px]">
            <div className="flex items-center gap-[8px]">
              <img alt="" src={socialIcon1} className="block size-[32px]" />
              <img alt="" src={socialIcon2} className="block size-[32px]" />
            </div>
            <div className="font-pretendard text-[14px] leading-[1.55] text-white/80">
              <p>이영서 | 서울특별시 동작구 상도로53길 8, 325동 606호</p>
              <p>대표 이영서 | 전화 010-2628-3439 | 사업자등록번호 311-82-77953</p>
              <p>개인정보처리방침 | 이용약관 | 규제정책</p>
              <p>© 2026. 이영서 all Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
