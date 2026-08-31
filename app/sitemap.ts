import { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { newsandeventsData } from "@/data/newsandevents";

const BASE_URL = "https://sonacsri.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/programs",
    "/programs/community-health",
    "/programs/livelihood-promotion",
    "/programs/research-projects",
    "/programs/student-led-epics",
    "/focus-area",
    "/focus-area/entrepreneurship",
    "/focus-area/environment",
    "/focus-area/health",
    "/focus-area/skill",
    "/focus-area/village",
    "/focus-area/women",
    "/partners",
    "/partners/alumni",
    "/partners/corporate",
    "/partners/ngo",
    "/partners/whyPartner",
    "/team",
    "/events",
    "/gallery",
    "/reports",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const programRoutes = programs.map((program) => ({
    url: `${BASE_URL}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const eventRoutes = Object.values(newsandeventsData)
    .flat()
    .map((event) => ({
      url: `${BASE_URL}/events/${event.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...programRoutes, ...eventRoutes];
}
