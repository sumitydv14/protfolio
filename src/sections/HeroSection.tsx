'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';
import { Button } from '@/components/Button';

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-primary rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent-secondary rounded-full blur-3xl opacity-10"></div>
            </motion.div>

            <div className="container-custom py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary border border-accent-primary/30 mb-6"
                        >
                            <Code2 size={16} className="text-cyan-glow" />
                            <span className="text-sm font-mono text-cyan-glow">
                                Frontend Developer
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="section-title mb-6 leading-tight"
                        >
                            Sumit
                            <span className="gradient-text"> Yadav</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed"
                        >
                            I&apos;m a Frontend Developer with 5+ years of experience building responsive, user-friendly, and scalable web applications. Skilled in modern frameworks like React.js, Next.js, Vue.js, and Angular, along with strong expertise in JavaScript, TypeScript, HTML, CSS, and Sass.

                            I specialize in translating UI/UX designs into pixel-perfect, accessible interfaces, implementing component-based architectures, and integrating APIs.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <Button onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                                View My Work <ArrowRight size={18} />
                            </Button>
                            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                                Get In Touch
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-8 mt-12 pt-8 border-t border-white/10"
                        >
                            {[
                                { label: 'Projects', value: '15+' },
                                { label: 'Years Experience', value: '5+' },
                                { label: 'Happy Clients', value: '30+' },
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl font-display font-bold gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-text-secondary">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Terminal Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:block"
                    >
                        <div className="card-glass border border-cyan-glow/30 overflow-hidden">
                            <div className="bg-bg-secondary/50 px-6 py-4 border-b border-white/10 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-accent-primary"></div>
                                <div className="w-3 h-3 rounded-full bg-accent-secondary"></div>
                                <div className="w-3 h-3 rounded-full bg-cyan-glow"></div>
                                <span className="ml-4 text-sm text-text-secondary font-mono">
                                    portfolio.ts
                                </span>
                            </div>
                            <div className="p-6 font-mono text-sm text-cyan-glow space-y-2">
                                <div>
                                    <span className="text-accent-secondary">const</span> skills ={' '}
                                    <span className="text-accent-primary">[</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-accent-primary">&apos;React&apos;</span>,{' '}
                                    <span className="text-accent-primary">&apos;Next.js&apos;</span>,
                                </div>
                                <div className="ml-4">
                                    <span className="text-accent-primary">&apos;TypeScript&apos;</span>,{' '}
                                    <span className="text-accent-primary">&apos;JavaScript&apos;</span>,
                                </div>
                                <div className="ml-4">
                                    <span className="text-accent-primary">&apos;HTML&apos;</span>,{' '}
                                    <span className="text-accent-primary">&apos;CSS&apos;</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-accent-primary">&apos;State managment&apos;</span>,{' '}
                                    <span className="text-accent-primary">&apos;Component-driven architecture&apos;</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-accent-primary">&apos;SSR&apos;</span>,{' '}
                                    <span className="text-accent-primary">&apos;Client-Side rendering&apos;</span>
                                </div>
                                <div className="ml-4">
                                    <span className="text-accent-primary">&apos;Application Optimization&apos;</span>,{' '}
                                </div>
                                <div>
                                    <span className="text-accent-primary">]</span>;
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
