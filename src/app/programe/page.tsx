import type { Metadata } from "next";
import ProgrameContent from "./ProgrameContent";

export const metadata: Metadata = {
  title: "Programe Transformationale",
  description:
    "Programe structurate de transformare interioara cu Dina Gheorghian. Procese de grup cu intalniri online, materiale video, meditatii ghidate.",
};

export default function ProgramePage() {
  return <ProgrameContent />;
}
