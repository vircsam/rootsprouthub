type CoreConceptCardProps = {
  content: string;
};

type Capability = {
  title: string;
  detail: string;
  command: string;
};

function parseCoreConcept(content: string) {
  const lines = content.split('\n').map((line) => line.trim()).filter(Boolean);
  const items: Capability[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    const title = lines[i];
    const whatLine = lines[i + 1];
    const detailLine = lines[i + 2];
    const tryLine = lines[i + 3];
    const commandLine = lines[i + 4];
    if (whatLine === 'What it does' && tryLine === 'Try it') {
      items.push({
        title,
        detail: detailLine || '',
        command: commandLine || '',
      });
      i += 4;
    }
  }
  return items;
}

export default function CoreConceptCard({ content }: CoreConceptCardProps) {
  const items = parseCoreConcept(content);
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0F0F0F] p-8 shadow-[0_0_30px_rgba(255,195,0,0.08)]">
      <div className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-white/50">
        Functional Capabilities
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={`${item.title}-${item.command}`}
            className="h-full min-h-[160px] break-words rounded-2xl border border-white/10 bg-[#1C1C1C] p-6 text-white/80 shadow-[0_0_18px_rgba(255,195,0,0.06)] transition hover:border-[#FFC107]/60 hover:shadow-[0_0_26px_rgba(255,195,0,0.18)]"
          >
            <div className="text-base font-bold text-white break-words">{item.title}</div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/40">What it does</div>
            <div className="mt-2 text-xs leading-relaxed text-white/70">{item.detail}</div>
            <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/40">Terminal Prompt</div>
            <div className="mt-2 rounded-lg border border-[#FFC107]/40 bg-[#101010] px-3 py-2 font-mono text-xs text-[#FFC107]">
              {item.command}
            </div>
          </div>
        ))}
      </div>
      {items.length > 0 && (
        <div className="mt-6 rounded-2xl border border-[#FFC107]/40 bg-[#111111] p-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFC107]/80">
            Terminal Prompt
          </div>
          <div className="mt-3 grid gap-2">
            {items.map((item) => (
              <div
                key={`${item.title}-prompt`}
                className="rounded-lg border border-[#FFC107]/40 bg-[#0B0B0B] px-4 py-2 font-mono text-sm text-[#FFC107]"
              >
                {item.command}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
