import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LocationType } from '../../assets/types';
import { COLLAPSED_HEIGHT } from '../../components/collapsingHeader/constants';
import Navbar from '../../components/Navbar';

import { getFavoritesSelector } from '../../stores/locations/selectors';
import { Colors } from '../../styles';
import FavoriteCard from './FavoriteCard';

const renderFavoritesItem = ({ item }: ListRenderItemInfo<LocationType>) => {
  return <FavoriteCard location={item} key={item.Key} />;
};

const Favorites = () => {
  const favoritesList = useSelector(getFavoritesSelector);
  return (
    <View style={styles.container}>
      <Navbar style={styles.navbar} title="Saved Locations" />
      <FlatList data={favoritesList} renderItem={renderFavoritesItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: COLLAPSED_HEIGHT,
  },
  navbar: {
    backgroundColor: Colors.lightGray,
  },
});

export default Favorites;
