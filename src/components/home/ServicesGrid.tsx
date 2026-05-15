"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Sesiuni 1:1",
    desc: "Lucru individual profund, adaptat ție și procesului tău interior",
    href: "/sesiuni",
    barGradient: "from-accent-pink to-[#FFB0C8]",
    iconBg: "from-accent-pink to-[#D4507C]",
    icon: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
  },
  {
    title: "Programe de grup",
    desc: "Transformare structurată pe etape, cu suport și comunitate",
    href: "/programe",
    barGradient: "from-accent-teal to-[#80F0D0]",
    iconBg: "from-[#50B898] to-[#38A080]",
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
  },
  {
    title: "Retreaturi",
    desc: "Experiențe imersive de reconectare interioară în natură",
    href: "/retreaturi",
    barGradient: "from-accent-lavender to-[#E0C8FF]",
    iconBg: "from-[#A080D8] to-[#8060C0]",
    icon: (
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
    ),
  },
  {
    title: "Cartea",
    desc: "\u201EDe ce eu?\u201D \u2014 un ghid sincer pentru sufletul t\u0103u",
    href: "/cartea",
    barGradient: "from-accent-gold to-[#F8E080]",
    iconBg: "from-[#E8B830] to-[#D0A020]",
    icon: (
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative z-10 -mt-10 px-6 md:px-12 pb-16">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <Link
              href={s.href}
              className="block glass rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 hover:bg-white/15 transition-all group"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.barGradient}`}
              />
              <div
                className={`w-[42px] h-[42px] rounded-xl bg-gradient-to-br ${s.iconBg} flex items-center justify-center mb-4`}
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </div>
              <h3 className="text-sm font-medium text-white mb-1.5">
                {s.title}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">{s.desc}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
