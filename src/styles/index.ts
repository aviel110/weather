import * as Dimens from './dimens';
import * as Colors from './colors';
import { ImageStyle } from 'react-native';

export const iconSizeTinyStyle: ImageStyle = {
  width: Dimens.icon_tiny,
  height: Dimens.icon_tiny,
  resizeMode: 'cover',
};

export const iconSizeXSmallStyle: ImageStyle = {
  width: Dimens.icon_x_small,
  height: Dimens.icon_x_small,
  resizeMode: 'cover',
};

export const iconSizeSmallStyle: ImageStyle = {
  width: Dimens.icon_small,
  height: Dimens.icon_small,
  resizeMode: 'cover',
};

export const iconSizeMediumStyle: ImageStyle = {
  width: Dimens.icon_medium,
  height: Dimens.icon_medium,
  resizeMode: 'cover',
};

export const iconSizeBigStyle: ImageStyle = {
  width: Dimens.icon_big,
  height: Dimens.icon_big,
  resizeMode: 'cover',
};

export { Dimens, Colors };
