export function MetricCounter({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <div className="rounded-3xl border border-petroleum/10 bg-white/65 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5">
      <div className="font-display text-4xl font-semibold text-petroleum dark:text-sand">{value}</div>
      <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-gold">{label}</div>
      <div className="mt-2 text-xs leading-5 text-graphite/55 dark:text-sand/55">{detail}</div>
    </div>
  );
}
