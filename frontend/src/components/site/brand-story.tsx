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
    <section id="story" className="relative overflow-hidden bg-[#0D0D0D] px-6 py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-dots opacity-20" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#FF00FF]/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#00FFFF]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Story */}
        <div className="mb-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Visual Element */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
                {/* Centered Content */}
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                  <div className="mb-8 text-9xl">⚡</div>
                  <h3 className="gradient-flux-text mb-4 text-4xl font-bold">
                    The Phygital Revolution
                  </h3>
                  <p className="text-white/60">
                    Where physical threads meet digital worlds
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FF00FF] opacity-20 blur-xl" />
              </div>
            </div>
          </div>

          {/* Right: Manifesto Text */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
              <span className="gradient-flux-text">This is a Phygital Revolution.</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-white/80">
              <p className="text-xl font-bold text-white">
                FLUX was born on the streets of Mumbai in 2023 with one question:
                <br />
                What if your gear was a gateway?
              </p>

              <p className="text-2xl font-bold text-white">
                We don&apos;t sell clothes. We issue keys.
              </p>

              <p>
                Each piece is a physical artifact and a digital twin.
              </p>

              <p>
                Scan the embedded NFC tag. Watch it come alive.
                <br />
                Unlock music from underground artists.
                <br />
                Enter private channels where the Tribe shapes what&apos;s next.
                <br />
                Get alerts for IRL events in Mumbai, Bangalore, and beyond.
              </p>

              <p className="text-xl font-bold text-white">
                This isn&apos;t fast fashion.
                <br />
                It&apos;s your new identity.
                <br />
                Limited. Intentional. Fluid.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { label: "Pieces Unlocked", value: "12.4K" },
                { label: "Tribe Members", value: "8.7K" },
                { label: "Cities Worldwide", value: "47" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="gradient-flux-text mb-2 text-3xl font-bold md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 transition-all hover:border-white/20 hover:bg-[#1F1F1F]"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF00FF]/20 to-[#00FFFF]/20 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h4 className="mb-3 text-xl font-bold text-white">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>

        {/* Manifesto Quote */}
        <div className="mt-24 text-center">
          <blockquote className="mx-auto max-w-4xl">
            <p className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
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
    </section>
  );
}
