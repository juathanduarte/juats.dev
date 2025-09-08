import type { IExperience, IProject, ISocialLink } from "../types";

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/juathanduarte",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juathanduarte",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:juathanduarte13@gmail.com",
    icon: "email",
  },
];

export const PROJECTS: IProject[] = [
  {
    id: "1",
    title: "LetraLandia",
    descriptionKey: "projects.descriptions.letralandia",
    image: "letralandia.png",
    technologies: ["TypeScript", "React-Native", "NestJS", "SQLite", "Expo"],
    githubUrl: "https://github.com/juats-dev/letralandia",
    liveUrl: "https://letralandia.app",
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Suíte",
    descriptionKey: "projects.descriptions.suite",
    image: "suite.png",
    technologies: ["TypeScript", "React"],
    githubUrl: "https://github.com/juats-dev/suite",
    liveUrl: "https://suite.app",
    featured: true,
    category: "frontend",
  },
  {
    id: "3",
    title: "Meupass App",
    descriptionKey: "projects.descriptions.meupassApp",
    image: "app-meupass.jpg",
    technologies: ["NextJS", "Mobile-First", "PWA"],
    githubUrl: "https://github.com/juats-dev/meupass-app",
    liveUrl: "https://meupass.app",
    featured: true,
    category: "frontend",
  },
  {
    id: "4",
    title: "Meupass Dash",
    descriptionKey: "projects.descriptions.meupassDash",
    image: "dash-meupass.png",
    technologies: ["NextJS"],
    githubUrl: "https://github.com/juats-dev/meupass-dash",
    liveUrl: "https://dash.meupass.app",
    featured: true,
    category: "frontend",
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    id: "1",
    company: "Tech Company",
    position: "Senior Frontend Developer",
    startDate: "2023-01",
    endDate: "2024-12",
    description:
      "Led frontend development for multiple projects using React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    id: "2",
    company: "Startup",
    position: "Full Stack Developer",
    startDate: "2022-01",
    endDate: "2022-12",
    description:
      "Developed and maintained web applications using modern technologies",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
  },
];

export const SITE_CONFIG = {
  title: "juats.dev - Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, and modern web technologies",
  author: "Juathan Coelho Duarte",
  url: "https://juats-dev.vercel.app",
};
