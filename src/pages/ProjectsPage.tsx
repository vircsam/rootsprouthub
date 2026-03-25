import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Github, Code2, Star, Users, Search, Filter, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const formatStars = (stars?: number) => {
    if (stars === undefined) return '—';
    if (stars < 1000) return `${stars}`;
    return `${(stars / 1000).toFixed(1)}k`;
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Open Source <span className="text-gradient-gold">Projects</span></h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Explore and contribute to the most innovative projects in the Rootsprout ecosystem.
          </p>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <div className="flex gap-4">
            <button className="glass px-6 py-4 rounded-xl flex items-center gap-2 font-bold hover:bg-white/10 transition-all">
              <Filter className="w-5 h-5" /> Language
            </button>
            <button className="glass px-6 py-4 rounded-xl flex items-center gap-2 font-bold hover:bg-white/10 transition-all">
              Difficulty
            </button>
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-gold/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Github className="w-24 h-24" /></div>

              {project.image && (
                <div className="aspect-[4/3] mb-6 rounded-2xl overflow-hidden border border-white/10">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-gold/10 transition-colors"><Code2 className="text-gold w-8 h-8" /></div>
                <div className="flex gap-2">
                  {project.trending && <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold rounded-full border border-gold/20">TRENDING</span>}
                  <span className="px-3 py-1 bg-white/5 text-white/60 text-[10px] font-bold rounded-full border border-white/10 uppercase tracking-wider">{project.difficulty}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className="text-white/50 mb-8 leading-relaxed">{project.description}</p>

              <div className="flex items-center gap-6 text-sm text-white/40 mb-8">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gold" />{project.language}</div>
                <div className="flex items-center gap-2"><Star className="w-4 h-4" />{formatStars(project.stars)}</div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4" />{project.contributors ?? '—'}</div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-grow py-4 rounded-2xl bg-gold text-black-deep font-bold text-sm glow-gold hover:glow-gold-strong transition-all text-center"
                >
                  Contribute Now
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl glass hover:bg-white/10 transition-all"
                  aria-label={`Open ${project.name} on GitHub`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
