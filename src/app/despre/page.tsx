import type { Metadata } from "next";
import DespreContent from "./DespreContent";

export const metadata: Metadata = {
  title: "Despre mine",
  description:
    "Povestea Dinei Gheorghian — cum am transformat durerea în misiune. Ghid transformațional și coach în psihologie transcendentă.",
};

export default function DesprePage() {
  return <DespreContent />;
}
