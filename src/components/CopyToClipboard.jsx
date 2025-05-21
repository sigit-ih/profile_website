import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function CopyToClipboard({ type }) {
  const { t } = useTranslation();

  const buttonProperties = {
    email: { text: "sigitispramono.h@gmail.com", icon: IoMail },
    phone: { text: "+62895365302554", icon: FaPhoneAlt },
  }[type];

  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buttonProperties.text);
      setFeedback(t("feedback_success"));
    } catch (err) {
      setFeedback(t("feedback_failed"));
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
        className={`fixed top-10 left-1/2 w-screen transform -translate-x-1/2 py-[1.4vh] sm:py-3 bg-[#4169E1] dark:bg-orange-500 text-white dark:text-gray-800 text-[1.8vh] sm:text-sm font-semibold shadow-lg z-15 transition-all duration-500 ease-in-out
          ${
            showFeedback
              ? "opacity-100 translate-y-10"
              : "opacity-0 translate-y-0 pointer-events-none"
          }`}
      >
        {feedback}
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="flex size-[9vw] sm:size-14 items-center justify-center rounded-full bg-[#4169E1] dark:bg-orange-500 hover:bg-[#365ac0] dark:hover:bg-orange-600"
        aria-label={`Copy ${type}`}
      >
        <buttonProperties.icon className="text-[5vw] sm:text-3xl text-white dark:text-gray-800" />
      </button>
    </div>
  );
}
