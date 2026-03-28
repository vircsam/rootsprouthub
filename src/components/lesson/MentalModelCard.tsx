import { motion } from 'motion/react';

type MentalModelCardProps = {
  title: string;
  content: string;
};

type SectionMap = {
  visualMapping: string[];
  keyInsight: string[];
  observe: string[];
  diagramText: string[];
};

const headingMap: Record<string, keyof SectionMap | 'terminal'> = {
  'Visual Mapping': 'visualMapping',
  'Think of the system like a busy city:': 'visualMapping',
  'Key Insight': 'keyInsight',
  'Observe:': 'observe',
  'Diagram: Traffic Flow Model': 'diagramText',
  'Terminal Prompt': 'terminal',
};

function parseMentalModelContent(content: string) {
  const sections: SectionMap = {
    visualMapping: [],
    keyInsight: [],
    observe: [],
    diagramText: [],
  };
  let current: keyof SectionMap | 'terminal' = 'visualMapping';
  const lines = content.split('\n').map((line) => line.trim()).filter(Boolean);

  lines.forEach((line) => {
    if (headingMap[line]) {
      current = headingMap[line];
      return;
    }
    if (current === 'visualMapping') {
      sections.visualMapping.push(line);
      return;
    }
    if (current === 'keyInsight') {
      sections.keyInsight.push(line);
      return;
    }
    if (current === 'observe') {
      sections.observe.push(line);
      return;
    }
    if (current === 'diagramText') {
      sections.diagramText.push(line);
      return;
    }
  });

  return sections;
}

export default function MentalModelCard({ title, content }: MentalModelCardProps) {
  const sections = parseMentalModelContent(content);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto w-full max-w-[1200px] px-4 md:px-8"
    >
      <div className="rounded-[32px] border border-primary/40 bg-[radial-gradient(circle_at_top,_rgba(255,193,7,0.18),_rgba(8,8,8,0.95))] p-8 md:p-12 shadow-[0_0_40px_rgba(255,195,0,0.18)]">
        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
          Mental Model
        </div>
        <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm md:text-lg text-white/70">
          Lock in a single picture you can recall instantly when you think about how the OS keeps everything flowing.
        </p>
      </div>

      {sections.visualMapping.length > 0 && (
        <div className="mt-10">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
            Visual Mapping
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {sections.visualMapping.map((line) => (
              <div
                key={line}
                className="rounded-2xl border border-primary/30 bg-[#151515] px-5 py-4 text-sm md:text-base font-semibold text-white/85 shadow-[0_0_18px_rgba(255,195,0,0.08)]"
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      )}

      {sections.keyInsight.length > 0 && (
        <div className="mt-8 rounded-3xl border border-primary/30 bg-[#14110a] p-7 md:p-9 text-white/80 shadow-[0_0_26px_rgba(255,195,0,0.15)]">
          <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
            Key Insight
          </div>
          <div className="mt-4 space-y-1 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {sections.keyInsight.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>
      )}

      {sections.observe.length > 0 && (
        <div className="mt-8 rounded-3xl border border-white/10 bg-[#0f0f0f] p-7 md:p-9 text-white/75">
          <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/50">
            Observe
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {sections.observe.map((line) => (
              <div key={line} className="rounded-xl border border-white/10 bg-[#171717] px-4 py-3 text-sm text-white/75">
                {line}
              </div>
            ))}
          </div>
        </div>
      )}

      {sections.diagramText.length > 0 && (
        <div className="mt-8 rounded-3xl border border-primary/30 bg-[#0b0a07] p-7 md:p-9 shadow-[0_0_26px_rgba(255,195,0,0.12)]">
          <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
            Traffic Flow Diagram
          </div>
          <pre className="mt-4 whitespace-pre-wrap font-mono text-xs md:text-sm text-white/80">
            {sections.diagramText.join('\n')}
          </pre>
        </div>
      )}
    </motion.div>
  );
}
