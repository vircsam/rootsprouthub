import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import rootsproutLogo from '../assets/rootsprout-logo.svg';

const Footer = () => {
  return (
    <footer className="py-20 bg-black-deep border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-black-deep border border-gold/40 flex items-center justify-center glow-gold">
                <img src={rootsproutLogo} alt="Rootsprout logo" className="w-7 h-7 object-contain" />
              </div>
              <span className="text-lg font-bold tracking-tight">Rootsprout</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              Growing open source together. Join the world's most innovative community of developers and creators.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/RootSprout" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-gold transition-colors" aria-label="Rootsprout on GitHub"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/root-sprout" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-gold transition-colors" aria-label="Rootsprout on LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.youtube.com/@meerthika" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-gold transition-colors" aria-label="Rootsprout on YouTube"><Youtube className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/rootsprouthub/" target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-gold transition-colors" aria-label="Rootsprout on Instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link to="/projects" className="hover:text-gold transition-colors">Projects</Link></li>
              <li><Link to="/blogs" className="hover:text-gold transition-colors">Blogs</Link></li>
              <li><Link to="/books" className="hover:text-gold transition-colors">Books</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="https://github.com/RootSprout" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">GitHub</a></li>
              <li><Link to="/partners" className="hover:text-gold transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <div>© 2026 Rootsprout. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
