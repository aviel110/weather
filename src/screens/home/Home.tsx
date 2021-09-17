import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useSelector } from 'react-redux';

import CollapsingHeader from '../../components/collapsingHeader';
import { COLLAPSED_HEIGHT, EXPANDED_HEIGHT } from '../../components/collapsingHeader/constants';
import CurrentStatusCard from '../../components/CurrentStatusCard';
import DailyForecastsCard from '../../components/DailyForecastsCard';
import { IconFamily } from '../../components/Icon';
import IconTitleValueRecordsListCard, { IconTitleValueRecord } from '../../components/StatsListCard';
import { useCurrentConditions } from '../../hooks/useCurrentConditions';
import { use5DailyForecasts } from '../../hooks/useDailyForecasts';
import { getCurrentLocationSelector } from '../../stores/locations/selectors';
import { Colors, Dimens } from '../../styles';
import { dateToLocaleTimeString } from '../../utils/dates';
import useHome from './useHome';

const Home = () => {
  const currentLocation = useSelector(getCurrentLocationSelector);
  const { contentScrollY, onContentScroll, scrollViewSnapToOffset, scrollViewRef } = useHome();

  const { currentConditionsDetailed } = useCurrentConditions({ locationKey: currentLocation.Key, details: true });
  const { dailyForecasts } = use5DailyForecasts({ locationKey: currentLocation.Key, details: true });
  const recordsList: IconTitleValueRecord[] = [];

  if (currentConditionsDetailed && dailyForecasts && dailyForecasts[0]) {
    recordsList.push(
      {
        title: 'Chance for Rain',
        iconProps: {
          iconFamily: IconFamily.FONTISO,
          name: 'rain',
          color: '#1308A5',
        },
        value: currentConditionsDetailed.IsDayTime ? `${dailyForecasts[0].Day.RainProbability}%` : `${dailyForecasts[0].Night.RainProbability}%`,
      },

      {
        title: 'Wind',
        iconProps: {
          iconFamily: IconFamily.MATERIAL_COMMUNITY,
          name: 'weather-windy',
          color: '#B2B2B2',
        },
        value: currentConditionsDetailed?.Wind.Speed.Metric.Value,
      },
      {
        title: 'Humidity',
        iconProps: {
          iconFamily: IconFamily.SIMPLE_LINE,
          name: 'drop',
          color: Colors.blue_sea,
        },
        value: `${currentConditionsDetailed.RelativeHumidity}%`,
      },
      {
        title: 'Sunrise',
        iconProps: {
          iconFamily: IconFamily.FEATHER,
          name: 'sunrise',
          color: '#FFE296',
        },
        value: dateToLocaleTimeString(dailyForecasts[0].Sun.Rise),
      },
      {
        title: 'Sunset',
        iconProps: {
          iconFamily: IconFamily.FEATHER,
          name: 'sunset',
          color: '#F1B318',
        },
        value: dateToLocaleTimeString(dailyForecasts[0].Sun.Set),
      },
      {
        title: 'UV',
        iconProps: {
          iconFamily: IconFamily.MATERIAL_COMMUNITY,
          name: 'sunglasses',
          color: Colors.black,
        },
        value: currentConditionsDetailed.UVIndexText,
      },
    );
  }

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
          {recordsList.length > 0 && <IconTitleValueRecordsListCard recordsList={recordsList} />}
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
    paddingBottom: 150,
  },
});

export default Home;
