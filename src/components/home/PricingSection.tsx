"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

const tiers = [
  {
    name: "Claritate & explorare",
    details: "1 sesiune \u00B7 60 min",
    price: 250,
    featured: false,
    barColor: "linear-gradient(90deg, #D4C088, #E870A0)",
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
    barColor: "linear-gradient(90deg, #A8D0B8, #78B898)",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #fff 0%, #EEF4EE 100%)" }}>
      <div className="text-center mb-12">
        <p className="text-[12px] tracking-[3px] uppercase font-medium mb-3.5" style={{ color: "#1a1a1a" }}>
          Pachete sesiuni 1:1
        </p>
        <h2 className="font-serif text-[clamp(28px,3vw,38px)] font-normal" style={{ color: "#1a1a1a" }}>
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
                      background: "linear-gradient(160deg, #306858, #4A8870)",
                      boxShadow: "0 12px 40px rgba(48,104,88,0.25)",
                    }
                  : {
                      background: "#fff",
                      border: "1px solid rgba(48,104,88,0.1)",
                    }
              }
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: t.barColor }}
              />
              {t.featured && (
                <span
                  className="inline-block text-[13px] font-semibold px-4 py-1.5 rounded-xl mb-3.5"
                  style={{
                    background: "linear-gradient(135deg, #F0D060, #E8B830)",
                    color: "#5B3A00",
                  }}
                >
                  Recomandat
                </span>
              )}
              <p
                className="text-[16px] font-semibold mb-1.5"
                style={{ color: t.featured ? "#C8E0D0" : "#306858" }}
              >
                {t.name}
              </p>
              <p
                className="text-[14px] mb-5"
                style={{ color: t.featured ? "rgba(255,255,255,0.5)" : "#90B0A0" }}
              >
                {t.details}
              </p>
              <p
                className="font-serif text-5xl font-normal mb-1"
                style={{ color: t.featured ? "#fff" : "#264540" }}
              >
                {t.price}
              </p>
              <p
                className="text-base"
                style={{ color: t.featured ? "rgba(255,255,255,0.5)" : "#88A898" }}
              >
                lei
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 px-8 py-3 rounded-full text-[15px] font-medium transition-all hover:-translate-y-0.5"
                style={
                  t.featured
                    ? {
                        background: "linear-gradient(135deg, #E870A0, #A855D0)",
                        color: "#fff",
                        boxShadow: "0 4px 16px rgba(168,85,208,0.25)",
                      }
                    : {
                        border: "1.5px solid #A8D0B8",
                        color: "#1a1a1a",
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
