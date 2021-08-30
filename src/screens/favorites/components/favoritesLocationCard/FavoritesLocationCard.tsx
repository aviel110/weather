import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';

import { Colors, Dimens } from '../../../../styles';
import LocationNameWithTime from '../../../../components/locationNameWithTime';
import CurrentStatusTemp from '../../../../components/currentStatusTemp';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useCurrentConditions } from '../../../../hooks/useCurrentConditions';
import { LocationTypeProps } from '../../../../assets/types';
import { setCurrentLocation } from '../../../../stores/home/actions';

type FavoritesLocationCardProps = LocationTypeProps;

const FavoritesLocationCard = (props: FavoritesLocationCardProps) => {
  const { currentConditions } = useCurrentConditions({ locationKey: props.location.Key });
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <LocationNameWithTime locationName={props.location.LocalizedName} countryName={props.location.Country.LocalizedName} />
        <TouchableWithoutFeedback onPress={() => dispatch(setCurrentLocation(props.location))}>
          <FeatherIcon name="x" size={24} />
        </TouchableWithoutFeedback>
        <FeatherIcon name="arrow-right" size={24} />
      </View>
      {currentConditions && <CurrentStatusTemp weatherIcon={currentConditions.WeatherIcon} temperature={currentConditions.Temperature.Metric} />}
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
    justifyContent: 'space-between',
  },
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default FavoritesLocationCard;
