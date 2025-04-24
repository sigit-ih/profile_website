import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import CopyToClipboard from "../components/CopyToClipboard";

export default function HomePage() {
  return (
    //bg-[url(../images/hexagon-corner.png)]
    <div id="home-page" className="relative flex flex-col md:flex-row h-screen lg:h-full bg-blue-100 p-[4vw] md:p-[2vw] items-center overflow-hidden">
      <div id="home-top" className="w-full md:w-0 h-full flex items-center text-center justify-center visible md:invisible mt-14 md:mt-0">
        <div className="size-auto">
          <div className="w-60 h-60 bg-black rounded-full"></div>
        </div>
      </div>
      <div id="home-left" className="w-full md:w-1/2 md:min-w-min py-10 md:pr-[4.5vw] md:border-r-2 md:border-black text-center md:text-right">
        <h1 className="text-4xl sm:text-5xl md:text-4xl mb-2 md:mb-0 font-bold text-orange-400">
          Sigit Ispramono Hadi
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold mb-[5vw] sm:mb-10">
          Software Engineer
        </h2>
        <ul className="text-md sm:text-lg md:text-md mb-4 hidden md:block">
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <span>sigitispramono.h@gmail.com </span>
              <IoMail className="text-orange-500" />
            </h4>
          </li>
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <span>+62 895 3653 02554 </span>
              <FaPhoneAlt className="text-orange-500" />
            </h4>
          </li>
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <a
                href="https://www.linkedin.com/in/sigitispramonohadi/"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Sigit Ispramono Hadi
              </a>
              <FaLinkedin className="text-orange-500" />
            </h4>
          </li>
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <a
                href="https://github.com/sigit-ih"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Sigit Ispramono Hadi
              </a>
              <FaGithub className="text-orange-500" />
            </h4>
          </li>
        </ul>
        <div className="grid md:hidden grid-flow-cols grid-cols-4 text-md sm:text-lg mb-[5vw] sm:mb-10 px-[12vw] sm:px-[20vw] gap-3 sm:gap-5">
          <CopyToClipboard type={"email"} />
          <CopyToClipboard type={"phone"} />
          <a
            href="https://www.linkedin.com/in/sigitispramonohadi/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="w-auto font-medium rounded-full text-center justify-items-center p-3 bg-orange-700 hover:bg-orange-800 "
            >
              <h4 className="flex justify-end items-center">
                <FaLinkedinIn className="text-3xl sm:text-4xl text-white" />
              </h4>
            </button>
          </a>
          <a
            href="https://github.com/sigit-ih"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="w-auto font-medium rounded-full text-center justify-items-center p-3 bg-orange-700 hover:bg-orange-800 "
            >
              <h4 className="flex justify-end items-center">
                <TbBrandGithubFilled className="text-3xl sm:text-4xl text-white" />
              </h4>
            </button>
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1ZRUs_Z55RFQQEzrEiHdwjTMMh-8A4HlD/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="w-full sm:w-auto font-medium rounded-lg text-md sm:text-lg md:text-md text-center justify-items-center py-3 sm:px-16 md:px-6 lg:py-2 text-white bg-orange-700 hover:bg-orange-800 "
          >
            <h4 className="flex justify-end items-center gap-2">
              Download CV
              <FaFileAlt className="text-white" />
            </h4>
          </button>
        </a>
      </div>
      <div id="home-right" className="w-0 md:w-1/2 md:min-w-min h-full flex items-center text-center invisible md:visible">
        <div className="size-auto pl-[4.5vw]">
          <div className="w-80 h-80 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}