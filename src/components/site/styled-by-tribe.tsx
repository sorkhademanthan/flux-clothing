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

        {/* UGC Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {UGC_POSTS.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#1A1A1A] transition-all hover:border-white/20"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
                <Image
                  src={post.image}
                  alt={`${post.user} wearing FLUX in ${post.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.items.map((item, idx) => (
                        <button
                          key={idx}
                          className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                        >
                          <ShoppingBag className="h-3 w-3" />
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                  📍 {post.location}
                </div>
              </div>

              {/* Post Info */}
              <div className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-white">{post.user}</span>
                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Submit */}
        <div className="text-center">
          <div className="mb-6">
            <p className="mb-2 text-lg font-bold uppercase tracking-wider text-white">
              Join the Movement.
            </p>
            <p className="mx-auto max-w-xl text-lg text-white/60">
              Share your FLUX style. Earn Tribe Points. Get access to exclusive drops.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="gradient-flux px-8 py-6 text-base font-bold text-black transition-all hover:scale-105 hover:shadow-2xl"
                aria-label="Submit your FLUX style photos on Instagram"
              >
                Share on Instagram
              </Button>
            </a>
            <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent px-8 py-6 text-base font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/5"
                aria-label="Join FLUX Discord community"
              >
                Join Discord
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
