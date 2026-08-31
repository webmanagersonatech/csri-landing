import type { Metadata } from "next";
import ReportsPage from "./ReportsPage";

export const metadata: Metadata = {
  title: "Reports | Sona CSRI – Annual CSR Reports & Achievements",
  description:
    "Explore Sona CSRI’s annual reports and publications showcasing our impact, CSR initiatives, sustainability progress, and community development results.",
  alternates: {
    canonical: "https://sonacsri.com/reports",
  },
  openGraph: {
    title: "Reports | Sona CSRI – Annual CSR Reports & Achievements",
    description:
      "Download and read Sona CSRI’s yearly reports highlighting our achievements in education, sustainability, and community welfare.",
    url: "https://sonacsri.com/reports",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/banner/reports-banner.webp",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Annual Reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reports | Sona CSRI – Annual CSR Reports & Achievements",
    description:
      "Access detailed reports from Sona CSRI outlining our CSR programs, sustainability goals, and social impact stories.",
    images: ["https://sonacsri.com/images/banner/reports-banner.webp"],
  },
};

export default function Reports() {
  return <ReportsPage />;
}
