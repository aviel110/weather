import React from 'react';
import { View, StyleSheet } from 'react-native';

import { DailyForecastDetailedType } from '../assets/types';
import { Colors, Dimens } from '../styles';
import ForecastFrame from './ForecastFrame';

type HomeLocationCardProps = {
  dailyForecasts: DailyForecastDetailedType[];
};

const DailyForecastsCard = (props: HomeLocationCardProps) => {
  return (
    <View style={styles.container}>
      {props.dailyForecasts.map(df => (
        <ForecastFrame forecast={df} key={df.Date} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: Dimens.cardBorderRadius,
    padding: Dimens.cardPadding,
    margin: Dimens.cardPadding,
  },
});

export default DailyForecastsCard;
