import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import {Dimens, Typography} from '../../../../styles';
// import {Strings, Images, Colors} from '@assets';

type FavoritesProps = {
  coinSymbol: string;
};

const Favorites = (props: FavoritesProps) => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
