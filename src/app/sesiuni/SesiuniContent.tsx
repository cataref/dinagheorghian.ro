"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const methods = [
  "Psihologie integrativa si holistica",
  "Explorarea experientelor de viata si a emotiilor care iti ghideaza realitatea",
  "Tehnici de eliberare si vindecare emotionala",
  "Tehnici ghidate personalizate",
];

const forYou = [
  "Te simti blocat emotional sau interior",
  "Treci printr-o perioada de pierdere sau schimbare",
  "Repeti aceleasi tipare in relatii sau viata",
  "Simti confuzie, gol interior sau lipsa de directie",
  "Vrei sa te reconectezi cu tine, cu sufletul tau",
  "Vrei sa inveti sa iti controlezi mintea si gandurile",
];

const outcomes = [
  "Mai multa claritate interioara",
  "Eliberare emotionala si de durerile trecutului",
  "Intelegerea profunda a propriei vieti",
  "Conectare cu sufletul tau",
  "Gasirea directiei si a misiunii sufletului tau",
  "Crearea propriei tale realitati",
  "Liniste si stabilitate interioara",
];

const tiers = [
  {
    name: "Claritate & explorare",
    sub: "1 sesiune · 60 min",
    desc: "Pentru persoane care vor sa inceapa procesul sau au o situatie punctuala.",
    price: 250,
    features: [
      "Lucru personalizat pe situatia ta",
      "Directii clare + integrare emotionala",
    ],
    featured: false,
  },
  {
    name: "Pachet transformare",
    sub: "3 sesiuni · proces structurat",
    desc: "Pentru schimbari reale, nu doar insight-uri.",
    price: 500,
    features: [
      "Proces structurat pe etape",
      "Integrare intre sesiuni",
      "Lucru profund pe tipare emotionale",
    ],
    featured: true,
  },
  {
    name: "Transformare profunda",
    sub: "5 sesiuni · meditatii incluse",
    desc: "Pentru procese de viata intense sau transformare majora.",
    price: 800,
    features: [
      "Lucru aprofundat pe istorie personala",
      "Meditatii ghidate personalizate intre sesiuni",
      "Sustinere continua in proces",
    ],
    featured: false,
  },
];

