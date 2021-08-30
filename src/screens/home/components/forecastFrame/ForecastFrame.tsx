import React from 'react';
import { Text, View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Colors, iconSizeSmallStyle } from '../../../../styles';
import { getWeatherIcon } from '../../../../utils/wether';

type ForecastFrameProps = {
  title: string;
  temp: string;
  humidity: string;
  iconSource: ImageSourcePropType;
};

const ForecastFrame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>10:00</Text>
      <Image source={getWeatherIcon(8)} style={styles.icon} />
      <Text style={styles.temp}>29°</Text>
      <View style={styles.humidityContainer}>
        <SimpleLineIconsIcon name="drop" size={8} color={Colors.sea} />
        <Text style={styles.humidityText}>1%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    color: Colors.gray,
  },
  icon: {
    ...iconSizeSmallStyle,
  },
  humidityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  humidityText: {
    color: Colors.gray,
  },
  temp: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ForecastFrame;
