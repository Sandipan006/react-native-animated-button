# 🎨 Custom Icons Guide

This guide shows you how to use your own SVG icons with the AnimatedButton component.

## 🎯 **Three Ways to Add Custom Icons**

### **Method 1: Custom React Component (Recommended)**

Create your own SVG icon components and pass them directly:

```tsx
// 1. Create your custom icon component
// components/icons/MyCustomIcon.tsx
import React from 'react';
import { SvgXml } from 'react-native-svg';

interface MyCustomIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MyCustomIcon: React.FC<MyCustomIconProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}) => {
  const iconSvg = `
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="YOUR_SVG_PATH_HERE" fill="${color}"/>
    </svg>
  `;

  return <SvgXml xml={iconSvg} width={width} height={height} />;
};

export default MyCustomIcon;

// 2. Use it in your AnimatedButton
import MyCustomIcon from './components/icons/MyCustomIcon';

<AnimatedButton
  title="Custom Icon Button"
  onPress={() => {}}
  customIcon={MyCustomIcon}
  iconSize={24}
  backgroundColor="#FF6B9D"
  shadowColor="#E55A87"
/>
```

### **Method 2: SVG String**

Pass SVG markup directly as a string:

```tsx
<AnimatedButton
  title="SVG String Icon"
  onPress={() => {}}
  customIconSvg={`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
    </svg>
  `}
  iconSize={20}
  backgroundColor="#FFD700"
  shadowColor="#E6C200"
/>
```

### **Method 3: Built-in Icons (Default)**

Use the pre-built icons for common use cases:

```tsx
<AnimatedButton
  title="Sign in with Apple"
  onPress={() => {}}
  icon="apple"  // 'apple' | 'google' | 'facebook' | 'phone'
  backgroundColor="#000000"
  shadowColor="#333333"
/>
```

## 🎨 **Icon Priority System**

The component uses this priority order:

1. **`customIcon`** (highest priority) - React component
2. **`customIconSvg`** (medium priority) - SVG string  
3. **`icon`** (lowest priority) - Built-in icons
4. **No icon** - If none are provided

```tsx
// This will show the Heart icon, not the Apple icon
<AnimatedButton
  title="Priority Example"
  onPress={() => {}}
  icon="apple"           // ❌ Ignored (lowest priority)
  customIcon={HeartIcon} // ✅ Used (highest priority)
  customIconSvg="..."    // ❌ Ignored (lower than customIcon)
/>
```

## 📁 **Organizing Your Icons**

### **Recommended Folder Structure**

```
your-project/
├── components/
│   └── icons/
│       ├── HeartIcon.tsx
│       ├── StarIcon.tsx
│       ├── CheckIcon.tsx
│       └── index.ts
└── screens/
    └── LoginScreen.tsx
```

### **Create an Icon Index File**

```tsx
// components/icons/index.ts
export { default as HeartIcon } from './HeartIcon';
export { default as StarIcon } from './StarIcon';
export { default as CheckIcon } from './CheckIcon';

// Usage in your screens
import { HeartIcon, StarIcon } from '../components/icons';
```

## 🎯 **Real-World Examples**

### **E-commerce App Icons**

```tsx
// Shopping Cart Icon
const CartIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <SvgXml 
    xml={`<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5M9 19.5A1.5 1.5 0 108 21 1.5 1.5 0 009 19.5ZM20 19.5A1.5 1.5 0 1019 21 1.5 1.5 0 0020 19.5Z" stroke="currentColor" stroke-width="2"/>
    </svg>`}
    width={width} 
    height={height} 
  />
);

<AnimatedButton
  title="Add to Cart"
  onPress={addToCart}
  customIcon={CartIcon}
  backgroundColor="#FF6B35"
  shadowColor="#E55529"
/>
```

### **Social Media Icons**

```tsx
// Custom Twitter/X Icon
const TwitterIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <SvgXml 
    xml={`<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
    </svg>`}
    width={width} 
    height={height} 
  />
);

<AnimatedButton
  title="Share on X"
  onPress={shareOnTwitter}
  customIcon={TwitterIcon}
  backgroundColor="#000000"
  shadowColor="#333333"
/>
```

### **Action Icons**

```tsx
// Download Icon
const DownloadIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <SvgXml 
    xml={`<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`}
    width={width} 
    height={height} 
  />
);

<AnimatedButton
  title="Download File"
  onPress={downloadFile}
  customIcon={DownloadIcon}
  iconSize={20}
  backgroundColor="#34C759"
  shadowColor="#2AA946"
/>
```

## ⚙️ **Icon Customization Options**

### **Icon Size**

```tsx
<AnimatedButton
  title="Small Icon"
  customIcon={HeartIcon}
  iconSize={16}  // Custom size
/>

<AnimatedButton
  title="Large Icon"
  customIcon={HeartIcon}
  iconSize={32}  // Bigger icon
/>
```

### **Icon Colors**

Icons automatically inherit the button's text color, but you can customize:

```tsx
// Method 1: Using currentColor (recommended)
const MyIcon: React.FC<IconProps> = ({ width, height }) => (
  <SvgXml 
    xml={`<svg width="${width}" height="${height}" viewBox="0 0 24 24">
      <path d="..." fill="currentColor"/>  <!-- Uses button's textColor -->
    </svg>`}
    width={width} 
    height={height} 
  />
);

// Method 2: Custom color prop
const MyIcon: React.FC<IconProps> = ({ width, height, color = '#FF0000' }) => (
  <SvgXml 
    xml={`<svg width="${width}" height="${height}" viewBox="0 0 24 24">
      <path d="..." fill="${color}"/>
    </svg>`}
    width={width} 
    height={height} 
  />
);
```

## 🔄 **Converting SVG Files**

If you have SVG files, here's how to convert them:

### **From SVG File to Component**

1. **Copy your SVG content**
2. **Create the component**:

```tsx
import React from 'react';
import { SvgXml } from 'react-native-svg';

interface CustomIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}) => {
  const iconSvg = `
    <!-- PASTE YOUR SVG CONTENT HERE -->
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="YOUR_PATH_DATA" fill="${color}"/>
    </svg>
  `;

  return <SvgXml xml={iconSvg} width={width} height={height} />;
};

export default CustomIcon;
```

## 🎨 **Design Tips**

### **Best Practices**

1. **Use 24x24 viewBox** for consistency
2. **Use `currentColor`** for automatic theming
3. **Keep paths simple** for better performance
4. **Test on different sizes** (16px to 32px)
5. **Ensure accessibility** with proper contrast

### **Performance Tips**

1. **Minimize SVG complexity** - fewer paths = better performance
2. **Reuse components** - don't create new ones for each button
3. **Use built-in icons** when possible - they're optimized

## 📱 **Testing Custom Icons**

Use the demo app to test your icons:

```tsx
// Add to your demo app
<AnimatedButton
  title="Test My Icon"
  onPress={() => console.log('Icon works!')}
  customIcon={MyCustomIcon}
  iconSize={24}
/>
```

## 🚀 **Ready to Use!**

Your AnimatedButton now supports:
- ✅ **Custom React components**
- ✅ **SVG strings**
- ✅ **Built-in icons**
- ✅ **Custom sizing**
- ✅ **Automatic theming**
- ✅ **TypeScript support**

Perfect for any project with custom branding and iconography! 🎨✨
