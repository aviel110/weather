import React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Colors } from '../../styles';

type LocationNameWithTimeProps = {
  locationName: string;
  countryName: string;
  style?: StyleProp<ViewStyle>;
};

const LocationNameWithTime = (props: LocationNameWithTimeProps) => {
  return (
    <View style={[styles.locationNameAndDateTopContainer, props.style]}>
      <View>
        <View style={styles.locationNameContainer}>
          <FeatherIcon name="map-pin" size={16} />
          <Text style={styles.locationName}>{props.locationName}</Text>
        </View>
        <Text style={styles.time}>{props.countryName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationNameAndDateTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationName: {
    fontSize: 24,
    fontWeight: '400',
  },
  time: {
    color: Colors.gray,
  },
});

export default LocationNameWithTime;
