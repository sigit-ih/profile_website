import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LanguageContext";

const certificates = [
  {
    id: 1,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1EDIVFywkn_ZRQxrHWJO7uzTbhUCozSvm",
    fileUrl:
      "https://drive.google.com/file/d/1EDIVFywkn_ZRQxrHWJO7uzTbhUCozSvm/preview",
  },
  {
    id: 2,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=11CrJoYDJz4_4lQmjzqmbAwST_URV5zn2",
    fileUrl:
      "https://drive.google.com/file/d/11CrJoYDJz4_4lQmjzqmbAwST_URV5zn2/preview",
  },
  {
    id: 3,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1GnOBC8aZR5AopJPMPWBMYIVABrYSOaI0",
    fileUrl:
      "https://drive.google.com/file/d/1GnOBC8aZR5AopJPMPWBMYIVABrYSOaI0/preview",
  },
  {
    id: 4,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1dzyO2WeMOsEUEuir3JYP8fjH-et4_4lH",
    fileUrl:
      "https://drive.google.com/file/d/1dzyO2WeMOsEUEuir3JYP8fjH-et4_4lH/preview",
  },
  {
    id: 5,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1mAS_omfj9UkAoMLrQ3rRiOKxJxpAkWmJ",
    fileUrl:
      "https://drive.google.com/file/d/1mAS_omfj9UkAoMLrQ3rRiOKxJxpAkWmJ/preview",
  },
  {
    id: 6,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1RHrSZ0r2a3Su8buQq1-rWfWyLI5NkJ1Z",
    fileUrl:
      "https://drive.google.com/file/d/1RHrSZ0r2a3Su8buQq1-rWfWyLI5NkJ1Z/preview",
  },
  {
    id: 7,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1wP2-R4LmHaFkLxhI4obUHNd2k2IB4BTB",
    fileUrl:
      "https://drive.google.com/file/d/1wP2-R4LmHaFkLxhI4obUHNd2k2IB4BTB/preview",
  },
  {
    id: 8,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1vubsXzXxYVeynOPvWW00UDdUtQ_2N20d",
    fileUrl:
      "https://drive.google.com/file/d/1vubsXzXxYVeynOPvWW00UDdUtQ_2N20d/preview",
  },
  {
    id: 9,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1jrYmpIoz61jcSMghl17zq-XixJkXZD0q",
    fileUrl:
      "https://drive.google.com/file/d/1jrYmpIoz61jcSMghl17zq-XixJkXZD0q/preview",
  },
  {
    id: 10,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1vWGcrag9tU-Idg9bj957qUxboQ1Lm4G3",
    fileUrl:
      "https://drive.google.com/file/d/1vWGcrag9tU-Idg9bj957qUxboQ1Lm4G3/preview",
  },
  {
    id: 11,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1XrCscWh9Va-fXyt2G_j6pUSEW6VPFq78",
    fileUrl:
      "https://drive.google.com/file/d/1XrCscWh9Va-fXyt2G_j6pUSEW6VPFq78/preview",
  },
  {
    id: 12,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1bafl3a2b9XvmydIp2muaxg0xrUYH7hPl",
    fileUrl:
      "https://drive.google.com/file/d/1bafl3a2b9XvmydIp2muaxg0xrUYH7hPl/preview",
  },
  {
    id: 13,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=15hQB7hM8G72aF5lnLTcIkHil8Wvh3cPY",
    fileUrl:
      "https://drive.google.com/file/d/15hQB7hM8G72aF5lnLTcIkHil8Wvh3cPY/preview",
  },
  {
    id: 14,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1ftA51e9u2FbqyQFhalt-ldEqgXyDd5ke",
    fileUrl:
      "https://drive.google.com/file/d/1ftA51e9u2FbqyQFhalt-ldEqgXyDd5ke/preview",
  },
  {
    id: 15,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1g38RzP3-zXq4JWYoW_5DBziAcTIO0vZC",
    fileUrl:
      "https://drive.google.com/file/d/1g38RzP3-zXq4JWYoW_5DBziAcTIO0vZC/preview",
  },
  {
    id: 16,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1LLWkOV0shhD1SwylLRBXVMl4cqNvN8k8",
    fileUrl:
      "https://drive.google.com/file/d/1LLWkOV0shhD1SwylLRBXVMl4cqNvN8k8/preview",
  },
  {
    id: 17,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1bp31BiUoHQe-Vcz49DDIX1uHJKiIJnFo",
    fileUrl:
      "https://drive.google.com/file/d/1bp31BiUoHQe-Vcz49DDIX1uHJKiIJnFo/preview",
  },
  {
    id: 18,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1pz5c139dhcTL5bbvX2C4SxKuZcRuOvoF",
    fileUrl:
      "https://drive.google.com/file/d/1pz5c139dhcTL5bbvX2C4SxKuZcRuOvoF/preview",
  },
  {
    id: 19,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1FRIromSoDsmIr6ws0D-KNDo8pF2C07SZ",
    fileUrl:
      "https://drive.google.com/file/d/1FRIromSoDsmIr6ws0D-KNDo8pF2C07SZ/preview",
  },
  {
    id: 20,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1svFaGWqYOuxpFh7Qhux0wJPZdtpXFP-a",
    fileUrl:
      "https://drive.google.com/file/d/1svFaGWqYOuxpFh7Qhux0wJPZdtpXFP-a/preview",
  },
];

export default function Certificates() {
  const { t } = useLang();
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
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const handleModalClick = (e) => {
    if (e.target === modalRef.current) {
      handleCloseModal();
    }
  };

  // Disable background scroll when modal is open
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
    <section
      id="certificate"
      className="flex flex-col h-[40%] sm:h-[50%] lg:h-auto overflow-hidden"
    >
      <h2 className="text-2xl font-semibold mb-2">{t.certificate}</h2>

      {/* Grid Thumbnail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 overflow-y-auto p-2 bg-gray-200 dark:bg-gray-800 rounded grow place-items-center">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            className="h-auto min-w-64 sm:min-w-64 md:min-w-56 bg-white dark:bg-gray-700 shadow rounded flex items-center justify-center cursor-pointer"
            onClick={() => handleOpenModal(i)}
          >
            <img
              src={cert.thumbnailUrl}
              alt={`Certificate ${cert.id}`}
              className="w-full h-full object-cover rounded"
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
            ×
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous certificate"
            className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-gray-300 p-2"
          >
            ←
          </button>

          {/* Certificate Content */}
          <div className="w-4/5 h-full flex justify-center items-center">
            <iframe
              src={certificates[selectedIndex].fileUrl}
              alt={`Certificate ${selectedIndex + 1}`}
              allow="autoplay"
              className="w-full h-full shadow-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next certificate"
            className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 text-3xl text-white hover:text-gray-300 p-2"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
