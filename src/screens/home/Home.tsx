import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useSelector } from 'react-redux';

import CollapsingHeader from '../../components/collapsingHeader';
import { COLLAPSED_HEIGHT, EXPANDED_HEIGHT } from '../../components/collapsingHeader/constants';
import CurrentStatusCard from '../../components/CurrentStatusCard';
import DailyForecastsCard from '../../components/DailyForecastsCard';
import { useCurrentConditions } from '../../hooks/useCurrentConditions';
import { use5DailyForecasts } from '../../hooks/useDailyForecasts';
import { getCurrentLocationSelector } from '../../stores/locations/selectors';
import useHome from './useHome';

const Home = () => {
  const currentLocation = useSelector(getCurrentLocationSelector);
  const { contentScrollY, onContentScroll, scrollViewSnapToOffset, scrollViewRef } = useHome();

  const { currentConditionsDetailed } = useCurrentConditions({ locationKey: currentLocation.Key, details: true });
  const { dailyForecasts } = use5DailyForecasts({ locationKey: currentLocation.Key, details: true });

  return (
    <View style={styles.container}>
      <CollapsingHeader title={'Weather'} contentScrollOffsetY={contentScrollY} />

      <Animated.View>
        <Animated.ScrollView
          contentContainerStyle={styles.scrollViewContentStyle}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={false}
          scrollEventThrottle={10}
          onScroll={onContentScroll}
          snapToStart={false}
          snapToEnd={false}
          snapToOffsets={scrollViewSnapToOffset}
          overScrollMode={'never'}
          bounces={true}
          ref={scrollViewRef}>
          {currentConditionsDetailed && <CurrentStatusCard location={currentLocation} currentConditions={currentConditionsDetailed} />}
          {dailyForecasts.length > 0 && <DailyForecastsCard dailyForecasts={dailyForecasts} />}
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: COLLAPSED_HEIGHT,
  },
  scrollViewContentStyle: {
    marginTop: EXPANDED_HEIGHT - COLLAPSED_HEIGHT,
  },
});

export default Home;
