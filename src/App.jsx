import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./assets/styles/App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import DarkModeSwitch from "./components/DarkModeSwitch";
import PaginationNav from "./components/Pagination";

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplashScreen(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const { t, i18n } = useTranslation();

  const navItems = [
    { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/skill", label: t("skill") },
    { path: "/project", label: t("project") },
    { path: "/contact", label: t("contact")},
  ];

  if (splashScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <span className="w-16 h-16 rounded-full animate-spin border-4 border-[#4169E1] dark:border-orange-400 border-t-transparent dark:border-t-transparent"></span>
        <span className="text-xl text-[#4169E1] dark:text-orange-400 mt-5 flex items-center">
          Now Loading
          <span className="flex ml-2 space-x-1">
            <span className="animate-bounce [animation-delay:0s]">.</span>
            <span className="animate-bounce [animation-delay:0.15s]">.</span>
            <span className="animate-bounce [animation-delay:0.3s]">.</span>
          </span>
        </span>
      </div>
    );
  }

  return (
    <Router>
      <div className="text-center text-[#003153] dark:text-gray-300 bg-gray-100 dark:bg-gray-900">
        <div className="relative flex flex-col lg:flex-row w-full h-auto max-h-screen mb-0">
          <Navbar t={t} i18n={i18n} navItems={navItems} />
          <div className="content-container flex-grow min-w-0 flex flex-col md:overflow-hidden font-noto-sans">
            <AppRoutes t={t} />
          </div>
          <PaginationNav navItems={navItems} />
          <div className="flex md:hidden absolute bottom-16 right-5">
            <DarkModeSwitch position="bottom" />
          </div>
        </div>
      </div>
    </Router>
  );
}
