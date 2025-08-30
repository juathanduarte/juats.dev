export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ISkill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level: number; // 1-5
  icon?: string;
}

export interface IExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface IContact {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export interface ISocialLink {
  name: string;
  url: string;
  icon: string;
}
