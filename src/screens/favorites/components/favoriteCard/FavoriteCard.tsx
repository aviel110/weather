import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { LocationType } from '../../../../assets/types';
import CurrentStatusFrame from '../../../../components/currentStatusFrame';
import LocationNameIconCountryNameCTAS from '../../../../components/locationNameIconCountryNameCTAS';
import { useCurrentConditions } from '../../../../hooks/useCurrentConditions';
import { Dimens } from '../../../../styles';

type HomeCurrentLocationStatusCardProps = {
  location: LocationType;
};

const CurrentStatusCard = (props: HomeCurrentLocationStatusCardProps) => {
  const { currentConditionsDetailed } = useCurrentConditions({ locationKey: props.location.Key, details: true });

  return (
    <View style={styles.container}>
      <LocationNameIconCountryNameCTAS location={props.location} />
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
