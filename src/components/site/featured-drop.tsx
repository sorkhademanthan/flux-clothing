"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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

        {/* Collection Preview - Minimal */}
        <div className="border-t border-white/10 bg-black px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-widest text-white/40">Collection</p>
                <h3 className="text-4xl font-extrabold text-white md:text-5xl">More from NEON NOIR</h3>
              </div>
              <button 
                onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
                className="group hidden items-center gap-2 text-sm font-bold uppercase tracking-wider text-white transition-all hover:gap-4 md:flex"
              >
                View All
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Cyber Cargo", price: "₹4,299", badge: "Best Seller", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80" },
                { name: "Flux Cap", price: "₹1,799", badge: "Limited", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
                { name: "Glitch Socks", price: "₹899", badge: "New", img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer"
                >
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={`FLUX ${item.name} - Limited edition streetwear`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-20" />
                  </div>
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">{item.badge}</p>
                      <h4 className="mb-2 text-xl font-bold text-white">{item.name}</h4>
                      <p className="text-lg font-bold gradient-flux-text">{item.price}</p>
                    </div>
                    <button 
                      className="rounded-full bg-white p-3 opacity-0 transition-all group-hover:opacity-100"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      <ArrowRight className="h-5 w-5 text-black" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
