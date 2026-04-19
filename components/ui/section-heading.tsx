export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <span
        className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${
          light
            ? "border-white/15 bg-white/5 text-blue-100"
            : "border-navy-100 bg-white text-navy-700"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      <p className={`text-base leading-8 ${light ? "text-blue-100" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}
