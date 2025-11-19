# 🚀 Deployment Guide - Synapse Digital

## 📦 What's Complete

✅ **Home Page** with:

- Navigation bar (responsive, glassmorphism)
- Hero section with particle network
- Services showcase (4 cards)
- Why Us section with NavLens highlights
- Final CTA section
- Footer with links and social media

✅ **Reusable Components**:

- Button (3 variants, 3 sizes)
- GlassCard (2 variants)
- ParticleBackground
- Navbar (responsive, mobile menu)
- Footer (5-column layout)

✅ **Performance Optimized**:

- Code-based animations (<50KB)
- Mobile-first responsive design
- Reduced motion support
- Backdrop blur fallbacks

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**

- Built by the creators of Next.js
- Automatic optimizations
- Edge network for fast global delivery
- Free tier available

**Steps:**

1. **Push to GitHub**:

```bash
git init
git add .
git commit -m "Initial Synapse Digital webapp"
git remote add origin https://github.com/YOUR_USERNAME/synapse-digital.git
git push -u origin main
```

2. **Deploy to Vercel**:

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js
- Click "Deploy"

**Done!** Your site will be live at `https://your-project.vercel.app`

---

### Option 2: Netlify

**Steps:**

1. **Build the project**:

```bash
npm run build
```

2. **Deploy**:

- Go to [netlify.com](https://netlify.com)
- Drag and drop the `.next` folder
- Or connect GitHub repo for auto-deployments

**Build Settings**:

- Build command: `npm run build`
- Publish directory: `.next`

---

### Option 3: Self-Hosted (VPS/Server)

**Requirements**:

- Node.js 18.17 or higher
- PM2 (process manager)

**Steps:**

1. **Build for production**:

```bash
npm run build
```

2. **Install PM2**:

```bash
npm install -g pm2
```

3. **Start the app**:

```bash
pm2 start npm --name "synapse-digital" -- start
pm2 save
pm2 startup
```

4. **Setup reverse proxy (Nginx)**:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Pre-Deployment Checklist

### 1. Environment Variables

Create `.env.local` for any secrets:

```bash
# Example
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
CONTACT_EMAIL=hello@synapsedigital.com
```

### 2. Update Metadata

In `app/layout.tsx`, update:

- Site title
- Description
- Keywords
- Open Graph image (add to `public/`)

### 3. Add Favicon

Replace files in `public/`:

- `favicon.ico`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

### 4. Add Logo

Place your logo in `public/logo/`:

- `synapse-logo.svg` (for navbar)
- `synapse-logo-white.svg` (for dark backgrounds)

### 5. Analytics Setup

Add analytics to `app/layout.tsx`:

**Google Analytics:**

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

### 6. SEO Enhancements

Add `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

Add `app/sitemap.ts`:

```tsx
export default function sitemap() {
  return [
    {
      url: "https://yourdomain.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
```

---

## 🎯 Performance Optimization

### 1. Image Optimization

Always use Next.js `<Image>` component:

```tsx
import Image from "next/image";

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  priority // for above-the-fold images
/>;
```

### 2. Font Optimization

Already done! Using Next.js font optimization:

```tsx
import { Geist } from "next/font/google";
```

### 3. Code Splitting

Next.js does this automatically, but you can lazy load heavy components:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/Heavy"), {
  loading: () => <p>Loading...</p>,
});
```

---

## 📊 Monitoring & Analytics

### Recommended Tools:

1. **Vercel Analytics** (if using Vercel)

   - Real user monitoring
   - Web vitals tracking
   - Automatic setup

2. **Google Analytics 4**

   - User behavior tracking
   - Conversion tracking
   - Free tier

3. **Hotjar / Microsoft Clarity**

   - Heatmaps
   - Session recordings
   - User feedback

4. **Google Search Console**
   - SEO monitoring
   - Index status
   - Search performance

---

## 🔒 Security Checklist

- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Add security headers in `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};
```

- [ ] Keep dependencies updated: `npm audit`
- [ ] Add rate limiting for contact forms
- [ ] Configure CSP (Content Security Policy)

---

## 🎨 Custom Domain Setup

### Vercel:

1. Go to Project Settings > Domains
2. Add your domain
3. Update DNS records (Vercel provides instructions)
4. SSL is automatic

### Cloudflare (Optional):

- Add site to Cloudflare
- Use Cloudflare nameservers
- Enable "Full (strict)" SSL
- Enable minification and Brotli compression

---

## 📈 Post-Launch Tasks

### Week 1:

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business (if applicable)
- [ ] Share on social media
- [ ] Monitor Core Web Vitals

### Week 2:

- [ ] Check all links work
- [ ] Test on multiple devices
- [ ] Set up email forwarding (contact@yourdomain.com)
- [ ] Create social media profiles

### Month 1:

- [ ] Review analytics
- [ ] A/B test CTA buttons
- [ ] Optimize images based on usage
- [ ] Collect user feedback

---

## 🐛 Troubleshooting

### Build Fails

**Error**: "Module not found"

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Particles Not Showing

**Issue**: Black screen

- Check browser console for errors
- Verify ParticleBackground is inside a `relative` parent
- Try disabling browser extensions

### Slow Performance

**Check**:

1. Image sizes (compress to WebP)
2. Number of particles (reduce on mobile)
3. Disable blur effects on low-end devices (already handled)

### Mobile Menu Not Working

**Fix**:

- Check that `"use client"` is at top of Navbar.tsx
- Verify Framer Motion is installed
- Clear browser cache

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Vercel Support**: https://vercel.com/support

---

## 🎉 Launch Checklist

- [ ] All images optimized
- [ ] Metadata updated
- [ ] Analytics installed
- [ ] Contact form working (if applicable)
- [ ] Mobile responsive verified
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Page speed > 90 on Lighthouse
- [ ] Accessibility score > 90
- [ ] SEO score > 90
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Social sharing working
- [ ] 404 page created

---

**You're ready to launch! 🚀**

The Synapse Digital webapp is optimized, secure, and ready to impress. Deploy with confidence.
