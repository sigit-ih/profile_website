import Timeline from "../components/Timeline";
import { useLang } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <div className="AboutPage h-full bg-indigo-100 items-center text-right p-20">
      <div className="about-title h-auto">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-orange-400">
          {t.about}
        </h2>
      </div>
      <div className="about-content h-full py-8">
        <section id="about h-auto">
          <p className="text-sm md:text-md lg:text-lg text-gray-700">
            {t.about_desc}
          </p>
        </section>
        <section className="timeline h-auto">
          <Timeline data={t.timeline} />
        </section>
      </div>
    </div>
  );
}
