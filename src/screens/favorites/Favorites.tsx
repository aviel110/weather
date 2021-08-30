import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getFavoritesSelector } from '../../stores/favorites/selectors';
import { Dimens } from '../../styles';
import FavoritesLocationCard from './components/favoritesLocationCard';

const Favorites = () => {
  const favoritesList = useSelector(getFavoritesSelector);
  return (
    <View>
      {favoritesList.map(item => (
        <FavoritesLocationCard location={item} key={item.Key} />
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
