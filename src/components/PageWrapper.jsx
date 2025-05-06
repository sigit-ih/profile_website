// components/PageWrapper.js
import { motion } from "framer-motion";

const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

const variants = {
  initial: {
    opacity: 0,
    ...(isMobile ? { y: 100 } : { x: 100 }),
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    ...(isMobile ? { y: -100 } : { x: -100 }),
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="lg:h-screen lg:overflow-hidden"
    >
      {children}
    </motion.div>
  );
}