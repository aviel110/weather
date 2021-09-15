import { useMemo, useRef } from 'react';
import { Animated, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';

import { HEADER_SCROLL_DISTANCE } from '../../components/collapsingHeader/constants';

type UseHomeState = {
  contentScrollY: Animated.Value;
  onContentScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  scrollViewSnapToOffset: number[];
  scrollViewRef: React.MutableRefObject<ScrollView | undefined>;
};

function createWalletContentScrollListener(
  contentScrollY: Animated.Value,
  listener?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void,
): (event: NativeSyntheticEvent<NativeScrollEvent>) => void {
  return Animated.event([{ nativeEvent: { contentOffset: { y: contentScrollY } } }], {
    useNativeDriver: false,
    listener,
  });
}

export default function useHome(): UseHomeState {
  const scrollViewRef = useRef<ScrollView>();

  const contentScrollY = useRef<Animated.Value>(new Animated.Value(0)).current;

  const onContentScroll = createWalletContentScrollListener(contentScrollY);

  const scrollViewSnapToOffset = useMemo(() => [0, HEADER_SCROLL_DISTANCE], []);

  return {
    contentScrollY,
    onContentScroll,
    scrollViewSnapToOffset,
    scrollViewRef,
  };
}
