import React from 'react';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../screens/home';
import Favorites from '../screens/favorites';

export enum ScreenName {
  HOME = 'Home',
  FAVORITES = 'Favorites',
}

const RootNavigator = createBottomTabNavigator();
const RootNavigatorScreenOptions = (screenProps: { route: RouteProp<ParamListBase, string>; navigation: any }): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (screenProps.route.name === ScreenName.HOME) {
      iconName = 'map-pin';
    } else if (screenProps.route.name === ScreenName.FAVORITES) {
      iconName = 'star';
    }

    // You can return any component that you like here!
    return <FeatherIcon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
});

const AppContainer = (
  <NavigationContainer>
    <RootNavigator.Navigator screenOptions={RootNavigatorScreenOptions}>
      <RootNavigator.Screen name={ScreenName.HOME} component={Home} />
      <RootNavigator.Screen name={ScreenName.FAVORITES} component={Favorites} />
    </RootNavigator.Navigator>
  </NavigationContainer>
);

export default AppContainer;
