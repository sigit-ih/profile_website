import { Link } from "react-router-dom";
// import NavTop from "./NavTop";
import Footer from "./Footer";
// import Date from "../utils/dateDisplay";

export default function Sidebar() {
  return (
    <div className="Sidebar flex flex-col w-0 lg:w-1/5 z-20 bg-gray-50 border-r-4 border-black-200 text-black min-h-screen invisible lg:visible">
      <div className="h-auto p-4">
        {/* <img
          src="/profile.jpg"
          alt="Profile"
          className="rounded-full w-32 mx-auto mb-4"
        /> */}
        <h2 className="text-center text-xl font-bold">Round photo here</h2>
        <h2 className="text-center text-xl font-bold text-orange-400">
          Sigit Ispramono Hadi
        </h2>
        <p className="text-center text-sm text-gray-300">Software Engineer</p>
      </div>
      <nav className="h-full space-y-3 text-sm">
        <Link to="/" className="block hover:text-orange-400 transition">
          Home
        </Link>
        <Link to="/About" className="block hover:text-orange-400 transition">
          About
        </Link>
        <Link to="/Skill" className="block hover:text-orange-400 transition">
          Skill
        </Link>
        {/* <Link to="/Contact" className="block hover:text-orange-400 transition">Contact</Link> */}
      </nav>
      <Footer />
    </div>
  );
}
