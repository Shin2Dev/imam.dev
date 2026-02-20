"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "id" | "en";

type LanguageContextType = {
  lang: Lang;
  toggleLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang: setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}