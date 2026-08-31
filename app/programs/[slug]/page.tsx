import { programs } from "@/data/programs";
import ProgramDetails from "@/app/components/ProgramDetails";
import type { Metadata } from "next";

interface ProgramPageProps {
  params: { slug: string };
}

// ✅ Generate all slugs at build time for static generation
export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export function generateMetadata({ params }: ProgramPageProps): Metadata {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return {
      title: "Program Not Found",
      description: "",
    };
  }

  const base = "https://sonacsri.com";
  const url = `${base}/programs/${program.slug}`;
  const title = program.metaTitle || `${program.title} | Sona CSRI`;
  const image = program.image?.startsWith("http")
    ? program.image
    : `${base}${program.image}`;

  return {
    title,
    description: program.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: program.description,
      url,
      siteName: "Sona CSRI",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: program.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: program.description,
      images: [image],
    },
  };
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Program not found
      </div>
    );
  }

  return <ProgramDetails program={program} />;
}
