"use client";

import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ShoppingBag, Users, Instagram, Sparkles, TrendingUp, Camera } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { UGC_POSTS } from "@/constants/ugc";
import { SOCIAL_LINKS } from "@/constants/brand-story";

export default function StyledByTribe() {
  return (
    <section id="tribe" className="relative overflow-hidden bg-black px-6 py-32 md:py-40">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-dots opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-500/10 border border-purple-500/30 px-6 py-3 backdrop-blur-sm"
          >
            <Users className="h-5 w-5 gradient-flux-text" />
            <span className="text-sm font-bold uppercase tracking-widest gradient-flux-text">
              Community Spotlight
            </span>
            <TrendingUp className="h-4 w-4 text-green-400 animate-pulse" />
          </motion.div>
          
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-6 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight"
          >
            STYLED BY THE{" "}
            <span className="gradient-flux-text">TRIBE</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-xl text-white/70 leading-relaxed mb-4"
          >
            Our code is the street. Our canvas is the community. Tag{" "}
            <span className="gradient-flux-text font-bold">@flux.official</span> to be featured.
          </motion.p>
          
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-8 text-white/60"
          >
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-bold">2.4k+ Posts</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-sm font-bold">156k+ Likes</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold">Global Community</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Post Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 gradient-flux-text" />
            <h3 className="text-2xl font-bold text-white">Featured This Week</h3>
          </div>
          
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Featured Image */}
              <div className="relative aspect-square md:aspect-auto overflow-hidden">
                <Image
                  src={UGC_POSTS[0].image}
                  alt="Featured post"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-xl border border-amber-500/40 rounded-full">
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span className="text-sm font-bold text-amber-300 uppercase tracking-wider">Featured</span>
                  </div>
                </div>
              </div>
              
              {/* Featured Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-flux flex items-center justify-center text-black font-bold text-xl">
                      {UGC_POSTS[0].user[1].toUpperCase()}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white">{UGC_POSTS[0].user}</p>
                      <p className="text-sm text-white/60 flex items-center gap-1">
                        📍 {UGC_POSTS[0].location}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {UGC_POSTS[0].items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-6 text-white/70">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    <span className="text-lg font-bold">{UGC_POSTS[0].likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-lg font-bold">{UGC_POSTS[0].comments}</span>
                  </div>
                  <button className="ml-auto px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                    View Post
                  </button>
                </div>
              </div>
            </div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none">
              <motion.div
                className="absolute inset-0 rounded-3xl"
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
            </div>
          </motion.div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-white">From The Community</h3>
            <span className="px-3 py-1 bg-white/5 rounded-full text-sm font-bold text-white/60">
              {UGC_POSTS.length - 1} posts
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform">
              Latest
            </button>
            <button className="px-4 py-2 bg-white/5 text-white font-bold rounded-full text-sm hover:bg-white/10 transition-colors">
              Popular
            </button>
            <button className="px-4 py-2 bg-white/5 text-white font-bold rounded-full text-sm hover:bg-white/10 transition-colors">
              All Locations
            </button>
          </div>
        </motion.div>

        {/* UGC Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UGC_POSTS.slice(1).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] transition-all hover:border-purple-500/50 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
                <Image
                  src={post.image}
                  alt={`${post.user} wearing FLUX in ${post.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay - always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Enhanced Product Tags - Slide up on hover */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                  <div className="flex flex-wrap gap-2">
                    {post.items.map((item, itemIdx) => (
                      <motion.button
                        key={itemIdx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-xl px-4 py-2 text-xs font-bold text-black shadow-lg transition-all hover:bg-white"
                      >
                        <ShoppingBag className="h-3 w-3" />
                        {item}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Location Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-xl px-3 py-1.5 text-xs font-bold text-white/90 border border-white/10">
                  📍 {post.location}
                </div>
                
                {/* User Avatar - Top Left */}
                <div className="absolute left-4 top-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full gradient-flux flex items-center justify-center text-black font-bold border-2 border-white shadow-xl">
                    {post.user[1].toUpperCase()}
                  </div>
                  <div className="bg-black/80 backdrop-blur-xl rounded-full px-3 py-1 border border-white/10">
                    <span className="text-xs font-bold text-white">{post.user}</span>
                  </div>
                </div>
              </div>

              {/* Post Info */}
              <div className="p-5 space-y-4">
                {/* Top Row - User and Engagement */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full gradient-flux flex items-center justify-center text-black font-bold text-sm">
                      {post.user[1].toUpperCase()}
                    </div>
                    <span className="font-bold text-white text-sm">{post.user}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-1.5 text-white/70 hover:text-pink-400 transition-colors group/like"
                    >
                      <Heart className="h-4 w-4 group-hover/like:fill-pink-400" />
                      <span className="text-sm font-bold">{post.likes.toLocaleString()}</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-1.5 text-white/70 hover:text-cyan-400 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm font-bold">{post.comments}</span>
                    </motion.button>
                  </div>
                </div>
                
                {/* Bottom Row - View Post Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-xl font-bold text-white text-sm transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <Instagram className="w-4 h-4 group-hover/btn:gradient-flux-text transition-colors" />
                  View on Instagram
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-500/50 rounded-full font-bold text-white transition-all backdrop-blur-sm group"
          >
            <span className="flex items-center gap-2">
              Load More Stories
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {/* CTA to Submit */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
          </div>
          
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">Be Featured</span>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-4 text-4xl md:text-5xl font-extrabold text-white"
            >
              Join the <span className="gradient-flux-text">Movement</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mx-auto max-w-xl text-lg text-white/70 leading-relaxed"
            >
              Share your FLUX style. Earn Tribe Points. Get access to exclusive drops.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-flux px-8 py-4 text-base font-bold text-black rounded-full transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Share on Instagram
              </motion.button>
            </a>
            <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/20 hover:border-white/40 bg-transparent px-8 py-4 text-base font-bold text-white backdrop-blur-sm rounded-full transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
