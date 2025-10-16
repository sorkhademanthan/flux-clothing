# 🚀 Quick Start Guide

Get FLUX up and running in 5 minutes!

---

## 📋 Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 20+** installed ([Download](https://nodejs.org/))
- ✅ **PostgreSQL 14+** installed ([Download](https://www.postgresql.org/download/))
- ✅ **Git** installed
- ✅ A code editor (VS Code recommended)

---

## ⚡ 5-Minute Setup

### Step 1: Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd basic-ui-project

# Install ALL dependencies (root, frontend, backend)
npm run install:all
```

### Step 2: Database Setup

```bash
# Create a PostgreSQL database
createdb flux_db

# Configure backend environment
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```env
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/flux_db?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-me"
PORT=5000
FRONTEND_URL=http://localhost:3000
```

```bash
# Generate Prisma Client & Run migrations
npm run prisma:generate
npm run prisma:migrate

# Return to root
cd ..
```

### Step 3: Start Development

```bash
# Run both frontend and backend simultaneously
npm run dev
```

**Done! 🎉**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)
- Health Check: [http://localhost:5000/health](http://localhost:5000/health)

---

## 📁 Project Overview

### Frontend (Next.js)
- **Location**: `frontend/`
- **Port**: 3000
- **Tech**: Next.js 15, TypeScript, Tailwind CSS
- **Pages**: Homepage, Features, Products, Product Details

### Backend (Express)
- **Location**: `backend/`
- **Port**: 5000
- **Tech**: Express, TypeScript, Prisma, PostgreSQL
- **API**: Authentication, Products, Orders, NFTs

---

## 🔧 Common Commands

### Development

```bash
# Run both frontend and backend
npm run dev

# Run individually
npm run dev:frontend    # Port 3000
npm run dev:backend     # Port 5000

# Or navigate to folders
cd frontend && npm run dev
cd backend && npm run dev
```

### Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Create/Run migrations
npm run prisma:migrate

# Open Prisma Studio (Database GUI)
npm run prisma:studio
```

### Code Quality

```bash
# Lint both projects
npm run lint

# Type check both projects
npm run type-check

# Format frontend code
cd frontend && npm run format
```

### Production

```bash
# Build both projects
npm run build

# Start production servers
npm run start:frontend
npm run start:backend
```

---

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID

### User
- `GET /api/users/profile` - Get profile
- `PUT /api/users/profile` - Update profile

### NFT
- `GET /api/nft` - Get user NFTs
- `POST /api/nft/verify` - Verify NFC tag

---

## 🐛 Troubleshooting

### Database Connection Error

```bash
# Check PostgreSQL is running
psql -U postgres -c "SELECT version();"

# Verify DATABASE_URL in backend/.env
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Prisma Issues

```bash
cd backend

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset

# Regenerate Prisma Client
npm run prisma:generate
```

### Node Modules Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
rm -rf backend/node_modules backend/package-lock.json

npm run install:all
```

---

## 📚 Next Steps

1. **Explore the frontend**: Visit [http://localhost:3000](http://localhost:3000)
2. **Test the API**: Use Postman or Thunder Client
3. **Check Prisma Studio**: `npm run prisma:studio`
4. **Read the docs**: Check `docs/` folder for detailed guides
5. **Start building**: Add your own features!

---

## 📖 Additional Resources

- **Project Overview**: [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md)
- **Backend API Docs**: [backend/README.md](backend/README.md)
- **Frontend Pages**: [docs/NAVIGATION_FLOW.md](docs/NAVIGATION_FLOW.md)
- **Database Schema**: [backend/prisma/schema.prisma](backend/prisma/schema.prisma)

---

## 🆘 Need Help?

- Check the [docs/](docs/) folder for detailed documentation
- Review backend logs in terminal
- Use Prisma Studio to inspect database
- Check browser console for frontend errors

**Happy Coding! 🎨⛓️**
