import React from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

import { Strings } from '../assets';
import { Colors } from '../styles';
import CurrentStatusTemp from './CurrentStatusTemp';

type CurrentStatusFrameProps = {
  currentStatusIcon: ImageSourcePropType;
  currentTemperatureMetricValue: number;
  weatherText: string;
  realFeelTemperatureMetricValue: number;
  style?: StyleProp<ViewStyle>;
};

const CurrentStatusFrame = (props: CurrentStatusFrameProps) => {
  return (
    <View style={[styles.currentStatusContainer, props.style]}>
      <CurrentStatusTemp weatherIcon={props.currentStatusIcon} tempValue={props.currentTemperatureMetricValue} />
      <View style={styles.currStatusExtraInfoContainer}>
        <Text style={styles.currStatusExtraInfo}>{props.weatherText}</Text>
        <Text style={styles.currStatusExtraInfo}>{Strings.realFeelTemperature(props.realFeelTemperatureMetricValue)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentStatusContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  currStatusExtraInfoContainer: {
    alignItems: 'flex-end',
  },
  currStatusExtraInfo: {
    color: Colors.gray,
  },
});

export default CurrentStatusFrame;
