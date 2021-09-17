import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { ScreenName } from '../../navigator/types';
import { useNavigation } from '@react-navigation/core';
import { Colors, Dimens } from '../../styles';
import Icon, { IconFamily } from '../Icon';

type NavbarSearchButton = {
  style?: StyleProp<ViewStyle>;
  size?: number;
};

const NavbarSearchButton = (props: NavbarSearchButton) => {
  const navigation = useNavigation();

  const onSearch = () => {
    //@ts-ignore
    navigation.navigate(ScreenName.SEARCH);
  };

  return <Icon iconFamily={IconFamily.FONT_AWESOME} name="search" size={props.size ?? Dimens.icon_x_small} onPress={onSearch} color={Colors.black} style={props.style} />;
};

export default NavbarSearchButton;
