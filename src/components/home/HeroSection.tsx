"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #1A0A2E 0%, #2D1B4E 20%, #5B2D6E 40%, #8B3A6B 60%, #6B3068 80%, #4A2555 100%)" }}>
      {/* Ambient orbs */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,80,180,0.15)_0%,transparent_70%)] animate-[pulseGlow_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(96,200,168,0.1)_0%,transparent_70%)] animate-[pulseGlow_8s_ease-in-out_2s_infinite]" />

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center px-6 md:px-12 pt-28 pb-12 gap-10 lg:gap-14">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11.5px] tracking-[3.5px] uppercase font-medium mb-4"
            style={{ color: "#E8A0D0" }}
          >
            Ghid transforma\u021Bional \u00B7 Coach
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-[clamp(34px,4.5vw,52px)] text-white font-normal leading-[1.15]"
          >
            Reconecteaz\u0103-te
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-[clamp(34px,4.5vw,52px)] font-normal leading-[1.15]"
          >
            <span className="gradient-text">cu tine \u00EEns\u0103\u021Bi</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-[clamp(34px,4.5vw,52px)] text-white font-normal leading-[1.15]"
          >
            \u0219i transform\u0103-\u021Bi via\u021Ba.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-[15px] leading-relaxed max-w-[400px] mx-auto lg:mx-0 mt-5 mb-7 font-light"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Sesiuni de transformare interioar\u0103, eliberare emo\u021Bional\u0103 \u0219i
            reconectare cu sinele autentic. Un spa\u021Biu sigur pentru sufletul t\u0103u.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-3.5 flex-wrap justify-center lg:justify-start"
          >
            <Link
              href="/contact"
              className="text-white px-8 py-3.5 rounded-full text-sm font-medium hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(135deg, #E870A0, #C050D0)", boxShadow: "0 6px 24px rgba(200,80,208,0.3)" }}
            >
              Programeaz\u0103 o sesiune
            </Link>
            <Link
              href="/programe"
              className="text-white px-7 py-3.5 rounded-full text-sm hover:bg-white/12 transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
            >
              Descoper\u0103 programele
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
          <div className="w-[220px] h-[280px] rounded-3xl glass flex items-center justify-center relative z-10 overflow-hidden">
            <div className="text-center">
              <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #E870A0, #A060D0)", boxShadow: "0 0 40px rgba(232,112,160,0.3)" }}>
                <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <p className="text-sm text-white font-medium">Dina Gheorghian</p>
              <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Fotografia ta aici</p>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-2 -right-5 glass rounded-xl px-4 py-3 z-20 animate-[float_6s_ease-in-out_infinite]">
            <p className="text-[9px] tracking-[2px] uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Autoare
            </p>
            <p className="text-[12.5px] text-white font-medium">De ce eu?</p>
            <div className="flex gap-1.5 mt-1.5">
              <span className="w-[7px] h-[7px] rounded-full bg-[#FFB0C8]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#80E8C8]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#F0D060]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#C090F0]" />
            </div>
          </div>

          <div className="absolute bottom-2 -left-8 glass rounded-xl px-4 py-3 z-20 animate-[float_6s_ease-in-out_2s_infinite]">
            <p className="text-[9px] tracking-[2px] uppercase mb-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              Experien\u021B\u0103
            </p>
            <p className="text-[12.5px] text-white font-medium">
              Psihologie \u00B7 Coaching
            </p>
          </div>

          {/* Glow behind photo */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(200,80,180,0.2)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
        </motion.div>
      </div>
    </section>
  );
}
