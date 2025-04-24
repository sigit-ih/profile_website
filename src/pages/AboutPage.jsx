import Timeline from "../components/Timeline";
import { useLang } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <div className="AboutPage flex flex-col h-full w-full max-w-full bg-indigo-100 justify-start text-right p-[5vw] lg:p-[3vw]">
      <div className="about-top w-full mb-6 mt-14 lg:mt-0">
        <h2 className="text-3xl font-bold text-orange-400">{t.about}</h2>
      </div>
      <div className="about-bottom w-full">
        <section className="about-section">
          <p className="text-md lg:text-lg text-gray-700">{t.about_desc}</p>
        </section>
        <section className="timeline-section">
          <Timeline data={t.timeline} />
        </section>
      </div>
    </div>
  );
}
