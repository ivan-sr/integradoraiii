import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development'
import { auth,db } from '../firebase'
import CarouselCards from './CarouselCards'
import {Card, Button, Icon} from 'react-native-elements';
import Img1 from '../assets/dsoftware.jpg';
import Img2 from '../assets/card2.jpg';
import Img3 from '../assets/card3.jpg';


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

  const [userInfo, setUserInfo] = useState([]);

  
  db.collection("users")
  .doc(auth.currentUser.uid)
  .get()
  .then((snapshot) => {
    if (snapshot.exists)
    {setUserInfo(snapshot.data())
    }
  })


  return (
    <ScrollView style={styles.container}>
      <CarouselCards/>
      <Text style={styles.appTitles}>Bienvenid@ a</Text>
      <Text style={styles.appTitles1}>DevanceSoft</Text>
      <Text style={styles.appText}>Hola! {userInfo.Nombre} </Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        <Card>  
          <Card.Title>
            Desarrollo de Videojuegos
          </Card.Title>
          <Card.Divider/>  
          <Card.Image source={Img2}/>
          <Card.Divider/>  
          <Text style={{marginBottom: 10, color:'#483434'}}>
              Manejamos herramientas de desarrollo 3D como Unity & Blender!    
          </Text>    
          <Card.Divider/>  
            <Button icon={<Icon name='code' color='#ffffff' />} buttonStyle={{borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 0, backgroundColor: '#222831'}} title='Ver más' onPress={() => navigation.navigate("Game")} />  
        </Card>
        <Card>  
          <Card.Title>
            Desarrollo Web & Móvil
          </Card.Title>
          <Card.Divider/>  
          <Card.Image source={Img1}/>    
          <Card.Divider/>  
          <Text style={{marginBottom: 10, color:'#483434'}}>
              Desarrollo de hermosas interfaces funcionales con ayuda de tecnologías como HTML5, CSS3, JavaScript, Bootstrap, React, Firebase, etc.    
            </Text>    
          <Card.Divider/>  
            <Button icon={<Icon name='code' color='#ffffff' />} buttonStyle={{borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 0, backgroundColor: '#222831'}} title='Ver más' />  
        </Card>
        <Card>  
          <Card.Title>
            Curso de Metodologías
          </Card.Title>
          <Card.Divider/>  
          <Card.Image source={Img3}/>    
          <Card.Divider/>  
          <Text style={{marginBottom: 10, color:'#483434'}}>
              Capacitación en metodología de desarrollo ágil SCRUM a través de nuestro curso!    
            </Text>    
          <Card.Divider/>  
            <Button icon={<Icon name='code' color='#ffffff' />} buttonStyle={{borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 0, backgroundColor: '#222831'}} title='Ver más' />  
        </Card>
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
    color: '#105652',
    fontWeight: '700',
    fontSize: 20,
    paddingTop: 50,
    textAlign: "center",
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
  },
})
