import { TrackedPhoneLink } from "@/components/analytics/tracked-phone-link";
import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Kontakt Frankfurt Rhein-Main | Rohrreinigung schnell anfragen",
  description:
    "Kontakt zu rohrreinigung-ffm24 für Rohrreinigung, Kanalservice, TV-Inspektion, Spülungen und schnelle Hilfe in Frankfurt und Rhein-Main.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: "Kontakt" }]} />
      <section className="pb-20 pt-8">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="content-card p-8">
            <span className="inline-flex rounded-full border border-navy-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Soforthilfe
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-navy-950">
              Kontakt für Rohr- und Kanalservice in Frankfurt und Rhein-Main
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Für akute Verstopfungen, Rückstau, Ausfälle einzelner
              Sanitärbereiche, TV-Inspektionen, Spülungen oder Abpumpen im Raum
              Frankfurt Rhein-Main. Telefonisch erreichen Sie
              rohrreinigung-ffm24 besonders schnell, damit Störung,
              Dringlichkeit und Einsatzort direkt eingeordnet werden können.
            </p>
            <TrackedPhoneLink
              href={siteConfig.phoneHref}
              location="contact_page_primary"
              label="contact_page_phone"
              className="mt-8 inline-flex rounded-full bg-accent-500 px-6 py-4 text-base font-semibold text-white"
            >
              {siteConfig.phoneDisplay}
            </TrackedPhoneLink>
            <div className="mt-8 space-y-3 text-sm text-slate-600">
              <p>E-Mail: {siteConfig.email}</p>
              <p>Geeignet für Privathaushalte, Vermieter, Hausverwaltungen und Gewerbe.</p>
              <p>Hilfreich sind Angaben zu Einsatzort, betroffenem Bereich und aktuellem Störungsbild.</p>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
