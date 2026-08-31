import type { Metadata } from "next";
import FocusAreaContent from "./FocusAreaContent";

export const metadata: Metadata = {
  title: "Focus Areas | Sona CSRI",
  description:
    "Explore Sona CSRI's key focus areas — skill development, health & well-being, environment & sustainability, village adoption, women empowerment, and entrepreneurship support.",
  alternates: {
    canonical: "https://sonacsri.com/focus-area",
  },
  openGraph: {
    title: "Focus Areas | Sona CSRI",
    description:
      "Explore Sona CSRI's key focus areas — skill development, health & well-being, environment & sustainability, village adoption, women empowerment, and entrepreneurship support.",
    url: "https://sonacsri.com/focus-area",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Focus Areas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Areas | Sona CSRI",
    description:
      "Explore Sona CSRI's key focus areas — skill development, health, environment, village adoption, women empowerment, and entrepreneurship.",
    images: ["https://sonacsri.com/images/og-default.jpg"],
  },
};

export default function FocusAreaPage() {
  return <FocusAreaContent />;
}
