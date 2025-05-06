import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function CopyToClipboard({ type }) {
  const { t } = useLang();

  const buttonProperties = {
    email: { text: "sigitispramono.h@gmail.com", icon: IoMail },
    phone: { text: "+62895365302554", icon: FaPhoneAlt },
  }[type];

  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buttonProperties.text);
      setFeedback(t.feedback_success);
    } catch (err) {
      setFeedback(t.feedback_failed);
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
      {/* Feedback Toast */}
      <div
        className={`fixed bottom-0 left-1/2 w-screen transform -translate-x-1/2 px-4 py-3 bg-[#4169E1] dark:bg-orange-500 text-white text-sm shadow-lg z-50 transition-all duration-500 ease-in-out
          ${
            showFeedback
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
      >
        {feedback}
      </div>

      {/* Tombol Copy */}
      <button
        type="button"
        onClick={handleCopy}
        className="flex size-[9vw] sm:size-14 items-center justify-center rounded-full bg-[#4169E1] dark:bg-orange-500 hover:bg-[#365ac0] dark:hover:bg-orange-600"
        aria-label={`Copy ${type}`}
      >
        <buttonProperties.icon className="text-[5vw] sm:text-3xl text-white" />
      </button>
    </div>
  );
}
