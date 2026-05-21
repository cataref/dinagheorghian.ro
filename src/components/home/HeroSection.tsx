"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #1E3230 0%, #264540 18%, #306858 38%, #4A8870 52%, #78B898 68%, #A8D0B8 80%, #D8E8D8 92%, #EEF4EE 100%)" }}>
      {/* Ambient orbs */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,176,96,0.15)_0%,transparent_70%)] animate-[pulseGlow_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(120,200,160,0.1)_0%,transparent_70%)] animate-[pulseGlow_8s_ease-in-out_2s_infinite]" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 pt-28 pb-10 gap-10 lg:gap-14">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[13px] tracking-[3.5px] uppercase font-medium mb-4"
            style={{ color: "#D4C088" }}
          >
            Ghid transformational · Coach
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-[clamp(38px,5vw,58px)] text-white font-normal leading-[1.15]"
          >
            Reconecteaza-te
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-[clamp(38px,5vw,58px)] font-normal leading-[1.15]"
          >
            <span className="gradient-text">cu tine insati</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-[clamp(38px,5vw,58px)] text-white font-normal leading-[1.15]"
          >
            si transforma-ti viata.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-[16.5px] leading-relaxed max-w-[440px] mx-auto lg:mx-0 mt-6 mb-8 font-light"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Sesiuni de transformare interioara, eliberare emotionala si
            reconectare cu sinele autentic. Un spatiu sigur pentru sufletul tau.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-3.5 flex-wrap justify-center lg:justify-start"
          >
            <Link
              href="/contact"
              className="text-white px-9 py-4 rounded-full text-[16px] font-medium hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(135deg, #E870A0, #A855D0)", boxShadow: "0 6px 24px rgba(168,85,208,0.3)" }}
            >
              Programeaza o sesiune
            </Link>
            <Link
              href="/programe"
              className="text-white px-8 py-4 rounded-full text-[16px] hover:bg-white/12 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
            >
              Descopera programele
            </Link>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center flex-shrink-0"
        >
          {/* Photo */}
          <div className="w-[240px] h-[300px] rounded-3xl relative z-10 overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 12px 40px rgba(0,0,0,0.25)" }}>
            <img
              src="/images/dina-portrait.png"
              alt="Dina Gheorghian"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -top-2 -right-5 glass rounded-xl px-4 py-3 z-20 animate-[float_6s_ease-in-out_infinite]">
            <p className="text-[11px] tracking-[2px] uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Autoare
            </p>
            <p className="text-[13px] text-white font-medium">De ce eu?</p>
            <div className="flex gap-1.5 mt-1.5">
              <span className="w-[7px] h-[7px] rounded-full bg-[#D4C088]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#80E8C8]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#F0D060]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#78B898]" />
            </div>
          </div>

          <div className="absolute bottom-2 -left-8 glass rounded-xl px-4 py-3 z-20 animate-[float_6s_ease-in-out_2s_infinite]">
            <p className="text-[11px] tracking-[2px] uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Experienta
            </p>
            <p className="text-[13px] text-white font-medium">
              Psihologie · Coaching
            </p>
          </div>

          {/* Glow behind photo */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(212,176,96,0.2)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
        </motion.div>
      </div>
    </section>
  );
}
