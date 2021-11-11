import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginGoogle from './screens/LoginGoogle';
import ProfileScreen from './screens/ProfileScreen';
import firebase from './firebase';
import { LogBox } from 'react-native';
// import { useNavigation } from '@react-navigation/core'

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createNativeStackNavigator();

const IOS_CLIENT_ID="6038785836-s6ahsdkkvvtsms08v0fp67ggjvjgjfu0.apps.googleusercontent.com";
const ANDROID_CCLIENT_ID="6038785836-tm5bl93sfdk8fptgn4sk912vmjdmva1s.apps.googleusercontent.com";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Game" component={GameScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen}/>
        <Stack.Screen options={{ headerShown: false }} name="Login Google" component={LoginGoogle} />
        <Stack.Screen options={{ headerShown: false }} name="Profile Google" component={ProfileScreen} />
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
