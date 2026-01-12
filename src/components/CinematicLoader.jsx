// components/CinematicLoader.jsx
import { motion } from "framer-motion";

const CinematicLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="text-center text-white">
        {/* LOGO / TITLE */}
        <motion.h1
          className="text-4xl md:text-6xl tracking-widest font-semibold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          EUPHO
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          className="mt-4 text-sm md:text-base uppercase tracking-[0.4em] text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          LIGHT · MOTION · MAGIC
        </motion.p>

        {/* LOADING BAR */}
        <motion.div
          className="mt-10 h-[2px] w-40 bg-white/20 overflow-hidden mx-auto"
        >
          <motion.div
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CinematicLoader;
