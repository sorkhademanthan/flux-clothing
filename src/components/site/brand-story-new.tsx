"use client";

import { ArrowRight, ChevronRight, Sparkles, Zap } from "lucide-react";
import { ExpandableCards } from "@/components/ui/expandable-card";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { STORY_CARDS, JOURNEY_STEPS, SOCIAL_LINKS } from "@/constants/brand-story";
import { handleAnchorClick } from "@/lib/scroll-utils";
import { useRef, useState } from "react";
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex items-center border-b border-white/10 px-6 py-32 md:px-12 lg:px-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <FloatingParticles count={30} />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl"
        />
        
        {/* Grid Lines Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Eyebrow with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 gradient-flux-text" />
          <p className="text-sm font-bold uppercase tracking-widest text-white/80">Our Story</p>
        </motion.div>

        {/* Main Headline with Stagger Animation */}
        <div className="mb-12 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-extrabold uppercase leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="block text-white"
            >
              This is a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="block gradient-flux-text"
            >
              Phygital
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="block text-white"
            >
              Revolution
            </motion.span>
          </motion.h2>
        </div>

        {/* Description with Highlight and Interactive Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-2xl font-light leading-relaxed text-white/80 md:text-3xl">
            FLUX was born on the{" "}
            <motion.span 
              className="font-bold text-white relative inline-block cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">streets of Mumbai</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>{" "}
            in 2023 with one question:
          </p>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl md:text-4xl font-extrabold relative group cursor-default"
          >
            <motion.span
              className="gradient-flux-text inline-block"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(255,0,255,0.5)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              What if your gear was a gateway?
            </motion.span>
            <motion.span
              className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.p>
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
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-wider font-bold">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function JourneySection() {
  return (
    <div id="journey" className="relative px-6 py-32 md:px-12 lg:px-20 bg-black/40">
      {/* Subtle particle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticles count={15} />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-bold uppercase tracking-widest gradient-flux-text"
          >
            Your Journey
          </motion.p>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-white md:text-5xl mb-4"
          >
            How FLUX <span className="gradient-flux-text">Works</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            From choosing your gear to shaping the future - here&apos;s your path to joining the phygital revolution
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-default"
              >
                <motion.div 
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(255,0,255,0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full p-8 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm hover:border-white/20 transition-colors relative overflow-hidden"
                >
                  {/* Animated gradient on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(600px at var(--mouse-x) var(--mouse-y), rgba(255,0,255,0.05), transparent 40%)"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-flux flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-black font-extrabold text-lg">{step.number}</span>
                    </motion.div>
                    <motion.div 
                      className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-extrabold text-white mb-3 group-hover:gradient-flux-text transition-all duration-300">{step.title}</h4>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{step.description}</p>
                  </div>
                </motion.div>
                {idx < JOURNEY_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-white/20" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/#shop" 
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("shop");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-flux text-black font-bold rounded-full hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,255,0.4)]"
          >
            Browse Collections
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function DeepDiveSection() {
  return (
    <div id="story-deep-dive" className="relative px-6 py-32 md:px-12 lg:px-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="relative z-10">
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/5 px-6 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <p className="text-sm font-bold uppercase tracking-widest gradient-flux-text">Deep Dive</p>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-white md:text-6xl lg:text-7xl mb-6"
          >
            Explore Our{" "}
            <span className="gradient-flux-text">Journey</span>
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Discover the story behind FLUX - from our humble beginnings in Mumbai 
            to building a global movement. <span className="text-white font-semibold">Click any card</span> to dive deeper.
          </motion.p>

          {/* Visual Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 mx-auto w-24 h-1 gradient-flux rounded-full"
          />
        </motion.div>

        {/* Enhanced Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ExpandableCards cards={STORY_CARDS} />
        </motion.div>

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm">
            <span className="gradient-flux-text font-bold">Pro tip:</span> Each card reveals exclusive insights into our brand philosophy
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function FinalCTA() {
  // Split text into words for animation
  const line1Words = ["We", "don't", "chase", "trends."];
  const line2Words = ["We", "create", "movements."];
  
  return (
    <div className="border-t border-white/10 bg-black px-6 py-32 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <blockquote>
          {/* Opening Quote */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block text-white/40 text-6xl md:text-8xl font-serif mb-4"
          >
            &ldquo;
          </motion.span>
          
          {/* First Line - Word by Word */}
          <div className="mb-4">
            <p 
              className="font-extrabold uppercase leading-[0.9] tracking-tighter text-white inline" 
              style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
            >
              {line1Words.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2 + (idx * 0.15),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-4 md:mr-6"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
          
          {/* Second Line - Word by Word with Gradient */}
          <div>
            <p 
              className="font-extrabold uppercase leading-[0.9] tracking-tighter inline" 
              style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
            >
              {line2Words.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.8 + (idx * 0.15),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  viewport={{ once: true }}
                  className="inline-block mr-4 md:mr-6 gradient-flux-text"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </div>
          
          {/* Closing Quote */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
            className="inline-block text-white/40 text-6xl md:text-8xl font-serif ml-2"
          >
            &rdquo;
          </motion.span>
          
          {/* Animated Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-1 gradient-flux rounded-full mx-auto mt-12 mb-8"
            style={{ width: "clamp(200px, 50%, 600px)" }}
          />
          
          {/* Footer - Letter by Letter */}
          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-white/40 mb-16"
          >
            {"— The FLUX Manifesto".split("").map((char, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 2.2 + (idx * 0.03) }}
                viewport={{ once: true }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.footer>
        </blockquote>
        
        {/* CTA Buttons with Stagger */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/#shop" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("shop");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                }}
              />
              <span className="relative z-10">Shop the Collection</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              
              {/* Glow on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,0,255,0.3)",
                  borderRadius: "9999px",
                }}
              />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3.15 }}
            viewport={{ once: true }}
          >
            <a 
              href={SOCIAL_LINKS.discord} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 overflow-hidden"
            >
              {/* Gradient Border Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500"
                style={{
                  background: "linear-gradient(90deg, rgba(255,0,255,0.3), rgba(0,255,255,0.3))",
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <span className="relative z-10">Join Our Discord</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
