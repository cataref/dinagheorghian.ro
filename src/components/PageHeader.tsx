"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center text-center px-6 overflow-hidden bg-[linear-gradient(160deg,#1A0A2E_0%,#2D1B4E_30%,#5B2D6E_60%,#8B3A6B_80%,#C45A7C_100%)]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(200,80,180,0.15)_0%,transparent_70%)] animate-[pulseGlow_6s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-2xl pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] uppercase tracking-[3.5px] text-rose-light/70 font-medium mb-5"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(32px,5vw,48px)] text-white font-normal leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-[15px] leading-relaxed mt-5 max-w-lg mx-auto font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
