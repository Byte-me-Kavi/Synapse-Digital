import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | The Agency With Fair Custom Pricing",
  description:
    "Learn about Synapse Digital, the agency committed to transparent, low cost web solutions and best price guarantees for Sri Lankan businesses.",
};

export default function AboutPage() {
  return <AboutClient />;
}
