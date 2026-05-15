"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const experiences = [
  {
    icon: (
      <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
    ),
    title: "Natură",
    desc: "Locații selectate în mijlocul naturii, departe de agitația urbană, într-un cadru care te invită la liniște.",
  },
  {
    icon: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
    title: "Lucru interior",
    desc: "Sesiuni ghidate de grup, exerciții de introspecție și lucru cu emoțiile într-un spațiu sigur.",
  },
  {
    icon: (
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    ),
    title: "Comunitate",
    desc: "Grupuri mici de femei care parcurg împreună un proces de vindecare și reconectare.",
  },
  {
    icon: (
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4C13.92 3.04 13.46 3 13 3h-1z" />
    ),
    title: "Meditație",
    desc: "Meditații ghidate, practici de respirație și exerciții de conștientizare corporală.",
  },
];

const whatToExpect = [
  "Cazare în locații selectate, în mijlocul naturii",
  "Sesiuni de grup ghidate de Dina",
  "Meditații dimineața și seara",
  "Timp liber pentru introspecție și natură",
  "Mese sănătoase, pregătite cu grijă",
  "Materiale de lucru și integrare post-retreat",
];

export default function RetreaturiContent() {
  return (
    <>
      <PageHeader
        label="Retreaturi"
        title="Experiențe imersive de reconectare"
        subtitle="Un spațiu dedicat ție, departe de rutină, în care te poți opri, simți și reconecta cu tine însăți."
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-bg to-white">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-6">
              Ce este un retreat de transformare?
            </h2>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              Un retreat nu este o vacanță. Este un spațiu creat cu intenție, în
              care te extragi din viața de zi cu zi pentru a te întâlni cu tine
              la un nivel mai profund. Este un proces de reconectare interioară
              susținut de natură, comunitate și ghidare profesională.
            </p>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] font-light">
              Retreaturile mele sunt gândite pentru grupuri mici de femei și
              includ lucru interior ghidat, meditații, timp în natură și spațiu
              pentru reflecție personală.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Experience pillars */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-10 text-center">
              Pilonii experienței
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {experiences.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-gradient-to-br from-pink-soft to-[#F5ECFE]/50 p-7 hover:shadow-[0_8px_30px_rgba(139,58,107,0.06)] transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#E870A0,#C050D0)] flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      {e.icon}
                    </svg>
                  </div>
                  <h3 className="text-[15px] font-medium text-purple-dark mb-2">
                    {e.title}
                  </h3>
                  <p className="text-[13px] text-[#6B5070] leading-relaxed font-light">
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-bg">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-8 text-center">
              Ce te așteaptă
            </h2>
          </Reveal>
          <div className="space-y-3">
            {whatToExpect.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-purple-bright/8">
                  <svg
                    className="w-4 h-4 fill-accent-teal mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <p className="text-[14px] text-[#6B5070]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 px-6 bg-pink-bg">
        <Reveal>
          <div className="max-w-[500px] mx-auto text-center bg-white rounded-2xl p-10 border border-purple-bright/8">
            <p className="text-[11px] tracking-[2px] uppercase text-purple-mid/50 mb-4">
              Următorul retreat
            </p>
            <p className="font-serif text-2xl text-purple-dark font-normal mb-3">
              În curând
            </p>
            <p className="text-[14px] text-[#6B5070] leading-relaxed font-light mb-6">
              Retreaturile sunt organizate de câteva ori pe an, în locații
              speciale din România. Înscrie-te pe lista de așteptare pentru a fi
              prima care află detaliile.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white px-7 py-3 rounded-full text-[14px] font-medium shadow-[0_6px_24px_rgba(200,80,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,80,208,0.4)] transition-all"
            >
              Înscrie-te pe listă
            </a>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Vrei să participi la un retreat?"
        subtitle="Înscrie-te pe lista de așteptare și vei primi toate detaliile când se deschid înscrierile."
        buttonText="Înscrie-te pe listă"
      />
    </>
  );
}
