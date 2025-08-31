import React from 'react';
import { SvgXml } from 'react-native-svg';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  [key: string]: any; // Allow additional props for flexibility
}

/**
 * Template for creating new SVG icons
 * 
 * Steps to create a new icon:
 * 1. Copy this template
 * 2. Rename to YourIconName.tsx
 * 3. Replace the SVG content below with your SVG
 * 4. Update the component name
 * 5. Add to the appropriate category folder
 * 6. Export in index.ts
 */
const IconTemplate: React.FC<IconProps> = (props) => {
  const { width = 24, height = 24, color = 'currentColor' } = props;
  const iconSvg = `
    <!-- REPLACE THIS WITH YOUR SVG CONTENT -->
    <svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none">
      <path d="YOUR_SVG_PATH_DATA_HERE" fill="${color}"/>
      <!-- Add more paths if needed -->
    </svg>
  `;

  return <SvgXml xml={iconSvg} width={width} height={height} />;
};

export default IconTemplate;
