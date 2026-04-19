import { notFound, redirect } from "next/navigation";

import { getLocationPage, scalableLocationParams } from "@/lib/location-pages";

export function generateStaticParams() {
  return scalableLocationParams.map((item) => ({
    city: item.city,
    service: item.service,
  }));
}

export default async function StructuredLocationPage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;
  const entry = getLocationPage(service, city);

  if (!entry) {
    notFound();
  }

  redirect(`/${entry.combinedSlug}`);
}
