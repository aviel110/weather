import React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Colors } from '../../styles';
import LocationNameWithIcon from '../locationNameWithIcon';

type LocationNameWithTimeProps = {
  locationName: string;
  countryName: string;
  style?: StyleProp<ViewStyle>;
};

const LocationNameIconCountryName = (props: LocationNameWithTimeProps) => {
  return (
    <View style={[styles.locationNameContainer, props.style]}>
      <LocationNameWithIcon locationName={props.locationName} />
      <Text style={styles.country}>{props.countryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationNameContainer: {
    flexDirection: 'column',
  },
  country: {
    color: Colors.gray,
  },
});

export default LocationNameIconCountryName;
