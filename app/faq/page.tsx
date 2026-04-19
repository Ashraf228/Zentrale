import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { FaqList } from "@/components/ui/faq-list";
import { createMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Ist rohrreinigung-ffm24 ein direkter Dienstleister?",
    answer:
      "Ja. rohrreinigung-ffm24 tritt als direkter Dienstleister für Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen, Abpumpen und zeitkritische Einsätze bei Entwässerungsproblemen auf.",
  },
  {
    question: "Welche Leistungen können angefragt werden?",
    answer:
      "Angefragt werden können unter anderem Rohrreinigung, Abflussreinigung, Kanalreinigung, Rohrreinigung Notdienst, TV-Inspektion, Kanalinspektion, Rohrspülung, Kanalspülung und Abpumpen. Hinzu kommen typische Störungsbilder wie WC verstopft, Küchenabfluss verstopft oder Rückstau im Keller.",
  },
  {
    question: "Kann ich auch für Hausverwaltung oder Gewerbe anfragen?",
    answer:
      "Ja. rohrreinigung-ffm24 arbeitet für Privathaushalte, Vermieter, Hausverwaltungen, Gewerbekunden und verwaltete Bestandsimmobilien im Raum Frankfurt und Rhein-Main.",
  },
  {
    question: "In welchen Regionen ist rohrreinigung-ffm24 tätig?",
    answer:
      "Der Schwerpunkt liegt auf Frankfurt am Main und dem gesamten Rhein-Main-Gebiet. Dazu gehören unter anderem Offenbach, Wiesbaden, Mainz, Darmstadt, Hanau, Neu-Isenburg, Hofheim, Rüsselsheim und weitere Städte im direkten Umland.",
  },
  {
    question: "Welche Angaben helfen bei einer schnellen Einordnung?",
    answer:
      "Hilfreich sind der Einsatzort, der betroffene Bereich, eine kurze Beschreibung des Problems und die Information, ob Wasser noch abläuft oder bereits Rückstau besteht. Bei mehreren betroffenen Abläufen oder Kellerproblemen sollte das direkt erwähnt werden.",
  },
  {
    question: "Wann ist eine TV-Inspektion sinnvoll?",
    answer:
      "Eine TV-Inspektion ist besonders sinnvoll, wenn Verstopfungen wiederkehren, die Ursache unklar bleibt oder ein Schaden im Leitungsverlauf vermutet wird. Sie hilft dabei, den tatsächlichen Zustand der Leitung gezielt zu beurteilen.",
  },
  {
    question: "Wann sollte ich nicht mehr selbst versuchen, das Problem zu lösen?",
    answer:
      "Wenn Wasser gar nicht mehr abläuft, mehrere Bereiche betroffen sind, das WC überläuft, Rückstau entsteht oder sich das Problem trotz eigener Maßnahmen wiederholt, sollte die Störung fachlich geprüft werden. Gerade aggressive Chemie oder wiederholtes Spülen verschärfen solche Fälle häufig.",
  },
];

export const metadata = createMetadata({
  title: "FAQ | rohrreinigung-ffm24",
  description:
    "Häufige Fragen zu rohrreinigung-ffm24, Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen und Abpumpen.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: "FAQ" }]} />
      <section className="pb-20 pt-8">
        <Container className="section-grid">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              FAQ
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">
              Häufige Fragen
            </h1>
            <p className="max-w-4xl text-lg leading-8 text-slate-600">
              Diese Seite beantwortet häufige Fragen zu Rohrreinigung,
              Kanalservice, TV-Inspektion, Spülungen, Abpumpen und zur
              schnellen Hilfe bei Verstopfung, Rückstau und
              Entwässerungsproblemen im Raum Frankfurt Rhein-Main.
            </p>
          </div>
          <FaqList items={faqs} />
        </Container>
      </section>
    </>
  );
}
