// app/events/[slug]/page.tsx
import { notFound } from "next/navigation";
import { newsandeventsData } from "@/data/newsandevents";
import EventsAndNewsAnimated from "@/app/components/EventsAndNewsAnimated";

interface EventPageProps {
    params: { slug: string };
}

interface EventType {
    title: string;
    slug: string;
    startDate?: string;
    endDate?: string;
    description: string;
    imgSrc: string;
    images?: string[];
    category: string;
}

// Helper to get event by slug
function getEventBySlug(slug: string): EventType | undefined {
    for (const category in newsandeventsData) {
        const event = newsandeventsData[category].find((e) => e.slug === slug);
        if (event) return event;
    }
    return undefined;
}

// Static paths for export
export function generateStaticParams() {
    const slugs: string[] = [];
    for (const category in newsandeventsData) {
        newsandeventsData[category].forEach((e) => slugs.push(e.slug));
    }
    return slugs.map((slug) => ({ slug }));
}

// STATIC METADATA (export compatible)
export function generateMetadata({ params }: EventPageProps) {
    const event = getEventBySlug(params.slug);
    if (!event) {
        return {
            title: "Event Not Found",
            description: "",
        };
    }

    const base = "https://sonacsri.com";
    const url = `${base}/events/${event.slug}`;
    const image = event.imgSrc.startsWith("http")
        ? event.imgSrc
        : `${base}${event.imgSrc}`;

    return {
        title: `${event.title} | Sona CSRI – Social Impact & Community Engagement`,
        description: event.description,
        alternates: { canonical: url },

        openGraph: {
            title: `${event.title} | Sona CSRI`,
            description: event.description,
            url,
            images: [image],
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: `${event.title} | Sona CSRI`,
            description: event.description,
            images: [image],
        },
    };
}

export default function EventPage({ params }: EventPageProps) {
    const event = getEventBySlug(params.slug);
    if (!event) return notFound();

    const categoryKey = Object.keys(newsandeventsData).find((key) =>
        newsandeventsData[key].some((e) => e.slug === params.slug),
    );

    const allEvents = categoryKey ? newsandeventsData[categoryKey] : [];

    return <EventsAndNewsAnimated event={event} allEvents={allEvents} />;
}
