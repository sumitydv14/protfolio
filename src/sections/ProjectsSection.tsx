'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/Motion';
import { projects, featuredProjects } from '@/data/projects';
import {  ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container-custom">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Featured Projects</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Showcase of my best work across AI, full-stack development, and
              cloud infrastructure
            </p>
          </div>
        </FadeUp>

        {/* Featured Projects Grid */}
        <StaggerContainer delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <StaggerItem key={project.id}>
                <motion.div
                  className="card-glass overflow-hidden group h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-bg-primary">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-6 flex flex-col">
                    <h3 className="text-xl font-display font-bold mb-2 text-text-primary group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-accent-primary/10 text-cyan-glow border border-cyan-glow/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-accent-primary/10 text-cyan-glow border border-cyan-glow/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300 text-sm"
                        >
                          <ExternalLink size={16} />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent-primary/10 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary hover:text-white transition-all duration-300 text-sm"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* All Projects */}
        <div className="mb-16">
          <FadeUp>
            <h3 className="text-2xl font-display font-bold mb-8">All Projects</h3>
          </FadeUp>

          <StaggerContainer delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(3).map((project) => (
                <StaggerItem key={project.id}>
                  <motion.div
                    className="card-glass p-6 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h4 className="font-display font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-2">
                          {project.title}
                        </h4>
                        <p className="text-text-secondary text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2 py-1 rounded bg-accent-primary/10 text-cyan-glow"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 text-accent-primary hover:text-cyan-glow transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
