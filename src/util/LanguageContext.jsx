/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/set-state-in-effect */
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LanguageContext = createContext("en");

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (path.includes("/japanese") || path.includes("/jp")) {
      setLang("jp");
    } else if (path.includes("/english") || path.includes("/en")) {
      setLang("en");
    }

    console.log("🌍 Global lang:", lang, "| path:", path);
  }, [location.pathname]);

  return (
    <LanguageContext.Provider value={lang}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
