import { motion } from 'motion/react';
import { User, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-emerald-500 font-semibold uppercase tracking-wider mb-4"
          >
            <User size={20} />
            <span>About Me</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white text-center">
            Crafting Digital Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {portfolioData.about}
            </p>
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="text-emerald-500" />
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">{portfolioData.education.degree}</p>
                <p className="text-zinc-600 dark:text-zinc-400">{portfolioData.education.university}</p>
                <div className="flex gap-4 mt-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    {portfolioData.education.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold">
                    {portfolioData.education.grade}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-4 italic">
                  {portfolioData.education.note}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/creative1/400/500" alt="Creative work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/creative2/400/400" alt="Creative work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/creative3/400/400" alt="Creative work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="https://picsum.photos/seed/creative4/400/500" alt="Creative work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
