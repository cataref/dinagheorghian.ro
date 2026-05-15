"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const tiers = [
  {
    name: "Claritate & explorare",
    details: "1 sesiune · 60 min",
    price: 250,
    featured: false,
    barGradient: "bg-gradient-to-r from-[#FFB0C8] to-accent-pink",
  },
  {
    name: "Pachet transformare",
    details: "3 sesiuni · proces structurat",
    price: 500,
    featured: true,
    barGradient: "bg-gradient-to-r from-[#80F0D0] to-[#50E0B8]",
  },
  {
    name: "Transformare profundă",
    details: "5 sesiuni · meditații incluse",
    price: 800,
    featured: false,
    barGradient: "bg-gradient-to-r from-[#D0A0FF] to-accent-lavender",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-bg">
      <div className="text-center mb-12">
        <p className="text-[11px] tracking-[3px] uppercase text-purple-mid font-medium mb-3.5">
          Pachete sesiuni 1:1
        </p>
        <h2 className="font-serif text-[clamp(28px,3vw,38px)] text-purple-dark font-normal">
          Alege formatul potrivit pentru tine
        </h2>
      </div>

      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div
              className={`rounded-2xl p-9 text-center relative overflow-hidden transition-all hover:-translate-y-1 ${
                t.featured
                  ? "bg-[linear-gradient(160deg,#5B2D6E,#8B3A6B)] shadow-[0_12px_40px_rgba(91,45,110,0.25)]"
                  : "bg-white border border-purple-bright/10 hover:shadow-[0_12px_40px_rgba(139,58,107,0.08)]"
              }`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] ${t.barGradient}`}
              />
              {t.featured && (
                <span className="inline-block bg-gradient-to-r from-[#F0D060] to-accent-gold text-[#5B3A00] text-[10px] font-semibold px-3.5 py-1 rounded-xl mb-3.5">
                  Recomandat
                </span>
              )}
              <p
                className={`text-[13px] font-medium mb-1.5 ${
                  t.featured ? "text-[#E0C8E8]" : "text-purple-mid"
                }`}
              >
                {t.name}
              </p>
              <p
                className={`text-[11.5px] mb-5 ${
                  t.featured ? "text-white/50" : "text-[#B0A0B8]"
                }`}
              >
                {t.details}
              </p>
              <p
                className={`font-serif text-4xl font-normal mb-1 ${
                  t.featured ? "text-white" : "text-purple-dark"
                }`}
              >
                {t.price}
              </p>
              <p
                className={`text-sm ${
                  t.featured ? "text-white/50" : "text-[#A090B0]"
                }`}
              >
                lei
              </p>
              <Link
                href="/contact"
                className={`inline-block mt-6 px-7 py-2.5 rounded-full text-[13px] font-medium transition-all hover:-translate-y-0.5 ${
                  t.featured
                    ? "bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white shadow-[0_4px_16px_rgba(200,80,208,0.25)] hover:shadow-[0_6px_24px_rgba(200,80,208,0.35)]"
                    : "border-[1.5px] border-[#D0A8E0] text-purple-mid hover:border-purple-mid"
                }`}
              >
                Alege
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
