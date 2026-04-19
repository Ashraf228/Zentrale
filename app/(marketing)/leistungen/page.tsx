import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Leistungen | Rohrreinigung, Abflussreinigung und Notdienst",
  description:
    "Übersicht der Leistungen von rohrreinigung-ffm24 für Rohrreinigung, Abflussreinigung, Kanalreinigung, Notdienst, TV-Inspektion, Spülungen und Kanalinspektion in Frankfurt und Rhein-Main.",
  path: "/leistungen",
  keywords: [
    "Rohrreinigung Frankfurt",
    "Kanalreinigung Rhein-Main",
    "TV-Inspektion Frankfurt",
    "Rohrspülung Frankfurt",
    "Abpumpen Rückstau Frankfurt",
  ],
});

export default function ServicesOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: "Leistungen" }]} />
      <section className="pb-20 pt-8">
        <Container className="section-grid">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Leistungen
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Leistungen für Rohrreinigung, Kanalreinigung, TV-Inspektion und Spültechnik
            </h1>
            <p className="max-w-4xl text-lg leading-8 text-slate-600">
              Hier finden Sie die wichtigsten Leistungen rund um Rohr,
              Kanal und Entwässerung im Raum Frankfurt Rhein-Main. Dazu zählen
              akute Hilfe bei Verstopfung und Rückstau ebenso wie TV-Inspektion,
              Spültechnik, Abpumpen und weiterführende Leistungen für
              wiederkehrende Leitungsprobleme.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/leistungen/${service.slug}`}
                className="content-card p-6 transition hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-navy-950">{service.name}</h2>
                  {service.emergency ? (
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
                      Notfall
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.intro}</p>
                <span className="mt-5 inline-flex font-semibold text-accent-600">
                  {service.name} Frankfurt & Rhein-Main ansehen
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
