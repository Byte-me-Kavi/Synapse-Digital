"use client";

import dynamic from "next/dynamic";

const SynapseBot = dynamic(() => import("@/components/SynapseBot"), {
  ssr: false,
});

export default function SynapseBotWrapper() {
  return <SynapseBot />;
}
