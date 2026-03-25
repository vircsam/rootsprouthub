import React from 'react';
import { motion } from 'motion/react';
import { PARTNERS } from '../constants';
import { Shield, Zap, Globe, Users } from 'lucide-react';

const PartnersPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Our <span className="text-gradient-gold">Community Partnerships</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We collaborate with communities, clubs, and student organizations to grow open-source together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PARTNERS.map((partner) => (
            <motion.div 
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[32px] border-white/5 hover:border-gold/30 transition-all text-center group"
            >
              <div className="h-28 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={partner.logo} alt={partner.name} className="h-28 max-w-[220px] object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{partner.name}</h3>
              <p className="text-white/40 mb-8 text-sm leading-relaxed">
                Strategic partner providing infrastructure and support for Rootsprout's core open-source initiatives.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="glass rounded-[40px] p-12 border-gold/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
              Help us grow the open-source ecosystem and connect with thousands of developers worldwide.
            </p>
            <a
              href="https://www.linkedin.com/company/root-sprout"
              target="_blank"
              rel="noreferrer"
              className="bg-gold text-black-deep px-10 py-5 rounded-full font-bold text-lg glow-gold hover:glow-gold-strong transition-all inline-block"
            >
              Contact Partnership Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
