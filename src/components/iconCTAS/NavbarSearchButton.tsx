import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { ScreenName } from '../../navigator/types';
import { useNavigation } from '@react-navigation/core';
import { Dimens } from '../../styles';

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

  return <FontAwesomeIcon name="search" size={props.size ?? Dimens.icon_x_small} onPress={onSearch} style={props.style} />;
};

export default NavbarSearchButton;
