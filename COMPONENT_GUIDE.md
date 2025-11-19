# 🎨 Synapse Digital - Component & Style Guide

## 🎯 Quick Start Components

### Button Component

Three variants with different styles and purposes:

```tsx
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

// Primary - Main CTAs (Electric blue with glow)
<Button variant="primary" size="lg">
  Start Your Project
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>

// Secondary - Alternative actions (Glass with blue border)
<Button variant="secondary" size="md">
  Learn More
</Button>

// Ghost - Subtle actions (Transparent with hover)
<Button variant="ghost" size="sm">
  View Details
</Button>
```

**Sizes**: `sm` (small), `md` (medium), `lg` (large)

---

### GlassCard Component

Premium glassmorphism cards with two variants:

```tsx
import GlassCard from "@/components/GlassCard";

// Light variant (white tint)
<GlassCard variant="light" hover={true}>
  <h3>Card Title</h3>
  <p>Card content here</p>
</GlassCard>

// Dark variant (blue tint) - Better on dark backgrounds
<GlassCard variant="dark" hover={false} className="p-8">
  <h3>No Hover Effect</h3>
  <p>Static card</p>
</GlassCard>
```

**Props**:

- `variant`: `"light"` or `"dark"` (default: `"light"`)
- `hover`: Enable hover scale effect (default: `true`)
- `className`: Additional Tailwind classes

---

### ParticleBackground Component

Interactive particle network for hero sections:

```tsx
import ParticleBackground from "@/components/ParticleBackground";

<section className="relative min-h-screen">
  <ParticleBackground />
  <div className="relative z-10">{/* Your content here */}</div>
</section>;
```

**Features**:

- 80 particles with connecting lines
- Mouse hover interaction (grab effect)
- Synapse blue color (#00C2FF)
- Auto-optimized for performance

---

## 🎨 Custom CSS Classes

### Glassmorphism

```css
/* Light glass effect */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Dark glass with blue tint */
.glass-dark {
  background: rgba(10, 26, 47, 0.6);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(0, 194, 255, 0.2);
}
```

**Usage**:

```tsx
<div className="glass rounded-2xl p-6">Content with light glass effect</div>
```

---

### Glow Effects

```tsx
// Large blue glow (triple shadow)
<div className="glow-blue rounded-xl p-4">
  Glowing content
</div>

// Small blue glow (single shadow)
<div className="glow-blue-sm rounded-lg p-2">
  Subtle glow
</div>
```

---

### Animations

```tsx
// Fade in from bottom
<div className="animate-fade-in-up">
  Slides up while fading in
</div>

// Simple fade in
<div className="animate-fade-in">
  Fades in smoothly
</div>

// Pulsing glow (infinite)
<div className="animate-pulse-glow glow-blue rounded-xl">
  Breathing glow effect
</div>

// Floating (infinite)
<div className="animate-float">
  Gentle floating motion
</div>
```

---

## 🎨 Color Palette

Use these Tailwind color classes throughout the app:

```tsx
// Backgrounds
<div className="bg-void-black">     {/* #050505 */}
<div className="bg-data-dark-blue"> {/* #0A1A2F */}

// Text Colors
<h1 className="text-signal-white">  {/* #FFFFFF */}
<p className="text-circuit-silver">  {/* #E0E0E0 */}
<span className="text-synapse-blue"> {/* #00C2FF */}

// Borders
<div className="border-synapse-blue border-2">
<div className="border-circuit-silver/50">

// Hover States
<button className="hover:text-synapse-blue">
<div className="hover:bg-synapse-blue/10">
```

---

## 🎬 Framer Motion Patterns

### Fade In on Scroll

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Content appears when scrolled into view
</motion.div>;
```

### Staggered Children

```tsx
{
  items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {item.content}
    </motion.div>
  ));
}
```

### Hover Scale

```tsx
<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
  Hover to scale up
