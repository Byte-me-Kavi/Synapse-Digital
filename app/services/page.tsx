import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | Web & SEO Packages",
  description:
    "Explore our services. From high-converting landing pages to custom enterprise apps, we build exactly what you need.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
