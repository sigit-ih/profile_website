import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoMail } from "react-icons/io5";

export default function CopyToClipboard({ type, page }) {
  const { t } = useTranslation();

  const buttonProperties = {
    email: { text: "sigitispramono.h@gmail.com", icon: IoMail },
  }[type];

  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buttonProperties.text);
      setFeedback(t("copy_success"));
    } catch (err) {
      setFeedback(t("copy_failed"));
    }
    setShowFeedback(true);
  };

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => setShowFeedback(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback]);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-2 sm:py-3 bg-[#4169E1] dark:bg-orange-500 text-white dark:text-gray-800 text-sm sm:text-base font-semibold shadow-lg z-50 rounded-lg transition-all duration-500 ease-in-out ${
          showFeedback
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {feedback}
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className={`flex ${page === "home" ? "size-[10vw] sm:size-16" : "size-16"} items-center justify-center rounded-full bg-[#4169E1] dark:bg-orange-400 hover:bg-[#365ac0] dark:hover:bg-orange-500`}
        aria-label={`Copy ${type}`}
      >
        <buttonProperties.icon className={`${page === "home" ? "text-[5vw] sm:text-3xl" : "text-3xl"} text-white dark:text-gray-800`} />
      </button>
    </div>
  );
}
