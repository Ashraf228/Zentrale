import Link from "next/link";
import { notFound } from "next/navigation";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { TrackedPhoneLink } from "@/components/analytics/tracked-phone-link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getLocationPageByCombinedSlug,
  getRelatedLocationPages,
  scalableLocationParams,
} from "@/lib/location-pages";
import { createMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return scalableLocationParams.map((item) => ({ combined: item.combined }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ combined: string }>;
}) {
  const { combined } = await params;
  const entry = getLocationPageByCombinedSlug(combined);

  if (!entry) {
    return {};
  }

  const title = `${entry.service.name} ${entry.city.name} | rohrreinigung-ffm24`;
  const citySpecificMetadata: Record<
    string,
    { description: string; extraKeywords: string[] }
  > = {
    frankfurt: {
      description: `${entry.service.name} in Frankfurt am Main durch rohrreinigung-ffm24: schnelle Hilfe bei Verstopfung, Rückstau, TV-Inspektion und Kanalproblemen im Kernmarkt Frankfurt.`,
      extraKeywords: [
        `${entry.service.name} Frankfurt am Main`,
        `${entry.service.name} Innenstadt`,
        `${entry.service.shortName} Sachsenhausen`,
        `Rohrreinigung Notdienst Frankfurt`,
      ],
    },
    offenbach: {
      description: `${entry.service.name} in Offenbach am Main durch rohrreinigung-ffm24: schnelle Hilfe bei Abflussproblemen, Rückstau und Rohrverstopfung in Wohn- und Bestandsimmobilien.`,
      extraKeywords: [
        `${entry.service.name} Offenbach am Main`,
        `${entry.service.shortName} Bieber`,
        `${entry.service.shortName} Bürgel`,
        `Abfluss verstopft Offenbach`,
      ],
    },
    wiesbaden: {
      description: `${entry.service.name} in Wiesbaden durch rohrreinigung-ffm24: seriöse Hilfe bei Rohrreinigung, Kanalproblemen, Rückstau und TV-Inspektion im Wohn- und Verwaltungsbereich.`,
      extraKeywords: [
        `${entry.service.name} Wiesbaden`,
        `${entry.service.shortName} Biebrich`,
        `${entry.service.shortName} Dotzheim`,
        `Kanalreinigung Wiesbaden`,
      ],
    },
    mainz: {
      description: `${entry.service.name} in Mainz durch rohrreinigung-ffm24: schnelle Hilfe bei Rohrreinigung, Kanalservice, TV-Inspektion und Rückstau für Wohn- und Gewerbeobjekte.`,
      extraKeywords: [
        `${entry.service.name} Mainz`,
        `${entry.service.shortName} Altstadt`,
        `${entry.service.shortName} Neustadt`,
        `TV-Inspektion Mainz`,
      ],
    },
    darmstadt: {
      description: `${entry.service.name} in Darmstadt durch rohrreinigung-ffm24: schnelle Hilfe bei Verstopfung, Rückstau, TV-Inspektion und planbaren Rohr- und Kanalleistungen.`,
      extraKeywords: [
        `${entry.service.name} Darmstadt`,
        `${entry.service.shortName} Bessungen`,
        `${entry.service.shortName} Arheilgen`,
        `Rohrreinigung Darmstadt Notdienst`,
      ],
    },
  };
  const metadataProfile = citySpecificMetadata[entry.city.slug];
  const description =
    metadataProfile?.description ??
    `${entry.service.name} in ${entry.city.name} durch rohrreinigung-ffm24: schnelle Hilfe und fachgerechte Leistung in Ihrer Nähe.`;

  return createMetadata({
    title,
    description,
    path: `/${combined}`,
    keywords: [
      `${entry.service.name} ${entry.city.name}`,
      `${entry.service.shortName} ${entry.city.name}`,
      `${entry.city.name} Rohrreinigung`,
      `${entry.city.name} Abfluss verstopft`,
      ...(metadataProfile?.extraKeywords ?? []),
    ],
  });
}

