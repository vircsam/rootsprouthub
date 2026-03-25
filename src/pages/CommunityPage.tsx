import React from 'react';
import { motion } from 'motion/react';
import { Github, Globe, Users, Trophy, Zap, Shield, Star, Youtube, Instagram, Linkedin } from 'lucide-react';

const CommunityPage = () => {
  const stats = [
    { label: 'Members In Community', value: '500+', icon: Users },
    { label: 'GitHub Stars', value: '100+', icon: Star },
    { label: 'Collaborations', value: '10+', icon: Globe },
    { label: 'YouTube Subs', value: '900+', icon: Youtube },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              A Community <br />
              <span className="text-gradient-gold">Without Borders.</span>
            </h1>
            <p className="text-xl text-white/60 mb-6 leading-relaxed">
              At RootSprout, we believe the best way to truly learn is to start from the roots — break things down to their fundamentals, and then grow them back up into fully working systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/RootSprout"
                target="_blank"
                rel="noreferrer"
                className="bg-gold text-black-deep px-8 py-4 rounded-full font-bold flex items-center gap-2 glow-gold"
              >
                Contribute on GitHub <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/root-sprout"
                target="_blank"
                rel="noreferrer"
                className="glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Connect on LinkedIn <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
              <a href="https://github.com/RootSprout" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github className="w-4 h-4 text-gold" /> github.com/RootSprout
              </a>
              <a href="https://www.linkedin.com/company/root-sprout" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4 text-gold" /> LinkedIn
              </a>
              <a href="https://www.youtube.com/@meerthika" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Youtube className="w-4 h-4 text-gold" /> youtube.com/@meerthika
              </a>
              <a href="https://www.instagram.com/rootsprouthub/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Instagram className="w-4 h-4 text-gold" /> instagram.com/rootsprouthub
              </a>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 text-center"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-gold w-6 h-6" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-white/40 font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Why Join <span className="text-gold">Rootsprout?</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-10 rounded-[32px] border-white/5">
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-gold w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Learn From First Principles</h3>
              <p className="text-white/50 leading-relaxed">
                Break systems down to their fundamentals and rebuild them to truly understand how production software works.
              </p>
            </div>
            <div className="glass p-10 rounded-[32px] border-white/5">
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-gold w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Build Real Systems</h3>
              <p className="text-white/50 leading-relaxed">
                Work on low-level projects that teach you the internals of compilers, databases, networks, and OS concepts.
              </p>
            </div>
            <div className="glass p-10 rounded-[32px] border-white/5">
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="text-gold w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Grow With the Community</h3>
              <p className="text-white/50 leading-relaxed">
                Collaborate, share, and contribute to open-source projects that grow organically and sustainably.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="glass p-12 rounded-[40px] border-gold/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to start growing?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
              Join 500+ members building the future of open source.
            </p>
            <button className="bg-gold text-black-deep px-10 py-5 rounded-full font-bold text-lg glow-gold hover:glow-gold-strong transition-all">
              Create Your Account
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CommunityPage;
