import React, { useCallback, useMemo, useRef, forwardRef } from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  Platform,
  Animated,
  View,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  I18nManager,
  PixelRatio,
  ColorValue,
  AccessibilityState,
  Insets,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Haptics from 'expo-haptics';

import { appleV1, googleV1, facebookV1 } from './icons/social/SocialIcons';
import { phoneV1 } from './icons/actions/ActionIcons';

export type IconType = 'apple' | 'google' | 'phone' | 'facebook';
export type HapticStyle = 'Light' | 'Medium' | 'Heavy';
export type ButtonType = 'normal' | 'capsule';
export type IconPosition = 'left' | 'right';

type IconComponentProps = { width?: number; height?: number; color?: string };
type IconComponent = React.ComponentType<IconComponentProps>;

export interface AnimatedButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: ColorValue;
  shadowColor?: ColorValue;
  textColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  hapticStyle?: HapticStyle;
  icon?: IconType | null;
  customIcon?: IconComponent | null;
  customIconSvg?: string | null;
  iconSize?: number;
  iconPosition?: IconPosition; // respects RTL if omitted
  loading?: boolean;
  loadingText?: string | null;
  type?: ButtonType;
  fullWidth?: boolean;
  minHeight?: number;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  onLongPress?: () => void;
  hitSlop?: Insets;
  disableAnimations?: boolean; // New prop to disable animations for accessibility
}

const isIOS = Platform.OS === 'ios';

/** Dynamic normalize that reacts to orientation/size changes */
const useNormalize = () => {
  const { width, height } = useWindowDimensions();
  const scale = Math.min(width, height) / 375; // iPhone X logical width
  
  return useCallback((size: number) => {
    // Round to nearest pixel to avoid blurriness
    return Math.round(PixelRatio.roundToNearestPixel(scale * size));
  }, [scale]);
};

const COLORS = {
  PRIMARY_TEAL: Platform.select({
    ios: '#20B2AA', // Could use DynamicColorIOS({ light: '#20B2AA', dark: '#20B2AA' }) for true dynamic colors
    default: '#20B2AA',
  }),
  SHADOW_PRIMARY_TEAL: '#1A9B94',
  WHITE_PRIMARY: '#FFFFFF',
  TEXT_PRIMARY: '#1A1A1A',
} as const;

const FONTS = {
  figtreeSemiBold: isIOS ? 'Figtree-SemiBold' : 'figtree_semibold',
} as const;

const iconMap: Record<IconType, string> = {
  apple: appleV1,
  google: googleV1,
  facebook: facebookV1,
  phone: phoneV1,
};

// Spacer component for icon gap fallback
const Spacer = ({ width }: { width: number }) => <View style={{ width }} />;

