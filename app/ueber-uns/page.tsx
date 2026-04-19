import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { EditorialImageCard } from "@/components/ui/editorial-image-card";
import { aboutVisual } from "@/data/visuals";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Über uns | rohrreinigung-ffm24",
  description:
    "Über rohrreinigung-ffm24 als Fachbetrieb für Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen und Abpumpen in Frankfurt und Rhein-Main.",
  path: "/ueber-uns",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: "Über uns" }]} />
      <section className="pb-20 pt-8">
        <Container className="section-grid">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Über uns
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              rohrreinigung-ffm24 für Rohrreinigung und Kanalservice in Frankfurt und Rhein-Main
            </h1>
            <p className="max-w-4xl text-lg leading-8 text-slate-600">
              rohrreinigung-ffm24 ist auf Rohrreinigung, Kanalreinigung,
              TV-Inspektion, Spülungen und Abpumpen im Raum Frankfurt
              Rhein-Main spezialisiert. Im Mittelpunkt stehen schnelle
              Erreichbarkeit, eine saubere technische Einordnung und eine
              verlässliche Durchführung bei akuten und planbaren Einsätzen.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="content-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Wofür wir stehen</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Unser Anspruch ist ein seriöser und belastbarer Fachbetrieb für
                Privathaushalte, Vermieter, Hausverwaltungen und Gewerbekunden
                mit Verstopfungen, Rückstau oder wiederkehrenden
                Entwässerungsproblemen. Dazu gehören klare Aussagen zum
                Leistungsbedarf, eine verständliche Kommunikation und ein
                technischer Fokus auf Rohr, Kanal und tieferliegende
                Leitungsprobleme.
              </p>
            </article>
            <article className="content-card p-8">
              <h2 className="text-2xl font-semibold text-navy-950">Wie wir arbeiten</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Wir arbeiten strukturiert, praxisnah und mit einem klaren Blick
                auf Ursache, Dringlichkeit und Zugänglichkeit der Störung.
                Bereits beim ersten Kontakt werden betroffener Bereich,
                Einsatzort und Schadensbild erfasst, damit Rohrreinigung,
                Kanalreinigung, TV-Inspektion, Spülung oder Abpumpen passend
                vorbereitet und ohne Umwege ausgeführt werden können.
              </p>
            </article>
          </div>
          <EditorialImageCard
            src={aboutVisual.src}
            alt={aboutVisual.alt}
            eyebrow={aboutVisual.eyebrow}
            title={aboutVisual.title}
            description={aboutVisual.description}
            className="max-w-4xl"
          />
        </Container>
      </section>
    </>
  );
}
