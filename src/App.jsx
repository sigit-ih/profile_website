import { useState } from "react";
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
import Sidebar from "./components/Sidebar";
import PageWrapper from "./components/PageWrapper";

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
          path="/About"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/Skill"
          element={
            <PageWrapper>
              <SkillPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [preload, setPreload] = useState(true);

  setTimeout(function () {
    setPreload(false);
  }, 2000);

  if (preload) {
    return (
      <div className="preload">
        <h1>
          <strong>Sigit</strong>
          <i> I.H</i>
        </h1>
        <p>─────</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <div className="min-h-screen">
          <div className="flex bg-pink-100 mb-0">
            <Sidebar />
            <div className="ContentSection w-full lg:w-[82%] bg-blue-50 flex flex-col min-h-screen">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
