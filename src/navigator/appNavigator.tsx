import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

export enum ScreenName {
  HOME = 'Home',
  FAVORITES = 'Favorites',
}

const RootNavigator = createBottomTabNavigator();

const AppContainer = (
  <NavigationContainer>
    <RootNavigator.Navigator>
      <RootNavigator.Screen name={ScreenName.HOME} component={Home} />
      <RootNavigator.Screen name={ScreenName.FAVORITES} component={Favorites} />
    </RootNavigator.Navigator>
  </NavigationContainer>
);

export default AppContainer;
