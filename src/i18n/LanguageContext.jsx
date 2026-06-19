import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context";
import { languages } from "./languages";
import { translations } from "./translations";

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("site-language");

  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

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
