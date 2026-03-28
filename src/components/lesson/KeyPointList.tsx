type KeyPoint = {
  title: string;
  detail: string;
};

type KeyPointListProps = {
  items: KeyPoint[];
};

export default function KeyPointList({ items }: KeyPointListProps) {
  if (items.length === 0) return null;
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={`${item.title}-${item.detail}`}
          className="rounded-2xl border-2 border-[#FFD166]/70 bg-[#0F0F0F] p-4 text-sm text-white/75 shadow-[0_0_18px_rgba(255,209,102,0.12)] transition hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,209,102,0.2)]"
        >
          <div className="text-white font-semibold">{item.title}</div>
          <div className="mt-1 text-white/60">{item.detail}</div>
        </div>
      ))}
    </div>
  );
}
