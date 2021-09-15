import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CurrentConditionsDetaildType, LocationType } from '../assets/types';

import { Colors, Dimens } from '../styles';
import { getWeatherIcon } from '../utils/wether';
import CurrentStatusFrame from './CurrentStatusFrame';
import LocationNameIconCountryName from './LocationNameIconCountryName';

type CurrentStatusCardProps = {
  location: LocationType;
  currentConditions: CurrentConditionsDetaildType;
};

const CurrentStatusCard = (props: CurrentStatusCardProps) => {
  return (
    <View style={styles.container}>
      <LocationNameIconCountryName location={props.location} />
      {props.currentConditions && (
        <CurrentStatusFrame
          style={styles.currentStatus}
          weatherText={props.currentConditions.WeatherText}
          currentStatusIcon={getWeatherIcon(props.currentConditions.WeatherIcon)}
          currentTemperatureMetricValue={props.currentConditions.Temperature.Metric.Value}
          realFeelTemperatureMetricValue={props.currentConditions.RealFeelTemperature.Metric.Value}
        />
      )}
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
  currentStatus: {
    marginTop: Dimens.space16,
  },
});

export default CurrentStatusCard;
