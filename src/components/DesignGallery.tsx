import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, FileText, Presentation, Video, X, Download, Play } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categories = [
  { id: 'designs', name: 'Canva Designs', icon: <ImageIcon size={18} /> },
  { id: 'cvs', name: 'CVs', icon: <FileText size={18} /> },
  { id: 'ppts', name: 'PPTs', icon: <Presentation size={18} /> },
  { id: 'videos', name: 'AI Videos', icon: <Video size={18} /> },
];

export default function DesignGallery() {
  const [activeTab, setActiveTab] = useState('designs');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const items = (portfolioData.gallery as any)[activeTab] || [];

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-emerald-500 font-semibold uppercase tracking-wider mb-4"
          >
            <ImageIcon size={20} />
            <span>Creative Gallery</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white text-center mb-12">
            Design & Multimedia Work
          </h2>

          <div className="flex flex-wrap justify-center gap-4 p-2 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-medium ${
                  activeTab === cat.id
                    ? 'bg-white dark:bg-zinc-700 text-emerald-500 shadow-md'
                    : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item: any) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-zinc-100 dark:border-zinc-700"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  {activeTab === 'videos' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Play size={48} className="text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ) : activeTab === 'ppts' || activeTab === 'cvs' ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                      {activeTab === 'ppts' ? <Presentation size={64} className="text-emerald-500 mb-4" /> : <FileText size={64} className="text-emerald-500 mb-4" />}
                      <h4 className="font-bold text-zinc-800 dark:text-zinc-200">{item.title}</h4>
                      <p className="text-sm text-zinc-500 mt-2">Click to preview/download</p>
                    </div>
                  ) : (
                    <img 
                      src={item.url} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-colors" />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.title}</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400">{item.type}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white z-10 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-2 bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center min-h-[400px]">
                    {activeTab === 'videos' ? (
                      <video controls className="w-full h-full max-h-[70vh]">
                        <source src={selectedItem.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : activeTab === 'designs' ? (
                      <img src={selectedItem.url} alt={selectedItem.title} className="max-w-full max-h-[70vh] object-contain" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="flex flex-col items-center p-12 text-center">
                        {activeTab === 'ppts' ? <Presentation size={120} className="text-emerald-500 mb-6" /> : <FileText size={120} className="text-emerald-500 mb-6" />}
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{selectedItem.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-8">This is a preview of the {selectedItem.type} file. You can download it using the button below.</p>
                        <a 
                          href={selectedItem.url} 
                          download 
                          className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-colors"
                        >
                          <Download size={20} />
                          Download File
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">{selectedItem.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Category</span>
                        <p className="text-zinc-800 dark:text-zinc-200 font-medium">{activeTab.toUpperCase()}</p>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Platform / Tool</span>
                        <p className="text-zinc-800 dark:text-zinc-200 font-medium">{selectedItem.type}</p>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 pt-4 leading-relaxed">
                        A creative piece showcasing expertise in {selectedItem.type}. This work demonstrates attention to detail and a commitment to high-quality design standards.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
