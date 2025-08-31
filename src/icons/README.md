# 🎨 SVG Icons Library

This folder contains SVG icon components for the AnimatedButton package.

## 📁 **Folder Structure**

```
src/icons/
├── social/           # Social media icons
│   ├── AppleIcon.tsx
│   ├── GoogleIcon.tsx
│   ├── FacebookIcon.tsx
│   ├── TwitterIcon.tsx
│   ├── LinkedInIcon.tsx
│   └── InstagramIcon.tsx
├── arrows/           # Arrow and navigation icons
│   ├── ArrowLeftIcon.tsx
│   ├── ArrowRightIcon.tsx
│   ├── ArrowUpIcon.tsx
│   ├── ArrowDownIcon.tsx
│   ├── ChevronLeftIcon.tsx
│   └── ChevronRightIcon.tsx
├── actions/          # Action icons
│   ├── PhoneIcon.tsx
│   ├── EmailIcon.tsx
│   ├── DownloadIcon.tsx
│   ├── UploadIcon.tsx
│   ├── ShareIcon.tsx
│   ├── SaveIcon.tsx
│   ├── EditIcon.tsx
│   └── DeleteIcon.tsx
├── common/           # Common UI icons
│   ├── HeartIcon.tsx
│   ├── StarIcon.tsx
│   ├── CheckIcon.tsx
│   ├── CloseIcon.tsx
│   ├── SearchIcon.tsx
│   ├── FilterIcon.tsx
│   ├── MenuIcon.tsx
│   └── SettingsIcon.tsx
├── payment/          # Payment and shopping icons
│   ├── CreditCardIcon.tsx
│   ├── PayPalIcon.tsx
│   ├── CartIcon.tsx
│   └── WalletIcon.tsx
└── index.ts          # Export all icons
```

## 🔧 **How to Add Your SVG Icons**

### **Step 1: Create Icon Component Template**

```tsx
import React from 'react';
import { SvgXml } from 'react-native-svg';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const YourIconName: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor' 
}) => {
  const iconSvg = \`
    <!-- PASTE YOUR SVG CONTENT HERE -->
    <svg width="\${width}" height="\${height}" viewBox="0 0 24 24" fill="none">
      <path d="YOUR_PATH_DATA" fill="\${color}"/>
    </svg>
  \`;

  return <SvgXml xml={iconSvg} width={width} height={height} />;
};

export default YourIconName;
```

### **Step 2: Convert Your SVG Files**

1. **Open your SVG file** in a text editor
2. **Copy the SVG content** (the `<svg>...</svg>` part)
3. **Replace the template** with your SVG content
4. **Update dimensions** in viewBox if needed
5. **Replace colors** with `\${color}` for theming

### **Example Conversion:**

**Your SVG file:**
```svg
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFD700"/>
</svg>
```

**Becomes:**
```tsx
const StarIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'currentColor' }) => {
  const iconSvg = \`
    <svg width="\${width}" height="\${height}" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="\${color}"/>
    </svg>
  \`;
  return <SvgXml xml={iconSvg} width={width} height={height} />;
};
```

## 📝 **Icons You Should Add**

### **Essential Icons (High Priority)**
- [ ] AppleIcon.tsx
- [ ] GoogleIcon.tsx
- [ ] FacebookIcon.tsx
- [ ] PhoneIcon.tsx
- [ ] ArrowLeftIcon.tsx
- [ ] ArrowRightIcon.tsx
- [ ] HeartIcon.tsx
- [ ] StarIcon.tsx
- [ ] CheckIcon.tsx
- [ ] CloseIcon.tsx

### **Social Media Icons**
- [ ] TwitterIcon.tsx / XIcon.tsx
- [ ] LinkedInIcon.tsx
- [ ] InstagramIcon.tsx
- [ ] YouTubeIcon.tsx
- [ ] TikTokIcon.tsx
- [ ] DiscordIcon.tsx
- [ ] WhatsAppIcon.tsx
- [ ] TelegramIcon.tsx

### **Arrow & Navigation Icons**
- [ ] ArrowUpIcon.tsx
- [ ] ArrowDownIcon.tsx
- [ ] ChevronLeftIcon.tsx
- [ ] ChevronRightIcon.tsx
- [ ] ChevronUpIcon.tsx
- [ ] ChevronDownIcon.tsx
- [ ] BackIcon.tsx
- [ ] ForwardIcon.tsx

### **Action Icons**
- [ ] EmailIcon.tsx
- [ ] DownloadIcon.tsx
- [ ] UploadIcon.tsx
- [ ] ShareIcon.tsx
- [ ] SaveIcon.tsx
- [ ] EditIcon.tsx
- [ ] DeleteIcon.tsx
- [ ] CopyIcon.tsx
- [ ] PasteIcon.tsx
- [ ] PrintIcon.tsx

### **Common UI Icons**
- [ ] SearchIcon.tsx
- [ ] FilterIcon.tsx
- [ ] MenuIcon.tsx
- [ ] SettingsIcon.tsx
- [ ] HomeIcon.tsx
- [ ] UserIcon.tsx
- [ ] BellIcon.tsx
- [ ] CalendarIcon.tsx
- [ ] ClockIcon.tsx
- [ ] LocationIcon.tsx

### **E-commerce Icons**
- [ ] CartIcon.tsx
- [ ] CreditCardIcon.tsx
- [ ] PayPalIcon.tsx
- [ ] WalletIcon.tsx
- [ ] BagIcon.tsx
- [ ] TagIcon.tsx
- [ ] GiftIcon.tsx

### **Media Icons**
- [ ] PlayIcon.tsx
- [ ] PauseIcon.tsx
- [ ] StopIcon.tsx
- [ ] VolumeIcon.tsx
- [ ] CameraIcon.tsx
- [ ] ImageIcon.tsx
- [ ] VideoIcon.tsx
- [ ] MusicIcon.tsx

### **Status Icons**
- [ ] SuccessIcon.tsx
- [ ] ErrorIcon.tsx
- [ ] WarningIcon.tsx
- [ ] InfoIcon.tsx
- [ ] LoadingIcon.tsx

## 🚀 **After Adding Icons**

1. **Update the index.ts** file to export your new icons
2. **Update the AnimatedButton** icon types if needed
3. **Test in the demo app**
4. **Update documentation**

## 💡 **Tips**

- **Keep consistent naming**: Use `Icon` suffix
- **Use 24x24 viewBox** for consistency
- **Use `currentColor`** for automatic theming
- **Test different sizes** (16px, 24px, 32px)
- **Optimize SVG paths** for better performance
