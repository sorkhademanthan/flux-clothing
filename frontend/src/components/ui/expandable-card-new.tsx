"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { StoryCard } from "@/types";
import { X, Sparkles, ArrowRight, Zap } from "lucide-react";

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
            {/* Premium Backdrop */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/80 z-[100]"
              onClick={() => setActive(null)}
            />
            
            {/* Floating particles in modal */}
            <div className="fixed inset-0 z-[101] pointer-events-none overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: i % 2 === 0 ? 
                      "linear-gradient(135deg, #a855f7, #06b6d4)" : 
                      "linear-gradient(135deg, #06b6d4, #a855f7)",
                  }}
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight + 100,
                    opacity: 0,
                    scale: Math.random() * 0.5 + 0.5,
                  }}
                  animate={{ 
                    y: -100,
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
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
            {/* Premium Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute top-8 right-8 z-[120] group"
              onClick={() => setActive(null)}
            >
              <div className="relative">
                {/* Pulsing glow */}
                <motion.div
                  className="absolute inset-0 rounded-full gradient-flux opacity-50 blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative flex items-center justify-center bg-white/10 backdrop-blur-2xl border-2 border-white/30 rounded-full h-14 w-14 hover:bg-white/20 transition-colors"
                >
                  <X className="h-7 w-7 text-white" />
                </motion.div>
              </div>
            </motion.button>

            {/* EPIC Modal Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-6xl h-full max-h-[90vh] flex flex-col md:flex-row bg-black border-2 border-white/20 rounded-3xl overflow-hidden shadow-2xl relative"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-60 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(6,182,212,0.5), rgba(168,85,247,0.5))",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "200% 0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Left Side - Image with parallax */}
              <motion.div 
                className="relative w-full md:w-1/2 h-80 md:h-auto overflow-hidden"
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                <motion.img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/60 to-transparent" />
                
                {/* Premium floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-8 left-8"
                >
                  <motion.div
                    className="inline-flex items-center gap-3 px-6 py-3 bg-black/60 backdrop-blur-2xl border-2 border-white/30 rounded-full relative overflow-hidden"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "linear"
                      }}
                    />
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-5 h-5 gradient-flux-text relative z-10" />
                    </motion.div>
                    <span className="text-sm font-black text-white uppercase tracking-wider relative z-10">
                      {active.description}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Glowing orb effect */}
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-64 h-64 gradient-flux rounded-full opacity-30 blur-3xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Right Side - Premium Content */}
              <motion.div 
                className="flex-1 p-8 md:p-12 overflow-y-auto relative"
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              >
                {/* Epic title */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight gradient-flux-text">
                    {active.title}
                  </h3>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="h-1.5 w-24 gradient-flux rounded-full origin-left"
                  />
                </motion.div>

                {/* Content with stagger */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-white/80 text-lg md:text-xl leading-relaxed space-y-6 mb-12"
                >
                  {typeof active.content === "function" ? active.content() : active.content}
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="h-px w-full gradient-flux origin-left mb-8"
                />

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-full overflow-hidden"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 gradient-flux"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 text-lg">Explore More</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full opacity-0 blur-xl"
                      whileHover={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>

                {/* Custom Scrollbar */}
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 10px;
                  }
                  div::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                    margin: 20px 0;
                  }
                  div::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #a855f7, #06b6d4);
                    border-radius: 10px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #a855f7, #06b6d4);
                    opacity: 0.8;
                  }
                `}</style>
              </motion.div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* REDESIGNED CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            onClick={() => setActive(card)}
            className="group cursor-pointer"
          >
            <motion.div 
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative h-[500px] overflow-hidden rounded-3xl border-2 border-white/10 bg-black/60 backdrop-blur-sm hover:border-white/30 transition-all duration-500"
            >
              {/* Animated gradient border glow */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={{ opacity: 0 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(6,182,212,0.4))",
                  }}
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(6,182,212,0.4))",
                      "linear-gradient(225deg, rgba(6,182,212,0.4), rgba(168,85,247,0.4))",
                      "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(6,182,212,0.4))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              
              <div className="relative h-full flex flex-col">
                {/* Image */}
                <div className="relative h-full overflow-hidden">
                  <motion.img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
                  
                  {/* Premium badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-6 left-6"
                  >
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-xl border border-white/30 rounded-full"
                      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full gradient-flux"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-xs font-black text-white/90 uppercase tracking-widest">
                        {card.description}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Explore overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      {/* Pulsing glow */}
                      <motion.div
                        className="absolute inset-0 gradient-flux rounded-full blur-2xl opacity-60"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="relative px-8 py-4 bg-white text-black font-black rounded-full flex items-center gap-3 shadow-2xl">
                        <Zap className="w-5 h-5" />
                        <span className="text-lg">Click to Explore</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0 0 20px rgba(255,255,255,0.5)"
                    }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ delay: idx * 0.15 + 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="h-1.5 gradient-flux rounded-full group-hover:w-32 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 gradient-flux opacity-0 group-hover:opacity-20 blur-3xl rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
