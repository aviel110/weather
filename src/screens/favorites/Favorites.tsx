import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getFavoritesSelector } from '../../stores/locations/selectors';
import FavoriteCard from './components/favoriteCard/FavoriteCard';

const Favorites = () => {
  const favoritesList = useSelector(getFavoritesSelector);
  console.log('🚀 ~ file: Favorites.tsx ~ line 10 ~ Favorites ~ favoritesList', favoritesList);
  return (
    <View>
      {favoritesList.map(item => (
        <FavoriteCard location={item} key={item.Key} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default Favorites;
