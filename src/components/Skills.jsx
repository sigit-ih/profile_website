import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const skillsData = [
    {
      title: "HTML",
      icons: FaHtml5,
    },
    {
      title: "CSS",
      icons: FaCss3Alt,
    },
    {
      title: "Javascript",
      icons: IoLogoJavascript,
    },
    {
      title: "PHP",
      icons: FaPhp,
    },
    {
      title: "SASS",
      icons: FaSass,
    },
    {
      title: "Bootstrap",
      icons: FaBootstrap,
    },
    {
      title: "Tailwind",
      icons: RiTailwindCssFill,
    },
    {
      title: "React.js",
      icons: FaReact,
    },
    {
      title: "Git",
      icons: FaGitAlt,
    },
    {
      title: "Python",
      icons: FaPython,
    },
    {
      title: "Flutter",
      icons: FaFlutter,
    },
    {
      title: "MySQL",
      icons: GrMysql,
    },
    {
      title: "PostgreSQL",
      icons: BiLogoPostgresql,
    },
  ];

  return (
    <section id="skills" className="mb-6 h-[30vh] lg:h-[50vh] flex items-center justify-center">
      {/* ada semua item di react-icons */}
      <ul className="flex flex-wrap gap-2 lg:gap-3 items-center justify-center">
        {skillsData.map((item, i) => (
          <li
            key={i}
            className="flex flex-col md:px-1 lg:px-3 md:py-1 items-center justify-center rounded-lg"
          >
            <item.icons className="text-[10vw] lg:text-[5vw] text-orange-500" />
          </li>
        ))}
      </ul>
    </section>
  );
}
