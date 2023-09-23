import React from "react";
import { motion } from "framer-motion";
import { AnimateLines } from "../GlobalStyles/Animation";

export const LandingHeroLine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="255"
      height="17"
      viewBox="0 0 255 17"
      fill="none"
    >
      <motion.path variants={AnimateLines} initial="hidden" animate="show"
        d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
        stroke="#FF26B9"
        stroke-width="5"
      />
    </svg>
  );
};
