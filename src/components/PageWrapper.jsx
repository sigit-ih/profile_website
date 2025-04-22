// components/PageWrapper.js
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: 50, // mulai dari kanan (ubah -50 untuk kiri)
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -50, // keluar ke kiri
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
      className="w-full h-full lg:overflow-hidden"
    >
      {children}
    </motion.div>
  );
}