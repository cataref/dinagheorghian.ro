"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const forYou = [
  "Simti ca nu iti mai gasesti locul in viata ta si traiesti fara directie clara;",
  "Esti obosita, coplesita si nu mai ai energie pentru tine;",
  "Ai trecut prin pierderi, despartiri sau dureri si inca te dor;",
  "Te simti singura, chiar si atunci cand esti cu oameni sau intr-o relatie;",
  "Repeti aceleasi situatii in relatii si nu stii cum sa le schimbi;",
  "Ai stari de anxietate, tristete sau blocaje care iti apasa viata de zi cu zi;",
  "Iti este greu sa spui ce ai nevoie si sa pui limite fara vinovatie;",
  "Simti ca ai nevoie de o pauza reala, in care sa te linistesti si sa te reconectezi cu tine.",
];

const outcomes = [
  { label: "LINISTITA", desc: "Senzatia ca poti fi relaxata, fara griji, fara presiune, fara asteptari." },
  { label: "ECHILIBRATA", desc: "O minte mai limpede, mai putin incarcata, capabila sa vada inainte." },
  { label: "ENERGICA", desc: "Un corp mai relaxat si o energie pe care ai uitat ca o poti simti." },
  { label: "ELIBERATA", desc: "Mai putina povara in suflet, pentru ca unele lucruri vor fi lasate sa plece." },
  { label: "INCREZATOARE", desc: "Sentimentul profund ca esti suficienta, exact asa cum esti." },
  { label: "CONECTATA CU TINE", desc: "Fara vinovatie. Fara scuze. Pentru ca meriti." },
  { label: "AUTENTICA", desc: "O intalnire profunda cu cine esti cu adevarat, dincolo de roluri si asteptari." },
  { label: "PREZENTA", desc: "Vei invata tehnici reale pe care le folosesti acasa pentru a-ti gestiona emotiile si a trai mai constient." },
];

const activities = [
  "Ateliere de cunoastere si lucru cu sine;",
  "Explorarea intentiilor, convingerilor limitative, obiectivelor si blocajelor interioare;",
  "Terapia prin regresii si hipnoza Ericksoniana de grup;",
  "Meditatii ghidate pentru eliberare emotionala;",
  "Identificarea si clarificarea tiparelor repetitive din viata ta;",
  "Yoga blanda si exercitii energetice;",
  "Invatarea unor instrumente practice de auto-observare si constientizare;",
  "Timp de relaxare la piscina, in natura;",
  "Foc de tabara, liniste si reconectare cu tine;",
];

const included = [
  "3 nopti de cazare in camera aleasa;",
  "Mese all-inclusive tip buffet: Mic dejun, pranz si cina, cu meniu exclusiv ovo lacto-vegetarian: aperitive, salate, preparate calde gatite, supe/ciorbe, deserturi, fructe, nuci si ceaiuri;",
  "Apa terapeutica Kangen din sursa proprie;",
  "Selectie de ceaiuri;",
  "Acces complet SPA & Wellness: Piscina exterioara, Sauna umeda, Sauna uscata, Jacuzzi interior, Gym / Cardio Room, Camera de relaxare cu cromoterapie;",
  "Workshopuri sustinute de cele 3 facilitatoare;",
  "2 sesiuni de hipnoza Ericksoniana de grup;",
  "1 terapie prin regresie de grup;",
  "Yoga blanda si gimnastica energetica;",
  "Meditatii ghidate;",
  "Materiale de lucru;",
  "Sprijin si suport pe durata retreatului;",
];

const testimonials = [
  { name: "Raluca, Bucuresti", text: "Mai departe voi pastra aceasta constientizare si blandetea fata de mine. Voi folosi tot ce am invatat ca sa construiesc, pas cu pas, o versiune a mea mai echilibrata si mai autentica." },
  { name: "Alexandra, Bucuresti", text: "A fost o experienta profunda, calda si foarte bine ghidata. M-am simtit ascultata, in siguranta si incurajata sa privesc mai sincer catre mine, catre alegerile mele si catre sensul din spatele lor." },
  { name: "Catalina, Bucuresti", text: "Am invatat sa nu mai intreb \"De ce eu?\", ci \"Ce pot face mai departe?\". Asta mi-a schimbat complet modul de gandire." },
  { name: "Bianca, Bucuresti", text: "Nu ma asteptam sa gasesc un psihoterapeut perfect pentru mine din prima incercare. Dupa prima sedinta Andreea a fost exact persoana de care aveam nevoie. Empatie, profesionalism, in cabinetul ei ma simt intotdeauna in siguranta, ascultata, inteleasa, niciodata judecata. Am gasit destul de greoi procesul de schimbare si de dezvoltare personala, dar sunt sigura ca fara instrumentele Andreei si incurajarile ei nu as fi reusit." },
];