export default function SesiuniContent() {
  return (
    <>
      <PageHeader
        label="Sesiuni 1:1 Online"
        title="Spatiu de lucru profund individual"
        subtitle="O sesiune dedicata in intregime tie, procesului tau interior si momentului de viata in care te afli."
      />

      {/* How we work */}
      <section className="py-20 px-6 bg-gradient-to-b from-mint-bg to-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-4">
              Cum lucram
            </h2>
            <p className="text-[16px] text-[#4A6858] leading-relaxed mb-8 font-light">
              Nu este o discutie generala, ci un spatiu de explorare profunda, in
              care lucram cu emotiile, convingerile si experientele tale de viata.
            </p>
          </Reveal>
          <div className="space-y-3">
            {methods.map((m, i) => (
              <Reveal key={m} delay={i * 0.08}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-teal-bright/8">
                  <span className="w-2 h-2 rounded-full bg-accent-rose mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-[#3A5848]">{m}</p>
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
              <h2 className="font-serif text-[clamp(22px,2.5vw,30px)] text-teal-dark font-normal leading-snug mb-6">
                Acest spatiu este pentru tine daca…
              </h2>
            </Reveal>
            <div className="space-y-3">
              {forYou.map((f, i) => (
                <Reveal key={f} delay={i * 0.06}>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 flex-shrink-0" />
                    <p className="text-[16px] text-[#4A6858] leading-relaxed font-light">
                      {f}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="font-serif text-[clamp(22px,2.5vw,30px)] text-teal-dark font-normal leading-snug mb-6">
                Ce se schimba prin acest proces
              </h2>
            </Reveal>
            <div className="space-y-3">
              {outcomes.map((o, i) => (
                <Reveal key={o} delay={i * 0.06}>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-lavender mt-2 flex-shrink-0" />
                    <p className="text-[16px] text-[#4A6858] leading-relaxed font-light">
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
      <section className="py-12 px-6 bg-gradient-to-b from-white to-mint-bg">
        <Reveal>
          <div className="max-w-[500px] mx-auto bg-gradient-to-br from-mint-soft to-[#E0F0E8]/50 rounded-2xl p-8 text-center">
            <p className="text-[12px] tracking-[2px] uppercase text-teal-mid/60 mb-4">
              Modul de desfasurare
            </p>
            <div className="space-y-2 text-sm text-[#4A6858]">
              <p>Sesiuni online (Zoom)</p>
              <p>Durata: 60 minute</p>
              <p>Proces personalizat, adaptat in timp real</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-mint-bg">
        <div className="text-center mb-12">
          <p className="text-[12px] tracking-[3px] uppercase text-teal-mid font-medium mb-3.5">
            Preturi & Pachete
          </p>
          <h2 className="font-serif text-[clamp(28px,3vw,38px)] text-teal-dark font-normal">
            Alege formatul potrivit pentru tine
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 relative overflow-hidden transition-all hover:-translate-y-1 ${
                  t.featured
                    ? "bg-[linear-gradient(160deg,#306858,#4A8870)] shadow-[0_12px_40px_rgba(48,104,88,0.25)] text-white"
                    : "bg-white border border-teal-bright/10 hover:shadow-[0_12px_40px_rgba(48,104,88,0.08)]"
                }`}
              >
                {t.featured && (
                  <span className="inline-block text-[#5B3A00] text-[11px] font-semibold px-3.5 py-1 rounded-xl mb-3" style={{ background: "linear-gradient(135deg, #F0D060, #E8B830)" }}>
                    Recomandat
                  </span>
                )}
                <h3
                  className={`text-lg font-serif font-normal mb-1 ${
                    t.featured ? "text-white" : "text-teal-dark"
                  }`}
                >
                  {t.name}
                </h3>
                <p
                  className={`text-xs mb-3 ${
                    t.featured ? "text-white/50" : "text-[#90B0A0]"
                  }`}
                >
                  {t.sub}
                </p>
                <p
                  className={`text-[13px] leading-relaxed mb-5 ${
                    t.featured ? "text-white/60" : "text-[#4A6858]"
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
                          t.featured ? "text-white/70" : "text-[#4A6858]"
                        }`}
                      >
                        {f}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className={`font-serif text-3xl font-normal mb-1 ${
                    t.featured ? "text-white" : "text-teal-dark"
                  }`}
                >
                  {t.price}{" "}
                  <span
                    className={`text-sm font-sans ${
                      t.featured ? "text-white/40" : "text-[#88A898]"
                    }`}
                  >
                    lei
                  </span>
                </p>
                <Link
                  href="/contact"
                  className={`inline-block mt-4 px-7 py-2.5 rounded-full text-[13px] font-medium transition-all hover:-translate-y-0.5 ${
                    t.featured
                      ? "bg-[linear-gradient(135deg,#E870A0,#A855D0)] text-white shadow-[0_4px_16px_rgba(168,85,208,0.25)]"
                      : "border-[1.5px] border-[#A8D0B8] text-teal-mid hover:border-teal-mid"
                  }`}
                >
                  Programeaza
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
            <p className="font-serif text-xl text-teal-dark italic leading-relaxed mb-4">
              Acest proces nu este despre sfaturi rapide sau solutii externe."
            </p>
            <p className="text-[16px] text-[#4A6858] leading-relaxed font-light">
              Este un spatiu de lucru interior profund, in care te intorci catre
              tine si incepi sa intelegi ceea ce se intampla in interiorul tau la
              un nivel mai profund.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Simti ca este momentul?"
        subtitle="Programeaza o sesiune si hai sa descoperim impreuna ce este posibil pentru tine."
        buttonText="Programeaza o sesiune"
      />
    </>
  );
}
