import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks';
import { projects, allTags } from '../data';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useInView();
  const [activeTag, setActiveTag] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute left-1/2 top-0 w-96 h-96 bg-accent/4 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">03 — Projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold max-w-sm leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Selected{' '}
            <span className="italic text-gradient-accent">works</span>
          </motion.h2>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeTag === tag
                    ? 'bg-accent text-white shadow-glow-sm'
                    : 'glass text-mist hover:text-silver hover:border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Featured projects — large cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Big featured cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {filtered.filter(p => p.featured).map((project, i) => (
                <motion.article
                  key={project.id}
                  className="relative group glass rounded-3xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded-full">{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-display text-xl font-bold text-snow mb-2">{project.title}</h3>
                    <p className="text-sm text-mist leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                    {/* Stats */}
                    <div className="flex gap-4 mb-4">
                      {Object.entries(project.stats).map(([key, val]) => (
                        <div key={key}>
                          <p className="text-xs font-mono text-accent font-medium">{val}</p>
                          <p className="text-xs text-mist/60 capitalize">{key}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="text-xs px-2 py-0.5 bg-white/5 text-mist rounded font-mono">{t}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs px-2 py-0.5 bg-white/5 text-mist/60 rounded font-mono">+{project.tech.length - 4}</span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-xs text-mist hover:text-snow transition-colors"
                        target="_blank" rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                      >
                        <Github size={13} /> Source
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-1.5 text-xs text-accent hover:text-glow transition-colors"
                        target="_blank" rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink size={13} /> Live demo
                      </a>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border border-accent/0 group-hover:border-accent/20 transition-all duration-500 pointer-events-none"
                  />
                  <div className="absolute inset-0 rounded-3xl shadow-glow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.article>
              ))}
            </div>

            {/* Smaller project cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filtered.filter(p => !p.featured).map((project, i) => (
                <motion.article
                  key={project.id}
                  className="card group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0,1).map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-accent/10 text-accent/80 rounded-full">{tag}</span>
                    ))}
                  </div>

                  <h3 className="font-display text-base font-semibold text-snow mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-mist leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs px-1.5 py-0.5 bg-white/5 text-mist/70 rounded font-mono">{t}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <a href={project.github} className="text-mist hover:text-snow transition-colors" target="_blank" rel="noopener noreferrer">
                        <Github size={13} />
                      </a>
                      <a href={project.live} className="text-mist hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={13} />
                      </a>
                    </div>
                    <ArrowUpRight size={14} className="text-mist/30 group-hover:text-accent/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}