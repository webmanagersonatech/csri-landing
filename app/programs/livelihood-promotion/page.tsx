import type { Metadata } from "next";
import LivelihoodContent from "./livelihoodcontent";

export const metadata: Metadata = {
  title: "Livelihood Promotion Activities | Sona CSRI",
  description:
    "Explore CSRI’s Livelihood Promotion Programs supporting community resilience through skill development, enterprise creation, agri-value chains, digital market access, and economic empowerment for rural and vulnerable groups.",
  alternates: {
    canonical: "https://sonacsri.com/programs/livelihood-promotion",
  },
  openGraph: {
    title: "Livelihood Promotion Activities | Sona CSRI",
    description:
      "Discover CSRI’s community-focused livelihood initiatives: skill labs, micro-enterprise development, inclusive livelihood support, agri-value chain strengthening, and digital market enablement.",
    url: "https://sonacsri.com/programs/livelihood-promotion",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "CSRI Livelihood Promotion Activities Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Livelihood Promotion Activities | Sona CSRI",
    description:
      "Learn how Sona CSRI strengthens community income through skills, micro-enterprises, agriculture value chains, and digital market access.",
    images: [
      "https://sonacsri.com/images/og-default.jpg",
    ],
  },
};

export default function LivelihoodPromotionPage() {
  return <LivelihoodContent />;
}
