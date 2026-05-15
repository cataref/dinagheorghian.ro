"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/despre", label: "Despre mine" },
  { href: "/sesiuni", label: "Sesiuni 1:1" },
  { href: "/programe", label: "Programe" },
  { href: "/retreaturi", label: "Retreaturi" },
  { href: "/cartea", label: "Cartea" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-400 ${
        scrolled || !isHome
          ? "bg-purple-deep/85 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="font-serif text-[22px] text-white font-medium tracking-wide"
      >
        Dina Gheorghian
      </Link>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-7">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[13.5px] transition-colors ${
              pathname === link.href
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="glass text-white text-[12.5px] font-medium px-5 py-2 rounded-full hover:bg-white/20 transition-colors"
        >
          Contul meu
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden flex flex-col gap-[5px] p-1 z-[60]"
        aria-label="Meniu"
      >
        <span
          className={`w-[22px] h-[2px] bg-white rounded transition-transform ${
            open ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`w-[22px] h-[2px] bg-white rounded transition-opacity ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-[22px] h-[2px] bg-white rounded transition-transform ${
            open ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-purple-deep/96 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-white text-2xl"
              aria-label="Închide"
            >
              ✕
            </button>
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
