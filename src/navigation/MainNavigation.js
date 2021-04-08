import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigation from './HomeNavigation';

import LoginScreen from '../screen/LoginScreen';

import {keepLogin} from '../action';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const Stack = createStackNavigator();

  const {username} = useSelector(state => {
    return {
      username: state.userReducer.username,
    };
  });

  React.useEffect(() => {
    console.log('use effect trigered')
    dispatch(keepLogin())
},[])

  return (
    <Stack.Navigator headerMode={false}>
      {
      username ? (
        <Stack.Screen name="Home" component={HomeNavigation} />
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default MainNavigation;
