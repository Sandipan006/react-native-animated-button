/**
 * SVG Icons Library for React Native Animated Button
 * 
 * This file exports all available SVG icons from the library.
 * Add your new icons here after creating them.
 */

// Export the IconProps interface
export type { IconProps } from './IconTemplate';

// Social Media Icons (both versions and defaults)
export * from './social/SocialIcons';

// Arrow Icons (both versions and defaults)
export * from './arrows/ArrowIcons';

// Action Icons (both versions and defaults)
export * from './actions/ActionIcons';

// Common UI Icons (both versions and defaults)
export * from './common/CommonIcons';

// Payment Icons (both versions and defaults)
export * from './payment/PaymentIcons';

/**
 * Usage Examples:
 * 
 * import { AppleIcon, GoogleIcon, HeartIcon } from 'react-native-animated-button/icons';
 * 
 * <AnimatedButton
 *   title="Sign in with Apple"
 *   onPress={() => {}}
 *   customIcon={AppleIcon}
 * />
 * 
 * <AnimatedButton
 *   title="Like"
 *   onPress={() => {}}
 *   customIcon={HeartIcon}
 *   iconSize={20}
 * />
 */
