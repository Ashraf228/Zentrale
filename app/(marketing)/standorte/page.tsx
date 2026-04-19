import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { scalableLocationParams } from "@/lib/location-pages";

export const metadata = createMetadata({
  title: "Standorte | Lokale Seiten für Rohrreinigung und Abflussreinigung",
  description:
    "Übersicht der Einsatzorte von rohrreinigung-ffm24 für Rohrreinigung, Abflussreinigung und Kanalreinigung im Rhein-Main-Gebiet.",
  path: "/standorte",
  keywords: [
    "Rohrreinigung Frankfurt",
    "Abflussreinigung Offenbach",
    "Kanalreinigung Wiesbaden",
    "Rohrreinigung Rhein-Main",
  ],
});

export default function LocationsOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: "Standorte" }]} />
      <section className="pb-20 pt-8">
        <Container className="section-grid">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Standorte
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Einsatzorte in Frankfurt und im Rhein-Main-Gebiet
            </h1>
            <p className="max-w-4xl text-lg leading-8 text-slate-600">
              rohrreinigung-ffm24 ist auf Einsätze in Frankfurt und im
              umliegenden Rhein-Main-Gebiet ausgerichtet. Hier finden Sie die
              wichtigsten Städte und Regionen, in denen schnelle Hilfe bei Rohr-,
              Kanal- und Entwässerungsproblemen besonders häufig angefragt wird.
            </p>
            <p className="text-sm font-medium text-accent-700">
              Aktuell verfügbar: {scalableLocationParams.length} regionale
              Leistungs- und Einsatzseiten.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cities.map((city) => (
              <article key={city.slug} className="content-card p-6">
                <h2 className="text-xl font-semibold text-navy-950">{city.name}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{city.intro}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {services
                    .filter((service) =>
                      [
                        "rohrreinigung",
                        "abflussreinigung",
                        "kanalreinigung",
                        "rohrspuelung",
                        "kanalspuelung",
                        "rohrreinigung-notdienst",
                        "tv-inspektion",
                        "abpumpen",
                      ].includes(service.slug),
                    )
                    .map((service) => (
                      <Link
                        key={`${city.slug}-${service.slug}`}
                        href={`/${service.slug}-${city.slug}`}
                        className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-navy-900"
                      >
                        {service.shortName}
                      </Link>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
