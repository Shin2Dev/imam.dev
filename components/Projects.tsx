"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import {
  SiLaravel,
  SiNextdotjs,
  SiMysql,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";

/* ================= DATA ================= */

const techIcons: Record<string, React.ReactNode> = {
  Laravel: <SiLaravel className="text-red-500" />,
  "Next.js": <SiNextdotjs />,
  MySQL: <SiMysql className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Prisma: <SiPrisma className="text-indigo-400" />,
};

const translations = {
  id: {
    title: "Projects",
    subtitle: "Project pengembangan yang saya kerjakan selama masa studi",
    viewDetail: "Lihat Detail →",
    role: "Role",
    github: "GitHub",
    liveDemo: "Live Demo",
  },
  en: {
    title: "Projects",
    subtitle: "Development projects I worked on during my academic journey",
    viewDetail: "View Details →",
    role: "Role",
    github: "GitHub",
    liveDemo: "Live Demo",
  },
};

const projects = [
  {
    title: {
      id: "E-Voting Pemilihan Ketua Umum UKM Olah Raga",
      en: "E-Voting System for UKM Olah Raga Chairman Election",
    },
    desc: {
      id: "Sistem e-voting untuk pemilihan ketua umum UKM dengan autentikasi dan manajemen data.",
      en: "An e-voting system for electing the chairman of UKM Olah Raga, featuring authentication and data management.",
    },
    label: {
      id: "Project Organisasi",
      en: "Organization Project",
    },
    images: [
      "/projects/ukm-or-1.png",
      "/projects/ukm-or-2.png",
      "/projects/ukm-or-3.png",
    ],
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    github: "https://github.com/Shin2Dev/E-Voting_UKM-Olah-Raga",
  },
  {
    title: {
		id: "Sistem Informasi Tagihan Telepon (MSJTagihanTlp)",
		en: "Telephone Billing Information System (MSJTagihanTlp)",
	  },
	  desc: {
		id: "Project pengembangan sistem informasi untuk membantu proses pengelolaan dan monitoring tagihan telepon, dikerjakan sebagai bagian dari pembelajaran selama program magang dan pengembangan sistem internal.",
		en: "A system development project designed to support telephone billing management and monitoring, developed as part of an internship learning process within an internal system project.",
	  },
	  label: {
		id: "Project Pengembangan Sistem (Project-Based)",
		en: "System Development Project (Project-Based)",
	 },
    images: [
      "/projects/tagihantlp-1.png",
      "/projects/tagihantlp-2.png",
      "/projects/tagihantlp-3.png",
    ],
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    liveDemo: "https://app.spunindo.com/msjtagihantlp",
  },
  {
    title: {
      id: "Sistem Informasi RW (SIMRW)",
      en: "Neighborhood Information System (SIMRW)",
    },
    desc: {
      id: "Sistem informasi untuk pengelolaan data warga dan administrasi RW.",
      en: "An information system for managing resident data and neighborhood administration.",
    },
    label: {
      id: "Project Tugas Akhir Kampus",
      en: "Final Academic Project",
    },
    images: [
      "/projects/simrw-1.png",
      "/projects/simrw-2.png",
      "/projects/simrw-3.png",
    ],
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    role: {
      id: "Backend Developer",
      en: "Backend Developer",
    },
    github: "https://github.com/Shin2Dev/SIMRW",
  },
  {
    title: {
      id: "Sistem Reservasi Lapangan Sport Center",
      en: "Sport Center Field Reservation System",
    },
    desc: {
      id: "Sistem reservasi lapangan olahraga berbasis web.",
      en: "A web-based reservation system for sports fields.",
    },
    label: {
      id: "Project Tugas Akhir Kampus",
      en: "Final Academic Project",
    },
    images: [
      "/projects/sport-center-1.png",
      "/projects/sport-center-2.png",
      "/projects/sport-center-3.png",
    ],
    stack: ["Next.js", "Tailwind CSS", "Prisma", "MySQL"],
    role: {
      id: "Backend Developer",
      en: "Backend Developer",
    },
    github: "https://github.com/Shin2Dev/Reservasi-Lapangan-Sport-Center",
  },
];

/* ================= COMPONENT ================= */

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const { lang } = useLanguage();
  const t = translations[lang];

  /* auto carousel */
  useEffect(() => {
    if (active === null) return;
    const t = setInterval(() => {
      setSlide((s) =>
        s === projects[active].images.length - 1 ? 0 : s + 1
      );
    }, 3500);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
		  {t.title}
		</h2>
		<p className="mt-4 text-gray-400">
		  {t.subtitle}
		</p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="relative h-56">
              <Image src={p.images[0]} alt={p.title[lang]} fill className="object-cover" />
              <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-black/70">
			    {p.label[lang]}
 			  </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">
			    {p.title[lang]}
			  </h3>

              <p className="mt-2 text-gray-400 text-sm">
			    {p.desc[lang]}
  			  </p>
			  
              <button
				  onClick={() => {
					setActive(i);
					setSlide(0);
				  }}
				  className="mt-4 text-blue-400 hover:text-blue-500 cursor-pointer"
				>
				  {t.viewDetail}
			  </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-950 w-full max-w-4xl rounded-2xl overflow-hidden max-h-[90vh]"
            >
              {/* GRID MODAL */}
              <div className="grid md:grid-cols-2 h-full">
                {/* LEFT - CAROUSEL */}
                <div className="relative h-64 md:h-full bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={projects[active].images[slide]}
                        alt="Project"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* RIGHT - CONTENT */}
                <div className="p-6 overflow-y-auto">
                  <div className="flex justify-between items-start">
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-800">
                      {projects[active].label[lang]}
                    </span>
                    <button onClick={() => setActive(null)}>
                      <X className="opacity-60 hover:opacity-100 cursor-pointer" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-bold mt-4">
                    {projects[active].title[lang]}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {projects[active].desc[lang]}
                  </p>

                  {/* STACK */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {projects[active].stack.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-lg text-sm"
                      >
                        {techIcons[tech]}
                        {tech}
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
					  Role: {projects[active].role[lang]}
				  </p>

                  {/* CTA */}
                  <div className="flex gap-4 mt-6 flex-wrap">
                    {projects[active].github && (
					  <a
						href={projects[active].github}
						target="_blank"
						className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10"
					  >
						<Github size={18} /> {t.github}
					  </a>
					)}

					{projects[active].liveDemo && (
					  <a
						href={projects[active].liveDemo}
						target="_blank"
						className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
					  >
						<ExternalLink size={18} /> {t.liveDemo}
					  </a>
					)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}