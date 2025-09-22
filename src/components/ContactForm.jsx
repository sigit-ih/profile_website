import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFeedback(t("submit_success"));
        form.reset();
      } else {
        setFeedback(t("submit_failed"));
      }
    } catch (error) {
      setFeedback(t("submit_failed"));
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
    <div className="relative w-full">
      <div
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-2 sm:py-3 bg-[#4169E1] dark:bg-orange-500 text-white dark:text-gray-800 text-sm sm:text-base font-semibold shadow-lg z-50 rounded-lg transition-all duration-500 ease-in-out ${
          showFeedback
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {feedback}
      </div>

      <form
        action="https://formspree.io/f/xeorjkpg"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="first_name"
            placeholder={t("first_name")}
            required
            className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 rounded-md focus:ring-2 focus:ring-[#4169E1] dark:focus:ring-orange-400 outline-none"
          />
          <input
            type="text"
            name="last_name"
            placeholder={t("last_name")}
            required
            className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 rounded-md focus:ring-2 focus:ring-[#4169E1] dark:focus:ring-orange-400 outline-none"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder={t("email")}
          required
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 rounded-md focus:ring-2 focus:ring-[#4169E1] dark:focus:ring-orange-400 outline-none"
        />
        <textarea
          name="message"
          placeholder={t("message")}
          rows="4"
          required
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 rounded-md focus:ring-2 focus:ring-[#4169E1] dark:focus:ring-orange-400 outline-none"
        ></textarea>
        <button
          type="submit"
          className="font-semibold py-3 rounded-lg bg-[#4169E1] dark:bg-orange-400 hover:bg-[#365ac0] dark:hover:bg-orange-500 text-white dark:text-gray-800 transition"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
