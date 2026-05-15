"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const forYou = [
  "Treci printr-o perioadă de doliu sau pierdere",
  "Ai trecut printr-o despărțire și simți durere profundă",
  "Cauți sens într-o experiență dureroasă de viață",
  "Vrei să înțelegi procesul de vindecare emoțională",
  "Ești în căutarea ta de sine și vrei un ghid sincer",
  "Vrei să ajuți pe cineva care trece prin doliu",
];

const chapters = [
  "Povestea — cum s-a schimbat totul într-o clipă",
  "Durerea — ce se întâmplă când viața se oprește",
  "Confruntarea — întâlnirea cu realitatea",
  "Alegerea — momentul în care decizi să mergi înainte",
  "Transformarea — cum durerea devine putere",
  "Reconectarea — drumul înapoi spre tine",
];

export default function CarteaContent() {
  return (
    <>
      <PageHeader
        label="Cartea"
        title="De ce eu?"
        subtitle="Povestea mea de doliu, ghid pentru sufletul tău."
      />

      {/* Book hero with cover */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-bg to-white">
        <div className="max-w-[900px] mx-auto flex flex-col md:flex-row gap-14 items-center">
          {/* Cover */}
          <Reveal className="flex-shrink-0 w-[260px] h-[370px] rounded-2xl bg-[linear-gradient(160deg,#2D1B4E,#5B2D6E,#8B3A6B)] relative overflow-hidden shadow-[16px_16px_50px_rgba(45,27,78,0.25)]">
            <div className="absolute inset-6 border border-white/20 rounded-lg flex flex-col justify-end p-6">
              <p className="font-serif text-2xl text-white font-normal leading-snug mb-2">
                De ce eu?
              </p>
              <p className="text-[11px] text-white/50 tracking-wide uppercase mb-1">
                Povestea mea de doliu
              </p>
              <p className="text-[11px] text-white/50 tracking-wide uppercase">
                Dina Gheorghian
              </p>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.15} className="flex-1 text-center md:text-left">
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              De ce eu?" este o carte născută dintr-o experiență reală de
              pierdere și transformare profundă. Nu este o carte de dezvoltare
              personală clasică. Este o carte scrisă din suflet, pentru sufletul
              tău.
            </p>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-5 font-light">
              Nu îți arăt cum să mergi mai departe". Îți arăt cum poți merge
              mai departe fără să te pierzi pe tine. Cum poți traversa durerea
              fără să o eviți, cum poți transforma suferința într-o cale de
              creștere autentică.
            </p>
            <p className="text-[15px] text-[#6B5070] leading-[1.9] mb-6 font-light">
              Această carte este povestea mea — dar și ghidul pe care aș fi vrut
              să-l am în cele mai grele momente ale vieții mele.
            </p>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <p className="font-serif text-4xl text-purple-mid">
                58{" "}
                <span className="text-base text-[#A090B0] font-sans">RON</span>
              </p>
              <a
                href="#"
                className="inline-block bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-[0_6px_24px_rgba(200,80,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,80,208,0.4)] transition-all"
              >
                Comandă cartea
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* For you */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-8 text-center">
              Această carte este pentru tine dacă…
            </h2>
          </Reveal>
          <div className="space-y-3">
            {forYou.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-gradient-to-br from-pink-soft to-[#F5ECFE]/50">
                  <span className="w-2 h-2 rounded-full bg-accent-pink mt-1.5 flex-shrink-0" />
                  <p className="text-[14px] text-[#5A4060]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters preview */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-bg">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] text-purple-dark font-normal leading-snug mb-8 text-center">
              Ce vei găsi înăuntru
            </h2>
          </Reveal>
          <div className="space-y-4">
            {chapters.map((ch, i) => (
              <Reveal key={ch} delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-serif text-accent-lavender/40 flex-shrink-0 w-8 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] text-[#5A4060] font-light">{ch}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-pink-bg">
        <Reveal>
          <div className="max-w-[560px] mx-auto bg-white rounded-3xl p-10 relative text-center">
            <span className="absolute top-3 left-7 font-serif text-[64px] text-rose-light/40 leading-none select-none">
              &ldquo;
            </span>
            <p className="font-serif text-[17px] text-purple-mid leading-relaxed italic mb-4 relative z-10">
              Am citit cartea dintr-o suflare. Am plâns, dar nu de tristețe — de
              recunoaștere. Am simțit că cineva, în sfârșit, a pus în cuvinte
              ceea ce eu nu am reușit.
            </p>
            <p className="text-xs text-[#A080B0]">— Andreea, cititoare</p>
          </div>
        </Reveal>
      </section>

      {/* Buy CTA */}
      <section className="py-20 px-6 bg-white">
        <Reveal>
          <div className="max-w-[500px] mx-auto text-center">
            <p className="font-serif text-3xl text-purple-dark font-normal mb-3">
              58{" "}
              <span className="text-base text-[#A090B0] font-sans">RON</span>
            </p>
            <p className="text-[14px] text-[#6B5070] leading-relaxed font-light mb-6">
              Disponibilă în format fizic. Livrare în toată România.
            </p>
            <a
              href="#"
              className="inline-block bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white px-10 py-4 rounded-full text-[15px] font-medium shadow-[0_6px_24px_rgba(200,80,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,80,208,0.4)] transition-all"
            >
              Comandă cartea
            </a>
          </div>
        </Reveal>
      </section>

      <CTABanner
        title="Vrei să vorbim?"
        subtitle="Dacă ai citit cartea și simți că ai nevoie de suport, programează o sesiune și hai să lucrăm împreună."
        buttonText="Programează o sesiune"
      />
    </>
  );
}
