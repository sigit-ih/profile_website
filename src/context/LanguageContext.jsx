import { createContext, useContext, useState } from "react";
import id from "../lang/id";
import en from "../lang/en";

const langs = { id, en };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("id");

  const t = langs[lang];

  const switchLanguage = (code) => setLang(code);

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
