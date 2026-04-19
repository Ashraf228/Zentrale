type FaqItem = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="content-card group overflow-hidden border border-slate-200 p-6"
        >
          <summary className="flex items-center justify-between gap-4 text-left">
            <span className="text-base font-semibold text-navy-950">
              {item.question}
            </span>
            <span className="text-2xl font-light text-accent-500 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
