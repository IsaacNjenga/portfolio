import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start hidden and to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide in
        exit={{ opacity: 0, x: -100 }} // Fade out and slide out left
        transition={{ duration: 0.5 }} // Smooth animation
      >
        <div>Portfolio</div>
      </motion.div>
    </>
  );
}

export default Portfolio;
