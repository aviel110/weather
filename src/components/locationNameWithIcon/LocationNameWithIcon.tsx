import React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

type LocationNameWithTimeProps = {
  locationName: string;
  style?: StyleProp<ViewStyle>;
};

const LocationNameWithIcon = (props: LocationNameWithTimeProps) => {
  return (
    <View style={[styles.locationNameContainer, props.style]}>
      <FeatherIcon name="map-pin" size={16} />
      <Text style={styles.locationName}>{props.locationName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    fontSize: 24,
    fontWeight: '400',
  },
});

export default LocationNameWithIcon;
