"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { getAttribution, trackClarity, trackEvent } from "@/lib/tracking";

type TrackedPhoneLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  location: string;
  label?: string;
};

export function TrackedPhoneLink({
  children,
  location,
  label,
  onClick,
  ...props
}: TrackedPhoneLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        const currentPage = `${window.location.pathname}${window.location.search}`;

        trackEvent("phone_click", {
          event_category: "lead",
          event_label: label ?? location,
          cta_location: location,
          contact_method: "phone",
          ...getAttribution(currentPage),
        });
        trackClarity("phone_click");
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
