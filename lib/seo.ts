import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

type CreateMetadataProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  image = siteConfig.ogImage,
}: CreateMetadataProps): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteConfig.siteUrl}${image}`;

  return {
    title,
    description,
    keywords,
    category: "Rohrreinigung und Kanalservice",
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.brandName,
      locale: "de_DE",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
