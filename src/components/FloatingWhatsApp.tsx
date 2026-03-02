import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`https://wa.me/${portfolioData.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-colors flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-medium">
        Chat with me
      </span>
    </motion.a>
  );
}
