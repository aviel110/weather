import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchInput from './components/SearchInput';
import HomeLocationCard from './components/homeLocationCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <HomeLocationCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
