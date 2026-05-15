"use client";

import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <Reveal>
        <div className="max-w-[560px] mx-auto bg-gradient-to-br from-pink-soft to-[#F5ECFE] rounded-3xl p-10 relative">
          <span className="absolute top-3 left-7 font-serif text-[64px] text-rose-light/50 leading-none select-none">
            &ldquo;
          </span>
          <p className="font-serif text-[17px] text-purple-mid leading-relaxed italic mb-4 relative z-10">
            Sunt foarte recunoscătoare Dinei, pentru felul în care m-a ajutat să
            văd lucrurile diferit. Simt că mi-a deschis mintea și m-a ajutat să
            mă înțeleg mai bine pe mine și situațiile prin care trec.
          </p>
          <p className="text-xs text-[#A080B0]">— Diana, 40 de ani</p>
        </div>
      </Reveal>
    </section>
  );
}
