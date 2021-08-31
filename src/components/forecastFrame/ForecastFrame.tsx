import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';

import { DailyForecastDetailedType, TempUnits } from '../../assets/types';
import { Colors, Dimens, iconSizeTinyStyle } from '../../styles';
import { dateToWeekDay } from '../../utils/dates';
import { formatMinMaxTemp, getWeatherIcon } from '../../utils/wether';

type ForecastFrameProps = {
  forecast: DailyForecastDetailedType;
};

const ForecastFrame = (props: ForecastFrameProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{dateToWeekDay(props.forecast.Date)}</Text>
      <View style={styles.humidityContainer}>
        <SimpleLineIconsIcon name="drop" size={8} color={Colors.sea} />
        <Text style={styles.humidityText}>{props.forecast.Day.RainProbability}%</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Image source={getWeatherIcon(props.forecast.Day.Icon)} style={styles.icon} />
        <Image source={getWeatherIcon(props.forecast.Night.Icon)} style={styles.icon} />
      </View>

      <Text style={styles.temp}>
        {formatMinMaxTemp(props.forecast.Temperature.Minimum.Value, props.forecast.Temperature.Maximum.Value, props.forecast.Temperature.Maximum.Unit, TempUnits.C)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Dimens.space8,
  },
  day: {
    // color: Colors.gray,
    fontWeight: '500',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    ...iconSizeTinyStyle,
    marginHorizontal: Dimens.space4,
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
