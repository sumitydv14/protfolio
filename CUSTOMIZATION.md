# 🎨 Customization Guide

Quick reference for customizing your portfolio website.

---

## 🔧 **Easy Customizations**

### 1. **Update Your Projects**

**File**: `src/data/projects.ts`

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'My Amazing Project',           // Change title
    description: 'Project description',     // Change description
    image: 'https://example.com/image.jpg', // Change image URL
    technologies: ['React', 'Node.js'],    // Change tech stack
    github: 'https://github.com/yourname/repo',
    demo: 'https://yourproject.com',
    featured: true,  // Show in featured section
  },
  // ... add more projects
];
```

### 2. **Update Your Skills**

**File**: `src/data/skills.ts`

```typescript
export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL'],
  },
  // ... add more categories
];
```

### 3. **Update Your Experience**

**File**: `src/data/experience.ts`

```typescript
export const experience: Experience[] = [
  {
    company: 'Your Company',
    position: 'Your Position',
    duration: '2024 - Present',
    description: 'What you did and achieved',
    technologies: ['React', 'TypeScript', 'AWS'],
  },
  // ... add more experiences
];
```

### 4. **Update Navigation & Social Links**

**File**: `src/data/navigation.ts`

```typescript
export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  // ... modify as needed
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourname', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourname', icon: 'Linkedin' },
  // ... update your links
];
```

---

## 🎨 **Styling Customizations**

### 1. **Change Color Scheme**

**File**: `tailwind.config.ts`

```typescript
theme: {
  extend: {
    colors: {
      'bg-primary': '#0B0F19',      // Main background
      'bg-secondary': '#111827',    // Secondary background
      'accent-primary': '#3B82F6',  // Main accent (blue)
      'accent-secondary': '#8B5CF6', // Secondary accent (purple)
      'cyan-glow': '#22D3EE',       // Cyan glow
      'text-primary': '#F8FAFC',    // Main text
      'text-secondary': '#94A3B8',  // Secondary text
    },
  },
}
```

### 2. **Change Fonts**

**File**: `src/styles/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Update these to your preferred fonts */
@layer base {
  body {
    @apply font-sans; /* Inter font */
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display; /* Space Grotesk */
  }
  code, pre {
    @apply font-mono; /* JetBrains Mono */
  }
}
```

### 3. **Customize Animations**

**File**: `tailwind.config.ts`

```typescript
animation: {
  'fade-up': 'fadeUp 0.6s ease-out',
  'glow': 'glow 2s ease-in-out infinite',
  // ... customize timing and easing
}
```

**File**: `src/styles/globals.css`

```css
@keyframes fadeUp {
  '0%': { opacity: '0', transform: 'translateY(30px)' },
  '100%': { opacity: '1', transform: 'translateY(0)' },
}
```

---

## 📐 **Component Customizations**

### 1. **Modify Hero Section**

**File**: `src/sections/HeroSection.tsx`

```typescript
// Change heading
<h1 className="section-title mb-6">
  Your New Heading
</h1>

// Change description
<p className="text-lg text-text-secondary mb-8">
  Your new description
</p>

// Change buttons
<Button onClick={() => document.getElementById('projects')?.scrollIntoView()}>
  New Button Text
</Button>
```

### 2. **Modify Navbar**

**File**: `src/components/Navbar.tsx`

```typescript
// Change logo text
<Link href="#home" className="text-2xl font-display font-bold gradient-text">
  YourInitials
</Link>

// Change resume button link
<a href="#contact" className="...">
  Download CV
</a>
```

### 3. **Modify Footer**

**File**: `src/components/Footer.tsx`

```typescript
// Update company name
<h3 className="text-xl font-display font-bold mb-4 gradient-text">
  Your Name
</h3>

// Update description
<p className="text-text-secondary text-sm">
  Your description here
</p>

// Update social links
const socialLinks = [
  { name: 'GitHub', url: 'your-url', icon: 'Github' },
  // ... your links
];
```

---

## 📝 **Content Examples**

### **Great Project Description**
```
"AI-powered platform for real-time data analysis with 
predictive insights, handling 10M+ requests daily. 
Improved performance by 40% through optimization."
```

### **Great Skill Categories**
- Frontend Development
- Backend Development
- Cloud & DevOps
- AI & Machine Learning
- Data Science
- Mobile Development

### **Great Experience Description**
```
"Led development of microservices architecture, 
mentored 3 junior developers, and improved deployment 
efficiency by 45% through CI/CD automation."
```

---

## 🎯 **Button Variants**

**File**: `src/components/Button.tsx`

```typescript
// Primary button (blue with glow)
<Button variant="primary" size="md">
  Primary Action
</Button>

// Secondary button (outlined)
<Button variant="secondary" size="md">
  Secondary Action
</Button>

// Ghost button (minimal)
<Button variant="ghost" size="md">
  Ghost Action
</Button>

// Size options: sm, md, lg
```

---

## 🎬 **Animation Components**

### **FadeUp Animation**
```typescript
import { FadeUp } from '@/components/Motion';

<FadeUp delay={0.2} duration={0.5}>
  <div>Your content here</div>
</FadeUp>
```

### **Stagger Animation**
```typescript
import { StaggerContainer, StaggerItem } from '@/components/Motion';

<StaggerContainer delay={0.1}>
  <StaggerItem><div>Item 1</div></StaggerItem>
  <StaggerItem><div>Item 2</div></StaggerItem>
  <StaggerItem><div>Item 3</div></StaggerItem>
</StaggerContainer>
```

---

## 🔗 **Image URLs**

Replace placeholder images:

1. **Project Images**: Use full URLs from:
   - Unsplash: `https://unsplash.com/`
   - Pexels: `https://pexels.com/`
   - Your own hosted images

2. **Format**:
```typescript
image: 'https://images.unsplash.com/photo-xxxxx?w=500&h=300&fit=crop'
```

---

## 🌐 **Deploy Changes**

After customization:

```bash
# Check locally
npm run dev

# Build for production
npm run build

# Deploy to Vercel
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 💡 **Tips**

✅ Keep descriptions concise (2-3 sentences)  
✅ Use consistent formatting across sections  
✅ Update images with high-quality screenshots  
✅ Keep tech stack tags relevant and current  
✅ Test on mobile before deploying  
✅ Use real URLs for GitHub and demos  
✅ Update contact information regularly  

---

## 🔍 **Common Changes Checklist**

- [ ] Updated all projects with your work
- [ ] Updated skills list
- [ ] Updated experience section
- [ ] Updated social media links
- [ ] Changed color scheme (if desired)
- [ ] Updated contact form email
- [ ] Added custom fonts (if desired)
- [ ] Tested on mobile devices
- [ ] Tested all links (internal and external)
- [ ] Updated meta description

---

**Your portfolio is now ready to be personalized! 🎉**
