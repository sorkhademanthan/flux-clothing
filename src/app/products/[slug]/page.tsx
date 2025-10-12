"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Heart, Share2, Truck, Shield, RotateCcw, Star, Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";

interface ProductData {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  badge: string;
  badgeColor: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  materials: string;
  careInstructions: string;
  images: string[];
  inStock: boolean;
  stockCount: number;
}

// Product database
const PRODUCTS_DATA: Record<string, ProductData> = {
  "cyber-cargo": {
    id: 1,
    name: "Cyber Cargo",
    price: 4299,
    originalPrice: 5999,
    badge: "Best Seller",
    badgeColor: "amber",
    category: "Bottoms",
    rating: 4.8,
    reviews: 234,
    description: "Premium tech-wear cargo pants with multiple utility pockets and reflective details. Made from water-resistant fabric with a comfortable stretch fit.",
    features: [
      "Water-resistant tech fabric",
      "8 utility pockets with hidden zippers",
      "Reflective tape details",
      "Adjustable ankle straps",
      "Regular fit with stretch",
      "Reinforced stitching"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Navy"],
    materials: "65% Cotton, 30% Polyester, 5% Spandex",
    careInstructions: "Machine wash cold, tumble dry low",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1555274175-75f79b5ac6e9?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=1000&q=80"
    ],
    inStock: true,
    stockCount: 23
  },
  "flux-cap": {
    id: 2,
    name: "Flux Cap",
    price: 1799,
    originalPrice: 2499,
    badge: "Limited",
    badgeColor: "red",
    category: "Accessories",
    rating: 4.9,
    reviews: 156,
    description: "Limited edition embroidered cap with FLUX signature glitch logo. Unstructured design with adjustable strap for the perfect fit.",
    features: [
      "Embroidered glitch logo",
      "Unstructured 6-panel design",
      "Adjustable metal buckle strap",
      "Curved visor",
      "Breathable cotton fabric",
      "One size fits most"
    ],
    sizes: ["One Size"],
    colors: ["Black", "White", "Purple"],
    materials: "100% Cotton",
    careInstructions: "Hand wash only, air dry",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&h=1000&q=80"
    ],
    inStock: true,
    stockCount: 12
  },
  "glitch-socks": {
    id: 3,
    name: "Glitch Socks",
    price: 899,
    originalPrice: 1299,
    badge: "New",
    badgeColor: "green",
    category: "Accessories",
    rating: 4.7,
    reviews: 89,
    description: "Premium crew socks featuring our signature glitch pattern. Comfortable cushioned sole with arch support for all-day wear.",
    features: [
      "Signature glitch pattern",
      "Cushioned footbed",
      "Arch support",
      "Reinforced heel and toe",
      "Moisture-wicking fabric",
      "Available in pack of 2"
    ],
    sizes: ["S (US 6-8)", "M (US 9-11)", "L (US 12-14)"],
    colors: ["Black/Purple", "White/Cyan", "Grey/Pink"],
    materials: "80% Cotton, 15% Polyester, 5% Elastane",
    careInstructions: "Machine wash warm, do not bleach",
    images: [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1586438993095-c3b5471a1765?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800&h=1000&q=80"
    ],
    inStock: true,
    stockCount: 45
  },
  "neon-hoodie": {
    id: 4,
    name: "Neon Hoodie",
    price: 3499,
    originalPrice: 4999,
    badge: "Popular",
    badgeColor: "amber",
    category: "Tops",
    rating: 4.9,
    reviews: 312,
    description: "Oversized hoodie with reflective neon print. Premium heavyweight cotton blend for maximum comfort and durability.",
    features: [
      "Reflective neon graphics",
      "Oversized relaxed fit",
      "Heavyweight 400gsm fabric",
      "Kangaroo pocket",
      "Ribbed cuffs and hem",
      "Drawstring hood"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Navy"],
    materials: "80% Cotton, 20% Polyester",
    careInstructions: "Machine wash cold, hang dry",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800&h=1000&q=80"
    ],
    inStock: true,
    stockCount: 34
  },
  "glitch-hoodie": {
    id: 5,
    name: "Glitch Hoodie",
    price: 3499,
    originalPrice: 4999,
    badge: "UV Reactive",
    badgeColor: "green",
    category: "Hoodies",
    rating: 4.9,
    reviews: 234,
    description: "Stand out with our UV-reactive glitch print hoodie. The design comes alive under blacklight, perfect for festivals and night events.",
    features: [
      "UV-reactive glitch print",
      "Premium heavyweight fabric",
      "Oversized comfortable fit",
      "Drawstring hood with metal tips",
      "Kangaroo front pocket",
      "Ribbed cuffs and waistband"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Purple"],
    materials: "85% Cotton, 15% Polyester",
    careInstructions: "Machine wash cold, do not bleach",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&h=1000&q=80"
    ],
    inStock: true,
    stockCount: 45
  },
  "neon-turtleneck": {
    id: 6,
    name: "Neon Turtleneck",
    price: 2799,
    originalPrice: 3999,
    badge: "New",
    badgeColor: "green",
    category: "Tops",
    rating: 4.7,
    reviews: 156,
    description: "Sleek turtleneck with neon accents. Perfect layering piece that adds a futuristic edge to any outfit.",
    features: [
      "Neon contrast details",
      "Fitted turtleneck design",
      "Breathable stretch fabric",
      "Thumbhole cuffs",
      "Seamless construction",
      "Moisture-wicking"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black/Neon Green", "White/Neon Pink", "Grey/Neon Orange"],
    materials: "92% Polyester, 8% Spandex",
    careInstructions: "Machine wash cold, hang dry",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=1000&q=80"
    ],
    inStock: true,
    stockCount: 32
  },
  "void-jacket": {
    id: 7,
    name: "Void Jacket",
    price: 6999,
    originalPrice: 9999,
    badge: "Premium",
    badgeColor: "amber",
    category: "Outerwear",
    rating: 5.0,
    reviews: 89,
    description: "Our most exclusive piece. Limited edition technical jacket with avant-garde design and premium materials. Once it's gone, it's gone forever.",
    features: [
      "Water-resistant shell",
      "3M Thinsulate insulation",
      "Multiple utility pockets",
      "Adjustable hood and cuffs",
      "Reflective zipper pulls",
      "Limited edition numbering"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Void Black", "Cyber Grey"],
    materials: "Shell: 100% Nylon, Lining: 100% Polyester",
    careInstructions: "Dry clean only",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1548623189-d8c9a4e34441?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1000&q=80"
    ],
    inStock: false,
    stockCount: 0
  },
  "pulse-tee": {
    id: 8,
    name: "Pulse Tee",
    price: 2199,
    originalPrice: 2999,
    badge: "Eco",
    badgeColor: "green",
    category: "Tops",
    rating: 4.8,
    reviews: 201,
    description: "Sustainable streetwear at its finest. Made from 100% organic cotton with eco-friendly printing methods.",
    features: [
      "100% organic cotton",
      "Eco-friendly water-based prints",
      "Oversized relaxed fit",
      "Reinforced shoulder seams",
      "Pre-shrunk fabric",
      "Carbon-neutral shipping"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Natural White", "Stone Grey", "Sage Green"],
    materials: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=1000&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&q=80"
    ],
    inStock: true,
    stockCount: 56
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = PRODUCTS_DATA[slug];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <button className="px-6 py-3 bg-white text-black font-bold rounded-full">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, Math.min(product.stockCount, quantity + delta)));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold">Back to Products</span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Images */}
            <div className="space-y-6">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-900"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.images[selectedImage]}
                      alt={`${product.name} - View ${selectedImage + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Badge */}
                <div className={`absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold uppercase backdrop-blur-xl ${
                  product.badgeColor === 'amber' ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300' :
                  product.badgeColor === 'red' ? 'bg-red-500/20 border border-red-500/40 text-red-300' :
                  'bg-green-500/20 border border-green-500/40 text-green-300'
                }`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    product.badgeColor === 'amber' ? 'bg-amber-400' :
                    product.badgeColor === 'red' ? 'bg-red-400' :
                    'bg-green-400'
                  }`} />
                  {product.badge}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full text-sm font-bold">
                  {selectedImage + 1} / {product.images.length}
                </div>
              </motion.div>

              {/* Thumbnail Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-4 gap-4"
              >
                {product.images.map((image: string, idx: number) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 transition-all ${
                      selectedImage === idx 
                        ? 'ring-4 ring-purple-500' 
                        : 'ring-2 ring-white/10 hover:ring-white/30'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                    {selectedImage === idx && (
                      <div className="absolute inset-0 bg-purple-500/20" />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Category & Name */}
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white/40 mb-3">
                  {product.category}
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white/60">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold gradient-flux-text">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-2xl text-white/40 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-300 rounded-full text-sm font-bold">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-lg text-white/70 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px w-full gradient-flux" />

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Select Size</h3>
                    <button className="text-sm text-purple-400 hover:text-purple-300 underline">
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {product.sizes.map((size: string) => (
                      <motion.button
                        key={size}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-4 rounded-xl font-bold transition-all ${
                          selectedSize === size
                            ? 'bg-white text-black'
                            : 'bg-white/5 border border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {size}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors.length > 1 && (
                <div>
                  <h3 className="text-lg font-bold mb-4">Select Color</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color: string) => (
                      <motion.button
                        key={color}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 rounded-xl font-bold transition-all ${
                          selectedColor === color
                            ? 'bg-white text-black'
                            : 'bg-white/5 border border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {color}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="text-lg font-bold mb-4">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="disabled:opacity-30"
                    >
                      <Minus className="w-5 h-5" />
                    </motion.button>
                    <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stockCount}
                      className="disabled:opacity-30"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <span className="text-white/60">
                    {product.stockCount} items available
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-bold rounded-full shadow-2xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                  />
                  <ShoppingBag className="w-6 h-6 relative z-10" />
                  <span className="text-lg relative z-10">Add to Cart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all ${
                    isLiked
                      ? 'bg-red-500 border-red-500'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isLiked ? 'fill-white' : ''}`} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-16 h-16 bg-white/5 border-2 border-white/10 rounded-full hover:bg-white/10 transition-all"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Features */}
              <div className="space-y-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                {product.features.map((feature: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl">
                  <Truck className="w-6 h-6 text-purple-400" />
                  <span className="text-xs text-center text-white/60 font-bold">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl">
                  <RotateCcw className="w-6 h-6 text-cyan-400" />
                  <span className="text-xs text-center text-white/60 font-bold">Easy Returns</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-xs text-center text-white/60 font-bold">Secure Payment</span>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-bold text-white">Materials:</span>
                  <span className="text-white/70 ml-2">{product.materials}</span>
                </div>
                <div>
                  <span className="font-bold text-white">Care:</span>
                  <span className="text-white/70 ml-2">{product.careInstructions}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
