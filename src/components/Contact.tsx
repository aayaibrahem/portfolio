import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Download, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${portfolioData.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary-500 font-semibold uppercase tracking-wider mb-4"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white text-center">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Email</p>
                  <a href={`mailto:${portfolioData.email}`} className="text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-primary-500 transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">WhatsApp</p>
                  <a href={`https://wa.me/${portfolioData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-zinc-800 dark:text-zinc-200 hover:text-emerald-500 transition-colors">
                    {portfolioData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium text-zinc-800 dark:text-zinc-200">
                    {portfolioData.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/portfolio/cv/aya_cv_placeholder.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-lg hover:shadow-primary-500/20 transition-all"
              >
                <Download size={20} />
                Download My CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-800 shadow-xl border border-zinc-100 dark:border-zinc-700"
          >
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all dark:text-white resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-2xl bg-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
