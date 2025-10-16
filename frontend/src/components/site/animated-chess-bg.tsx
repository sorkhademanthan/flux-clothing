"use client";
import { motion } from "framer-motion";

export default function AnimatedChessBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="grid-chess absolute inset-0 opacity-[0.18]" />
      <motion.div
        aria-hidden
        className="beam absolute left-[-10%] top-[-10%] h-[150%] w-[40%] rotate-12"
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="beam absolute right-[-10%] top-[-20%] h-[160%] w-[35%] -rotate-6"
        initial={{ x: 120 }}
        animate={{ x: -80 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <div className="noise absolute inset-0 mix-blend-soft-light opacity-30" />
      <motion.div
        aria-hidden
        className="glare pointer-events-none absolute inset-0"
        initial={{ opacity: 0.25 }}
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
