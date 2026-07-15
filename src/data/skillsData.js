import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiJavascript, SiTailwindcss, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiVercel } from "react-icons/si";

const skillsData = [
  {
    title: "Frontend Development",

    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },

      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },

      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-400",
      },

      {
        name: "Bootstrap",
        icon: FaBootstrap,
        color: "text-purple-500",
      },
    ],
  },

  {
    title: "Tools & Workflow",

    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-600",
      },

      {
        name: "GitHub",
        icon: FaGithub,
        color: "text-white",
      },

      {
        name: "VS Code",
        icon: VscVscode,
        color: "text-blue-400",
      },

      {
        name: "Vite",
        icon: SiVite,
        color: "text-purple-400",
      },

      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-white",
      },
    ],
  },

  {
    title: "Currently Learning",

    skills: [
      {
        name: "REST APIs",
      },

      {
        name: "Responsive Design",
      },

      {
        name: "UI/UX Best Practices",
      },
    ],
  },
];

export default skillsData;
