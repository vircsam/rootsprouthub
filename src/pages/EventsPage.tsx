import React from 'react';
import { motion } from 'motion/react';
import { EVENTS } from '../constants';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const EventsPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Community <span className="text-gradient-gold">Events</span></h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Talks, conferences, hackathons, collaborations, and community recaps from Rootsprout.
          </p>
        </div>

        <div className="space-y-8">
          {EVENTS.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[32px] border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-2/5 aspect-video rounded-2xl overflow-hidden relative border border-white/10">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-deep/70 via-black-deep/10 to-transparent" />
                  <div className="absolute top-6 left-6 px-4 py-2 glass rounded-xl font-bold text-gold text-xs uppercase tracking-widest border-gold/20">
                    {event.type}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-6 text-sm text-white/40 mb-6 font-medium">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold" /> {event.date}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> {event.location}</div>
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> {event.time ?? 'Time TBA'}</div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-gold transition-colors">{event.title}</h3>
                  <p className="text-white/50 mb-8 text-lg leading-relaxed max-w-3xl">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
