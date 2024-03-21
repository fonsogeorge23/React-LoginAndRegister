import { useWindowDimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Views/LoginScreen';
import RegisterScreen from './src/Views/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
  const window = useWindowDimensions();
  const height = window.height;
  const width = window.width;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App