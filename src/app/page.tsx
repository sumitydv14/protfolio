import { HeroSection } from '@/sections/HeroSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { ContactSection } from '@/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