const AnimatedButton = forwardRef<View, AnimatedButtonProps>((props, ref) => {
  const {
    title,
    onPress,
    backgroundColor = COLORS.PRIMARY_TEAL,
    shadowColor = COLORS.SHADOW_PRIMARY_TEAL,
    textColor = COLORS.WHITE_PRIMARY,
    style,
    textStyle,
    disabled = false,
    hapticStyle = 'Heavy',
    icon = null,
    customIcon = null,
    customIconSvg = null,
    iconSize = 24,
    iconPosition,
    loading = false,
    loadingText = null,
    type = 'normal',
    fullWidth = true,
    minHeight,
    testID,
    accessibilityLabel,
    accessibilityHint,
    onLongPress,
    hitSlop,
    disableAnimations,
  } = props;

  const normalize = useNormalize();
  const pressY = useRef(new Animated.Value(0)).current;
  const pressLock = useRef(false); // guard to prevent rapid double presses

  const brMain = useMemo(() => (type === 'capsule' ? normalize(50) : normalize(18)), [type, normalize]);
  const brShadow = useMemo(() => (type === 'capsule' ? normalize(50) : normalize(19)), [type, normalize]);

  const effectiveIconPosition: IconPosition = useMemo(() => {
    if (iconPosition) return iconPosition;
    // Auto-swap for RTL if not specified
    return I18nManager.isRTL ? 'right' : 'left';
  }, [iconPosition]);

  const renderIcon = useCallback(() => {
    if (customIcon) {
      const CustomIcon = customIcon;
      return <CustomIcon width={iconSize} height={iconSize} />;
    }
    if (customIconSvg) {
      return <SvgXml xml={customIconSvg} width={iconSize} height={iconSize} />;
    }
    if (icon) {
      const svg = iconMap[icon];
      if (svg) return <SvgXml xml={svg} width={iconSize} height={iconSize} />;
    }
    return null;
  }, [customIcon, customIconSvg, icon, iconSize]);

  const doHaptic = useCallback(async () => {
    try {
      const map: Record<HapticStyle, Haptics.ImpactFeedbackStyle> = {
        Light: Haptics.ImpactFeedbackStyle.Light,
        Medium: Haptics.ImpactFeedbackStyle.Medium,
        Heavy: Haptics.ImpactFeedbackStyle.Heavy,
      };
      await Haptics.impactAsync(map[hapticStyle] ?? Haptics.ImpactFeedbackStyle.Light);
    } catch {
      // no-op if not supported
    }
  }, [hapticStyle]);

  const handlePressIn = useCallback(() => {
    if (disabled || loading) return;
    doHaptic();
    
    // Skip animation if disabled for accessibility
    if (disableAnimations) return;
    
    // Use spring for more natural "Duolingo" feel
    Animated.spring(pressY, {
      toValue: 6,
      stiffness: 300,
      damping: 20,
      mass: 0.4,
      useNativeDriver: true,
    }).start();
  }, [disabled, loading, doHaptic, pressY, disableAnimations]);

  const handlePressOut = useCallback(() => {
    if (disabled || loading) return;
    
    // Skip animation if disabled for accessibility
    if (disableAnimations) return;
    
    Animated.spring(pressY, {
      toValue: 0,
      stiffness: 300,
      damping: 20,
      mass: 0.4,
      useNativeDriver: true,
    }).start();
  }, [disabled, loading, pressY, disableAnimations]);

  const handlePress = useCallback(() => {
    if (disabled || loading || !onPress) return;
    if (pressLock.current) return;
    pressLock.current = true;
    try {
      onPress();
    } finally {
      // Release lock shortly after to avoid accidental double-press
      setTimeout(() => {
        pressLock.current = false;
      }, 250);
    }
  }, [disabled, loading, onPress]);

  const a11yState: AccessibilityState = useMemo(
    () => ({ disabled: disabled || loading, busy: loading }),
    [disabled, loading]
  );

  // Ensure textColor is a string for ActivityIndicator
  const spinnerColor = (typeof textColor === 'string' ? textColor : '#FFFFFF') as string;

  return (
    <View
      ref={ref}
      testID={testID}
      style={[
        styles.container,
        fullWidth && { width: '100%' },
        { marginBottom: normalize(12) },
        style,
        (disabled || loading) && { opacity: 0.6 },
      ]}
    >
      {/* Shadow layer */}
      <View
        pointerEvents="none"
        style={[
          styles.shadowLayer,
          {
            top: normalize(6),
            borderRadius: brShadow,
            backgroundColor: shadowColor as string,
          },
        ]}
      />

      {/* Main pressable layer */}
      <Pressable
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={onLongPress}
        hitSlop={hitSlop}
        {...(Platform.OS === 'android' ? { android_ripple: { borderless: false } } : {})}
        disabled={disabled || loading}
        accessibilityRole="button"
        accessibilityState={a11yState}
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityHint={accessibilityHint ?? (loading ? 'In progress' : undefined)}
        style={styles.pressable}
      >
        <Animated.View
          style={[
            styles.button,
            isIOS ? styles.iosBorderCurve : null,
            {
              minHeight: minHeight ?? normalize(52),
              paddingVertical: normalize(14),
              paddingHorizontal: normalize(18),
              borderRadius: brMain,
              backgroundColor,
              transform: [{ translateY: pressY }],
            },
          ]}
        >
          <View style={styles.content}>
            {loading ? (
              <>
                <ActivityIndicator size="small" color={spinnerColor} />
                {loadingText ? (
                  <Text style={[styles.textBase, { color: textColor }, textStyle]}>{loadingText}</Text>
                ) : null}
              </>
            ) : (
              <>
                {effectiveIconPosition === 'left' && renderIcon()}
                {effectiveIconPosition === 'left' && <Spacer width={normalize(7)} />}
                <Text
                  style={[
                    styles.textBase,
                    { color: textColor, fontSize: normalize(18), fontFamily: FONTS.figtreeSemiBold },
                    textStyle,
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {title}
                </Text>
                {effectiveIconPosition === 'right' && <Spacer width={normalize(7)} />}
                {effectiveIconPosition === 'right' && renderIcon()}
              </>
            )}
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  shadowLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '100%',
    ...(isIOS ? { borderCurve: 'continuous' as any } : null),
  },
  pressable: {
    width: '100%',
    position: 'relative',
    zIndex: 3,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iosBorderCurve: {
    // @ts-ignore RN iOS only
    borderCurve: 'continuous',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // Removed gap in favor of Spacer components for better cross-platform support
  },
  textBase: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default React.memo(AnimatedButton);
