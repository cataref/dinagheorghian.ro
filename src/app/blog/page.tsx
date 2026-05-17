import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog & Resurse",
  description:
    "Articole si resurse despre transformare interioara, psihologie transcendenta, eliberare emotionala si reconectare cu sinele autentic.",
};

export default function BlogPage() {
  return <BlogContent />;
}
