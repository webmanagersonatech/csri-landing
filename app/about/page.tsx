import AboutUssection from "./Aboutsection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sona CSRI – Empowering Communities Through Responsibility",
  description:
    "Learn more about Sona CSRI, the Centre for Social Responsibility Initiatives at Sona College of Technology. We drive sustainable development, education, and community empowerment through impactful CSR projects.",
  alternates: {
    canonical: "https://sonacsri.com/about",
  },
  openGraph: {
    title: "About Us | Sona CSRI – Empowering Communities Through Responsibility",
    description:
      "Discover Sona CSRI’s mission to foster social responsibility and sustainable growth through education, innovation, and inclusion.",
    url: "https://sonacsri.com/about",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/banner/about-us.webp",
        width: 1200,
        height: 630,
        alt: "Sona CSRI About Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sona CSRI – Empowering Communities Through Responsibility",
    description:
      "Learn how Sona CSRI drives social impact and inclusive development through innovation and compassion.",
    images: ["https://sonacsri.com/images/banner/about-us.webp"],
  },
};

export default function AboutPage() {
  return <AboutUssection />;
}
