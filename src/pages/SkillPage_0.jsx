import Skills from "../components/Skills";
import { useLang } from "../context/LanguageContext";

export default function SkillPage() {
  const { t } = useLang();
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=1ZRUs_Z55RFQQEzrEiHdwjTMMh-8A4HlD`;
  return (
    <div className="skill relative flex flex-col lg:flex-row h-full items-center text-center p-20 bg-indigo-100 ">
      <div className="skill-top lg:w-0 visible lg:invisible">
        <h2 className="text-[5vw] lg:text-[30vw] font-bold text-orange-400">
          {t.skill}
        </h2>
      </div>
      <div className="skill-left lg:w-1/2 lg:min-w-[50vh] h-auto flex flex-col">
        <Skills />
        {/* <section
          id="certificate"
          className="flex flex-col max-h-[50vh]"
        >
          <h2 className="text-xl font-semibold mb-2">{t.certificate}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-y-auto h-screen lg:max-h-[30vh] p-2 bg-gray-200">
            <div className="bg-gray-500">
            <iframe
              className="absolute top-0 right-0 w-full h-full"
              src="https://drive.google.com/file/d/1pz5c139dhcTL5bbvX2C4SxKuZcRuOvoF/preview"
              allow="autoplay"
            ></iframe> 
            <iframe
              src="https://drive.google.com/file/d/1ZRUs_Z55RFQQEzrEiHdwjTMMh-8A4HlD/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe> 
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
            <div className="relative flex w-full max-h-[90vh] md:max-h-[75vh] lg:max-h-[14vh] overflow-hidden items-center justify-center">
              <img
                className="w-full block"
                src={thumbnailUrl}
                alt="PDF Preview"
              />
            </div>
          </div>
        </section> */}
        <section id="certificate" className="max-h-screen p-4 overflow-hidden">
          <h2 className="text-xl font-semibold mb-2">{t.certificate}</h2>
          <div className="overflow-y-auto h-screen lg:max-h-[30vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2 bg-gray-200">
            {/* Sertifikat item */}
            <div className="h-[15vh] bg-white shadow rounded flex items-center justify-center">
              <img
                src={thumbnailUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[15vh] bg-white shadow rounded flex items-center justify-center">
              <img
                src={thumbnailUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[15vh] bg-white shadow rounded flex items-center justify-center">
              <img
                src={thumbnailUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[15vh] bg-white shadow rounded flex items-center justify-center">
              <img
                src={thumbnailUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[15vh] bg-white shadow rounded flex items-center justify-center">
              <img
                src={thumbnailUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[15vh] bg-white shadow rounded flex items-center justify-center">
              <img
                src={thumbnailUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[15vh] bg-white shadow rounded flex items-center justify-center">
              <img
                src={thumbnailUrl}
                alt="Certificate"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tambahkan lebih banyak item di sini */}
          </div>
        </section>
      </div>
      <div className="skill-right w-0 lg:w-1/2 h-0 lg:h-auto invisible lg:visible">
        <h2 className="text-[4vw] font-bold text-orange-400">{t.skill}</h2>
      </div>
    </div>
  );
}
