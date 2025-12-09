import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import LiquidCursor from "@/components/LiquidCursor";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingActionButton from "@/components/FloatingActionButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synapse Digital | Connecting Vision to Digital Reality",
  description:
    "Bold web solutions, analytics with NavLens, social media marketing, and SEO services. We don't just build; we analyze.",
  keywords: [
    "web development",
    "analytics",
    "social media marketing",
    "SEO",
    "NavLens",
    "digital agency",
  ],
  authors: [{ name: "Synapse Digital" }],
  openGraph: {
    title: "Synapse Digital | Digital Excellence",
    description: "Connecting Vision to Digital Reality",
    type: "website",
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
        <LiquidCursor />
        <ScrollProgress />
        <FloatingActionButton />
        <div className="relative z-10 w-full">{children}</div>

        <script 
          async 
          src="https://navlens-rho.vercel.app/tracker.js" 
          data-site-id="a2ec32a6-21bb-4bdc-b89e-c09145df7fac"
          data-api-key="89c0fb13-a17e-4b96-8d59-8fba10f51fed"
          data-api-host="http://localhost:3000"
        ></script>
      </body>
    </html>
  );
}
