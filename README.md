# Bizz-E-Bee | Swartruggens Business Hive

A comprehensive local business directory web application built with Next.js, featuring smooth animations, responsive design, and excellent accessibility.

## 🐝 Features

- **Full-Featured Business Directory**: Complete with categories, listings, and featured businesses
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion with accessibility support
- **Interactive Carousels**: Touch/swipe enabled business listings using Embla Carousel
- **Video Hero**: Dynamic landing page with video background and mobile fallbacks
- **Pricing Plans**: Interactive pricing cards with hover effects
- **Modal System**: Elegant modals for CTAs and forms
- **Accessibility First**: WCAG compliant with keyboard navigation and focus management

## 🛠 Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel React
- **Icons**: Lucide React
- **Fonts**: Poppins (headings) + Inter (body)

## 🎨 Design System

### Colors
- **Primary Honey**: #FFC107
- **Secondary Amber**: #FFB300
- **Text Black**: #111111
- **Background Cream**: #FFF7E6
- **Accent Leaf**: #3BAA3B

### Typography
- **Headings**: Poppins (font-weight: 600)
- **Body**: Inter (font-weight: 400/500)

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Landing page with video hero
│   ├── directory/         # Business directory
│   ├── category/[slug]/   # Category-specific listings
│   ├── deals/            # Pricing plans
│   └── about/            # About/how-it-works
├── components/            # Reusable components
│   ├── ui/               # UI components (modal, button)
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer with accessibility toggle
│   ├── video-hero.tsx    # Video background hero
│   ├── category-grid.tsx # Categories overview
│   ├── listing-carousel.tsx # Business carousel
│   ├── listing-card.tsx  # Individual business cards
│   ├── pricing-cards.tsx # Pricing plan cards
│   └── bee-mascot.tsx    # Animated mascot
├── data/                 # Mock data
│   ├── categories.json   # Business categories
│   └── listings.json     # Business listings
├── lib/                  # Utilities
│   ├── motion.ts         # Framer Motion variants
│   ├── icons.tsx         # Custom SVG icons
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## 🎯 Key Features

### Landing Page
- Full-viewport video background with mobile poster fallback
- Animated hero content with floating bee particles
- Smooth call-to-action button leading to directory

### Directory
- Responsive categories grid (2→3→5 columns)
- Animated featured business banners
- Search bar (styled, non-functional in MVP)

### Category Pages
- Dynamic routing for all business categories
- Embla carousel with touch/swipe support
- Responsive breakpoints (1.2→2→3 cards per view)

### Business Listings
- Image carousels within each card
- Elite badge system with special styling
- Hover effects with parallax movement
- Direct call and WhatsApp integration

### Pricing Plans
- Three interactive pricing tiers
- "Most Popular" highlighting with sparkle animations
- Disabled form submissions (MVP limitation)

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Animation pause toggle
- Screen reader friendly
- High contrast focus indicators

## 🎨 Animation System

All animations are built with Framer Motion and include:
- Page transitions with easeOut timing
- Staggered entrance animations
- Hover effects with scale and parallax
- Floating animations for featured content
- Reduced motion support for accessibility

## 📱 Responsive Design

- **Mobile First**: Optimized for touch interactions
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Carousel**: 1.2 cards (mobile) → 2 cards (tablet) → 3 cards (desktop)
- **Touch Support**: Swipe gestures on all interactive elements

## 🐝 Brand Guidelines

The Bizz-E-Bee brand follows a honey/hive theme with:
- Warm amber color palette
- Bee-themed iconography and mascot
- Honeycomb patterns in backgrounds
- Playful but professional tone

## 🔧 Development

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment
- Node.js 18+
- Modern browser with ES6+ support
- Responsive design tested on major devices

## 📄 License

This project is built for demonstration purposes as a local business directory MVP.

---

Made with 💛 in Swartruggens