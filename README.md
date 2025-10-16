# 🎨 FLUX - Phygital Fashion Platform

**Where Physical Meets Digital** ⛓️✨

A next-generation e-commerce platform bridging streetwear with blockchain technology, community engagement, and exclusive digital experiences.

---

## 🌟 What is FLUX?

FLUX is not just a clothing brand—it's a **phygital fashion movement** that combines:

- 🏷️ **NFC-embedded garments** for authentication and digital experiences
- ⛓️ **Blockchain verification** ensuring genuine ownership
- 👥 **Community-driven** design voting and exclusive access
- 🎨 **Limited micro-batches** creating genuine scarcity
- 🌍 **Sustainable production** with zero waste
- 💎 **Digital twins** for every physical product

---

## ✨ Features

### **For Customers:**
- Browse stunning product catalog with advanced animations
- Purchase limited-edition streetwear
- Scan NFC tags to unlock digital twins
- Verify blockchain ownership
- Access exclusive Discord community
- Vote on future designs
- Share UGC content and get featured

### **For Tribe Members:**
- Automatic Discord role assignment
- Private community channels
- Early access to drops
- Design voting rights
- Tribe points system
- Exclusive IRL events

### **For Admins:**
- Product management
- Order processing
- Micro-batch creation
- Design vaulting (no restocks)
- Community moderation
- Analytics dashboard

---

## 🚀 Tech Stack

### **Frontend** (✅ Complete)
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui + Aceternity UI
- **Icons:** Lucide React

### **Backend** (✅ Complete)
- **Runtime:** Node.js + Express + TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT + bcrypt
- **Validation:** express-validator
- **Future:** Redis, Cloudinary, Razorpay/Stripe, Polygon

---

## 📁 Project Structure (Monorepo)

```
basic-ui-project/
├── frontend/                  # Next.js Application
│   ├── src/
│   │   ├── app/              # Next.js pages
│   │   │   ├── page.tsx      # Homepage
│   │   │   ├── features/     # Features page
│   │   │   └── products/     # Product catalog & details
│   │   ├── components/
│   │   │   ├── site/         # Page components
│   │   │   └── ui/           # 40+ reusable components
│   │   ├── constants/        # Static data
│   │   ├── types/            # TypeScript types
│   │   ├── lib/              # Utilities
│   │   └── hooks/            # Custom hooks
│   ├── public/               # Static assets
│   └── package.json
│
├── backend/                   # Express API
│   ├── src/
│   │   ├── controllers/      # Route handlers
│   │   ├── routes/           # API endpoints
│   │   ├── middleware/       # Auth, validation, error handling
│   │   ├── config/           # Configuration
│   │   └── server.ts         # Entry point
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   └── package.json
│
├── docs/                      # 📚 Complete documentation
│   ├── README.md             # Docs index
│   ├── PROJECT_OVERVIEW.md   # ⭐ START HERE
│   └── ... (15 docs total)
│
├── package.json              # Root scripts
└── README.md                 # This file
```

---

## 🎯 Getting Started

### **Prerequisites:**
- Node.js 20+
- PostgreSQL 14+
- npm or yarn
- Git

### **Installation:**

```bash
# Clone the repository
git clone <your-repo-url>
cd basic-ui-project

# Install all dependencies (root, frontend, backend)
npm run install:all

# Or install individually
npm install              # Root
cd frontend && npm install
cd ../backend && npm install
```

### **Backend Setup:**

```bash
# Configure environment
cd backend
cp .env.example .env
# Edit .env with your database URL and secrets

# Setup database
npm run prisma:generate
npm run prisma:migrate

# Optional: Open Prisma Studio
npm run prisma:studio
```

### **Development:**

```bash
# From root: Run both frontend and backend
npm run dev

# Or run individually
npm run dev:frontend   # Frontend on http://localhost:3000
npm run dev:backend    # Backend on http://localhost:5000

# Or run from each folder
cd frontend && npm run dev
cd backend && npm run dev
```

### **Build for Production:**

