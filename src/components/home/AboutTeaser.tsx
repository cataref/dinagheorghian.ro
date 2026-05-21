"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutTeaser() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-14 items-center">
        {/* Visual */}
        <Reveal className="flex-shrink-0 w-full max-w-[280px] h-[340px] rounded-2xl relative overflow-hidden">
          <img src="/images/dina-reading.png" alt="Dina Gheorghian" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-serif text-base text-white italic leading-relaxed drop-shadow-md">
            "Am ales sa transform durerea in directia mea de viata."
          </p>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15} className="flex-1 text-center md:text-left">
          <p className="text-[12px] tracking-[3px] uppercase text-teal-mid font-medium mb-3.5">
            Despre mine
          </p>
          <h2 className="font-serif text-[clamp(28px,3vw,38px)] text-teal-dark font-normal leading-snug mb-5">
            Povestea din spatele misiunii mele
          </h2>
          <p className="text-[16px] text-[#4A6858] leading-relaxed mb-4 font-light">
            La 28 de ani am ramas vaduva, cu doi copii mici in brate. A fost
            momentul in care viata m-a pus in fata unei alegeri simple si dure:
            sa cad sau sa merg mai departe.
          </p>
          <p className="text-[16px] text-[#4A6858] leading-relaxed mb-6 font-light">
            Am ales sa merg inainte. Aceasta experienta m-a adus intr-un proces
            profund de transformare interioara si mi-a descoperit misiunea: sa
            sustin oamenii in momentele lor cele mai dificile.
          </p>
          <Link
            href="/despre"
            className="inline-flex items-center gap-2 text-sm text-teal-mid font-medium hover:gap-3 transition-all"
          >
            Citeste povestea completa
            <svg className="w-4 h-4 fill-teal-mid" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
