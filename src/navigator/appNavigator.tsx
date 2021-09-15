import React from 'react';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../screens/home';
import Favorites from '../screens/favorites';
import Navbar from '../components/Navbar';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Search from '../screens/search/Search';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { ScreenName } from './types';
import { Colors } from '../styles';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const StackNavigator = createNativeStackNavigator();
const TabNavigator = createBottomTabNavigator();

const TabNavigatorScreenOptions = (screenProps: { route: RouteProp<ParamListBase, string>; navigation: any }): BottomTabNavigationOptions => {
  const tabBarIcon = ({ focused, color, size }: TabBarIconProps): React.ReactNode => {
    let iconName = '';

    switch (screenProps.route.name) {
      case ScreenName.HOME:
        iconName = 'map-pin';
        break;
      case ScreenName.FAVORITES:
        iconName = 'star';
        break;
      default:
        iconName = 'star';
        break;
    }

    return <FeatherIcon name={iconName} size={size} color={color} />;
  };

  return {
    tabBarIcon,
    tabBarActiveTintColor: Colors.sea,
    tabBarInactiveTintColor: Colors.gray,
    header: () => null,
  };
};

const TabNavigatorJSXScreenOptions = (screenProps: { route: RouteProp<ParamListBase, string>; navigation: any }): NativeStackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const SearchScreenOptions = (screenProps: { route: RouteProp<ParamListBase, string>; navigation: any }): NativeStackNavigationOptions => {
  return {
    headerShown: false,
  };
};

const TabNavigatorJSX = () => (
  <TabNavigator.Navigator screenOptions={TabNavigatorScreenOptions}>
    <TabNavigator.Screen name={ScreenName.HOME} component={Home} />
    <TabNavigator.Screen name={ScreenName.FAVORITES} component={Favorites} />
  </TabNavigator.Navigator>
);

const StackNavigatorJSX = (
  <StackNavigator.Navigator>
    <StackNavigator.Screen name={ScreenName.TAB_NAVIGATOR} component={TabNavigatorJSX} options={TabNavigatorJSXScreenOptions} />
    <StackNavigator.Screen name={ScreenName.SEARCH} component={Search} options={SearchScreenOptions} />
  </StackNavigator.Navigator>
);

const AppContainer = <NavigationContainer>{StackNavigatorJSX}</NavigationContainer>;

export default AppContainer;
