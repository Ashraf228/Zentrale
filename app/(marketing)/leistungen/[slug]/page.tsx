import Link from "next/link";
import { notFound } from "next/navigation";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { TrackedPhoneLink } from "@/components/analytics/tracked-phone-link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { EditorialImageCard } from "@/components/ui/editorial-image-card";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { cities } from "@/data/cities";
import { serviceMap, services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { serviceVisuals } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceMap.get(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/leistungen/${service.slug}`,
    keywords: [
      service.name,
      `${service.name} Frankfurt`,
      `${service.name} Rhein-Main`,
      `Hilfe bei ${service.shortName.toLowerCase()}`,
    ],
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceMap.get(slug);

  if (!service) {
    notFound();
  }

  const relatedCities = cities.slice(0, 3);
  const serviceVisual = serviceVisuals[service.slug] ?? serviceVisuals.rohrreinigung;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Start", href: "/" },
          { label: "Leistungen", href: "/leistungen" },
          { label: service.name },
        ]}
      />
      <JsonLd
        data={buildServiceSchema({
          name: service.name,
          description: service.metaDescription,
          path: `/leistungen/${service.slug}`,
        })}
      />
      <JsonLd data={buildFaqSchema(service.faq)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Start", url: siteConfig.siteUrl },
          { name: "Leistungen", url: `${siteConfig.siteUrl}/leistungen` },
          { name: service.name, url: `${siteConfig.siteUrl}/leistungen/${service.slug}` },
        ])}
      />

      <section className="bg-white pb-16 pt-8">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-7">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Leistungsseite
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
                {service.heroTitle}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                {service.heroDescription}
              </p>
            </div>
            <div className="prose-copy max-w-3xl text-base text-slate-700">
              <p>
                {service.name} in Frankfurt und Rhein-Main ist vor allem dann
                gefragt, wenn Störungen schnell eingegrenzt, technisch sauber
                bewertet und ohne unnötige Verzögerung bearbeitet werden sollen.
              </p>
              <p>{service.intro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TrackedPhoneLink
                href={siteConfig.phoneHref}
                location={`service_${service.slug}_phone`}
                label={`service_${service.slug}_phone`}
                className="rounded-full bg-accent-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-accent-600"
              >
                Soforthilfe: {siteConfig.phoneDisplay}
              </TrackedPhoneLink>
              <TrackedLink
                href="/kontakt"
                location={`service_${service.slug}_contact`}
                label={`service_${service.slug}_contact`}
                className="rounded-full border border-slate-200 px-6 py-4 text-center font-semibold text-navy-950 transition hover:bg-slate-50"
              >
                {service.name} online anfragen
              </TrackedLink>
            </div>
          </div>

          <aside className="space-y-5">
            <EditorialImageCard
              src={serviceVisual.src}
              alt={serviceVisual.alt}
              eyebrow={serviceVisual.eyebrow}
              title={serviceVisual.title}
              description={serviceVisual.description}
            />
            <div className="content-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Featured Snippet</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {service.featuredSnippet}
              </p>
              <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-navy-950">
                  Wann sofort handeln?
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {service.immediateAction.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Häufige Ursachen"
            title={`Typische Gründe für ${service.name.toLowerCase()}`}
            description="Die folgenden Muster greifen besonders häufig ineinander und helfen Nutzern, die eigene Situation besser einzuordnen."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.causes.map((cause) => (
              <article key={cause} className="content-card p-6 text-sm leading-7 text-slate-700">
                {cause}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Ablauf"
            title="Unser Ablauf von Anfrage bis Einsatz"
            description="Von der ersten Schilderung bis zur Arbeit vor Ort steht eine klare technische Einordnung und eine verlässliche Einsatzvorbereitung im Mittelpunkt."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <article key={step} className="content-card p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-600">
                  Schritt {index + 1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">{step}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="content-card p-8">
            <h2 className="text-2xl font-semibold text-navy-950">Kostenhinweise</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{service.costHint}</p>
          </div>
          <div className="content-card p-8">
            <h2 className="text-2xl font-semibold text-navy-950">Einsatzgebiet</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              rohrreinigung-ffm24 arbeitet mit Fokus auf Frankfurt und das
              Rhein-Main-Gebiet. Typisch sind Einsätze in Wohnungen,
              Mehrfamilienhäusern, Gewerbeeinheiten, Verwaltungsobjekten und
              im Bereich der Grundstücksentwässerung.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${service.slug}-${city.slug}`}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-slate-50"
                >
                  {service.shortName} {city.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Interne Verlinkung"
            title="Passende Stadtseiten zu dieser Leistung"
            description="Die lokalen Seiten vertiefen typische Einsatzorte, Suchanfragen und Kontaktmöglichkeiten für Frankfurt und das umliegende Rhein-Main-Gebiet."
            light
          />
          <div className="grid gap-5 md:grid-cols-3">
            {relatedCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${service.slug}-${city.slug}`}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold">
                  {service.name} {city.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Lokale Seite für {service.name.toLowerCase()} in {city.name} mit
                  FAQ, Einsatzgebiet und direkter Anfrageoption.
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="FAQ"
            title={`Häufige Fragen zu ${service.name.toLowerCase()}`}
            description="Kurze, präzise Antworten helfen dabei, typische Fragen schnell zu klären und die passende Entscheidung für den nächsten Schritt zu treffen."
          />
          <FaqList items={service.faq} />
        </Container>
      </section>
    </>
  );
}
