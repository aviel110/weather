import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { LocationType } from '../../assets/types';
import CurrentStatusFrame from '../../components/CurrentStatusFrame';
import CTARemoveFavorite from '../../components/iconCTAS/CTARemoveFavorite';
import CTASetLocationAsCurrent from '../../components/iconCTAS/CTASetLocationAsCurrent';
import LocationNameIconCountryName from '../../components/LocationNameIconCountryName';
import { useCurrentConditions } from '../../hooks/useCurrentConditions';
import { Dimens } from '../../styles';

type HomeCurrentLocationStatusCardProps = {
  location: LocationType;
};

const ctas = (location: LocationType) => (
  <View style={styles.ctasContainer}>
    <CTASetLocationAsCurrent location={location} style={styles.cta} />
    <CTARemoveFavorite location={location} style={styles.cta} />
  </View>
);

const CurrentStatusCard = (props: HomeCurrentLocationStatusCardProps) => {
  const { currentConditionsDetailed } = useCurrentConditions({ locationKey: props.location.Key, details: true });

  return (
    <View style={styles.container}>
      <LocationNameIconCountryName location={props.location}>{ctas(props.location)}</LocationNameIconCountryName>
      {currentConditionsDetailed && (
        <CurrentStatusFrame
          style={styles.currentStatus}
          currentStatusIcon={currentConditionsDetailed.WeatherIcon}
          currentTemperatureMetricValue={currentConditionsDetailed.Temperature.Metric.Value}
          weatherText={currentConditionsDetailed.WeatherText}
          realFeelTemperatureMetricValue={currentConditionsDetailed.RealFeelTemperature.Metric.Value}
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
  ctasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cta: {
    marginHorizontal: Dimens.space8,
  },
});

export default CurrentStatusCard;
