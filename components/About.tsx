"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  id: {
    title: "Tentang Saya",
    p1: (
      <>
        Saya adalah <strong className="text-white">mahasiswa semester akhir</strong>{" "}
        yang memiliki ketertarikan kuat pada pengembangan aplikasi web, dengan
        pengalaman mengerjakan berbagai project pengembangan selama masa studi.
      </>
    ),
    p2: (
      <>
        Selama proses belajar tersebut, saya terbiasa mengerjakan project
        akademik, organisasi, serta latihan pengembangan sistem, yang membantu
        saya memahami alur kerja frontend dan backend dalam satu aplikasi. Saya
        terbiasa bekerja dengan struktur kode yang rapi, serta terus belajar
        menerapkan praktik pengembangan yang mudah dipelihara.
      </>
    ),
    p3: (
      <>
        Di sisi frontend, saya membangun antarmuka web yang responsif dan
        user-friendly menggunakan{" "}
        <strong className="text-white">Next.js</strong>,{" "}
        <strong className="text-white">React</strong>, dan{" "}
        <strong className="text-white">Tailwind CSS</strong>. Sementara di sisi
        backend, saya mempelajari dan menerapkan pembuatan REST API,
        autentikasi, serta pengelolaan database menggunakan{" "}
        <strong className="text-white">Laravel</strong> dan{" "}
        <strong className="text-white">MySQL</strong>.
      </>
    ),
    highlights: [
      { label: "Fokus", value: "Web Development" },
      { label: "Pendekatan", value: "Project-Based Learning" },
      { label: "Status", value: "Mahasiswa Semester Akhir" },
    ],
  },

  en: {
    title: "About Me",
    p1: (
      <>
        I am a <strong className="text-white">final-year university student</strong>{" "}
        with a strong interest in web application development, and hands-on
        experience working on various development projects throughout my
        academic journey.
      </>
    ),
    p2: (
      <>
        During this learning process, I have worked on academic projects,
        organizational projects, and system development exercises, which helped
        me understand how frontend and backend components integrate within a
        single application. I am accustomed to writing clean and well-structured
        code, while continuously learning to apply maintainable development
        practices.
      </>
    ),
    p3: (
      <>
        On the frontend side, I build responsive and user-friendly web
        interfaces using{" "}
        <strong className="text-white">Next.js</strong>,{" "}
        <strong className="text-white">React</strong>, and{" "}
        <strong className="text-white">Tailwind CSS</strong>. On the backend
        side, I have learned and applied REST API development,
        authentication, and database management using{" "}
        <strong className="text-white">Laravel</strong> and{" "}
        <strong className="text-white">MySQL</strong>.
      </>
    ),
    highlights: [
      { label: "Focus", value: "Web Development" },
      { label: "Approach", value: "Project-Based Learning" },
      { label: "Status", value: "Final Year Student" },
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t.title}
        </h2>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {t.highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-slate-900 border border-white/10 text-center
                hover:border-blue-500/30 hover:bg-slate-900/80 transition"
            >
              <p className="text-2xl font-bold text-white">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-gray-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}