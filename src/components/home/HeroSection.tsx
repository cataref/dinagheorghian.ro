"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(160deg,#1A0A2E_0%,#2D1B4E_20%,#5B2D6E_40%,#8B3A6B_55%,#C45A7C_70%,#E8A0B0_85%,#FDF0F4_100%)]">
      {/* Ambient orbs */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,80,180,0.15)_0%,transparent_70%)] animate-[pulseGlow_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(96,200,168,0.1)_0%,transparent_70%)] animate-[pulseGlow_8s_ease-in-out_2s_infinite]" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 pt-32 pb-20 gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11.5px] tracking-[3.5px] uppercase text-[#E8A0D0] font-medium mb-5"
          >
            Ghid transformațional · Coach
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-[clamp(36px,5vw,56px)] text-white font-normal leading-[1.2]"
          >
            Reconectează-te
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-[clamp(36px,5vw,56px)] font-normal leading-[1.2]"
          >
            <span className="gradient-text">cu tine însăți</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-[clamp(36px,5vw,56px)] text-white font-normal leading-[1.2]"
          >
            și transformă-ți viața.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-[15.5px] text-white/55 leading-relaxed max-w-[420px] mx-auto lg:mx-0 mt-6 mb-9 font-light"
          >
            Sesiuni de transformare interioară, eliberare emoțională și
            reconectare cu sinele autentic. Un spațiu sigur pentru sufletul tău.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-3.5 flex-wrap justify-center lg:justify-start"
          >
            <Link
              href="/contact"
              className="bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-[0_6px_24px_rgba(200,80,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,80,208,0.4)] transition-all"
            >
              Programează o sesiune
            </Link>
            <Link
              href="/programe"
              className="border border-white/25 text-white px-7 py-3.5 rounded-full text-sm bg-white/5 backdrop-blur-md hover:bg-white/12 hover:border-white/40 transition-all"
            >
              Descoperă programele
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
          {/* Photo placeholder */}
          <div className="w-[240px] h-[310px] rounded-3xl glass flex items-center justify-center relative z-10 overflow-hidden">
            <div className="text-center">
              <div className="w-[90px] h-[90px] rounded-full bg-[linear-gradient(135deg,#E870A0,#A060D0)] flex items-center justify-center mx-auto mb-3.5 shadow-[0_0_40px_rgba(232,112,160,0.3)]">
                <svg className="w-9 h-9 fill-white" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <p className="text-sm text-white font-medium">Dina Gheorghian</p>
              <p className="text-[11px] text-white/40 mt-1">Fotografia ta aici</p>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-2 -right-5 glass rounded-xl px-4 py-3 z-20 animate-[float_6s_ease-in-out_infinite]">
            <p className="text-[9px] tracking-[2px] text-white/45 uppercase mb-1">
              Autoare
            </p>
            <p className="text-[12.5px] text-white font-medium">De ce eu?"</p>
            <div className="flex gap-1.5 mt-1.5">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FFB0C8]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#80E8C8]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#F0D060]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#C090F0]" />
            </div>
          </div>

          <div className="absolute bottom-2 -left-8 glass rounded-xl px-4 py-3 z-20 animate-[float_6s_ease-in-out_2s_infinite]">
            <p className="text-[9px] tracking-[2px] text-white/45 uppercase mb-1">
              Experiență
            </p>
            <p className="text-[12.5px] text-white font-medium">
              Psihologie · Coaching
            </p>
          </div>

          {/* Glow behind photo */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(200,80,180,0.2)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
        </motion.div>
      </div>
    </section>
  );
}
