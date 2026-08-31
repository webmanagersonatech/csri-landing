import type { Metadata } from "next";
import PartnersContent from "./PartnersContent";

export const metadata: Metadata = {
  title: "Our Partners | Sona CSRI",
  description:
    "Explore how Sona CSRI collaborates with alumni, NGOs, and corporates to drive community impact. Discover partnership opportunities for a sustainable future.",
  alternates: {
    canonical: "https://sonacsri.com/partners",
  },
  openGraph: {
    title: "Our Partners | Sona CSRI",
    description:
      "Explore how Sona CSRI collaborates with alumni, NGOs, and corporates to drive community impact. Discover partnership opportunities for a sustainable future.",
    url: "https://sonacsri.com/partners",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Partners | Sona CSRI",
    description:
      "Explore how Sona CSRI collaborates with alumni, NGOs, and corporates to drive community impact.",
    images: ["https://sonacsri.com/images/og-default.jpg"],
  },
};

export default function PartnersPage() {
  return <PartnersContent />;
}
