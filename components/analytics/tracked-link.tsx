"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { getAttribution, trackClarity, trackEvent } from "@/lib/tracking";

type TrackedLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  location: string;
  label?: string;
};

export function TrackedLink({
  href,
  className,
  children,
  location,
  label,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        const currentPage = `${window.location.pathname}${window.location.search}`;

        trackEvent("cta_click", {
          event_category: "lead",
          event_label: label ?? href,
          cta_location: location,
          destination: href,
          ...getAttribution(currentPage),
        });
        trackClarity("cta_click");
      }}
    >
      {children}
    </Link>
  );
}
