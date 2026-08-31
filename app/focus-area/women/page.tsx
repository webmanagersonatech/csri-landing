import type { Metadata } from "next";
import Women from "./Women";

export const metadata: Metadata = {
  title: "Focus Area | Women Empowerment Initiatives | Sona CSRI",
  description:
    "Explore Sona CSRI’s Women Empowerment Initiatives that create opportunities for education, entrepreneurship, and leadership among women from all walks of life.",
  alternates: {
    canonical: "https://sonacsri.com/focus-area/women",
  },
  openGraph: {
    title: "Focus Area | Women Empowerment Initiatives | Sona CSRI",
    description:
      "Discover how Sona CSRI supports women’s empowerment through education, entrepreneurship training, and social development programs.",
    url: "https://sonacsri.com/focus-area/women",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/gallery/Fashion-Apparels/fashion-apparels-23.webp",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Women Empowerment Initiatives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Area | Women Empowerment Initiatives | Sona CSRI",
    description:
      "Learn how Sona CSRI empowers women through education, entrepreneurship, and leadership initiatives for social progress.",
    images: ["https://sonacsri.com/images/gallery/Fashion-Apparels/fashion-apparels-23.webp"],
  },
};

export default function WomenPage() {
  return <Women />;
}
