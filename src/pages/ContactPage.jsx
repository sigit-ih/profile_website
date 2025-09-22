import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import CopyToClipboard from "../components/CopyToClipboard";
import ContactForm from "../components/ContactForm";

export default function ContactPage({ t }) {
  return (
    <div className="contact-page flex flex-col h-screen w-full max-w-full overflow-hidden justify-start text-left p-[5vw] lg:p-10 pt-[100px] lg:pt-10">
      <div className="contact-top w-full h-fit mb-[3vw] sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4169E1] dark:text-orange-400">
          {t("contact")}
        </h2>
      </div>
      <div className="contact-bottom flex flex-col flex-grow w-full min-h-0">
        <section className="form-section h-auto min-h-fit w-[80%] m-auto p-6">
          <ContactForm />
        </section>
        <section className="contacts-section flex gap-5 w-full h-auto min-h-fit mx-auto p-6 justify-center">
          <CopyToClipboard type="email" />
          <div className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/sigitispramonohadi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-16 items-center justify-center rounded-full bg-[#4169E1] dark:bg-orange-400 hover:bg-[#365ac0] dark:hover:bg-orange-600"
            >
              <FaLinkedinIn className="text-[5vw] sm:text-3xl text-white dark:text-gray-800" />
            </a>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/sigit-ih"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-16 items-center justify-center rounded-full bg-[#4169E1] dark:bg-orange-400 hover:bg-[#365ac0] dark:hover:bg-orange-600"
            >
              <TbBrandGithubFilled className="text-[5vw] sm:text-3xl text-white dark:text-gray-800" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
