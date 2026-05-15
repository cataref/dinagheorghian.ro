import type { Metadata } from "next";
import SesiuniContent from "./SesiuniContent";

export const metadata: Metadata = {
  title: "Sesiuni 1:1 Online",
  description:
    "Sesiuni individuale de transformare interioară cu Dina Gheorghian. Lucru profund cu emoțiile, convingerile și experiențele tale de viață.",
};

export default function SesiuniPage() {
  return <SesiuniContent />;
}
