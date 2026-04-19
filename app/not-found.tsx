import Link from "next/link";

import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="content-card max-w-3xl p-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-navy-950">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Die angeforderte Seite ist aktuell nicht verfügbar. Über die Startseite,
          die Leistungsseiten oder das Kontaktformular gelangen Sie schnell weiter.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-navy-950 px-6 py-4 font-semibold text-white"
        >
          Zur Startseite
        </Link>
      </Container>
    </section>
  );
}