```bash
# Build both
npm run build

# Or build individually
npm run build:frontend
npm run build:backend

# Start production servers
npm run start:frontend
npm run start:backend
```

---

## 📖 Documentation

All documentation is in the [`docs/`](./docs) folder.

### **📚 Start Here:**

1. **[docs/PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md)** ⭐
   - Complete project overview
   - Backend development guide
   - Database schema (16 tables)
   - API requirements (60+ endpoints)
   - Development roadmap

2. **[docs/README.md](./docs/README.md)**
   - Documentation index
   - Quick links by feature
   - Design system summary

### **📄 Key Documents:**

- **[COLLECTION_AND_COMMUNITY_IMPROVEMENTS.md](./docs/COLLECTION_AND_COMMUNITY_IMPROVEMENTS.md)** - Latest features
- **[PRODUCT_DETAIL_PAGE.md](./docs/PRODUCT_DETAIL_PAGE.md)** - Product pages
- **[CATALOG_COMPLETE.md](./docs/CATALOG_COMPLETE.md)** - Product catalog
- **[NAVIGATION_FLOW.md](./docs/NAVIGATION_FLOW.md)** - User journey

---

## 🎨 Pages

### **Live Pages:**

| Page | URL | Status | Features |
|------|-----|--------|----------|
| **Homepage** | `/` | ✅ Complete | Hero, Story, Products, Community |
| **Features** | `/features` | ✅ Complete | Feature showcases, value props |
| **Catalog** | `/products` | ✅ Complete | 9 products, filters, search |
| **Product Detail** | `/products/[slug]` | ✅ Complete | Gallery, variants, add to cart |

### **Homepage Sections:**

1. **🎬 Hero**
   - Glitch text animations
   - Animated chess background
   - CTAs (Explore, Discord)

2. **📖 Brand Story**
   - 4 expandable cards
   - Word-by-word animations
   - Floating particles
   - Magnetic buttons

3. **🛍️ Product Catalog**
   - 6 featured products
   - Badge system
   - 5-star ratings
   - Add to cart

4. **🎨 NEON NOIR Collection**
   - 3 hero products
   - Consistent design
   - Clean CTAs

5. **👥 Community**
   - Animated header (8xl title)
   - Social proof stats
   - Featured post spotlight
   - Filter tabs
   - UGC cards with interactions
   - Instagram CTAs

---

## 🎨 Design System

### **Colors:**
```css
Primary:    Purple (#A855F7) to Blue (#6366F1)
Secondary:  Cyan (#06B6D4)
Accent:     Pink (#EC4899)
Background: Black (#000000)
Text:       White (#FFFFFF)
```

### **Components:**
- 40+ UI components
- Custom: FloatingParticles, MagneticButton
- Motion-enabled throughout

### **Animations:**
- Framer Motion
- Smooth transitions (300-800ms)
- Staggered reveals
- Spring physics
- GPU-accelerated

---

## 🔧 Scripts

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript check

