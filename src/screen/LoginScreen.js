
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import {TextInput, Button} from 'react-native-paper'

import {useDispatch, useSelector} from 'react-redux'

import {login} from '../action'

const LoginScreen = ({navigation}) => {

  const dispatch = useDispatch()

  const {dataUsername} = useSelector((state) => {
    return {
      dataUsername: state.userReducer.username
    }
  })

  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  
  const handleLogin = () => {
    console.log('TEST')
    const dataLogin = {username,password}

    dispatch(login(dataLogin))
    setUsername("")
    setPassword("")
  }

  React.useEffect(() => {
    if(dataUsername) return navigation.navigate('Home')
}, [dataUsername])

  return(
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      
      <TextInput
          label="Username"
          mode="outlined"
          value={username}
          onChangeText={setUsername}
          style={{paddingVertical: 15}}
          left={
            <TextInput.Icon name="account"/>
          }
      />

      <TextInput
          label="Password"
          secureTextEntry={true}
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          left={
            <TextInput.Icon name="account-lock"/>
          }
      />

      <Button mode="contained" style={{marginVertical: 15}} onPress={handleLogin}>
        Login
      </Button>
    
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,

  }
});

export default LoginScreen;
