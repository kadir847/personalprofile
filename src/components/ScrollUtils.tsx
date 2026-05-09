import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #7c6af7, #a78bfa)',
      }}
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.button
      className="fixed bottom-8 right-8 w-11 h-11 glass-strong rounded-xl flex items-center justify-center text-silver hover:text-snow hover:border-white/20 z-50 transition-colors duration-300 group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.3 }}
      aria-label="Back to top"
    >
      <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
    </motion.button>
  );
}