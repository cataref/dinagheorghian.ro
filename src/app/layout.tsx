import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dina Gheorghian · Ghid Transformațional",
    template: "%s | Dina Gheorghian",
  },
  description:
    "Ghid transformațional și coach în psihologie transcendentă. Sesiuni 1:1, programe de grup, retreaturi și resurse pentru transformare interioară profundă.",
  keywords: [
    "transformare interioară",
    "psihologie transcendentă",
    "coaching",
    "eliberare emoțională",
    "doliu",
    "reconectare",
    "dezvoltare personală",
    "Dina Gheorghian",
  ],
  openGraph: {
    title: "Dina Gheorghian · Ghid Transformațional",
    description:
      "Reconectează-te cu tine însăți și transformă-ți viața. Sesiuni de transformare interioară, eliberare emoțională și reconectare cu sinele autentic.",
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
