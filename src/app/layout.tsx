import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dina Gheorghian · Ghid Transformational",
    template: "%s | Dina Gheorghian",
  },
  description:
    "Ghid transformational si coach in psihologie transcendenta. Sesiuni 1:1, programe de grup, retreaturi si resurse pentru transformare interioara profunda.",
  keywords: [
    "transformare interioara",
    "psihologie transcendenta",
    "coaching",
    "eliberare emotionala",
    "doliu",
    "reconectare",
    "dezvoltare personala",
    "Dina Gheorghian",
  ],
  openGraph: {
    title: "Dina Gheorghian · Ghid Transformational",
    description:
      "Reconecteaza-te cu tine insati si transforma-ti viata. Sesiuni de transformare interioara, eliberare emotionala si reconectare cu sinele autentic.",
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
