"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, ShoppingBag, Heart, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function FeaturedDrop() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 27,
    seconds: 42,
  });

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

  return (
    <section id="drops" className="relative overflow-hidden bg-[#0D0D0D] py-0">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-dots opacity-10" />
      
      <div className="relative z-10">
        {/* Hero Section - Full Width Editorial */}
        <div className="relative min-h-screen">
          {/* Full Bleed Image Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&q=90"
              alt="FLUX NEON NOIR Collection"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex min-h-screen items-end">
            <div className="w-full px-6 pb-20 pt-32 md:px-12 lg:px-20">
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-5 py-2 backdrop-blur-md">
                    <Zap className="h-4 w-4 gradient-flux-text" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      Exclusive Drop
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <Clock className="h-4 w-4 text-white/60" />
                    <span className="text-xs font-bold text-white/80">
                      {String(timeLeft.days).padStart(2, "0")}:{String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-8 font-extrabold uppercase leading-[0.85] tracking-tighter text-white" style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}>
                    NEON
                    <br />
                    NOIR
                  </h2>

                  {/* Description */}
                  <p className="mb-8 max-w-xl text-xl leading-relaxed text-white/80 md:text-2xl">
                    Where Mumbai&apos;s shadows meet glitch-art neon.
                  </p>

                  {/* Stats Row */}
                  <div className="mb-10 flex flex-wrap items-center gap-6 text-white">
                    <div>
                      <div className="text-4xl font-bold gradient-flux-text">250</div>
                      <div className="text-sm uppercase tracking-wider text-white/60">Limited Pieces</div>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div>
                      <div className="text-4xl font-bold gradient-flux-text">₹3,499</div>
                      <div className="text-sm uppercase tracking-wider text-white/60">Starting Price</div>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div>
                      <div className="text-4xl font-bold gradient-flux-text">4.9</div>
                      <div className="text-sm uppercase tracking-wider text-white/60">Rating</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      size="lg"
                      className="gradient-flux group px-10 py-7 text-lg font-black text-black transition-all hover:scale-105 hover:shadow-2xl"
                      aria-label="Shop NEON NOIR Collection"
                    >
                      SHOP NOW
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" aria-hidden="true" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 bg-white/10 px-10 py-7 text-lg font-bold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
                      aria-label="View full catalog"
                      onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      VIEW ALL
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">Scroll</span>
              <div className="h-8 w-px animate-pulse bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </div>
        </div>

        {/* Collection Preview - Premium Redesign */}
        <div className="border-t border-white/10 bg-black px-6 py-32 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Background Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          
          <div className="mx-auto max-w-7xl relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
            >
              <div className="max-w-2xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest gradient-flux-text">
                    Collection
                  </span>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
                >
                  More from{" "}
                  <span className="gradient-flux-text">NEON NOIR</span>
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-white/70 text-lg leading-relaxed"
                >
                  Explore the full collection of limited-edition pieces crafted for the streets
                </motion.p>
              </div>
              
              {/* View All Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all shadow-2xl"
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                      }}
                    />
                    <span className="relative z-10 text-base">View All Products</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Glow on Hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,0,255,0.3)",
                        borderRadius: "9999px",
                      }}
                    />
                  </motion.button>
                </Link>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-lg text-sm text-white whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Browse full catalog with 9+ products
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Product Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { 
                  name: "Cyber Cargo", 
                  price: "₹4,299", 
                  badge: "Best Seller", 
                  badgeColor: "amber",
                  img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&q=80",
                  views: "2.3k",
                  likes: "856"
                },
                { 
                  name: "Flux Cap", 
                  price: "₹1,799", 
                  badge: "Limited", 
                  badgeColor: "red",
                  img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1000&q=80",
                  views: "1.8k",
                  likes: "623"
                },
                { 
                  name: "Glitch Socks", 
                  price: "₹899", 
                  badge: "New", 
                  badgeColor: "green",
                  img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&q=80",
                  views: "1.2k",
                  likes: "445"
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative cursor-pointer"
                >
                  <Link href={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {/* Image Container */}
                    <motion.div 
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900"
                    >
                      <Image
                        src={item.img}
                        alt={`FLUX ${item.name} - Limited edition streetwear`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 + 0.3 }}
                        viewport={{ once: true }}
                        className={`absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase backdrop-blur-xl ${
                          item.badgeColor === 'amber' ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300' :
                          item.badgeColor === 'red' ? 'bg-red-500/20 border border-red-500/40 text-red-300' :
                          'bg-green-500/20 border border-green-500/40 text-green-300'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          item.badgeColor === 'amber' ? 'bg-amber-400' :
                          item.badgeColor === 'red' ? 'bg-red-400' :
                          'bg-green-400'
                        }`} />
                        {item.badge}
                      </motion.div>
                      

                    </motion.div>
                    
                    {/* Product Info */}
                    <div className="space-y-3">
                      <h4 className="text-2xl font-bold text-white group-hover:gradient-flux-text transition-all duration-300 line-clamp-1">
                        {item.name}
                      </h4>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold gradient-flux-text">
                          {item.price}
                        </p>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white text-black font-bold rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:shadow-2xl"
                          aria-label={`Add ${item.name} to cart`}
                        >
                          <ShoppingBag className="w-4 h-4" />
                          <span className="text-sm">Add</span>
                        </motion.button>
                      </div>
                      
                      {/* Animated Underline */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: idx * 0.15 + 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-0.5 gradient-flux rounded-full origin-left group-hover:h-1 transition-all"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Mobile View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center md:hidden"
            >
              <Link href="/products">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full shadow-xl"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
