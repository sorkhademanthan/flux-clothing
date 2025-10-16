import { Fingerprint, Lock, Sparkles, Zap, Users, Shirt, Rocket } from "lucide-react";
import { Feature, StoryCard, JourneyStep } from "@/types";

export const FEATURES: Feature[] = [
  {
    icon: Fingerprint,
    title: "The Portal",
    description:
      "Every garment has an embedded NFC tag. Scan it with your phone to unlock its digital twin, exclusive content, and prove ownership on the blockchain.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=600&fit=crop",
  },
  {
    icon: Lock,
    title: "The Vault",
    description:
      "We produce in micro-batches. Once a design is sold out, it's vaulted forever. No restocks. Your piece remains a true original.",
    imageUrl: "https://images.unsplash.com/photo-1614950901061-8f6a9b7f4de5?w=600&h=600&fit=crop",
  },
  {
    icon: Sparkles,
    title: "The Circle",
    description:
      "Your gear is your membership card. Unlock access to private Discord channels, vote on future designs, and get early invites to drops and events.",
    imageUrl: "https://images.unsplash.com/photo-1614950901061-8f6a9b7f4de5?w=600&h=600&fit=crop",
  },
  {
    icon: Zap,
    title: "The Code",
    description:
      "Organic cotton from Tiruppur. Ethical production. Zero plastic. We build for the future, not the landfill.",
    imageUrl: "https://images.unsplash.com/photo-1602524206684-43c0f0a20e46?w=600&h=600&fit=crop",
  },
];

export const STORY_CARDS: StoryCard[] = [
  {
    description: "Our Foundation",
    title: "Born in Mumbai",
    src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop&q=80",
    ctaText: "Read More",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            FLUX emerged from the vibrant streets of Mumbai in 2023, where tradition meets innovation. 
            We saw a gap in the market - fashion that could bridge the physical and digital worlds seamlessly.
          </p>
          <p>
            Our founders, a collective of designers, developers, and streetwear enthusiasts, came together 
            with a singular vision: to create clothing that tells a story beyond fabric.
          </p>
          <p>
            Every piece is crafted with intention, embedding technology that unlocks experiences, 
            not just style. This is fashion reimagined for the digital age.
          </p>
        </div>
      );
    },
  },
  {
    description: "Our Mission",
    title: "Phygital Future",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&q=80",
    ctaText: "Discover",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            We&apos;re not just creating clothes - we&apos;re building a new paradigm where physical garments 
            are gateways to digital experiences. Each FLUX piece is a key to exclusive content, 
            communities, and opportunities.
          </p>
          <p>
            Through embedded NFC technology and blockchain verification, your FLUX gear becomes 
            your digital identity, your access pass, and your statement of belonging to a global tribe.
          </p>
          <p>
            This is the future of fashion - where what you wear connects you to who you are, 
            both in the physical and digital realms.
          </p>
        </div>
      );
    },
  },
  {
    description: "Our Values",
    title: "Sustainable Innovation",
    src: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=600&fit=crop&q=80",
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Innovation without responsibility is just noise. Every FLUX piece is made from 
            organic cotton sourced from Tiruppur, India&apos;s textile heartland, ensuring ethical 
            production and fair wages.
          </p>
          <p>
            We&apos;ve eliminated plastic from our packaging and production process. Our micro-batch 
            model means zero overproduction and zero waste. When a design is vaulted, it&apos;s gone forever.
          </p>
          <p>
            This approach isn&apos;t just sustainable - it makes every piece genuinely rare and valuable, 
            creating fashion that respects both people and planet.
          </p>
        </div>
      );
    },
  },
  {
    description: "Our Community",
    title: "Join The Tribe",
    src: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?w=800&h=600&fit=crop&q=80",
    ctaText: "Connect",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            FLUX isn&apos;t just a brand - it&apos;s a movement. Our community spans 47 cities worldwide, 
            from Mumbai to Tokyo, London to São Paulo. Over 8,700 Tribe members strong and growing.
          </p>
          <p>
            As a FLUX owner, you&apos;re not just a customer. You get voting rights on future designs, 
            early access to drops, exclusive invites to IRL events, and access to our private 
            Discord channels where the real magic happens.
          </p>
          <p>
            This is fashion democracy - where the community shapes the brand, and every voice matters. 
            Your FLUX gear is your membership card to this global movement.
          </p>
        </div>
      );
    },
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    icon: Shirt,
    title: "Choose Your Gear",
    description: "Browse our limited micro-batch collections and find pieces that resonate with your identity.",
    number: "01"
  },
  {
    icon: Fingerprint,
    title: "Scan & Activate",
    description: "Use your phone to scan the embedded NFC tag and unlock your digital twin on the blockchain.",
    number: "02"
  },
  {
    icon: Users,
    title: "Join the Tribe",
    description: "Get instant access to exclusive Discord channels, events, and voting rights for future drops.",
    number: "03"
  },
  {
    icon: Rocket,
    title: "Shape the Future",
    description: "Vote on designs, attend IRL meetups, and help build the future of phygital fashion.",
    number: "04"
  }
];

export const STATS = [
  { label: "Pieces Unlocked", value: "12.4K" },
  { label: "Tribe Members", value: "8.7K" },
  { label: "Cities Worldwide", value: "47" },
];

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/flux",
  instagram: "https://instagram.com/flux.official",
} as const;
