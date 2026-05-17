"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/despre", label: "Despre mine" },
  { href: "/sesiuni", label: "Sesiuni 1:1" },
  { href: "/programe", label: "Programe" },
  {
    href: "/retreaturi",
    label: "Retreaturi",
    children: [
      { href: "/retreaturi", label: "Despre retreaturi" },
      { href: "/retreaturi/mind-soul", label: "Mind & Soul — Iulie 2026" },
    ],
  },
  { href: "/cartea", label: "Cartea" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileRetreatOpen, setMobileRetreatOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileRetreatOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-400 ${
        scrolled || !isHome
          ? "bg-teal-deep/85 backdrop-blur-xl shadow-lg"
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
        {links.map((link) =>
          link.children ? (
            <div key={link.href} className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`text-[16px] transition-colors flex items-center gap-1 ${
                  pathname.startsWith("/retreaturi")
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                <svg
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden"
                    style={{
                      background: "rgba(30,50,48,0.92)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-5 py-3 text-[13px] transition-colors ${
                          pathname === child.href
                            ? "text-white bg-white/10"
                            : "text-white/65 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[16px] transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          )
        )}
        <Link
          href="/contact"
          className="glass text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-white/20 transition-colors"
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
            className="fixed inset-0 z-50 bg-teal-deep/96 backdrop-blur-2xl flex flex-col items-center justify-center gap-5"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-white text-2xl"
              aria-label="Inchide"
            >
              ✕
            </button>
            {links.map((link, i) =>
              link.children ? (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center"
                >
                  <button
                    onClick={() => setMobileRetreatOpen(!mobileRetreatOpen)}
                    className="text-lg text-white/80 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${mobileRetreatOpen ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileRetreatOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col items-center gap-3 mt-3 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="text-[16px] text-white/60 hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
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
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
