import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/[0.04] px-6 py-12 md:px-12 lg:px-24 xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                <span className="text-accent font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display font-semibold text-snow">Alex Chen</span>
            </div>
            <p className="text-xs text-mist/60 max-w-xs leading-relaxed">
              Senior Software Engineer crafting exceptional digital experiences at the intersection of design and code.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs text-mist hover:text-silver transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-mist/40 font-mono">
            © {new Date().getFullYear()} Alex Chen. Designed & built with care.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-mist/30 font-mono">v2.0.0</span>
            <button
              onClick={scrollTop}
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-mist hover:text-snow hover:border-white/20 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}