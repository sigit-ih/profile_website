import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";

export default function Sidebar() {
  const { t, switchLanguage, lang } = useLang();
  return (
    <div id="Sidebar" className="flex flex-col w-0 lg:w-[18%] lg:min-w-52 lg:flex-shrink-0 z-20 bg-gray-50 border-r-4 border-black-200 text-black min-h-screen invisible lg:visible">
      <div className="h-auto p-4">
        <div className="w-36 h-36 m-auto bg-black rounded-full"></div>
        <div className="mt-5">
          <h2 className="text-center text-xl font-bold text-orange-400">
            Sigit Ispramono Hadi
          </h2>
          <p className="text-center text-lg text-gray-300">Software Engineer</p>
        </div>
      </div>
      <div className="h-auto mt-3">
        <button
          onClick={() => switchLanguage("id")}
          className={`px-3 py-1 text-sm ${
            lang === "id" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          ID
        </button>
        <button
          onClick={() => switchLanguage("en")}
          className={`px-3 py-1 text-sm ${
            lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          EN
        </button>
      </div>
      <nav className="h-full space-y-2 text-sm pt-8">
        <Link to="/" className="block hover:text-orange-400 transition">
          {t.home}
        </Link>
        <Link to="/About" className="block hover:text-orange-400 transition">
          {t.about}
        </Link>
        <Link to="/Skill" className="block hover:text-orange-400 transition">
          {t.skill}
        </Link>
      </nav>
      <Footer />
    </div>
  );
}
