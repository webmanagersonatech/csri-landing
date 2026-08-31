import { Suspense } from "react";
import type { Metadata } from "next";
import ProgramsContent from "./ProgramsContent";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Programs | Sona CSRI – Sustainable Development Initiatives",
  description:
    "Explore Sona CSRI’s programs driving social impact through education, sustainability, health, entrepreneurship, and community development.",
  alternates: {
    canonical: "https://sonacsri.com/programs",
  },
  openGraph: {
    title: "Programs | Sona CSRI – Sustainable Development Initiatives",
    description:
      "Discover impactful programs by Sona CSRI focusing on education, skill development, sustainability, and community well-being.",
    url: "https://sonacsri.com/programs",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Programs Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs | Sona CSRI – Sustainable Development Initiatives",
    description:
      "Learn about Sona CSRI’s impactful CSR programs focused on sustainability, education, and empowerment.",
    images: ["https://sonacsri.com/images/og-default.jpg"],
  },
};

// ✅ Use Suspense wrapper for client hook safety
export default function ProgramsPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-20 text-gray-500">
          Loading programs...
        </div>
      }
    >
      <ProgramsContent />
    </Suspense>
  );
}
