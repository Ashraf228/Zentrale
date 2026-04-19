import Link from "next/link";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { TrackedPhoneLink } from "@/components/analytics/tracked-phone-link";
import { Container } from "@/components/layout/container";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-navy-950">{siteConfig.brandName}</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-600">
            Dienstleister für Rohrreinigung, Kanalreinigung, TV-Inspektion,
            Spülungen, Abpumpen und Notdienste in Frankfurt und Rhein-Main.
            Schnelle Hilfe, klare Einordnung und verlässliche Unterstützung bei
            akuten und planbaren Einsätzen stehen im Mittelpunkt.
          </p>
          <div className="text-sm text-slate-700">
            <TrackedPhoneLink
              className="font-semibold text-navy-900"
              href={siteConfig.phoneHref}
              location="footer_contact"
              label="footer_phone"
            >
              {siteConfig.phoneDisplay}
            </TrackedPhoneLink>
            <p>{siteConfig.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Leistungen
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="transition hover:text-navy-900"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Service
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              <Link href="/ueber-uns" className="transition hover:text-navy-900">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/faq" className="transition hover:text-navy-900">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/ki-uebersicht" className="transition hover:text-navy-900">
                KI-Übersicht
              </Link>
            </li>
            <li>
              <TrackedLink
                href="/kontakt"
                location="footer_contact_link"
                label="footer_contact"
                className="transition hover:text-navy-900"
              >
                Kontakt
              </TrackedLink>
            </li>
            <li>
              <Link href="/impressum" className="transition hover:text-navy-900">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="transition hover:text-navy-900">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
