"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "GLITCH HOODIE",
    category: "Hoodies",
    price: "₹3,499",
    rating: 4.9,
    reviews: 234,
    badge: "UV Reactive",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "CYBER CARGO",
    category: "Bottoms",
    price: "₹4,299",
    rating: 4.8,
    reviews: 187,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "NEON TURTLENECK",
    category: "Tops",
    price: "₹2,799",
    rating: 4.7,
    reviews: 156,
    badge: "New",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "FLUX CAP",
    category: "Accessories",
    price: "₹1,799",
    rating: 4.9,
    reviews: 312,
    badge: "Limited",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80",
    inStock: true,
  },
  {
    id: 5,
    name: "VOID JACKET",
    category: "Outerwear",
    price: "₹6,999",
    rating: 5.0,
    reviews: 89,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    inStock: false,
  },
  {
    id: 6,
    name: "PULSE TEE",
    category: "Tops",
    price: "₹2,199",
    rating: 4.8,
    reviews: 201,
    badge: "Eco",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    inStock: true,
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 grid-dots opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h2 className="mb-2 text-5xl font-extrabold text-white md:text-6xl">THE CATALOG</h2>
            <p className="text-lg text-white/60">Every piece tells a story. Find yours.</p>
          </div>
          <Button
            variant="outline"
            className="border-white/20 bg-transparent text-white hover:bg-white/5"
            aria-label="View all products in the catalog"
          >
            View All
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] transition-all hover:border-white/20 hover:bg-[#1F1F1F]"
            >
              {/* Product Image Area */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D]">
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={`${product.name} - ${product.category} - ${product.badge}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Badge */}
                <div className="absolute left-3 top-3 rounded-full gradient-flux px-3 py-1 text-xs font-bold text-black">
                  {product.badge}
                </div>

                {/* Quick View - Shows on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-center">
                    <Camera className="mx-auto mb-3 h-12 w-12 text-white" />
                    <p className="text-sm font-bold text-white">Tap to try with AR</p>
                    <p className="mt-2 text-xs text-white/60">Available in S, M, L, XL</p>
                  </div>
                </div>

                {/* Stock Indicator */}
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black">
                      GONE FOREVER
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2 text-xs uppercase tracking-wider text-white/40">
                  {product.category}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{product.name}</h3>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                    <span className="text-sm font-bold text-white">{product.rating}</span>
                  </div>
                  <span className="text-xs text-white/40">({product.reviews} reviews)</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <Button
                    size="sm"
                    className={`${
                      product.inStock
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-white/10 text-white/40"
                    } transition-all group-hover:scale-105`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Secure" : "Notify"}
                  </Button>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-flux opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-white/60">
            Can&apos;t find what you&apos;re looking for? Join our Discord to vote on the next drop.
          </p>
          <Button
            size="lg"
            className="gradient-flux px-8 py-6 text-base font-bold text-black transition-all hover:scale-105 hover:shadow-2xl"
            aria-label="Join the FLUX Tribe community"
          >
            Join the Tribe
          </Button>
        </div>
      </div>
    </section>
  );
}
