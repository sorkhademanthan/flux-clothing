"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Heart, Eye, Filter, Search } from "lucide-react";
import { useState } from "react";

const ALL_PRODUCTS = [
  { 
    id: 1,
    name: "Glitch Hoodie", 
    price: "₹3,499", 
    badge: "UV Reactive", 
    badgeColor: "green",
    category: "Hoodies",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&q=80",
    views: "3.2k",
    likes: "1.1k"
  },
  { 
    id: 2,
    name: "Cyber Cargo", 
    price: "₹4,299", 
    badge: "Bestseller", 
    badgeColor: "amber",
    category: "Bottoms",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&q=80",
    views: "2.8k",
    likes: "956"
  },
  { 
    id: 3,
    name: "Neon Turtleneck", 
    price: "₹2,799", 
    badge: "New", 
    badgeColor: "green",
    category: "Tops",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&q=80",
    views: "1.5k",
    likes: "567"
  },
  { 
    id: 4,
    name: "Flux Cap", 
    price: "₹1,799", 
    badge: "Limited", 
    badgeColor: "red",
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1000&q=80",
    views: "2.1k",
    likes: "789"
  },
  { 
    id: 5,
    name: "Void Jacket", 
    price: "₹6,999", 
    badge: "Premium", 
    badgeColor: "amber",
    category: "Outerwear",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&q=80",
    views: "3.5k",
    likes: "1.3k"
  },
  { 
    id: 6,
    name: "Pulse Tee", 
    price: "₹2,199", 
    badge: "Eco", 
    badgeColor: "green",
    category: "Tops",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&q=80",
    views: "2.2k",
    likes: "834"
  },
  { 
    id: 7,
    name: "Glitch Socks", 
    price: "₹899", 
    badge: "New", 
    badgeColor: "green",
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&q=80",
    views: "1.4k",
    likes: "523"
  },
  { 
    id: 8,
    name: "Neon Hoodie", 
    price: "₹3,499", 
    badge: "Popular", 
    badgeColor: "amber",
    category: "Tops",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&q=80",
    views: "3.1k",
    likes: "1.2k"
  },
  { 
    id: 9,
    name: "Glitch Tee", 
    price: "₹1,999", 
    badge: "Best Seller", 
    badgeColor: "amber",
    category: "Tops",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&q=80",
    views: "2.7k",
    likes: "923"
  },
];

const CATEGORIES = ["All", "Hoodies", "Tops", "Bottoms", "Outerwear", "Accessories"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-purple-900/20 via-black to-black">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors mb-12"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold">Back to Home</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest gradient-flux-text">
                  Full Collection
                </span>
              </motion.div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
                All{" "}
                <span className="gradient-flux-text">Products</span>
              </h1>

              <p className="text-white/70 text-xl max-w-3xl leading-relaxed">
                Explore our complete range of limited-edition streetwear, from statement pieces to everyday essentials.
              </p>
            </motion.div>

            {/* Filters and Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
            >
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-bold transition-all ${
                      selectedCategory === category
                        ? "bg-white text-black shadow-lg"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 text-white/60"
            >
              Showing <span className="text-white font-bold">{filteredProducts.length}</span> of{" "}
              <span className="text-white font-bold">{ALL_PRODUCTS.length}</span> products
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
              >
                <Link href={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {/* Image Container */}
                  <motion.div 
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900"
                  >
                    <Image
                      src={item.img}
                      alt={`FLUX ${item.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Badge */}
                    <div className={`absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase backdrop-blur-xl ${
                      item.badgeColor === 'amber' ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300' :
                      item.badgeColor === 'red' ? 'bg-red-500/20 border border-red-500/40 text-red-300' :
                      'bg-green-500/20 border border-green-500/40 text-green-300'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        item.badgeColor === 'amber' ? 'bg-amber-400' :
                        item.badgeColor === 'red' ? 'bg-red-400' :
                        'bg-green-400'
                      }`} />
                      {item.badge}
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Add to favorites"
                      >
                        <Heart className="w-4 h-4 text-white" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                        aria-label="Quick view"
                      >
                        <Eye className="w-4 h-4 text-white" />
                      </motion.button>
                    </div>
                    
                    {/* Bottom Stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Gradient Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 blur-xl" />
                    </div>
                  </motion.div>
                  
                  {/* Product Info */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xl font-bold text-white group-hover:gradient-flux-text transition-all duration-300">
                        {item.name}
                      </h4>
                      <span className="text-xs text-white/50 uppercase">{item.category}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold gradient-flux-text">
                        {item.price}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-10 h-10 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:shadow-2xl"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <ShoppingBag className="w-4 h-4 text-black" />
                      </motion.button>
                    </div>
                    
                    {/* Animated Underline */}
                    <div className="h-0.5 gradient-flux rounded-full origin-left group-hover:h-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-white/60 mb-4">No products found</p>
              <p className="text-white/40">Try adjusting your filters or search query</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
