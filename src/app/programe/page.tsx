import type { Metadata } from "next";
import ProgrameContent from "./ProgrameContent";

export const metadata: Metadata = {
  title: "Programe Transformaționale",
  description:
    "Programe structurate de transformare interioară cu Dina Gheorghian. Procese de grup cu întâlniri online, materiale video, meditații ghidate.",
};

export default function ProgramePage() {
  return <ProgrameContent />;
}
