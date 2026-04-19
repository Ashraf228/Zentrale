import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Impressum | rohrreinigung-ffm24",
  description: "Impressum von rohrreinigung-ffm24 für Rohrreinigung und Kanalservice.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start", href: "/" }, { label: "Impressum" }]} />
      <section className="pb-20 pt-8">
        <Container className="content-card max-w-4xl p-8">
          <h1 className="text-4xl font-semibold tracking-tight text-navy-950">Impressum</h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
            <p>{siteConfig.legalName}</p>
            <p>
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
              <br />
              Deutschland
            </p>
            <p>Telefon: {siteConfig.phoneDisplay}</p>
            <p>E-Mail: {siteConfig.email}</p>
            <p>
              Hinweis: Die Inhalte dienen als Beispiel für einen professionellen
              Dienstleister und sollten vor Livegang rechtlich final geprüft und an
              die tatsächlichen Unternehmensdaten angepasst werden.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
