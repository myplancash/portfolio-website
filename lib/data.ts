import React from "react";
import { LuCode, LuCode2, LuFileCode2 } from "react-icons/lu";
import eventlyImg from "@/public/evently.png";
import artigenImg from "@/public/artigen.png";
import houseMarketplaceImg from "@/public/house-marketplace.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Artigen. - Full-stack Developer",
    location: "Remote",
    description: "Developed a responsive design overhaul that improved mobile usability metrics by 40%",
    icon: LuCode2, // Use the icon component directly
    date: "Nov 2023 - Present",
  },
  {
    title: "Lifetiment Inc. - Frontend Developer",
    location: "Remote",
    description: "Contributed to a major product release that resulted in a 200% increase in user engagement",
    icon: LuCode, // Use the icon component directly
    date: "April 2022 - 2023",
  },
  {
    title: "Marketmov Group - Full-stack Developer",
    location: "Remote",
    description: "Collaborated with cross-functional teams to deliver a feature under tight deadlines, receiving commendation from stakeholders.",
    icon: LuFileCode2, // Use the icon component directly
    date: "January 2019 - Dic 2022",
  },
] as const;


export const projectsData = [
  {
    title: "ArtiGen.",
    description:
      "Let ArtiGen empower your creativity and bring your visions to life like never before.",
    tags: ["Javascript", "React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: artigenImg,
    githubUrl: 'https://imaginify-virid-three.vercel.app'
  },
  {
    title: "Evently",
    description:
      "Explore the invaluable insights from 3,168+ mentors within elite global companies through our vibrant community.",
    tags: ["Javascript", "React", "Next.js", "Tailwind", "Node.js", "TypeScript", "TailwindCSS", "Stripe", "Zod", "React Hook Form", "Shadcn-ui", "uploadthing"],
    imageUrl: eventlyImg,
    githubUrl: 'https://evently-myplancash.vercel.app'
  },
  {
    title: "House Marketplace",
    description:
      "Discover your dream home with HavenHub – where every listing is a doorway to your perfect sanctuary.",
    tags: ["Javascript", "Node.js", "MongoDB", "SQL", "Tailwind", "Reactjs", "Firebase"],
    imageUrl: houseMarketplaceImg,
    githubUrl: 'https://house-marketplace-myplancash.vercel.app'
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Node.js",
  "Shadcn-ui",
  "clerk",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;  