"use client";

import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ShoppingBag, Users } from "lucide-react";
import Image from "next/image";

const ugcPosts = [
  {
    id: 1,
    user: "@riya.mumbai",
    location: "South Bombay",
    likes: 2847,
    comments: 156,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    items: ["Glitch Tee", "Cyber Cargo"],
  },
  {
    id: 2,
    user: "@arjun.skate",
    location: "Bangalore",
    likes: 1923,
    comments: 98,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    items: ["Neon Hoodie"],
  },
  {
    id: 3,
    user: "@zara.creates",
    location: "Delhi NCR",
    likes: 3456,
    comments: 234,
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
    items: ["Flux Cap", "Glitch Tee"],
  },
  {
    id: 4,
    user: "@kai.explores",
    location: "Goa",
    likes: 1567,
    comments: 87,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    items: ["Cyber Cargo"],
  },
  {
    id: 5,
    user: "@maya.art",
    location: "Pune",
    likes: 2134,
    comments: 145,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    items: ["Neon Hoodie", "Flux Cap"],
  },
  {
    id: 6,
    user: "@dev.vibes",
    location: "Hyderabad",
    likes: 1789,
    comments: 112,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    items: ["Glitch Tee"],
  },
];

export default function StyledByTribe() {
  return (
    <section id="tribe" className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-dots opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
            <Users className="h-4 w-4 gradient-flux-text" />
            <span className="text-sm font-bold uppercase tracking-wider gradient-flux-text">
              Community
            </span>
          </div>
          <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            STYLED BY THE TRIBE
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Our code is the street. Our canvas is the community. Tag{" "}
            <span className="gradient-flux-text font-bold">@flux.official</span> to be featured.
          </p>
        </div>

        {/* UGC Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ugcPosts.map((post) => (
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
          <Button
            size="lg"
            variant="outline"
            className="border-gradient-flux bg-transparent px-8 py-6 text-base font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/5"
            aria-label="Submit your FLUX style photos"
          >
            Show Us Your FLUX
          </Button>
        </div>
      </div>
    </section>
  );
}
