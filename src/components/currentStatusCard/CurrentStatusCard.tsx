import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LocationType } from '../../assets/types';
import { useCurrentConditions } from '../../hooks/useCurrentConditions';
import { Colors, Dimens } from '../../styles';
import CurrentStatusFrame from '../currentStatusFrame';
import LocationNameIconCountryName from '../locationNameIconCountryName';

type HomeCurrentLocationStatusCardProps = {
  location: LocationType;
};

const CurrentStatusCard = (props: HomeCurrentLocationStatusCardProps) => {
  const { currentConditionsDetailed } = useCurrentConditions({ locationKey: props.location.Key, details: true });

  return (
    <View style={styles.container}>
      <LocationNameIconCountryName locationName={props.location.LocalizedName} countryName={props.location.Country.LocalizedName} />
      <CurrentStatusFrame style={styles.currentStatus} currentConditions={currentConditionsDetailed} />
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
