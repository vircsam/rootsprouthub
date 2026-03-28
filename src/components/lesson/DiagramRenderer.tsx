type DiagramRendererProps = {
  title?: string;
  imageSrc?: string;
};

export default function DiagramRenderer({ title, imageSrc }: DiagramRendererProps) {
  return (
    <div className="rounded-2xl border-2 border-[#FFD166]/60 bg-[#0B0B0B] p-4 shadow-[0_0_20px_rgba(255,209,102,0.12)]">
      {title && <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFD166]/80">{title}</div>}
      <div className="overflow-x-auto">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Lesson diagram"
            className="min-w-[520px] rounded-xl border border-[#FFD166]/40"
          />
        ) : (
          <div className="min-w-[520px] rounded-xl border border-dashed border-[#FFD166]/40 p-6 text-center text-sm text-white/50">
            Diagram unavailable.
          </div>
        )}
      </div>
    </div>
  );
}
