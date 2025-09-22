import { useTranslation } from "react-i18next";
import portfolioImage from "../assets/images/projects/Portfolio_Website.png";

const projectImages = [
  portfolioImage,
];

export default function ProjectPage() {
  const { t } = useTranslation();
  const projects = t("project_lists", { returnObjects: true });

  return (
    <div className="project-page flex flex-col h-screen p-[5vw] lg:p-10 pt-[100px] lg:pt-10 overflow-hidden">
      <h2 className="project-title h-auto text-2xl sm:text-3xl font-bold mb-[2.6vw] sm:mb-5 mx-auto text-[#4169E1] dark:text-orange-400">
        {t("project")}
      </h2>
      <div className="project-lists h-[70vh] sm:h-[72vh] md:h-[75vh] lg:h-[82vh] grid grid-cols-1 md:grid-cols-2 gap-6 p-3 overflow-y-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative w-full h-80 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={projectImages[index % projectImages.length]}
              alt={project.title}
            />
            <section
              className="section_description absolute inset-0 flex flex-col w-full bg-black bg-opacity-75
                         transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                         transition-all duration-500 ease-in-out"
            >
              <div className="description-content p-6 pb-0 h-full">
                <h3 className="mb-4 text-xl font-semibold text-orange-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-200">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 p-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="w-full flex">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex-1 text-center py-3 px-4 rounded-bl-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="flex-1 text-center py-3 px-4 rounded-br-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 transition-colors"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
