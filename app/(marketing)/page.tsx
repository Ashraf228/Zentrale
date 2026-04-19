import Link from "next/link";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { TrackedPhoneLink } from "@/components/analytics/tracked-phone-link";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { EditorialImageCard } from "@/components/ui/editorial-image-card";
import { FaqList } from "@/components/ui/faq-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { heroVisual, homeTrustVisuals } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";

const homeFaqs = [
  {
    question: "Wie schnell ist rohrreinigung-ffm24 in Frankfurt und Rhein-Main verfügbar?",
    answer:
      "Bei akuten Verstopfungen, Rückstau oder Ausfällen zählt eine schnelle Einordnung. rohrreinigung-ffm24 ist für kurzfristige Einsätze in Frankfurt und Rhein-Main erreichbar; die genaue Verfügbarkeit hängt von Uhrzeit, Störungsbild und Auslastung ab.",
  },
  {
    question: "Welche Leistungen bietet rohrreinigung-ffm24 an?",
    answer:
      "rohrreinigung-ffm24 bietet Rohrreinigung, Kanalreinigung, TV-Inspektion, Rohrspülung, Kanalspülung, Abpumpen und zeitkritische Hilfe bei Rückstau, Verstopfung und weiteren Entwässerungsproblemen an.",
  },
  {
    question: "Für wen ist das Angebot geeignet?",
    answer:
      "Das Angebot ist für Privathaushalte, Vermieter, Hausverwaltungen und Gewerbekunden geeignet, die schnelle Hilfe bei Rohr-, Kanal-, Rückstau- oder Ablaufproblemen brauchen.",
  },
  {
    question: "Welche Informationen sind bei der Anfrage hilfreich?",
    answer:
      "Wichtig sind Einsatzort, betroffener Bereich, Dringlichkeit und die Frage, ob Wasser noch abläuft oder bereits Rückstau besteht. Auch mehrere betroffene Abläufe, Kellerbereiche oder vorherige Maßnahmen sollten direkt genannt werden.",
  },
];

