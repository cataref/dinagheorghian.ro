"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Sesiuni 1:1",
    desc: "Lucru individual profund, adaptat ție și procesului tău interior",
    href: "/sesiuni",
    barColor: "linear-gradient(90deg, #E870A0, #FFB0C8)",
    iconBg: "linear-gradient(135deg, #E870A0, #D4507C)",
    icon: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
  },
  {
    title: "Programe de grup",
    desc: "Transformare structurată pe etape, cu suport și comunitate",
    href: "/programe",
    barColor: "linear-gradient(90deg, #60C8A8, #80F0D0)",
    iconBg: "linear-gradient(135deg, #50B898, #38A080)",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    title: "Retreaturi",
    desc: "Experiențe imersive de reconectare interioară în natură",
    href: "/retreaturi",
    barColor: "linear-gradient(90deg, #C090F0, #E0C8FF)",
    iconBg: "linear-gradient(135deg, #A080D8, #8060C0)",
    icon: (
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
    ),
  },
  {
    title: "Cartea",
    desc: "De ce eu? \u2014 un ghid sincer pentru sufletul tău",
    href: "/cartea",
    barColor: "linear-gradient(90deg, #F0C840, #F8E080)",
    iconBg: "linear-gradient(135deg, #E8B830, #D0A020)",
    icon: (
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="relative z-10 px-6 md:px-12 pt-8 pb-20"
      style={{ background: "linear-gradient(180deg, #7A3568 0%, #5B2D6E 50%, #4A2258 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <Link
              href={s.href}
              className="block rounded-2xl p-7 relative overflow-hidden hover:-translate-y-1 transition-all group"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                minHeight: "200px",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px]"
                style={{ background: s.barColor }}
              />
              <div
                className="w-[48px] h-[48px] rounded-xl flex items-center justify-center mb-5"
                style={{ background: s.iconBg }}
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </div>
              <h3 className="text-[16px] font-semibold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                {s.desc}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
