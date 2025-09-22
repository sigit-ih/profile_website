import Timeline from "../components/Timeline";

export default function AboutPage({ t }) {
  return (
    <div className="about-page flex flex-col lg:flex-row h-screen w-full max-w-full overflow-hidden justify-start text-left p-[5vw] lg:p-10 pt-[100px] lg:pt-10">
      <div className="about-left lg:flex w-full lg:w-1/2 h-fit lg:h-full lg:items-center lg:justify-center lg:p-6 mb-[3vw] sm:mb-6 lg:mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4169E1] dark:text-orange-400">
          {t("about")}
        </h2>
      </div>
      <div className="about-right flex flex-col lg:w-1/2 lg:min-w-[450px] flex-grow w-full min-h-0">
        <section className="section-description h-auto min-h-fit">
          <p className="text-[2.6vw] sm:text-md lg:text-lg">
            {t("about_desc")}
          </p>
        </section>
        <section className="section-timeline h-auto items-center justify-center min-h-[25vh]">
          <Timeline data={t("timeline", { returnObjects: true })} />
        </section>
      </div>
    </div>
  );
}
