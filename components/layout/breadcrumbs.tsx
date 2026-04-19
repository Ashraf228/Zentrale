import Link from "next/link";

import { Container } from "@/components/layout/container";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <Container className="py-5">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="transition hover:text-navy-900">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-slate-700">{item.label}</span>
              )}
              {index < items.length - 1 ? <span>/</span> : null}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
