# 🚀 Quick Start - Backend Development

A practical guide to start building the FLUX backend immediately.

---

## 📋 Prerequisites

Before you start, make sure you have:

- ✅ Node.js 20+ installed
- ✅ PostgreSQL 14+ installed
- ✅ Redis installed (optional but recommended)
- ✅ Git installed
- ✅ Code editor (VS Code recommended)
- ✅ API testing tool (Postman, Insomnia, or Thunder Client)

---

## 🎯 Step-by-Step Setup

### **Step 1: Create Backend Project**

```bash
# Create backend directory
mkdir flux-backend
cd flux-backend

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express cors dotenv
npm install typescript @types/node @types/express @types/cors ts-node tsx --save-dev

# Initialize TypeScript
npx tsc --init
```

### **Step 2: Install Core Dependencies**

```bash
# Database & ORM
npm install prisma @prisma/client
npm install --save-dev prisma

# Authentication
npm install bcryptjs jsonwebtoken
npm install @types/bcryptjs @types/jsonwebtoken --save-dev

# Validation
npm install zod

# HTTP utilities
npm install axios

# Date utilities
npm install date-fns

# Environment validation
npm install envalid
```

### **Step 3: Initialize Prisma (Database)**

```bash
# Initialize Prisma
npx prisma init

# This creates:
# - prisma/schema.prisma
# - .env file
```

**Edit `.env`:**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/flux_db"
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="15m"
REFRESH_TOKEN_SECRET="your-refresh-token-secret"
REFRESH_TOKEN_EXPIRES_IN="7d"
PORT=4000
FRONTEND_URL="http://localhost:3000"
```

### **Step 4: Create Database Schema**

**Edit `prisma/schema.prisma`:**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// User model
model User {
  id            String    @id @default(uuid())
  email         String    @unique
  passwordHash  String    @map("password_hash")
  username      String    @unique
  fullName      String?   @map("full_name")
  phone         String?
  avatarUrl     String?   @map("avatar_url")
  emailVerified Boolean   @default(false) @map("email_verified")
  discordId     String?   @unique @map("discord_id")
  role          String    @default("customer")
  tribePoints   Int       @default(0) @map("tribe_points")
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  // Relations
  orders        Order[]
  addresses     Address[]
  cartItems     CartItem[]
  reviews       Review[]
  wishlistItems WishlistItem[]
  tribeMembership TribeMembership?

  @@map("users")
}

// Product model
model Product {
  id           String   @id @default(uuid())
  slug         String   @unique
  name         String
  description  String?  @db.Text
  price        Decimal  @db.Decimal(10, 2)
  category     String
  badge        String?
  rating       Decimal? @default(0) @db.Decimal(2, 1)
  reviewCount  Int      @default(0) @map("review_count")
  inStock      Boolean  @default(true) @map("in_stock")
  stockQuantity Int     @default(0) @map("stock_quantity")
  batchNumber  String?  @map("batch_number")
  isVaulted    Boolean  @default(false) @map("is_vaulted")
  nfcEnabled   Boolean  @default(true) @map("nfc_enabled")
  blockchainContract String? @map("blockchain_contract")
  createdAt    DateTime @default(now()) @map("created_at")
  updatedAt    DateTime @updatedAt @map("updated_at")
  vaultedAt    DateTime? @map("vaulted_at")

  // Relations
  images       ProductImage[]
  variants     ProductVariant[]
  orderItems   OrderItem[]
  cartItems    CartItem[]
  reviews      Review[]
  wishlistItems WishlistItem[]

  @@map("products")
}

// Add more models as needed...
```

**Run migration:**
```bash
npx prisma migrate dev --name init
```

### **Step 5: Create Project Structure**

```bash
# Create folder structure
mkdir -p src/{api/{routes,controllers,middlewares,validators},services,utils,config,types}

# Create main files
touch src/app.ts
touch src/server.ts
touch src/config/env.ts
```

**Project structure:**
```
flux-backend/
├── src/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── product.routes.ts
│   │   │   ├── cart.routes.ts
│   │   │   └── order.routes.ts
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   ├── product.controller.ts
│   │   │   ├── cart.controller.ts
│   │   │   └── order.controller.ts
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── validate.middleware.ts
│   │   └── validators/
│   │       ├── auth.validator.ts
│   │       └── product.validator.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── product.service.ts
│   │   ├── cart.service.ts
│   │   ├── order.service.ts
│   │   └── email.service.ts
│   ├── utils/
│   │   ├── jwt.util.ts
│   │   ├── hash.util.ts
│   │   └── response.util.ts
│   ├── config/
│   │   ├── env.ts
│   │   └── prisma.ts
│   ├── types/
│   │   └── index.ts
│   ├── app.ts
│   └── server.ts
├── prisma/
│   └── schema.prisma
├── .env
├── .gitignore
├── package.json
└── tsconfig.json
```

