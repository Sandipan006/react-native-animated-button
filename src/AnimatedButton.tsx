import React, { useRef } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Dimensions, 
  Platform, 
  Animated, 
  View, 
  ActivityIndicator,
  ViewStyle,
  TextStyle 
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Haptics from 'expo-haptics';

/**
 * Get device dimensions for responsive sizing
 */
const { width, height } = Dimensions.get('window');
const scale = Math.min(width, height) / 375; // Using 375 as base width (iPhone X)

/**
 * Helper function for responsive sizes
 * @param size - Original size to normalize
 * @returns Normalized size based on device scale
 */
const normalize = (size: number): number => Math.round(scale * size);

/**
 * Default color constants
 */
const COLORS = {
  PRIMARY_TEAL: '#20B2AA',
  SHADOW_PRIMARY_TEAL: '#1A9B94',
  WHITE_PRIMARY: '#FFFFFF',
  TEXT_PRIMARY: '#1A1A1A',
} as const;

/**
 * Default font constants
 */
const FONTS = {
  figtreeSemiBold: Platform.OS === 'ios' ? 'Figtree-SemiBold' : 'figtree_semibold',
} as const;

/**
 * Icon types available for the button
 */
export type IconType = 'apple' | 'google' | 'phone' | 'facebook';

/**
 * Haptic feedback intensity options
 */
export type HapticStyle = 'Light' | 'Medium' | 'Heavy';

/**
 * Button type options
 */
export type ButtonType = 'normal' | 'capsule';

/**
 * Icon position options
 */
export type IconPosition = 'left' | 'right';

// Import built-in icons from the icon library
import { appleV1, googleV1, facebookV1 } from './icons/social/SocialIcons';
import { phoneV1 } from './icons/actions/ActionIcons';

/**
 * Props interface for AnimatedButton component
 */
export interface AnimatedButtonProps {
  /** Button text */
  title: string;
  /** Function to call when button is pressed */
  onPress: () => void;
  /** Main button background color */
  backgroundColor?: string;
  /** Shadow layer background color */
  shadowColor?: string;
  /** Button text color */
  textColor?: string;
  /** Additional styles for button container */
  style?: ViewStyle;
  /** Additional styles for button text */
  textStyle?: TextStyle;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Haptic feedback style */
  hapticStyle?: HapticStyle;
  /** Icon type to display (built-in icons) */
  icon?: IconType | null;
  /** Custom SVG icon component (React component) */
  customIcon?: any;
  /** Custom SVG icon as string (SVG markup) */
  customIconSvg?: string | null;
  /** Custom icon size (width and height) */
  iconSize?: number;
  /** Icon position relative to text */
  iconPosition?: IconPosition;
  /** Whether to show loading indicator */
  loading?: boolean;
  /** Text to show when loading (optional) */
  loadingText?: string | null;
  /** Button type for different shapes */
  type?: ButtonType;
}

/**
 * AnimatedButton Component
 * Reusable button with Duolingo-style press animation and haptic feedback
 */
