'use client';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  Mail
};

export const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'Mail' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Mail' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'Mail' },
    { name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' },
  ];

  return (
    <footer className="border-t border-white/10 bg-bg-secondary/50 backdrop-blur-sm">
      <div className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          <div>
            <h3 className="text-xl font-display font-bold mb-4 gradient-text">
              SE Portfolio
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Building innovative solutions with cutting-edge technology and AI.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-text-primary">
              Get in Touch
            </h4>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-300"
            >
              hello@example.com <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-text-secondary text-sm">
              © 2024 Software Engineer Portfolio. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
