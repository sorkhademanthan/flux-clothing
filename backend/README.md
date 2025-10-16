# FLUX Backend API

Backend API for the FLUX Phygital Fashion Platform built with Node.js, Express, TypeScript, and Prisma.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: express-validator

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/       # Route handlers
│   │   ├── auth.controller.ts
│   │   ├── product.controller.ts
│   │   ├── order.controller.ts
│   │   ├── user.controller.ts
│   │   └── nft.controller.ts
│   ├── routes/           # API routes
│   │   ├── auth.routes.ts
│   │   ├── product.routes.ts
│   │   ├── order.routes.ts
│   │   ├── user.routes.ts
│   │   └── nft.routes.ts
│   ├── middleware/       # Custom middleware
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   └── notFound.ts
│   ├── config/          # Configuration
│   │   └── database.ts
│   ├── models/          # Database models (Prisma)
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   ├── types/           # TypeScript types
│   └── server.ts        # Entry point
├── prisma/
│   └── schema.prisma    # Database schema
├── package.json
├── tsconfig.json
└── .env.example
```

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Update the following variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/flux_db?schema=public"
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### 3. Database Setup

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Open Prisma Studio (optional)
npm run prisma:studio
```

### 4. Start Development Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders

- `POST /api/orders` - Create order (Authenticated)
- `GET /api/orders` - Get user orders (Authenticated)
- `GET /api/orders/:id` - Get order by ID (Authenticated)

### User

- `GET /api/users/profile` - Get user profile (Authenticated)
- `PUT /api/users/profile` - Update user profile (Authenticated)

### NFT

- `GET /api/nft` - Get user NFTs (Authenticated)
- `POST /api/nft/verify` - Verify NFC tag (Authenticated)

## 🔐 Authentication

All protected routes require JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## 🗄️ Database Models

- **User** - User accounts and authentication
- **Product** - Product catalog
- **Order** - Customer orders
- **OrderItem** - Order line items
- **Address** - Shipping addresses
- **NFT** - Digital twins and NFC tags
- **DesignVote** - Community design voting
- **UGCPost** - User-generated content

## 🚀 Deployment

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio

## 🔒 Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- CORS enabled for frontend
- Input validation with express-validator
- Environment variables for sensitive data

## 📚 Future Features

- [ ] Payment integration (Razorpay/Stripe)
- [ ] File upload (Cloudinary)
- [ ] Email notifications
- [ ] Redis caching
- [ ] Rate limiting
- [ ] Blockchain integration (Polygon)
- [ ] Discord bot integration
- [ ] WebSocket for real-time updates
