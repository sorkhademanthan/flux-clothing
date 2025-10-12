# 🚀 FLUX - Quick Start Guide

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your app.

## 📁 Key Files for Content Updates

### Adding/Editing Products
**File**: `src/constants/products.ts`

```typescript
export const PRODUCTS: Product[] = [
  {
    id: 7,  // New ID
    name: "YOUR PRODUCT NAME",
    category: "Category",
    price: "₹X,XXX",
    rating: 4.8,
    reviews: 100,
    badge: "New",  // Badge text
    image: "https://your-image-url.jpg",
    inStock: true,
  },
];
```

### Editing Brand Story Content
**File**: `src/constants/brand-story.tsx`

Update any of these sections:
- `FEATURES` - The 4 main features (Portal, Vault, Circle, Code)
- `STORY_CARDS` - Expandable story cards
- `JOURNEY_STEPS` - 4-step user journey
- `STATS` - Statistics (Pieces Unlocked, Tribe Members, etc.)

### Editing User Posts (Tribe Section)
**File**: `src/constants/ugc.ts`

```typescript
export const UGC_POSTS: UGCPost[] = [
  {
    id: 7,
    user: "@username",
    location: "City",
    likes: 1234,
    comments: 56,
    image: "https://image-url.jpg",
    items: ["Product 1", "Product 2"],
  },
];
```

### Updating Social Links
**File**: `src/constants/brand-story.tsx`

```typescript
export const SOCIAL_LINKS = {
  discord: "https://discord.gg/your-link",
  instagram: "https://instagram.com/your-handle",
} as const;
```

## 🎨 Styling

### Colors
```css
/* Defined in src/app/globals.css */
.gradient-flux { /* Gradient background */ }
.gradient-flux-text { /* Gradient text */ }
.grid-dots { /* Dot pattern background */ }
```

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🔧 Common Tasks

### Change Homepage Hero Text
**File**: `src/components/site/hero.tsx`
Look for the `<h1>` tag around line 67

### Update Footer/Social Links
All social links use `SOCIAL_LINKS` from `src/constants/brand-story.tsx`

### Add New Section to Story Page
**File**: `src/components/site/brand-story-new.tsx`

1. Create new function component:
```typescript
function MyNewSection() {
  return (
    <div className="px-6 py-32">
      {/* Your content */}
    </div>
  );
}
```

2. Add to main component:
```typescript
export default function BrandStory() {
  return (
    <section>
      <OpeningStatement />
      <MyNewSection />  {/* Add here */}
      {/* ... */}
    </section>
  );
}
```

## 🎯 Page Structure

```
Homepage (src/app/page.tsx):
├── Hero
├── Featured Drop
├── Brand Story
│   ├── Opening Statement
│   ├── Journey (4 steps)
│   ├── Deep Dive (4 cards)
│   ├── Manifesto
│   ├── Stats
│   ├── Ecosystem (4 features)
│   └── Final CTA
├── Product Grid (6 products)
└── Styled by Tribe (6 posts)
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors
- Check `src/types/index.ts` for type definitions
- Ensure all imports use correct paths (`@/...`)

### Images Not Loading
- Verify image URLs are accessible
- Check Next.js Image component configuration

## 📱 Testing

### Different Screen Sizes
```bash
# Mobile
- 375px (iPhone)
- 360px (Android)

# Tablet
- 768px (iPad)
- 1024px (iPad Pro)

# Desktop
- 1280px
- 1920px
```

### Browsers
- Chrome (primary)
- Safari
- Firefox
- Edge

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment
```bash
# Build
npm run build

# The output is in .next folder
# Deploy .next folder to your hosting
```

## 📊 Performance Tips

1. **Images**: Use optimized images (WebP format, compressed)
2. **Content**: Keep product/story lists reasonable (< 20 items)
3. **Analytics**: Add Google Analytics via environment variables
4. **Caching**: Enable proper cache headers on your hosting

## 🔗 Important Links

- **Development Guide**: See `DEVELOPMENT.md` for detailed documentation
- **Refactoring Summary**: See `REFACTORING_SUMMARY.md` for architecture details
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

## 💡 Quick Tips

1. **Restart dev server** after changing constants files
2. **Use TypeScript types** for autocomplete in VS Code
3. **Check console** for any React warnings
4. **Test mobile** responsiveness frequently
5. **Keep content updated** in constants files, not components

## 🆘 Need Help?

1. Check `DEVELOPMENT.md` for detailed guides
2. Review component code for examples
3. Check TypeScript types in `src/types/index.ts`
4. Search Next.js documentation
5. Review Git history for context on changes

---

**Last Updated**: 2024  
**Version**: 1.0 (Production-Ready)
