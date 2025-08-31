# 🎨 Visual Content Guide

This guide shows you how to add screenshots, GIFs, and videos to your README for better package presentation.

## 📁 **Assets Organization**

```
docs/assets/
├── images/
│   ├── demo-screenshot.png          # Main demo screenshot
│   ├── button-types.png             # Normal vs Capsule comparison
│   ├── social-icons.png             # Social media buttons
│   ├── icon-positioning.png         # Left vs Right positioning
│   ├── loading-states.png           # Loading and disabled states
│   ├── side-by-side.png             # Button pairing examples
│   └── font-customization.png       # Typography examples
└── videos/
    ├── demo-video.gif               # Animated demo (recommended)
    ├── button-animation.gif         # 3D press effect close-up
    ├── haptic-demo.mp4              # Haptic feedback demo
    └── full-demo.mp4                # Complete feature walkthrough
```

## 📱 **How to Create Visual Content**

### **1. Screenshots from Your Test App**

#### **Take Screenshots:**
1. **Run your test app** on iOS Simulator or Android Emulator
2. **Take screenshots** of each section:
   - Main demo view
   - Button types comparison
   - Social media icons
   - Icon positioning examples
   - Loading states
   - Side-by-side layouts

#### **Recommended Tools:**
- **iOS Simulator**: Cmd+S for screenshot
- **Android Emulator**: Screenshot button in toolbar
- **Physical Device**: Native screenshot (varies by device)

### **2. Create Animated GIFs**

#### **For Button Animations:**
```bash
# Using ffmpeg to convert screen recording to GIF
ffmpeg -i screen-recording.mov -s 300x600 -r 10 button-animation.gif
```

#### **Recommended Tools:**
- **LICEcap** (Free, cross-platform)
- **Kap** (Mac, free)
- **ScreenToGif** (Windows, free)
- **Gifski** (High quality)

#### **GIF Best Practices:**
- **Size**: 300-500px width (mobile-friendly)
- **Duration**: 3-5 seconds per loop
- **Frame Rate**: 10-15 fps (smaller file size)
- **File Size**: Keep under 5MB for GitHub

### **3. Screen Recording for Videos**

#### **What to Record:**
1. **Full Demo** - Complete app walkthrough (30-60 seconds)
2. **Animation Focus** - Close-up of 3D press effect
3. **Haptic Demo** - Show visual feedback (since haptic can't be recorded)
4. **Icon Showcase** - Scroll through all icon examples

#### **Recording Settings:**
- **Resolution**: 1080x1920 (mobile aspect ratio)
- **Duration**: 30-60 seconds max
- **Format**: MP4 for videos, GIF for animations

## 🎨 **README Integration**

### **1. Hero Section (Top of README)**
```markdown
# React Native Animated Button

<!-- Hero GIF/Video -->
<div align="center">
  <img src="./docs/assets/videos/demo-video.gif" width="300" alt="AnimatedButton Demo" />
</div>

> **Try it yourself!** [Test App Demo](./test-app)
```

### **2. Feature Showcase**
```markdown
## ✨ Features

<table>
<tr>
<td width="50%">

### 🎯 **3D Press Animation**
<img src="./docs/assets/videos/button-animation.gif" width="250" alt="3D Animation" />

</td>
<td width="50%">

### 🎭 **Icon Support**
<img src="./docs/assets/images/social-icons.png" width="250" alt="Social Icons" />

</td>
</tr>
</table>
```

### **3. Examples with Visuals**
```markdown
### Button Types

<div align="center">
<img src="./docs/assets/images/button-types.png" width="400" alt="Button Types" />
</div>

```tsx
// Code examples here
```

### **4. Installation with QR Code**
```markdown
## 📱 Quick Start

<div align="center">
<img src="./docs/assets/images/expo-qr.png" width="200" alt="Expo QR Code" />
<br>
<em>Scan with Expo Go to try instantly!</em>
</div>
```

## 📸 **Content Creation Checklist**

### **Essential Visuals:**
- [ ] **Hero Demo GIF** - Main feature showcase (top of README)
- [ ] **Button Animation GIF** - Close-up of 3D press effect
- [ ] **Screenshot Grid** - All button types and states
- [ ] **Icon Showcase** - Social, payment, arrow icons
- [ ] **QR Code** - For instant testing

### **Optional Visuals:**
- [ ] **Side-by-side Comparison** - Before/after with other buttons
- [ ] **Dark Mode Examples** - Light/dark theme support
- [ ] **Device Screenshots** - iPhone and Android
- [ ] **Code Editor** - IntelliSense/TypeScript support

## 🎯 **Markdown Syntax for Visuals**

### **Images:**
```markdown
![Alt Text](./docs/assets/images/image.png)
<img src="./docs/assets/images/image.png" width="300" alt="Description" />
```

### **GIFs:**
```markdown
![Animation](./docs/assets/videos/animation.gif)
<img src="./docs/assets/videos/demo.gif" width="400" alt="Demo Animation" />
```

### **Videos (GitHub):**
```markdown
<!-- For GitHub, convert to GIF or use external hosting -->
[![Demo Video](./docs/assets/images/video-thumbnail.png)](https://youtu.be/your-video-id)
```

### **Centered Content:**
```markdown
<div align="center">
  <img src="./docs/assets/images/demo.png" width="300" alt="Demo" />
  <br>
  <em>Caption text here</em>
</div>
```

### **Side-by-side Images:**
```markdown
<table>
<tr>
<td><img src="./docs/assets/images/before.png" width="200" alt="Before" /></td>
<td><img src="./docs/assets/images/after.png" width="200" alt="After" /></td>
</tr>
</table>
```

## 🚀 **Pro Tips**

### **File Optimization:**
- **Compress images** - Use TinyPNG or similar
- **Optimize GIFs** - Keep under 5MB for GitHub
- **Use WebP** - For better compression (GitHub supports it)
- **Alt text** - Always add for accessibility

### **GitHub Considerations:**
- **Relative paths** - Use `./docs/assets/` for portability
- **File size limits** - 25MB max per file
- **Supported formats** - PNG, JPG, GIF, WebP, SVG
- **No videos** - Convert to GIF or use external hosting

### **NPM Package Considerations:**
- **Include in files array** - Add `"docs"` to package.json
- **Keep file sizes reasonable** - Don't bloat the package
- **Optimize for mobile** - Most developers view on phones

---

**Perfect visual content will make your package stand out and increase adoption! 📸✨**
