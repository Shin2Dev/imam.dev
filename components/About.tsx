"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  id: {
    title: "Tentang Saya",
    p1: (
      <>
        Saya adalah <strong className="text-white">Web Developer</strong> sekaligus
        mahasiswa semester akhir dengan pengalaman sekitar{" "}
        <strong className="text-white">2 tahun</strong> dalam pengembangan aplikasi
        web modern, baik di sisi <strong className="text-white">Frontend</strong>{" "}
        maupun <strong className="text-white">Backend</strong>.
      </>
    ),
    p2: (
      <>
        Selama perjalanan tersebut, saya terbiasa mengerjakan berbagai jenis
        project. Mulai dari kebutuhan akademik, project organisasi, hingga sistem
        internal. Dengan fokus pada performa aplikasi, struktur kode yang rapi,
        serta kemudahan pengelolaan dan pengembangan jangka panjang.
      </>
    ),
    p3: (
      <>
        Di sisi frontend, saya fokus membangun antarmuka yang responsif dan
        intuitif menggunakan <strong className="text-white">Next.js</strong>,{" "}
        <strong className="text-white">React</strong>, dan{" "}
        <strong className="text-white">Tailwind CSS</strong>. Sementara di sisi
        backend, saya berpengalaman dalam merancang REST API, autentikasi, serta
        pengelolaan database menggunakan{" "}
        <strong className="text-white">Laravel</strong> dan{" "}
        <strong className="text-white">MySQL</strong>.
      </>
    ),
    highlights: [
      { label: "Pengalaman", value: "2+ Tahun" },
      { label: "Spesialisasi", value: "Pengembang Web" },
      { label: "Status", value: "Mahasiswa Akhir" },
    ],
  },
  en: {
    title: "About Me",
    p1: (
      <>
        I am a <strong className="text-white">Web Developer</strong> and final year
        student with approximately <strong className="text-white">2 years</strong>{" "}
        of experience in developing modern web applications, covering both{" "}
        <strong className="text-white">Frontend</strong> and{" "}
        <strong className="text-white">Backend</strong>.
      </>
    ),
    p2: (
      <>
        Throughout my journey, I have worked on various types of projects. Ranging
        from academic projects and organizational systems to internal
        applications. Focusing on performance, clean code structure, and
        long-term maintainability.
      </>
    ),
    p3: (
      <>
        On the frontend side, I build responsive and intuitive user interfaces
        using <strong className="text-white">Next.js</strong>,{" "}
        <strong className="text-white">React</strong>, and{" "}
        <strong className="text-white">Tailwind CSS</strong>. On the backend side,
        I have experience designing REST APIs, authentication systems, and
        database management using{" "}
        <strong className="text-white">Laravel</strong> and{" "}
        <strong className="text-white">MySQL</strong>.
      </>
    ),
    highlights: [
      { label: "Experience", value: "2+ Years" },
      { label: "Specialization", value: "Web Development" },
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