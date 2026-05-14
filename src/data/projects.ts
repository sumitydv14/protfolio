import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time analytics platform with AI-driven insights, predictive analytics, and interactive visualizations for data-driven decision making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Recharts', 'Python'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Manager',
    description: 'Comprehensive platform for managing multi-cloud infrastructure with automated deployment, scaling, and monitoring capabilities.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
    github: 'https://github.com',
    demo: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Machine Learning Pipeline Editor',
    description: 'Visual editor for building and managing ML pipelines with drag-and-drop components, real-time execution, and collaboration features.',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8671ffa74ff8e01b04a5f151ed?w=500&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'WebSocket', 'Prisma', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile App Performance Monitor',
    description: 'Comprehensive monitoring solution for mobile app performance with crash analytics and user behavior tracking.',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'GraphQL'],
    github: 'https://github.com',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
