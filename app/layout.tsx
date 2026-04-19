import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import "./globals.css";

import { AnalyticsScripts, GoogleTagManagerNoscript } from "@/components/analytics/analytics-scripts";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCallButton } from "@/components/layout/sticky-call-button";
import { JsonLd } from "@/components/seo/json-ld";
import { buildOrganizationSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.brandName,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <GoogleTagManagerNoscript />
        <AnalyticsScripts />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <JsonLd data={buildOrganizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
