import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const importAll = (r) =>
  r.keys().map((key, index) => ({
    id: index + 1,
    imageUrl: r(key),
  }));

const certificates = importAll(
  require.context("../assets/images/certs", false, /\.webp$/)
);

export default function Certificates() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalRef = useRef();

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex(
      (certIndex) => (certIndex - 1 + certificates.length) % certificates.length
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((certIndex) => (certIndex + 1) % certificates.length);
  };

  const handleModalClick = (e) => {
    if (e.target === modalRef.current) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex]);

  return (
    <section className="certificates flex flex-col h-[50vh] lg:h-auto overflow-hidden">
      <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-semibold mb-2">
        {t("certificate")}
      </h2>

      {/* Grid Thumbnail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 overflow-y-auto p-2 rounded grow place-items-center">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            className="w-auto sm:min-w-64 md:min-w-56 h-auto shadow rounded flex items-center justify-center cursor-pointer"
            onClick={() => handleOpenModal(i)}
          >
            <img
              src={cert.imageUrl}
              alt={`Certificate ${cert.id}`}
              className="w-full h-full object-cover rounded"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={handleModalClick}
        >
          {/* Position Indicator */}
          <div className="absolute top-4 left-4 text-white text-sm font-semibold">
            {selectedIndex + 1} / {certificates.length}
          </div>

          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            aria-label="Close modal"
            className="absolute top-4 right-6 text-3xl text-white hover:text-gray-300"
          >
            <FiX />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous certificate"
            className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-gray-300 p-2"
          >
            <FiChevronLeft />
          </button>

          {/* Certificate Content */}
          <div className="w-9/12 sm:w-5/6 h-[95%] bg-transparent rounded shadow overflow-hidden flex justify-center items-center p-2">
            <img
              src={certificates[selectedIndex].imageUrl}
              alt={`Certificate ${certificates[selectedIndex].id}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next certificate"
            className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-gray-300 p-2"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
