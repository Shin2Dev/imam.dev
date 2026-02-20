"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type Lang = "id" | "en";

const translations = {
  id: {
    about: "Tentang",
    skills: "Keahlian",
    projects: "Proyek",
  },
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const links = [
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <span className="font-semibold text-lg tracking-wide">
          Imam<span className="text-blue-500">.dev</span>
        </span>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="relative hover:text-white transition
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0 after:bg-blue-500
                after:transition-all hover:after:w-full"
            >
              {translations[lang][link.key as keyof typeof translations.id]}
            </a>
          ))}

          {/* LANGUAGE TOGGLE (DESKTOP) */}
          <div className="flex items-center bg-slate-900 border border-white/10 rounded-full p-1">
            {(["id", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => toggleLang(l)}
                className="relative px-3 py-1 text-xs font-medium rounded-full transition cursor-pointer"
              >
                {lang === l && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    lang === l ? "text-white" : "text-gray-400"
                  }`}
                >
                  {l.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white cursor-pointer"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open && "rotate-45 translate-y-2"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                open && "opacity-0"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open && "-rotate-45 -translate-y-2"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden px-6 pb-6"
          >
            <div className="flex flex-col gap-4 text-gray-300">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  {translations[lang][link.key as keyof typeof translations.id]}
                </a>
              ))}

              {/* LANGUAGE TOGGLE (MOBILE) */}
              <div className="flex gap-2 pt-4">
                {(["id", "en"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => toggleLang(l)}
                    className={`px-4 py-2 rounded-lg border text-sm transition cursor-pointer
                      ${
                        lang === l
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-white/20 text-gray-400"
                      }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}