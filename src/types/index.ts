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
