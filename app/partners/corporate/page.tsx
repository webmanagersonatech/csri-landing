import type { Metadata } from "next";
import Corporate from "./Corporate";

export const metadata: Metadata = {
  title: "Partners | Corporate Partnerships | Sona CSRI",
  description:
    "Explore corporate partnership opportunities with Sona CSRI. Collaborate to create impactful CSR programs that drive sustainable growth and community empowerment.",
  alternates: {
    canonical: "https://sonacsri.com/partners/corporate",
  },
  openGraph: {
    title: "Partners | Corporate Partnerships | Sona CSRI",
    description:
      "Partner with Sona CSRI to implement transformative CSR initiatives that create measurable social and environmental impact.",
    url: "https://sonacsri.com/partners/corporate",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/banner/corporate-partners.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Partnerships with Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | Corporate Partnerships | Sona CSRI",
    description:
      "Collaborate with Sona CSRI through corporate partnerships that promote sustainability, innovation, and inclusive community development.",
    images: ["https://sonacsri.com/images/banner/corporate-partners.jpg"],
  },
};

export default function CorporatePage() {
  return <Corporate />;
}
