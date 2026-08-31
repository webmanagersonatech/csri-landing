import type { Metadata } from "next";
import Skill from "./Skill";

export const metadata: Metadata = {
  title: "Focus Area | Skill Development & Livelihood Promotion | Sona CSRI",
  description:
    "Explore how Sona CSRI empowers individuals through Skill Development and Livelihood Promotion initiatives, building employability, entrepreneurship, and sustainable community growth.",
  alternates: {
    canonical: "https://sonacsri.com/focus-area/skill",
  },
  openGraph: {
    title: "Focus Area | Skill Development & Livelihood Promotion | Sona CSRI",
    description:
      "Sona CSRI’s Skill Development and Livelihood Promotion programs equip youth and women with the skills and opportunities needed for sustainable livelihoods.",
    url: "https://sonacsri.com/focus-area/skill",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/gallery/Computer-Training/Computer-Training-8.webp",
        width: 1200,
        height: 630,
        alt: "Skill Development and Livelihood Promotion at Sona CSRI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Focus Area | Skill Development & Livelihood Promotion | Sona CSRI",
    description:
      "Learn about Sona CSRI’s initiatives to enhance employability, entrepreneurship, and sustainable community development through skill and livelihood programs.",
    images: ["https://sonacsri.com/images/gallery/Computer-Training/Computer-Training-8.webp"],
  },
};

export default function SkillPage() {
  return <Skill />;
}
