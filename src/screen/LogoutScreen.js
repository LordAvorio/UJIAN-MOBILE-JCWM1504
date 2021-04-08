
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux'

import { CommonActions } from '@react-navigation/native'

import {logout} from '../action'

import {Button} from 'react-native-paper'


const LogoutScreen = ({navigation}) => {

  const dispatch = useDispatch()

  const { username } = useSelector((state) => {
    return {
        username: state.userReducer.username
    }
})

React.useEffect(() => {
  if (!username) {
      //redirect to login screen while reset react navigation state
      const resetAction = CommonActions.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }]
      })
      navigation.dispatch(resetAction)
  }
})

  return(
    <View style={styles.container}>
      <Button mode="contained" style={{marginVertical: 40}} onPress={() => dispatch(logout())}>
        Logout
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});

export default LogoutScreen;
