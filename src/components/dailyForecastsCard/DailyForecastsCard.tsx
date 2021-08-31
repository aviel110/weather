import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LocationType } from '../../assets/types';
import { use5DailyForecasts } from '../../hooks/useDailyForecasts';
import { Colors, Dimens } from '../../styles';
import ForecastFrame from '../forecastFrame';

type HomeLocationCardProps = {
  location: LocationType;
};

const DailyForecastsCard = (props: HomeLocationCardProps) => {
  const { dailyForecasts } = use5DailyForecasts({ locationKey: props.location.Key, details: true });

  return dailyForecasts.length > 0 ? (
    <View style={styles.container}>
      {dailyForecasts.map(df => (
        <ForecastFrame forecast={df} key={df.Date} />
      ))}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: Dimens.cardBorderRadius,
    padding: Dimens.cardPadding,
    margin: Dimens.cardPadding,
  },
  forecastContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
  },
});

export default DailyForecastsCard;
