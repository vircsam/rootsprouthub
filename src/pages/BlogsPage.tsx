import React from 'react';
import { motion } from 'motion/react';
import { BLOGS } from '../constants';
import { ArrowRight, Search, Filter } from 'lucide-react';

const BlogsPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Rootsprout <span className="text-gradient-gold">Insights</span></h1>
          <p className="text-xl text-white/60 max-w-2xl">
            Deep dives into open source, engineering culture, and the future of technology.
          </p>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>
          <button className="glass px-6 py-4 rounded-xl flex items-center gap-2 font-bold hover:bg-white/10 transition-all">
            <Filter className="w-5 h-5" /> Filter by Topic
          </button>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden border-white/5 hover:border-gold/30 transition-all"
            >
              <a href={blog.link} target="_blank" rel="noreferrer" className="block">
                <div className="aspect-video overflow-hidden relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {blog.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-black-deep/60 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{blog.readTime} read</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                <a href={blog.link} target="_blank" rel="noreferrer">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">{blog.title}</h3>
                </a>
                <p className="text-sm text-white/50 mb-6 line-clamp-2">
                  {blog.excerpt}
                </p>
                <a href={blog.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
