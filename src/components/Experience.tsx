import { motion } from 'framer-motion';
import { useInView } from '../hooks/index';
import { BookOpen, Circle } from 'lucide-react';

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
              My robotics{' '}
              <span className="italic text-gradient-accent block">story</span>
            </h2>
            <p className="text-mist mt-4 leading-relaxed text-sm sticky top-56">
              6 months of practical robotics experience through design, prototyping, and competition.
            </p>
          </motion.div>

          <div className="relative">
            <div className="glass rounded-2xl p-6 hover:border-white/10 transition-all duration-500 group">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
                    <BookOpen size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-snow group-hover:text-gradient-accent transition-all duration-300">
                      Robotics Student
                    </h3>
                    <p className="text-xs font-mono text-mist glass px-3 py-1.5 rounded-lg">2025 — Present</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-mist leading-relaxed mb-5">
                I design robots and autonomous systems with a focus on embedded control, sensor fusion, and mechanical prototyping.
              </p>
              <p className="text-sm text-mist leading-relaxed mb-5">
                I study at Still I Rise International School, which is amazing and located along Huruma Road in Mathare, Nairobi. It is the first school in the world to offer the IB curriculum for free to refugees. We get Armani uniforms, two meals daily, health insurance through NHIF, and transport. About half of our students are refugees from DRC, Somalia, and South Sudan.
              </p>
              <p className="text-sm text-mist leading-relaxed mb-5">
                Supported by patrons Sam Tall and Sam Short, I develop robotics demos that combine hardware, firmware, and AI-driven behavior.
              </p>

              <p className="text-sm text-mist leading-relaxed mb-5">
                For me, this school is more than just a place to study—it’s a place that changed what I believe is possible.
              </p>
              <p className="text-sm text-mist leading-relaxed mb-5">
                We’re located along Huruma Road in Mathare, and what makes us really special is that we’re the first school in the world to offer the International Baccalaureate (IB) curriculum for free to refugees. I’m one of the students here, and I get to learn alongside others aged 10 to 18, coming from so many different backgrounds.
              </p>
              <p className="text-sm text-mist leading-relaxed mb-5">
                About half of us are refugees—from places like the Democratic Republic of Congo, Somalia, and South Sudan—and the rest are Kenyan students from families like mine who just needed a chance. Being here, you don’t feel those differences in a negative way. Instead, you learn from each other, share stories, and grow together.
              </p>
              <p className="text-sm text-mist leading-relaxed mb-5">
                The school supports us in ways I didn’t think were possible. We’re given uniforms designed by Armani, we get two meals every day, health insurance through NHIF, and even transport to and from school. It means we can focus on learning without worrying about things that might have held us back before.
              </p>
              <p className="text-sm text-mist leading-relaxed mb-5">
                To me, this isn’t just a school—it’s a community. It’s where I’ve found my voice, my confidence, and my dreams for the future.
              </p>
              <p className="text-sm text-mist leading-relaxed mb-5">
                As a robotics student, I take what I learn in class and turn it into machines that move, sense, and think. My story is about building a future where technology helps my community grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}