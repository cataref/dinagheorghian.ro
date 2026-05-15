import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog & Resurse",
  description:
    "Articole și resurse despre transformare interioară, psihologie transcendentă, eliberare emoțională și reconectare cu sinele autentic.",
};

export default function BlogPage() {
  return <BlogContent />;
}
