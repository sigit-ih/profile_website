export default function ContactPage({ t }) {
  return (
    <div className="contact-page flex flex-col h-screen w-full max-w-full overflow-hidden bg-white dark:bg-gray-900 justify-start text-left p-[5vw] lg:p-10 pt-[100px] lg:pt-10">
      <div className="contact-top w-full h-fit mb-[3vw] sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4169E1] dark:text-orange-400">
          {t("contact")}
        </h2>
      </div>
      <div className="contact-bottom flex flex-col flex-grow w-full min-h-0">
        <section className="contact-section h-auto min-h-fit">
          <p className="text-[3vw] sm:text-base lg:text-lg">
            {t("contact_desc")}
          </p>
        </section>
      </div>
    </div>
  );
}
