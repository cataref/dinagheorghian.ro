import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacteaza-o pe Dina Gheorghian. Programeaza o sesiune, aplica la un program sau pune o intrebare.",
};

export default function ContactPage() {
  return <ContactContent />;
}
