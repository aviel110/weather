import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

import { COLLAPSED_HEIGHT, EXPANDED_TITLE_TYPOGRAPHY } from './constants';
import { CollapsingHeaderProps } from './useCollapsingHeader';
import useCollapsingHeader from './useCollapsingHeader';
import { Colors, Dimens } from '../../styles';
import { Images } from '../../assets';
// import NavbarSearchButton from '../iconCTAS/NavbarSearchButton';
// import NavbarCurrentGeolocationButton from '../iconCTAS/NavbarCurrentGeolocationButton';
import Navbar from '../Navbar';

const CollapsingHeader: FunctionComponent<CollapsingHeaderProps> = ({ style, title, contentScrollOffsetY }: CollapsingHeaderProps): JSX.Element => {
  const { headerHeightStyle, expandingTitleFontAndPositionStyle, backgroundImageStyle } = useCollapsingHeader(contentScrollOffsetY);

  //Note: we can't put animated/dynamic styles into useMemo, as they are of type Animated.Value (mutable)
  return (
    <Animated.View style={[styles.container, style, headerHeightStyle]}>
      <Animated.Image style={[styles.image, backgroundImageStyle]} source={Images.homeBackground} />

      <Navbar />

      <Animated.View style={styles.collapsingContainer} pointerEvents={'none'}>
        <View style={styles.expandingTitleContainer}>
          <Animated.Text style={[styles.expandingTitle, expandingTitleFontAndPositionStyle]} numberOfLines={1} ellipsizeMode={'tail'}>
            {title}
          </Animated.Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: Colors.transparent,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
  collapsingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Dimens.space16,
  },
  expandingTitleContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: COLLAPSED_HEIGHT, //this helps keeping the text centered vertically while 'collapsed'
  },
  expandingTitle: {
    ...EXPANDED_TITLE_TYPOGRAPHY,
    // ...Typography.semiBold, //TODO bold when collapsed
    textAlign: 'center',
    color: Colors.white,
    //TODO think how to limit collapsed title width according to exising buttons (ref NavBar's actual title view?)
  },
  //resume if/once WalletFrame shows the WalletHeaderTrend
  // bottomSpace: {
  //   flexBasis: Dimens.space8, //design (used as half the margin bottom from the 'trend').
  //   // we don't use marginBottom on the title, to let it center vertically when collapsed
  //   flexShrink: 1, //shrink to 0 when collapsed to allow vertical centering of title
  //   minHeight: 0,
  // },
  image: {
    zIndex: -1,
    width: '100%',
    height: '100%',

    // resizeMode: 'contain',
    // maxHeight: EXPANDED_HEIGHT,
  },
});

export default CollapsingHeader;
