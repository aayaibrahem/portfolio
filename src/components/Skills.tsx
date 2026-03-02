import { motion } from 'motion/react';
import { Code2, PenTool, Cpu, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const skillGroups = [
  {
    title: "Front-end & Frameworks",
    icon: <Code2 className="text-emerald-500" />,
    skills: portfolioData.skills.frontend
  },
  {
    title: "Libraries & Tools",
    icon: <Cpu className="text-teal-500" />,
    skills: portfolioData.skills.tools
  },
  {
    title: "Design & Creativity",
    icon: <PenTool className="text-emerald-500" />,
    skills: portfolioData.skills.design
  },
  {
    title: "Soft Skills",
    icon: <Heart className="text-teal-500" />,
    skills: portfolioData.skills.soft
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-emerald-500 font-semibold uppercase tracking-wider mb-4"
          >
            <Cpu size={20} />
            <span>My Expertise</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white text-center">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-sm border border-zinc-100 dark:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
