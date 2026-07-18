import Image from "next/image";

const heroBg = "/images/hero-bg.png";
const project1 = "/images/project-1.png";
const project2 = "/images/project-2.png";
const project3 = "/images/project-3.png";
const project4 = "/images/project-4.png";
const timelineLine = "/images/timeline-line.svg";
const timelineDot = "/images/timeline-dot.svg";
const searchIcon = "/images/search-icon.svg";
const socialIcon1 = "/images/social-icon-1.svg";
const socialIcon2 = "/images/social-icon-2.svg";

const goals = [
  { year: "2026", label: "수강신청 잘 하기" },
  { year: "2026", label: "SOMESAY 프로젝트 열심히 하기" },
  { year: "2026", label: "3학년 수업 열심히 듣기" },
  { year: "2026", label: "무사히 졸업하기" },
  { year: "2027", label: "좋은 대기업 취업하기" },
];

const projects = [project1, project2, project3, project4];

export default function Home() {
  return (
    <div className="relative flex w-full flex-col items-start bg-white">
      <header className="absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-[rgba(144,183,249,0.9)] px-[98px] py-[20px]">
        <p className="font-pretendard text-[20px] font-bold text-[#0d5fe7]">
          YOUNGSEO
        </p>
        <div className="flex items-center gap-[40px]">
          <p className="font-pretendard text-[18px] font-semibold text-[#464c53]">
            더보기1
          </p>
          <p className="font-pretendard text-[18px] font-semibold text-[#464c53]">
            더보기2
          </p>
          <div className="flex items-center gap-[12px]">
            <div className="h-[28px] w-[280px] rounded-[20px] bg-white" />
            <img alt="검색" src={searchIcon} className="block size-[24px]" />
          </div>
        </div>
      </header>

      <section className="relative flex w-full flex-col items-center gap-[80px] overflow-clip bg-[#bcd3fb] pb-[180px] pt-[260px]">
        <div className="absolute inset-x-0 top-[-181px] h-[1075px]">
          <Image
            alt=""
            src={heroBg}
            fill
            sizes="100vw"
            loading="eager"
            className="pointer-events-none object-cover opacity-15"
          />
        </div>
        <div className="relative flex w-[754px] flex-col items-start gap-[60px]">
          <div className="flex flex-col items-start gap-[12px] whitespace-nowrap text-[#080808]">
            <p className="font-pretendard text-[54px] font-bold leading-[1.55] tracking-[-1.08px]">
              안녕하세요 제 이름은 이영서입니다
            </p>
            <div className="font-pretendard text-[18px] font-semibold leading-[1.55] tracking-[-0.36px]">
              <p>일상 속 작은 불편을 세심하게 발견하고, 더 나은 경험으로 바꾸는</p>
              <p>우주 최고 멋쟁이 디자이너가 되겠습니다.</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-[40px] bg-[#0d5fe7] px-[40px] py-[12px]">
            <p className="whitespace-nowrap font-pretendard text-[18px] font-semibold text-white tracking-[-0.36px]">
              영서 더 알아보기
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-[80px] py-[140px]">
        <div className="flex w-[713px] flex-col items-center gap-[40px]">
          <p className="whitespace-nowrap font-pretendard text-[40px] font-bold text-[#0d5fe7]">
            ABOUT ME
          </p>
          <div className="w-full text-center font-pretendard text-[16px] font-medium leading-[1.55] tracking-[-0.32px] text-[#080808]">
            <p>
              작은 불편이나 어색한 문구를 그냥 지나치지 못하는 편이에요.
              <br aria-hidden />
              앱이나 웹사이트를 사용할 때도 &ldquo;왜 이렇게 만들었을까?&rdquo;, &ldquo;어떻게 바꾸면 더 편할까?&rdquo;를 자연스럽게 생각합니다.
            </p>
            <p>저는 다른 사람들의 피드백을 빠르게 반영하며 디테일을 다듬는 것을 좋아해요.</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {["2003년생", "홍익대학교", "시각디자인과"].map((label, i) => (
            <div
              key={label}
              className={`flex size-[320px] shrink-0 items-center justify-center rounded-full border-[1.2px] border-solid border-[#bcd3fb] ${
                i < 2 ? "mr-[-40px]" : ""
              }`}
            >
              <p className="whitespace-nowrap font-pretendard text-[22px] font-bold text-[#4285f4]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-[80px] bg-[#e2ecfd] py-[140px]">
        <div className="flex w-[713px] flex-col items-center gap-[48px]">
          <p className="whitespace-nowrap font-pretendard text-[40px] font-bold text-[#0d5fe7]">
            PROJECT
          </p>
          <div className="w-full text-center font-pretendard text-[16px] font-medium leading-[1.55] tracking-[-0.32px] text-[#080808]">
            <p>
              우와 저는 정말 작은 불편이나 어색한 문구를 그냥 지나치지 못하는 편이에요.
              <br aria-hidden />
              앱이나 웹사이트를 사용할 때도 &ldquo;왜 이렇게 만들었을까?&rdquo;, &ldquo;어떻게 바꾸면 더 편할까?&rdquo;를 자연스럽게 생각합니다.
            </p>
            <p>피드백을 빠르게 반영하며 디테일을 다듬는 것을 좋아해요.</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center px-[98px]">
          <div className="flex items-center gap-[20px]">
            {projects.map((src, i) => (
              <div key={src} className="relative size-[360px] shrink-0 rounded-[20px]">
                <Image
                  alt={`프로젝트 ${i + 1}`}
                  src={src}
                  fill
                  sizes="360px"
                  className="rounded-[20px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-[100px] py-[140px]">
        <div className="flex w-full flex-col items-center gap-[48px]">
          <p className="whitespace-nowrap font-pretendard text-[40px] font-bold text-[#0d5fe7]">
            GOAL
          </p>
          <div className="w-full px-[98px] text-center font-pretendard text-[16px] font-medium leading-[1.55] tracking-[-0.32px] text-[#080808]">
            <p>저의 목표는 사용자의 작은 불편까지 세심하게 발견하고, 이를 쉽고 편리한 경험으로 해결하는 프로덕트 디자이너가 되는 것입니다.</p>
            <p>보기 좋은 화면을 만드는 것에 그치지 않고, 사용자가 자연스럽게 이해하고 행동할 수 있는 서비스를 설계하고 싶습니다.</p>
            <p>다양한 프로젝트와 경험을 통해 꾸준히 배우며, 사람들에게 실질적인 도움을 주는 디자이너로 성장하고 싶어요.</p>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center gap-[64px] px-[98px]">
          <div className="absolute left-1/2 top-[7px] h-0 w-[1220px] -translate-x-1/2">
            <img alt="" src={timelineLine} className="block w-full" />
          </div>
          <div className="relative flex items-center gap-[64px]">
            {goals.map((goal) => (
              <div
                key={goal.label}
                className="flex flex-col items-center gap-[28px]"
              >
                <img alt="" src={timelineDot} className="block size-[16px]" />
                <div className="flex flex-col items-center gap-[4px] whitespace-nowrap text-center font-suit text-[18px] font-semibold leading-[1.55] tracking-[-0.36px]">
                  <p className="text-[#8a949e]">{goal.year}</p>
                  <p className="text-[#080808]">{goal.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex w-full flex-col items-start gap-[20px] bg-[#f4f5f6] py-[80px] pl-[189px] pr-[80px] opacity-80">
        <div className="flex items-center gap-[20px]">
          <p className="whitespace-nowrap font-pretendard text-[18px] font-bold text-[#0d5fe7]">
            YOUNGSEO
          </p>
          <div className="flex items-center gap-[8px]">
            <img alt="" src={socialIcon1} className="block size-[32px]" />
            <img alt="" src={socialIcon2} className="block size-[32px]" />
          </div>
        </div>
        <div className="flex w-full items-start gap-[350px] font-pretendard font-medium text-[#080808]">
          <div className="w-[193px] text-[16px] leading-[1.6]">
            <p className="underline decoration-solid [text-underline-position:from-font]">영서소개</p>
            <p className="underline decoration-solid [text-underline-position:from-font]">이영서 가이드라인</p>
            <p className="underline decoration-solid [text-underline-position:from-font]">이영서 회칙</p>
          </div>
          <div className="w-[389px] text-[14px] leading-[1.55]">
            <p>이영서 | 서울특별시 동작구 상도로53길 8, 325동 606호</p>
            <p>대표 이영서 | 전화 010-2628-3439 | 사업자등록번호 311-82-77953</p>
            <p>개인정보처리방침 | 이용약관 | 규제정책</p>
            <p>© 2026. 이영서 all Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
