import { motion } from 'framer-motion';
import { useInView } from '../hooks/index';
import { skills, techCategories } from '../data/index';

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">02 — Skills</span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Core Skills */}
          <div>
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Core{' '}
              <span className="italic text-gradient-accent">competencies</span>
            </motion.h2>

            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-silver">{skill.name}</span>
                      <span className="text-xs font-mono text-mist/60 px-2 py-0.5 glass rounded-full">{skill.category}</span>
                    </div>
                    <span className="text-xs font-mono text-accent font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/[0.08]">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent via-glow to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech & Interest Categories */}
          <div>
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Skills &{' '}
              <span className="italic text-gradient-accent">interests</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-5">
              {techCategories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  className="glass rounded-2xl p-6 hover:border-accent/20 hover:shadow-lg transition-all duration-500 group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="text-sm font-semibold text-snow">{cat.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-white/5 hover:bg-accent/10 text-mist hover:text-silver rounded-lg 
                                   transition-all duration-300 font-mono border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning Focus */}
          <motion.div
            className="glass rounded-2xl p-6 border-l-2 border-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <p className="text-sm font-semibold text-snow mb-2">Current Focus</p>
                <p className="text-sm text-mist leading-relaxed">
                  Building responsive, accessible websites with modern HTML5 and CSS3. Exploring JavaScript fundamentals and best practices in web development. Always eager to learn and grow as a developer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}