# FLUX - Development Guide

## 📁 Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── site/               # Page-specific components
│   │   ├── brand-story-new.tsx
│   │   ├── featured-drop.tsx
│   │   ├── hero.tsx
│   │   ├── product-grid.tsx
│   │   └── styled-by-tribe.tsx
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── direction-aware-hover.tsx
│       ├── expandable-card.tsx
│       └── hero-parallax.tsx
├── constants/              # Data & configuration
│   ├── brand-story.tsx     # Story page content
│   ├── products.ts         # Product catalog
│   └── ugc.ts             # User-generated content
├── hooks/                  # Custom React hooks
│   └── use-outside-click.tsx
├── lib/                    # Utilities
│   └── utils.ts
└── types/                  # TypeScript definitions
    └── index.ts
```

## 🎯 Key Design Patterns

### 1. **Separation of Concerns**
- **Components**: Pure presentation logic
- **Constants**: Static data and configuration
- **Types**: Centralized TypeScript definitions
- **Hooks**: Reusable stateful logic

### 2. **Component Architecture**
```typescript
// ❌ Bad: Data mixed with component
function ProductGrid() {
  const products = [{ id: 1, name: "..." }];
  // ...
}

// ✅ Good: Data separated
import { PRODUCTS } from "@/constants/products";
function ProductGrid() {
  // ...
}
```

### 3. **Type Safety**
All data structures have TypeScript interfaces defined in `src/types/index.ts`:
- `Product`: Product catalog items
- `Feature`: Brand story features
- `StoryCard`: Expandable story content
- `JourneyStep`: User journey steps
- `UGCPost`: User-generated content
- `StatItem`: Statistics display

## 🔧 Adding New Features

### Adding a New Product
```typescript
// src/constants/products.ts
export const PRODUCTS: Product[] = [
  // ...existing products
  {
    id: 7,
    name: "NEW PRODUCT",
    category: "Category",
    price: "₹X,XXX",
    rating: 4.8,
    reviews: 100,
    badge: "New",
    image: "https://...",
    inStock: true,
  },
];
```

### Adding a New Story Section
1. Add content to `src/constants/brand-story.tsx`
2. Create a new section component in `brand-story-new.tsx`
3. Add it to the main component

```typescript
function NewSection() {
  return (
    <div className="px-6 py-32">
      {/* Your content */}
    </div>
  );
}

// In BrandStory component
export default function BrandStory() {
  return (
    <section>
      <OpeningStatement />
      <NewSection />  {/* Add here */}
      {/* ...other sections */}
    </section>
  );
}
```

### Creating a New Reusable Component
1. Define types in `src/types/index.ts`
2. Create component in `src/components/ui/`
3. Export and use across the app

```typescript
// src/types/index.ts
export interface MyComponentProps {
  title: string;
  items: string[];
}

// src/components/ui/my-component.tsx
export function MyComponent({ title, items }: MyComponentProps) {
  // Implementation
}
```

## 🎨 Styling Conventions

### Utility Classes
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use consistent spacing scale (4, 6, 8, 12, 16, 20, 24, 32)

### Custom Gradients
```css
/* Defined in globals.css */
.gradient-flux {
  background: linear-gradient(135deg, #ff00ff 0%, #00ffff 100%);
}

.gradient-flux-text {
  background: linear-gradient(135deg, #ff00ff 0%, #00ffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Responsive Breakpoints
```typescript
// Mobile First
className="text-base md:text-lg lg:text-xl"

// Tailwind default breakpoints:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

## 🔗 Navigation & CTAs

### Internal Links
```typescript
import Link from "next/link";

// Anchor links (same page)
<Link href="#section-id">Go to Section</Link>

// Page navigation
<Link href="/about">About Page</Link>
```

### External Links
```typescript
// Always use SOCIAL_LINKS constant
import { SOCIAL_LINKS } from "@/constants/brand-story";

<a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
  Join Discord
</a>
```

## 📊 State Management

### Local State
Use React hooks for component-specific state:
```typescript
const [active, setActive] = useState<StoryCard | null>(null);
```

### Global State (Future)
For future global state needs, consider:
- React Context API for simple cases
- Zustand for more complex state
- React Query for server state

## 🚀 Performance Best Practices

### Image Optimization
```typescript
// Use Next.js Image component
import Image from "next/image";

<Image
  src={product.image}
  alt={product.name}
  fill
  sizes="(max-width: 640px) 100vw, 50vw"
  className="object-cover"
/>
```

### Code Splitting
- Components are automatically code-split by Next.js
- Use dynamic imports for heavy components:
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
});
```

### Animation Performance
- Use Framer Motion's `motion` components
- Always set `viewport={{ once: true }}` for scroll animations
- Avoid animating properties that trigger layout reflows

## 🧪 Testing Guidelines

### Component Testing (Future)
```typescript
// Example test structure
describe('ProductGrid', () => {
  it('renders all products', () => {
    // Test implementation
  });

  it('handles out of stock items', () => {
    // Test implementation
  });
});
```

### Manual Testing Checklist
- [ ] Mobile responsiveness (320px - 1920px)
- [ ] All CTAs work correctly
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] Forms validate correctly
- [ ] Links open in correct target

## 📝 Code Style Guide

### Naming Conventions
```typescript
// Constants: UPPER_SNAKE_CASE
export const SOCIAL_LINKS = { ... };

// Components: PascalCase
export function ProductGrid() { ... }

// Functions: camelCase
function calculateTotal() { ... }

// Interfaces: PascalCase with descriptive names
interface ProductCardProps { ... }
```

### File Organization
```typescript
// 1. Imports (grouped)
import { useState } from "react";           // React
import { motion } from "framer-motion";     // Third-party
import { Button } from "@/components/ui";   // Internal components
import { PRODUCTS } from "@/constants";     // Constants
import { Product } from "@/types";          // Types

// 2. Types/Interfaces (if not in types/index.ts)
interface ComponentProps { ... }

// 3. Constants (component-specific)
const ANIMATION_DURATION = 0.3;

// 4. Component
export function Component() { ... }

// 5. Helper functions (after component)
function helperFunction() { ... }
```

## 🌐 Environment Variables

Create a `.env.local` file for environment-specific configuration:
```bash
# Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# API Keys (future)
NEXT_PUBLIC_API_URL=https://api.flux.com
```

## 🔄 Git Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation

### Commit Messages
```
feat: Add new product carousel component
fix: Resolve mobile menu overflow issue
refactor: Extract product card to reusable component
docs: Update development guide with testing section
```

## 🚢 Deployment

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

### Pre-deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test production build locally with `npm start`
- [ ] Verify all environment variables are set
- [ ] Check lighthouse scores
- [ ] Ensure all images are optimized
- [ ] Test on multiple devices/browsers

## 🎯 Future Enhancements

### Planned Features
1. **Backend Integration**
   - Product inventory management
   - User authentication
   - Shopping cart functionality
   - Order processing

2. **Advanced Features**
   - NFC tag scanning integration
   - Blockchain ownership verification
   - Discord/Instagram API integration
   - Real-time inventory updates

3. **Performance**
   - Implement proper caching strategy
   - Add service worker for offline support
   - Optimize images with WebP format
   - Implement lazy loading for below-fold content

4. **Analytics**
   - Google Analytics integration
   - Conversion tracking
   - User behavior analytics
   - A/B testing framework

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Ensure TypeScript types are properly defined
3. Test on multiple screen sizes
4. Update this documentation when adding new patterns
5. Keep components small and focused
6. Extract reusable logic into custom hooks or utilities

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Last Updated**: 2024
**Maintainers**: FLUX Development Team
