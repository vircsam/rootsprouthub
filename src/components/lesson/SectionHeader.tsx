import { motion } from 'motion/react';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-black tracking-tight text-white">{title}</h2>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: '80px', opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-[2px] rounded-full bg-[#FFD166]"
      />
      {subtitle && <p className="text-sm text-white/55">{subtitle}</p>}
    </div>
  );
}
