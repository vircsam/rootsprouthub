import { motion } from 'motion/react';

type IntroCardVariantProps = {
  title: string;
  content: string;
};

type ParsedIntro = {
  headline: string;
  description: string[];
  reasons: string[];
  terminalPrompt: string;
  whyThisWorks: string;
};

function parseIntro(content: string): ParsedIntro {
  const lines = content.split('\n').map((line) => line.trim()).filter(Boolean);
  const result: ParsedIntro = {
    headline: '',
    description: [],
    reasons: [],
    terminalPrompt: '',
    whyThisWorks: '',
  };

  let mode: 'description' | 'reasons' | 'terminal' | 'why' = 'description';
  lines.forEach((line) => {
    if (!result.headline) {
      result.headline = line;
      return;
    }
    if (line === 'Why this split exists:' || line === 'Why this split exists') {
      mode = 'reasons';
      return;
    }
    if (line === 'Terminal Prompt') {
      mode = 'terminal';
      return;
    }
    if (line === 'Why this works:') {
      mode = 'why';
      return;
    }
    if (line === 'Mermaid Diagram (Enhanced Mental Model)') {
      return;
    }
    if (mode === 'terminal') {
      if (!result.terminalPrompt && !line.startsWith('Run:')) {
        result.terminalPrompt = line;
      }
      return;
    }
    if (mode === 'why') {
      result.whyThisWorks = result.whyThisWorks ? `${result.whyThisWorks} ${line}` : line;
      return;
    }
    if (mode === 'reasons') {
      result.reasons.push(line.replace(/^[-•]\s*/, ''));
      return;
    }
    result.description.push(line);
  });

  return result;
}

export default function IntroCardVariant({ content }: IntroCardVariantProps) {
  const parsed = parseIntro(content);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto w-full max-w-[1440px] px-4 md:px-8"
    >
      <div className="mt-10">
        <div className="rounded-3xl border border-[#FFC107]/40 bg-[#121212] p-6 md:p-10 shadow-[0_0_34px_rgba(255,195,0,0.14)] transition hover:scale-[1.02] hover:shadow-[0_0_42px_rgba(255,195,0,0.24)] overflow-hidden">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFC107]">
            What is it
          </div>
          {parsed.headline && (
            <h1 className="mt-5 text-xl md:text-3xl font-black tracking-tight text-white break-words leading-tight">
              {parsed.headline}
            </h1>
          )}
          <div className="mt-5 h-[3px] w-20 rounded-full bg-[#FFC107]" />
          {parsed.description.length > 0 && (
            <div className="mt-4 space-y-3 text-sm md:text-lg leading-relaxed text-white/85">
              {parsed.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {parsed.reasons.length > 0 && (
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#181818] p-6 text-white/80 shadow-[0_0_18px_rgba(255,195,0,0.06)]">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
            Why This Split Exists
          </div>
          <ul className="mt-4 space-y-2 text-sm md:text-base text-white/70">
            {parsed.reasons.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FFC107]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {parsed.terminalPrompt && (
        <div className="mt-8 rounded-2xl border-2 border-[#FFD166]/60 bg-[#0F0F0F] p-5 text-base text-white/70">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FFD166]/90">
            Terminal Prompt
          </div>
          <div className="space-y-2 font-mono text-[#FFD166]">
            <div>{parsed.terminalPrompt}</div>
          </div>
          {parsed.whyThisWorks && (
            <div className="mt-4 text-sm text-white/70">
              <span className="text-[#FFD166]/90 font-semibold">Why this works:</span> {parsed.whyThisWorks}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
