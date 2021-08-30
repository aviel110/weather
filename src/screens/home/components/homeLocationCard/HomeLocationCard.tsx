import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Dimens } from '../../../../styles';
import ForecastFrame from '../forecastFrame';
import CurrentStatusFrame from '../currentStatusFrame';
import LocationNameWithTime from '../../../../components/locationNameWithTime';
import { useHomeLocationCard } from './useHomeLocationCard';

const HomeLocationCard = () => {
  const { currentConditions, currentLocation } = useHomeLocationCard();

  return (
    <View style={styles.container}>
      <LocationNameWithTime locationName={currentLocation.LocalizedName} countryName={currentLocation.Country.LocalizedName} style={styles.locationNameWithTime} />
      <CurrentStatusFrame style={styles.currentStatus} currentConditions={currentConditions} />
      <View style={styles.forecastContainer}>
        <ForecastFrame />
        <ForecastFrame />
        <ForecastFrame />
        <ForecastFrame />
        <ForecastFrame />
      </View>
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
  locationNameWithTime: {
    marginBottom: Dimens.space16,
  },
  currentStatus: {
    marginBottom: Dimens.space16,
  },
  forecastContainer: {
    flexGrow: 1,
    flexDirection: 'row',
  },
});

export default HomeLocationCard;
