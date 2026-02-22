"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    badge: "WEB DEVELOPER",
    title1: "Final-Year Student",
    title2: "& Web Developer",
    desc: "Hands-on experience in web application development through project-based work during academic studies, with a focus on frontend and backend development using Laravel, Next.js, and Tailwind CSS. Interested in writing clean code, building responsive user interfaces, and following modern development workflows.",
    campus: "Final Year Student at",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
  },
  id: {
    badge: "WEB DEVELOPER",
    title1: "Mahasiswa Semester Akhir",
    title2: "& Web Developer",
	desc: "Berpengalaman mengerjakan project pengembangan aplikasi web selama masa studi, dengan fokus pada frontend & backend menggunakan Laravel, Next.js, dan Tailwind CSS. Tertarik pada clean code, UI responsif, dan workflow pengembangan modern.",
    campus: "Mahasiswa Semester Akhir di",
    ctaPrimary: "Lihat Proyek",
    ctaSecondary: "Hubungi Saya",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* BADGE */}
          <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-widest
            rounded-full border border-blue-500/30 text-blue-400 bg-blue-500/10">
            {t.badge}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.title1}
            <br />
            <span className="text-blue-500">{t.title2}</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            {t.desc}
          </p>

          {/* CAMPUS */}
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/polinema.png"
              alt="Politeknik Negeri Malang"
              width={36}
              height={36}
              className="object-contain opacity-80"
            />
            <span className="text-sm text-gray-300">
              {t.campus} <strong>Politeknik Negeri Malang</strong>
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg
                hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/40
                transition"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-lg
                hover:bg-white/10 focus:ring-2 focus:ring-white/20
                transition"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl
            overflow-hidden border border-white/10 shadow-xl
            hover:shadow-2xl transition">
            <Image
              src="/profile.jpg"
              alt="Web Developer Profile"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}