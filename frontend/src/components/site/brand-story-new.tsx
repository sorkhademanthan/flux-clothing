"use client";

import { ArrowRight, ChevronRight, Sparkles, Zap } from "lucide-react";
import { ExpandableCards } from "@/components/ui/expandable-card-new";
import { motion } from "motion/react";
import Link from "next/link";
import { STORY_CARDS, JOURNEY_STEPS, SOCIAL_LINKS } from "@/constants/brand-story";
import { handleAnchorClick } from "@/lib/scroll-utils";
import { useState, useEffect } from "react";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function BrandStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#0D0D0D]">
      <div className="absolute inset-0 grid-dots opacity-10" />

      <div className="relative z-10">
        <OpeningStatement />
        <JourneySection />
        <DeepDiveSection />
        <FinalCTA />
      </div>
    </section>
  );
}

function OpeningStatement() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[85vh] flex items-center border-b border-white/10 px-6 py-20 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* EPIC Cinematic Background */}
      <div className="absolute inset-0">
        {/* Radial light rays */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 60%),
                        radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at 20% 80%, rgba(168,85,247,0.1) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Cinematic light beams */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{
              left: `${10 + i * 15}%`,
              transform: `rotate(${i % 2 === 0 ? 5 : -5}deg)`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Floating orbs with depth */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 gradient-flux rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 gradient-flux rounded-full opacity-15 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Particle field */}
        <FloatingParticles count={40} />
        
        {/* 3D Grid with perspective */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: 'perspective(600px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
          animate={{
            backgroundPositionY: ['0px', '60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 mx-auto max-w-7xl w-full text-center"
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      >
        {/* Museum-quality badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="mb-12 inline-flex items-center gap-3 relative"
        >
          {/* Rotating glow */}
          <motion.div
            className="absolute inset-0 rounded-full gradient-flux opacity-30 blur-2xl"
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <div className="relative px-8 py-4 rounded-full bg-black/80 border-2 border-white/30 backdrop-blur-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Sparkles className="h-6 w-6 gradient-flux-text inline mr-3" />
            </motion.div>
            <span className="text-base font-black uppercase tracking-[0.3em] text-white">Our Story</span>
          </div>
        </motion.div>

        {/* EPIC Title with 3D depth */}
        <div className="mb-16 relative">
          {/* Title with cinematic reveal */}
          <motion.h2
            className="font-black uppercase leading-[0.75] tracking-tighter relative"
            style={{ 
              fontSize: "clamp(3rem, 12vw, 10rem)",
              perspective: "1000px",
            }}
          >
            {/* "This is a" - subtle */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="block text-white/50 text-4xl md:text-5xl mb-8"
            >
              This is a
            </motion.div>
            
            {/* "PHYGITAL" - HERO with 3D effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, z: -500 }}
              whileInView={{ opacity: 1, scale: 1, z: 0 }}
              transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="block relative my-6"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.span
                className="block gradient-flux-text relative"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(168,85,247,0.5)",
                    "0 0 40px rgba(168,85,247,0.8)",
                    "0 0 20px rgba(168,85,247,0.5)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                PHYGITAL
              </motion.span>
              {/* 3D shadow layers */}
              <span className="absolute inset-0 gradient-flux-text opacity-30 blur-md" style={{ transform: "translateZ(-20px)" }}>
                PHYGITAL
              </span>
              <span className="absolute inset-0 gradient-flux-text opacity-20 blur-lg" style={{ transform: "translateZ(-40px)" }}>
                PHYGITAL
              </span>
            </motion.div>
            
            {/* "REVOLUTION" */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="block text-white"
            >
              REVOLUTION
            </motion.div>
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mx-auto mt-8 h-1 gradient-flux rounded-full"
            style={{ width: "clamp(200px, 60%, 800px)" }}
          />
        </div>

        {/* Story paragraph with cinematic pacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              FLUX was born on the
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              viewport={{ once: true }}
              className="inline-block relative group"
            >
              <span className="relative z-10 font-bold text-white px-2">streets of Mumbai</span>
              <motion.span
                className="absolute inset-0 gradient-flux rounded-lg opacity-30"
                whileHover={{ opacity: 0.6, scale: 1.05 }}
              />
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              in 2023 with one question:
            </motion.span>
          </p>
          
          {/* The Question - EPIC reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="mt-12 relative"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 gradient-flux opacity-20 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.p
              className="relative text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              whileHover={{
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="gradient-flux-text inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                What if your gear
                <br />
                was a gateway?
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons with Magnetic & Glow Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton>
            <Link 
              href="#journey" 
              onClick={(e) => handleAnchorClick(e, "#journey")}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.5),0_0_60px_rgba(255,0,255,0.3)]"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              <span className="relative">
                Start Your Journey
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-black"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </MagneticButton>

          <MagneticButton>
            <Link 
              href="#story-deep-dive" 
              onClick={(e) => handleAnchorClick(e, "#story-deep-dive")}
              className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative">
                Explore Our Story
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                }}
              />
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/70"
          >
            <span className="text-xs uppercase tracking-wider font-bold">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function JourneySection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  // Fixed particle positions to avoid hydration mismatch
  const particles = [
    { left: 5, top: 10 }, { left: 15, top: 30 }, { left: 25, top: 60 }, { left: 35, top: 20 },
    { left: 45, top: 70 }, { left: 55, top: 40 }, { left: 65, top: 80 }, { left: 75, top: 15 },
    { left: 85, top: 50 }, { left: 12, top: 85 }, { left: 22, top: 45 }, { left: 32, top: 75 },
    { left: 42, top: 25 }, { left: 52, top: 90 }, { left: 62, top: 35 }, { left: 72, top: 65 },
    { left: 82, top: 55 }, { left: 92, top: 22 }, { left: 8, top: 95 }, { left: 18, top: 48 }
  ];
  
  return (
    <div id="journey" className="relative px-6 py-20 md:py-28 md:px-12 lg:px-20 bg-black border-t border-white/10 overflow-hidden">
      {/* Spectacular Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(at 0% 0%, rgba(168,85,247,0.2) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(6,182,212,0.2) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(168,85,247,0.2) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(6,182,212,0.2) 0px, transparent 50%)
            `
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles - Fixed positions */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Epic Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Glowing badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-3 relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full gradient-flux opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <div className="relative px-6 py-3 rounded-full bg-black/50 border border-white/20 backdrop-blur-xl">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="h-5 w-5 gradient-flux-text inline mr-2" />
              </motion.div>
              <span className="text-sm font-bold uppercase tracking-widest text-white">Your Journey Begins</span>
            </div>
          </motion.div>
          
          {/* Massive title with split reveal */}
          <motion.h3 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {["The", "Road", "to", ""].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
                className="inline-block mr-4 md:mr-6"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="inline-block gradient-flux-text"
            >
              PHYGITAL
            </motion.span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            Four simple steps. Infinite possibilities. Your transformation starts here.
          </motion.p>
        </motion.div>

        {/* Revolutionary Timeline Layout */}
        <div className="relative mb-20">
          {/* Animated progress line */}
          <motion.div
            className="absolute left-0 right-0 top-[120px] h-1 hidden lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          >
            <div className="h-full gradient-flux rounded-full relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
              />
            </div>
          </motion.div>

          {/* Journey Steps - Horizontal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {JOURNEY_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === idx;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredStep(idx)}
                  onHoverEnd={() => setHoveredStep(null)}
                  className="relative group"
                >
                  {/* Floating number badge */}
                  <motion.div
                    className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
                    animate={isHovered ? {
                      scale: 1.2,
                      y: -10,
                    } : {
                      scale: 1,
                      y: 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 gradient-flux rounded-full blur-xl opacity-60"
                        animate={{
                          scale: isHovered ? [1, 1.3, 1] : 1,
                        }}
                        transition={{
                          duration: 1,
                          repeat: isHovered ? Infinity : 0,
                        }}
                      />
                      <div className="relative w-16 h-16 rounded-full gradient-flux flex items-center justify-center border-4 border-black">
                        <span className="text-2xl font-black text-black">{step.number}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Main Card */}
                  <motion.div
                    className="relative h-full pt-14 pb-8 px-6 rounded-3xl overflow-hidden"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, rgba(168,85,247,0.1), transparent 70%)`
                      }}
                    />
                    
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.3))",
                        filter: "blur(10px)",
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon with 3D effect */}
                      <motion.div
                        className="mb-6 w-20 h-20 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
                        animate={isHovered ? {
                          rotateY: [0, 360],
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{
                          duration: 0.8,
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h4 className="text-2xl font-bold text-white mb-4 text-center group-hover:gradient-flux-text transition-all duration-300">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-base text-white/60 leading-relaxed text-center group-hover:text-white/90 transition-colors">
                        {step.description}
                      </p>

                      {/* Decorative corner accent */}
                      <motion.div
                        className="absolute bottom-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full border-r-2 border-b-2 border-white/20 rounded-br-xl" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Connection Arrow (desktop only) */}
                  {idx < JOURNEY_STEPS.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-[120px] -right-[12px] z-10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.15, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ChevronRight className="w-8 h-8 text-white/40" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stunning CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] gradient-flux opacity-20 blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          <Link href="/products">
            <motion.button
              className="relative group px-12 py-6 text-lg font-bold rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 gradient-flux"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              
              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full"
                transition={{ duration: 0.8 }}
              />
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-3 text-black">
                Start Your Journey
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function DeepDiveSection() {
  return (
    <div id="story-deep-dive" className="relative px-6 py-20 md:py-28 md:px-12 lg:px-20 border-t border-white/10 bg-black overflow-hidden">
      {/* EPIC Background Effects */}
      <div className="absolute inset-0">
        {/* Radial spotlight */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, rgba(168,85,247,0.3) 0%, transparent 60%),
                        radial-gradient(ellipse at 80% 70%, rgba(6,182,212,0.25) 0%, transparent 50%)`,
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated orbs with depth */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] gradient-flux rounded-full opacity-20 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] gradient-flux rounded-full opacity-15 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Dynamic grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
          animate={{
            backgroundPositionX: ['0px', '80px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="relative z-10">
        {/* EPIC Section Header */}
        <div className="mb-16 text-center">
          {/* Premium badge with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="mb-12 inline-flex items-center gap-3 relative"
          >
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 rounded-full gradient-flux opacity-40 blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative px-8 py-4 rounded-full bg-black/90 border-2 border-white/30 backdrop-blur-2xl">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="inline-block"
              >
                <Sparkles className="h-6 w-6 gradient-flux-text inline mr-3" />
              </motion.div>
              <span className="text-base font-black uppercase tracking-[0.3em] text-white">Deep Dive</span>
            </div>
          </motion.div>
          
          {/* Epic title with 3D text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 
              className="font-black uppercase leading-[0.9] tracking-tighter relative inline-block"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              {/* "Explore Our" */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="block text-white mb-4"
              >
                Explore Our
              </motion.div>
              
              {/* "JOURNEY" - Hero with 3D effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, z: -300 }}
                whileInView={{ opacity: 1, scale: 1, z: 0 }}
                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="block relative"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.span
                  className="block gradient-flux-text relative"
                  animate={{
                    textShadow: [
                      "0 0 30px rgba(168,85,247,0.6)",
                      "0 0 60px rgba(168,85,247,0.9)",
                      "0 0 30px rgba(168,85,247,0.6)",
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  JOURNEY
                </motion.span>
                {/* 3D shadow layers */}
                <span 
                  className="absolute inset-0 gradient-flux-text opacity-30 blur-sm" 
                  style={{ transform: "translateZ(-20px)" }}
                >
                  JOURNEY
                </span>
                <span 
                  className="absolute inset-0 gradient-flux-text opacity-15 blur-md" 
                  style={{ transform: "translateZ(-40px)" }}
                >
                  JOURNEY
                </span>
              </motion.div>
            </h3>
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mx-auto mt-8 h-1 gradient-flux rounded-full"
              style={{ width: "clamp(200px, 50%, 600px)" }}
            />
          </motion.div>
          
          {/* Premium description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Discover the story behind FLUX - from our{" "}
            <span className="text-white font-bold gradient-flux-text">humble beginnings in Mumbai</span>{" "}
            to building a{" "}
            <span className="text-white font-bold gradient-flux-text">global movement</span>.
          </motion.p>
          
          {/* Interactive hint */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2 text-white/60"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>
            <span className="text-sm font-semibold">Click any card to explore deeper</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ✨
            </motion.div>
          </motion.div>
        </div>

        {/* Expandable Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <ExpandableCards cards={STORY_CARDS} />
        </motion.div>

        {/* Premium bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full"
            whileHover={{ 
              scale: 1.05,
              borderColor: "rgba(255,255,255,0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 gradient-flux-text" />
            </motion.div>
            <p className="text-base text-white/70">
              <span className="gradient-flux-text font-black">Pro tip:</span> Each card reveals exclusive insights into our brand philosophy
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <div className="border-t border-white/10 bg-gradient-to-b from-black to-[#0A0A0A] px-6 py-20 md:py-28 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="mx-auto max-w-5xl text-center relative z-10">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Opening Quote Mark */}
          <div className="text-white/20 text-7xl md:text-8xl font-serif leading-none mb-8">
            &ldquo;
          </div>
          
          {/* Main Quote Text */}
          <div className="space-y-4 mb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-white"
            >
              We don't chase trends.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight gradient-flux-text"
            >
              We create movements.
            </motion.p>
          </div>
          
          {/* Closing Quote Mark */}
          <div className="text-white/20 text-7xl md:text-8xl font-serif leading-none mb-12">
            &rdquo;
          </div>
          
          {/* Attribution */}
          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-white/50"
          >
            — The FLUX Manifesto
          </motion.footer>
        </motion.blockquote>
        
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16"
        />
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <Link 
            href="/products"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(90deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%)",
                backgroundSize: "200% 100%",
              }}
            />
            
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.8 }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
              }}
            />
            
            <span className="relative z-10">Shop the Collection</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
          
          {/* Secondary CTA */}
          <a 
            href={SOCIAL_LINKS.discord} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center gap-3 px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-full backdrop-blur-sm hover:border-white/60 hover:bg-white/5 transition-all hover:scale-105"
          >
            <span>Join Our Discord</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
