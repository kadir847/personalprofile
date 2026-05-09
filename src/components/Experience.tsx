import { motion } from 'framer-motion';
import { useInView } from '../hooks/index';
import { experience } from '../data/index';
import { Briefcase, Circle } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">04 — Experience</span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight sticky top-32">
              Where I've{' '}
              <span className="italic text-gradient-accent block">worked</span>
            </h2>
            <p className="text-mist mt-4 leading-relaxed text-sm sticky top-56">
              6+ years across product companies, building at every layer of the stack.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-[22px] top-2 bottom-8 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"
              initial={{ scaleY: 0, transformOrigin: 'top' }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="space-y-10">
              {experience.map((job, i) => (
                <motion.div
                  key={job.company}
                  className="relative pl-14"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1 w-11 h-11 rounded-full flex items-center justify-center ${
                    i === 0 ? 'bg-accent/20 border border-accent/40' : 'glass border border-white/10'
                  }`}>
                    <Briefcase size={14} className={i === 0 ? 'text-accent' : 'text-mist'} />
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl p-6 hover:border-white/10 transition-all duration-500 group">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-snow group-hover:text-gradient-accent transition-all duration-300">
                          {job.role}
                        </h3>
                        <p className="text-accent font-medium mt-0.5">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-mist glass px-3 py-1.5 rounded-lg">{job.period}</span>
                        {job.type === 'freelance' && (
                          <span className="block text-xs text-mist/50 mt-1">Freelance</span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-mist leading-relaxed mb-4">{job.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-5">
                      {job.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-mist/80">
                          <Circle size={4} className="text-accent mt-1.5 flex-shrink-0 fill-current" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                      {job.tech.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 bg-white/5 text-mist/70 rounded-lg font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}