"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const subjects = [
  "Vreau să programez o sesiune 1:1",
  "Sunt interesată de un program de grup",
  "Vreau informații despre retreaturi",
  "Vreau să comand cartea",
  "Altceva",
];

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to API route / email service
    setSent(true);
  };

  return (
    <>
      <PageHeader
        label="Contact"
        title="Hai să vorbim"
        subtitle="Completează formularul de mai jos sau scrie-mi direct pe email. Răspund personal la fiecare mesaj."
      />

      <section className="py-20 px-6 bg-gradient-to-b from-pink-bg to-white">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Form */}
          <Reveal>
            {sent ? (
              <div className="bg-gradient-to-br from-pink-soft to-[#F5ECFE]/50 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-accent-teal/20 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 fill-accent-teal"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-purple-dark font-normal mb-3">
                  Mesaj trimis!
                </h3>
                <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
                  Mulțumesc! Voi reveni cu un răspuns cât mai curând posibil.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="font-serif text-2xl text-purple-dark font-normal mb-6">
                  Scrie-mi un mesaj
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] text-purple-mid/60 mb-1.5 tracking-wide uppercase">
                      Numele tău
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-purple-bright/12 bg-white text-[14px] text-purple-dark placeholder:text-[#C0B0C8] focus:outline-none focus:border-accent-pink/40 focus:ring-2 focus:ring-accent-pink/10 transition-all"
                      placeholder="Numele complet"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-purple-mid/60 mb-1.5 tracking-wide uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-purple-bright/12 bg-white text-[14px] text-purple-dark placeholder:text-[#C0B0C8] focus:outline-none focus:border-accent-pink/40 focus:ring-2 focus:ring-accent-pink/10 transition-all"
                      placeholder="adresa@email.ro"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] text-purple-mid/60 mb-1.5 tracking-wide uppercase">
                      Subiect
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-purple-bright/12 bg-white text-[14px] text-purple-dark focus:outline-none focus:border-accent-pink/40 focus:ring-2 focus:ring-accent-pink/10 transition-all appearance-none"
                    >
                      <option value="">Alege un subiect</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] text-purple-mid/60 mb-1.5 tracking-wide uppercase">
                      Mesajul tău
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-purple-bright/12 bg-white text-[14px] text-purple-dark placeholder:text-[#C0B0C8] focus:outline-none focus:border-accent-pink/40 focus:ring-2 focus:ring-accent-pink/10 transition-all resize-none"
                      placeholder="Scrie-mi ce ai pe suflet..."
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[linear-gradient(135deg,#E870A0,#C050D0)] text-white py-3.5 rounded-full text-[14px] font-medium shadow-[0_6px_24px_rgba(200,80,208,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(200,80,208,0.4)] transition-all cursor-pointer"
                  >
                    Trimite mesajul
                  </button>
                </div>
              </div>
            )}
          </Reveal>

          {/* Info sidebar */}
          <Reveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl text-purple-dark font-normal mb-3">
                  Contact direct
                </h3>
                <a
                  href="mailto:contact@dinagheorghian.ro"
                  className="text-[14px] text-accent-pink hover:underline"
                >
                  contact@dinagheorghian.ro
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl text-purple-dark font-normal mb-3">
                  Social media
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-soft to-[#F5ECFE] flex items-center justify-center hover:shadow-md transition-shadow"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-4.5 h-4.5 fill-purple-mid"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-soft to-[#F5ECFE] flex items-center justify-center hover:shadow-md transition-shadow"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-4.5 h-4.5 fill-purple-mid"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-soft to-[#F5ECFE]/50 rounded-2xl p-7">
                <h3 className="font-serif text-lg text-purple-dark font-normal mb-3">
                  Timp de răspuns
                </h3>
                <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
                  Răspund de obicei în 24-48 de ore. Dacă dorești o programare
                  urgentă, menționează asta în mesaj.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-soft to-[#F5ECFE]/50 rounded-2xl p-7">
                <h3 className="font-serif text-lg text-purple-dark font-normal mb-3">
                  Sesiuni online
                </h3>
                <p className="text-[14px] text-[#6B5070] leading-relaxed font-light">
                  Toate sesiunile se desfășoară online prin Zoom. Vei primi
                  link-ul de conectare după confirmarea programării.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
