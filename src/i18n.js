import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import id from "./lang/id";
import en from "./lang/en";

i18n.use(initReactI18next).init({
  resources: {
    id,
    en,
  },
  lng: "id",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;