"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const forYou = [
  "Simti ca nu iti mai gasesti locul in viata ta si traiesti fara directie clara",
  "Esti obosita, coplesita si nu mai ai energie pentru tine",
  "Ai trecut prin pierderi, despartiri sau dureri si inca te dor",
  "Te simti singura, chiar si atunci cand esti cu oameni sau intr-o relatie",
  "Repeti aceleasi situatii in relatii si nu stii cum sa le schimbi",
  "Ai stari de anxietate, tristete sau blocaje care iti apasa viata de zi cu zi",
  "Iti este greu sa spui ce ai nevoie si sa pui limite fara vinovatie",
  "Simti ca ai nevoie de o pauza reala, in care sa te linistesti si sa te reconectezi cu tine",
];

const outcomes = [
  { label: "LINISTITA", desc: "Senzatia ca poti fi relaxata, fara griji, fara presiune." },
  { label: "ECHILIBRATA", desc: "O minte mai limpede, mai putin incarcata, capabila sa vada inainte." },
  { label: "ENERGICA", desc: "Un corp mai relaxat si o energie pe care ai uitat ca o poti simti." },
  { label: "ELIBERATA", desc: "Mai putina povara in suflet, pentru ca unele lucruri vor fi lasate sa plece." },
  { label: "INCREZATOARE", desc: "Sentimentul profund ca esti suficienta, exact asa cum esti." },
  { label: "CONECTATA CU TINE", desc: "Fara vinovatie. Fara scuze. Pentru ca meriti." },
  { label: "AUTENTICA", desc: "O intalnire profunda cu cine esti cu adevarat, dincolo de roluri." },
  { label: "PREZENTA", desc: "Vei invata tehnici reale pe care le folosesti acasa pentru a trai mai constient." },
];

const activities = [
  "Ateliere de cunoastere si lucru cu sine",
  "Explorarea intentiilor, convingerilor limitative si blocajelor interioare",
  "Terapia prin regresii si hipnoza Ericksoniana de grup",
  "Meditatii ghidate pentru eliberare emotionala",
  "Identificarea si clarificarea tiparelor repetitive din viata ta",
  "Yoga blanda si exercitii energetice",
  "Invatarea unor instrumente practice de auto-observare",
  "Timp de relaxare la piscina, in natura",
  "Foc de tabara, liniste si reconectare cu tine",
];

const included = [
  "3 nopti de cazare in camera aleasa",
  "Mese all-inclusive: mic dejun, pranz si cina, meniu ovo lacto-vegetarian",
  "Apa terapeutica Kangen din sursa proprie",
  "Selectie de ceaiuri",
  "Acces complet SPA & Wellness: piscina, sauna, jacuzzi, gym, cromoterapie",
  "Workshopuri sustinute de cele 3 facilitatoare",
  "2 sesiuni de hipnoza Ericksoniana de grup",
  "1 terapie prin regresie de grup",
  "Yoga blanda si gimnastica energetica",
  "Meditatii ghidate",
  "Materiale de lucru",
  "Sprijin si suport pe durata retreatului",
];

const testimonials = [
  { name: "Raluca, Bucuresti", text: "Voi pastra aceasta constientizare si blandete fata de mine. Voi folosi tot ce am invatat ca sa construiesc o versiune a mea mai echilibrata si mai autentica." },
  { name: "Alexandra, Bucuresti", text: "A fost o experienta profunda, calda si foarte bine ghidata. M-am simtit ascultata, in siguranta si incurajata sa privesc mai sincer catre mine." },
  { name: "Catalina, Bucuresti", text: "Am invatat sa nu mai intreb De ce eu?, ci Ce pot face mai departe?. Asta mi-a schimbat complet modul de gandire." },
];

const faq = [
  { q: "Agenda mea este mereu blocata. Cum sa plec 4 zile?", a: "Exact de aceea trebuie sa vii. Sentimentul ca nu ai timp este chiar tiparul care te-a epuizat. Te vei intoarce capabila sa pui limite sanatoase." },
  { q: "Nu stiu daca hipnoza functioneaza. Pierd controlul?", a: "Este o falsa temere. Esti pe deplin constienta si in control, noi doar te ghidam." },
  { q: "Am un copil mic. Ma simt vinovata sa ii las.", a: "Nu poti turna dintr-o cana goala. A-ti lua timp pentru tine nu este egoist, ci necesar pentru a fi sanatoasa pentru cei dragi." },
  { q: "Daca vin singura este in regula?", a: "Sigur, poti opta pentru camera single sau sa imparti camera Twin. Se formeaza o legatura frumoasa intre participante." },
  { q: "Pot veni impreuna cu o prietena?", a: "Absolut! Ne bucuram cand femei care se cunosc vin impreuna. In plus, beneficiati de 5% reducere." },
  { q: "Cum ramane cu confidentialitatea?", a: "Nu te fortam sa impartasesti nimic. Confidentialitatea este stricta. Poti fi vulnerabila fara teama de a fi judecata." },
];