export const metadata = createMetadata({
  title: "rohrreinigung-ffm24 | Rohrreinigung Frankfurt & Rhein-Main",
  description:
    "rohrreinigung-ffm24 für Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen und Abpumpen in Frankfurt und Rhein-Main.",
  path: "/",
  keywords: [
    "Rohrreinigung",
    "Abflussreinigung",
    "Kanalreinigung",
    "Rohrreinigung Notdienst",
    "Abfluss verstopft",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Start", url: siteConfig.siteUrl },
        ])}
      />
      <JsonLd data={buildFaqSchema(homeFaqs)} />
      <JsonLd
        data={buildServiceSchema({
          name: "rohrreinigung-ffm24",
          description:
            "Dienstleister für Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen und Abpumpen in Frankfurt und Rhein-Main.",
          path: "/",
        })}
      />

      <section className="bg-hero pb-20 pt-14 text-white">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-8 lg:pt-2">
            <span className="eyebrow">
              24/7 erreichbar • rohrreinigung-ffm24
            </span>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Rohrreinigung Frankfurt und Rhein-Main mit rohrreinigung-ffm24
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-blue-100">
                rohrreinigung-ffm24 übernimmt Rohrreinigung, Kanalreinigung,
                TV-Inspektion, Spülungen und Abpumpen für Privatkunden,
                Verwaltungen und Gewerbe im Raum Frankfurt Rhein-Main. Im
                Mittelpunkt stehen schnelle Erreichbarkeit, saubere technische
                Einordnung und eine verlässliche Bearbeitung bei Verstopfung,
                Rückstau und Entwässerungsproblemen.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <TrackedPhoneLink
                href={siteConfig.phoneHref}
                location="home_hero_primary"
                label="home_hero_phone"
                className="rounded-full bg-accent-500 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-accent-600"
              >
                Jetzt anrufen: {siteConfig.phoneDisplay}
              </TrackedPhoneLink>
              <TrackedLink
                href="/kontakt"
                location="home_hero_secondary"
                label="home_hero_contact"
                className="rounded-full border border-white/15 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                Rohrreinigung online anfragen
              </TrackedLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "24/7 erreichbar",
                "Kurzfristige Termin- und Notfalleinsätze",
                "Klare Erstaufnahme ohne Umwege",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-blue-50"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <EditorialImageCard
              src={heroVisual.src}
              alt={heroVisual.alt}
              eyebrow={heroVisual.eyebrow}
              title={heroVisual.title}
              description={heroVisual.description}
              className="shadow-[0_24px_60px_rgba(7,18,52,0.22)]"
              priority
            />
            <div className="content-card rounded-[2rem] border border-white/10 bg-white p-6 text-navy-950 shadow-panel">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
                Soforthilfe
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                Schnelle Hilfe bei Verstopfung, Rückstau oder Ausfall
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Rohr oder Fallleitung verstopft",
                  "Kanal- oder Rückstauproblem",
                  "TV-Inspektion oder Kameraortung",
                  "Spülung oder Abpumpen",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-navy-900 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-blue-100">
                  Telefonische Soforthilfe
                </p>
                <TrackedPhoneLink
                  href={siteConfig.phoneHref}
                  location="home_hero_sidecard"
                  label="home_side_phone"
                  className="mt-2 block text-3xl font-semibold tracking-tight"
                >
                  {siteConfig.phoneDisplay}
                </TrackedPhoneLink>
                <p className="mt-2 text-sm leading-7 text-blue-100">
                  Für Haushalt, Verwaltung und Gewerbe im Rhein-Main-Gebiet.
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="py-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Vertrauen"
            title="Seriöser Fachbetrieb für schnelle Hilfe"
            description="Im Einsatz stehen saubere Diagnose, passende Technik und ein klarer Fokus auf Rohr-, Kanal- und Entwässerungsprobleme im Rhein-Main-Gebiet."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Fachlich klarer Schwerpunkt",
                text: "Rohrreinigung, Kanalreinigung, TV-Inspektion, Spültechnik und Abpumpen gehören zum Kern des täglichen Leistungsbereichs.",
              },
              {
                title: "24/7 erreichbar",
                text: "Akute Verstopfungen, Rückstau und Ausfälle können jederzeit aufgenommen und nach Dringlichkeit eingeordnet werden.",
              },
              {
                title: "Klare Erstaufnahme",
                text: "Betroffener Bereich, Schadensbild und Dringlichkeit werden früh sauber erfasst, damit der Einsatz passend vorbereitet werden kann.",
              },
              {
                title: "Für Haushalt bis Gewerbe",
                text: "Geeignet für Privathaushalte, Vermieter, Hausverwaltungen und gewerbliche Objekte im gesamten Rhein-Main-Gebiet.",
              },
            ].map((item) => (
              <article key={item.title} className="content-card p-6">
                <h3 className="text-lg font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {homeTrustVisuals.map((visual) => (
              <EditorialImageCard
                key={visual.title}
                src={visual.src}
                alt={visual.alt}
                eyebrow={visual.eyebrow}
                title={visual.title}
                description={visual.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Leistungen"
            title="Leistungen für akute Störungen und planbare Einsätze"
            description="Von der akuten Rohrverstopfung bis zur planbaren TV-Inspektion sind die wichtigsten Leistungen rund um Rohr, Kanal und Entwässerung klar gegliedert."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="content-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-navy-950">
                    {service.name}
                  </h3>
                  {service.emergency ? (
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
                      Notfall
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.intro}
                </p>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="mt-6 inline-flex font-semibold text-accent-600"
                >
                  {service.name} Frankfurt & Rhein-Main
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Ablauf"
            title="So läuft die schnelle Hilfe ab"
            description="Kurze Wege, klare Angaben und eine passende technische Einordnung sorgen dafür, dass Einsätze ohne unnötige Verzögerung vorbereitet werden."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Sie schildern telefonisch oder online, welcher Bereich betroffen ist und wie dringend die Störung ist.",
              "Wir ordnen ein, ob Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülung oder Abpumpen sinnvoll ist.",
              "Der Einsatz wird passend vorbereitet, damit Technik, Zeitfenster und Zugangssituation berücksichtigt sind.",
              "Vor Ort wird die Ursache eingegrenzt, die Leistung durchgeführt und das weitere Vorgehen transparent abgestimmt.",
            ].map((step, index) => (
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
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="section-grid">
            <SectionHeading
              eyebrow="Warum wir"
              title="Warum Kunden rohrreinigung-ffm24 wählen"
              description="Im Ernstfall zählen Erreichbarkeit, Fachwissen und ein sauber vorbereiteter Einsatz. Genau darauf ist rohrreinigung-ffm24 im Raum Frankfurt Rhein-Main ausgerichtet."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Schnelle telefonische Erreichbarkeit bei akuten Verstopfungen und Rückstau",
                "Technischer Fokus auf Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen und Abpumpen",
                "Geeignet für Wohnung, Haus, Hausverwaltung, Gewerbe und Grundstücksentwässerung",
                "Klare Aussagen zu Dringlichkeit, Vorgehen und sinnvoller nächster Maßnahme",
              ].map((item) => (
                <div key={item} className="content-card p-5 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="content-card p-8">
            <h2 className="text-2xl font-semibold text-navy-950">
              Typische Störungen im Alltag
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                "Rohr oder Fallleitung verstopft",
                "Rückstau im Keller oder Sanitärbereich",
                "Wiederkehrende Verstopfungen trotz eigener Maßnahmen",
                "Unklare Ursache im Leitungsverlauf",
                "Stehendes Wasser in Schacht oder Keller",
                "Spülung oder TV-Inspektion nach wiederholten Störungen",
                "Probleme in Wohnung, Mehrfamilienhaus oder Gewerbeeinheit",
                "Akute Hilfe im Raum Frankfurt Rhein-Main",
              ].map((keyword) => (
                <div
                  key={keyword}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-16 text-white">
        <Container className="section-grid">
          <SectionHeading
            eyebrow="Einsatzgebiete"
            title="Schnelle Hilfe in Frankfurt und im Rhein-Main-Gebiet"
            description="rohrreinigung-ffm24 ist auf Einsätze in Frankfurt und im umliegenden Rhein-Main-Gebiet ausgerichtet. Dazu gehören Städte und Umlandlagen, in denen schnelle Hilfe bei Rohr-, Kanal- und Rückstauproblemen besonders wichtig ist."
            light
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cities.map((city) => (
              <article
                key={city.slug}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">{city.intro}</p>
                <Link
                  href={`/rohrreinigung-${city.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-accent-300"
                >
                  Rohrreinigung in {city.name}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="section-grid">
            <SectionHeading
              eyebrow="FAQ"
              title="Häufige Fragen zu rohrreinigung-ffm24"
              description="Die wichtigsten Fragen zu Erreichbarkeit, Leistungen und der schnellen Anfrageaufnahme werden direkt und verständlich beantwortet."
            />
          <FaqList items={homeFaqs} />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="rounded-[2rem] bg-gradient-to-r from-navy-950 to-navy-800 px-6 py-10 text-white shadow-panel sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Rohrreinigung Frankfurt anfragen
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Jetzt Rohrreinigung oder Kanalservice anfragen
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
                  Für akute Verstopfungen, Rückstau, überflutete Keller,
                  wiederkehrende Ablaufprobleme oder planbare TV-Inspektionen,
                  Spülungen und Abpumparbeiten. Ein kurzer Anruf reicht oft,
                  damit Störung, Dringlichkeit und der passende nächste Schritt
                  direkt eingeordnet werden können.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <TrackedPhoneLink
                  href={siteConfig.phoneHref}
                  location="home_final_cta_phone"
                  label="home_bottom_phone"
                  className="rounded-full bg-accent-500 px-6 py-4 text-center font-semibold text-white transition hover:bg-accent-600"
                >
                  {siteConfig.phoneDisplay}
                </TrackedPhoneLink>
                <TrackedLink
                  href="/kontakt"
                  location="home_final_cta_form"
                  label="home_bottom_contact"
                  className="rounded-full border border-white/15 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Zum Kontaktformular
                </TrackedLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
