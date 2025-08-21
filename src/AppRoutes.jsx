import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
// import ContactPage from "./pages/ContactPage";
import PageWrapper from "./components/PageWrapper";

const routesData = [
  { path: "/", Component: HomePage },
  { path: "/about", Component: AboutPage },
  { path: "/skill", Component: SkillPage },
  { path: "/project", Component: ProjectPage },
  // { path: "/contact", Component: ContactPage },
];

function AppRoutes({ t }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routesData.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PageWrapper>
                <route.Component t={t} />
              </PageWrapper>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;