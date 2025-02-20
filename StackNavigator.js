import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignUp2Screen from './screens/SignUp2Screen';
import SignUp3Screen from './screens/SignUp3Screen';
import FindIdScreen from './screens/FindIdScreen';
import FindPasswordScreen from './screens/FindPasswordScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignUp2" component={SignUp2Screen} />
      <Stack.Screen name="SignUp3" component={SignUp3Screen} />
      <Stack.Screen name="FindId" component={FindIdScreen} />
      <Stack.Screen name="FindPassword" component={FindPasswordScreen} />
    </Stack.Navigator>
  );
}
