import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches;

const routes = ["/", "/about", "/skill", "/project"];

export default function PageWrapper({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = routes.indexOf(location.pathname);

  const [direction, setDirection] = useState(0); 
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < routes.length - 1) {
        setDirection(1); 
        navigate(routes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setDirection(-1); 
        navigate(routes[currentIndex - 1]);
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const variants = {
    initial: {
      opacity: 0,
			x: isMobile ? (direction * 100) : 800,
    },
    animate: {
      opacity: 1,
      x: 0,
			y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: isMobile ? direction * -100 : -800,
      transition: { duration: 0.15, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      {...handlers}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="lg:h-screen lg:overflow-hidden touch-pan-x"
    >
      {children}
    </motion.div>
  );
}