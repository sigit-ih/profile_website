import { useState } from "react";
import { useLang } from "../context/LanguageContext";

const certificates = [
  {
		id: 1,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1EDIVFywkn_ZRQxrHWJO7uzTbhUCozSvm",
    previewUrl:
      "https://drive.google.com/file/d/1EDIVFywkn_ZRQxrHWJO7uzTbhUCozSvm/preview",
  },
  {
		id: 2,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=11CrJoYDJz4_4lQmjzqmbAwST_URV5zn2",
    previewUrl:
      "https://drive.google.com/file/d/11CrJoYDJz4_4lQmjzqmbAwST_URV5zn2/preview",
  },
  {
		id: 3,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1GnOBC8aZR5AopJPMPWBMYIVABrYSOaI0",
    previewUrl:
      "https://drive.google.com/file/d/1GnOBC8aZR5AopJPMPWBMYIVABrYSOaI0/preview",
  },
  {
		id: 4,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1dzyO2WeMOsEUEuir3JYP8fjH-et4_4lH",
    previewUrl:
      "https://drive.google.com/file/d/1dzyO2WeMOsEUEuir3JYP8fjH-et4_4lH/preview",
  },
  {
		id: 5,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1mAS_omfj9UkAoMLrQ3rRiOKxJxpAkWmJ",
    previewUrl:
      "https://drive.google.com/file/d/1mAS_omfj9UkAoMLrQ3rRiOKxJxpAkWmJ/preview",
  },
  {
		id: 6,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1RHrSZ0r2a3Su8buQq1-rWfWyLI5NkJ1Z",
    previewUrl:
      "https://drive.google.com/file/d/1RHrSZ0r2a3Su8buQq1-rWfWyLI5NkJ1Z/preview",
  },
  {
		id: 7,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1wP2-R4LmHaFkLxhI4obUHNd2k2IB4BTB",
    previewUrl:
      "https://drive.google.com/file/d/1wP2-R4LmHaFkLxhI4obUHNd2k2IB4BTB/preview",
  },
  {
		id: 8,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1vubsXzXxYVeynOPvWW00UDdUtQ_2N20d",
    previewUrl:
      "https://drive.google.com/file/d/1vubsXzXxYVeynOPvWW00UDdUtQ_2N20d/preview",
  },
  {
		id: 9,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1jrYmpIoz61jcSMghl17zq-XixJkXZD0q",
    previewUrl:
      "https://drive.google.com/file/d/1jrYmpIoz61jcSMghl17zq-XixJkXZD0q/preview",
  },
  {
		id: 10,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1vWGcrag9tU-Idg9bj957qUxboQ1Lm4G3",
    previewUrl:
      "https://drive.google.com/file/d/1vWGcrag9tU-Idg9bj957qUxboQ1Lm4G3/preview",
  },
  {
		id: 11,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1XrCscWh9Va-fXyt2G_j6pUSEW6VPFq78",
    previewUrl:
      "https://drive.google.com/file/d/1XrCscWh9Va-fXyt2G_j6pUSEW6VPFq78/preview",
  },
  {
		id: 12,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1bafl3a2b9XvmydIp2muaxg0xrUYH7hPl",
    previewUrl:
      "https://drive.google.com/file/d/1bafl3a2b9XvmydIp2muaxg0xrUYH7hPl/preview",
  },
  {
		id: 13,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=15hQB7hM8G72aF5lnLTcIkHil8Wvh3cPY",
    previewUrl:
      "https://drive.google.com/file/d/15hQB7hM8G72aF5lnLTcIkHil8Wvh3cPY/preview",
  },
  {
		id: 14,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1ftA51e9u2FbqyQFhalt-ldEqgXyDd5ke",
    previewUrl:
      "https://drive.google.com/file/d/1ftA51e9u2FbqyQFhalt-ldEqgXyDd5ke/preview",
  },
  {
		id: 15,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1g38RzP3-zXq4JWYoW_5DBziAcTIO0vZC",
    previewUrl:
      "https://drive.google.com/file/d/1g38RzP3-zXq4JWYoW_5DBziAcTIO0vZC/preview",
  },
  {
		id: 16,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1LLWkOV0shhD1SwylLRBXVMl4cqNvN8k8",
    previewUrl:
      "https://drive.google.com/file/d/1LLWkOV0shhD1SwylLRBXVMl4cqNvN8k8/preview",
  },
  {
		id: 17,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1bp31BiUoHQe-Vcz49DDIX1uHJKiIJnFo",
    previewUrl:
      "https://drive.google.com/file/d/1bp31BiUoHQe-Vcz49DDIX1uHJKiIJnFo/preview",
  },
  {
		id: 18,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1pz5c139dhcTL5bbvX2C4SxKuZcRuOvoF",
    previewUrl:
      "https://drive.google.com/file/d/1pz5c139dhcTL5bbvX2C4SxKuZcRuOvoF/preview",
  },
  {
		id: 19,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1FRIromSoDsmIr6ws0D-KNDo8pF2C07SZ",
    previewUrl:
      "https://drive.google.com/file/d/1FRIromSoDsmIr6ws0D-KNDo8pF2C07SZ/preview",
  },
  {
		id: 20,
    thumbnailUrl:
      "https://drive.google.com/thumbnail?id=1svFaGWqYOuxpFh7Qhux0wJPZdtpXFP-a",
    previewUrl:
      "https://drive.google.com/file/d/1svFaGWqYOuxpFh7Qhux0wJPZdtpXFP-a/preview",
  },
];

export default function Certificates() {
  const { t } = useLang();

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  return (
    <section
      id="certificate"
      className="flex flex-col h-[40%] sm:h-[50%] lg:h-auto overflow-hidden"
    >
      <h2 className="text-2xl font-semibold mb-2">{t.certificate}</h2>

      {/* Grid Thumbnail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 overflow-y-auto p-2 bg-gray-200 rounded grow place-items-center">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            className="h-auto min-w-64 sm:min-w-64 md:min-w-56 bg-white shadow rounded flex items-center justify-center cursor-pointer"
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded shadow-lg w-11/12 md:w-3/4 lg:w-2/3 h-5/6 p-4 flex flex-col">
            {/* Tombol Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-gray-900"
            >
              ×
            </button>

            {/* Sertifikat */}
            <div className="flex-grow flex items-center justify-center">
              <iframe
                src={certificates[selectedIndex].previewUrl}
                title="Certificate Preview"
                className="w-full h-full rounded"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            {/* Panah Navigasi */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="text-xl bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                className="text-xl bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
