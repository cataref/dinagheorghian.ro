"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutTeaser() {
  return (
    <section className="bg-gradient-to-b from-mint-bg to-white py-24 px-6 md:px-12">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-14 items-center">
        {/* Visual */}
        <Reveal className="flex-shrink-0 w-full max-w-[280px] h-[340px] rounded-3xl bg-[linear-gradient(160deg,#306858,#4A8870,#D4B060)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
          <p className="absolute bottom-6 left-6 right-6 font-serif text-base text-white italic leading-relaxed opacity-85">
            Am ales să transform durerea în direcția mea de viață."
          </p>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15} className="flex-1 text-center md:text-left">
          <p className="text-[11px] tracking-[3px] uppercase text-teal-mid font-medium mb-3.5">
            Despre mine
          </p>
          <h2 className="font-serif text-[clamp(28px,3vw,38px)] text-teal-dark font-normal leading-snug mb-5">
            Povestea din spatele misiunii mele
          </h2>
          <p className="text-[15px] text-[#4A6858] leading-relaxed mb-4 font-light">
            La 28 de ani am rămas văduvă, cu doi copii mici în brațe. A fost
            momentul în care viața m-a pus în fața unei alegeri simple și dure:
            să cad sau să merg mai departe.
          </p>
          <p className="text-[15px] text-[#4A6858] leading-relaxed mb-6 font-light">
            Am ales să merg înainte. Această experiență m-a adus într-un proces
            profund de transformare interioară și mi-a descoperit misiunea: să
            susțin oamenii în momentele lor cele mai dificile.
          </p>
          <Link
            href="/despre"
            className="inline-flex items-center gap-2 text-sm text-teal-mid font-medium hover:gap-3 transition-all"
          >
            Citește povestea completă
            <svg className="w-4 h-4 fill-teal-mid" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
