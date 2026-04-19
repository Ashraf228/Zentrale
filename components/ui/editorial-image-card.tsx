import Image from "next/image";

type EditorialImageCardProps = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  priority?: boolean;
};

export function EditorialImageCard({
  src,
  alt,
  eyebrow,
  title,
  description,
  className = "",
  priority = false,
}: EditorialImageCardProps) {
  return (
    <figure
      className={`overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-panel ${className}`.trim()}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <figcaption className="space-y-3 p-6">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="text-xl font-semibold tracking-tight text-navy-950">{title}</h3>
        <p className="text-sm leading-7 text-slate-600">{description}</p>
      </figcaption>
    </figure>
  );
}
