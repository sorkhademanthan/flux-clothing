"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { StoryCard } from "@/types";
import { X, Sparkles } from "lucide-react";

interface ExpandableCardsProps {
  cards: StoryCard[];
}

export function ExpandableCards({ cards }: ExpandableCardsProps) {
  const [active, setActive] = useState<StoryCard | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence mode="wait">
        {active && (
          <>
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-[100]"
              onClick={() => setActive(null)}
            />
            
            {/* Animated Particles in Modal */}
            <div className="fixed inset-0 z-[101] pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight + 100,
                    opacity: 0 
                  }}
                  animate={{ 
                    y: -100,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[110] p-4 md:p-8">
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              className="absolute top-6 right-6 z-[120] group"
              onClick={() => setActive(null)}
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full h-12 w-12 hover:bg-white/20 transition-all"
                >
                  <X className="h-6 w-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.button>

            {/* Modal Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-5xl h-full max-h-[90vh] flex flex-col md:flex-row bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, rgba(255,0,255,0.3), rgba(0,255,255,0.3), rgba(255,0,255,0.3))",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Left Side - Image */}
              <motion.div 
                className="relative w-full md:w-1/2 h-64 md:h-auto"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/20 rounded-full"
                >
                  <Sparkles className="w-4 h-4 gradient-flux-text" />
                  <span className="text-sm font-bold text-white">{active.description}</span>
                </motion.div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div 
                className="flex-1 p-8 md:p-12 overflow-y-auto relative"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Content Container */}
                <div className="space-y-6">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
                      {active.title}
                    </h3>
                    <div className="h-1 w-20 gradient-flux rounded-full" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/80 text-lg leading-relaxed space-y-4 [&>div>p]:mb-4 [&>div>p:last-child]:mb-0"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>

                  {/* Bottom Gradient Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-px w-full gradient-flux origin-left mt-8"
                  />

                  {/* CTA */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
                  >
                    Explore More
                  </motion.button>
                </div>

                {/* Custom Scrollbar Styles */}
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 8px;
                  }
                  div::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                  }
                  div::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #ff00ff, #00ffff);
                    border-radius: 10px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #ff00ff, #00ffff);
                  }
                `}</style>
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setActive(card)}
            className="group cursor-pointer"
          >
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-purple-500/50 transition-colors duration-300"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 blur-xl" />
              </div>
              
              <div className="relative">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full"
                  >
                    <div className="w-1.5 h-1.5 rounded-full gradient-flux animate-pulse" />
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                      {card.description}
                    </span>
                  </motion.div>

                  {/* Click to Expand Hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 shadow-2xl"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span>Click to Explore</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    className="text-3xl font-extrabold text-white mb-2 group-hover:gradient-flux-text transition-all duration-300"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="h-1 gradient-flux rounded-full group-hover:w-20 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
