import React from 'react';
import { Text, View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Colors, Dimens } from '../styles';
import Icon, { IconFamily } from './Icon';

type LocationNameWithTimeProps = {
  locationName: string;
  style?: StyleProp<ViewStyle>;
};

const LocationNameWithIcon = (props: LocationNameWithTimeProps) => {
  return (
    <View style={[styles.locationNameContainer, props.style]}>
      <Icon iconFamily={IconFamily.FEATHER} name="map-pin" size={Dimens.icon_tiny} color={Colors.black} />
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
