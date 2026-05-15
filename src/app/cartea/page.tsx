import type { Metadata } from "next";
import CarteaContent from "./CarteaContent";

export const metadata: Metadata = {
  title: "De ce eu? \u2014 Cartea",
  description:
    "De ce eu? \u2014 povestea mea de doliu, ghid pentru sufletul t\u0103u, de Dina Gheorghian. O carte despre pierdere, durere \u0219i transformare profund\u0103.",
};

export default function CarteaPage() {
  return <CarteaContent />;
}
