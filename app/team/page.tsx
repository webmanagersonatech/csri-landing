import Teammanage from "./TeamManage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Sona CSRI – Leadership Behind Social Impact",
  description:
    "Meet the leadership and dedicated team behind Sona CSRI, driving corporate social responsibility initiatives that create sustainable community development and social progress.",
  alternates: {
    canonical: "https://sonacsri.com/team",
  },
  openGraph: {
    title: "Our Team | Sona CSRI – Leadership Behind Social Impact",
    description:
      "Learn about the people leading Sona CSRI’s mission of inclusive growth, sustainability, and community empowerment.",
    url: "https://sonacsri.com/team",
    siteName: "Sona CSRI",
    type: "website",
    images: [
      {
        url: "https://sonacsri.com/images/team/team-background.jpeg",
        width: 1200,
        height: 630,
        alt: "Sona CSRI Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Sona CSRI – Leadership Behind Social Impact",
    description:
      "Meet the inspiring leaders and team members shaping the future of Sona CSRI’s social responsibility initiatives.",
    images: ["https://sonacsri.com/images/team/team-background.jpeg"],
  },
};
export default function TeamPage() {
  return <Teammanage />;
}
