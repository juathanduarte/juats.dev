export interface IProject {
  id: string;
  title: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: TCategory;
}

export type TCategory = "frontend" | "backend" | "fullstack";

export interface ISocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ITimelineItem {
  id: string;
  title: string;
  company: string;
  description: string;
  period: string;
  logo?: string | string[];
  websites?: string | string[];
  isLast?: boolean;
}
