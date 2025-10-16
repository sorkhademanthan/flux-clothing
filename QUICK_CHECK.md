# ⚡ Quick System Check

Run these commands to verify everything is working:

## 1. Prerequisites
```bash
# Check versions
node --version    # Should be v20+
npm --version     # Should be 10+
psql --version    # Should be 14+
```

## 2. Database Status
```bash
# Check if PostgreSQL is running (macOS)
brew services list | grep postgresql

# Test connection
psql -U flux_user -d flux_db -c "SELECT 1;"
```

## 3. Backend Health
```bash
cd backend

# Check environment
cat .env | grep -E "DATABASE_URL|JWT_SECRET|PORT"

# Type check
npm run type-check

# Start server (should see "🚀 Server running")
npm run dev
```

## 4. Frontend Health
```bash
cd frontend

# Type check
npm run type-check

# Build check
npm run build

# Start dev server
npm run dev
```

## 5. Full System Test
```bash
# From project root - runs both services
npm run dev

# In another terminal, test endpoints:
curl http://localhost:4000/health
curl http://localhost:3000
```

## 6. API Test (Register User)
```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@flux.com",
    "username": "testuser",
    "password": "Test123!",
    "fullName": "Test User"
  }'
```

## ✅ All Good If:
- ✅ No TypeScript errors
- ✅ Backend starts on port 4000
- ✅ Frontend starts on port 3000
- ✅ Health endpoint returns {"status":"ok"}
- ✅ Can register a user
- ✅ No errors in console

## 🚨 If Something Fails:
See `DEPLOYMENT_CHECKLIST.md` for detailed troubleshooting
