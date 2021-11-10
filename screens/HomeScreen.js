import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development'
import { auth,db } from '../firebase'
import CarouselCards from './CarouselCards'


const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  return (
    <ScrollView style={styles.container}>
      <CarouselCards/>
      <Text style={styles.appTitles}>Bienvenid@ a</Text>
      <Text style={styles.appTitles1}>DevanceSoft</Text>
      <Text style={styles.appText}>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
    </ScrollView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   button: {
    backgroundColor: '#0782F9',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  appText: {
    color: '#222831',
    paddingTop: 20,
    paddingLeft: '20%',
  },
  appTitles: {
    backgroundColor: '#222831',
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    paddingTop: '6%',
    paddingLeft: '30%',
  },
  appTitles1: {
    backgroundColor: '#222831',
    fontSize: 32,
    fontWeight: "bold",
    color: 'white',
    paddingBottom: '6%',
    paddingLeft: '24%',
  }
})
