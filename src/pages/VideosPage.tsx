import React from 'react';
import { motion } from 'motion/react';
import { VIDEOS } from '../constants';
import { Play, Clock } from 'lucide-react';

const VideosPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Rootsprout <span className="text-gradient-gold">Videos</span></h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Short, focused sessions on building real systems from scratch and understanding production internals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video) => (
            <motion.a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden border-white/5 hover:border-gold/30 transition-all"
            >
              <div className="aspect-video relative bg-black-soft/80 flex items-center justify-center overflow-hidden">
                {video.image && (
                  <img
                    src={video.image}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 text-gold" />
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-black-deep/70 text-xs text-white/70 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {video.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-gold font-bold uppercase tracking-widest mb-2">{video.date}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">{video.title}</h3>
                <p className="text-sm text-white/50 line-clamp-2">{video.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.youtube.com/@meerthika"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 text-sm font-bold hover:bg-gold hover:text-black-deep hover:border-gold transition-all"
          >
            View YouTube Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
