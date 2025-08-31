# 🎨 How to Add Your Existing SVG Icons

This guide shows you exactly how to add your local SVG icons to the AnimatedButton package.

## 📁 **Your SVG Icons Folder Structure**

```
src/icons/
├── README.md              # Documentation
├── IconTemplate.tsx       # Template for new icons
├── index.ts              # Export all icons
├── social/               # Social media icons
│   ├── _template.tsx     # Guide for social icons
│   ├── AppleIcon.tsx     # ← Add your Apple SVG here
│   ├── GoogleIcon.tsx    # ← Add your Google SVG here
│   ├── FacebookIcon.tsx  # ← Add your Facebook SVG here
│   └── TwitterIcon.tsx   # ← Add your Twitter SVG here
├── arrows/               # Arrow and navigation
│   ├── _template.tsx
│   ├── ArrowLeftIcon.tsx  # ← Add your arrow SVGs here
│   └── ArrowRightIcon.tsx
├── actions/              # Action buttons
│   ├── _template.tsx
│   ├── PhoneIcon.tsx     # ← Add your phone SVG here
│   ├── EmailIcon.tsx     # ← Add your email SVG here
│   └── DownloadIcon.tsx  # ← Add your download SVG here
├── common/               # Common UI elements
│   ├── _template.tsx
│   ├── HeartIcon.tsx     # ← Add your heart SVG here
│   ├── StarIcon.tsx      # ← Add your star SVG here
│   └── CheckIcon.tsx     # ← Add your check SVG here
└── payment/              # Payment icons
    ├── _template.tsx
    ├── CreditCardIcon.tsx # ← Add your payment SVGs here
    └── CartIcon.tsx
```

## 🔧 **Step-by-Step: Converting Your SVG**

### **Step 1: Choose Your SVG File**
Let's say you have a file called `heart.svg`:

```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF0000"/>
</svg>
```

### **Step 2: Create the Icon Component**
Create `src/icons/common/HeartIcon.tsx`:

```tsx
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { IconProps } from '../IconTemplate';

const HeartIcon: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}) => {
  const iconSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="${color}"/>
    </svg>
  `;

  return <SvgXml xml={iconSvg} width={width} height={height} />;
};

export default HeartIcon;
```

**Key Changes Made:**
1. ✅ **Replaced fixed colors** (`#FF0000`) with `${color}` for theming
2. ✅ **Made dimensions dynamic** with `${width}` and `${height}`
3. ✅ **Added TypeScript interface** `IconProps`
4. ✅ **Used template string** for SVG content

### **Step 3: Add to Exports**
Update `src/icons/index.ts`:

```tsx
// Uncomment and add your new icon
export { default as HeartIcon } from './common/HeartIcon';
```

### **Step 4: Use in AnimatedButton**
```tsx
import { HeartIcon } from 'react-native-animated-button/icons';

<AnimatedButton
  title="Like Post"
  onPress={() => {}}
  customIcon={HeartIcon}
  iconSize={24}
/>
```

## 🎯 **Quick Conversion Examples**

### **Social Media Icons**

**Apple Icon** (`src/icons/social/AppleIcon.tsx`):
```tsx
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { IconProps } from '../IconTemplate';

const AppleIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'currentColor' }) => {
  const iconSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <!-- PASTE YOUR APPLE SVG PATH HERE -->
      <path d="YOUR_APPLE_SVG_PATH" fill="${color}"/>
    </svg>
  `;
  return <SvgXml xml={iconSvg} width={width} height={height} />;
};

