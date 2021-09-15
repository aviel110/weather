import { useMemo } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

import {
  COLLAPSED_HEIGHT,
  COLLAPSE_INTERPOLATE_INPUT_RANGE,
  EXPANDED_HEIGHT,
  EXPANDED_TITLE_TYPOGRAPHY,
  IOS_BOUNCE_INTERPOLATE_INPUT_RANGE,
  TITLE_IOS_BOUNCE_DOWN_MAX_OFFSET_Y,
} from './constants';

export type CollapsingHeaderProps = {
  style?: StyleProp<ViewStyle>;
  contentScrollOffsetY: Animated.Value;
  title: string; //override NavbarProps's optional title
};

type CollapsingHeaderState = {
  headerHeightStyle: Record<string, unknown>;
  expandingTitleFontAndPositionStyle: Record<string, unknown>;
  backgroundImageStyle: any;
};

function interpolateProperty(
  contentScrollOffsetY: Animated.Value,
  /** when contentScrollOffsetY is `0` */
  startValue: number,
  endValue: number,
  inputRange: number[],
  extrapolate: Animated.ExtrapolateType = 'clamp',
): Animated.AnimatedInterpolation {
  return contentScrollOffsetY.interpolate({
    inputRange: inputRange,
    outputRange: [endValue, startValue],
    extrapolate,
  });
}

function useInterpolateProperty(
  contentScrollOffsetY: Animated.Value,
  /** when contentScrollOffsetY is `0` */
  startValue: number,
  endValue: number,
  inputRange: number[] = COLLAPSE_INTERPOLATE_INPUT_RANGE,
  extrapolate: Animated.ExtrapolateType = 'clamp',
): Animated.AnimatedInterpolation {
  return useMemo(() => interpolateProperty(contentScrollOffsetY, startValue, endValue, inputRange, extrapolate), [contentScrollOffsetY, startValue, endValue, inputRange]);
}

/** Provides a set of values to transition/animate between expanded and collapsed states */
export default function useCollapsingHeader(contentScrollOffsetY: Animated.Value): CollapsingHeaderState {
  /* animated values */

  const headerHeight = useInterpolateProperty(contentScrollOffsetY, COLLAPSED_HEIGHT, EXPANDED_HEIGHT);

  const expandingTitleFontSize = useInterpolateProperty(contentScrollOffsetY, 24, EXPANDED_TITLE_TYPOGRAPHY.fontSize);
  const expandingTitlePositionY = useInterpolateProperty(contentScrollOffsetY, 0, TITLE_IOS_BOUNCE_DOWN_MAX_OFFSET_Y, IOS_BOUNCE_INTERPOLATE_INPUT_RANGE);

  const headerHeightStyle = useMemo(() => ({ height: headerHeight }), [headerHeight]);

  const expandingTitleFontAndPositionStyle = useMemo(
    () => ({ fontSize: expandingTitleFontSize, transform: [{ translateY: expandingTitlePositionY }] }),
    [expandingTitleFontSize, expandingTitlePositionY],
  );

  const backgroundImageOpacity = useInterpolateProperty(contentScrollOffsetY, 0, 1, [0, 50]);
  const backgroundImageStyle = useMemo(() => ({ opacity: backgroundImageOpacity }), []);

  return {
    headerHeightStyle,
    expandingTitleFontAndPositionStyle,
    backgroundImageStyle,
  };
}
