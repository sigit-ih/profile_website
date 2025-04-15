import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function HomePage() {
  return (
    //bg-[url(../images/hexagon-corner.png)]
    <div className="HomePage relative flex h-full bg-blue-100 p-20 items-center overflow-hidden">
      <div className="relative z-10 w-full md:w-1/2 pr-20 text-right">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-orange-400">
          Sigit Ispramono Hadi
        </h1>
        <h2 className="text-lg md:text-xl lg:text-3xl font-semibold mb-2">
          Software Engineer
        </h2>
        <br></br>
        <ul className="text-sm md:text-md lg:text-lg text-right">
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
        <br></br>
        <a
          href="https://drive.google.com/file/d/1ZRUs_Z55RFQQEzrEiHdwjTMMh-8A4HlD/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm md:text-md lg:text-lg px-7 py-2"
          >
            <h4 className="flex justify-end items-center gap-2">
              Download CV
              <FaFileAlt className="text-white" />
            </h4>
          </button>
        </a>
      </div>
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 flex items-center text-center">
        <div className="size-auto border-l-2 border-black pl-20">
          <div className="w-80 h-80 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// export default function HomePage() {
//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-white p-6">
//       <div className="flex flex-row items-center w-full max-w-5xl border shadow-lg rounded-xl overflow-hidden">
//         {/* Left Section */}
//         <div className="w-2/3 p-8">
//           <h1 className="text-3xl font-bold text-blue-600">
//             Sigit Ispramono Hadi
//           </h1>
//           <h2 className="text-xl text-gray-800 mt-1">Software Engineer</h2>
//           <hr className="border-t-2 border-blue-600 w-4/5 my-4" />
//           <ul className="text-gray-700 space-y-2 text-lg">
//             <li>📞 +62 895 3653 02554</li>
//             <li>📧 sigitispramono.h@gmail.com</li>
//             <li>🔍 Sigit Ispramono Hadi</li>
//             <li>🌐 Sigit Ispramono Hadi</li>
//           </ul>
//           <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700">
//             Download CV
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/3 h-full relative bg-white flex items-center justify-center">
//           <div className="absolute top-0 bottom-0 left-0 w-3 bg-blue-600 rotate-12 origin-left"></div>
//           <div className="absolute top-0 bottom-0 left-1 w-3 bg-orange-500 rotate-12 origin-left"></div>
//           <div className="relative z-10">
//             <div className="w-32 h-32 bg-black rounded-full"></div>
//             <div className="w-32 h-40 bg-black rounded-b-full mt-4"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function HomePage() {
//   return (
//     <div className="HomePage relative h-screen bg-white overflow-hidden">
//       {/* Konten Kiri */}
//       <div className="relative z-10 p-10 w-full md:w-1/2 text-left items-center justify-center">
//         <h1 className="text-3xl font-bold text-orange-400">
//           Sigit Ispramono Hadi
//         </h1>
//         {/* <p className="text-gray-600 mt-2">
//           A passionate frontend developer who loves clean UI and efficient code.
//         </p> */}
//         <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
//         <p>Email: sigitispramono.h@gmail.com</p>
//         <p>Phone: +62 895 3653 02554</p>
//         <p>
//           LinkedIn:{" "}
//           <a
//             href="https://www.linkedin.com/in/sigitispramonohadi/"
//             className="hover:underline"
//           >
//             Sigit Ispramono Hadi
//           </a>
//         </p>
//         <p>
//           GitHub:{" "}
//           <a href="https://github.com/sigit-ih" className="hover:underline">
//             Sigit Ispramono Hadi
//           </a>
//         </p>
//         <p>Download CV</p>
//       </div>

//       {/* <div className="absolute top-0 right-0 w-full md:w-1/2 h-full border-2 border-solid border-blue-950 bg-blue-300 clip-diagonal-left z-0 flex items-center justify-center">
//         <span className="text-xl font-bold">Image here</span>
//       </div> */}

//       {/* Gambar / Background diagonal */}
//       <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-300 clip-diagonal-right z-0 flex items-center justify-center">
//         <span className="text-xl font-bold">Image here</span>
//       </div>
//     </div>
//   );
// }
