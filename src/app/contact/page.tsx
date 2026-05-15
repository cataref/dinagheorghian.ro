import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează-o pe Dina Gheorghian. Programează o sesiune, aplică la un program sau pune o întrebare.",
};

export default function ContactPage() {
  return <ContactContent />;
}
