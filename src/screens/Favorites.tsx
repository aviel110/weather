import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useConnect } from 'remx';

import * as store from '../stores/favorites/favoritesStore';
import * as actions from '../stores/favorites/favoritesActions';

type FavoritesProps = {
  coinSymbol: string;
};

const Favorites = (props: FavoritesProps) => {
  const { favoritesList } = useFavoritesConnect();
  return (
    <View style={styles.container}>
      {favoritesList.map(f => (
        <Text key={f}>{f}</Text>
      ))}
      <Button title="button" onPress={() => actions.setFavorites()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const useFavoritesConnect = () =>
  useConnect(() => ({
    favoritesList: store.getters.getFavorites(),
  }));

export default Favorites;
