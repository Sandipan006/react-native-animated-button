import React, { useRef } from 'react';
import { 
StyleSheet, 
Text, 
TouchableOpacity, 
Dimensions, 
Platform, 
Animated, 
View, 
ActivityIndicator } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Haptics from 'expo-haptics';

/**
 * Get device dimensions for responsive sizing
 */
const { width, height } = Dimensions.get('window');
const scale = Math.min(width, height) / 375; // Using 375 as base width (iPhone X)

/**
 * Helper function for responsive sizes
 * @param {number} size - Original size to normalize
 * @returns {number} - Normalized size based on device scale
 */
const normalize = (size) => Math.round(scale * size);

/**
 * Default color constants
 */
const COLORS = {
  PRIMARY_TEAL: '#20B2AA',
  SHADOW_PRIMARY_TEAL: '#1A9B94',
  WHITE_PRIMARY: '#FFFFFF',
  TEXT_PRIMARY: '#1A1A1A',
};

/**
 * Default font constants
 */
const FONTS = {
  figtreeSemiBold: Platform.OS === 'ios' ? 'Figtree-SemiBold' : 'figtree_semibold',
};



/**
 * AnimatedButton Component
 * Professional React Native button with Duolingo-style 3D animation and haptic feedback
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Button text
 * @param {function} props.onPress - Function to call when button is pressed
 * @param {string} props.backgroundColor - Main button background color
 * @param {string} props.shadowColor - Shadow layer background color
 * @param {string} props.textColor - Button text color
 * @param {Object} props.style - Additional styles for button container
 * @param {Object} props.textStyle - Additional styles for button text
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {string} props.hapticStyle - Haptic feedback style ('Light', 'Medium', 'Heavy')
 * @param {string} props.customIconSvg - Custom SVG icon as string
 * @param {number} props.iconSize - Icon size in pixels
 * @param {string} props.iconPosition - Icon position ('left' or 'right')
 * @param {boolean} props.loading - Whether to show loading indicator
 * @param {string} props.loadingText - Text to show when loading
 * @param {string} props.type - Button type ('normal' or 'capsule')
 */
const AnimatedButton = ({
  title,
  onPress,
  backgroundColor = COLORS.PRIMARY_TEAL,
  shadowColor = COLORS.SHADOW_PRIMARY_TEAL,
  textColor = COLORS.WHITE_PRIMARY,
  style = {},
  textStyle = {},
  disabled = false,
  hapticStyle = 'Heavy',
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
   * @returns {number} Border radius value
   */
  const getBorderRadius = () => {
    return type === 'capsule' ? normalize(50) : normalize(18);
  };

  /**
   * Determine shadow border radius (slightly larger for depth effect)
   * @returns {number} Shadow border radius value
   */
  const getShadowBorderRadius = () => {
    return type === 'capsule' ? normalize(50) : normalize(19);
  };

  /**
   * Renders the custom SVG icon if provided
   * @returns {JSX.Element|null} SVG icon component or null
   */
  const renderIcon = () => {
    if (customIconSvg) {
      return <SvgXml xml={customIconSvg} width={iconSize} height={iconSize} />;
    }
    
    return null;
  };

  /**
   * Handles button press in animation
   * Moves button down by 6px to create 3D press effect
   * Triggers haptic feedback for tactile response
   */
  const handlePressIn = () => {
    if (disabled || loading) return;

    // Trigger haptic feedback
    const hapticMap = {
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
  const handlePressOut = () => {
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
  const handlePress = () => {
    if (disabled || loading || !onPress) return;
    onPress();
  };

  return (
    <View style={[styles.buttonContainer, style, { opacity: (disabled || loading) ? 0.6 : 1 }]}>
      {/* Shadow layer for 3D effect */}
      <View 
        style={[
          styles.buttonDarkLayer, 
          { 
            backgroundColor: shadowColor,
            borderRadius: getShadowBorderRadius()
          }
        ]} 
      />

      {/* Main interactive button layer */}
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
