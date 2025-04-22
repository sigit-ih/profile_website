import Skills from "../components/Skills";
import { useLang } from "../context/LanguageContext";

export default function SkillPage() {
  const { t } = useLang();
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=1ZRUs_Z55RFQQEzrEiHdwjTMMh-8A4HlD`;

  return (
    <div className="skill flex flex-col lg:flex-row h-screen lg:overflow-hidden bg-indigo-100">
      {/* Kiri */}
      <div className="skill-left flex flex-col lg:w-1/2 h-full p-6 text-right">
        <h2 className="visible lg:invisible text-[5vw] font-bold text-orange-400 mb-5">
          {t.skill}
        </h2>
        <Skills />
        <section id="certificate" className="flex flex-col overflow-hidden">
          <h2 className="text-[4vw] font-semibold mb-2">{t.certificate}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto p-2 bg-gray-200 rounded grow">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-auto bg-white shadow rounded flex items-center justify-center"
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
        <h2 className="text-[4vw] font-bold text-orange-400">{t.skill}</h2>
      </div>
    </div>
  );
}
