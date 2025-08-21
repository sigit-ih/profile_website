import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function DarkModeToggle({ position = "nav" }) {
  const [isDark, setIsDark] = useState(false);
  const isNav = position === "nav";
  const darkModeVisibility = isNav ? "flex" : "flex md:hidden";
  const bgIcon = isNav ? "p-1" : "p-3 rounded-3xl bg-[#003153]/30 dark:bg-gray-300/30 hover:bg-[#001f33]/30 hover:dark:bg-gray-300/30";
  const iconSize = isNav ? "size-6" : "size-12";

  useEffect(() => {
    const stored = localStorage.getItem("dark-mode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const darkMode = stored === null ? prefersDark : stored === "true";

    setIsDark(darkMode);
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("dark-mode", newMode);
    newMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  return (
    <div className={`toggle-dark ${darkModeVisibility} flex-col w-fit justify-center ${bgIcon}`}>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="relative cursor-pointer"
      >
        {isDark ? (
          <FiMoon className={`${iconSize} fill-[#4169E1] stroke-2 stroke-[#4169E1]`} />
        ) : (
          <FiSun className={`${iconSize} fill-orange-400 stroke-1 stroke-orange-400`} />
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
