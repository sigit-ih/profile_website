import Skills from "../components/Skills";
import Certificates from "../components/Certificates";
import { useLang } from "../context/LanguageContext";

export default function SkillPage() {
  const { t } = useLang();

  return (
    <div className="skill-page flex flex-col lg:flex-row h-screen pt-[70px] lg:pt-0 overflow-hidden bg-white dark:bg-gray-900">
      {/* Kiri */}
      <div className="skill-left flex flex-col lg:w-1/2 lg:min-w-[550px] h-full p-6 text-right">
        <h2 className="block lg:hidden lg:h-0 text-2xl sm:text-3xl font-bold text-[#4169E1] dark:text-orange-400 mb-5">
          {t.skill}
        </h2>
        <Skills />
        <Certificates />
      </div>

      {/* Kanan */}
      <div className="skill-right hidden lg:flex w-1/2 h-full items-center justify-center p-6">
        <h2 className="text-4xl font-bold text-[#4169E1] dark:text-orange-400">{t.skill}</h2>
      </div>
    </div>
  );
}
