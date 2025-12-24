import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Work | Real Results at the Best Prices",
  description:
    "See our portfolio of high-performance websites. We deliver premium quality at a custom low price point that fits your budget. Real results, fair costs.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
