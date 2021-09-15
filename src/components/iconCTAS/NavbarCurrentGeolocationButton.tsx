import React from 'react';
import { StyleSheet } from 'react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import { Dimens } from '../../styles';

const NavbarCurrentGeolocationButton = () => {
  const onPress = () => {};

  return <MaterialIconsIcon name="my-location" size={Dimens.icon_x_small} onPress={onPress} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {},
});

export default NavbarCurrentGeolocationButton;
