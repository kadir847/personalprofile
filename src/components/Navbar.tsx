import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { useActiveSection, useTheme } from '../hooks/index';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'about', 'skills', 'projects', 'experience', 'contact']);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'glass rounded-2xl py-3 mx-4 lg:mx-12 shadow-card' : ''
        }`}>
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
              <span className="text-accent font-display font-bold text-sm">A</span>
            </div>
            <span className="font-display font-semibold text-snow text-lg hidden sm:block">
              Abdikadir Mohamed
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-snow'
                    : 'text-mist hover:text-silver'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 glass rounded-lg"
                    layoutId="nav-active"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-silver hover:text-snow transition-all duration-300 hover:border-white/20"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a
              href="#"
              className="hidden sm:flex items-center gap-2 btn-ghost text-sm"
              download
            >
              <Download size={13} />
              Resume
            </a>
            <button
              className="md:hidden w-9 h-9 glass rounded-lg flex items-center justify-center text-silver hover:text-snow transition-all duration-300"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute top-20 left-4 right-4 glass-strong rounded-2xl p-6 space-y-2"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-accent/10 text-snow border border-accent/20'
                      : 'text-silver hover:text-snow hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-2 border-t border-white/[0.06]">
                <a href="#" className="flex items-center gap-2 px-4 py-3 text-sm text-silver hover:text-snow" download>
                  <Download size={13} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}