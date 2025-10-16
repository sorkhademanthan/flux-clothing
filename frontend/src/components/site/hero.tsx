"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0D0D0D]"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-dots opacity-40" />
      <div className="absolute inset-0 noise opacity-30" />

      {/* Gradient Orb that follows mouse */}
      <div
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full opacity-20 blur-3xl transition-transform duration-700 ease-out"
        style={{
          background: "radial-gradient(circle, #FF00FF 0%, #00FFFF 50%, transparent 70%)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24">
        {/* Eyebrow Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 gradient-flux-text" />
          <span className="text-sm font-medium tracking-wide text-white/80">
            NEON NOIR COLLECTION — LIVE NOW
          </span>
        </div>

        {/* Main Headline with Glitch Effect */}
        <h1
          className="mb-6 text-center font-extrabold leading-[0.85] tracking-tighter text-white"
          style={{ fontSize: "clamp(2.5rem, 12vw, 8rem)" }}
        >
          <span className="glitch block" data-text="BEYOND FABRIC.">
            BEYOND FABRIC.
          </span>
          <span className="glitch block" data-text="BEYOND CODE.">
            BEYOND CODE.
          </span>
        </h1>

        {/* Gradient Subheading */}
        <p className="gradient-flux-text mb-4 text-center text-2xl font-bold tracking-tight md:text-4xl">
          This isn&apos;t streetwear. It&apos;s a key.
        </p>

        {/* Description */}
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-white/60 md:text-lg">
          Every limited piece unlocks exclusive digital worlds, private communities, and IRL experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link 
            href="/#drops"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("drops");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-white px-8 py-6 text-base font-bold text-[#0D0D0D] transition-all hover:scale-105 hover:shadow-2xl"
              aria-label="Shop the NEON NOIR Collection"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop The NEON NOIR Drop
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
              <div className="absolute inset-0 -z-0 gradient-flux opacity-0 transition-opacity group-hover:opacity-20" />
            </Button>
          </Link>

          <Link 
            href="/#story"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("story");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-gradient-flux bg-transparent px-8 py-6 text-base font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/5"
              aria-label="Learn how FLUX works"
            >
              How It Works
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-white/40">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full gradient-flux" />
            <span>Forever Scarce</span>
          </div>
          <div className="hidden h-8 w-px bg-white/10 sm:block" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full gradient-flux" />
            <span>Ethically Crafted</span>
          </div>
          <div className="hidden h-8 w-px bg-white/10 sm:block" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full gradient-flux" />
            <span>Mumbai Born</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
    </section>
  );
}
