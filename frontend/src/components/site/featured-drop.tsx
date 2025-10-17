"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame, useInView } from "motion/react";

// Counter Animation Component
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

// Flip Number Component for Countdown
function FlipNumber({ value }: { value: number }) {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 300);
    }
  }, [value, prevValue]);

  return (
    <div className="relative inline-block w-12 h-14 perspective-1000">
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-lg flex items-center justify-center text-3xl font-bold text-white border border-white/20"
        animate={isFlipping ? { rotateX: [0, 90] } : {}}
        transition={{ duration: 0.15 }}
      >
        {String(prevValue).padStart(2, "0")}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-lg flex items-center justify-center text-3xl font-bold text-white border border-white/20"
        initial={{ rotateX: -90 }}
        animate={isFlipping ? { rotateX: 0 } : { rotateX: -90 }}
        transition={{ duration: 0.15, delay: 0.15 }}
      >
        {String(value).padStart(2, "0")}
      </motion.div>
    </div>
  );
}

export default function FeaturedDrop() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 27,
    seconds: 42,
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLowTime, setIsLowTime] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  // Check if time is running low (less than 1 day)
  useEffect(() => {
    setIsLowTime(timeLeft.days === 0 && timeLeft.hours < 24);
  }, [timeLeft]);
  
  // Mouse follow effect for spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} id="drops" className="relative overflow-hidden bg-black py-16 lg:py-20">
      {/* Animated gradient orbs with pulse */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" 
      />
      
      {/* Cursor follow spotlight (desktop only) */}
      <motion.div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-[100px]" />
      </motion.div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Split Layout - Clear Visual Hierarchy */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20 items-center mb-20">
          {/* Left Content - Principle: Clarity & Visual Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Badge - Enhanced with shimmer and rotating gradient */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-sm border rounded-full text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors relative overflow-hidden group"
            >
              {/* Rotating gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent, rgba(168,85,247,0.5), rgba(6,182,212,0.5), transparent)",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-[1px] rounded-full bg-black/90 backdrop-blur-sm" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full"
                animate={{
                  x: ["100%", "-100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                }}
              />
              
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <Sparkles className="h-4 w-4 gradient-flux-text" />
              </motion.div>
              <span className="gradient-flux-text relative z-10">Exclusive Drop</span>
            </motion.div>

            {/* Title - Enhanced with stagger word reveal and gradient animation */}
            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="block text-white"
                >
                  NEON
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="block gradient-flux-text relative -mt-4 md:-mt-6 lg:-mt-8"
                >
                  NOIR
                  {/* Animated gradient underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="h-2 gradient-flux mt-2 rounded-full origin-left"
                  />
                </motion.span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
              >
                Where Mumbai&apos;s shadows meet glitch-art neon. Limited edition streetwear that defines the future.
              </motion.p>
            </div>

            {/* Countdown Timer - Enhanced with flip animation and urgency glow */}
            <motion.div 
              className="inline-flex items-center gap-5 px-7 py-5 bg-white/5 backdrop-blur-md border rounded-2xl relative overflow-hidden"
              animate={isLowTime ? {
                boxShadow: [
                  "0 0 20px rgba(239,68,68,0.3)",
                  "0 0 40px rgba(239,68,68,0.5)",
                  "0 0 20px rgba(239,68,68,0.3)"
                ]
              } : {}}
              transition={isLowTime ? { duration: 2, repeat: Infinity } : {}}
              style={{
                borderColor: isLowTime ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.1)"
              }}
            >
              {/* Urgency pulse effect */}
              {isLowTime && (
                <motion.div
                  className="absolute inset-0 bg-red-500/10"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              )}
              
              <Clock className="h-5 w-5 text-purple-400 relative z-10" />
              <div className="flex gap-4 relative z-10">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Mins' },
                  { value: timeLeft.seconds, label: 'Secs' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <FlipNumber value={item.value} />
                    <div className="text-xs text-white/50 font-medium uppercase tracking-wider mt-2">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats - Enhanced with counter animation and pulse */}
            <div className="flex flex-wrap items-center gap-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-5xl font-bold gradient-flux-text mb-1"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <AnimatedCounter value={250} />
                </motion.div>
                <div className="text-sm text-white/60 font-medium">Limited Pieces</div>
              </motion.div>
              
              <div className="h-12 w-px bg-white/10" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-bold gradient-flux-text mb-1">₹3,499</div>
                <div className="text-sm text-white/60 font-medium">Starting Price</div>
              </motion.div>
              
              <div className="h-12 w-px bg-white/10" />
              
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                </motion.div>
                <div className="text-5xl font-bold gradient-flux-text">4.9</div>
              </motion.div>
            </div>

            {/* CTAs - Enhanced with magnetic hover, ripple, and glow */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="gradient-flux text-black px-10 py-7 text-base font-bold rounded-xl shadow-2xl relative overflow-hidden group"
                  >
                    {/* Animated glow pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(168,85,247,0.3)",
                          "0 0 40px rgba(168,85,247,0.5)",
                          "0 0 20px rgba(168,85,247,0.3)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.6 }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center">
                      SHOP NOW
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </Link>
              
              <Link href="/products">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/20 bg-white/5 text-white px-10 py-7 text-base font-bold rounded-xl hover:bg-white/10 hover:border-white/30 transition-all relative overflow-hidden group"
                  >
                    {/* Hover shimmer */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.6 }}
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                      }}
                    />
                    <span className="relative z-10">VIEW COLLECTION</span>
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Right Image - Enhanced with 3D tilt, parallax, and glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
            style={{ y }}
          >
            <motion.div 
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                rotateX: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Animated glow border */}
              <motion.div
                className="absolute -inset-[2px] rounded-3xl"
                animate={{
                  background: [
                    "linear-gradient(0deg, rgba(168,85,247,0.5), rgba(6,182,212,0.5))",
                    "linear-gradient(120deg, rgba(168,85,247,0.5), rgba(6,182,212,0.5))",
                    "linear-gradient(240deg, rgba(168,85,247,0.5), rgba(6,182,212,0.5))",
                    "linear-gradient(360deg, rgba(168,85,247,0.5), rgba(6,182,212,0.5))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-[2px] rounded-3xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=90"
                    alt="FLUX NEON NOIR Collection - Limited Edition Streetwear"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </motion.div>
            
            {/* Animated decorative orbs */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-40 h-40 gradient-flux rounded-full opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>


      </div>
    </section>
  );
}
