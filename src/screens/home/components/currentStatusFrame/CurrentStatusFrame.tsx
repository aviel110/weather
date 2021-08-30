import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { CurrentConditionsType } from '../../../../assets/types';
import CurrentStatusTemp from '../../../../components/currentStatusTemp';
import { Colors } from '../../../../styles';

type CurrentStatusFrameProps = {
  currentConditions: CurrentConditionsType | undefined;
  style?: StyleProp<ViewStyle>;
};

const CurrentStatusFrame = (props: CurrentStatusFrameProps) => {
  return props.currentConditions ? (
    <View style={[styles.currentStatusContainer, props.style]}>
      <CurrentStatusTemp weatherIcon={props.currentConditions.WeatherIcon} temperature={props.currentConditions.Temperature.Metric} />
      <View style={styles.currStatusExtraInfoContainer}>
        <Text style={styles.currStatusExtraInfo}>{props.currentConditions.WeatherText}</Text>
        <Text style={styles.currStatusExtraInfo}>31° / 26°</Text>
        <Text style={styles.currStatusExtraInfo}>Feels like 32°</Text>
      </View>
    </View>
  ) : null;
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
