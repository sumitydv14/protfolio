'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Mail,GitBranchPlus, Link } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-title mb-6">Let's Work Together</h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-glass p-8 mb-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 rounded-lg bg-bg-primary border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 rounded-lg bg-bg-primary border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-white/10 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors resize-none"
              ></textarea>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          <div className="flex items-center justify-center gap-8">
            {[
              { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
              { icon: Link, label: 'LinkedIn', href: 'https://linkedin.com' },
              { icon: GitBranchPlus, label: 'GitHub', href: 'https://github.com' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-4 rounded-lg bg-bg-secondary border border-white/10 text-accent-primary hover:border-accent-primary transition-all duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
