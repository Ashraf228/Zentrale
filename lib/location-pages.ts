import { cities, cityMap } from "@/data/cities";
import { serviceMap, services } from "@/data/services";

export function getLocationPageByCombinedSlug(combinedSlug: string) {
  for (const service of services) {
    const prefix = `${service.slug}-`;
    if (combinedSlug.startsWith(prefix)) {
      const citySlug = combinedSlug.replace(prefix, "");
      const city = cityMap.get(citySlug);

      if (!city) {
        continue;
      }

      return {
        city,
        service,
        combinedSlug,
      };
    }
  }

  return null;
}

export function getLocationPage(serviceSlug: string, citySlug: string) {
  const service = serviceMap.get(serviceSlug);
  const city = cityMap.get(citySlug);

  if (!service || !city) {
    return null;
  }

  return {
    service,
    city,
    combinedSlug: `${service.slug}-${city.slug}`,
  };
}

export function getRelatedLocationPages(serviceSlug: string, citySlug: string, limit = 3) {
  return scalableLocationParams
    .filter((item) => item.service === serviceSlug && item.city !== citySlug)
    .slice(0, limit)
    .map((item) => getLocationPage(item.service, item.city))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
}

export const exampleLocationPages = [
  "rohrreinigung-frankfurt",
  "rohrreinigung-offenbach",
  "rohrreinigung-wiesbaden",
  "abflussreinigung-frankfurt",
  "kanalreinigung-frankfurt",
];

export const scalableLocationParams = cities.flatMap((city) =>
  services
    .filter((service) =>
      [
        "rohrreinigung",
        "abflussreinigung",
        "kanalreinigung",
        "rohrspuelung",
        "kanalspuelung",
        "rohrreinigung-notdienst",
        "tv-inspektion",
        "kanalinspektion",
        "abpumpen",
      ].includes(service.slug),
    )
    .map((service) => ({
      city: city.slug,
      service: service.slug,
      combined: `${service.slug}-${city.slug}`,
    })),
);
