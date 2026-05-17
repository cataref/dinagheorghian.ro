"use client";

import Link from "next/link";
import Reveal from "./Reveal";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Esti pregatita pentru o schimbare reala?",
  subtitle = "Primul pas este sa decizi ca meriti mai mult. Al doilea este sa actionezi. Programeaza o sesiune si hai sa descoperim impreuna ce este posibil pentru tine.",
  buttonText = "Programeaza o sesiune",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative py-24 px-6 text-center overflow-hidden bg-[linear-gradient(160deg,#264540_0%,#306858_40%,#4A8870_70%,#D4B060_100%)]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,176,96,0.15)_0%,transparent_70%)]" />
      <Reveal className="relative z-10">
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] text-white font-normal mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-white/50 text-[16px] max-w-md mx-auto leading-relaxed mb-9 font-light">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="inline-block bg-[linear-gradient(135deg,#E870A0,#A855D0)] text-white px-10 py-4 rounded-full text-[16px] font-medium shadow-[0_6px_24px_rgba(168,85,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(168,85,208,0.4)] transition-all"
        >
          {buttonText}
        </Link>
      </Reveal>
    </section>
  );
}
