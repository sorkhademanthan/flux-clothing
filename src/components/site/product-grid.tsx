"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/constants/products";
import { SOCIAL_LINKS } from "@/constants/brand-story";

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
          <Link href="/products">
            <Button
              variant="outline"
              className="group border-white/20 bg-transparent text-white hover:bg-white/5 transition-all hover:scale-105"
              aria-label="View all products in the catalog"
            >
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link 
              key={product.id}
              href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1A1A] transition-all hover:border-white/20 hover:bg-[#1F1F1F] hover:scale-[1.02] block"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute left-3 top-3 rounded-full gradient-flux px-3 py-1 text-xs font-bold text-black uppercase tracking-wider">
                  {product.badge}
                </div>

                {/* Stock Indicator - Only shows if out of stock */}
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <span className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black uppercase tracking-wider">
                      GONE FOREVER
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-2 text-xs uppercase tracking-wider text-white/40 font-bold">
                  {product.category}
                </div>
                
                {/* Product Name */}
                <h3 className="mb-3 text-xl font-bold text-white line-clamp-1">{product.name}</h3>

                {/* Rating */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-[#FFD700] text-[#FFD700]"
                            : "fill-white/10 text-white/10"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">{product.rating}</span>
                  <span className="text-xs text-white/40">({product.reviews})</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold gradient-flux-text">{product.price}</span>
                  </div>
                  <Button
                    size="sm"
                    className={`${
                      product.inStock
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-white/10 text-white/40 cursor-not-allowed"
                    } transition-all group-hover:scale-105 font-bold`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.inStock ? "Add" : "Notify"}
                  </Button>
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-flux opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-white/60">
            Can&apos;t find what you&apos;re looking for? Join our Discord to vote on the next drop.
          </p>
          <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="gradient-flux px-8 py-6 text-base font-bold text-black transition-all hover:scale-105 hover:shadow-2xl"
              aria-label="Join the FLUX Tribe community"
            >
              Join the Tribe
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