</motion.div>
```

### Infinite Animation

```tsx
<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  Bounces up and down forever
</motion.div>
```

---

## 📐 Layout Patterns

### Hero Section

```tsx
<section className="relative min-h-screen flex items-center justify-center px-4">
  <ParticleBackground />
  <div className="max-w-7xl mx-auto w-full relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-8"
    >
      <h1 className="text-6xl lg:text-8xl font-black">
        Your <span className="text-synapse-blue">Brand</span>
      </h1>
      <p className="text-2xl text-circuit-silver">Your tagline here</p>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </motion.div>
  </div>
</section>
```

### Grid of Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
    >
      <GlassCard variant="dark" className="h-full">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-circuit-silver">{item.description}</p>
      </GlassCard>
    </motion.div>
  ))}
</div>
```

### Two-Column Split

```tsx
<div className="grid lg:grid-cols-2 gap-16 items-center">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl font-bold mb-6">
      Left <span className="text-synapse-blue">Content</span>
    </h2>
    <p className="text-circuit-silver">Description text</p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <GlassCard variant="dark">Right side content</GlassCard>
  </motion.div>
</div>
```

---

## 🎯 Icon Usage

Using Lucide React icons:

```tsx
import {
  ArrowRight,
  Code,
  BarChart3,
  Share2,
  TrendingUp,
  Eye,
  Zap,
  Sparkles
} from "lucide-react";

// Inside buttons
<Button variant="primary">
  Click Here
  <ArrowRight className="ml-2 h-5 w-5" />
</Button>

// With custom colors
<Eye className="h-8 w-8 text-synapse-blue" />

// In glass containers with glow
<div className="p-3 rounded-xl bg-synapse-blue/20 glow-blue-sm">
  <Code className="h-8 w-8 text-synapse-blue" />
</div>
```

---

## 🎨 Gradient Backgrounds

Using Tailwind v4 linear gradients:

```tsx
// Linear gradient top to bottom
<div className="bg-linear-to-b from-transparent via-data-dark-blue/20 to-transparent">
  Content here
</div>

// Linear gradient left to right
<div className="bg-linear-to-r from-synapse-blue to-data-dark-blue">
  Gradient text background
</div>

// Diagonal gradient
<div className="bg-linear-to-br from-synapse-blue/20 to-data-dark-blue/40">
  Diagonal gradient
</div>
```

---

## 🎬 Performance Tips

1. **Use `viewport={{ once: true }}`** for scroll animations to prevent re-triggering
2. **Limit backdrop blur on mobile** - it's already handled in the CSS
3. **Lazy load heavy components** - ParticleBackground loads after main content
4. **Use semantic HTML** - `<section>`, `<main>`, `<nav>` for better SEO
5. **Optimize images** - Use Next.js `<Image>` component

---

## 🚀 Common Patterns

### CTA Section

```tsx
<section className="py-32 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <GlassCard variant="dark" className="p-12">
      <h2 className="text-5xl font-bold mb-6">
        Ready to Build Something
        <span className="text-synapse-blue"> Extraordinary</span>?
      </h2>
      <p className="text-xl text-circuit-silver mb-8">Let's make it happen.</p>
      <Button variant="primary" size="lg">
        Get Started
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </GlassCard>
  </div>
</section>
```

### Feature List with Bullets

```tsx
<ul className="space-y-4">
  {features.map((feature, i) => (
    <motion.li
      key={feature}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center text-circuit-silver"
    >
      <div className="w-2 h-2 bg-synapse-blue rounded-full mr-3"></div>
      {feature}
    </motion.li>
  ))}
</ul>
```

---

## 🎨 Spacing System

Use consistent spacing throughout:

```tsx
// Section padding
<section className="py-32 px-4 sm:px-6 lg:px-8">

// Container max width
<div className="max-w-7xl mx-auto">

// Card padding
<GlassCard className="p-6">      {/* Default */}
<GlassCard className="p-8">      {/* Large */}
<GlassCard className="p-12">     {/* Extra large */}

// Vertical spacing
<div className="space-y-4">      {/* Small gaps */}
<div className="space-y-8">      {/* Medium gaps */}
<div className="space-y-16">     {/* Large gaps */}
```

---

**Pro Tip**: Always test animations on mobile devices. Use Chrome DevTools Device Mode to check performance and enable "CPU throttling" to simulate slower devices.
