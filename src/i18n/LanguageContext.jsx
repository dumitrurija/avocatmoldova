import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context";
import { languages } from "./languages";
import { translations } from "./translations";

const getInitialLanguage = () => {
  // 1. Check user preference stored in localStorage
  if (typeof window !== "undefined") {
    const savedLanguage = localStorage.getItem("site-language");
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
  }

  // 2. Detect browser language
  if (typeof navigator !== "undefined") {
    const browserLangs = navigator.languages || [navigator.language || ""];
    for (const lang of browserLangs) {
      if (!lang) continue;
      const lower = lang.toLowerCase();
      if (lower.startsWith("ru")) return "ru";
      if (lower.startsWith("ro") || lower.startsWith("mo")) return "ro";
      if (lower.startsWith("en")) return "en";
    }
  }

  // 3. Default fallback
  return "ro";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
