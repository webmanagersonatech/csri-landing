import type { Metadata } from "next";
import NgoPage from "./Ngo";
export const metadata: Metadata = {
  title: "Partners | NGO Partnerships | Sona CSRI",
  description:
    "Partner with Sona CSRI as an NGO to co-create impactful community development projects focused on education, health, women empowerment, and sustainability.",
  alternates: {
    canonical: "https://sonacsri.com/partners/ngo",
  },
  openGraph: {
    title: "Partners | NGO Partnerships | Sona CSRI",
    description:
      "Collaborate with Sona CSRI to amplify your NGO’s mission through sustainable and community-driven CSR initiatives.",
    url: "https://sonacsri.com/partners/ngo",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/banner/ngo-partner.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI NGO Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | NGO Partnerships | Sona CSRI",
    description:
      "Join hands with Sona CSRI to scale up social impact projects through meaningful NGO collaborations.",
    images: ["https://sonacsri.com/images/banner/ngo-partner.jpg"],
  },
};

export default function NGOPage() {
  return <NgoPage />;
}
