# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

---

## 📦 **Installation** (Already Done!)

All dependencies are installed and configured. Just verify:

```bash
cd c:\Users\siwani\Desktop\PORTFOIO
npm install  # Already done, but run this if needed
```

---

## 🚀 **Start Development Server**

```bash
npm run dev
```

✅ Server will start at `http://localhost:3000`  
✅ Hot reload enabled (changes update instantly)  
✅ Open browser and see your portfolio!

---

## ✏️ **Quick Customizations** (2 minutes)

### 1. Update Your Name & Title

**File**: [src/components/Navbar.tsx](src/components/Navbar.tsx)

```typescript
// Change "SE" to your initials
<Link href="#home" className="text-2xl font-display font-bold gradient-text">
  YourInitials
</Link>
```

### 2. Update Your Projects

**File**: [src/data/projects.ts](src/data/projects.ts)

Edit the `projects` array with your own:
- Change `title`, `description`, `image`
- Update `technologies` array
- Set `featured: true` for top projects

### 3. Update Your Skills

**File**: [src/data/skills.ts](src/data/skills.ts)

Edit skill categories and items.

### 4. Update Your Social Links

**File**: [src/data/navigation.ts](src/data/navigation.ts)

Update GitHub, LinkedIn, Twitter, Email links.

---

## 🎨 **Change Colors** (Optional, 1 minute)

**File**: [tailwind.config.ts](tailwind.config.ts)

```typescript
colors: {
  'bg-primary': '#0B0F19',      // Main background
  'accent-primary': '#3B82F6',  // Blue accent
  'accent-secondary': '#8B5CF6', // Purple accent
  // ... change any colors you like
}
```

---

## 📸 **Update Project Images**

Get images from:
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://pexels.com/
- **Your own**: Upload to your site

Replace URLs in [src/data/projects.ts](src/data/projects.ts)

---

## 🏗️ **Project Structure Overview**

```
src/
├── app/           ← Next.js pages & layout
├── components/    ← Button, Card, Navbar, Footer
├── sections/      ← Hero, Skills, Projects, etc
├── data/          ← Your portfolio content 👈
├── styles/        ← Global CSS & Tailwind
└── types/         ← TypeScript definitions
```

**⚠️ Most changes happen in `src/data/` folder!**

---

## 📝 **File Reference**

| File | Purpose | Edit For |
|------|---------|----------|
| [src/data/projects.ts](src/data/projects.ts) | Your portfolio projects | Add/edit projects |
| [src/data/skills.ts](src/data/skills.ts) | Technical skills | Update skills list |
| [src/data/experience.ts](src/data/experience.ts) | Work experience | Update job history |
| [src/data/navigation.ts](src/data/navigation.ts) | Links & social media | Update social links |
| [tailwind.config.ts](tailwind.config.ts) | Colors & animations | Change color scheme |
| [src/components/Navbar.tsx](src/components/Navbar.tsx) | Navigation bar | Change logo, buttons |
| [src/components/Footer.tsx](src/components/Footer.tsx) | Footer section | Update footer content |

---

## 🔍 **Check Everything Works**

```bash
# Development
npm run dev
# → Open http://localhost:3000

# Production build
npm run build
# → Check for errors, then test

# Linting
npm run lint
# → Find code issues
```

---

## 🚢 **Deploy to Live**

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Option 2: Netlify

1. Run: `npm run build`
2. Deploy the `out/` folder to Netlify

### Option 3: GitHub Pages

```bash
npm run build
# Deploy 'out' folder to gh-pages
```

---

## 🎬 **What You Get**

✅ **5 Complete Sections**
- Hero (with intro and terminal card)
- Skills (organized by category)
- Experience (work history timeline)
- Projects (featured and all projects)
- Contact (form and social links)

✅ **Premium Features**
- Dark theme with glassmorphism
- Smooth animations (Framer Motion)
- Fully responsive design
- SEO optimized
- Type-safe (TypeScript)
- Fast performance (static export)

✅ **Easy to Customize**
- Change colors in `tailwind.config.ts`
- Edit content in `src/data/` files
- Modify components in `src/components/`
- Add new sections in `src/sections/`

---

## 📚 **Full Documentation**

For detailed information, see:
- [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) - Complete project guide
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Customization examples
- [README.md](README.md) - Setup & deployment info

---

## 🆘 **Common Issues**

### Port 3000 in use?
```bash
npm run dev -- -p 3001
# Use different port
```

### TypeScript errors?
Make sure all imports are correct in `src/types/index.ts`

### Styles not loading?
Clear `.next/` folder:
```bash
rm -r .next
npm run dev
```

### Build fails?
Check for TypeScript errors:
```bash
npx tsc --noEmit
```

---

## ✨ **Next Steps**

1. ✅ **Run dev server**: `npm run dev`
2. ✅ **Update content**: Edit `src/data/` files
3. ✅ **Customize colors**: Edit `tailwind.config.ts`
4. ✅ **Test locally**: Check all pages
5. ✅ **Deploy**: Push to GitHub and deploy with Vercel

---

## 🎯 **You're All Set!**

Your premium portfolio website is ready. Start customizing and get it live! 🚀

Questions? Check the full documentation in [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)

---

**Happy building! 💻✨**
