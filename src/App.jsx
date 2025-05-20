import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./assets/styles/App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
// Warna Light Mode
// Fungsi      | Nama Warna      | Kode Hex  | Catatan
// Teks utama  | Prussian Blue   | #003153   | Biru tua klasik, tegas tapi tidak terlalu gelap
// Heading     | Navy Blue       | #000080   | Biru navy yang kuat dan elegan
// Aksen teks  | Royal Blue      | #4169E1   | Biru agak cerah untuk menonjolkan bagian tertentu
// Warna Dark Mode
// Fungsi      | Nama Warna      | Kode Hex  | Catatan
// Teks utama  | Vivid Orange    | #FF6F00   | Oranye menyala yang tetap enak dilihat di dark mode
// Heading     | Tangerine       | #FF9500   | Oranye yang sedikit lebih soft untuk judul
// Aksen teks  | Burnt Orange    | #CC5500   | Lebih gelap, cocok untuk penekanan
// Warna Gabungan
// #0DA900 : Warna gabungan dari teks utama
// #D40058 : Warna gabungan dari heading
// #D92687 : Warna gabungan dari aksen teks

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/skill"
          element={
            <PageWrapper>
              <SkillPage />
            </PageWrapper>
          }
        />
        <Route
          path="/project"
          element={
            <PageWrapper>
              <ProjectPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplashScreen(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (splashScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
        <span className="w-16 h-16 rounded-full animate-spin border-4 border-[#4169E1] dark:border-orange-400 border-t-transparent dark:border-t-transparent"></span>
        <span className="text-xl text-[#4169E1] dark:text-orange-400 mt-5 flex items-center">
          Now Loading
          <span className="flex ml-2 space-x-1">
            <span className="animate-bounce [animation-delay:0s]">.</span>
            <span className="animate-bounce [animation-delay:0.1s]">.</span>
            <span className="animate-bounce [animation-delay:0.2s]">.</span>
          </span>
        </span>
      </div>
    );
  }

  return (
    <Router>
      <div className="text-center text-[#003153] dark:text-gray-300 bg-white dark:bg-gray-900">
        <div className="relative flex flex-col lg:flex-row w-full h-auto max-h-screen mb-0">
          <Navbar />
          <div className="content-container flex-grow min-w-0 flex flex-col lg:overflow-hidden">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}
