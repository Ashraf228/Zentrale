import { siteConfig } from "@/data/site";

type Faq = { question: string; answer: string };

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/ProfessionalService",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    areaServed: siteConfig.regions,
    description:
      "Dienstleister für Rohrreinigung, Kanalreinigung, TV-Inspektion, Spülungen, Abpumpen und Notdienste im Raum Frankfurt und Rhein-Main.",
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    serviceType: [
      "Rohrreinigung",
      "Abflussreinigung",
      "Kanalreinigung",
      "Rohrspülung",
      "Kanalspülung",
      "Rohrreinigung Notdienst",
      "TV-Inspektion",
      "Abpumpen",
      "Kanalinspektion",
    ],
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    areaServed: siteConfig.regions,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    url: `${siteConfig.siteUrl}${path}`,
  };
}

export function buildFaqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
