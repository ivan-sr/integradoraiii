import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";

const LoginGoogle = ({navigation}) => {
  const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `6038785836-s6ahsdkkvvtsms08v0fp67ggjvjgjfu0.apps.googleusercontent.com`,
        androidClientId: `6038785836-tm5bl93sfdk8fptgn4sk912vmjdmva1s.apps.googleusercontent.com`,
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile Google", { user });
      }
    } catch (error) {
      console.log("LoginGoogle.js 19 | error with login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Google" onPress={signInAsync} />
    </View>
  );
};

export default LoginGoogle;

const styles = StyleSheet.create({});