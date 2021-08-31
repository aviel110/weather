import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { Strings } from '../../assets';
import { TempRepresentationType } from '../../assets/types';
import { iconSizeBigStyle } from '../../styles';
import { getWeatherIcon } from '../../utils/wether';

type CurrentStatusTempProps = {
  weatherIcon: number;
  temperature: TempRepresentationType;
};

const CurrentStatusTemp = (props: CurrentStatusTempProps) => {
  const source = getWeatherIcon(props.weatherIcon);
  return (
    <View style={styles.currStatusTempContainer}>
      {source && <Image source={source} style={styles.currStatusIcon} />}
      <Text style={styles.currStatusTemp}>{Strings.formatTemp(props.temperature.Value)}</Text>
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
