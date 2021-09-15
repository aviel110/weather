import { deviceHeight } from '../../utils/device';

export const COLLAPSED_HEIGHT = 100;
export const EXPANDED_HEIGHT = 0.25 * deviceHeight; //header height
export const HEADER_SCROLL_DISTANCE = EXPANDED_HEIGHT - COLLAPSED_HEIGHT;
export const EXPANDED_TITLE_TYPOGRAPHY = {
  // ...Typography.largeTitle_bold,
  fontSize: 54, //design
  lineHeight: undefined, //dynamic line-height. Helps center text when collapsed (font is smaller)
};
// export const COLLAPSED_TITLE_TYPOGRAPHY = Typography.headline_bold;
export const COLLAPSE_INTERPOLATE_INPUT_RANGE = [0, HEADER_SCROLL_DISTANCE];

//ios bounce down (for Pull To Refresh animation)
export const MAX_DOWN_BOUNCE_IOS = deviceHeight - EXPANDED_HEIGHT; //Actually there is no real (controllable) max for it, but this value is 'safe'.
//note: below this point, the list will just go 'below' the image... We could theoretically put it to infinity if we want to
export const IOS_BOUNCE_INTERPOLATE_INPUT_RANGE = [-MAX_DOWN_BOUNCE_IOS, 0];
export const TITLE_IOS_BOUNCE_DOWN_MAX_OFFSET_Y = EXPANDED_HEIGHT * 1.4; //we need it big enough so that the PTR-spinner will never reach it,
// but not too big, so that it will go 'with' the PTR and not much faster down.
// note: in order for the title to go 'all the way', we need CollapsingWalletHeader's 'collapsingContainer' to not set 'overflow: hidden'
