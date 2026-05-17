"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const forYou = [
  "Treci printr-o perioada de doliu sau pierdere",
  "Ai trecut printr-o despartire si simti durere profunda",
  "Cauti sens intr-o experienta dureroasa de viata",
  "Vrei sa intelegi procesul de vindecare emotionala",
  "Esti in cautarea ta de sine si vrei un ghid sincer",
  "Vrei sa ajuti pe cineva care trece prin doliu",
];

const chapters = [
  "Povestea — cum s-a schimbat totul intr-o clipa",
  "Durerea — ce se intampla cand viata se opreste",
  "Confruntarea — intalnirea cu realitatea",
  "Alegerea — momentul in care decizi sa mergi inainte",
  "Transformarea — cum durerea devine putere",
  "Reconectarea — drumul inapoi spre tine",
];

export default function CarteaContent() {
  return (
    <>
      <PageHeader
        label="Cartea"
        title="De ce eu?"
        subtitle="Povestea mea de doliu, ghid pentru sufletul tau."
      />

      {/* Book hero with cover */}
      <section className="py-20 px-6 bg-gradient-to-b from-mint-bg to-white">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-14 items-center">
          {/* Cover */}
          <Reveal className="flex-shrink-0 w-[260px] h-[370px] rounded-2xl bg-[linear-gradient(160deg,#264540,#306858,#4A8870)] relative overflow-hidden shadow-[16px_16px_50px_rgba(38,69,64,0.3)]">
            <div className="absolute inset-6 border border-white/20 rounded-lg flex flex-col justify-end p-6">
              <p className="font-serif text-2xl text-white font-normal leading-snug mb-2">
                De ce eu?
              </p>
              <p className="text-[12px] text-white/50 tracking-wide uppercase mb-1">
                Povestea mea de doliu
              </p>
              <p className="text-[12px] text-white/50 tracking-wide uppercase">
                Dina Gheorghian
              </p>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.15} className="flex-1 text-center md:text-left">
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              De ce eu?" este o carte nascuta dintr-o experienta reala de
              pierdere si transformare profunda. Nu este o carte de dezvoltare
              personala clasica. Este o carte scrisa din suflet, pentru sufletul
              tau.
            </p>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-5 font-light">
              Nu iti arat cum sa mergi mai departe". Iti arat cum poti merge
              mai departe fara sa te pierzi pe tine. Cum poti traversa durerea
              fara sa o eviti, cum poti transforma suferinta intr-o cale de
              crestere autentica.
            </p>
            <p className="text-[16px] text-[#4A6858] leading-[1.9] mb-6 font-light">
              Aceasta carte este povestea mea — dar si ghidul pe care as fi vrut
              sa-l am in cele mai grele momente ale vietii mele.
            </p>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <p className="font-serif text-4xl text-teal-mid">
                58{" "}
                <span className="text-base text-[#88A898] font-sans">RON</span>
              </p>
              <a
                href="#"
                className="inline-block bg-[linear-gradient(135deg,#E870A0,#A855D0)] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-[0_6px_24px_rgba(168,85,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(168,85,208,0.4)] transition-all"
              >
                Comanda cartea
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* For you */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-8 text-center">
              Aceasta carte este pentru tine daca…
            </h2>
          </Reveal>
          <div className="space-y-3">
            {forYou.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-gradient-to-br from-mint-soft to-[#E0F0E8]/50">
                  <span className="w-2 h-2 rounded-full bg-accent-rose mt-1.5 flex-shrink-0" />
                  <p className="text-[16px] text-[#3A5848]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-mint-bg">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-teal-dark font-normal leading-snug mb-8 text-center">
              Ce vei gasi inauntru
            </h2>
          </Reveal>
          <div className="space-y-4">
            {chapters.map((ch, i) => (
              <Reveal key={ch} delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-serif text-accent-lavender/40 flex-shrink-0 w-8 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[16px] text-[#3A5848] font-light">{ch}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-mint-bg">
        <Reveal>
          <div className="max-w-[560px] mx-auto bg-white rounded-3xl p-10 relative text-center">
            <span className="absolute top-3 left-7 font-serif text-[64px] text-gold-light/40 leading-none select-none">
              &ldquo;
            </span>
            <p className="font-serif text-[17px] text-teal-mid leading-relaxed italic mb-4 relative z-10">
              Am citit cartea dintr-o suflare. Am plans, dar nu de tristete — de
              recunoastere. Am simtit ca cineva, in sfarsit, a pus in cuvinte
              ceea ce eu nu am reusit.
            </p>
            <p className="text-xs text-[#78A890]">— Andreea, cititoare</p>
          </div>
        </Reveal>
      </section>

      {/* Buy CTA */}
      <section className="py-20 px-6 bg-white">
        <Reveal>
          <div className="max-w-[500px] mx-auto text-center">
            <p className="font-serif text-3xl text-teal-dark font-normal mb-3">
              58{" "}
              <span className="text-base text-[#88A898] font-sans">RON</span>
            </p>
            <p className="text-[16px] text-[#4A6858] leading-relaxed font-light mb-6">
              Disponibila in format fizic. Livrare in toata Romania.
            </p>
            <a
              href="#"
              className="inline-block bg-[linear-gradient(135deg,#E870A0,#A855D0)] text-white px-10 py-4 rounded-full text-[16px] font-medium shadow-[0_6px_24px_rgba(168,85,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(168,85,208,0.4)] transition-all"
            >
              Comanda cartea
            </a>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Vrei sa vorbim?"
        subtitle="Daca ai citit cartea si simti ca ai nevoie de suport, programeaza o sesiune si hai sa lucram impreuna."
        buttonText="Programeaza o sesiune"
      />
    </>
  );
}
