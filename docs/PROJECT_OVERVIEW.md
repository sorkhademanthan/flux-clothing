# 🚀 FLUX - Project Overview & Backend Development Guide

## 📋 Table of Contents

1. [Project Introduction](#project-introduction)
2. [Tech Stack](#tech-stack)
3. [Application Architecture](#application-architecture)
4. [Pages & Features](#pages--features)
5. [Data Models](#data-models)
6. [API Requirements](#api-requirements)
7. [Database Schema](#database-schema)
8. [Authentication & Authorization](#authentication--authorization)
9. [File Upload & Storage](#file-upload--storage)
10. [Real-Time Features](#real-time-features)
11. [Payment Integration](#payment-integration)
12. [Blockchain Integration](#blockchain-integration)
13. [Third-Party Integrations](#third-party-integrations)
14. [Backend Recommendations](#backend-recommendations)
15. [Development Roadmap](#development-roadmap)

---

## 🎯 Project Introduction

**FLUX** is a next-generation phygital fashion e-commerce platform that bridges physical streetwear with digital experiences through:

- 🏷️ **NFC-embedded garments** for authentication
- ⛓️ **Blockchain verification** for ownership
- 👥 **Community-driven** design voting and engagement
- 🎨 **Limited micro-batch** production model
- 🌍 **Sustainable fashion** with zero waste
- 💎 **Exclusive access** to events and content

### **Key Value Propositions:**
1. Every garment has a digital twin on the blockchain
2. Ownership unlocks exclusive community access
3. Limited production = genuine scarcity
4. Community votes on future designs
5. Physical products = digital membership cards

---

## 🛠️ Tech Stack

### **Current Frontend Stack:**
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui + Aceternity UI
- **Icons:** Lucide React
- **Image Optimization:** Next.js Image

### **Build Info:**
```
Bundle Size: 29.9 kB (main page)
First Load JS: 210 kB
Static Pages: 5
Dynamic Routes: 1 (/products/[slug])
```

---

## 🏗️ Application Architecture

### **Current Pages:**

```
/                          → Homepage (Hero, Story, Products, Community)
/features                  → Features showcase
/products                  → Full product catalog
/products/[slug]           → Individual product detail pages
```

### **Component Structure:**

```
src/
├── app/
│   ├── layout.tsx         → Root layout with navbar
│   ├── page.tsx           → Homepage
│   ├── features/
│   │   └── page.tsx       → Features page
│   └── products/
│       ├── page.tsx       → Product catalog
│       └── [slug]/
│           └── page.tsx   → Product detail
│
├── components/
│   ├── site/              → Page-specific components
│   │   ├── hero.tsx
│   │   ├── brand-story-new.tsx
│   │   ├── product-grid.tsx
│   │   ├── featured-drop.tsx
│   │   ├── styled-by-tribe.tsx
│   │   └── navbar.tsx
│   └── ui/                → Reusable UI components (40+ components)
│
├── constants/
│   ├── brand-story.tsx    → Features, story cards, journey steps
│   ├── products.ts        → Product catalog data
│   └── ugc.ts             → User-generated content posts
│
├── types/
│   └── index.ts           → TypeScript type definitions
│
├── lib/
│   ├── utils.ts           → Utility functions
│   └── scroll-utils.ts    → Smooth scroll utilities
│
└── hooks/
    └── use-outside-click.tsx
```

---

## 📄 Pages & Features

### **1. Homepage (`/`)**

**Sections:**
- 🎬 **Hero Section**
  - Glitch text animations on both lines
  - Animated chess background
  - CTA buttons (Explore, Join Discord)
  
- 📖 **Brand Story**
  - Word-by-word blur reveal animations
  - Expandable cards with detailed content
  - Floating particles background
  - Magnetic buttons
  - Smooth scroll navigation

- 🛍️ **Product Catalog Preview**
  - 6 featured products
  - Badge system (UV Reactive, Bestseller, New, Limited, Premium, Eco)
  - 5-star rating display
  - "Add to Cart" buttons
  - Link to /products page

- 🎨 **NEON NOIR Collection**
  - Featured collection showcase
  - 3 hero products
  - Consistent card design
  - Add to cart CTAs

- 👥 **Community Section**
  - Massive animated header (8xl title)
  - Social proof stats (2.4k posts, 156k likes)
  - Featured post spotlight with rotating gradient border
  - Filter tabs (Latest/Popular/All Locations)
  - UGC cards with:
    - User avatars (hover reveal)
    - Sliding product tags
    - Animated like/comment buttons
    - View on Instagram CTAs
  - Load more functionality
  - Enhanced CTA section

### **2. Features Page (`/features`)**
- Feature showcases
- The Portal, Vault, Circle, Code
- Image galleries
- Value propositions

### **3. Product Catalog (`/products`)**
- 9 products displayed
- Category filters (All, Hoodies, Tops, Bottoms, Outerwear, Accessories)
- Search functionality
- Grid layout
- Each card links to detail page

### **4. Product Detail (`/products/[slug]`)**

**Current Products:**
- cyber-cargo
- flux-cap
- glitch-socks
- neon-hoodie
- glitch-hoodie
- neon-turtleneck
- void-jacket
- pulse-tee

**Features:**
- 4-image gallery with thumbnails
- Product name and price
- Size selection (XS, S, M, L, XL, XXL)
- Color selection (multiple variants)
- Quantity controls
- Add to Cart button
- Product description
- Details (material, care instructions)
- Shipping information

---

## 📊 Data Models

### **Current TypeScript Types:**

```typescript
// Product
interface Product {
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

// Feature
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
}

// Story Card
interface StoryCard {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
}

// Journey Step
interface JourneyStep {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

// UGC Post
interface UGCPost {
  id: number;
  user: string;
  location: string;
  likes: number;
  comments: number;
  image: string;
  items: string[];
}
```

---

## 🔌 API Requirements

### **Backend APIs Needed:**

#### **1. Authentication APIs**

```
POST   /api/auth/register          → User registration
POST   /api/auth/login             → User login
POST   /api/auth/logout            → User logout
POST   /api/auth/refresh           → Refresh access token
POST   /api/auth/forgot-password   → Password reset request
POST   /api/auth/reset-password    → Reset password
GET    /api/auth/me                → Get current user
POST   /api/auth/verify-email      → Verify email address
```

#### **2. Product APIs**

```
GET    /api/products                       → List all products
GET    /api/products/:slug                 → Get product by slug
GET    /api/products/category/:category    → Filter by category
GET    /api/products/search?q=query        → Search products
POST   /api/products                       → Create product (admin)
PUT    /api/products/:id                   → Update product (admin)
DELETE /api/products/:id                   → Delete product (admin)
GET    /api/products/:id/availability      → Check stock availability
```

#### **3. Cart APIs**

```
GET    /api/cart                → Get user's cart
POST   /api/cart/add            → Add item to cart
PUT    /api/cart/update         → Update cart item quantity
DELETE /api/cart/remove/:id     → Remove item from cart
DELETE /api/cart/clear          → Clear entire cart
```

#### **4. Order APIs**

```
POST   /api/orders                → Create new order
GET    /api/orders                → Get user's orders
GET    /api/orders/:id            → Get order details
PUT    /api/orders/:id/cancel     → Cancel order
GET    /api/orders/:id/track      → Track order
POST   /api/orders/:id/review     → Submit product review
```

#### **5. User APIs**

```
GET    /api/users/profile         → Get user profile
PUT    /api/users/profile         → Update profile
POST   /api/users/address         → Add shipping address
PUT    /api/users/address/:id     → Update address
DELETE /api/users/address/:id     → Delete address
GET    /api/users/wishlist        → Get wishlist
POST   /api/users/wishlist        → Add to wishlist
DELETE /api/users/wishlist/:id    → Remove from wishlist
```

#### **6. Community APIs**

```
GET    /api/community/posts              → Get UGC posts
GET    /api/community/posts/:id          → Get post details
POST   /api/community/posts              → Create UGC post
POST   /api/community/posts/:id/like     → Like post
POST   /api/community/posts/:id/comment  → Comment on post
GET    /api/community/featured           → Get featured post
GET    /api/community/filter             → Filter posts (latest/popular/location)
```

#### **7. Voting APIs (Community Design Voting)**

```
GET    /api/voting/designs              → Get designs to vote on
POST   /api/voting/designs/:id/vote     → Vote on design
GET    /api/voting/designs/:id/results  → Get voting results
```

#### **8. NFC/Blockchain APIs**

```
POST   /api/nfc/scan                    → Verify NFC tag
GET    /api/nfc/product/:id             → Get product blockchain info
POST   /api/blockchain/verify-ownership → Verify ownership
GET    /api/blockchain/digital-twin/:id → Get digital twin
```

#### **9. Discord Integration APIs**

```
POST   /api/discord/connect     → Connect Discord account
POST   /api/discord/verify      → Verify FLUX ownership for Discord access
GET    /api/discord/channels    → Get accessible channels
```

#### **10. Admin APIs**

```
GET    /api/admin/dashboard            → Dashboard stats
GET    /api/admin/orders               → Manage orders
PUT    /api/admin/orders/:id/status    → Update order status
GET    /api/admin/users                → Manage users
GET    /api/admin/analytics            → Analytics data
POST   /api/admin/products/batch       → Create micro-batch
PUT    /api/admin/products/:id/vault   → Vault a design (no restock)
```

---

## 🗄️ Database Schema

### **Recommended Database: PostgreSQL**

#### **1. Users Table**

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  avatar_url TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  discord_id VARCHAR(255) UNIQUE,
  role VARCHAR(50) DEFAULT 'customer', -- customer, tribe_member, admin
  tribe_points INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **2. Products Table**

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  badge VARCHAR(50), -- UV Reactive, Bestseller, New, etc.
  rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  in_stock BOOLEAN DEFAULT TRUE,
  stock_quantity INTEGER DEFAULT 0,
  batch_number VARCHAR(50), -- For micro-batch tracking
  is_vaulted BOOLEAN DEFAULT FALSE, -- No restock when TRUE
  nfc_enabled BOOLEAN DEFAULT TRUE,
  blockchain_contract VARCHAR(255), -- Smart contract address
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  vaulted_at TIMESTAMP
);
```

#### **3. Product Images Table**

```sql
CREATE TABLE product_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  is_primary BOOLEAN DEFAULT FALSE,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **4. Product Variants Table**

```sql
CREATE TABLE product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  size VARCHAR(20), -- XS, S, M, L, XL, XXL
  color VARCHAR(50),
  sku VARCHAR(100) UNIQUE NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  price_modifier DECIMAL(10, 2) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **5. Orders Table**

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  status VARCHAR(50) NOT NULL, -- pending, confirmed, shipped, delivered, cancelled
  subtotal DECIMAL(10, 2) NOT NULL,
  tax DECIMAL(10, 2) DEFAULT 0,
  shipping_fee DECIMAL(10, 2) DEFAULT 0,
  total DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(50),
  payment_status VARCHAR(50), -- pending, completed, failed
  payment_transaction_id VARCHAR(255),
  shipping_address_id UUID REFERENCES addresses(id),
  tracking_number VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  shipped_at TIMESTAMP,
  delivered_at TIMESTAMP
);
```

#### **6. Order Items Table**

```sql
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  variant_id UUID REFERENCES product_variants(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL, -- Price at time of purchase
  nfc_tag_id VARCHAR(255) UNIQUE, -- Assigned NFC tag for this item
  blockchain_token_id VARCHAR(255), -- NFT token ID
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **7. Addresses Table**

```sql
CREATE TABLE addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  label VARCHAR(50), -- Home, Work, etc.
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address_line1 VARCHAR(255) NOT NULL,
  address_line2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **8. Cart Table**

```sql
CREATE TABLE cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  variant_id UUID REFERENCES product_variants(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id, variant_id)
);
```

#### **9. Reviews Table**

```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  order_id UUID REFERENCES orders(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255),
  comment TEXT,
  images TEXT[], -- Array of image URLs
  verified_purchase BOOLEAN DEFAULT FALSE,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **10. UGC Posts Table**

```sql
CREATE TABLE ugc_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  username VARCHAR(100) NOT NULL, -- Can be Instagram handle
  location VARCHAR(255),
  image_url TEXT NOT NULL,
  caption TEXT,
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  featured_at TIMESTAMP,
  instagram_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **11. UGC Post Items Table**

```sql
CREATE TABLE ugc_post_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES ugc_posts(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **12. Design Voting Table**

```sql
CREATE TABLE design_proposals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  created_by UUID REFERENCES users(id),
  voting_starts_at TIMESTAMP NOT NULL,
  voting_ends_at TIMESTAMP NOT NULL,
  status VARCHAR(50) DEFAULT 'active', -- active, ended, approved, rejected
  total_votes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE design_votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  design_id UUID REFERENCES design_proposals(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(design_id, user_id)
);
```

#### **13. Wishlist Table**

```sql
CREATE TABLE wishlist_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id)
);
```

#### **14. NFC Tags Table**

```sql
CREATE TABLE nfc_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tag_id VARCHAR(255) UNIQUE NOT NULL, -- Physical NFC tag ID
  product_id UUID REFERENCES products(id),
  order_item_id UUID REFERENCES order_items(id),
  blockchain_token_id VARCHAR(255),
  is_activated BOOLEAN DEFAULT FALSE,
  activated_by UUID REFERENCES users(id),
  activated_at TIMESTAMP,
  scan_count INTEGER DEFAULT 0,
  last_scanned_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **15. Blockchain Tokens Table**

```sql
CREATE TABLE blockchain_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  token_id VARCHAR(255) UNIQUE NOT NULL,
  contract_address VARCHAR(255) NOT NULL,
  product_id UUID REFERENCES products(id),
  owner_address VARCHAR(255),
  owner_user_id UUID REFERENCES users(id),
  metadata_uri TEXT,
  transaction_hash VARCHAR(255),
  minted_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### **16. Tribe Membership Table**

```sql
CREATE TABLE tribe_memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) UNIQUE,
  tier VARCHAR(50) DEFAULT 'member', -- member, elite, founder
  total_purchases DECIMAL(10, 2) DEFAULT 0,
  tribe_points INTEGER DEFAULT 0,
  discord_access BOOLEAN DEFAULT FALSE,
  voting_power INTEGER DEFAULT 1,
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  tier_upgraded_at TIMESTAMP
);
```

---

## 🔐 Authentication & Authorization

### **Authentication Strategy:**

#### **Option 1: JWT-based (Recommended)**
- Access tokens (15 min expiry)
- Refresh tokens (7 days expiry)
- Store in httpOnly cookies
- CSRF protection

#### **Option 2: Session-based**
- Server-side sessions
- Redis for session storage
- Session expiry: 24 hours

### **Authorization Roles:**

```typescript
enum UserRole {
  CUSTOMER = 'customer',        // Regular buyer
  TRIBE_MEMBER = 'tribe_member', // Owns FLUX products
  ADMIN = 'admin',               // Full access
  SUPER_ADMIN = 'super_admin'    // System admin
}
```

### **Permission Matrix:**

| Feature | Customer | Tribe Member | Admin |
|---------|----------|--------------|-------|
| Browse Products | ✅ | ✅ | ✅ |
| Purchase | ✅ | ✅ | ✅ |
| Discord Access | ❌ | ✅ | ✅ |
| Vote on Designs | ❌ | ✅ | ✅ |
| UGC Posts | ❌ | ✅ | ✅ |
| Product Management | ❌ | ❌ | ✅ |
| User Management | ❌ | ❌ | ✅ |
| Analytics | ❌ | ❌ | ✅ |

### **Tribe Member Verification:**
- Automatically upgrade to TRIBE_MEMBER upon first purchase
- Verify ownership via blockchain
- Sync with Discord for role assignment

---

## 📁 File Upload & Storage

### **Upload Requirements:**

#### **1. Product Images**
- **Format:** JPEG, PNG, WebP
- **Max Size:** 5MB per image
- **Dimensions:** 800x800px minimum
- **Quantity:** 4-10 images per product
- **Storage:** CDN (Cloudinary, AWS S3, or Vercel Blob)

#### **2. UGC Images**
- **Format:** JPEG, PNG
- **Max Size:** 10MB
- **Dimensions:** 1080x1080px recommended
- **Processing:** Auto-resize, optimize, watermark

#### **3. User Avatars**
- **Format:** JPEG, PNG
- **Max Size:** 2MB
- **Dimensions:** 400x400px
- **Processing:** Crop to square, optimize

### **Recommended Storage Solution:**

**Option 1: Cloudinary**
```javascript
// Features:
- Auto-optimization
- Image transformations
- CDN delivery
- Free tier: 25GB storage, 25GB bandwidth
```

**Option 2: AWS S3 + CloudFront**
```javascript
// Features:
- Scalable storage
- CloudFront CDN
- Lifecycle policies
- Fine-grained access control
```

**Option 3: Vercel Blob (Easy Integration)**
```javascript
// Features:
- Native Next.js integration
- Edge network
- Simple API
- Free tier: 500GB bandwidth
```

---

## ⚡ Real-Time Features

### **Features Requiring Real-Time Updates:**

#### **1. Stock Availability**
- WebSocket for live stock updates
- Prevent overselling
- Show "X left in stock" messages

#### **2. Community Posts**
- Real-time likes/comments
- Live featured post updates
- New post notifications

#### **3. Design Voting**
- Live vote counts
- Real-time results
- Voting deadline countdowns

#### **4. Order Tracking**
- Live order status updates
- Shipping notifications
- Delivery confirmations

### **Recommended Technologies:**

**Option 1: Socket.io**
```javascript
// Pros: Easy to use, fallbacks, room support
// Use cases: All real-time features
```

**Option 2: Server-Sent Events (SSE)**
```javascript
// Pros: Simpler than WebSockets, HTTP-based
// Use cases: Stock updates, order tracking
```

**Option 3: Pusher/Ably (Managed Service)**
```javascript
// Pros: Managed infrastructure, scalable
// Use cases: All real-time features
```

---

## 💳 Payment Integration

### **Required Payment Methods:**

1. **Credit/Debit Cards** (Visa, Mastercard, Amex)
2. **UPI** (PhonePe, Google Pay, Paytm)
3. **Net Banking**
4. **Wallets** (Paytm, PhonePe, Amazon Pay)
5. **EMI Options** (for orders above ₹5,000)
6. **Cash on Delivery** (optional, with verification)

### **Recommended Payment Gateway:**

#### **Option 1: Razorpay (Recommended for India)**

```javascript
// Features:
✅ All Indian payment methods
✅ UPI, Cards, Wallets, Net Banking
✅ EMI options
✅ Webhook support
✅ Payment links
✅ Subscriptions (for future)
✅ 2% transaction fee

// Integration:
- Frontend: @razorpay/checkout
- Backend: razorpay Node.js SDK
```

#### **Option 2: Stripe**

```javascript
// Features:
✅ International payments
✅ Strong API
✅ Webhook support
✅ Payment intents
✅ 2.9% + ₹3 per transaction

// Integration:
- Frontend: @stripe/stripe-js
- Backend: stripe Node.js SDK
```

### **Payment Flow:**

```
1. User clicks "Place Order"
2. Backend creates order in database (status: pending)
3. Backend creates payment intent (Razorpay/Stripe)
4. Frontend shows payment modal
5. User completes payment
6. Payment gateway webhook hits backend
7. Backend verifies payment signature
8. Backend updates order status to "confirmed"
9. Backend reduces stock quantity
10. Backend sends confirmation email
11. Backend triggers blockchain token minting (if applicable)
```

---

## ⛓️ Blockchain Integration

### **Blockchain Use Cases:**

1. **Product Authentication**
   - Mint NFT for each product sold
   - Store product metadata on IPFS
   - Link NFC tag to NFT

2. **Ownership Verification**
   - Verify ownership before Discord access
   - Transfer ownership on resale
   - Track ownership history

3. **Digital Twin**
   - Each physical product has digital twin NFT
   - Metadata includes: product details, batch number, owner history
   - Unlockable content (AR experiences, exclusive designs)

### **Recommended Blockchain:**

#### **Option 1: Polygon (Recommended)**

```javascript
// Why Polygon:
✅ Low transaction fees (~$0.01)
✅ Fast confirmations (~2 seconds)
✅ Ethereum-compatible
✅ Good developer tooling
✅ Environmentally friendly (Proof of Stake)

// Use for:
- Minting product NFTs
- Ownership transfers
- Metadata storage
```

#### **Option 2: Solana**

```javascript
// Why Solana:
✅ Very low fees (~$0.00025)
✅ Very fast (~400ms)
✅ Growing ecosystem

// Considerations:
- Different programming model
- Less mature tooling
```

### **Smart Contract Requirements:**

```solidity
// FLUX Product NFT Contract

// Functions needed:
- mintProduct() → Mint NFT when product is purchased
- verifyOwnership() → Verify user owns NFT
- transferOwnership() → Transfer NFT on resale
- getProductMetadata() → Retrieve product details
- updateMetadata() → Update unlockable content
```

### **Recommended Tools:**

```javascript
// Smart Contract Development:
- Hardhat or Foundry (Solidity development)
- OpenZeppelin Contracts (NFT standards)
- Ethers.js (Blockchain interaction)

// Metadata Storage:
- IPFS (Pinata or NFT.Storage)
- Arweave (permanent storage)

// NFT Standards:
- ERC-721 (unique NFTs)
- ERC-1155 (semi-fungible, if needed)
```

---

## 🔗 Third-Party Integrations

### **1. Discord Integration**

**Purpose:** Community access for FLUX owners

**Requirements:**
- OAuth2 authentication
- Role assignment based on ownership
- Private channel access
- Webhook for notifications

**Discord Bot Needed:**
```javascript
// Bot Permissions:
- Manage Roles
- Kick Members (for verification)
- Send Messages
- Embed Links

// Commands:
/verify → Verify FLUX ownership
/profile → View user profile
/vote → Vote on designs
/points → View tribe points
```

**Implementation:**
```javascript
// Libraries:
- discord.js (Bot SDK)
- Discord OAuth2 (User authentication)

// Flow:
1. User connects Discord account
2. Backend verifies FLUX ownership (via blockchain or orders)
3. Backend assigns "Tribe Member" role
4. User gains access to private channels
```

### **2. Instagram Integration**

**Purpose:** UGC content aggregation

**Requirements:**
- Instagram Basic Display API
- Hashtag search (#FLUXOfficial)
- Media permissions
- User mentions

**Features:**
- Auto-import posts with hashtag
- Display in community section
- Track engagement
- Featured post selection

### **3. Email Service**

**Purpose:** Transactional emails

**Recommended:** SendGrid, Postmark, or AWS SES

**Emails Needed:**
- Welcome email
- Email verification
- Order confirmation
- Shipping notification
- Delivery confirmation
- Password reset
- Design voting reminders
- Drop announcements

### **4. SMS Service**

**Purpose:** OTP, order updates

**Recommended:** Twilio, MSG91 (India)

**Use Cases:**
- Phone verification
- Order status updates
- Delivery notifications
- Marketing (with opt-in)

### **5. Analytics**

**Recommended Tools:**
- Google Analytics 4
- Mixpanel (product analytics)
- Hotjar (heatmaps)
- Sentry (error tracking)

---

## 🏗️ Backend Recommendations

### **Recommended Tech Stack:**

#### **Option 1: Node.js + Express (Recommended)**

```javascript
// Stack:
- Runtime: Node.js 20+
- Framework: Express.js or Fastify
- Language: TypeScript
- ORM: Prisma or TypeORM
- Database: PostgreSQL
- Cache: Redis
- Queue: Bull or BullMQ
- File Upload: Multer + Cloudinary

// Pros:
✅ Same language as frontend (TypeScript)
✅ Large ecosystem
✅ Good for real-time (Socket.io)
✅ Fast development
✅ Good blockchain libraries

// Project Structure:
src/
├── api/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   └── validators/
├── services/
│   ├── auth.service.ts
│   ├── product.service.ts
│   ├── order.service.ts
│   ├── blockchain.service.ts
│   ├── payment.service.ts
│   └── email.service.ts
├── models/
├── utils/
├── config/
└── app.ts
```

#### **Option 2: Next.js API Routes (Simpler)**

```javascript
// Stack:
- Framework: Next.js 15
- API: App Router API routes
- Database: PostgreSQL with Prisma
- Auth: NextAuth.js
- File Upload: Vercel Blob

// Pros:
✅ Same codebase as frontend
✅ Serverless by default
✅ Easy deployment (Vercel)
✅ Built-in API routes

// Cons:
❌ Serverless limitations (cold starts)
❌ Less control over infrastructure
❌ Limited for complex workflows

// Project Structure:
app/
├── api/
│   ├── auth/
│   ├── products/
│   ├── orders/
│   ├── cart/
│   └── community/
└── ...
```

#### **Option 3: Python + FastAPI (Alternative)**

```python
# Stack:
- Framework: FastAPI
- Language: Python 3.11+
- ORM: SQLAlchemy
- Database: PostgreSQL
- Cache: Redis
- Queue: Celery

# Pros:
✅ Great for ML/AI (future recommendations)
✅ Fast performance
✅ Auto-generated docs (Swagger)
✅ Type hints

# Cons:
❌ Different language from frontend
❌ Blockchain libraries less mature
```

### **Recommended Architecture:**

```
┌─────────────────┐
│   Next.js App   │
│   (Frontend)    │
└────────┬────────┘
         │
         ↓ (HTTP/REST)
┌─────────────────┐
│   API Gateway   │
│  (Express.js)   │
└────────┬────────┘
         │
    ┌────┴────┬─────────────┬──────────────┐
    ↓         ↓             ↓              ↓
┌──────┐  ┌──────┐    ┌──────────┐  ┌──────────┐
│ Auth │  │ Shop │    │Community │  │Blockchain│
│Service│ │Service│   │ Service  │  │ Service  │
└──────┘  └──────┘    └──────────┘  └──────────┘
    │         │             │              │
    └────┬────┴─────────────┴──────────────┘
         ↓
┌─────────────────┐
│   PostgreSQL    │
└─────────────────┘

┌─────────────────┐
│   Redis Cache   │
└─────────────────┘

┌─────────────────┐
│ Message Queue   │
│   (Bull/MQ)     │
└─────────────────┘

┌─────────────────┐
│ Blockchain Node │
│   (Polygon)     │
└─────────────────┘
```

---

## 🚀 Development Roadmap

### **Phase 1: Core E-Commerce (4-6 weeks)**

**Week 1-2: Setup & Authentication**
- [ ] Set up backend project structure
- [ ] Database schema implementation
- [ ] User authentication (register, login, JWT)
- [ ] Email verification
- [ ] Password reset

**Week 3-4: Product & Cart**
- [ ] Product CRUD APIs
- [ ] Product search and filters
- [ ] Cart management
- [ ] Wishlist functionality
- [ ] Product reviews

**Week 5-6: Orders & Payments**
- [ ] Order creation and management
- [ ] Payment gateway integration (Razorpay)
- [ ] Order status tracking
- [ ] Email notifications
- [ ] Admin order management

### **Phase 2: Community Features (3-4 weeks)**

**Week 7-8: UGC & Community**
- [ ] UGC post creation and management
- [ ] Like/comment functionality
- [ ] Featured post selection
- [ ] Instagram integration
- [ ] Community filters and search

**Week 9-10: Voting & Discord**
- [ ] Design voting system
- [ ] Discord OAuth integration
- [ ] Discord bot setup
- [ ] Role assignment based on ownership
- [ ] Tribe points system

### **Phase 3: Blockchain Integration (3-4 weeks)**

**Week 11-12: Smart Contracts**
- [ ] Write and test smart contracts
- [ ] Deploy to Polygon testnet
- [ ] IPFS metadata storage
- [ ] NFT minting on purchase

**Week 13-14: NFC & Verification**
- [ ] NFC tag management
- [ ] Scan and verify functionality
- [ ] Ownership verification
- [ ] Digital twin display

### **Phase 4: Advanced Features (2-3 weeks)**

**Week 15-16: Real-Time & Analytics**
- [ ] WebSocket for real-time updates
- [ ] Stock availability notifications
- [ ] Analytics dashboard (admin)
- [ ] Performance optimization

**Week 17: Testing & Launch**
- [ ] End-to-end testing
- [ ] Load testing
- [ ] Security audit
- [ ] Production deployment

---

## 📝 API Documentation Template

### **Use Swagger/OpenAPI for documentation**

**Example:**

```yaml
openapi: 3.0.0
info:
  title: FLUX API
  version: 1.0.0
  description: Backend API for FLUX phygital fashion platform

paths:
  /api/products:
    get:
      summary: Get all products
      tags: [Products]
      parameters:
        - in: query
          name: category
          schema:
            type: string
        - in: query
          name: search
          schema:
            type: string
      responses:
        200:
          description: List of products
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Product'

components:
  schemas:
    Product:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        slug:
          type: string
        price:
          type: number
        category:
          type: string
        badge:
          type: string
        rating:
          type: number
        inStock:
          type: boolean
```

---

## 🔒 Security Considerations

### **Must Implement:**

1. **Input Validation**
   - Sanitize all user inputs
   - Use validation libraries (Joi, Zod, Yup)
   - Prevent SQL injection

2. **Authentication Security**
   - Hash passwords (bcrypt, argon2)
   - Rate limiting on auth endpoints
   - CSRF protection
   - XSS prevention

3. **API Security**
   - Rate limiting (express-rate-limit)
   - CORS configuration
   - API key for admin routes
   - Request size limits

4. **Payment Security**
   - Never store card details
   - Verify webhook signatures
   - Use HTTPS only
   - PCI DSS compliance

5. **Blockchain Security**
   - Secure private key storage (AWS KMS, HashiCorp Vault)
   - Gas limit protection
   - Contract audits
   - Multi-signature for critical operations

---

## 📦 Deployment Recommendations

### **Frontend (Next.js):**

**Recommended: Vercel**
```
✅ Zero-config deployment
✅ Automatic HTTPS
✅ Edge network
✅ Preview deployments
✅ Analytics included
```

**Alternative: Netlify, AWS Amplify**

### **Backend:**

**Option 1: Railway.app**
```
✅ Easy setup
✅ PostgreSQL included
✅ Redis included
✅ Auto-scaling
✅ GitHub integration
```

**Option 2: Render.com**
```
✅ Free PostgreSQL
✅ Free Redis
✅ Easy deployment
✅ Auto-scaling
```

**Option 3: AWS (Advanced)**
```
✅ Full control
✅ Scalable
✅ Many services
❌ More complex setup
```

### **Database:**

**Recommended: Supabase (PostgreSQL)**
```
✅ Managed PostgreSQL
✅ Realtime subscriptions
✅ Built-in auth (optional)
✅ Storage included
✅ Free tier: 500MB
```

**Alternative: Neon, Railway, AWS RDS**

### **File Storage:**

**Recommended: Cloudinary**
```
✅ Image optimization
✅ CDN included
✅ Transformations
✅ Free tier: 25GB
```

**Alternative: AWS S3, Vercel Blob**

---

## 📞 Support & Next Steps

### **Getting Started with Backend:**

1. **Choose your tech stack** (Recommended: Node.js + Express + PostgreSQL)
2. **Set up development environment**
3. **Clone this project** (frontend is ready)
4. **Implement Phase 1** (Authentication & Products)
5. **Connect to frontend** (update API endpoints)
6. **Test integration**
7. **Move to Phase 2**

### **Environment Variables Needed:**

```env
# Database
DATABASE_URL=postgresql://...

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_SECRET=your-refresh-secret
REFRESH_TOKEN_EXPIRES_IN=7d

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Payment (Razorpay)
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...

# Email (SendGrid)
SENDGRID_API_KEY=SG...
FROM_EMAIL=noreply@flux.com

# Cloudinary
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Discord
DISCORD_CLIENT_ID=...
DISCORD_CLIENT_SECRET=...
DISCORD_BOT_TOKEN=...

# Blockchain
POLYGON_RPC_URL=https://polygon-rpc.com
WALLET_PRIVATE_KEY=0x...
CONTRACT_ADDRESS=0x...

# Redis
REDIS_URL=redis://localhost:6379
```

---

## 🎉 Summary

You now have:

✅ **Complete project overview**
✅ **Full database schema** (16 tables)
✅ **API requirements** (60+ endpoints)
✅ **Authentication strategy**
✅ **Payment integration guide**
✅ **Blockchain integration plan**
✅ **Deployment recommendations**
✅ **4-phase development roadmap**

### **Next Action:**
1. Review this document
2. Choose your backend tech stack
3. Set up your development environment
4. Start with Phase 1 (Core E-Commerce)
5. Connect to the frontend (already built!)

**Your frontend is production-ready! Focus on building a solid backend to power it.** 🚀

---

*Built with ❤️ for FLUX - Where Physical Meets Digital* 🎨✨⛓️
