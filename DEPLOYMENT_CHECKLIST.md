# ✅ FLUX Application Deployment Checklist

This checklist ensures your application runs perfectly. Check off each item as you complete it.

---

## 🎯 Phase 1: Prerequisites & System Requirements

### 1.1 System Software
- [ ] **Node.js 20+** installed and working
  ```bash
  node --version  # Should be v20.x or higher
  npm --version   # Should be 10.x or higher
  ```

- [ ] **PostgreSQL 14+** installed
  ```bash
  # macOS (install if not present)
  brew install postgresql@14
  brew services start postgresql@14
  
  # Verify installation
  psql --version
  
  # Linux
  sudo apt install postgresql-14
  
  # Windows: Download from postgresql.org
  ```

- [ ] **Git** installed
  ```bash
  git --version
  ```

### 1.2 Optional Tools (Recommended)
- [ ] **Database GUI**: [Prisma Studio](https://www.prisma.io/studio) (built-in) or [pgAdmin](https://www.pgadmin.org/)
- [ ] **API Testing**: [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- [ ] **Code Editor**: [VS Code](https://code.visualstudio.com/)

---

## 🗄️ Phase 2: Database Setup

### 2.1 Create Database
- [ ] Create PostgreSQL database
  ```bash
  # Connect to PostgreSQL
  psql postgres
  
  # Inside psql:
  CREATE DATABASE flux_db;
  CREATE USER flux_user WITH PASSWORD 'your_secure_password';
  GRANT ALL PRIVILEGES ON DATABASE flux_db TO flux_user;
  \q
  ```

### 2.2 Test Database Connection
- [ ] Verify you can connect
  ```bash
  psql -U flux_user -d flux_db
  # Enter password when prompted
  # You should see: flux_db=>
  \q
  ```

### 2.3 Note Your Database Credentials
- [ ] Write down:
  - Username: `flux_user` (or your chosen username)
  - Password: `your_secure_password`
  - Database: `flux_db`
  - Host: `localhost`
  - Port: `5432` (default)

---

## ⚙️ Phase 3: Backend Configuration

### 3.1 Environment Variables
- [ ] Configure `backend/.env` file
  ```bash
  cd backend
  
  # File should already exist, just update these values:
  nano .env  # or use your preferred editor
  ```

- [ ] **Update these CRITICAL values in backend/.env:**
  ```env
  # 1. Database Connection (REQUIRED)
  DATABASE_URL="postgresql://flux_user:your_secure_password@localhost:5432/flux_db"
  
  # 2. JWT Secrets (REQUIRED - Generate random strings)
  JWT_SECRET="generate-a-random-32-char-string-here-abc123xyz789"
  REFRESH_TOKEN_SECRET="another-random-32-char-string-def456uvw012"
  
  # 3. Server Configuration
  PORT=4000
  NODE_ENV="development"
  
  # 4. Frontend URL
  FRONTEND_URL="http://localhost:3000"
  
  # Keep other values as-is for now (optional features)
  ```

- [ ] **Generate secure JWT secrets** (choose one method):
  ```bash
  # Method 1: Using Node.js
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  
  # Method 2: Using OpenSSL
  openssl rand -hex 32
  
  # Run twice to get 2 different secrets
  ```

### 3.2 Backend Dependencies
- [ ] Install backend packages
  ```bash
  cd backend
  npm install
  ```

### 3.3 Prisma Setup
- [ ] Generate Prisma Client
  ```bash
  npm run prisma:generate
  ```

- [ ] Run database migrations
  ```bash
  npm run prisma:migrate
  # When prompted, name it: "init"
  ```

- [ ] Verify migration success
  ```bash
  # Open Prisma Studio to view database
  npm run prisma:studio
  # Should open at http://localhost:5555
  # You should see all tables (User, Product, Order, etc.)
  ```

### 3.4 Backend Type Check
- [ ] Verify no TypeScript errors
  ```bash
  npm run type-check
  # Should complete with no errors
  ```

### 3.5 Test Backend Server
- [ ] Start backend
  ```bash
  npm run dev
  # Should see: "🚀 Server running on http://localhost:4000"
  ```

- [ ] Test health endpoint
  ```bash
  # In another terminal:
  curl http://localhost:4000/health
  # Should return: {"status":"ok","message":"FLUX Backend API is running"}
  ```

- [ ] Stop backend (Ctrl+C)

---

## 🎨 Phase 4: Frontend Configuration

### 4.1 Frontend Dependencies
- [ ] Install frontend packages
  ```bash
  cd frontend  # from project root
  npm install
  ```

### 4.2 Frontend Environment (Optional)
- [ ] Create `frontend/.env.local` if needed for API calls
  ```bash
  cd frontend
  cat > .env.local << EOL
  NEXT_PUBLIC_API_URL=http://localhost:4000/api
  EOL
  ```

### 4.3 Frontend Type Check
- [ ] Verify no TypeScript errors
  ```bash
  npm run type-check
  # Should complete with no errors
  ```

### 4.4 Frontend Build Test
- [ ] Test production build
  ```bash
  npm run build
  # Should complete successfully
  ```

### 4.5 Test Frontend Server
- [ ] Start frontend
  ```bash
  npm run dev
  # Should see: "▲ Next.js 15.x.x"
  # "Local: http://localhost:3000"
  ```

- [ ] Open browser to http://localhost:3000
  - [ ] Homepage loads correctly
  - [ ] Navigation works
  - [ ] No console errors

- [ ] Stop frontend (Ctrl+C)

---

## 🚀 Phase 5: Full Application Test

### 5.1 Run Both Services
- [ ] Start from project root
  ```bash
  cd /path/to/basic-ui-project
  npm run dev
  # This starts BOTH frontend and backend
  ```

- [ ] Verify both are running:
  - [ ] Frontend: http://localhost:3000 ✅
  - [ ] Backend: http://localhost:4000/health ✅

### 5.2 Test Frontend Pages
- [ ] Homepage (http://localhost:3000)
  - [ ] Hero section loads
  - [ ] Featured drop section visible
  - [ ] Product grid displays
  - [ ] Animations working smoothly
  - [ ] No console errors

- [ ] Features page (http://localhost:3000/features)
  - [ ] Page loads correctly

- [ ] Products page (http://localhost:3000/products)
  - [ ] Product list displays
  - [ ] Click on a product works

- [ ] Product detail page (http://localhost:3000/products/[any-slug])
  - [ ] Individual product page loads

### 5.3 Test API Endpoints

#### Using curl:
```bash
# Test products endpoint
curl http://localhost:4000/api/products

# Test authentication (should fail without token)
curl http://localhost:4000/api/users/profile
```

#### Using Postman/Thunder Client:

- [ ] **Register a new user**
  ```
  POST http://localhost:4000/api/auth/register
  Content-Type: application/json
  
  {
    "email": "test@flux.com",
    "username": "testuser",
    "password": "Test123!@#",
    "fullName": "Test User"
  }
  ```
  - [ ] Should return user object and token

- [ ] **Login**
  ```
  POST http://localhost:4000/api/auth/login
  Content-Type: application/json
  
  {
    "email": "test@flux.com",
    "password": "Test123!@#"
  }
  ```
  - [ ] Should return token
  - [ ] Save the token for next tests

- [ ] **Get Profile** (authenticated)
  ```
  GET http://localhost:4000/api/users/profile
  Authorization: Bearer YOUR_TOKEN_HERE
  ```
  - [ ] Should return user profile

- [ ] **Get Products**
  ```
  GET http://localhost:4000/api/products
  ```
  - [ ] Should return empty array [] (no products yet)

### 5.4 Database Verification
- [ ] Open Prisma Studio
  ```bash
  cd backend
  npm run prisma:studio
  ```

- [ ] Check tables:
  - [ ] `users` table has your test user
  - [ ] All other tables exist (products, orders, etc.)

---

## 🔍 Phase 6: Quality Checks

### 6.1 Code Quality
- [ ] Run linters
  ```bash
  # From project root
  npm run lint
  ```

- [ ] Fix any lint errors
  ```bash
  cd frontend && npm run lint:fix
  ```

### 6.2 Type Safety
- [ ] Type check both projects
  ```bash
  npm run type-check
  # Should show 0 errors
  ```

### 6.3 Git Status
- [ ] Check uncommitted changes
  ```bash
  git status
  ```

- [ ] Commit any important changes
  ```bash
  git add .
  git commit -m "Setup complete: backend and frontend working"
  ```

---

## 📊 Phase 7: Performance & Optimization

### 7.1 Backend Performance
- [ ] Check backend logs for errors
- [ ] Verify database queries are not slow (check terminal output)
- [ ] Test API response times (<100ms for simple endpoints)

### 7.2 Frontend Performance
- [ ] Check Lighthouse score
  - Open Chrome DevTools (F12)
  - Go to Lighthouse tab
  - Run audit
  - [ ] Performance > 80
  - [ ] Accessibility > 90

- [ ] Check bundle size
  ```bash
  cd frontend
  npm run build
  # Review "First Load JS" sizes (should be < 250 KB)
  ```

### 7.3 Browser Compatibility
- [ ] Test in Chrome ✅
- [ ] Test in Firefox ✅
- [ ] Test in Safari ✅
- [ ] Check mobile responsive design

---

## 🐛 Phase 8: Common Issues & Fixes

### Issue: Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 4000
lsof -ti:4000 | xargs kill -9
```

### Issue: Database Connection Failed
- [ ] Check PostgreSQL is running: `brew services list | grep postgresql`
- [ ] Restart PostgreSQL: `brew services restart postgresql@14`
- [ ] Verify DATABASE_URL in backend/.env

### Issue: Prisma Client Out of Sync
```bash
cd backend
npm run prisma:generate
npm run prisma:migrate
```

### Issue: Node Modules Issues
```bash
# Clean reinstall
rm -rf node_modules package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
rm -rf backend/node_modules backend/package-lock.json

# Reinstall
npm install
cd frontend && npm install
cd ../backend && npm install
```

### Issue: TypeScript Errors
```bash
# Rebuild TypeScript cache
cd frontend
rm -rf .next
rm tsconfig.tsbuildinfo
npm run build

cd ../backend
rm -rf dist
npm run build
```

---

## 🎉 Phase 9: Final Verification

### 9.1 Complete System Test
- [ ] Start both services: `npm run dev` from root
- [ ] Frontend loads at http://localhost:3000
- [ ] Backend API responds at http://localhost:4000
- [ ] Can register a user via API
- [ ] Can login via API
- [ ] Can view protected routes with token
- [ ] Database contains test data
- [ ] No errors in backend console
- [ ] No errors in frontend console
- [ ] No errors in browser console

### 9.2 Documentation
- [ ] README.md is up to date
- [ ] API endpoints documented
- [ ] Environment variables documented
- [ ] Setup instructions clear

### 9.3 Ready for Development
- [ ] Can create new backend routes
- [ ] Can create new frontend pages
- [ ] Hot reload works for both
- [ ] TypeScript autocomplete works
- [ ] ESLint catches issues

---

## 📝 Next Steps After Setup

1. **Add Sample Data**
   ```bash
   # Create a seed file
   cd backend
   npm run prisma:studio
   # Manually add some products, or create a seed script
   ```

2. **Connect Frontend to Backend**
   - Update frontend API calls to use http://localhost:4000/api
   - Implement authentication flow
   - Add product fetching from real API

3. **Development Workflow**
   - Keep `npm run dev` running in project root
   - Make changes to frontend or backend
   - Test changes immediately (hot reload)

4. **Testing**
   - Write unit tests for backend
   - Write component tests for frontend
   - E2E testing with Playwright/Cypress

5. **Deployment Preparation**
   - Configure production environment variables
   - Set up CI/CD pipeline
   - Choose hosting (Vercel for frontend, Railway/Render for backend)

---

## ✅ Checklist Summary

Count your completed items:

- [ ] Phase 1: Prerequisites (___/6)
- [ ] Phase 2: Database Setup (___/3)
- [ ] Phase 3: Backend Config (___/13)
- [ ] Phase 4: Frontend Config (___/9)
- [ ] Phase 5: Full App Test (___/12)
- [ ] Phase 6: Quality Checks (___/5)
- [ ] Phase 7: Performance (___/7)
- [ ] Phase 8: Issues Checked (___/4)
- [ ] Phase 9: Final Verification (___/13)

**Total: ___/72 tasks completed**

---

## 🆘 Getting Help

If you encounter issues:
1. Check the troubleshooting section in QUICK_START.md
2. Review backend logs in terminal
3. Check browser console for frontend errors
4. Verify .env configuration
5. Ensure all dependencies are installed

**Your application should now be running perfectly! 🎉**
