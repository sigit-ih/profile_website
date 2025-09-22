import { useTranslation } from "react-i18next";

// 1. Impor semua gambar proyek Anda di sini.
// Pastikan path-nya benar dari file ProjectPage.jsx ke folder gambar.
// Asumsi path: src/assets/images/projects/
import portfolioImage from "../assets/images/projects/Portfolio_Website.png";
// Contoh jika ada gambar lain:
// import projectImage2 from "../assets/images/projects/Project_B.png";

// 2. Masukkan gambar yang sudah diimpor ke dalam sebuah array.
// Urutan gambar di sini akan menentukan gambar mana yang ditampilkan untuk setiap proyek.
const projectImages = [
  portfolioImage,
  // projectImage2,
];

export default function ProjectPage() {
  const { t } = useTranslation();
  const projects = t("project_lists", { returnObjects: true });

  return (
    <div className="project-page flex flex-col h-screen p-[5vw] lg:p-10 pt-[100px] lg:pt-10 overflow-hidden">
      <h2 className="project-title h-auto text-2xl sm:text-3xl font-bold mb-[2.6vw] sm:mb-5 mx-auto text-[#4169E1] dark:text-orange-400">
        {t("project")}
      </h2>
      <div className="project-lists h-[70vh] sm:h-[72vh] md:h-[75vh] lg:h-[82vh] grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 p-2 md:p-3 items-stretch overflow-y-auto place-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card flex flex-col rounded-2xl shadow md:shadow-lg text-left justify-start items-start bg-white dark:bg-gray-700"
          >
            {/* 3. Gunakan index dari map untuk mengambil gambar dari array */}
            <img
              className="w-full h-32 object-cover rounded-t"
              src={projectImages[index % projectImages.length]}
              alt={project.title}
            />
            <section className="section_description flex flex-col flex-grow p-[2.7vw] sm:p-5 lg:p-6 w-full">
              <h3 className="h-fit mb-[1.8vw] sm:mb-3 text-[3vw] sm:text-xl lg:text-2xl font-semibold text-[#4169E1] dark:text-orange-400">
                {project.title}
              </h3>
              <p className="h-full mb-[3.2vw] sm:mb-7 text-[2.2vw] sm:text-sm lg:text-[14px] text-gray-400 dark:text-gray-300">
                {project.description}
              </p>
              <div className="h-auto flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[2vw] sm:text-xs lg:text-sm bg-blue-200 dark:bg-orange-200 text-[#003153] dark:text-orange-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            <div className="w-full flex mt-auto">
              <a
                href={project.link}
                target="_blank"
                className="flex-1 py-1 px-2 sm:py-2 sm:px-4 rounded-bl text-center font-semibold text-[2vw] sm:text-xs lg:text-sm text-white bg-[#4169E1] dark:bg-orange-500 hover:bg-blue-700 dark:hover:bg-orange-600 transition-colors"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="flex-1 py-1 px-2 sm:py-2 sm:px-4 rounded-br text-center font-semibold text-[2vw] sm:text-xs lg:text-sm text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}