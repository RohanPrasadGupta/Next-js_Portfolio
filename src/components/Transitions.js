import React from "react";
import { motion } from "framer-motion";

/**
 * Transitions
 * Animated page transition curtains.
 * Optimized colors to match neutral glass surfaces + accent palette.
 * Layer order: base surface (light/dark), accent 2 (emerald), accent 1 (indigo/fuchsia)
 */
const layers = [
  {
    z: 30,
    className: "bg-light dark:bg-dark", // base surface
    delay: 0,
    exit: true,
  },
  {
    z: 20,
    className:
      "bg-gradient-to-tr from-indigo-500/70 via-fuchsia-500/60 to-rose-500/60 dark:from-indigo-600/70 dark:via-fuchsia-600/60 dark:to-rose-600/60",
    delay: 0.08,
  },
  {
    z: 10,
    className: "bg-emerald-400/70 dark:bg-emerald-500/70",
    delay: 0.16,
  },
];

const Transitions = () => {
  return (
    <>
      {layers.map((l, i) => (
        <motion.div
          key={i}
          className={`fixed top-0 bottom-0 right-full w-screen h-screen pointer-events-none will-change-transform z-${l.z} ${l.className}`}
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ delay: l.delay, duration: 0.75, ease: "easeInOut" }}
          {...(l.exit && {
            exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
          })}
        />
      ))}
    </>
  );
};

export default Transitions;
