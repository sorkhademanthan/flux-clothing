"use client";

import { Fingerprint, Lock, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "The Portal",
    description:
      "Every garment has an embedded NFC tag. Scan it with your phone to unlock its digital twin, exclusive content, and prove ownership on the blockchain.",
  },
  {
    icon: Lock,
    title: "The Vault",
    description:
      "We produce in micro-batches. Once a design is sold out, it's vaulted forever. No restocks. Your piece remains a true original.",
  },
  {
    icon: Sparkles,
    title: "The Circle",
    description:
      "Your gear is your membership card. Unlock access to private Discord channels, vote on future designs, and get early invites to drops and events.",
  },
  {
    icon: Zap,
    title: "The Code",
    description:
      "Organic cotton from Tiruppur. Ethical production. Zero plastic. We build for the future, not the landfill.",
  },
];

export default function BrandStory() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#0D0D0D]">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-dots opacity-10" />

      <div className="relative z-10">
        {/* Opening Statement - Full Width */}
        <div className="border-b border-white/10 px-6 py-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-white/40">Our Story</p>
            <h2 className="mb-12 max-w-5xl font-extrabold uppercase leading-[0.9] tracking-tighter text-white" style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}>
              This is a<br />Phygital<br />Revolution
            </h2>
            <p className="max-w-3xl text-2xl font-light leading-relaxed text-white/80 md:text-3xl">
              FLUX was born on the streets of Mumbai in 2023 with one question:
              <span className="gradient-flux-text font-bold"> What if your gear was a gateway?</span>
            </p>
          </div>
        </div>

        {/* Manifesto - Two Column */}
        <div className="px-6 py-32 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8 text-xl leading-relaxed text-white/70">
              <p className="text-3xl font-extrabold text-white">
                We don&apos;t sell clothes.
                <br />
                We issue keys.
              </p>
              <p>
                Each piece is a physical artifact and a digital twin.
              </p>
              <p>
                Scan the embedded NFC tag. Watch it come alive.
              </p>
            </div>

            {/* Right Column */}
            <div className="space-y-8 text-xl leading-relaxed text-white/70">
              <p>
                Unlock music from underground artists.
              </p>
              <p>
                Enter private channels where the Tribe shapes what&apos;s next.
              </p>
              <p>
                Get alerts for IRL events in Mumbai, Bangalore, and beyond.
              </p>
              <p className="text-3xl font-extrabold text-white">
                This isn&apos;t fast fashion.
                <br />
                It&apos;s your new identity.
              </p>
            </div>
          </div>
        </div>

        {/* Stats - Minimal */}
        <div className="border-y border-white/10 bg-black px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 sm:grid-cols-3">
              {[
                { label: "Pieces Unlocked", value: "12.4K" },
                { label: "Tribe Members", value: "8.7K" },
                { label: "Cities Worldwide", value: "47" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="gradient-flux-text mb-2 text-5xl font-extrabold md:text-6xl lg:text-7xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features - List Style */}
        <div className="px-6 py-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">How It Works</p>
              <h3 className="text-4xl font-extrabold text-white md:text-5xl">The FLUX Ecosystem</h3>
            </div>

            <div className="grid gap-16 lg:grid-cols-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="group">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl gradient-flux">
                        <Icon className="h-8 w-8 text-black" />
                      </div>
                      <h4 className="text-3xl font-extrabold text-white">{feature.title}</h4>
                    </div>
                    <p className="text-lg leading-relaxed text-white/70">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Manifesto Quote - Full Width */}
        <div className="border-t border-white/10 bg-black px-6 py-32 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <blockquote>
              <p className="mb-10 font-extrabold uppercase leading-[0.9] tracking-tighter text-white" style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}>
                &ldquo;We don&apos;t chase trends.
                <br />
                <span className="gradient-flux-text">We create movements.&rdquo;</span>
              </p>
              <footer className="text-sm font-bold uppercase tracking-widest text-white/40">
                — The FLUX Manifesto
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
