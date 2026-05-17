import Link from "next/link";

const footerLinks = [
  { href: "/despre", label: "Despre mine" },
  { href: "/sesiuni", label: "Sesiuni 1:1" },
  { href: "/programe", label: "Programe" },
  { href: "/retreaturi", label: "Retreaturi" },
  { href: "/cartea", label: "Cartea" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-deep px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl text-white font-medium">
              Dina Gheorghian
            </Link>
            <p className="text-white/35 text-sm mt-3 leading-relaxed max-w-[280px]">
              Ghid transformational si coach in psihologie transcendenta.
              Reconectare cu sinele autentic.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-white/30 mb-4">
              Navigare
            </p>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-white/30 mb-4">
              Contact
            </p>
            <a
              href="mailto:contact@dinagheorghian.ro"
              className="text-sm text-white/50 hover:text-white transition-colors block mb-2"
            >
              contact@dinagheorghian.ro
            </a>
            <div className="flex gap-3 mt-4">
              {/* Instagram */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/18 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 fill-white/60"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/18 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 fill-white/60"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 text-center">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Dina Gheorghian. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
