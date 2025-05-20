import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "../context/DarkModeToggle";
import { useTranslation } from "react-i18next";
import LogoImage from "../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="navbar absolute lg:static flex justify-between lg:justify-normal lg:flex-col flex-shrink-0 w-full lg:w-64 lg:min-w-64 h-20 lg:min-h-screen z-20 border-b-4 lg:border-b-0 border-r-0 lg:border-r-4 border-gray-200 dark:border-gray-800 px-6 lg:px-0 bg-white dark:bg-gray-900">
      <div className="navbar-header flex lg:flex-col lg:h-auto gap-3 lg:gap-0 p-3 lg:p-4 items-center justify-center">
        <Link to="/">
          <img
            src={LogoImage}
            alt="Logo"
            className="w-12 h-12 lg:w-36 lg:h-36 object-cover object-top rounded-full"
            loading="lazy"
          />
        </Link>
        <div className="mt-5 hidden lg:block">
          <h2 className="text-xl font-bold text-[#4169E1] dark:text-orange-400">
            Sigit Ispramono Hadi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Software Engineer
          </p>
        </div>
        <div className="navbar-toggle flex gap-3 justify-center lg:mt-3 text-xs sm:text-sm font-semibold">
          <div className="toggle-lang grow h-7 my-auto">
            <button
              onClick={() => changeLanguage("id")}
              className={`h-full px-3 py-1 rounded-l ${
                currentLang === "id"
                  ? "bg-[#4169E1] dark:bg-orange-400 text-gray-200 dark:text-gray-800"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`h-full px-3 py-1 rounded-r ${
                currentLang === "en"
                  ? "bg-[#4169E1] dark:bg-orange-400 text-gray-200 dark:text-gray-800"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              }`}
            >
              EN
            </button>
          </div>
          <DarkModeToggle />
        </div>
      </div>

      <nav className="navbar-list hidden md:flex lg:block h-full sm:space-x-5 md:space-x-8 lg:space-x-0 space-y-0 lg:space-y-5 items-center text-sm lg:pt-8">
        <Link
          to="/"
          className={`block transition ${
            isActive("/")
              ? "text-[#4169E1] dark:text-orange-400 font-bold"
              : "hover:text-[#4169E1] dark:hover:text-orange-400"
          }`}
        >
          {t("home")}
        </Link>
        <Link
          to="/about"
          className={`block transition ${
            isActive("/about")
              ? "text-[#4169E1] dark:text-orange-400 font-bold"
              : "hover:text-[#4169E1] dark:hover:text-orange-400"
          }`}
        >
          {t("about")}
        </Link>
        <Link
          to="/skill"
          className={`block transition ${
            isActive("/skill")
              ? "text-[#4169E1] dark:text-orange-400 font-bold"
              : "hover:text-[#4169E1] dark:hover:text-orange-400"
          }`}
        >
          {t("skill")}
        </Link>
        <Link
          to="/project"
          className={`block transition ${
            isActive("/project")
              ? "text-[#4169E1] dark:text-orange-400 font-bold"
              : "hover:text-[#4169E1] dark:hover:text-orange-400"
          }`}
        >
          {t("project")}
        </Link>
      </nav>
      <nav className="navbar-hamburger flex md:hidden h-full items-center">
        <button
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          aria-label={isOpenMenu ? "Toggle menu" : "Close menu"}
        >
          {isOpenMenu ? (
            <FiX className="text-3xl" />
          ) : (
            <FiMenu className="text-3xl" />
          )}
        </button>
        {isOpenMenu && (
          <div className="absolute top-0 right-0 z-60 w-screen h-screen justify-items-center text-center text-lg sm:text-xl space-y-6 flex-col p-4 bg-white dark:bg-gray-900">
            <>
              <button
                onClick={() => setIsOpenMenu(false)}
                aria-label="Toggle menu"
              >
                <FiX className="absolute top-6 right-6 text-3xl" />
              </button>
              <Link
                to="/"
                onClick={() => setIsOpenMenu(false)}
                className={`block transition ${
                  isActive("/")
                    ? "text-[#4169E1] dark:text-orange-400 font-bold"
                    : "hover:text-[#4169E1] dark:hover:text-orange-400"
                }`}
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpenMenu(false)}
                className={`block transition ${
                  isActive("/about")
                    ? "text-[#4169E1] dark:text-orange-400 font-bold"
                    : "hover:text-[#4169E1] dark:hover:text-orange-400"
                }`}
              >
                {t("about")}
              </Link>
              <Link
                to="/skill"
                onClick={() => setIsOpenMenu(false)}
                className={`block transition ${
                  isActive("/skill")
                    ? "text-[#4169E1] dark:text-orange-400 font-bold"
                    : "hover:text-[#4169E1] dark:hover:text-orange-400"
                }`}
              >
                {t("skill")}
              </Link>
              <Link
                to="/project"
                onClick={() => setIsOpenMenu(false)}
                className={`block transition ${
                  isActive("/project")
                    ? "text-[#4169E1] dark:text-orange-400 font-bold"
                    : "hover:text-[#4169E1] dark:hover:text-orange-400"
                }`}
              >
                {t("project")}
              </Link>
            </>
            <div className="absolute bottom-6 left-0 w-full justify-center items-center text-xs p-2">
              © 2025 Sigit Ispramono Hadi. All rights reserved.
            </div>
          </div>
        )}
      </nav>
      <footer className="Footer h-auto mt-0 text-sm hidden lg:block">
        <div className="justify-center items-center text-xs p-2">
          © 2025 Sigit Ispramono Hadi. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
