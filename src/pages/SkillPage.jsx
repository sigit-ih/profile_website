import Skills from "../components/Skills";
import Certificates from "../components/Certificates";

export default function SkillPage({ t }) {
  return (
    <div className="skill-page flex flex-col lg:flex-row h-screen lg:p-10 pt-[70px] lg:pt-10 lg:pl-[2vw] overflow-hidden">
      <div className="skill-left flex flex-col lg:w-1/2 lg:min-w-[490px] h-full p-6 lg:p-[1vw] text-right">
        <h2 className="block lg:hidden lg:h-0 text-2xl sm:text-3xl font-bold text-[#4169E1] dark:text-orange-400 mb-5">
          {t("skill")}
        </h2>
        <Skills />
        <Certificates />
      </div>
      
      <div className="skill-right hidden lg:flex lg:w-1/2 h-full items-center justify-center p-6 lg:p-[1vw]">
        <h2 className="text-4xl font-bold text-[#4169E1] dark:text-orange-400">{t("skill")}</h2>
      </div>
    </div>
  );
}