# Testing
npm test             # Run tests
npm run test:watch   # Watch mode
```

---

## 🗄️ Data Models

Current static data in `/src/constants/`:

- **Products** (6 catalog items)
- **Features** (4 main features)
- **Story Cards** (4 expandable cards)
- **UGC Posts** (6 community posts)
- **Journey Steps** (4 steps)

**Next Step:** Connect to backend APIs (see [PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md))

---

## 🔌 API Integration (To Do)

The frontend is ready to connect to backend APIs. Required endpoints:

### **Core APIs:**
- `GET /api/products` - Product catalog
- `GET /api/products/:slug` - Product details
- `POST /api/cart` - Cart management
- `POST /api/orders` - Order creation
- `POST /api/auth/login` - Authentication

### **Community APIs:**
- `GET /api/community/posts` - UGC posts
- `POST /api/community/posts/:id/like` - Like posts
- `GET /api/community/featured` - Featured post

See complete API specification in [PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md#api-requirements)

---

## ⛓️ Blockchain Integration (To Do)

### **Smart Contract Requirements:**
- ERC-721 NFT for each product
- Metadata on IPFS
- Ownership verification
- NFC tag linking

### **Recommended Chain:**
- **Polygon** (low fees, fast)
- Alternative: Solana

See detailed blockchain guide in [PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md#blockchain-integration)

---

## 🚀 Development Roadmap

### **Phase 1: Core E-Commerce (4-6 weeks)** 🚧
- [ ] Backend setup (Node.js + Express + PostgreSQL)
- [ ] Authentication (JWT)
- [ ] Product APIs
- [ ] Cart and checkout
- [ ] Payment integration (Razorpay)
- [ ] Order management

### **Phase 2: Community Features (3-4 weeks)** 📋
- [ ] UGC post management
- [ ] Like/comment system
- [ ] Discord OAuth integration
- [ ] Design voting system
- [ ] Tribe points

### **Phase 3: Blockchain Integration (3-4 weeks)** 📋
- [ ] Smart contracts (Polygon)
- [ ] NFT minting on purchase
- [ ] NFC tag management
- [ ] Ownership verification
- [ ] Digital twin display

### **Phase 4: Advanced Features (2-3 weeks)** 📋
- [ ] Real-time updates (Socket.io)
- [ ] Stock notifications
- [ ] Analytics dashboard
- [ ] Performance optimization
- [ ] Production deployment

---

## 📊 Current Status

```
Frontend:    ████████████████████ 100% ✅
Backend:     ░░░░░░░░░░░░░░░░░░░░   0% 🚧
Integration: ░░░░░░░░░░░░░░░░░░░░   0% 📋
Testing:     ░░░░░░░░░░░░░░░░░░░░   0% 📋
Deployment:  ░░░░░░░░░░░░░░░░░░░░   0% 📋
```

**Next Focus:** Backend API development

---

## 🎯 Key Features Summary

### **✅ Implemented (Frontend):**
- Stunning homepage with animations
- Product catalog with filters
- Product detail pages
- Community showcase
- Featured post spotlight
- Filter tabs
- Animated UGC cards
- Responsive design
- 15+ micro-interactions
- Smooth animations throughout

### **🚧 To Implement (Backend):**
- User authentication
- Product management
- Cart and checkout
- Payment processing
- Order tracking
- Community features
- Design voting
- NFC/Blockchain integration
- Discord integration
- Real-time updates

---

## 🤝 Contributing

### **Guidelines:**
1. Follow existing code structure
2. Use TypeScript
3. Follow Tailwind CSS conventions
4. Add animations with Framer Motion
5. Document new features
6. Test responsive design

### **Commit Messages:**
```
feat: Add new feature
fix: Bug fix
docs: Documentation update
style: Code style changes
refactor: Code refactoring
test: Add tests
```

---

## 📄 License

[Your License Here]

---

## 📞 Contact & Support

- **Website:** [Your Website]
- **Email:** [Your Email]
- **Discord:** [Your Discord Server]
- **Instagram:** [@flux.official](https://instagram.com/flux.official)

---

## 🎉 Acknowledgments

### **UI Libraries:**
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Aceternity UI](https://ui.aceternity.com/) - Premium components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide](https://lucide.dev/) - Icons

### **Inspiration:**
- Modern streetwear brands
- Web3 fashion pioneers
- Community-driven platforms
- Award-winning e-commerce sites

---

## 🚀 Quick Links

- 📚 [Complete Documentation](./docs/README.md)
- ⭐ [Backend Development Guide](./docs/PROJECT_OVERVIEW.md)
- 🎨 [Latest Features](./docs/COLLECTION_AND_COMMUNITY_IMPROVEMENTS.md)
- 🛍️ [Product Catalog](./docs/CATALOG_COMPLETE.md)
- 👥 [Community Features](./docs/COLLECTION_AND_COMMUNITY_IMPROVEMENTS.md)

---

**Built with ❤️ for FLUX - Where Physical Meets Digital** 🎨✨⛓️

*Ready to revolutionize fashion? Let's build the future together!* 🚀
