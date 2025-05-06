import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaPhp, FaSass, FaBootstrap, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

const skillsData = [
  {
    title: "HTML",
    icon: FaHtml5,
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
  },
  {
    title: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    title: "PHP",
    icon: FaPhp,
  },
  {
    title: "SASS",
    icon: FaSass,
  },
  {
    title: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    title: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    title: "React.js",
    icon: FaReact,
  },
  {
    title: "Git",
    icon: FaGitAlt,
  },
  {
    title: "Python",
    icon: FaPython,
  },
  {
    title: "Flutter",
    icon: FaFlutter,
  },
  {
    title: "MySQL",
    icon: GrMysql,
  },
  {
    title: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
];

export default function Skills() {
  return (
    <section className="skills mb-6 min-h-[30%] lg:min-h-[40%] flex items-center justify-center">
      {/* ada semua item di react-icons */}
      <ul className="flex flex-wrap gap-4 md:gap-3 items-center justify-center">
        {skillsData.map((item, i) => (
          <li
            key={i}
            className="flex flex-col md:px-1 lg:px-3 md:py-1 items-center justify-center rounded-lg hover:bg-[#003153] dark:hover:bg-orange-600 hover:shadow-lg"
          >
            <item.icon className="text-[12vw] p-[1vw] sm:p-2 sm:text-7xl text-[#4169E1] dark:text-orange-400" title={item.title}/>
          </li>
        ))}
      </ul>
    </section>
  );
}