### **Step 6: Basic Server Setup**

**`src/config/env.ts`:**
```typescript
import { cleanEnv, str, port } from 'envalid';

export const env = cleanEnv(process.env, {
  DATABASE_URL: str(),
  JWT_SECRET: str(),
  JWT_EXPIRES_IN: str({ default: '15m' }),
  REFRESH_TOKEN_SECRET: str(),
  REFRESH_TOKEN_EXPIRES_IN: str({ default: '7d' }),
  PORT: port({ default: 4000 }),
  FRONTEND_URL: str({ default: 'http://localhost:3000' }),
});
```

**`src/config/prisma.ts`:**
```typescript
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});
```

**`src/app.ts`:**
```typescript
import express from 'express';
import cors from 'cors';
import { env } from './config/env';

// Create Express app
export const app = express();

// Middlewares
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'FLUX API Server' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  });
});
```

**`src/server.ts`:**
```typescript
import { app } from './app';
import { env } from './config/env';
import { prisma } from './config/prisma';

const PORT = env.PORT;

async function start() {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✅ Database connected');

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

start();
```

**`package.json` - Add scripts:**
```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
  }
}
```

### **Step 7: Run the Server**

```bash
# Generate Prisma client
npm run prisma:generate

# Start development server
npm run dev

# Server should be running on http://localhost:4000
```

**Test it:**
```bash
curl http://localhost:4000/health
# Should return: {"status":"ok","timestamp":"..."}
```

---

## 🔐 Implement Authentication (First Feature)

### **1. Create Auth Service**

**`src/services/auth.service.ts`:**
```typescript
import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma';
import { generateTokens } from '../utils/jwt.util';

export class AuthService {
  async register(data: { email: string; password: string; username: string; fullName?: string }) {
    // Check if user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }, { username: data.username }],
      },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(data.password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        username: data.username,
        fullName: data.fullName,
      },
    });

    // Generate tokens
    const tokens = generateTokens(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
      },
      tokens,
    };
  }

  async login(email: string, password: string) {
    // Find user
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.passwordHash);

    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    // Generate tokens
    const tokens = generateTokens(user.id);

    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        role: user.role,
      },
      tokens,
    };
  }
}
```

### **2. Create JWT Utilities**

**`src/utils/jwt.util.ts`:**
```typescript
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export function generateTokens(userId: string) {
  const accessToken = jwt.sign({ userId }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

  const refreshToken = jwt.sign({ userId }, env.REFRESH_TOKEN_SECRET, {
    expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
  });

  return { accessToken, refreshToken };
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET) as { userId: string };
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, env.REFRESH_TOKEN_SECRET) as { userId: string };
}
```

### **3. Create Auth Controller**

**`src/api/controllers/auth.controller.ts`:**
```typescript
import { Request, Response } from 'express';
import { AuthService } from '../../services/auth.service';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const result = await authService.register(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.json(result);
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  }
}
```

### **4. Create Auth Routes**

**`src/api/routes/auth.routes.ts`:**
```typescript
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));

export default router;
```

### **5. Mount Routes in App**

**Update `src/app.ts`:**
```typescript
import authRoutes from './api/routes/auth.routes';

// ... existing code ...

// Routes
app.use('/api/auth', authRoutes);

// ... rest of the code ...
```

### **6. Test Authentication**

**Register:**
```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@flux.com",
    "password": "password123",
    "username": "testuser",
    "fullName": "Test User"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@flux.com",
    "password": "password123"
  }'
```

---

## 🛍️ Next Steps

Now that you have authentication working:

### **Phase 1 - Continue:**
1. ✅ Authentication (Done)
2. **Product APIs** (Next - see [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md#2-product-apis))
3. Cart management
4. Order creation
5. Payment integration

### **Useful Commands:**

```bash
# Database
npm run prisma:migrate      # Run migrations
npm run prisma:studio       # Open database GUI
npm run prisma:generate     # Generate Prisma client

# Development
npm run dev                 # Start dev server
npm run build               # Build for production
npm start                   # Start production server
```

---

## 📚 Additional Resources

- **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - Complete API specs
- **[Prisma Docs](https://www.prisma.io/docs/)** - Database ORM
- **[Express.js Docs](https://expressjs.com/)** - Web framework
- **[TypeScript Docs](https://www.typescriptlang.org/)** - Language reference

---

## 🎉 You're Ready!

You now have:
- ✅ Backend server running
- ✅ PostgreSQL connected
- ✅ Prisma ORM configured
- ✅ Authentication working
- ✅ Project structure established

**Next:** Build product APIs and connect to the frontend!

---

*Happy Coding! 🚀*
