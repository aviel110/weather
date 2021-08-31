import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import CurrentStatusCard from '../../components/currentStatusCard';
import DailyForecastsCard from '../../components/dailyForecastsCard';
import { getCurrentLocationSelector } from '../../stores/locations/selectors';

const Home = () => {
  const currentLocation = useSelector(getCurrentLocationSelector);

  return (
    <View style={styles.container}>
      {/* <SearchInput /> */}
      <CurrentStatusCard location={currentLocation} />
      <DailyForecastsCard location={currentLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
