import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Fair Custom Quote",
  description:
    "Contact Synapse Digital for a free consultation. We offer fair custom pricing, transparent quotes, and affordable web solutions tailored to your budget.",
};

export default function ContactPage() {
  return <ContactClient />;
}
