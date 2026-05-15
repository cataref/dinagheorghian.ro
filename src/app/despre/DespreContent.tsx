"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const approach = [
  { label: "Experiențe din copilărie", color: "bg-accent-pink" },
  { label: "Emoții neprocesate", color: "bg-accent-teal" },
  { label: "Tipare relaționale", color: "bg-accent-lavender" },
  { label: "Momente de pierdere și criză", color: "bg-accent-gold" },
  { label: "Convingeri subconștiente", color: "bg-accent-pink" },
  { label: "Niveluri profunde de conștientizare", color: "bg-accent-teal" },
];

export default function DespreContent() {
  return (
    <>
      <PageHeader
        label="Despre mine"
        title="Povestea din spatele misiunii mele"
        subtitle="Cum am transformat cea mai dureroasă experiență din viața mea în direcția mea de viață."
      />

      {/* Story */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-bg to-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-8">
              Cum am intrat în acest domeniu
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              La 28 de ani am rămas văduvă, cu doi copii mici în brațe. A fost
              momentul în care viața m-a pus în fața unei alegeri simple și dure:
              să cad și să mă las definită de durere sau să îmi asum
              responsabilitatea de a merge mai departe, pentru mine, pentru copiii
              mei și pentru viață.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              Am ales să merg înainte. Această experiență m-a adus într-un proces
              profund de transformare interioară. Am început să caut, să învăț și
              să experimentez diferite forme de lucru cu mine însămi, încercând să
              înțeleg durerea, emoțiile și mecanismele interioare ale omului.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              În acest drum, am descoperit că pot înțelege oamenii la un nivel
              profund și autentic. Am început să observ tipare, emoții, povești de
              viață și moduri în care suferința se transformă — sau rămâne blocată.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              Am ales să transform această experiență în direcția mea de viață.
              M-am înscris la Facultatea de Psihologie și am urmat diverse școli
              și formări în domeniul dezvoltării personale și al lucrului cu
              conștiința. Sunt într-un proces continuu de formare și evoluție
              profesională, integrând experiența personală cu instrumente
              psihologice și abordări holistice.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="border-l-[3px] border-accent-pink pl-6 my-10">
              <p className="font-serif text-xl text-purple-mid italic leading-relaxed">
                Am descoperit că această cale nu a fost întâmplătoare. Este
                misiunea mea să susțin oamenii în momentele lor dificile de
                viață."
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-4">
              Modul meu de lucru
            </h2>
            <p className="text-[15px] text-[#6B5070] leading-relaxed mb-10 font-light">
              În lucrul cu oamenii, mă apropii de fiecare proces cu deschidere,
              prezență și profunzime. Nu lucrez doar cu simptomul, ci cu întregul
              context interior al persoanei:
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {approach.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-gradient-to-br from-pink-soft to-[#F5ECFE]/50">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${item.color} flex-shrink-0`}
                  />
                  <p className="text-sm text-purple-dark">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-bg">
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-6">
              Misiunea mea
            </h2>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              Fiecare proces pe care îl ghidez este o întâlnire reală cu omul din
              fața mea — cu durerea lui, dar și cu potențialul lui de transformare.
            </p>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] font-light">
              Sunt autoarea cărții De ce eu? — povestea mea de doliu, ghid pentru
              sufletul tău", născută din propriul meu proces de transformare.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Vrei să lucrăm împreună?"
        subtitle="Fiecare călătorie de transformare începe cu un prim pas. Hai să-l facem împreună."
      />
    </>
  );
}
