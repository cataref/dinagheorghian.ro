"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const approach = [
  { label: "Experiente din copilarie", color: "#E870A0" },
  { label: "Emotii neprocesate", color: "#60C8A8" },
  { label: "Tipare relationale", color: "#78B898" },
  { label: "Momente de pierdere si criza", color: "#F0C840" },
  { label: "Convingeri subconstiente", color: "#E870A0" },
  { label: "Niveluri profunde de constientizare", color: "#60C8A8" },
];

export default function DespreContent() {
  return (
    <>
      <PageHeader
        label="Despre mine"
        title="Povestea din spatele misiunii mele"
        subtitle="Cum am transformat cea mai dureroasa experienta din viata mea in directia mea de viata."
      />

      {/* Story */}
      <section className="py-20 px-6 bg-gradient-to-b from-mint-bg to-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-8">
              Cum am intrat in acest domeniu
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              La 28 de ani am ramas vaduva, cu doi copii mici in brate. A fost
              momentul in care viata m-a pus in fata unei alegeri simple si dure:
              sa cad si sa ma las definita de durere sau sa imi asum
              responsabilitatea de a merge mai departe, pentru mine, pentru copiii
              mei si pentru viata.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              Am ales sa merg inainte. Aceasta experienta m-a adus intr-un proces
              profund de transformare interioara. Am inceput sa caut, sa invat si
              sa experimentez diferite forme de lucru cu mine insami, incercand sa
              inteleg durerea, emotiile si mecanismele interioare ale omului.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              In acest drum, am descoperit ca pot intelege oamenii la un nivel
              profund si autentic. Am inceput sa observ tipare, emotii, povesti de
              viata si moduri in care suferinta se transforma — sau ramane blocata.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              Am ales sa transform aceasta experienta in directia mea de viata.
              M-am inscris la Facultatea de Psihologie si am urmat diverse scoli
              si formari in domeniul dezvoltarii personale si al lucrului cu
              constiinta. Sunt intr-un proces continuu de formare si evolutie
              profesionala, integrand experienta personala cu instrumente
              psihologice si abordari holistice.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="border-l-[3px] border-accent-rose pl-6 my-10">
              <p className="font-serif text-xl text-teal-mid italic leading-relaxed">
                Am descoperit ca aceasta cale nu a fost intamplatoare. Este
                misiunea mea sa sustin oamenii in momentele lor dificile de
                viata."
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-4">
              Modul meu de lucru
            </h2>
            <p className="text-[16px] text-[#4A6858] leading-relaxed mb-10 font-light">
              In lucrul cu oamenii, ma apropii de fiecare proces cu deschidere,
              prezenta si profunzime. Nu lucrez doar cu simptomul, ci cu intregul
              context interior al persoanei:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {approach.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex items-center gap-3.5 p-4 rounded-xl" style={{ background: "linear-gradient(135deg, #E8F0E8, rgba(245,236,254,0.5))" }}>
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  <p className="text-sm" style={{ color: "#1a1a1a" }}>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-mint-bg">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-6">
              Misiunea mea
            </h2>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              Fiecare proces pe care il ghidez este o intalnire reala cu omul din
              fata mea — cu durerea lui, dar si cu potentialul lui de transformare.
            </p>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] font-light">
              Sunt autoarea cartii De ce eu? — povestea mea de doliu, ghid pentru
              sufletul tau", nascuta din propriul meu proces de transformare.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Vrei sa lucram impreuna?"
        subtitle="Fiecare calatorie de transformare incepe cu un prim pas. Hai sa-l facem impreuna."
      />
    </>
  );
}
