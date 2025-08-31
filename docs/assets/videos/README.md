# 🎬 Videos Folder

Add your demo videos and GIFs here:

## 🎥 **Required Videos/GIFs:**

1. **`demo-video.gif`** - Main hero demo
   - Duration: 5-10 seconds
   - Size: 300x600px (mobile aspect)
   - Content: Button press animations, icon changes
   - File Size: Under 5MB

2. **`button-animation.gif`** - Close-up 3D effect
   - Duration: 2-3 seconds
   - Size: 200x100px
   - Content: Single button press animation
   - Loop: Seamless loop

3. **`haptic-demo.gif`** - Visual haptic feedback
   - Duration: 3-4 seconds  
   - Content: Button press with visual feedback indicators
   - Note: Since haptic can't be recorded, show visual cues

## 🎬 **How to Create Demo Content**

### **Method 1: Screen Recording → GIF**

#### **Step 1: Record Screen**
```bash
# iOS Simulator
# Device > Screenshot/Recording > Record Screen

# Android Emulator  
# Extended Controls > Screen Record

# Physical Device
# Use built-in screen recording
```

#### **Step 2: Convert to GIF**
```bash
# Using ffmpeg
ffmpeg -i recording.mov -s 300x600 -r 10 demo-video.gif

# Using online tools
# - ezgif.com
# - cloudconvert.com
# - gifski (for high quality)
```

### **Method 2: Expo Web Recording**

#### **Step 1: Run on Web**
```bash
cd test-app
npx expo start --web
```

#### **Step 2: Record Browser**
- Use browser dev tools to simulate mobile
- Record with screen capture tools
- Convert to GIF

### **Method 3: Physical Device Recording**

#### **Best Quality Approach:**
1. **Run on real device** (best animations)
2. **Record with device** screen recording
3. **Transfer to computer**
4. **Convert and optimize**

## 🎨 **GIF Optimization**

### **Tools for Optimization:**
- **Gifski** - Best quality compression
- **ezgif.com** - Online optimization
- **ImageOptim** (Mac) - Batch optimization

### **Optimization Settings:**
- **Colors**: 256 colors max
- **Frame Rate**: 10-15 fps
- **Dithering**: Floyd-Steinberg for smooth gradients
- **Lossy**: 20-30 for smaller files

## 📝 **Content Ideas**

### **Hero Demo (5-10 seconds):**
1. Show app loading
2. Tap several different buttons
3. Show animations and haptic feedback
4. Demonstrate icon positioning
5. Show loading state

### **Feature-Specific GIFs:**

#### **3D Animation (2 seconds):**
- Close-up of single button
- Show press down and release
- Loop seamlessly

#### **Icon Positioning (3 seconds):**
- Show "Previous" button (icon left)
- Show "Next" button (icon right)
- Highlight the UX improvement

#### **Loading States (4 seconds):**
- Press loading button
- Show spinner animation
- Show completion

## 🎯 **README Integration Examples**

### **Hero Section:**
```markdown
<div align="center">
  <img src="./docs/assets/videos/demo-video.gif" width="300" alt="AnimatedButton Demo" />
  <br>
  <em>✨ Beautiful 3D animations with haptic feedback</em>
</div>
```

### **Feature Showcase:**
```markdown
## ✨ Key Features

| 3D Animation | Icon Positioning | Loading States |
|:---:|:---:|:---:|
| ![3D](./docs/assets/videos/button-animation.gif) | ![Position](./docs/assets/images/icon-positioning.png) | ![Loading](./docs/assets/images/loading-states.png) |
```

### **Quick Start:**
```markdown
## 🚀 Quick Start

<img src="./docs/assets/images/expo-qr.png" width="150" alt="QR Code" align="right" />

```bash
npm install react-native-animated-button react-native-svg expo-haptics
```

Scan QR code to try instantly! →
```

## 🎯 **Pro Tips**

### **Visual Content Best Practices:**
1. **Keep it simple** - Focus on key features
2. **Mobile-first** - Most developers view on phones
3. **Fast loading** - Optimize file sizes
4. **Consistent style** - Same device/theme across images
5. **Clear captions** - Explain what users are seeing

### **GitHub Considerations:**
- **Relative paths** - `./docs/assets/` works everywhere
- **File size limits** - 25MB max per file
- **Loading speed** - Optimize for fast README loading
- **Mobile viewing** - Most traffic is mobile

---

**Great visual content will make your package irresistible! 🎬✨**
