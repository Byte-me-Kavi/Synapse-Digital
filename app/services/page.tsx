import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Affordable Web & SEO Packages",
  description:
    "Explore our services with the best fair pricing in Colombo. From low cost landing pages to custom enterprise apps, we allow you to pay only for what you need.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
