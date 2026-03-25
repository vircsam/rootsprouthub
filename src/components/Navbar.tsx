import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import rootsproutLogo from '../assets/rootsprout-logo.svg';
import { VIDEOS } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blogs', href: '/blogs' },
    { name: 'Videos', href: '/videos' },
    { name: 'Projects', href: '/projects' },
    { name: 'Books', href: '/books' },
    { name: 'Events', href: '/events' },
    { name: 'Partners', href: '/partners' },
    { name: 'Community', href: '/community' },
  ];

  const renderVideoLink = (video: { id: string; title: string; link: string }) => {
    const href = video.link || '/videos';
    const isExternal = href.startsWith('http');
    const className = 'block text-sm text-white/70 hover:text-gold transition-colors';

    if (isExternal) {
      return (
        <a key={video.id} href={href} target="_blank" rel="noreferrer" className={className}>
          {video.title}
        </a>
      );
    }

    return (
      <Link key={video.id} to={href} className={className}>
        {video.title}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 rounded-2xl overflow-hidden bg-black-deep border border-gold/40 glow-gold group-hover:glow-gold-strong transition-all flex items-center justify-center">
            <img src={rootsproutLogo} alt="Rootsprout logo" className="w-9 h-9 object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight">Rootsprout</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.name === 'Videos') {
              return (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`text-[13px] font-medium tracking-tight transition-colors ${location.pathname === link.href ? 'text-gold' : 'text-white/70 hover:text-gold'}`}
                  >
                    {link.name}
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all">
                    <div className="glass border border-white/10 rounded-2xl p-4 w-[380px]">
                      <div className="text-xs text-white/50 uppercase tracking-widest mb-3">Latest videos</div>
                      <div className="flex flex-col gap-2">
                        {VIDEOS.map((video) => renderVideoLink(video))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[13px] font-medium tracking-tight transition-colors ${location.pathname === link.href ? 'text-gold' : 'text-white/70 hover:text-gold'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/community"
            className="bg-gold text-black-deep px-5 py-2 rounded-full text-[13px] font-bold glow-gold hover:glow-gold-strong hover:scale-105 transition-all"
          >
            Join Community
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  <Link 
                    to={link.href} 
                    className={`text-base font-medium ${location.pathname === link.href ? 'text-gold' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.name === 'Videos' && (
                    <div className="flex flex-col gap-2 pl-2 text-sm text-white/70">
                      {VIDEOS.map((video) => (
                        <div key={video.id} onClick={() => setIsMobileMenuOpen(false)}>
                          {renderVideoLink(video)}
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <hr className="border-white/10" />
              <Link
                to="/community"
                className="bg-gold text-black-deep w-full py-3 rounded-xl text-sm font-bold text-center"
              >
                Join Community
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