const faq = [
  { q: "Agenda mea este mereu blocata. Cum sa plec 4 zile?", a: "Exact de aceea trebuie sa vii. Sentimentul ca \"nu ai timp\" este chiar tiparul care te-a epuizat. Te vei intoarce o femeie capabila sa puna limite sanatoase." },
  { q: "Nu stiu daca hipnoza sau regresia functioneaza. Pierd controlul?", a: "Este o falsa temere. \"Toata hipnoza este auto-hipnoza\" (Milton Erickson). Esti pe deplin constienta si in control, noi doar te ghidam." },
  { q: "Am un copil mic / Familie. Ma simt vinovata sa ii las.", a: "Nu poti turna dintr-o cana goala. A-ti lua timp pentru tine nu este un act egoist, ci o necesitate pentru a fi sanatoasa pentru cei dragi tie." },
  { q: "Daca vin singura este in regula?", a: "Sigur, poti opta pentru camera single sau sa imparti camera Twin cu o alta persoana. In acel spatiu se formeaza o legatura frumoasa intre participante." },
  { q: "Pot veni impreuna cu o prietena?", a: "Absolut! De fapt, ne bucuram cand femei care se cunosc vin impreuna, se creeaza o dinamica frumoasa. In plus, beneficiati de reducere." },
  { q: "Cum ramane cu confidentialitatea? Mi-e teama de grup.", a: "Nu te fortam sa impartasesti nimic din ce nu doresti. Confidentialitatea este o regula stricta. Aici poti fi vulnerabila fara teama de a fi judecata." },
];

const team = [
  {
    name: "Dina Gheorghian",
    role: "Formator | Autor | Psihologie | Sesiuni 1:1 | Ghid Dezvoltare Emotionala si Spirituala",
    photo: "/images/retreat/dina.jpg",
    bio: "Ma numesc Dina, sunt autoarea cartii \"De ce eu - povestea mea de doliu, ghid pentru sufletul tau\" si cred ca fiecare om are in el resursele necesare pentru o viata autentica si echilibrata. Misiunea mea este sa creez spatii sigure in care intoarcerea la sine devine posibila.\n\nParcursul meu imbina coaching-ul, studiul psihologiei si intelegerea profunda a emotiilor, vindecarii trecutului si transformarii interioare. Sunt si studenta la psihologie, pentru ca evolutia si cunoasterea nu se opresc niciodata.\n\nIn retreaturi lucrez cu emotiile ramase in trecut, meditatii ghidate, exercitii energetice si instrumente practice de constientizare, astfel incat fiecare femeie sa plece mai linistita, mai clara si mai aproape de ea insasi.",
    instagram: "https://www.instagram.com/dinagheorghian",
    facebook: "https://www.facebook.com/dina.gureugheorghian",
  },
  {
    name: "Denisse Adlah",
    role: "Coach dezvoltare personala | Ghid procese autocunoastere | Terapeut EFT | Studenta psihologie",
    photo: "/images/retreat/andreea.jpg",
    bio: "Ma numesc Denisse si cred ca fiecare om are o harta interioara unica, iar rolul meu este sa te ajut sa o intelegi mai clar.\n\nSunt coach autorizat in dezvoltare personala, astrolog si studenta la psihologie, cu formare in Terapia Focusata pe Emotii (EFT). Am ales acest mix pentru ca sunt interesata de felul in care gandim, simtim si ne schimbam cu adevarat.\n\nAstrologia imi arata tiparele mai profunde ale fiintei, coaching-ul ofera directie si instrumente de schimbare, iar EFT-ul lucreaza cu emotiile si corpul atunci cand mintea nu mai gaseste raspunsuri. Psihologia completeaza aceasta intelegere a omului in profunzime.\n\nIn acest retreat, creez un spatiu in care iti poti observa tiparele de relationare si reactie, nu pentru a le judeca, ci pentru a le intelege si transforma. Lucrez cu blandetea, claritate si respect pentru ritmul fiecarei femei.",
    instagram: "",
    facebook: "",
  },
  {
    name: "Andreea Preda",
    role: "Hipnoterapeut | Terapeut acreditat in Terapia prin Regresii in Vieti Anterioare | Life Coach | Trainer | Studenta psihologie - formare CBT",
    photo: "/images/retreat/denisse.jpg",
    bio: "Ma numesc Andreea si lucrez la intersectia dintre stiinta si suflet. Am pornit din propria experienta de a trai intre performanta exterioara si gol interior, ceea ce m-a dus spre o intelegere profunda a omului dincolo de roluri si aparente.\n\nSunt coach autorizat in leadership si dezvoltare personala, hipnoterapeut in Hipnoza Ericksonianna, terapeut prin regresii in vieti anterioare, studenta la psihologie si formata in terapia cognitiv-comportamentala.\n\nLucrez integrativ: terapia cognitiv-comportamentala aduce claritate si instrumente practice, hipnoza lucreaza cu subconstientul si tiparele vechi, iar regresiile exploreaza rani si blocaje profunde pentru a fi intelese si eliberate.\n\nIn acest retreat lucrez cu femei puternice, dar obosite interior, care simt ca s-au indepartat de ele insele. Creez un spatiu sigur, unde transformarea se simte prin liniste, claritate si reconectare autentica cu sine.",
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

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" style={{ fill: "#D4B060" }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

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
          <p className="text-[12px] uppercase tracking-wider mt-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>{t.label}</p>
        </div>
      ))}
    </div>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-pointer" style={{ background: "rgba(0,0,0,0.85)" }} onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl z-10">&times;</button>
      <img src={src} alt="Gallery" className="max-w-full max-h-[90vh] rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}


