import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import {Dimens, Typography} from '../../../../styles';
// import {Strings, Images, Colors} from '@assets';

type HomeProps = {
  coinSymbol: string;
};

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
