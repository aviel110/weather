import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import { ScreenName } from '../../navigator/types';
import { Colors, Dimens } from '../../styles';
import { setCurrentLocation } from '../../stores/locations/actions';
import { LocationType } from '../../assets/types';

type CTASetLocationAsCurrentProps = {
  location: LocationType;
  style?: StyleProp<ViewStyle>;
};

const CTASetLocationAsCurrent = (props: CTASetLocationAsCurrentProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onSetLocationAsCurrent = () => {
    dispatch(setCurrentLocation(props.location));
    //@ts-ignore
    navigation.navigate(ScreenName.HOME);
  };

  return <MaterialCommunityIconsIcon name="image-filter-center-focus-weak" color={Colors.gray} size={Dimens.icon_x_small} onPress={onSetLocationAsCurrent} style={props.style} />;
};

export default CTASetLocationAsCurrent;
