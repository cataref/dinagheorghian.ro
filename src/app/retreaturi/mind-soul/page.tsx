import type { Metadata } from "next";
import MindSoulContent from "./MindSoulContent";

export const metadata: Metadata = {
  title: "Mind & Soul Retreat \u2014 Iulie 2026",
  description:
    "Retreat transformational pentru femei, 16-19 iulie 2026. 4 zile de reconectare interioara, eliberare emotionala si vindecare profunda la Youness Wellness & Retreat.",
};

export default function MindSoulPage() {
  return <MindSoulContent />;
}
