import type { Metadata } from "next";
import RetreaturiContent from "./RetreaturiContent";

export const metadata: Metadata = {
  title: "Retreaturi",
  description:
    "Retreaturi imersive de transformare interioară cu Dina Gheorghian. Experiențe în natură pentru reconectare cu tine însăți.",
};

export default function RetreaturiPage() {
  return <RetreaturiContent />;
}
