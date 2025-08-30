import type { IExperience, IProject, ISkill, ISocialLink } from "../types";

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/juats-dev",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/juats-dev",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/juats-dev",
    icon: "twitter",
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
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and Tailwind CSS",
    image: "/projects/portfolio.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/juats-dev/portfolio",
    liveUrl: "https://juats-dev.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with modern UI/UX",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/juats-dev/ecommerce",
    featured: true,
  },
];

export const EXPERIENCES: IExperience[] = [
  {
    id: "1",
    company: "Tech Company",
    position: "Senior Frontend Developer",
    startDate: "2023-01",
    endDate: "2024-12",
    description: "Led frontend development for multiple projects using React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    id: "2",
    company: "Startup",
    position: "Full Stack Developer",
    startDate: "2022-01",
    endDate: "2022-12",
    description: "Developed and maintained web applications using modern technologies",
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
