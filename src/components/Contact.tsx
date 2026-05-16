import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/index';
import { Send, Mail, Github, ArrowUpRight } from 'lucide-react';

const socials = [
  { icon: Mail, label: 'Email', value: 'abdikadir.mo@SIRSchool.org', href: 'mailto:abdikadir.mo@SIRSchool.org' },
  { icon: Github, label: 'GitHub', value: 'kadir847', href: 'https://github.com/kadir847' },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-accent tracking-[0.2em] uppercase">05 — Contact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let's build something{' '}
              <span className="italic text-gradient-accent">remarkable</span>
            </h2>
            <p className="text-mist leading-relaxed mb-10 max-w-md">
              Whether you're looking for a junior engineer, a technical co-founder, or want to 
              collaborate on open source — I'd love to hear from you.
            </p>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group glass rounded-xl px-4 py-3 hover:border-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                    <s.icon size={13} className="text-mist group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-mist/60 mb-0.5">{s.label}</p>
                    <p className="text-sm text-silver group-hover:text-snow transition-colors duration-300 truncate">{s.value}</p>
                  </div>
                  <ArrowUpRight size={13} className="text-mist/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
              {/* Shimmer */}
              <div className="absolute inset-0 shimmer-bg pointer-events-none" />

              {sent ? (
                <motion.div
                  className="py-16 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 bg-accent/10 border border-accent/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-snow mb-3">Message sent!</h3>
                  <p className="text-mist text-sm">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                    className="mt-6 text-xs text-accent hover:text-glow transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-mist/70 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-silver placeholder-mist/40
                                   focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-mist/70 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="you@example.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-silver placeholder-mist/40
                                   focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-mist/70 font-medium mb-2">Message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={6}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-silver placeholder-mist/40 resize-none
                                 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full btn-primary flex items-center justify-center gap-2.5 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}