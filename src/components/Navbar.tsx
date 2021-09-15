import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Colors, Dimens } from '../styles';

import { COLLAPSED_HEIGHT } from './collapsingHeader/constants';
import NavbarSearchButton from './iconCTAS/NavbarSearchButton';

type NavbarProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
};

const Navbar = (props: NavbarProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.containerStart}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.containerEnd}>
        <NavbarSearchButton style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: COLLAPSED_HEIGHT,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: Dimens.space16,
  },
  containerStart: {
    paddingStart: Dimens.space16,
  },

  containerEnd: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 30,
    color: Colors.gray,
  },
  icon: {
    padding: Dimens.icon_padding,
  },
});

export default Navbar;