const team = [
  {
    name: "Dina Gheorghian",
    role: "Formator | Autor | Psihologie | Sesiuni 1:1 | Ghid Dezvoltare Emotionala",
    photo: "/images/retreat/dina.jpg",
    bio: "Sunt autoarea cartii De ce eu - povestea mea de doliu, ghid pentru sufletul tau si cred ca fiecare om are in el resursele necesare pentru o viata autentica si echilibrata. In retreaturi lucrez cu emotiile ramase in trecut, meditatii ghidate, exercitii energetice si instrumente practice de constientizare.",
    instagram: "https://www.instagram.com/dinagheorghian",
    facebook: "https://www.facebook.com/dina.gureugheorghian",
  },
  {
    name: "Denisse Adlah",
    role: "Coach dezvoltare personala | Terapeut EFT | Studenta psihologie",
    photo: "/images/retreat/denisse.jpg",
    bio: "Sunt coach autorizat in dezvoltare personala si studenta la psihologie, cu formare in Terapia Focusata pe Emotii (EFT). Creez un spatiu in care iti poti observa tiparele de relationare, nu pentru a le judeca, ci pentru a le intelege si transforma.",
    instagram: "",
    facebook: "",
  },
  {
    name: "Andreea Preda",
    role: "Hipnoterapeut | Terapeut Regresii | Life Coach | Trainer",
    photo: "/images/retreat/andreea.jpg",
    bio: "Lucrez la intersectia dintre stiinta si suflet. Sunt hipnoterapeut in Hipnoza Ericksoniana, terapeut prin regresii si formata in terapia cognitiv-comportamentala. Creez un spatiu sigur unde transformarea se simte prin liniste, claritate si reconectare autentica.",
    instagram: "",
    facebook: "",
  },
];

const program = [
  { day: "Ziua 1", title: "Sosire & cunoastere" },
  { day: "Ziua 2", title: "Vindecarea trecutului" },
  { day: "Ziua 3", title: "Renastere & noua directie" },
  { day: "Ziua 4", title: "Integrare & plecare" },
];

const galleryImages = [
  "/images/retreat/gallery-6.jpg",
  "/images/retreat/gallery-7.jpg",
  "/images/retreat/gallery-8.jpg",
  "/images/retreat/gallery-9.jpg",
  "/images/retreat/gallery-10.jpg",
  "/images/retreat/gallery-11.jpg",
  "/images/retreat/gallery-12.jpg",
  "/images/retreat/venue-aerial.jpg",
];

function EarlyBirdCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const target = new Date("2026-06-16T23:59:59").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex gap-4 justify-center">
      {[
        { val: timeLeft.days, label: "Zile" },
        { val: timeLeft.hours, label: "Ore" },
        { val: timeLeft.mins, label: "Min" },
        { val: timeLeft.secs, label: "Sec" },
      ].map((t) => (
        <div key={t.label} className="text-center">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-serif text-white font-normal" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
            {String(t.val).padStart(2, "0")}
          </div>
          <p className="text-[11px] uppercase tracking-wider mt-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>{t.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function MindSoulContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = "https://wa.me/40731196603?text=Buna%2C%20vreau%20detalii%20pentru%20retreatul%20Mind%20Soul";
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeEob2Gczz3TvNS3r7OVwInZodExjWs6mb7UlW9ZdNVlFkXcw/viewform";

  return (
    <>
      <PageHeader label="16-19 Iulie 2026" title="Mind & Soul Retreat" subtitle="Retreat pentru femei - O intoarcere la tine" backgroundImage="/images/retreat/hero-banner.png" />

      {/* Intro */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #EEF4EE 0%, #fff 100%)" }}>
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <p className="font-serif text-2xl italic mb-8" style={{ color: "#264540" }}>"De ce nu sunt fericita?"</p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#4A6858" }}>Poate nu stii exact ce te face sa te simti asa. Poate stii, dar nu reusesti sa schimbi ceva. Sau poate esti pur si simplu obosita sa mai duci totul.</p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#4A6858" }}>In retreatul Mind & Soul ai un spatiu creat pentru femeia care a dat tot si a uitat de ea insasi. Aici te opresti din ritmul zilnic si incepi sa te intelegi cu adevarat.</p>
            <p className="text-[16px] leading-[1.9] font-light" style={{ color: "#4A6858" }}>Acest retreat a fost creat pentru tine - nu este doar o vacanta, ci un drum spre linistea si echilibrul tau.</p>
          </Reveal>
        </div>
      </section>

      {/* What is this retreat */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-6" style={{ color: "#264540" }}>Ce este acest Retreat?</h2>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#4A6858" }}>MIND & SOUL este mai mult decat un retreat. Este o reintalnire cu tine si cu partea din tine pe care poate ai pus-o pe pauza intre responsabilitati, griji si asteptari.</p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#4A6858" }}>Traim intr-un ritm accelerat. Mintea se incarca, corpul oboseste, sufletul tace. Acest retreat este spatiul in care incetinesti. Respiri din nou. Te auzi din nou.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-l-[3px] pl-6 my-8" style={{ borderColor: "#D4B060" }}>
              <p className="font-serif text-xl italic leading-relaxed" style={{ color: "#306858" }}>Nu este o vacanta. Este o intoarcere la tine!</p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* For you */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #fff 0%, #EEF4EE 100%)" }}>
        <div className="max-w-[600px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-8 text-center" style={{ color: "#264540" }}>Este pentru tine daca:</h2></Reveal>
          <div className="space-y-3">
            {forYou.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white" style={{ border: "1px solid rgba(48,104,88,0.08)" }}>
                  <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#D4B060" }} />
                  <p className="text-[16px] leading-relaxed" style={{ color: "#4A6858" }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="text-center mt-10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-full text-[16px] font-medium hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 6px 20px rgba(37,211,102,0.3)" }}>Contacteaza-ne pe WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-10 text-center" style={{ color: "#264540" }}>Cum vei pleca acasa?</h2></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.06}>
                <div className="p-5 rounded-xl" style={{ background: "linear-gradient(135deg, #E8F0E8, #EEF4EE)" }}>
                  <p className="text-[13px] font-semibold tracking-wider mb-2" style={{ color: "#D4B060" }}>{o.label}</p>
                  <p className="text-[16px] leading-relaxed font-light" style={{ color: "#4A6858" }}>{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: "#EEF4EE" }}>
        <div className="max-w-[800px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-10 text-center" style={{ color: "#264540" }}>Testimoniale</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 relative h-full" style={{ border: "1px solid rgba(48,104,88,0.08)" }}>
                  <p className="font-serif text-[16px] italic leading-relaxed mb-4" style={{ color: "#306858" }}>{t.text}</p>
                  <p className="text-[13px]" style={{ color: "#78A890" }}>{t.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-8 text-center" style={{ color: "#264540" }}>Ce facem impreuna</h2></Reveal>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl" style={{ background: "linear-gradient(135deg, #E8F0E8, #EEF4EE)" }}>
                  <span className="text-lg flex-shrink-0 mt-0.5" style={{ color: "#78C8A0" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[16px] leading-relaxed" style={{ color: "#4A6858" }}>{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hypnosis */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #fff 0%, #EEF4EE 100%)" }}>
        <div className="max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(22px,2.5vw,30px)] font-normal leading-snug mb-6" style={{ color: "#264540" }}>Ce este Hipnoza Ericksoniana?</h2>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#4A6858" }}>Hipnoza Ericksoniana nu iti ia controlul - ti-l da inapoi. Ramai prezenta, constienta si in control in fiecare moment. Este o stare naturala de relaxare in care subconstientul devine accesibil.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(22px,2.5vw,30px)] font-normal leading-snug mb-6 mt-10" style={{ color: "#264540" }}>Terapia prin Regresii</h2>
            <p className="text-[16px] leading-[1.9] font-light" style={{ color: "#4A6858" }}>Nu este ezoterism! Este o metodologie structurata, cu protocoale clare, care merge la sursa reala a blocajelor. Vei pleca cu intelegerea clara a unui tipar eliberat, reconectata la corpul tau si la sensul tau de viata.</p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-12 text-center" style={{ color: "#264540" }}>Echipa noastra</h2></Reveal>
          <div className="space-y-10">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-[160px] h-[200px] rounded-2xl overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(212,176,96,0.2)", boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-serif text-xl font-normal mb-1" style={{ color: "#264540" }}>{t.name}</h3>
                    <p className="text-[13px] mb-4" style={{ color: "#D4B060" }}>{t.role}</p>
                    <p className="text-[16px] leading-[1.8] font-light" style={{ color: "#4A6858" }}>{t.bio}</p>
                    {(t.instagram || t.facebook) && (
                      <div className="flex gap-3 mt-4 justify-center md:justify-start">
                        {t.instagram && <a href={t.instagram} target="_blank" rel="noopener noreferrer" className="text-[13px] hover:underline" style={{ color: "#78A890" }}>Instagram</a>}
                        {t.facebook && <a href={t.facebook} target="_blank" rel="noopener noreferrer" className="text-[13px] hover:underline" style={{ color: "#78A890" }}>Facebook</a>}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-20 px-6" style={{ background: "#EEF4EE" }}>
        <div className="max-w-[700px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-8 text-center" style={{ color: "#264540" }}>Ce este inclus</h2></Reveal>
          <div className="space-y-2.5">
            {included.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ fill: "#78C8A0" }} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  <p className="text-[16px]" style={{ color: "#4A6858" }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="mt-6 p-5 rounded-xl bg-white text-center" style={{ border: "2px solid rgba(212,176,96,0.2)" }}>
              <p className="text-[16px]" style={{ color: "#D4B060" }}>Bonus special: O sesiune 1:1 gratuita la alegere cu una dintre cele 3 facilitatoare</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-6 text-center" style={{ color: "#264540" }}>Locatia</h2>
            <p className="text-[16px] leading-relaxed font-light text-center mb-8" style={{ color: "#4A6858" }}>La doar 60 de minute de centrul Bucurestiului, in satul Stanesti din judetul Dambovita.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
              <img src="/images/retreat/venue-aerial.jpg" alt="Youness Wellness & Retreat" className="w-full h-[300px] md:h-[400px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-lg italic text-center leading-relaxed mb-4" style={{ color: "#306858" }}>Un templu de reconectare cu natura si momentul prezent. Un colt de paradis retras si linistit.</p>
            <div className="text-center">
              <a href="https://www.google.com/maps/place/YOUness+WELLness+Clinic+%26+Retreat/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[16px] font-medium" style={{ color: "#306858" }}>Youness Wellness & Retreat →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 px-6" style={{ background: "#EEF4EE" }}>
        <div className="max-w-[600px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-8 text-center" style={{ color: "#264540" }}>Programul</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {program.map((p, i) => (
              <Reveal key={p.day} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-5 text-center">
                  <p className="text-[12px] uppercase tracking-wider mb-2" style={{ color: "#D4B060" }}>{p.day}</p>
                  <p className="text-[16px] font-medium" style={{ color: "#264540" }}>{p.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-10 text-center" style={{ color: "#264540" }}>Galerie</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img src={src} alt="Retreat" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(160deg, #1E3230 0%, #264540 30%, #306858 60%, #4A8870 100%)" }}>
        <div className="max-w-[700px] mx-auto text-center">
          <Reveal>
            <p className="text-[12px] uppercase tracking-[3px] font-medium mb-5" style={{ color: "#D4C088" }}>Investitia ta</p>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] text-white font-normal mb-10">Alege varianta potrivita</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-8 mb-6" style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(212,176,96,0.3)", backdropFilter: "blur(12px)" }}>
              <p className="text-[13px] uppercase tracking-wider mb-2" style={{ color: "#D4B060" }}>Early Booking - pana pe 16 iunie</p>
              <p className="font-serif text-5xl text-white font-normal mb-1">2.750</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>RON</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-[12px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Cam. dubla</p>
                <p className="font-serif text-2xl text-white">2.950 <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>RON</span></p>
              </div>
              <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-[12px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Cam. single</p>
                <p className="font-serif text-2xl text-white">3.320 <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>RON</span></p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-2 mb-8 text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              <p>Locuri limitate - doar 20 de locuri</p>
              <p>Plata in 2 transe: avans 40% la inscriere, diferenta pana pe 6 iulie 2026</p>
              <p>Vino cu o prietena si beneficiati amandoua de 5% reducere</p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-white px-10 py-4 rounded-full text-[16px] font-medium hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #E870A0, #A855D0)", boxShadow: "0 6px 24px rgba(168,85,208,0.3)" }}>Vreau locul meu!</a>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <p className="text-[12px] uppercase tracking-[3px] mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>Timp ramas pentru Early Booking</p>
              <EarlyBirdCountdown />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[700px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(24px,3vw,34px)] font-normal leading-snug mb-10 text-center" style={{ color: "#264540" }}>Intrebari frecvente</h2></Reveal>
          <div className="space-y-3">
            {faq.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(48,104,88,0.08)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <p className="text-[16px] font-medium pr-4" style={{ color: "#264540" }}>{f.q}</p>
                    <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} style={{ fill: "#D4B060" }} viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-[16px] leading-relaxed font-light" style={{ color: "#4A6858" }}>{f.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "linear-gradient(160deg, #264540 0%, #306858 40%, #4A8870 70%, #D4B060 100%)" }}>
        <Reveal>
          <p className="font-serif text-[clamp(22px,3vw,32px)] text-white font-normal leading-snug max-w-lg mx-auto mb-4">Ai investit deja atat de mult in toti ceilalti.</p>
          <p className="text-white/55 text-[16px] mb-8 font-light">Aceste 4 zile sunt pentru tine. Meriti asta!</p>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-white px-10 py-4 rounded-full text-[16px] font-medium hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #E870A0, #A855D0)", boxShadow: "0 6px 24px rgba(168,85,208,0.3)" }}>Da! Vreau locul meu!</a>
        </Reveal>
      </section>
    </>
  );
}
