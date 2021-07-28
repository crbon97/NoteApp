import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import DashboardScreen from '../Screens/Dashboard.Screen';
import FeedScreen from '../Screens/Feed.Screen';
import ProfileScreen from '../Screens/Profile.Screen';
import {HOME_TAB_ROUTES} from '../Utils/Constants';

const HomeTab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name={HOME_TAB_ROUTES.DASHBOARD}
        component={DashboardScreen}
      />
      <HomeTab.Screen name={HOME_TAB_ROUTES.FEED} component={FeedScreen} />
      <HomeTab.Screen
        name={HOME_TAB_ROUTES.PROFILE}
        component={ProfileScreen}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabs;

export type HomeTabPropType<T extends keyof HomeTabParamList> = {
  navigation: StackNavigationProp<HomeTabParamList, T>;
  route: RouteProp<HomeTabParamList, T>;
};

type HomeTabParamList = {
  Feed: undefined;
  Dashboard: undefined;
  Profile: undefined;
};
