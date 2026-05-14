'use client';

import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/Motion';
import { experience } from '@/data/experience';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-bg-secondary/30 backdrop-blur-sm">
      <div className="container-custom">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Professional Journey</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Building products and leading teams across innovative companies
            </p>
          </div>
        </FadeUp>

        <StaggerContainer delay={0.1}>
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="card-glass p-8 relative"
                  whileHover={{ x: 5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-accent-primary border-2 border-bg-primary -translate-x-11"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-display font-bold text-accent-primary mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-text-secondary font-mono text-sm">
                        {exp.company}
                      </p>
                      <p className="text-text-secondary text-sm mt-1">
                        {exp.duration}
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-accent-primary/10 text-cyan-glow border border-cyan-glow/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};
