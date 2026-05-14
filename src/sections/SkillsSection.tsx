'use client';

import { FadeUp, StaggerContainer, StaggerItem } from '@/components/Motion';
import { skills } from '@/data/skills';

export const SkillsSection = () => {
  return (
    <section id="about" className="py-24 bg-bg-secondary/30 backdrop-blur-sm">
      <div className="container-custom">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Core Competencies</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and expertise
              across the full stack
            </p>
          </div>
        </FadeUp>

        <StaggerContainer delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skillGroup, index) => (
              <StaggerItem key={index}>
                <div className="card-glass p-6">
                  <h3 className="text-lg font-semibold mb-4 text-accent-primary">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-sm text-text-secondary">
                        <span className="text-cyan-glow mr-2">▸</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};
