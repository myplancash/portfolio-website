import React from "react";
import { CgHome } from "react-icons/cg";
import { FaBrain } from "react-icons/fa";
import { LuCalendarCheck } from "react-icons/lu";
import eventlyImg from "@/public/evently.png";
import imaginifyImg from "@/public/imaginify.png";
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
    title: "Imaginify",
    location: "Remote",
    description:
      "AI-powered image generator",
    icon: React.createElement(FaBrain),
    date: "2024 - present",
  },
  {
    title: "Event Organizing Next App",
    location: "Remote",
    description:
      "Explore a wealth of invaluable insights from 3,168+ mentors within elite global companies through our vibrant community.",
    icon: React.createElement(LuCalendarCheck),
    date: "2023",
  },
  {
    title: "House Marketplace",
    location: "Remote",
    description:
      "People can come and register, they can list their homes for rent for sale with an special offer.",
    icon: React.createElement(CgHome),
    date: "2019 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Imaginify",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Javascript", "React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: imaginifyImg,
  },
  {
    title: "Evently",
    description:
      "Explore a wealth of invaluable insights from 3,168+ mentors within elite global companies through our vibrant community.",
    tags: ["Javascript", "React", "Next.js", "Tailwind", "Node.js", "TypeScript", "TailwindCSS", "Stripe", "Zod", "React Hook Form", "Shadcn-ui", "uploadthing"],
    imageUrl: eventlyImg,
  },
  {
    title: "House Marketplace",
    description:
      "House marketplace built with React and Firebase",
    tags: ["Javascript", "Node.js", "MongoDB", "SQL", "Tailwind", "Reactjs", "Firebase"],
    imageUrl: houseMarketplaceImg,
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