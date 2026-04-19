import Link from "next/link";

import { TrackedPhoneLink } from "@/components/analytics/tracked-phone-link";
import { Container } from "@/components/layout/container";
import { primaryNavigation, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/60 bg-white/96 shadow-[0_10px_30px_rgba(9,26,51,0.08)] backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-base font-extrabold tracking-tight text-navy-950 transition hover:text-accent-600"
          >
            {siteConfig.brandName}
          </Link>
          <span className="hidden rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700 sm:inline-flex">
            24/7 Rohr- & Kanalservice
          </span>
        </div>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-2 lg:flex"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-navy-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <TrackedPhoneLink
          href={siteConfig.phoneHref}
          location="header_primary"
          label="header_phone"
          className="rounded-full bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(9,26,51,0.18)] transition hover:bg-accent-600"
        >
          {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </Container>
    </header>
  );
}
