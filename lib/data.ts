import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import currency from "@/public/currency.png";
import todo from "@/public/todo.png";
import password from "@/public/password.png";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CurrencyConverter",
    description:
      "I worked as a frontend developer on this startup project. Users can check the rate of currency all over the world.",
    tags: ["React", "Tailwind"],
    imageUrl: currency,
  },
  {
    title: "Todo",
    description:
      "Todo is basic list webapp. It has features like Adding, Updating, Deleting.",
    tags: ["React", "Tailwind"],
    imageUrl: todo,
  },
  {
    title: "Password Generator",
    description:
      "A public web app for quick random password. It shows word count, character count and number count.",
    tags: ["React", "Tailwind"],
    imageUrl: password,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Git",
  "Tailwind",
] as const;
