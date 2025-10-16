import { ReactElement } from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  inStock: boolean;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageUrl: string;
}

export interface StoryCard {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => ReactElement;
}

export interface JourneyStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  number: string;
}

export interface UGCPost {
  id: number;
  user: string;
  location: string;
  likes: number;
  comments: number;
  image: string;
  items: string[];
}

export interface StatItem {
  label: string;
  value: string;
}
