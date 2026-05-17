import type { Metadata } from "next";
import DespreContent from "./DespreContent";

export const metadata: Metadata = {
  title: "Despre mine",
  description:
    "Povestea Dinei Gheorghian — cum am transformat durerea in misiune. Ghid transformational si coach in psihologie transcendenta.",
};

export default function DesprePage() {
  return <DespreContent />;
}
