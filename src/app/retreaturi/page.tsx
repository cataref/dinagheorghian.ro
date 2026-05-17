import type { Metadata } from "next";
import RetreaturiContent from "./RetreaturiContent";

export const metadata: Metadata = {
  title: "Retreaturi",
  description:
    "Retreaturi imersive de transformare interioara cu Dina Gheorghian. Experiente in natura pentru reconectare cu tine insati.",
};

export default function RetreaturiPage() {
  return <RetreaturiContent />;
}
