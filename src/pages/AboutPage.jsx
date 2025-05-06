import Timeline from "../components/Timeline";
import { useLang } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <div className="about-page flex flex-col h-screen w-full max-w-full overflow-hidden bg-white dark:bg-gray-900 justify-start text-left p-[5vw] lg:p-[3vw] pt-[90px]">
      <div className="about-top w-full h-fit mb-[2vw] sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4169E1] dark:text-orange-400">{t.about}</h2>
      </div>
      <div className="about-bottom flex flex-col flex-grow w-full min-h-0">
        <section className="about-section h-auto min-h-fit">
          <p className="text-sm sm:text-base lg:text-lg">{t.about_desc}</p>
        </section>
        <section className="timeline-section h-auto min-h-[30vh]">
          <Timeline data={t.timeline} />
        </section>
      </div>
    </div>
  );
}
