import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  console.log("user from google", user);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Welcome {user.name} !</Text>
      <Button
        title="Home Screen"
        onPress={() => navigation.navigate('Home Google')}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});