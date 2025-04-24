import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function CopyToClipboard({ type }) {
  const { t } = useLang();

  const buttonProperties =
    type === "email"
      ? { text: "sigitispramono.h@gmail.com", icon: IoMail }
      : { text: "+62895365302554", icon: FaPhoneAlt };

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
    <div>
      {/* Pesan feedback di tengah atas halaman dengan animasi fade */}
      <div
        className={`absolute top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded bg-gray-200 text-sm text-gray-800 z-50 transition-opacity duration-500 ${
          showFeedback ? "opacity-80" : "opacity-0 pointer-events-none"
        }`}
      >
        {feedback}
      </div>

      {/* Tombol Copy */}
      <button
        type="button"
        onClick={handleCopy}
        className="w-auto font-medium rounded-full text-center justify-items-center p-3 bg-orange-700 hover:bg-orange-800"
      >
        <buttonProperties.icon className="text-3xl sm:text-4xl text-white" />
      </button>
    </div>
  );
}
