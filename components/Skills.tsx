"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPrisma,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

/* ========= STATIC SKILLS DATA ========= */
const skillGroups = [
  {
    key: "frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
      { name: "CSS", icon: SiCss3, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-400" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-300" },
    ],
  },
  {
    key: "database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
      { name: "Prisma", icon: SiPrisma, color: "text-white" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-gray-300" },
      { name: "Figma", icon: SiFigma, color: "text-pink-400" },
    ],
  },
];

/* ========= TRANSLATION ========= */
const content = {
  id: {
    title: "Skills & Teknologi",
    desc: "Teknologi dan tools yang saya gunakan dalam proses belajar dan pengembangan aplikasi web, baik di sisi frontend maupun backend.",
    groups: {
      frontend: "Frontend Development",
      backend: "Backend Development",
      database: "Database & ORM",
      tools: "Tools & Workflow",
    },
  },
  en: {
    title: "Skills & Technologies",
    desc: "Technologies and tools that I use during my learning process and in developing web applications, covering both frontend and backend aspects.",
    groups: {
      frontend: "Frontend Development",
      backend: "Backend Development",
      database: "Database & ORM",
      tools: "Tools & Workflow",
    },
  },
};
export default function Skills() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            {t.desc}
          </p>
        </motion.div>

        {/* GROUPS */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-950 border border-white/10 rounded-2xl p-8
                hover:border-blue-500/30 transition"
            >
              <h3 className="text-xl font-semibold mb-6">
                {t.groups[group.key as keyof typeof t.groups]}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {group.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.03 }}
                      className="flex items-center gap-3 p-3 rounded-lg
                        bg-slate-900 hover:bg-slate-800 transition
                        hover:-translate-y-0.5"
                    >
                      <Icon className={`text-xl ${skill.color}`} />
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}