import type { Metadata } from "next";
import Environment from "./Environment";

export const metadata: Metadata = {
  title: "Focus Area | Environment & Sustainability | Sona CSRI",
  description:
    "Explore Sona CSRI’s Environment & Sustainability initiatives that focus on conserving nature, promoting renewable energy, and building a greener future for communities.",
  alternates: {
    canonical: "https://sonacsri.com/focus-area/environment",
  },
  openGraph: {
    title: "Focus Area | Environment & Sustainability | Sona CSRI",
    description:
      "Sona CSRI works towards environmental conservation, tree plantation, renewable energy adoption, and waste management to create a sustainable planet.",
    url: "https://sonacsri.com/focus-area/environment",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/gallery/environment/environment-12.webp",
        width: 1200,
        height: 630,
        alt: "Environment & Sustainability Initiatives by Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Area | Environment & Sustainability | Sona CSRI",
    description:
      "Learn how Sona CSRI promotes environmental responsibility through sustainability programs, renewable energy use, and waste reduction initiatives.",
    images: ["https://sonacsri.com/images/gallery/environment/environment-12.webp"],
  },
};

export default function EnvironmentPage() {
  return <Environment />;
}
