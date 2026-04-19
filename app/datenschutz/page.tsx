import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Datenschutz | rohrreinigung-ffm24",
  description:
    "Datenschutzhinweise für Kontaktanfragen, Telefonanfragen und die Nutzung der Website von rohrreinigung-ffm24.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: "Datenschutz" }]} />
      <section className="pb-20 pt-8">
        <Container className="content-card max-w-4xl p-8">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-950">
            Datenschutzhinweise
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
            <p>
              Bei Kontaktanfragen werden die von Ihnen übermittelten Angaben
              verarbeitet, um Ihr Anliegen aufzunehmen, regional einzuordnen und
              den passenden Einsatz zu planen.
            </p>
            <p>
              Zu den typischen Daten gehören Name, Telefonnummer, Ort, Angaben zum
              Schadensbild und weitere freiwillige Informationen zur Anfrage.
            </p>
            <p>
              Vor Livegang sollten diese Hinweise an die tatsächlich eingesetzten
              Tools, Formulare, Tracking-Dienste und internen Prozesse angepasst
              werden.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
