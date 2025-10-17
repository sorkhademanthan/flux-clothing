"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Star, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/constants/products";
import { SOCIAL_LINKS } from "@/constants/brand-story";
import { motion } from "motion/react";
import { useState } from "react";

export default function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  return (
    <section id="shop" className="relative overflow-hidden bg-black px-6 py-20 md:py-28 md:px-12 lg:px-20">
      {/* EPIC Background */}
      <div className="absolute inset-0">
        {/* Radial spotlight */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 50% 20%, rgba(168,85,247,0.25) 0%, transparent 60%),
                        radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.2) 0%, transparent 50%)`,
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
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] gradient-flux rounded-full opacity-15 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Dynamic grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* EPIC Section Header */}
        <div className="mb-16 text-center">
          {/* Premium Badge */}
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
              <span className="text-base font-black uppercase tracking-[0.3em] text-white">Shop the Collection</span>
            </div>
          </motion.div>
          
          {/* Epic Title */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-black uppercase leading-[0.9] tracking-tighter relative"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              <span className="block text-white mb-3">The</span>
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
                CATALOG
              </motion.span>
            </motion.h2>
            
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mx-auto mt-8 h-1 gradient-flux rounded-full"
              style={{ width: "clamp(150px, 40%, 400px)" }}
            />
          </motion.div>
          
          {/* Premium Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Every piece tells a story.{" "}
            <span className="text-white font-bold gradient-flux-text">Find yours.</span>
          </motion.p>
          
          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Blockchain Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Limited Editions</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>8.7K+ Tribe Members</span>
            </div>
          </motion.div>
        </div>

        {/* PREMIUM Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link 
                href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative overflow-hidden rounded-3xl border-2 border-white/10 bg-black/60 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] block"
              >
                {/* Animated gradient border glow */}
                <motion.div 
                  className="absolute -inset-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10 blur-xl"
                  animate={hoveredProduct === product.id ? {
                    background: [
                      "linear-gradient(135deg, rgba(168,85,247,0.6), rgba(6,182,212,0.6))",
                      "linear-gradient(225deg, rgba(6,182,212,0.6), rgba(168,85,247,0.6))",
                      "linear-gradient(315deg, rgba(168,85,247,0.6), rgba(6,182,212,0.6))",
                      "linear-gradient(135deg, rgba(168,85,247,0.6), rgba(6,182,212,0.6))",
                    ],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Product Image Area */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
                  {/* Product Image with enhanced zoom */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.category} - ${product.badge}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Premium badge with animation */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-4 top-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full gradient-flux px-4 py-2 text-xs font-black text-black uppercase tracking-[0.15em] shadow-lg backdrop-blur-sm"
                    >
                      <motion.span
                        animate={hoveredProduct === product.id ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        {product.badge}
                      </motion.span>
                    </motion.div>
                  </motion.div>

                  {/* Stock Indicator - Enhanced */}
                  {!product.inStock && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <div className="rounded-full bg-white px-8 py-4 text-sm font-black text-black uppercase tracking-wider shadow-2xl">
                          GONE FOREVER
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                  
                  {/* Corner accent glow */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 gradient-flux opacity-0 group-hover:opacity-30 blur-3xl rounded-full"
                    animate={hoveredProduct === product.id ? { scale: [1, 1.5, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* PREMIUM Product Info */}
                <div className="p-8">
                  {/* Category with icon */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full gradient-flux" />
                    <span className="text-xs uppercase tracking-[0.15em] text-white/50 font-black">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Product Name with hover effect */}
                  <motion.h3 
                    className="mb-4 text-2xl font-black text-white line-clamp-1 group-hover:gradient-flux-text transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0 0 20px rgba(168,85,247,0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.name}
                  </motion.h3>

                  {/* Enhanced Rating */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Star
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating)
                                ? "fill-[#FFD700] text-[#FFD700]"
                                : "fill-white/10 text-white/10"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-base font-black text-white">{product.rating}</span>
                    <span className="text-sm text-white/50">({product.reviews} reviews)</span>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                  {/* Price & CTA - Enhanced */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-white/50 uppercase tracking-wider mb-1">Price</span>
                      <span className="text-3xl font-black gradient-flux-text">{product.price}</span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ rotate: { duration: 0.5 } }}
                    >
                      <Button
                        size="lg"
                        className={`${
                          product.inStock
                            ? "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                            : "bg-white/10 text-white/40 cursor-not-allowed"
                        } transition-all font-black rounded-full px-6 py-6 relative overflow-hidden group/btn`}
                        disabled={!product.inStock}
                      >
                        {/* Shimmer effect on hover */}
                        <motion.div
                          className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                          style={{
                            background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)",
                          }}
                        />
                        <ShoppingCart className="mr-2 h-5 w-5 relative z-10" />
                        <span className="relative z-10">{product.inStock ? "Add to Cart" : "Notify Me"}</span>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Animated bottom gradient line */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 gradient-flux"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: idx * 0.1 + 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Elegant Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          {/* Subtle background glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] gradient-flux rounded-full opacity-10 blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Compact card design */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-10 md:p-12 rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side - Content */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                      Want to shape future drops?
                    </h3>
                    <p className="text-base text-white/70 mb-2">
                      Join our Discord to <span className="font-bold gradient-flux-text">vote on designs</span>,{" "}
                      get <span className="font-bold gradient-flux-text">early access</span>, and connect with the tribe.
                    </p>
                    
                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4 text-sm text-white/50">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span>8.7K+ members</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>Active daily</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Exclusive perks</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right side - CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                >
                  <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="gradient-flux px-8 py-6 text-base font-black text-black rounded-full relative overflow-hidden group shadow-lg"
                        aria-label="Join the FLUX Tribe community"
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                        
                        <span className="relative z-10 flex items-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          Join Discord
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </motion.div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
