import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif italic font-bold tracking-tighter text-zinc-900 dark:text-white">
            Aya <span className="text-primary-500">Ibrahem</span>
          </span>
        </div>
        
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary-500 transition-colors">
            <Github size={20} />
          </a>
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-primary-500 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`https://wa.me/${portfolioData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-500 transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href={`mailto:${portfolioData.email}`} className="text-zinc-400 hover:text-primary-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
