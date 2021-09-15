import React, { ReactNode } from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { LocationType } from '../assets/types';

import { Colors } from '../styles';
import LocationNameWithIcon from './LocationNameWithIcon';

type LocationNameWithTimeProps = {
  location: LocationType;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

const LocationNameIconCountryName = (props: LocationNameWithTimeProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.locationNameContainer}>
        <LocationNameWithIcon locationName={props.location.LocalizedName} />
        <Text style={styles.country}>{props.location.Country.LocalizedName}</Text>
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationNameContainer: {
    flexDirection: 'column',
  },
  country: {
    color: Colors.gray,
  },
});

export default LocationNameIconCountryName;
