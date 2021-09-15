import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors, Dimens } from '../../styles';
import { LocationType } from '../../assets/types';
import { useSetFavorite } from '../../hooks/useSetFavorite';

type CTARemoveFavoriteProps = {
  location: LocationType;
  style?: StyleProp<ViewStyle>;
};

const CTARemoveFavorite = (props: CTARemoveFavoriteProps) => {
  const { removeFavorite } = useSetFavorite();

  const onDeleteLocation = () => {
    removeFavorite(props.location.Key);
  };

  return <MaterialCommunityIconsIcon name="heart-remove-outline" color={Colors.gray} size={Dimens.icon_x_small} onPress={onDeleteLocation} style={props.style} />;
};

export default CTARemoveFavorite;
