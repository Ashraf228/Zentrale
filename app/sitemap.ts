import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { scalableLocationParams } from "@/lib/location-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries = [
    "",
    "/leistungen",
    "/standorte",
    "/ki-uebersicht",
    "/ueber-uns",
    "/kontakt",
    "/faq",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.siteUrl}/leistungen/${service.slug}`,
    lastModified: new Date(),
  }));

  const locationEntries = scalableLocationParams.map((item) => ({
    url: `${siteConfig.siteUrl}/${item.combined}`,
    lastModified: new Date(),
  }));

  return [...baseEntries, ...serviceEntries, ...locationEntries];
}
