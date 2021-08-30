import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

type FavoritesProps = {
  coinSymbol: string;
};

const Favorites = (props: FavoritesProps) => {
  return <Text>fav</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
