"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

const placeholderPosts = [
  {
    title: "De ce durerea emoțională nu dispare dacă o ignori",
    excerpt:
      "Mulți oameni cred că dacă nu se gândesc la durere, aceasta va dispare. În realitate, emoțiile neexprimate nu dispar — se acumulează.",
    category: "Emoții",
    color: "#E870A0",
  },
  {
    title: "Cum să traversezi o perioadă de doliu",
    excerpt:
      "Doliul nu are un calendar. Nu există un moment corect în care ar trebui să te simți mai bine. Iată ce poți face pentru tine.",
    category: "Doliu",
    color: "#78B898",
  },
  {
    title: "Ce înseamnă cu adevărat reconectarea cu tine",
    excerpt:
      "Reconectarea cu tine nu este un concept abstract. Este un proces real, cu etape concrete, pe care îl poți parcurge conștient.",
    category: "Transformare",
    color: "#60C8A8",
  },
];

export default function BlogContent() {
  return (
    <>
      <PageHeader
        label="Blog & Resurse"
        title="Gânduri, reflecții și ghiduri"
        subtitle="Articole despre transformare interioară, emoții, relații și reconectare cu sinele autentic."
      />

      <section className="py-20 px-6 bg-gradient-to-b from-mint-bg to-white">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placeholderPosts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.1}>
                <article className="bg-white rounded-2xl border border-teal-bright/8 overflow-hidden hover:shadow-[0_12px_40px_rgba(48,104,88,0.06)] transition-shadow group cursor-pointer">
                  {/* Gradient header bar */}
                  <div className="h-32 bg-gradient-to-br from-[#306858] to-[#4A8870] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
                  </div>
                  <div className="p-6">
                    <span
                      className="inline-block text-[10px] text-white px-2.5 py-0.5 rounded-full font-medium mb-3"
                      style={{ background: post.color }}
                    >
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg text-teal-dark font-normal leading-snug mb-2 group-hover:text-teal-mid transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[13px] text-[#4A6858] leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Coming soon notice */}
          <Reveal delay={0.3}>
            <div className="mt-14 text-center">
              <div className="inline-block bg-gradient-to-br from-mint-soft to-[#E0F0E8]/50 rounded-2xl px-10 py-8">
                <p className="font-serif text-xl text-teal-dark font-normal mb-2">
                  Mai multe articole în curând
                </p>
                <p className="text-[14px] text-[#4A6858] font-light">
                  Blogul este în construcție. Urmărește-mă pe social media pentru
                  actualizări.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Vrei să lucrăm împreună?"
        subtitle="Dacă un articol ți-a rezonat, poate este momentul să facem un pas mai departe."
      />
    </>
  );
}
