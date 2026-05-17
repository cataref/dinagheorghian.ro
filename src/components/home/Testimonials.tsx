"use client";

import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <Reveal>
        <div className="max-w-[560px] mx-auto bg-gradient-to-br from-mint-soft to-[#E0F0E8] rounded-3xl p-10 relative">
          <span className="absolute top-3 left-7 font-serif text-[64px] text-gold-light/50 leading-none select-none">
            &ldquo;
          </span>
          <p className="font-serif text-[17px] text-teal-mid leading-relaxed italic mb-4 relative z-10">
            Sunt foarte recunoscatoare Dinei, pentru felul in care m-a ajutat sa
            vad lucrurile diferit. Simt ca mi-a deschis mintea si m-a ajutat sa
            ma inteleg mai bine pe mine si situatiile prin care trec.
          </p>
          <p className="text-xs text-[#78A890]">— Diana, 40 de ani</p>
        </div>
      </Reveal>
    </section>
  );
}
