import { Dimensions, Platform } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

const platform = Platform.OS;
const isIos = platform === 'ios';
const isAndroid = platform === 'android';

export const deviceHeight = isAndroid ? ExtraDimensions.getRealWindowHeight() : Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
