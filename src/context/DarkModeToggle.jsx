import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Cek localStorage saat pertama kali
    const darkMode = localStorage.getItem("dark-mode") === "true";
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem("dark-mode", newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="toggle-dark flex flex-col w-fit justify-center">
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="relative cursor-pointer p-1"
      >
        {isDark ? (
          <FiMoon className="size-6 fill-[#4169E1] stroke-2 stroke-[#4169E1]" />
        ) : (
          <FiSun className="size-6 fill-orange-400 stroke-1 stroke-orange-400" />
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;