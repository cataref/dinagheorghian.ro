"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const programs = [
  {
    title: "Reconectare interioara",
    duration: "6 saptamani",
    format: "Grup mic · Online",
    desc: "Un program de baza pentru femeile care simt ca s-au pierdut pe ele insele. Lucram cu emotiile neexprimate, tiparele de gandire si reconectarea cu sinele autentic.",
    includes: [
      "6 intalniri de grup live (90 min)",
      "Materiale video intre sesiuni",
      "Meditatii ghidate personalizate",
      "Grup privat de suport",
    ],
    accent: "linear-gradient(90deg, #E870A0, #D4C088)",
    dot: "#E870A0",
  },
  {
    title: "Eliberare emotionala",
    duration: "8 saptamani",
    format: "Grup mic · Online",
    desc: "Un proces structurat pentru eliberarea durerii emotionale profunde — doliu, despartire, pierdere, traume relationale. Lucram la radacina durerii, nu la suprafata.",
    includes: [
      "8 intalniri de grup live (90 min)",
      "Exercitii individuale intre sesiuni",
      "2 sesiuni 1:1 incluse",
      "Acces la comunitatea privata",
      "Meditatii ghidate",
    ],
    accent: "linear-gradient(90deg, #60C8A8, #80F0D0)",
    dot: "#60C8A8",
  },
  {
    title: "Transformare profunda",
    duration: "12 saptamani",
    format: "Grup mic · Online + Retreat",
    desc: "Programul complet de transformare interioara. Include lucru intensiv pe toate nivelurile: emotional, mental, spiritual. Finalizat cu un retreat imersiv.",
    includes: [
      "12 intalniri de grup live (90 min)",
      "4 sesiuni 1:1 incluse",
      "Materiale video & meditatii",
      "Retreat de weekend inclus",
      "Suport continuu prin grup privat",
      "Certificat de parcurgere",
    ],
    accent: "linear-gradient(90deg, #78B898, #B8D8C8)",
    dot: "#78B898",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Aplicare",
    desc: "Completezi un formular scurt pentru a intelege unde te afli si ce cauti.",
  },
  {
    step: "02",
    title: "Discutie initiala",
    desc: "Avem o scurta discutie gratuita pentru a vedea daca programul este potrivit pentru tine.",
  },
  {
    step: "03",
    title: "Inscrierea",
    desc: "Primesti detaliile programului, linkurile de acces si pregatirea pentru prima sesiune.",
  },
  {
    step: "04",
    title: "Procesul incepe",
    desc: "Intri in grup si incepem impreuna calatoria de transformare.",
  },
];

export default function ProgrameContent() {
  return (
    <>
      <PageHeader
        label="Programe transformationale"
        title="Transformare structurata, in comunitate"
        subtitle="Programe de grup cu intalniri live, materiale video, meditatii ghidate si suport continuu. Un proces complet de transformare interioara."
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-b from-mint-bg to-white">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-6">
              De ce un program de grup?
            </h2>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              Exista o putere speciala in a parcurge un proces de transformare
              alaturi de alte femei care trec prin experiente similare.
              Vulnerabilitatea impartasita, reflectiile comune si energia grupului
              creeaza un spatiu de vindecare pe care o sesiune individuala nu-l
              poate replica.
            </p>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] font-light">
              Programele mele combina structura unui proces clar cu profunzimea
              lucrului interior autentic — intr-un spatiu sigur, ghidat si
              sustinut.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto space-y-8">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="rounded-2xl bg-white overflow-hidden transition-shadow" style={{ border: "1px solid rgba(48,104,88,0.08)" }}>
                <div
                  className="h-[3px]"
                  style={{ background: p.accent }}
                />
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="font-serif text-2xl text-teal-dark font-normal">
                          {p.title}
                        </h3>
                        <span className="text-[12px] px-3 py-1 rounded-full bg-mint-bg text-teal-mid font-medium">
                          {p.duration}
                        </span>
                        <span className="text-[12px] px-3 py-1 rounded-full bg-[#E0F0E8] text-teal-mid/70">
                          {p.format}
                        </span>
                      </div>
                      <p className="text-[16px] text-[#4A6858] leading-relaxed font-light max-w-xl mb-6">
                        {p.desc}
                      </p>
                      <p className="text-[12px] tracking-[2px] uppercase text-teal-mid/50 mb-3">
                        Ce include
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.includes.map((inc) => (
                          <div key={inc} className="flex items-start gap-2.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                              style={{ background: p.dot }}
                            />
                            <p className="text-[13px] text-[#4A6858]">{inc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-center md:text-right">
                      <p className="text-[12px] text-[#90B0A0] mb-2">
                        Pret la cerere
                      </p>
                      <a
                        href="/contact"
                        className="inline-block bg-[linear-gradient(135deg,#E870A0,#A855D0)] text-white px-6 py-2.5 rounded-full text-[13px] font-medium shadow-[0_4px_16px_rgba(168,85,208,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(168,85,208,0.3)] transition-all"
                      >
                        Aplica acum
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
      <section className="py-20 px-6 bg-gradient-to-b from-white to-mint-bg">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-10 text-center">
              Cum functioneaza
            </h2>
          </Reveal>
          <div className="space-y-6">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <span className="text-3xl font-serif text-accent-rose/30 font-normal flex-shrink-0 w-10">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-medium text-teal-dark mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[16px] text-[#4A6858] leading-relaxed font-light">
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
      <section className="py-16 px-6 bg-mint-bg">
        <Reveal>
          <div className="max-w-[600px] mx-auto text-center">
            <p className="font-serif text-xl text-teal-dark italic leading-relaxed mb-4">
              Grupurile mele sunt mici si cu locuri limitate."
            </p>
            <p className="text-[16px] text-[#4A6858] leading-relaxed font-light">
              Fiecare program este creat cu grija, iar grupurile sunt formate cu
              atentie. Daca simti ca unul dintre programe este pentru tine,
              aplica iar eu te voi contacta personal.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Vrei sa faci parte din urmatorul grup?"
        subtitle="Completeaza formularul de aplicare si te voi contacta cu detaliile urmatoarei editii."
        buttonText="Aplica acum"
      />
    </>
  );
}
