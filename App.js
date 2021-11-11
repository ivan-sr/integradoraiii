import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import firebase from './firebase';
import DevelopmentScreen from './screens/DevelopmentScreen';
import infoHMTL from './screens/infoHTML';
import infoJS from './screens/infoJS';
import infoCSS from './screens/infoCSS';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen}/>
        <Stack.Screen options={{ headerShown: false }} name="Development" component={DevelopmentScreen}/>
        <Stack.Screen options={{ headerShown: false }} name="infoHTML" component={infoHMTL}/>
        <Stack.Screen options={{ headerShown: false }} name="infoJS" component={infoJS}/>
        <Stack.Screen options={{ headerShown: false }} name="infoCSS" component={infoCSS}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
