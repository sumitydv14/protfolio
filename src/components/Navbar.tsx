'use client';

import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-bg-primary/80"
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-display font-bold gradient-text">
          SE
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-accent-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="#contact"
            className="px-6 py-2 bg-accent-primary text-white rounded-lg text-sm font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
