import {
  FaPhoneAlt,
  FaLinkedin,
  FaLinkedinIn,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import ProfileImage from "../assets/images/profile.png";
import CopyToClipboard from "../components/CopyToClipboard";

export default function HomePage() {
  return (
    <div className="home-page relative flex flex-col md:flex-row h-screen lg:h-full bg-white dark:bg-gray-900 p-[4vw] pt-[50px] lg:pt-0 items-center overflow-hidden">
      <div className="home-top w-full md:w-0 h-auto flex items-center justify-center visible md:invisible mt-14 md:mt-0">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-[40vw] h-[40vw] sm:size-60 object-cover object-[center_30%] rounded-full"
        />
      </div>
      <div className="home-left w-full md:w-1/2 md:min-w-min pt-[1vw] sm:pt-6 md:pr-[4.5vw] md:border-r-2 md:border-black md:text-right">
        <h1 className="text-[6vw] sm:text-5xl md:text-4xl font-bold text-[#4169E1] dark:text-orange-400">
          Sigit Ispramono Hadi
        </h1>
        <h2 className="text-[4vw] sm:text-3xl md:text-2xl text-gray-600 dark:text-gray-400 font-semibold mb-[3vw] sm:mb-7">
          Software Engineer
        </h2>
        <ul className="text-md sm:text-lg md:text-md mb-4 hidden md:block">
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <span>sigitispramono.h@gmail.com </span>
              <IoMail className="text-[#4169E1] dark:text-orange-400" />
            </h4>
          </li>
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <span>+62895365302554 </span>
              <FaPhoneAlt className="text-[#4169E1] dark:text-orange-400" />
            </h4>
          </li>
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <a
                href="https://www.linkedin.com/in/sigitispramonohadi/"
                className="underline lg:no-underline hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Sigit Ispramono Hadi
              </a>
              <FaLinkedin className="text-[#4169E1] dark:text-orange-400" />
            </h4>
          </li>
          <li>
            <h4 className="flex justify-end items-center gap-2">
              <a
                href="https://github.com/sigit-ih"
                className="underline lg:no-underline hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Sigit Ispramono Hadi
              </a>
              <FaGithub className="text-[#4169E1] dark:text-orange-400" />
            </h4>
          </li>
        </ul>

        {/* Grid tombol kontak di mobile */}
        <div className="grid md:hidden grid-cols-4 w-fit min-w-[50vw] sm:min-w-80 gap-1 sm:gap-3 mx-auto mb-[4vw]">
          {/* Email Copy Button */}
          <CopyToClipboard type="email" />
          {/* Phone Copy Button */}
          <CopyToClipboard type="phone" />
          {/* LinkedIn Button as <a> styled */}
          <div className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/sigitispramonohadi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-[9vw] sm:size-14 items-center justify-center rounded-full bg-[#4169E1] dark:bg-orange-500 hover:bg-[#365ac0] dark:hover:bg-orange-600"
            >
              <FaLinkedinIn className="text-[5vw] sm:text-3xl text-white" />
            </a>
          </div>
          {/* GitHub Button as <a> styled */}
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/sigit-ih"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-[9vw] sm:size-14 items-center justify-center rounded-full bg-[#4169E1] dark:bg-orange-500 hover:bg-[#365ac0] dark:hover:bg-orange-600"
            >
              <TbBrandGithubFilled className="text-[5vw] sm:text-3xl text-white" />
            </a>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1ZRUs_Z55RFQQEzrEiHdwjTMMh-8A4HlD/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 w-full sm:w-auto rounded-lg font-medium text-[3vw] sm:text-lg md:text-md sm:px-16 md:px-6 py-[2vw] sm:py-3 text-white bg-[#4169E1] dark:bg-orange-500 hover:bg-[#365ac0] dark:hover:bg-orange-600 text-center justify-center"
          aria-label="Preview CV"
        >
          Preview CV
          <FaFileAlt className="text-white" />
        </a>
      </div>

      <div className="home-right hidden md:flex w-1/2 min-w-min h-full items-center pl-[4.5vw]">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-80 h-80 object-cover object-[center_30%] rounded-full"
        />
      </div>
    </div>
  );
}