export default AppleIcon;
```

**Google Icon** (`src/icons/social/GoogleIcon.tsx`):
```tsx
const GoogleIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'currentColor' }) => {
  const iconSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <!-- PASTE YOUR GOOGLE SVG PATHS HERE -->
      <!-- Note: Google icon usually has multiple colored paths -->
      <path d="PATH_1" fill="#4285F4"/>
      <path d="PATH_2" fill="#34A853"/>
      <path d="PATH_3" fill="#FBBC05"/>
      <path d="PATH_4" fill="#EA4335"/>
    </svg>
  `;
  return <SvgXml xml={iconSvg} width={width} height={height} />;
};
```

### **Arrow Icons**

**Arrow Right** (`src/icons/arrows/ArrowRightIcon.tsx`):
```tsx
const ArrowRightIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'currentColor' }) => {
  const iconSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <!-- PASTE YOUR ARROW RIGHT SVG PATH HERE -->
      <path d="YOUR_ARROW_RIGHT_PATH" fill="${color}"/>
    </svg>
  `;
  return <SvgXml xml={iconSvg} width={width} height={height} />;
};
```

## 📝 **Icons You Should Prioritize**

### **Must-Have Icons (Start Here)**
1. **AppleIcon** - For Apple sign-in buttons
2. **GoogleIcon** - For Google sign-in buttons  
3. **FacebookIcon** - For Facebook sign-in buttons
4. **PhoneIcon** - For phone/call buttons
5. **ArrowRightIcon** - For next/continue buttons
6. **ArrowLeftIcon** - For back buttons
7. **HeartIcon** - For like/favorite buttons
8. **StarIcon** - For rating buttons
9. **CheckIcon** - For success/done buttons
10. **CloseIcon** - For close/cancel buttons

### **High-Value Icons (Add Next)**
- **EmailIcon** - Contact forms
- **DownloadIcon** - Download buttons
- **ShareIcon** - Share functionality
- **SearchIcon** - Search buttons
- **MenuIcon** - Menu toggles
- **SettingsIcon** - Settings buttons
- **CartIcon** - E-commerce buttons
- **UserIcon** - Profile buttons

## 🎨 **Icon Design Guidelines**

### **SVG Optimization**
1. **Use 24x24 viewBox** for consistency
2. **Simplify paths** - fewer points = better performance
3. **Remove unnecessary elements** (gradients, effects)
4. **Use single color** when possible
5. **Keep file size small** (<2KB per icon)

### **Color Strategy**
```tsx
// ✅ Good - Uses currentColor for theming
<path d="..." fill="${color}"/>

// ✅ Good - Specific brand colors (Google, Facebook)
<path d="..." fill="#4285F4"/>

// ❌ Bad - Hard-coded colors that can't be themed
<path d="..." fill="#FF0000"/>
```

### **Testing Your Icons**
1. **Test different sizes**: 16px, 24px, 32px
2. **Test different colors**: Light and dark themes
3. **Test in AnimatedButton**: Ensure proper alignment
4. **Test on devices**: iOS and Android rendering

## 🚀 **After Adding Icons**

### **1. Export Your Icons**
Update `src/icons/index.ts`:
```tsx
// Social Icons
export { default as AppleIcon } from './social/AppleIcon';
export { default as GoogleIcon } from './social/GoogleIcon';

// Arrow Icons  
export { default as ArrowRightIcon } from './arrows/ArrowRightIcon';

// Common Icons
export { default as HeartIcon } from './common/HeartIcon';
```

### **2. Update Package Exports**
Update `src/index.ts`:
```tsx
// Export icons separately
export * from './icons';
```

### **3. Test in Demo App**
Add to `example/App.tsx`:
```tsx
import { HeartIcon, AppleIcon } from '../src/icons';

<AnimatedButton
  title="Test My Icon"
  onPress={() => {}}
  customIcon={HeartIcon}
/>
```

### **4. Build and Test**
```bash
npm run build
cd example
npx expo start
```

## 💡 **Pro Tips**

1. **Batch Convert**: Convert multiple icons at once using the same pattern
2. **Keep Originals**: Save your original SVG files for reference
3. **Use Consistent Naming**: Always end with `Icon.tsx`
4. **Test Early**: Test each icon as you add it
5. **Document Usage**: Add examples in comments

## 🎯 **Ready to Start!**

You now have everything needed to add your existing SVG icons:

- ✅ **Folder structure** created
- ✅ **Templates** provided
- ✅ **Step-by-step guide** written
- ✅ **Examples** for each category
- ✅ **Export system** ready

Start with your most important icons (Apple, Google, Facebook, Phone) and expand from there! 🚀
