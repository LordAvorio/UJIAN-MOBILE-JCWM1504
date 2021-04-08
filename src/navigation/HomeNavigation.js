import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FeedNavigation from './FeedNavigation';

import LogoutScreen from '../screen/LogoutScreen';

const HomeNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={FeedNavigation} />
      <Drawer.Screen name="Account" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default HomeNavigation;
