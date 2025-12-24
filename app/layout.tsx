import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import ClientWrappers from "@/components/ClientWrappers";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://synapsedigital.dev"),
  title: {
    default: "Synapse Digital | Web Design & Marketing Agency Sri Lanka",
    template: "%s | Synapse Digital",
  },
  description:
    "Premium web design, SEO, and social media marketing agency in Colombo. Specialists in User Behavior Analytics, Heatmap Reports, and UX Audits using NavLens.",
  keywords: [
    "Web Design Sri Lanka",
    "Digital Marketing Agency Colombo",
    "SEO Services Sri Lanka",
    "Social Media Management",
    "NavLens Analytics",
    "Heatmap Analysis Service",
    "User Behavior Reporting",
    "Session Recording Audit",
    "Website UX Consulting",
    "Conversion Rate Optimization Reports",
    "Web Development Company",
    "Next.js Developers",
  ],
  authors: [{ name: "Synapse Digital", url: "https://synapsedigital.dev" }],
  creator: "Synapse Digital",
  publisher: "Synapse Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://synapsedigital.dev",
    title: "Synapse Digital | Web Excellence & Growth",
    description: "Transform your business with premium web design, SEO, and NavLens analytics. The leading digital agency in Sri Lanka.",
    siteName: "Synapse Digital",
    images: [
      {
        url: "/og-image.png", // You should create this image in public folder
        width: 1200,
        height: 630,
        alt: "Synapse Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapse Digital | Web & Marketing",
    description: "Premium web solutions and analytics for forward-thinking businesses.",
    images: ["/og-image.png"],
    creator: "@synapsedigital",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
  alternates: {
    canonical: "https://synapsedigital.dev",
  },
  // Geo-tags for Local SEO ranking
  other: {
    "geo.region": "LK-1", // Western Province
    "geo.placename": "Colombo",
    "geo.position": "6.8968;79.8769", // Kirulapone coordinates
    "ICBM": "6.8968, 79.8769",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-void-black text-signal-white flex flex-col min-h-screen w-full overflow-x-hidden relative`}
      >
        <AnimatedBackground />
        <ClientWrappers />
        <JsonLd />
        <div className="relative z-10 w-full">{children}</div>

        <script 
          async 
          src="https://navlens-rho.vercel.app/tracker.js" 
          data-site-id="a2ec32a6-21bb-4bdc-b89e-c09145df7fac"
          data-api-key="89c0fb13-a17e-4b96-8d59-8fba10f51fed"
          data-api-host="https://navlens-rho.vercel.app"
        ></script>
      </body>
    </html>
  );
}
