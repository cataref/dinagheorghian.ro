"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const methods = [
  "Psihologie integrativă și holistică",
  "Explorarea experiențelor de viață și a emoțiilor care îți ghidează realitatea",
  "Tehnici de eliberare și vindecare emoțională",
  "Tehnici ghidate personalizate",
];

const forYou = [
  "Te simți blocat emoțional sau interior",
  "Treci printr-o perioadă de pierdere sau schimbare",
  "Repeți aceleași tipare în relații sau viață",
  "Simți confuzie, gol interior sau lipsă de direcție",
  "Vrei să te reconectezi cu tine, cu sufletul tău",
  "Vrei să înveți să îți controlezi mintea și gândurile",
];

const outcomes = [
  "Mai multă claritate interioară",
  "Eliberare emoțională și de durerile trecutului",
  "Înțelegerea profundă a propriei vieți",
  "Conectare cu sufletul tău",
  "Găsirea direcției și a misiunii sufletului tău",
  "Crearea propriei tale realități",
  "Liniște și stabilitate interioară",
];

const tiers = [
  {
    name: "Claritate & explorare",
    sub: "1 sesiune · 60 min",
    desc: "Pentru persoane care vor să înceapă procesul sau au o situație punctuală.",
    price: 250,
    features: [
      "Lucru personalizat pe situația ta",
      "Direcții clare + integrare emoțională",
    ],
    featured: false,
  },
  {
    name: "Pachet transformare",
    sub: "3 sesiuni · proces structurat",
    desc: "Pentru schimbări reale, nu doar insight-uri.",
    price: 500,
    features: [
      "Proces structurat pe etape",
      "Integrare între sesiuni",
      "Lucru profund pe tipare emoționale",
    ],
    featured: true,
  },
  {
    name: "Transformare profundă",
    sub: "5 sesiuni · meditații incluse",
    desc: "Pentru procese de viață intense sau transformare majoră.",
    price: 800,
    features: [
      "Lucru aprofundat pe istorie personală",
      "Meditații ghidate personalizate între sesiuni",
      "Susținere continuă în proces",
    ],
    featured: false,
  },
];

export default function SesiuniContent() {
  return (
    <>
      <PageHeader
        label="Sesiuni 1:1 Online"
        title="Spațiu de lucru profund individual"
        subtitle="O sesiune dedicată în întregime ție, procesului tău interior și momentului de viață în care te afli."
      />

      {/* How we work */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-bg to-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-4">
              Cum lucrăm
            </h2>
            <p className="text-[15px] text-[#6B5070] leading-relaxed mb-8 font-light">
              Nu este o discuție generală, ci un spațiu de explorare profundă, în
              care lucrăm cu emoțiile, convingerile și experiențele tale de viață.
            </p>
          </Reveal>
          <div className="space-y-3">
            {methods.map((m, i) => (
              <Reveal key={m} delay={i * 0.08}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-purple-bright/8">
                  <span className="w-2 h-2 rounded-full bg-accent-pink mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-[#5A4060]">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* For you + Outcomes — two columns */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(22px,2.5vw,30px)] text-purple-dark font-normal leading-snug mb-6">
                Acest spațiu este pentru tine dacă…
              </h2>
            </Reveal>
            <div className="space-y-3">
              {forYou.map((f, i) => (
                <Reveal key={f} delay={i * 0.06}>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 flex-shrink-0" />
                    <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
                      {f}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(22px,2.5vw,30px)] text-purple-dark font-normal leading-snug mb-6">
                Ce se schimbă prin acest proces
              </h2>
            </Reveal>
            <div className="space-y-3">
              {outcomes.map((o, i) => (
                <Reveal key={o} delay={i * 0.06}>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lavender mt-2 flex-shrink-0" />
                    <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
                      {o}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Session details box */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-pink-bg">
        <Reveal>
          <div className="max-w-[500px] mx-auto bg-gradient-to-br from-pink-soft to-[#F5ECFE]/50 rounded-2xl p-8 text-center">
            <p className="text-[11px] tracking-[2px] uppercase text-purple-mid/60 mb-4">
              Modul de desfășurare
            </p>
            <div className="space-y-2 text-sm text-[#6B5070]">
              <p>Sesiuni online (Zoom)</p>
              <p>Durată: 60 minute</p>
              <p>Proces personalizat, adaptat în timp real</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-pink-bg">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[3px] uppercase text-purple-mid font-medium mb-3.5">
            Prețuri & Pachete
          </p>
          <h2 className="font-serif text-[clamp(28px,3vw,38px)] text-purple-dark font-normal">
            Alege formatul potrivit pentru tine
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 ${
                  t.featured
                    ? "bg-[linear-gradient(160deg,#5B2D6E,#8B3A6B)] shadow-[0_12px_40px_rgba(91,45,110,0.25)] text-white"
                    : "bg-white border border-purple-bright/10 hover:shadow-[0_12px_40px_rgba(139,58,107,0.08)]"
                }`}
              >
                {t.featured && (
                  <span className="inline-block text-[#5B3A00] text-[10px] font-semibold px-3.5 py-1 rounded-xl mb-3" style={{ background: "linear-gradient(135deg, #F0D060, #E8B830)" }}>
                    Recomandat
                  </span>
                )}
                <h3
                  className={`text-lg font-serif font-normal mb-1 ${
                    t.featured ? "text-white" : "text-purple-dark"
                  }`}
                >
                  {t.name}
                </h3>
                <p
                  className={`text-xs mb-3 ${
                    t.featured ? "text-white/50" : "text-[#B0A0B8]"
                  }`}
                >
                  {t.sub}
                </p>
                <p
                  className={`text-[13px] leading-relaxed mb-5 ${
                    t.featured ? "text-white/60" : "text-[#6B5070]"
                  } font-light`}
                >
                  {t.desc}
                </p>
                <div className="space-y-2 mb-6">
                  {t.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ fill: t.featured ? "#60C8A8" : "#E870A0" }}
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <p
                        className={`text-[13px] ${
                          t.featured ? "text-white/70" : "text-[#6B5070]"
                        }`}
                      >
                        {f}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className={`font-serif text-3xl font-normal mb-1 ${
                    t.featured ? "text-white" : "text-purple-dark"
                  }`}
                >
                  {t.price}{" "}
                  <span
                    className={`text-sm font-sans ${
                      t.featured ? "text-white/40" : "text-[#A090B0]"
                    }`}
                  >
                    lei
                  </span>
                </p>
                <Link
                  href="/contact"
                  className={`inline-block mt-4 px-7 py-2.5 rounded-full text-[13px] font-medium transition-all hover:-translate-y-0.5 ${
                    t.featured
                      ? "bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white shadow-[0_4px_16px_rgba(200,80,208,0.25)]"
                      : "border-[1.5px] border-[#D0A8E0] text-purple-mid hover:border-purple-mid"
                  }`}
                >
                  Programează
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Important note */}
      <section className="py-16 px-6 bg-white">
        <Reveal>
          <div className="max-w-[600px] mx-auto text-center">
            <p className="font-serif text-xl text-purple-dark italic leading-relaxed mb-4">
              Acest proces nu este despre sfaturi rapide sau soluții externe."
            </p>
            <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
              Este un spațiu de lucru interior profund, în care te întorci către
              tine și începi să înțelegi ceea ce se întâmplă în interiorul tău la
              un nivel mai profund.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Simți că este momentul?"
        subtitle="Programează o sesiune și hai să descoperim împreună ce este posibil pentru tine."
        buttonText="Programează o sesiune"
      />
    </>
  );
}