export default async function CombinedLocationPage({
  params,
}: {
  params: Promise<{ combined: string }>;
}) {
  const { combined } = await params;
  const entry = getLocationPageByCombinedSlug(combined);

  if (!entry) {
    notFound();
  }

  const faqs = [
    {
      question: `Wie schnell ist ${entry.service.name.toLowerCase()} in ${entry.city.name} verfügbar?`,
      answer:
        `Bei akuten Verstopfungen, Rückstau oder Ausfällen ist ${entry.service.name.toLowerCase()} in ${entry.city.name} auf schnelle Hilfe ausgerichtet. Wie kurzfristig ein Einsatz möglich ist, hängt von Dringlichkeit, Uhrzeit, Zugangssituation und Störungsbild ab.`,
    },
    {
      question: `Für welche Objekte ist ${entry.service.name.toLowerCase()} in ${entry.city.name} relevant?`,
      answer:
        `${entry.service.name} in ${entry.city.name} ist relevant für Privathaushalte, Mietwohnungen, Mehrfamilienhäuser, Gewerbeeinheiten, Verwaltungsobjekte und je nach Störung auch für Grundstücks- und Außenentwässerung.`,
    },
    {
      question: `Warum ist eine Seite für ${entry.city.name} hilfreich?`,
      answer:
        `Eine lokale Seite für ${entry.city.name} hilft dabei, Leistung, Einsatzgebiet und typische Störungsbilder direkt auf den regionalen Bedarf zu beziehen. Besucher finden dadurch schneller die passende Telefonnummer, konkrete Leistungsinfos und den direkten Kontakt.`,
    },
  ];

  const pageTitle = `${entry.service.name} ${entry.city.name}`;
  const relatedLocations = getRelatedLocationPages(entry.service.slug, entry.city.slug, 3);
  const cityProfile = entry.city.seoProfile;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: entry.service.name, href: `/leistungen/${entry.service.slug}` },
          { label: entry.city.name },
        ]}
      />
      <JsonLd
        data={buildServiceSchema({
          name: pageTitle,
          description: `${entry.service.name} in ${entry.city.name} mit rohrreinigung-ffm24 und schneller Hilfe.`,
          path: `/${combined}`,
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Start", url: siteConfig.siteUrl },
          { name: entry.service.name, url: `${siteConfig.siteUrl}/leistungen/${entry.service.slug}` },
          { name: entry.city.name, url: `${siteConfig.siteUrl}/${combined}` },
        ])}
      />

      <section className="bg-white pb-16 pt-8">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Standortseite
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
                {entry.service.name} {entry.city.name} mit schneller Hilfe
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                {entry.service.name} in {entry.city.name} wird besonders dann
                gebraucht, wenn Verstopfungen, Rückstau oder
                Entwässerungsprobleme schnell und fachlich sauber bearbeitet
                werden müssen. rohrreinigung-ffm24 ist dafür im
                Rhein-Main-Gebiet auf kurze Wege und klare Einsatzvorbereitung
                ausgerichtet.
              </p>
            </div>
            <div className="prose-copy max-w-3xl text-base text-slate-700">
              <p>
                rohrreinigung-ffm24 übernimmt {entry.service.name.toLowerCase()}{" "}
                in {entry.city.name} mit Fokus auf schnelle Erreichbarkeit,
                saubere technische Einordnung und direkte Kontaktwege.
              </p>
              <p>{entry.city.intro}</p>
              <p>
                Je nach Schadensbild geht es um akute Hilfe bei Verstopfung und
                Rückstau, um eine gezielte Reinigung, um Spültechnik oder um
                eine weiterführende TV-Inspektion. Entscheidend ist, dass der
                Einsatz in {entry.city.name} nicht nur schnell, sondern auch
                passend zum tatsächlichen Leitungsproblem vorbereitet wird.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedPhoneLink
                href={siteConfig.phoneHref}
                location={`location_${entry.city.slug}_${entry.service.slug}_phone`}
                label={`location_${entry.city.slug}_${entry.service.slug}_phone`}
                className="rounded-full bg-accent-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-accent-600"
              >
                Jetzt anrufen: {siteConfig.phoneDisplay}
              </TrackedPhoneLink>
              <TrackedLink
                href="/kontakt"
                location={`location_${entry.city.slug}_${entry.service.slug}_contact`}
                label={`location_${entry.city.slug}_${entry.service.slug}_contact`}
                className="rounded-full border border-slate-200 px-6 py-4 text-center font-semibold text-navy-950 transition hover:bg-slate-50"
              >
                Anfrage für {entry.city.name} senden
              </TrackedLink>
            </div>
          </div>

          <aside className="content-card p-8">
            <h2 className="text-2xl font-semibold text-navy-950">
              Typische Anfragen in {entry.city.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Typisch sind Anfragen wie &quot;{entry.service.name} {entry.city.name}
              &quot;, &quot;{entry.city.name} Abfluss verstopft&quot; oder
              &quot;{entry.service.shortName} Notdienst {entry.city.name}&quot;.
              Dahinter stehen meist akute Störungen, wiederkehrende Probleme
              oder der Bedarf an einer klaren technischen Einschätzung.
            </p>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-navy-950">Einsatzgebiet</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Häufig angefragte Bereiche in {entry.city.name}:{" "}
                {entry.city.districts.join(", ")}.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Häufige Ursachen"
            title={`${entry.service.name} in ${entry.city.name}: wann Nutzer akut handeln`}
            description="Diese Situationen treten besonders häufig auf, wenn im Alltag schnelle Hilfe gebraucht wird und die Störung nicht mehr sinnvoll selbst gelöst werden kann."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {entry.service.causes.map((cause) => (
              <article key={cause} className="content-card p-6 text-sm leading-7 text-slate-700">
                {cause}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {cityProfile ? (
        <section className="bg-white py-16">
          <Container className="section-grid">
            <SectionHeading
              eyebrow="Stadtprofil"
              title={`${entry.city.name}: lokale Besonderheiten für ${entry.service.name.toLowerCase()}`}
              description={cityProfile.marketFocus}
            />
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="content-card p-8">
                <h2 className="text-2xl font-semibold text-navy-950">
                  Lokaler Kontext und typische Anforderungen
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {cityProfile.localIntent}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {cityProfile.featuredParagraph}
                </p>
              </article>
              <div className="grid gap-6">
                <article className="content-card p-8">
                  <h2 className="text-xl font-semibold text-navy-950">
                    Typische Fälle in {entry.city.name}
                  </h2>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-slate-700">
                    {cityProfile.commonCases.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="content-card p-8">
                  <h2 className="text-xl font-semibold text-navy-950">
                    Häufig betroffene Objektarten
                  </h2>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-slate-700">
                    {cityProfile.propertyTypes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="content-card p-8">
            <h2 className="text-2xl font-semibold text-navy-950">Unser Ablauf</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-8 text-slate-700">
              {entry.service.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
          <div className="content-card p-8">
            <h2 className="text-2xl font-semibold text-navy-950">Kostenhinweise</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              {entry.service.costHint}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-navy-950">
              Wann sofort handeln?
            </h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-slate-700">
              {entry.service.immediateAction.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Interne Verlinkung"
            title="Passende Seiten rund um diese Leistung"
            description="Zusätzliche Leistungs- und Stadtseiten helfen dabei, ähnliche Störungen schneller einzuordnen und direkt zur passenden Anfrage zu gelangen."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Link
              href={`/leistungen/${entry.service.slug}`}
              className="content-card p-6 transition hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold text-navy-950">
                {entry.service.name} Frankfurt & Rhein-Main
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Vertiefende Informationen zu {entry.service.name.toLowerCase()},
                Ursachen, Ablauf, FAQ und Kontakt.
              </p>
            </Link>
            <TrackedLink
              href="/kontakt"
              location={`location_${entry.city.slug}_${entry.service.slug}_internal_contact`}
              label={`location_${entry.city.slug}_${entry.service.slug}_internal_contact`}
              className="content-card p-6 transition hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold text-navy-950">
                {entry.service.name} in {entry.city.name} anfragen
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Anfrageformular und direkte telefonische Hilfe für {entry.city.name}.
              </p>
            </TrackedLink>
            {relatedLocations[0] ? (
              <Link
                href={`/${relatedLocations[0].combinedSlug}`}
                className="content-card p-6 transition hover:-translate-y-0.5"
              >
                <h3 className="text-xl font-semibold text-navy-950">
                  {relatedLocations[0].service.name} {relatedLocations[0].city.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Weitere Stadtseite mit ähnlichem regionalem Bedarf und direktem Ortsbezug.
                </p>
              </Link>
            ) : null}
          </div>
          {relatedLocations.length > 1 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedLocations.slice(1).map((item) => (
                <Link
                  key={item.combinedSlug}
                  href={`/${item.combinedSlug}`}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-navy-900 transition hover:bg-slate-50"
                >
                  {item.service.name} {item.city.name}
                </Link>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="pb-20">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="FAQ"
            title={`Häufige Fragen zu ${entry.service.name.toLowerCase()} in ${entry.city.name}`}
            description="Die wichtigsten Fragen rund um Leistung, Einsatzgebiet und schnelle Hilfe in ${entry.city.name} werden hier direkt beantwortet."
          />
          <FaqList items={faqs} />
        </Container>
      </section>
    </>
  );
}
