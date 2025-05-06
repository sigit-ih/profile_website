import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificates() {
  const { t } = useLang();

  const certificates = [
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1EDIVFywkn_ZRQxrHWJO7uzTbhUCozSvm",
      preview:
        "https://drive.google.com/file/d/1EDIVFywkn_ZRQxrHWJO7uzTbhUCozSvm/preview"
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=11CrJoYDJz4_4lQmjzqmbAwST_URV5zn2",
      preview:
        "https://drive.google.com/file/d/11CrJoYDJz4_4lQmjzqmbAwST_URV5zn2/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1GnOBC8aZR5AopJPMPWBMYIVABrYSOaI0",
      preview:
        "https://drive.google.com/file/d/1GnOBC8aZR5AopJPMPWBMYIVABrYSOaI0/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1dzyO2WeMOsEUEuir3JYP8fjH-et4_4lH",
      preview:
        "https://drive.google.com/file/d/1dzyO2WeMOsEUEuir3JYP8fjH-et4_4lH/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1mAS_omfj9UkAoMLrQ3rRiOKxJxpAkWmJ",
      preview:
        "https://drive.google.com/file/d/1mAS_omfj9UkAoMLrQ3rRiOKxJxpAkWmJ/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1RHrSZ0r2a3Su8buQq1-rWfWyLI5NkJ1Z",
      preview:
        "https://drive.google.com/file/d/1RHrSZ0r2a3Su8buQq1-rWfWyLI5NkJ1Z/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1wP2-R4LmHaFkLxhI4obUHNd2k2IB4BTB",
      preview:
        "https://drive.google.com/file/d/1wP2-R4LmHaFkLxhI4obUHNd2k2IB4BTB/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1vubsXzXxYVeynOPvWW00UDdUtQ_2N20d",
      preview:
        "https://drive.google.com/file/d/1vubsXzXxYVeynOPvWW00UDdUtQ_2N20d/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1jrYmpIoz61jcSMghl17zq-XixJkXZD0q",
      preview:
        "https://drive.google.com/file/d/1jrYmpIoz61jcSMghl17zq-XixJkXZD0q/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1vWGcrag9tU-Idg9bj957qUxboQ1Lm4G3",
      preview:
        "https://drive.google.com/file/d/1vWGcrag9tU-Idg9bj957qUxboQ1Lm4G3/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1XrCscWh9Va-fXyt2G_j6pUSEW6VPFq78",
      preview:
        "https://drive.google.com/file/d/1XrCscWh9Va-fXyt2G_j6pUSEW6VPFq78/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1bafl3a2b9XvmydIp2muaxg0xrUYH7hPl",
      preview:
        "https://drive.google.com/file/d/1bafl3a2b9XvmydIp2muaxg0xrUYH7hPl/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=15hQB7hM8G72aF5lnLTcIkHil8Wvh3cPY",
      preview:
        "https://drive.google.com/file/d/15hQB7hM8G72aF5lnLTcIkHil8Wvh3cPY/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1ftA51e9u2FbqyQFhalt-ldEqgXyDd5ke",
      preview:
        "https://drive.google.com/file/d/1ftA51e9u2FbqyQFhalt-ldEqgXyDd5ke/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1g38RzP3-zXq4JWYoW_5DBziAcTIO0vZC",
      preview:
        "https://drive.google.com/file/d/1g38RzP3-zXq4JWYoW_5DBziAcTIO0vZC/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1LLWkOV0shhD1SwylLRBXVMl4cqNvN8k8",
      preview:
        "https://drive.google.com/file/d/1LLWkOV0shhD1SwylLRBXVMl4cqNvN8k8/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1bp31BiUoHQe-Vcz49DDIX1uHJKiIJnFo",
      preview:
        "https://drive.google.com/file/d/1bp31BiUoHQe-Vcz49DDIX1uHJKiIJnFo/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1pz5c139dhcTL5bbvX2C4SxKuZcRuOvoF",
      preview:
        "https://drive.google.com/file/d/1pz5c139dhcTL5bbvX2C4SxKuZcRuOvoF/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1FRIromSoDsmIr6ws0D-KNDo8pF2C07SZ",
      preview:
        "https://drive.google.com/file/d/1FRIromSoDsmIr6ws0D-KNDo8pF2C07SZ/preview",
    },
    {
      thumbnail:
        "https://drive.google.com/thumbnail?id=1svFaGWqYOuxpFh7Qhux0wJPZdtpXFP-a",
      preview:
        "https://drive.google.com/file/d/1svFaGWqYOuxpFh7Qhux0wJPZdtpXFP-a/preview",
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (previewUrl) => {
    setSelectedCertificate(previewUrl);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section
      id="certificate"
      className="flex flex-col h-[40%] sm:h-[50%] lg:h-auto overflow-hidden"
    >
      <h2 className="text-2xl font-semibold mb-2">{t.certificate}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 overflow-y-auto p-2 bg-gray-200 rounded grow place-items-center">
        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => openModal(cert.preview)}
            className="cursor-pointer h-auto min-w-64 sm:min-w-64 md:min-w-56 bg-white shadow rounded flex items-center justify-center"
          >
            <img
              src={cert.thumbnail}
              alt={`Certificate ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg overflow-hidden w-[90%] h-[90%] max-w-4xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Supaya klik dalam modal tidak menutup
            >
              <iframe
                src={selectedCertificate}
                title="Certificate Preview"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
