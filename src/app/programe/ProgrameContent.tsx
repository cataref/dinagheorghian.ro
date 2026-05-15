"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const programs = [
  {
    title: "Reconectare interioară",
    duration: "6 săptămâni",
    format: "Grup mic · Online",
    desc: "Un program de bază pentru femeile care simt că s-au pierdut pe ele însele. Lucrăm cu emoțiile neexprimate, tiparele de gândire și reconectarea cu sinele autentic.",
    includes: [
      "6 întâlniri de grup live (90 min)",
      "Materiale video între sesiuni",
      "Meditații ghidate personalizate",
      "Grup privat de suport",
    ],
    accent: "linear-gradient(90deg, #E870A0, #FFB0C8)",
    dot: "#E870A0",
  },
  {
    title: "Eliberare emoțională",
    duration: "8 săptămâni",
    format: "Grup mic · Online",
    desc: "Un proces structurat pentru eliberarea durerii emoționale profunde — doliu, despărțire, pierdere, traume relaționale. Lucrăm la rădăcina durerii, nu la suprafață.",
    includes: [
      "8 întâlniri de grup live (90 min)",
      "Exerciții individuale între sesiuni",
      "2 sesiuni 1:1 incluse",
      "Acces la comunitatea privată",
      "Meditații ghidate",
    ],
    accent: "linear-gradient(90deg, #60C8A8, #80F0D0)",
    dot: "#60C8A8",
  },
  {
    title: "Transformare profundă",
    duration: "12 săptămâni",
    format: "Grup mic · Online + Retreat",
    desc: "Programul complet de transformare interioară. Include lucru intensiv pe toate nivelurile: emoțional, mental, spiritual. Finalizat cu un retreat imersiv.",
    includes: [
      "12 întâlniri de grup live (90 min)",
      "4 sesiuni 1:1 incluse",
      "Materiale video & meditații",
      "Retreat de weekend inclus",
      "Suport continuu prin grup privat",
      "Certificat de parcurgere",
    ],
    accent: "linear-gradient(90deg, #C090F0, #E0C8FF)",
    dot: "#C090F0",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Aplicare",
    desc: "Completezi un formular scurt pentru a înțelege unde te afli și ce cauți.",
  },
  {
    step: "02",
    title: "Discuție inițială",
    desc: "Avem o scurtă discuție gratuită pentru a vedea dacă programul este potrivit pentru tine.",
  },
  {
    step: "03",
    title: "Înscrierea",
    desc: "Primești detaliile programului, linkurile de acces și pregătirea pentru prima sesiune.",
  },
  {
    step: "04",
    title: "Procesul începe",
    desc: "Intri în grup și începem împreună călătoria de transformare.",
  },
];

export default function ProgrameContent() {
  return (
    <>
      <PageHeader
        label="Programe transformaționale"
        title="Transformare structurată, în comunitate"
        subtitle="Programe de grup cu întâlniri live, materiale video, meditații ghidate și suport continuu. Un proces complet de transformare interioară."
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-bg to-white">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-6">
              De ce un program de grup?
            </h2>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              Există o putere specială în a parcurge un proces de transformare
              alături de alte femei care trec prin experiențe similare.
              Vulnerabilitatea împărtășită, reflecțiile comune și energia grupului
              creează un spațiu de vindecare pe care o sesiune individuală nu-l
              poate replica.
            </p>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] font-light">
              Programele mele combină structura unui proces clar cu profunzimea
              lucrului interior autentic — într-un spațiu sigur, ghidat și
              susținut.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto space-y-8">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="rounded-2xl bg-white overflow-hidden transition-shadow" style={{ border: "1px solid rgba(139,58,107,0.08)" }}>
                <div
                  className="h-[3px]"
                  style={{ background: p.accent }}
                />
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="font-serif text-2xl text-purple-dark font-normal">
                          {p.title}
                        </h3>
                        <span className="text-[11px] px-3 py-1 rounded-full bg-pink-bg text-purple-mid font-medium">
                          {p.duration}
                        </span>
                        <span className="text-[11px] px-3 py-1 rounded-full bg-[#F5ECFE] text-purple-mid/70">
                          {p.format}
                        </span>
                      </div>
                      <p className="text-[14px] text-[#6B5070] leading-relaxed font-light max-w-xl mb-6">
                        {p.desc}
                      </p>
                      <p className="text-[11px] tracking-[2px] uppercase text-purple-mid/50 mb-3">
                        Ce include
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.includes.map((inc) => (
                          <div key={inc} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: p.dot }}
                            />
                            <p className="text-[13px] text-[#6B5070]">{inc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-center md:text-right">
                      <p className="text-[11px] text-[#B0A0B8] mb-2">
                        Preț la cerere
                      </p>
                      <a
                        href="/contact"
                        className="inline-block bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white px-6 py-2.5 rounded-full text-[13px] font-medium shadow-[0_4px_16px_rgba(200,80,208,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(200,80,208,0.3)] transition-all"
                      >
                        Aplică acum
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-bg">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-10 text-center">
              Cum funcționează
            </h2>
          </Reveal>
          <div className="space-y-6">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <span className="text-3xl font-serif text-accent-pink/30 font-normal flex-shrink-0 w-10">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-purple-dark mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 px-6 bg-pink-bg">
        <Reveal>
          <div className="max-w-[600px] mx-auto text-center">
            <p className="font-serif text-xl text-purple-dark italic leading-relaxed mb-4">
              Grupurile mele sunt mici și cu locuri limitate."
            </p>
            <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
              Fiecare program este creat cu grijă, iar grupurile sunt formate cu
              atenție. Dacă simți că unul dintre programe este pentru tine,
              aplică iar eu te voi contacta personal.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Vrei să faci parte din următorul grup?"
        subtitle="Completează formularul de aplicare și te voi contacta cu detaliile următoarei ediții."
        buttonText="Aplică acum"
      />
    </>
  );
}
