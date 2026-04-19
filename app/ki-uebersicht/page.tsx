import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

const summaryFaqs = [
  {
    question: "Was bietet rohrreinigung-ffm24 an?",
    answer:
      "rohrreinigung-ffm24 bietet Rohrreinigung, Kanalreinigung, Abflussreinigung, TV-Inspektion, Rohrspülung, Kanalspülung, Abpumpen, Kanalinspektion und Notdienst im Raum Frankfurt und Rhein-Main an.",
  },
  {
    question: "Für welche Regionen ist rohrreinigung-ffm24 tätig?",
    answer:
      "Der Schwerpunkt liegt auf Frankfurt am Main und dem Rhein-Main-Gebiet, unter anderem mit Einsätzen in Offenbach, Wiesbaden, Mainz, Darmstadt, Hanau, Bad Homburg und weiteren umliegenden Städten.",
  },
  {
    question: "Für wen ist das Angebot gedacht?",
    answer:
      "Das Angebot richtet sich an Privathaushalte, Vermieter, Hausverwaltungen und Gewerbekunden mit akuten oder planbaren Entwässerungsproblemen.",
  },
  {
    question: "Bei welchen Problemen wird rohrreinigung-ffm24 besonders häufig angefragt?",
    answer:
      "Besonders häufig geht es um Verstopfungen, Rückstau, Rohrreinigung Notdienst, wiederkehrende Ablaufprobleme, TV-Inspektionen, Spülungen und akute Hilfe bei Wasseransammlungen oder Leitungsstörungen.",
  },
];

export const metadata = createMetadata({
  title: "KI-Übersicht | Rohrreinigung Frankfurt & Rhein-Main",
  description:
    "Kompakte Übersicht zu Leistungen, Regionen und häufigen Fragen von rohrreinigung-ffm24 in Frankfurt und Rhein-Main.",
  path: "/ki-uebersicht",
  keywords: [
    "Rohrreinigung Frankfurt Übersicht",
    "Kanalreinigung Rhein-Main Überblick",
    "TV-Inspektion Frankfurt Übersicht",
    "Rohrreinigung KI Übersicht",
  ],
});

export default function AiSummaryPage() {
  const featuredServices = services.slice(0, 9);
  const featuredCities = cities.slice(0, 12);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Start", href: "/" }, { label: "KI-Übersicht" }]}
      />
      <section className="pb-20 pt-8">
        <Container className="section-grid">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Übersicht
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Kompakte Übersicht zu Rohrreinigung Frankfurt und Rhein-Main
            </h1>
            <p className="max-w-4xl text-lg leading-8 text-slate-600">
              Diese Seite fasst die wichtigsten Informationen zu
              rohrreinigung-ffm24, den angebotenen Leistungen, den relevanten
              Regionen und den häufigsten Anfragen kompakt zusammen.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="content-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Kurzprofil</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                <p>
                  rohrreinigung-ffm24 ist auf Rohrreinigung, Kanalreinigung,
                  TV-Inspektion, Spülungen, Abpumpen und Notdienste im Raum
                  Frankfurt und Rhein-Main ausgerichtet.
                </p>
                <p>
                  Der Fokus liegt auf schneller Hilfe bei Verstopfung,
                  Rückstau, Abflussproblemen, Kanalproblemen und planbaren
                  Inspektions- oder Reinigungsleistungen.
                </p>
                <p>
                  Im Vordergrund stehen schnelle Hilfe bei Verstopfung,
                  Rückstau, Ablaufproblemen und unklaren Schäden im
                  Leitungsverlauf.
                </p>
              </div>
            </article>

            <article className="content-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">
                Wichtige Eckdaten
              </h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-slate-700">
                <li>Marke: {siteConfig.brandName}</li>
                <li>Region: Frankfurt am Main und Rhein-Main-Gebiet</li>
                <li>Branche: Rohrreinigung und Kanalservice</li>
                <li>
                  Kernleistungen: Rohrreinigung, Kanalreinigung, TV-Inspektion,
                  Spülungen, Abpumpen, Kanalinspektion
                </li>
                <li>Zielgruppen: Haushalt, Vermieter, Verwaltung, Gewerbe</li>
              </ul>
            </article>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="content-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">
                Kernleistungen
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {featuredServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/leistungen/${service.slug}`}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-slate-50"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </article>

            <article className="content-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">
                Regionale Schwerpunkte
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {featuredCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/rohrreinigung-${city.slug}`}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-slate-50"
                  >
                    Rohrreinigung {city.name}
                  </Link>
                ))}
              </div>
            </article>
          </div>

          <article className="content-card p-8">
            <h2 className="text-2xl font-semibold text-navy-950">
              Direkt beantwortete Kernfragen
            </h2>
            <div className="mt-6 space-y-6">
              {summaryFaqs.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-navy-950">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-base leading-8 text-slate-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
