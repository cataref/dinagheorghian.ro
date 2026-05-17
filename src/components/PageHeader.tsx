"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHeader({ label, title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background: image or gradient */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,50,48,0.75) 0%, rgba(30,50,48,0.55) 40%, rgba(38,69,64,0.8) 100%)" }} />
        </>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#1E3230_0%,#264540_30%,#306858_60%,#4A8870_80%,#D4B060_100%)]" />
      )}

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,176,96,0.15)_0%,transparent_70%)] animate-[pulseGlow_6s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-3xl pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[15px] md:text-[17px] uppercase tracking-[4px] font-medium mb-6"
          style={{ color: "#F0D888", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(38px,6vw,64px)] text-white font-normal leading-tight"
          style={{ textShadow: "0 3px 12px rgba(0,0,0,0.5)" }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] md:text-[20px] leading-relaxed mt-6 max-w-xl mx-auto font-light"
            style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
