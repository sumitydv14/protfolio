export type NavLink = {
  name: string;
  href: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
