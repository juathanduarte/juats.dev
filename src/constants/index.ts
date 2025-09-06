import type { IExperience, IProject, ISkill, ISocialLink } from "../types";

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

export const SKILLS: ISkill[] = [
  // Frontend
  { id: "1", name: "React", category: "frontend", level: 5, icon: "react" },
  { id: "2", name: "Next.js", category: "frontend", level: 5, icon: "nextjs" },
  {
    id: "3",
    name: "TypeScript",
    category: "frontend",
    level: 5,
    icon: "typescript",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    category: "frontend",
    level: 5,
    icon: "tailwind",
  },
  { id: "5", name: "HTML/CSS", category: "frontend", level: 5, icon: "html" },

  // Backend
  { id: "6", name: "Node.js", category: "backend", level: 4, icon: "nodejs" },
  { id: "7", name: "Express", category: "backend", level: 4, icon: "express" },

  // Tools
  { id: "8", name: "Git", category: "tools", level: 5, icon: "git" },
  { id: "9", name: "VS Code", category: "tools", level: 5, icon: "vscode" },

  // Languages
  {
    id: "10",
    name: "JavaScript",
    category: "languages",
    level: 5,
    icon: "javascript",
  },
  { id: "11", name: "Python", category: "languages", level: 3, icon: "python" },
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
  title: "Juats Dev - Portfolio",
  description:
    "Senior Frontend Developer specializing in React, Next.js, and modern web technologies",
  author: "Juats Dev",
  url: "https://juats-dev.vercel.app",
};
