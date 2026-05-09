import { motion } from 'framer-motion';
import { useInView } from '../hooks/index';
import { skills, techCategories } from '../data/index';

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">02 — Skills</span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Proficiency bars */}
          <div>
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Core{' '}
              <span className="italic text-gradient-accent">proficiencies</span>
            </motion.h2>

            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-silver">{skill.name}</span>
                      <span className="text-xs font-mono text-mist/60 px-2 py-0.5 glass rounded-full">{skill.category}</span>
                    </div>
                    <span className="text-xs font-mono text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-glow rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech category cards */}
          <div>
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Tech{' '}
              <span className="italic text-gradient-accent">ecosystem</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-4">
              {techCategories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  className="glass rounded-2xl p-5 hover:border-white/10 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg text-accent">{cat.icon}</span>
                    <span className="text-sm font-semibold text-silver">{cat.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-white/5 text-mist rounded-lg 
                                   group-hover:text-silver transition-colors duration-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom callout */}
            <motion.div
              className="mt-6 glass rounded-2xl p-5 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <p className="text-sm font-medium text-silver mb-1">Always learning</p>
                <p className="text-xs text-mist leading-relaxed">
                  Currently exploring WebAssembly, edge computing, and AI-native application architectures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}