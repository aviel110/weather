import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { LocationType } from '../../assets/types';
import LocationNameIconCountryName from '../locationNameIconCountryName';
import { onFavoriteDelete, setCurrentLocation } from '../../stores/locations/actions';
import { ScreenName } from '../../navigator/appNavigator';
import { useNavigation } from '@react-navigation/native';

type LocationNameWithTimeProps = {
  location: LocationType;
  style?: StyleProp<ViewStyle>;
};

const LocationNameIconCountryNameCTAS = (props: LocationNameWithTimeProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSetLocationAsCurrent = () => {
    dispatch(setCurrentLocation(props.location));
    navigation.navigate(ScreenName.HOME);
  };

  const onDeleteLocation = () => {
    dispatch(onFavoriteDelete(props.location.Key));
  };
  return (
    <View style={[styles.locationNameContainer, props.style]}>
      <LocationNameIconCountryName locationName={props.location.LocalizedName} countryName={props.location.Country.LocalizedName} />
      <View style={styles.ctasContainer}>
        <TouchableWithoutFeedback onPress={onDeleteLocation}>
          <FeatherIcon name="x" size={24} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onSetLocationAsCurrent}>
          <FeatherIcon name="arrow-right" size={24} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ctasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LocationNameIconCountryNameCTAS;
