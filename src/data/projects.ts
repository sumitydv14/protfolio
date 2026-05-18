import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Survey Platform',
    description: 'AI-Powered survey platform whose main goal was to help user create product survey and publish them to external platfrom',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'postgresql', 'mongodb', 'Python'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Select your unversity',
    description: 'Select your university is a web application that helps students to select their university based on their preferences and requirements.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
    github: 'https://github.com',
    demo: 'https://www.selectyouruniversity.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Machine Learning Pipeline Editor',
    description: 'Visual editor for building and managing ML pipelines with drag-and-drop components, real-time execution, and collaboration features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['React', 'Python', 'TensorFlow', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'DevOps Automation Suite',
    description: 'Automation platform for CI/CD pipelines with intelligent resource allocation and performance optimization.',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57da809bda?w=500&h=300&fit=crop',
    technologies: ['Go', 'Terraform', 'Jenkins', 'GitLab CI', 'Prometheus'],
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Real-Time Collaboration Tool',
    description: 'Document collaboration platform with real-time synchronization, version control, and AI-powered features.',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57da809bda?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'WebSocket', 'Prisma', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile App Performance Monitor',
    description: 'Comprehensive monitoring solution for mobile app performance with crash analytics and user behavior tracking.',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57da809bda?w=500&h=300&fit=crop',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'GraphQL'],
    github: 'https://github.com',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
