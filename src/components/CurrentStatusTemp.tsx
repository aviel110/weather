import React from 'react';
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { Strings } from '../assets';
import { iconSizeBigStyle } from '../styles';

type CurrentStatusTempProps = {
  weatherIcon: ImageSourcePropType;
  tempValue: number;
};

const CurrentStatusTemp = (props: CurrentStatusTempProps) => {
  return (
    <View style={styles.currStatusTempContainer}>
      {props.weatherIcon && <Image source={props.weatherIcon} style={styles.currStatusIcon} />}
      <Text style={styles.currStatusTemp}>{Strings.formatTemp(props.tempValue)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  currStatusTempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currStatusIcon: {
    ...iconSizeBigStyle,
  },
  currStatusTemp: {
    fontSize: 48,
    fontWeight: '300',
  },
});

export default CurrentStatusTemp;
