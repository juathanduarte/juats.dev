import type { IProject, ISocialLink } from "../types";

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
    title: "Suíte",
    descriptionKey: "projects.descriptions.suite",
    image: "suite.png",
    technologies: [
      "TypeScript",
      "React",
      "Styled-Components",
      "Ant Design",
      "Husky",
      "Vitest",
    ],
    featured: true,
    category: "frontend",
  },
  {
    id: "2",
    title: "Meupass",
    descriptionKey: "projects.descriptions.meupassApp",
    image: "app-meupass.jpg",
    technologies: [
      "TypeScript",
      "NextJS",
      "Mobile-First",
      "Tailwind CSS",
      "PWA",
    ],
    featured: true,
    category: "frontend",
  },
  {
    id: "3",
    title: "Meupass Dashboard",
    descriptionKey: "projects.descriptions.meupassDash",
    image: "dash-meupass.png",
    technologies: ["TypeScript", "NextJS", "Tailwind CSS"],
    featured: true,
    category: "frontend",
  },
  {
    id: "4",
    title: "LetraLandia",
    descriptionKey: "projects.descriptions.letralandia",
    image: "letralandia.png",
    technologies: ["TypeScript", "React-Native", "NestJS", "SQLite", "Expo"],
    featured: true,
    category: "fullstack",
  },
  {
    id: "5",
    title: "ClinEqApp",
    descriptionKey: "projects.descriptions.clineqapp",
    image: "clineqapp-hut8.jpeg",
    technologies: ["TypeScript", "React Native"],
    featured: true,
    category: "frontend",
  },
];