const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  title,
  onPress,
  backgroundColor = COLORS.PRIMARY_TEAL,
  shadowColor = COLORS.SHADOW_PRIMARY_TEAL,
  textColor = COLORS.WHITE_PRIMARY,
  style = {},
  textStyle = {},
  disabled = false,
  hapticStyle = 'Heavy',
  icon = null,
  customIcon = null,
  customIconSvg = null,
  iconSize = 24,
  iconPosition = 'left',
  loading = false,
  loadingText = null,
  type = 'normal',
}) => {
  const buttonTranslateY = useRef(new Animated.Value(0)).current;

  /**
   * Determine border radius based on button type
   */
  const getBorderRadius = (): number => {
    return type === 'capsule' ? normalize(50) : normalize(18);
  };

  const getShadowBorderRadius = (): number => {
    return type === 'capsule' ? normalize(50) : normalize(19);
  };

  /**
   * Renders the appropriate icon based on icon props
   * Supports built-in icons, custom React components, and custom SVG strings
   * @returns SVG icon component or null
   */
  const renderIcon = (): JSX.Element | null => {
    // Priority 1: Custom React component
    if (customIcon) {
      const CustomIconComponent = customIcon;
      return <CustomIconComponent width={iconSize} height={iconSize} />;
    }

    // Priority 2: Custom SVG string
    if (customIconSvg) {
      return <SvgXml xml={customIconSvg} width={iconSize} height={iconSize} />;
    }

    // Priority 3: Built-in icon types (using icon library)
    if (icon) {
      const iconMap = {
        apple: appleV1,
        google: googleV1,
        facebook: facebookV1,
        phone: phoneV1,
      };
      
      const iconSvg = iconMap[icon];
      if (iconSvg) {
        return <SvgXml xml={iconSvg} width={iconSize} height={iconSize} />;
      }
    }
    
    return null;
  };

  /**
   * Handles button press in animation
   * Moves button down by 6px to create press effect
   * Triggers haptic feedback for tactile response
   */
  const handlePressIn = (): void => {
    if (disabled || loading) return;

    // Trigger haptic feedback
    const hapticMap: Record<HapticStyle, Haptics.ImpactFeedbackStyle> = {
      Light: Haptics.ImpactFeedbackStyle.Light,
      Medium: Haptics.ImpactFeedbackStyle.Medium,
      Heavy: Haptics.ImpactFeedbackStyle.Heavy,
    };
    Haptics.impactAsync(hapticMap[hapticStyle] || Haptics.ImpactFeedbackStyle.Light);

    Animated.timing(buttonTranslateY, {
      toValue: 6,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  /**
   * Handles button press out animation
   * Returns button to original position
   */
  const handlePressOut = (): void => {
    if (disabled || loading) return;

    Animated.timing(buttonTranslateY, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  /**
   * Handles button press
   * Calls onPress function if provided and not disabled
   */
  const handlePress = (): void => {
    if (disabled || loading || !onPress) return;
    onPress();
  };

  return (
    <View style={[styles.buttonContainer, style, { opacity: (disabled || loading) ? 0.6 : 1 }]}>
      {/* Shadow layer */}
      <View 
        style={[
          styles.buttonDarkLayer, 
          { 
            backgroundColor: shadowColor,
            borderRadius: getShadowBorderRadius()
          }
        ]} 
      />

      {/* Main button layer */}
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        disabled={disabled || loading}
      >
        <Animated.View
          style={[
            styles.button,
            {
              backgroundColor: backgroundColor,
              borderRadius: getBorderRadius(),
              transform: [{ translateY: buttonTranslateY }],
            },
          ]}
        >
          <View style={styles.buttonContent}>
            {loading ? (
              <>
                <ActivityIndicator 
                  size="small" 
                  color={textColor} 
                />
                {loadingText && (
                  <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
                    {loadingText}
                  </Text>
                )}
              </>
            ) : (
              <>
                {iconPosition === 'left' && renderIcon()}
                <Text style={[styles.buttonText, { color: textColor }, textStyle]}>
                  {title}
                </Text>
                {iconPosition === 'right' && renderIcon()}
              </>
            )}
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Styles for AnimatedButton component
 */
const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: normalize(12),
  },
  buttonDarkLayer: {
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    height: '100%',
    ...Platform.select({
      ios: {
        borderCurve: 'continuous',
      },
    }),
  },
  buttonTouchable: {
    width: '100%',
    position: 'relative',
    zIndex: 3,
  },
  button: {
    ...Platform.select({
      ios: {
        borderCurve: 'continuous',
      },
    }),
    width: '100%',
    padding: normalize(18),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: normalize(18),
    fontFamily: FONTS.figtreeSemiBold,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(7),
  },
});

export default AnimatedButton;