function StickyCtaBar() {
  const [isSticky, setIsSticky] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const whatsappUrl = "https://wa.me/40731196603?text=Buna%2C%20vreau%20detalii%20pentru%20retreatul%20Mind%20Soul";
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeEob2Gczz3TvNS3r7OVwInZodExjWs6mb7UlW9ZdNVlFkXcw/viewform";

  const buttons = (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full text-[15px] font-medium hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #C0392B, #8E44AD)", boxShadow: "0 6px 20px rgba(142,68,173,0.3)" }}>Inscrie-te acum</a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full text-[15px] font-medium hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 6px 20px rgba(37,211,102,0.25)" }}>
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
      <a href="#pricing" className="inline-flex items-center gap-2 text-white px-7 py-3 rounded-full text-[15px] font-medium hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #B8860B, #8B6914)", boxShadow: "0 6px 20px rgba(184,134,11,0.3)" }}>Oferta Early Booking</a>
    </div>
  );

  return (
    <>
      {/* Sentinel + inline bar */}
      <div ref={sentinelRef} />
      <div ref={barRef} className="py-14 px-6">
        <div className="max-w-[700px] mx-auto">
          {buttons}
        </div>
      </div>

      {/* Sticky floating bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isSticky ? "translate-y-[60px] opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="max-w-[700px] mx-auto py-3 px-4">
          {buttons}
        </div>
      </div>
    </>
  );
}

export default function MindSoulContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const whatsappUrl = "https://wa.me/40731196603?text=Buna%2C%20vreau%20detalii%20pentru%20retreatul%20Mind%20Soul";
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeEob2Gczz3TvNS3r7OVwInZodExjWs6mb7UlW9ZdNVlFkXcw/viewform";

  return (
    <>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}

      <PageHeader
        label="16-19 Iulie 2026"
        title="Mind & Soul Retreat"
        subtitle="Retreat pentru femei - O intoarcere la tine"
        backgroundImage="/images/retreat/hero-banner.png"
      />

      {/* Intro */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #EEF4EE 0%, #fff 100%)" }}>
        <div className="max-w-[1000px] mx-auto text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-3xl italic mb-8" style={{ color: "#1a1a1a" }}>"De ce nu sunt fericita?"</p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Poate nu stii exact ce te face sa te simti asa. Poate stii, dar nu reusesti sa schimbi ceva. Sau poate esti pur si simplu obosita sa mai duci totul.
            </p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              In retreatul Mind & Soul ai un spatiu creat pentru femeia care a dat tot si a uitat de ea insasi. Aici te opresti din ritmul zilnic si incepi sa te intelegi cu adevarat. Te eliberezi de emotiile si blocajele din trecut care iti influenteaza prezentul, inveti sa iti observi mintea si tiparele si incepi sa creezi mai constient directia in care vrei sa mergi.
            </p>
            <p className="text-[16px] leading-[1.9] font-light" style={{ color: "#2a2a2a" }}>
              Acest retreat a fost creat pentru tine, nu este doar o vacanta, ci un drum spre linistea si echilibrul tau - spre fericire!
            </p>
          </Reveal>
        </div>
      </section>


      <StickyCtaBar />

      {/* What is this retreat */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-6" style={{ color: "#1a1a1a" }}>Ce este acest Retreat?</h2>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              MIND & SOUL este mai mult decat un retreat. Este o reintalnire cu tine si cu partea din tine pe care poate ai pus-o pe pauza intre responsabilitati, griji si asteptari.
            </p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Vindecarea incepe in momentul cand te auzi cu adevarat, dincolo de agitatie, roluri, masti si tot ce ai fost nevoita sa porti.
            </p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Traim intr-un ritm accelerat. Mintea se incarca, corpul oboseste, sufletul tace. Uneori simti ca doar supravietuiesti.
            </p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Acest retreat este spatiul in care incetinesti. Respiri din nou. Te auzi din nou. Te simti din nou.
            </p>
            <p className="text-[16px] leading-[1.9] font-light" style={{ color: "#2a2a2a" }}>
              Atunci cand te intorci la tine, totul incepe sa se aseze. Am creat acest spatiu pentru tine - sa respiri, sa te auzi, sa afli cine esti.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="border-l-[3px] pl-6 my-8" style={{ borderColor: "#D4B060" }}>
              <p className="font-serif text-xl italic leading-relaxed" style={{ color: "#1a1a1a" }}>Nu este o vacanta. Este o intoarcere la tine!</p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* For you */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #fff 0%, #EEF4EE 100%)" }}>
        <div className="max-w-[900px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-8 text-center" style={{ color: "#1a1a1a" }}>Este pentru tine daca:</h2></Reveal>
          <div className="space-y-3">
            {forYou.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white" style={{ border: "1px solid rgba(48,104,88,0.08)" }}>
                  <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#D4B060" }} />
                  <p className="text-[16px] leading-relaxed" style={{ color: "#2a2a2a" }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>


      {/* Outcomes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-10 text-center" style={{ color: "#1a1a1a" }}>Cum vei pleca acasa?</h2></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((o, i) => (
              <Reveal key={o.label} delay={i * 0.06}>
                <div className="p-5 rounded-xl" style={{ background: "linear-gradient(135deg, #E8F0E8, #EEF4EE)" }}>
                  <p className="text-[13px] font-semibold tracking-wider mb-2" style={{ color: "#D4B060" }}>{o.label}</p>
                  <p className="text-[16px] leading-relaxed font-light" style={{ color: "#2a2a2a" }}>{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 px-6" style={{ background: "#EEF4EE" }}>
        <div className="max-w-[1000px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-10 text-center" style={{ color: "#1a1a1a" }}>Testimoniale</h2></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col" style={{ border: "1px solid rgba(48,104,88,0.08)" }}>
                  <p className="font-serif text-[16px] italic leading-relaxed mb-4 flex-1" style={{ color: "#1a1a1a" }}>{t.text}</p>
                  <div className="flex items-center justify-between">
                    <Stars />
                    <p className="text-[13px]" style={{ color: "#78A890" }}>{t.name}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-8 text-center" style={{ color: "#1a1a1a" }}>Ce facem impreuna</h2></Reveal>
          <div className="space-y-3">
            {activities.map((a, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3.5 p-4 rounded-xl" style={{ background: "linear-gradient(135deg, #E8F0E8, #EEF4EE)" }}>
                  <span className="text-lg flex-shrink-0 mt-0.5" style={{ color: "#78C8A0" }}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[16px] leading-relaxed" style={{ color: "#2a2a2a" }}>{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Hypnosis & Regression - FULL TEXT */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #fff 0%, #EEF4EE 100%)" }}>
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(26px,2.8vw,38px)] font-semibold leading-snug mb-6" style={{ color: "#1a1a1a" }}>Ce este Hipnoza Ericksoniana si Terapia prin regresii</h2>

            <h3 className="font-serif text-[22px] font-semibold mb-4 mt-8" style={{ color: "#1a1a1a" }}>Hipnoza Ericksoniana</h3>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Probabil primul gand este: "O sa pierd controlul." Nu se intampla asta. Sau "Imi voi pierde controlul." Nu, nu adormi, nu "dispari", nu esti vulnerabila in fata nimanui. Esti pur si simplu mai conectata cu tine - mai putin zgomot, mai mult tu.
            </p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Hipnoza Ericksoniana nu iti ia controlul - ti-l da inapoi.
            </p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Ramai prezenta, constienta si in control in fiecare moment. Nu adormi, nu "dispari" si nimeni nu iti poate sugera ceva ce tu nu accepti. Este o stare naturala de relaxare, pe care o cunosti deja, ca atunci cand esti absorbita intr-o carte sau in ganduri, in care te conectezi mai profund cu tine. Aici, subconstientul devine accesibil si schimbarea se intampla la un nivel mai profund decat prin simpla discutie.
            </p>

            <h3 className="font-serif text-[22px] font-semibold mb-4 mt-8" style={{ color: "#1a1a1a" }}>Terapia prin Regresii in Vieti Anterioare (metodologie PLRA, acreditata international)</h3>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Nu este ezoterism! Este o metodologie structurata, cu protocoale clare, care merge la sursa reala a blocajelor, acolo unde terapia clasica nu ajunge intotdeauna. Nu trebuie sa crezi in reincarnare. Procesul poate fi trait ca o metafora terapeutica, o vizualizare sau o explorare a subconstientului, efectul de vindecare este acelasi.
            </p>
            <p className="text-[16px] leading-[1.9] font-light mb-5" style={{ color: "#2a2a2a" }}>
              Anxietatea fara explicatie, tiparul relational care se repeta, frica de care nu poti scapa oricat lucrezi rational, au adesea o radacina mai adanca decat tot ce iti amintesti constient.
            </p>
            <p className="text-[16px] leading-[1.9] font-light" style={{ color: "#2a2a2a" }}>
              Vei pleca cu intelegerea clara a unui tipar eliberat, reconectata la corpul tau si la sensul tau de viata cu instrumente reale pe care le poti folosi mult timp dupa ce retreatul s-a incheiat.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-12 text-center" style={{ color: "#1a1a1a" }}>Echipa noastra</h2></Reveal>
          <div className="space-y-12">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-[180px] h-[220px] rounded-2xl overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(212,176,96,0.2)", boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-serif text-[22px] font-semibold mb-1" style={{ color: "#1a1a1a" }}>{t.name}</h3>
                    <p className="text-[15px] mb-4" style={{ color: "#D4B060" }}>{t.role}</p>
                    <p className="text-[17px] leading-[1.85] font-normal whitespace-pre-line" style={{ color: "#2a2a2a" }}>{t.bio}</p>
                    {(t.instagram || t.facebook) && (
                      <div className="flex gap-3 mt-4 justify-center md:justify-start">
                        {t.instagram && <a href={t.instagram} target="_blank" rel="noopener noreferrer" className="text-[14px] hover:underline" style={{ color: "#78A890" }}>Instagram</a>}
                        {t.facebook && <a href={t.facebook} target="_blank" rel="noopener noreferrer" className="text-[14px] hover:underline" style={{ color: "#78A890" }}>Facebook</a>}
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
        <div className="max-w-[1000px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-8 text-center" style={{ color: "#1a1a1a" }}>Ce este inclus</h2></Reveal>
          <div className="space-y-2.5">
            {included.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ fill: "#78C8A0" }} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                  <p className="text-[16px]" style={{ color: "#2a2a2a" }}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <div className="mt-6 p-5 rounded-xl bg-white text-center" style={{ border: "2px solid rgba(212,176,96,0.2)" }}>
              <p className="text-[16px] font-semibold" style={{ color: "#C0392B" }}>Bonus special: O sesiune 1:1 gratuita la alegere cu una dintre cele 3 facilitatoare, valabila pana pe 5 august 2026</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Group gathering banner */}
      <section className="w-full">
        <img src="/images/retreat/group-gathering.png" alt="Retreat group gathering" className="w-full h-[300px] md:h-[450px] object-cover" />
      </section>

      {/* Location with YouTube video */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-6 text-center" style={{ color: "#1a1a1a" }}>Locatia</h2>
            <p className="text-[16px] leading-relaxed font-light text-center mb-8" style={{ color: "#2a2a2a" }}>
              Locatia se afla la doar 60 minute de centrul Bucurestiului, departe de zgomotul si agitatia urbana, in satul Stanesti din judetul Dambovita.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-2xl text-center mb-6" style={{ color: "#1a1a1a" }}>Youness Wellness & Retreat</p>
            <div className="rounded-2xl overflow-hidden mb-8" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/-MY5m58X2ps"
                  title="Youness Wellness & Retreat"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-lg italic text-center leading-relaxed mb-3" style={{ color: "#1a1a1a" }}>
              Un templu de reconectare cu natura si momentul prezent.
            </p>
            <p className="text-[16px] leading-[1.8] font-light text-center mb-4" style={{ color: "#2a2a2a" }}>
              Un loc ca un veritabil Shangri-La - un colt de paradis retras si linistit, unde timpul incetineste si grijile raman la distanta. Aici, ritmul se schimba, respiratia devine mai profunda, iar prezentul capata claritate. Un spatiu protejat si discret, in care linistea este pastrata, iar serenitatea devine parte fireasca din experienta.
            </p>
            <div className="text-center">
              <a href="https://www.google.com/maps/place/YOUness+WELLness+Clinic+%26+Retreat/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] font-medium" style={{ color: "#1a1a1a" }}>Vezi pe Google Maps &rarr;</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 px-6" style={{ background: "#EEF4EE" }}>
        <div className="max-w-[800px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-8 text-center" style={{ color: "#1a1a1a" }}>Programul</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {program.map((p, i) => (
              <Reveal key={p.day} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-6 text-center h-full flex flex-col items-center justify-center min-h-[120px]">
                  <p className="text-[12px] uppercase tracking-wider mb-2" style={{ color: "#D4B060" }}>{p.day}</p>
                  <p className="text-[16px] font-medium" style={{ color: "#1a1a1a" }}>{p.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery with lightbox */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-10 text-center" style={{ color: "#1a1a1a" }}>Galerie</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden aspect-square cursor-pointer" onClick={() => setLightboxSrc(src)}>
                  <img src={src} alt="Retreat" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-0 overflow-hidden">
        <div className="max-w-[800px] mx-auto rounded-2xl overflow-hidden" style={{ border: "1px solid #e0e0e0" }}>
          {/* Teal gradient header */}
          <div className="py-8 px-6 text-center" style={{ background: "linear-gradient(160deg, #1E3230 0%, #264540 30%, #306858 60%, #4A8870 100%)" }}>
            <Reveal>
              <p className="text-[12px] uppercase tracking-[3px] font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Investitia ta</p>
              <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold text-white">Alege varianta potrivita</h2>
            </Reveal>
          </div>

          {/* White body */}
          <div className="bg-white px-6 md:px-10 py-10">
            {/* Early Bird Card */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl p-7 mb-8 bg-white relative" style={{ border: "3px solid #6C3483" }}>
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[13px] font-semibold uppercase tracking-[2px] px-6 py-1.5 rounded-full text-white" style={{ background: "linear-gradient(135deg, #8E44AD, #6C3483)" }}>Early Booking</span>
                <p className="text-[15px] font-semibold mt-2 mb-5" style={{ color: "#6C3483" }}>Pana pe 16 iunie 2026</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl py-5 px-4" style={{ background: "linear-gradient(160deg, #F0E6F6, #E8DCF0)" }}>
                    <p className="text-[12px] uppercase tracking-wider font-medium mb-2" style={{ color: "#6C3483" }}>Loc in cam. dubla</p>
                    <p className="font-serif text-[52px] font-semibold leading-none" style={{ color: "#1a1a1a" }}>2.750</p>
                    <p className="text-[15px] mt-1" style={{ color: "#666" }}>RON</p>
                  </div>
                  <div className="rounded-xl py-5 px-4" style={{ background: "linear-gradient(160deg, #F0E6F6, #E8DCF0)" }}>
                    <p className="text-[12px] uppercase tracking-wider font-medium mb-2" style={{ color: "#6C3483" }}>Loc in cam. single</p>
                    <p className="font-serif text-[52px] font-semibold leading-none" style={{ color: "#1a1a1a" }}>3.120</p>
                    <p className="text-[15px] mt-1" style={{ color: "#666" }}>RON</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Standard pricing */}
            <Reveal delay={0.15}>
              <p className="text-[12px] uppercase tracking-[2px] font-medium mb-3 text-center" style={{ color: "#aaa" }}>Pret standard (dupa 16 iunie)</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-xl p-5 text-center" style={{ border: "1.5px solid #ddd" }}>
                  <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>Loc in cam. dubla</p>
                  <p className="font-serif text-[30px] font-semibold" style={{ color: "#222" }}>2.950 <span className="text-[14px] font-normal" style={{ color: "#999" }}>RON</span></p>
                </div>
                <div className="rounded-xl p-5 text-center" style={{ border: "1.5px solid #ddd" }}>
                  <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>Loc in cam. single</p>
                  <p className="font-serif text-[30px] font-semibold" style={{ color: "#222" }}>3.320 <span className="text-[14px] font-normal" style={{ color: "#999" }}>RON</span></p>
                </div>
              </div>
            </Reveal>

            {/* Info lines with icons */}
            <Reveal delay={0.2}>
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ fill: "#8E44AD" }} viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                  <p className="text-[15px]" style={{ color: "#444" }}>Locuri limitate - doar 20 de locuri</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ fill: "#8E44AD" }} viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                  <p className="text-[15px]" style={{ color: "#444" }}>Plata in 2 transe: avans de 40% la inscriere, iar diferenta se achita pana pe 6 iulie 2026</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ fill: "#8E44AD" }} viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>
                  <p className="text-[15px]" style={{ color: "#444" }}>Vino impreuna cu o prietena si beneficiati amandoua de 5% reducere la participare</p>
                </div>
              </div>
            </Reveal>

            {/* CTA button */}
            <Reveal delay={0.25}>
              <div className="text-center">
                <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white px-12 py-4 rounded-full text-[17px] font-semibold uppercase tracking-[1.5px] hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #C0392B, #8E44AD)", boxShadow: "0 6px 24px rgba(142,68,173,0.3)" }}>Rezerva acum <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></a>
              </div>
            </Reveal>

            {/* Countdown */}
            <Reveal delay={0.3}>
              <div className="mt-10 rounded-2xl p-6 text-center" style={{ background: "linear-gradient(160deg, #1E3230 0%, #264540 30%, #306858 60%, #4A8870 100%)" }}>
                <p className="text-[12px] uppercase tracking-[3px] mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>Timp ramas pentru Early Booking</p>
                <EarlyBirdCountdown />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Reveal><h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-semibold leading-snug mb-10 text-center" style={{ color: "#1a1a1a" }}>Intrebari frecvente</h2></Reveal>
          <div className="space-y-3">
            {faq.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(48,104,88,0.08)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <p className="text-[16px] font-medium pr-4" style={{ color: "#1a1a1a" }}>{f.q}</p>
                    <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} style={{ fill: "#D4B060" }} viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-[16px] leading-relaxed font-light" style={{ color: "#2a2a2a" }}>{f.a}</p>
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
          <p className="font-serif text-[clamp(24px,3vw,36px)] text-white font-normal leading-snug max-w-xl mx-auto mb-4">Ai investit deja atat de mult in toti ceilalti.</p>
          <p className="text-white text-[16px] mb-8 font-light">Aceste 4 zile sunt pentru tine. Meriti asta!</p>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-white px-10 py-4 rounded-full text-[16px] font-medium hover:-translate-y-0.5 transition-all" style={{ background: "linear-gradient(135deg, #E870A0, #A855D0)", boxShadow: "0 6px 24px rgba(168,85,208,0.3)" }}>Da! Vreau locul meu!</a>
        </Reveal>
      </section>
    </>
  );
}
