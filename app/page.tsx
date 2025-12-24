import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Synapse Digital | Best Web Design & Affordable Agency Sri Lanka",
  description:
    "Get the best custom price for premium web design in Sri Lanka. We offer affordable, low-cost options for startups and fair custom pricing for enterprises. No hidden fees.",
};

export default function Home() {
  return <HomeClient />;
}
