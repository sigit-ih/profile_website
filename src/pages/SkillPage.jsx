import Skills from "../components/Skills";
import { useLang } from "../context/LanguageContext";

export default function SkillPage() {
  const { t } = useLang();
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=1ZRUs_Z55RFQQEzrEiHdwjTMMh-8A4HlD`;

  return (
    <div className="SkillPage flex flex-col lg:flex-row h-screen overflow-hidden bg-indigo-100">
      {/* Kiri */}
      <div className="skill-left flex flex-col lg:w-1/2 lg:min-w-[550px] h-full p-6 mt-14 lg:mt-0 text-right">
        <h2 className="visible lg:invisible lg:h-0 text-3xl font-bold text-orange-400 mb-5">
          {t.skill}
        </h2>
        <Skills />
        <section id="certificate" className="flex flex-col h-[40%] sm:h-[50%] lg:h-auto overflow-hidden">
          <h2 className="text-2xl font-semibold mb-2">{t.certificate}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 overflow-y-auto p-2 px-auto bg-gray-200 rounded grow place-items-center">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="h-auto min-w-64 sm:min-w-64 md:min-w-56 bg-white shadow rounded flex items-center justify-center"
              >
                <img
                  src={thumbnailUrl}
                  alt="Certificate"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Kanan */}
      <div className="skill-right hidden lg:flex w-1/2 h-full items-center justify-center p-6">
        <h2 className="text-4xl font-bold text-orange-400">{t.skill}</h2>
      </div>
    </div>
  );
}
