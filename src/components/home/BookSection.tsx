"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BookSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Cover */}
        <Reveal className="flex-shrink-0 w-[220px] h-[310px] rounded-2xl bg-[linear-gradient(160deg,#264540,#306858,#4A8870)] relative overflow-hidden shadow-[12px_12px_40px_rgba(38,69,64,0.3)]">
          <div className="absolute inset-5 border border-white/20 rounded-lg flex flex-col justify-end p-5">
            <p className="font-serif text-xl text-white font-normal leading-snug mb-1.5">
              De ce eu?
            </p>
            <p className="text-[12px] text-white/50 tracking-wide uppercase">
              Dina Gheorghian
            </p>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15} className="flex-1 text-center md:text-left">
          <p className="text-[12px] tracking-[3px] uppercase text-teal-mid font-medium mb-3.5">
            Cartea
          </p>
          <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-5">
            De ce eu?" — povestea mea de doliu, ghid pentru sufletul tau
          </h2>
          <p className="text-[16px] text-[#4A6858] leading-relaxed mb-3.5 font-light">
            Este o carte nascuta dintr-o experienta reala de pierdere si
            transformare profunda. Nu iti arat cum sa mergi mai departe". Iti
            arat cum poti merge mai departe fara sa te pierzi pe tine.
          </p>
          <p className="text-[16px] text-[#4A6858] leading-relaxed mb-5 font-light">
            Daca treci printr-o despartire, simti durere emotionala profunda sau
            cauti sens intr-o perioada dificila — aceasta carte este pentru tine.
          </p>
          <p className="font-serif text-3xl text-teal-mid mb-5">
            58 <span className="text-sm text-[#88A898] font-sans">RON</span>
          </p>
          <Link
            href="/cartea"
            className="inline-block bg-[linear-gradient(135deg,#E870A0,#A855D0)] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-[0_6px_24px_rgba(168,85,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(168,85,208,0.4)] transition-all"
          >
            Comanda cartea
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
