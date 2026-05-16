import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/index';

export default function Projects() {
  const { ref, inView } = useInView();

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
            Featured{' '}
            <span className="italic text-gradient-accent">projects</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                className="card group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {/* Project Image */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl font-bold text-snow mb-2">{project.title}</h3>
                <p className="text-sm text-mist leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-white/5 text-snow/70 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-0.5 text-snow/50">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-xs text-snow/80 hover:text-snow transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={13} /> Source
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-xs text-accent hover:text-glow transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}