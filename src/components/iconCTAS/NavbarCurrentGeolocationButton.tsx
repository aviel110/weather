import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Dimens } from '../../styles';
import Icon, { IconFamily } from '../Icon';

const NavbarCurrentGeolocationButton = () => {
  const onPress = () => {};

  return <Icon iconFamily={IconFamily.MATERIAL_COMMUNITY} name="my-location" size={Dimens.icon_x_small} onPress={onPress} color={Colors.black} style={styles.icon} />;
};

const styles = StyleSheet.create({
  icon: {},
});

export default NavbarCurrentGeolocationButton;
