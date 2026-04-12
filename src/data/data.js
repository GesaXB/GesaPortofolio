export const experienceData = [
  {
    id: 1,
    role: "Fullstack Developer Intern",
    company: "Seven Inc",
    period: "4 Month",
    description: [
      "Developed and maintained web applications using Laravel framework for backend operations",
      "Implemented responsive user interfaces with Tailwind CSS for optimal viewing experience",
      "Designed and optimized MySQL database structures for efficient data management",
      "Collaborated with team members to deliver features according to project requirements"
    ],
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"]
  },
  {
    id: 2,
    role: "Project Tefa Developer",
    company: "Atase Perdagangan",
    period: "2024 - 2025",
    description: [
      "Developed and maintained WordPress websites with SEO optimization techniques",
      "Implemented professional design standards for official government trade attaché websites",
      "Ensured website security and performance through regular updates and optimizations",
      "Created content management solutions for non-technical staff to update website content"
    ],
    tech: ["WordPress", "SEO", "PHP", "HTML/CSS"]
  }
];

import AzaliaProject from "../assets/AzaliaProject.png";
import StepUpProject from "../assets/StepUpProject.png";

export const projectData = [
  {
    id: 1,
    title: "TK Azalia - Kindergarten & PPDB",
    description: "A comprehensive kindergarten school website featuring an integrated PPDB (Student Admission) system built with Next.js, TypeScript, and Prisma.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "ChartJs"],
    link: "https://www.tkazalia.sch.id/",
    github: "",
    demo: "https://www.tkazalia.sch.id/",
    image: AzaliaProject
  },
  {
    id: 2,
    title: "StepUp - Shoe E-Commerce",
    description: "A modern and responsive shoe e-commerce platform featuring an editorial-style UI/UX, product catalog, and reliable checkout flow built with Next.js, TypeScript, and Prisma.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    link: "https://github.com/GesaXB/stepUp",
    github: "https://github.com/GesaXB/stepUp",
    demo: "https://stepup-red.vercel.app/",
    image: StepUpProject
  }
];
