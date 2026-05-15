"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BookSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Cover */}
        <Reveal className="flex-shrink-0 w-[220px] h-[310px] rounded-2xl bg-[linear-gradient(160deg,#2D1B4E,#5B2D6E,#8B3A6B)] relative overflow-hidden shadow-[12px_12px_40px_rgba(45,27,78,0.2)]">
          <div className="absolute inset-5 border border-white/20 rounded-lg flex flex-col justify-end p-5">
            <p className="font-serif text-xl text-white font-normal leading-snug mb-1.5">
              De ce eu?
            </p>
            <p className="text-[11px] text-white/50 tracking-wide uppercase">
              Dina Gheorghian
            </p>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15} className="flex-1 text-center md:text-left">
          <p className="text-[11px] tracking-[3px] uppercase text-purple-mid font-medium mb-3.5">
            Cartea
          </p>
          <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-5">
            De ce eu?" — povestea mea de doliu, ghid pentru sufletul tău
          </h2>
          <p className="text-[15px] text-[#6B5070] leading-relaxed mb-3.5 font-light">
            Este o carte născută dintr-o experiență reală de pierdere și
            transformare profundă. Nu îți arăt cum să mergi mai departe". Îți
            arăt cum poți merge mai departe fără să te pierzi pe tine.
          </p>
          <p className="text-[15px] text-[#6B5070] leading-relaxed mb-5 font-light">
            Dacă treci printr-o despărțire, simți durere emoțională profundă sau
            cauți sens într-o perioadă dificilă — această carte este pentru tine.
          </p>
          <p className="font-serif text-3xl text-purple-mid mb-5">
            58 <span className="text-sm text-[#A090B0] font-sans">RON</span>
          </p>
          <Link
            href="/cartea"
            className="inline-block bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-[0_6px_24px_rgba(200,80,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,80,208,0.4)] transition-all"
          >
            Comandă cartea
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
