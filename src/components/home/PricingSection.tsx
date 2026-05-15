"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const tiers = [
  {
    name: "Claritate & explorare",
    details: "1 sesiune \u00B7 60 min",
    price: 250,
    featured: false,
    barColor: "linear-gradient(90deg, #FFB0C8, #E870A0)",
  },
  {
    name: "Pachet transformare",
    details: "3 sesiuni \u00B7 proces structurat",
    price: 500,
    featured: true,
    barColor: "linear-gradient(90deg, #80F0D0, #50E0B8)",
  },
  {
    name: "Transformare profund\u0103",
    details: "5 sesiuni \u00B7 medita\u021Bii incluse",
    price: 800,
    featured: false,
    barColor: "linear-gradient(90deg, #D0A0FF, #C090F0)",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #fff 0%, #FDF0F4 100%)" }}>
      <div className="text-center mb-12">
        <p className="text-[11px] tracking-[3px] uppercase font-medium mb-3.5" style={{ color: "#5B2D6E" }}>
          Pachete sesiuni 1:1
        </p>
        <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-normal" style={{ color: "#2D1B4E" }}>
          Alege formatul potrivit pentru tine
        </h2>
      </div>

      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div
              className="rounded-2xl p-9 text-center relative overflow-hidden transition-all hover:-translate-y-1"
              style={
                t.featured
                  ? {
                      background: "linear-gradient(160deg, #5B2D6E, #8B3A6B)",
                      boxShadow: "0 12px 40px rgba(91,45,110,0.25)",
                    }
                  : {
                      background: "#fff",
                      border: "1px solid rgba(139,58,107,0.1)",
                    }
              }
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: t.barColor }}
              />
              {t.featured && (
                <span
                  className="inline-block text-[10px] font-semibold px-3.5 py-1 rounded-xl mb-3.5"
                  style={{
                    background: "linear-gradient(135deg, #F0D060, #E8B830)",
                    color: "#5B3A00",
                  }}
                >
                  Recomandat
                </span>
              )}
              <p
                className="text-[13px] font-medium mb-1.5"
                style={{ color: t.featured ? "#E0C8E8" : "#5B2D6E" }}
              >
                {t.name}
              </p>
              <p
                className="text-[11.5px] mb-5"
                style={{ color: t.featured ? "rgba(255,255,255,0.5)" : "#B0A0B8" }}
              >
                {t.details}
              </p>
              <p
                className="font-serif text-4xl font-normal mb-1"
                style={{ color: t.featured ? "#fff" : "#2D1B4E" }}
              >
                {t.price}
              </p>
              <p
                className="text-sm"
                style={{ color: t.featured ? "rgba(255,255,255,0.5)" : "#A090B0" }}
              >
                lei
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 px-7 py-2.5 rounded-full text-[13px] font-medium transition-all hover:-translate-y-0.5"
                style={
                  t.featured
                    ? {
                        background: "linear-gradient(135deg, #E870A0, #C050D0)",
                        color: "#fff",
                        boxShadow: "0 4px 16px rgba(200,80,208,0.25)",
                      }
                    : {
                        border: "1.5px solid #D0A8E0",
                        color: "#5B2D6E",
                      }
                }
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
