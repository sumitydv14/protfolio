import type { Skill } from '@/types';

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Vue.js',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Python',
      'Go',
      'Express',
      'FastAPI',
      'PostgreSQL',
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Jenkins'],
  },
  {
    category: 'AI & Data',
    items: [
      'Machine Learning',
      'TensorFlow',
      'PyTorch',
      'SQL',
      'Data Analysis',
      'Apache Spark',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Linux', 'GraphQL', 'REST API', 'MongoDB', 'Redis'],
  },
];
