import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';

import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontisoIcon from 'react-native-vector-icons/Fontisto';

export enum IconFamily {
  SIMPLE_LINE = 'simpleLine',
  FEATHER = 'feather',
  MATERIAL_COMMUNITY = 'MaterialCommunity',
  FONT_AWESOME = 'FontAwesome',
  FONTISO = 'Fontiso',
}

export type IconProps = {
  iconFamily: IconFamily;
  name: string;
  size?: number;
  color: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Icon = (props: IconProps) => {
  switch (props.iconFamily) {
    case IconFamily.SIMPLE_LINE:
      return <SimpleLineIconsIcon {...props} />;
    case IconFamily.FEATHER:
      return <FeatherIcon {...props} />;
    case IconFamily.MATERIAL_COMMUNITY:
      return <MaterialCommunityIconsIcon {...props} />;
    case IconFamily.FONT_AWESOME:
      return <FontAwesomeIcon {...props} />;
    case IconFamily.FONTISO:
      return <FontisoIcon {...props} />;
    default:
      return null;
  }
};

export default Icon;
