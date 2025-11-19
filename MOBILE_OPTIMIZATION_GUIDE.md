# Mobile Optimization Guide

## Unique Mobile Features Implemented

### 1. **Swipeable Cards**

- Swipe left/right to navigate through content
- Perfect for service cards, testimonials, project showcases
- Provides native app-like experience

### 2. **Bottom Sheet Navigation**

- Slides up from bottom (native mobile pattern)
- Drag handle for intuitive interaction
- Use for filters, settings, detailed views

### 3. **Pull-to-Refresh**

- Drag down to refresh content
- Visual loading indicator
- Familiar mobile gesture

### 4. **Touch Ripple Effects**

- Visual feedback on touch
- Creates satisfying interaction
- Material Design inspired

### 5. **Collapsible Sections**

- Progressive disclosure for complex content
- Reduces cognitive load
- Thumb-friendly tap targets

### 6. **Mobile Sticky CTA**

- Always-accessible action button
- Appears after scrolling
- Positioned in thumb-friendly zone
- Safe area support for notched devices

### 7. **Horizontal Scroll Snap**

- Smooth swiping through items
- Snap to center for each item
- Perfect for galleries, featured items

### 8. **Navigation Dots**

- Visual indicator of position
- Tap to jump between sections
- Common mobile pattern

### 9. **Enhanced Mobile Menu**

- Full-screen slide-in panel
- Large tap targets (minimum 44x44px)
- Staggered animations
- Icon-based navigation

## Mobile Performance Optimizations

### Image Optimization

- Use Next.js Image component with mobile-specific sizes
- Lazy load below-the-fold images
- WebP format with fallbacks

### Touch Target Sizes

- Minimum 44x44px (Apple HIG)
- Minimum 48x48px (Material Design)
- Adequate spacing between targets

### Viewport Configuration

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
/>
```

### Safe Area Support

- Account for notches and home indicators
- Use `safe-area-inset-*` CSS variables
- Test on various device sizes

## Mobile-First Design Principles

### 1. **Thumb Zones**

```
┌─────────────┐
│   Hard      │  ← Hard to reach
│             │
│   Easy      │  ← One-handed zone
│             │
│   Natural   │  ← Most comfortable
└─────────────┘
```

- Place primary actions in bottom 1/3
- Secondary actions in middle
- Less important content at top

### 2. **Progressive Enhancement**

- Core content loads first
- Animations enhance experience
- Graceful degradation for older devices

### 3. **Touch Gestures**

- Swipe: Navigate, dismiss
- Long press: Context menus
- Pinch: Zoom (images)
- Pull: Refresh

### 4. **Reduced Motion**

- Respect `prefers-reduced-motion`
- Provide non-animated alternatives
- Disable parallax for motion-sensitive users

## Mobile-Specific Components Usage

### Swipeable Cards Example

```tsx
<SwipeableCard
  onSwipeLeft={() => handleNext()}
  onSwipeRight={() => handlePrev()}
>
  <ServiceCard {...service} />
</SwipeableCard>
```

### Bottom Sheet Example

```tsx
const [isOpen, setIsOpen] = useState(false);

<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <FilterOptions />
</BottomSheet>;
```

### Collapsible Sections

```tsx
<CollapsibleSection title="Project Details" icon={<Info />} defaultOpen={false}>
  <DetailedInfo />
</CollapsibleSection>
```

### Mobile Sticky CTA

```tsx
<MobileStickyCTA
  primaryText="Get Started"
  secondaryText="Learn More"
  onPrimaryClick={() => handleCTA()}
  onSecondaryClick={() => handleLearnMore()}
  showOnScroll={true}
/>
```

## Testing Checklist

- [ ] Test on real devices (iOS, Android)
- [ ] Various screen sizes (320px - 428px width)
- [ ] Portrait and landscape orientations
- [ ] Touch interactions work smoothly
- [ ] No horizontal scroll
- [ ] Fast load times (<3s)
- [ ] Smooth 60fps animations
- [ ] Adequate contrast ratios
- [ ] Readable font sizes (minimum 16px body)
- [ ] Proper focus states for accessibility

## Performance Targets

- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Cumulative Layout Shift**: <0.1
- **First Input Delay**: <100ms
- **Animation Frame Rate**: 60fps

## Mobile-Specific CSS Utilities

```css
/* Touch-friendly spacing */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
}

/* Prevent text selection during gestures */
.no-select {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}

/* Smooth scrolling */
.smooth-scroll {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

/* Safe areas */
.safe-area-bottom {
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
}
```

## Recommended Mobile Breakpoints

```tsx
// tailwind.config.ts
theme: {
  screens: {
    'xs': '320px',   // Small phones
    'sm': '375px',   // iPhone SE, 8
    'md': '768px',   // Tablets
    'lg': '1024px',  // Desktop
    'xl': '1280px',  // Large desktop
  }
}
```

## Next Steps

1. Integrate swipeable cards on services/projects pages
2. Add bottom sheet for project filters
3. Implement pull-to-refresh on dynamic content
4. Add mobile sticky CTA on all pages
5. Test on various real devices
6. Optimize images for mobile
7. Implement service worker for offline support
8. Add app-like install prompt (PWA)
