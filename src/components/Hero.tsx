import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowDown, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6"
          >
            Available for new opportunities
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">Aya Ibrahem</span>
          </h1>
          
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed">
            Front-End Developer & Creative Designer<br />
            I create responsive websites, stunning UI/UX designs, CVs, PPTs, and AI-powered digital content
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
              <Phone size={18} />
              <span>{portfolioData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
              <Mail size={18} />
              <span>{portfolioData.email}</span>
            </div>
          </div>

          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -5 }}
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-primary-500 hover:text-white transition-all"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-primary-500 hover:text-white transition-all"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href={`https://wa.me/${portfolioData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-500 hover:text-white transition-all"
            >
              <MessageCircle size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href={`mailto:${portfolioData.email}`}
              className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-primary-500 hover:text-white transition-all"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-zinc-800 relative z-10">
            <img 
              src="https://picsum.photos/seed/aya/800/800" 
              alt="Aya Ibrahem Kamel" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-2xl -z-0 rotate-12" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-indigo-500 rounded-full -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
