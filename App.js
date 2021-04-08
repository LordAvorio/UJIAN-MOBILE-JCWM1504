import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStore, applyMiddleware} from 'redux';
import {Provider, useDispatch} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import allReducer from './src/reducer';

const globalStore = createStore(
  allReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
