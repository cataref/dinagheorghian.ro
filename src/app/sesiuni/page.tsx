import type { Metadata } from "next";
import SesiuniContent from "./SesiuniContent";

export const metadata: Metadata = {
  title: "Sesiuni 1:1 Online",
  description:
    "Sesiuni individuale de transformare interioara cu Dina Gheorghian. Lucru profund cu emotiile, convingerile si experientele tale de viata.",
};

export default function SesiuniPage() {
  return <SesiuniContent />;
}
