import React from 'react';
import { motion } from 'motion/react';
import { BOOKS } from '../constants';
import { BookOpen, Star, ShoppingCart, Search, Filter, ArrowRight } from 'lucide-react';

const BooksPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Rootsprout <span className="text-gradient-gold">Originals</span></h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Exclusive publications from the Rootsprout community, designed to elevate your engineering and leadership skills.
          </p>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search books..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <button className="glass px-6 py-4 rounded-xl flex items-center gap-2 font-bold hover:bg-white/10 transition-all">
            <Filter className="w-5 h-5" /> Categories
          </button>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BOOKS.map((book) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[2/3] mb-6 rounded-2xl overflow-hidden glass border-white/5 group-hover:border-gold/30 transition-all">
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="flex items-center gap-1 bg-black-deep/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-gold">
                    <Star className="w-3 h-3 fill-gold" /> {book.rating}
                  </div>
                  <div className="text-white font-bold">{book.price}</div>
                </div>
              </div>
              
              <div className="flex gap-2 mb-3">
                {book.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gold/10 text-gold text-[10px] font-bold rounded uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-1 group-hover:text-gold transition-colors">{book.title}</h3>
              {book.subtitle && <p className="text-sm text-white/60 mb-2">{book.subtitle}</p>}
              <p className="text-sm text-white/40 mb-2">By {book.author}</p>
              <p className="text-sm text-white/60 mb-6 line-clamp-3 leading-relaxed">
                {book.description}
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs text-white/60 mb-6">
                {book.formats.map((format) => (
                  <div key={format.label} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                    <span className="text-white/70">{format.label}</span>
                    <span className="text-white font-semibold">{format.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={book.buyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-grow bg-gold text-black-deep py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 glow-gold hover:glow-gold-strong transition-all"
                >
                  <ShoppingCart className="w-4 h-4" /> Get Copy
                </a>
                <button className="p-3 glass rounded-xl hover:bg-white/10 transition-all">
                  <BookOpen className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-24 glass rounded-[40px] p-12 border-gold/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[100px] -z-10" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Write for <span className="text-gold">Rootsprout Originals</span></h2>
              <p className="text-lg text-white/60 mb-8">
                Have a unique perspective on engineering or community building? We're always looking for new authors to join our Originals series.
              </p>
              <button className="bg-white text-black-deep px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gold transition-all">
                Submit Proposal <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-video glass rounded-2xl border-white/10 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-gold/20" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BooksPage;
