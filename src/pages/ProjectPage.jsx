export default function ProjectPage({ t }) {
  const projects = t("project_lists", { returnObjects: true });

  return (
    <div className="project-page flex flex-col h-screen p-[5vw] lg:p-10 pt-[100px] lg:pt-10 overflow-hidden">
      <h2 className="project-title h-auto text-2xl sm:text-3xl font-bold mb-[2.6vw] sm:mb-5 mx-auto text-center text-[#4169E1] dark:text-orange-400">
        {t("project")}
      </h2>
      <div className="project-lists h-[70vh] sm:h-[72vh] md:h-[75vh] lg:h-[82vh] grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 p-2 md:p-3 items-stretch overflow-y-auto place-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col max-h-[45vw] sm:max-h-[40vh] bg-gray-100 dark:bg-gray-700 border-2 border-gray-900 dark:border-white rounded-2xl shadow md:shadow-lg p-[3vw] sm:p-6"
          >
            <h3 className="h-fit mb-[1.8vw] sm:mb-3 text-[3.2vw] sm:text-lg lg:text-xl font-semibold text-[#4169E1] dark:text-orange-400">
              {project.title}
            </h3>
            <p className="h-full text-[2.6vw] sm:text-sm lg:text-[14px] text-gray-700 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            <div className="h-auto flex flex-wrap mt-3 gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-[2.2vw] sm:text-xs lg:text-sm bg-blue-200 dark:bg-orange-200 text-[#003153] dark:text-orange-700 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="h-auto mt-[2.5vw] sm:mt-4 flex gap-2 sm:gap-4">
              <a
                href={project.link}
                target="_blank"
                className="text-[2.6vw] sm:text-sm lg:text-base font-semibold underline text-[#4169E1] dark:text-orange-400"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-[2.6vw] sm:text-sm lg:text-base font-semibold underline"
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
