import { motion } from 'framer-motion';
import { useInView } from '../hooks/index';
import { personalInfo } from '../data/index';
import { MapPin, Mail, Code2, Zap, Lightbulb, BookOpen } from 'lucide-react';

const stats = [
  { label: 'Months Experience', value: '6', icon: Code2 },
  { label: 'Projects Built', value: '8+', icon: Lightbulb },
  { label: 'Languages Learned', value: '3', icon: BookOpen },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">01 — About</span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <div>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Aspiring developer,{' '}
              <span className="italic text-gradient-accent">forever learning</span>.
            </motion.h2>

            <motion.div
              className="space-y-5 text-mist leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-lg">{personalInfo.bio}</p>
              <p>
                I'm passionate about creating clean, responsive websites and continuously improving my skills. Every project is an opportunity to learn something new and build better solutions.
              </p>
              <p>
                Outside of code, I'm a gaming enthusiast who loves playing Bloodstrike and other strategy games. When I'm not coding or gaming, you'll find me exploring new web technologies and working on personal projects that challenge me to grow as a developer.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="flex items-center gap-2 text-sm text-silver">
                <MapPin size={13} className="text-accent" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2 text-sm text-silver">
                <Mail size={13} className="text-accent" />
                {personalInfo.email}
              </span>
            </motion.div>
          </div>

          {/* Right — Image & Stats */}
          <div className="space-y-6">
            {/* Profile Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass rounded-3xl overflow-hidden aspect-[4/3] relative group">
                <img src="public/abdi.png"
                  alt="Abdi's profile picture"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4">
                    <p className="font-display text-lg font-semibold text-snow">{personalInfo.name}</p>
                    <p className="text-sm text-mist">{personalInfo.title}</p>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-accent/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border border-white/5 rounded-xl -z-10" />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="card group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                >
                  <stat.icon size={16} className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-display text-2xl font-bold text-snow">{stat.value}</p>
                  <p className="text-xs text-mist mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}