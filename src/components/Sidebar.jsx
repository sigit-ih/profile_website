import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useLang } from "../context/LanguageContext";

export default function Sidebar() {
  const { t } = useLang();
  const { switchLanguage, lang } = useLang();
  return (
    <div className="Sidebar flex flex-col w-0 lg:w-[18%] z-20 bg-gray-50 border-r-4 border-black-200 text-black min-h-screen invisible lg:visible">
      <div className="h-auto p-4">
        <div className="w-36 h-36 m-auto bg-black rounded-full"></div>
        <div className="mt-5">
          <h2 className="text-center text-[1.5vw] font-bold text-orange-400">
            Sigit Ispramono Hadi
          </h2>
          <p className="text-center text-[1.2vw] text-gray-300">Software Engineer</p>
        </div>
      </div>
      <div className="h-auto mt-4">
        <button
          onClick={() => switchLanguage("id")}
          className={`px-3 py-1 text-[1vw] ${
            lang === "id" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          ID
        </button>
        <button
          onClick={() => switchLanguage("en")}
          className={`px-3 py-1 text-[1vw] ${
            lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          EN
        </button>
      </div>
      <nav className="h-full space-y-[0.65vw] text-[1vw] pt-8">
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
