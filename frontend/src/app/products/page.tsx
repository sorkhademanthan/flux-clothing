"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, ShoppingBag, Heart, Eye, Search, 
  TrendingUp, Sparkles, Grid3x3, LayoutGrid, Star, 
  X, ChevronDown, SlidersHorizontal 
} from "lucide-react";
import { useState } from "react";

const ALL_PRODUCTS = [
  { 
    id: 1,
    name: "Glitch Hoodie", 
    price: "₹3,499", 
    originalPrice: "₹4,999",
    badge: "UV Reactive", 
    badgeColor: "green",
    category: "Hoodies",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&q=80",
    views: "3.2k",
    likes: "1.1k",
    rating: 4.9,
    trending: true,
    inStock: true
  },
  { 
    id: 2,
    name: "Cyber Cargo", 
    price: "₹4,299", 
    originalPrice: "₹5,999",
    badge: "Bestseller", 
    badgeColor: "amber",
    category: "Bottoms",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=1000&q=80",
    views: "2.8k",
    likes: "956",
    rating: 4.8,
    trending: true,
    inStock: true
  },
  { 
    id: 3,
    name: "Neon Turtleneck", 
    price: "₹2,799", 
    originalPrice: "₹3,999",
    badge: "New", 
    badgeColor: "green",
    category: "Tops",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1000&q=80",
    views: "1.5k",
    likes: "567",
    rating: 4.7,
    trending: false,
    inStock: true
  },
  { 
    id: 4,
    name: "Flux Cap", 
    price: "₹1,799", 
    originalPrice: "₹2,499",
    badge: "Limited", 
    badgeColor: "red",
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=1000&q=80",
    views: "2.1k",
    likes: "789",
    rating: 4.9,
    trending: false,
    inStock: true
  },
  { 
    id: 5,
    name: "Void Jacket", 
    price: "₹6,999", 
    originalPrice: "₹9,999",
    badge: "Premium", 
    badgeColor: "amber",
    category: "Outerwear",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&q=80",
    views: "3.5k",
    likes: "1.3k",
    rating: 5.0,
    trending: true,
    inStock: false
  },
  { 
    id: 6,
    name: "Pulse Tee", 
    price: "₹2,199", 
    originalPrice: "₹2,999",
    badge: "Eco", 
    badgeColor: "green",
    category: "Tops",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&q=80",
    views: "2.2k",
    likes: "834",
    rating: 4.8,
    trending: false,
    inStock: true
  },
  { 
    id: 7,
    name: "Glitch Socks", 
    price: "₹899", 
    originalPrice: "₹1,299",
    badge: "New", 
    badgeColor: "green",
    category: "Accessories",
    img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&q=80",
    views: "1.4k",
    likes: "523",
    rating: 4.7,
    trending: false,
    inStock: true
  },
  { 
    id: 8,
    name: "Neon Hoodie", 
    price: "₹3,499", 
    originalPrice: "₹4,999",
    badge: "Popular", 
    badgeColor: "amber",
    category: "Hoodies",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&q=80",
    views: "3.1k",
    likes: "1.2k",
    rating: 4.9,
    trending: true,
    inStock: true
  },
  { 
    id: 9,
    name: "Glitch Tee", 
    price: "₹1,999", 
    originalPrice: "₹2,999",
    badge: "Best Seller", 
    badgeColor: "amber",
    category: "Tops",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&q=80",
    views: "2.7k",
    likes: "923",
    rating: 4.8,
    trending: false,
    inStock: true
  },
];

