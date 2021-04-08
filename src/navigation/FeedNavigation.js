import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screen/HomeScreen';
import TabelScreen from '../screen/TabelScreen';

const FeedNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Data Country') {
            iconName = 'bar-chart';
          }

          return (
            <Icon name={iconName} type="ionicon" color={color} size={size} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f64662',
        inactiveTintColor: '#0278ae',
        style: {
          backgroundColor: '#133b5c',
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Data Country" component={TabelScreen} />
    </Tab.Navigator>
  );
};

export default FeedNavigation;
