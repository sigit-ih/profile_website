import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./assets/styles/App.css";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";
import DarkModeToggle from "./context/DarkModeToggle";

function PaginationNav({ navItems }) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = navItems.findIndex(
    (item) => item.path === location.pathname
  );

  const goTo = (index) => {
    if (index >= 0 && index < navItems.length) {
      navigate(navItems[index].path);
    }
  };

  return (
    <div className="content-pagination absolute hidden lg:flex bottom-1 right-5 items-center justify-center space-x-4">
      <button
        onClick={() => goTo(currentIndex - 1)}
        disabled={currentIndex === 0}
        aria-label="Previous page"
        className="text-3xl p-2 hover:text-[#001f33] hover:dark:text-gray-300 disabled:opacity-40"
      >
        <FiChevronLeft />
      </button>
      <span className="font-semibold w-32 text-lg dark:text-white">
        {navItems[currentIndex]?.label}
      </span>
      <button
        onClick={() => goTo(currentIndex + 1)}
        disabled={currentIndex === navItems.length - 1}
        aria-label="Next page"
        className="text-3xl p-2 hover:text-[#001f33] hover:dark:text-gray-300 disabled:opacity-40"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

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
    // { path: "/contact", label: t("contact")},
  ];

  if (splashScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
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
      <div className="text-center text-[#003153] dark:text-gray-300 bg-white dark:bg-gray-900">
        <div className="relative flex flex-col lg:flex-row w-full h-auto max-h-screen mb-0">
          <Navbar t={t} i18n={i18n} navItems={navItems} />
          <div className="content-container flex-grow min-w-0 flex flex-col md:overflow-hidden font-noto-sans">
            <AppRoutes t={t} />
          </div>
          <PaginationNav navItems={navItems}/>
          <div className="flex md:hidden absolute bottom-16 right-5">
            <DarkModeToggle position="bottom" />
          </div>
        </div>
      </div>
    </Router>
  );
}