const CATEGORIES = ["All Products", "Trending", "Hoodies", "Tops", "Bottoms", "Outerwear", "Accessories"];
const SORT_OPTIONS = ["Newest First", "Price: Low to High", "Price: High to Low", "Most Popular", "Best Rated"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "large">("grid");
  const [sortBy, setSortBy] = useState("Newest First");
  // const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedProducts);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedProducts(newLiked);
  };

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesCategory = 
      selectedCategory === "All Products" || 
      (selectedCategory === "Trending" && product.trending) ||
      product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const price = parseInt(product.price.replace(/[^0-9]/g, ''));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case "Price: High to Low":
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case "Most Popular":
        return parseInt(b.likes.replace(/[^0-9]/g, '')) - parseInt(a.likes.replace(/[^0-9]/g, ''));
      case "Best Rated":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Header with Parallax */}
      <div className="relative overflow-hidden border-b border-white/10">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="relative z-10 px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="touch-target group inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold">Back to Home</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Title Section */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 gradient-flux-text" />
                </motion.div>
                <span className="text-sm font-black uppercase tracking-widest gradient-flux-text">
                  Exclusive Collection
                </span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-bold">Live</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.9]"
              >
                Discover{" "}
                <span className="gradient-flux-text block">The Collection</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/70 text-xl md:text-2xl max-w-3xl leading-relaxed"
              >
                Limited edition pieces designed for those who dare to stand out. Each item tells a story.
              </motion.p>
            </div>

            {/* Advanced Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4"
            >
              {/* Search */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
                {searchQuery && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="touch-target flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span className="font-bold">{sortBy}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {showSortDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl z-50"
                    >
                      {SORT_OPTIONS.map((option) => (
                        <motion.button
                          key={option}
                          whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                          onClick={() => {
                            setSortBy(option);
                            setShowSortDropdown(false);
                          }}
                          className="w-full px-6 py-3 text-left font-bold transition-colors border-b border-white/5 last:border-0"
                        >
                          {option}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView("grid")}
                  className={`touch-target p-2 rounded-lg transition-all ${
                    view === "grid" ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView("large")}
                  className={`touch-target p-2 rounded-lg transition-all ${
                    view === "large" ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`touch-target px-6 py-3 rounded-full font-bold transition-all ${
                    selectedCategory === category
                      ? "bg-white text-black shadow-2xl"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {category}
                  {category === "Trending" && (
                    <TrendingUp className="inline-block w-4 h-4 ml-2 text-green-400" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Results Info */}
          <div className="flex items-center justify-between mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60"
            >
              Showing <span className="text-white font-bold text-xl">{sortedProducts.length}</span> of{" "}
              <span className="text-white font-bold text-xl">{ALL_PRODUCTS.length}</span> products
            </motion.div>
            
            {likedProducts.size > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full"
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                <span className="text-sm font-bold text-red-300">{likedProducts.size} Favorited</span>
              </motion.div>
            )}
          </div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-8 ${
                view === "grid" 
                  ? "sm:grid-cols-2 lg:grid-cols-3" 
                  : "sm:grid-cols-2"
              }`}
            >
              {sortedProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative"
                >
                  <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {/* Product Card */}
                    <motion.div 
                      whileHover={{ y: -12 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-purple-500/50 transition-all"
                    >
                      {/* Image */}
                      <div className={`relative overflow-hidden ${view === "large" ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
                        <Image
                          src={product.img}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase backdrop-blur-xl ${
                            product.badgeColor === 'amber' ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300' :
                            product.badgeColor === 'red' ? 'bg-red-500/20 border border-red-500/40 text-red-300' :
                            'bg-green-500/20 border border-green-500/40 text-green-300'
                          }`}>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className={`w-1.5 h-1.5 rounded-full ${
                                product.badgeColor === 'amber' ? 'bg-amber-400' :
                                product.badgeColor === 'red' ? 'bg-red-400' :
                                'bg-green-400'
                              }`}
                            />
                            {product.badge}
                          </div>
                          {!product.inStock && (
                            <div className="px-3 py-1.5 rounded-full text-xs font-black uppercase backdrop-blur-xl bg-zinc-800/80 border border-white/20 text-white">
                              SOLD OUT
                            </div>
                          )}
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <motion.button
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleLike(product.id);
                            }}
                            className={`touch-target p-3 backdrop-blur-xl border border-white/20 rounded-full transition-all ${
                              likedProducts.has(product.id)
                                ? 'bg-red-500 border-red-500'
                                : 'bg-white/10 hover:bg-white/20'
                            }`}
                          >
                            <Heart className={`w-5 h-5 ${likedProducts.has(product.id) ? 'fill-white text-white' : 'text-white'}`} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="touch-target p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all"
                          >
                            <Eye className="w-5 h-5 text-white" />
                          </motion.button>
                        </div>
                        
                        {/* Bottom Info Bar */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center justify-between backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4">
                            <div className="flex items-center gap-4 text-white text-sm font-bold">
                              <div className="flex items-center gap-1.5">
                                <Eye className="w-4 h-4" />
                                {product.views}
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Heart className="w-4 h-4" />
                                {product.likes}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'fill-amber-400 text-amber-400'
                                      : 'text-white/20'
                                  }`}
                                />
                              ))}
                              <span className="ml-1 text-sm font-bold">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover Gradient Glow */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-6 space-y-4">
                        <div>
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-black text-white group-hover:gradient-flux-text transition-all duration-300 leading-tight">
                              {product.name}
                            </h3>
                            <span className="text-xs text-white/50 uppercase font-bold">{product.category}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black gradient-flux-text">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-white/40 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          
                          <motion.button
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            className="touch-target flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all group/btn"
                            disabled={!product.inStock}
                          >
                            <ShoppingBag className="w-5 h-5 text-black group-hover/btn:scale-110 transition-transform" />
                          </motion.button>
                        </div>
                        
                        {/* Animated Underline */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          className="h-1 gradient-flux rounded-full origin-left"
                        />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <Search className="w-20 h-20 mx-auto text-white/20" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-4">No products found</h3>
              <p className="text-white/60 mb-8">Try adjusting your filters or search query</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory("All Products");
                  setSearchQuery("");
                  setPriceRange([0, 10000]);
                }}
                className="touch-target px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-2xl transition-all"
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
