import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import {Card, Button, Icon, Header} from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'
import Img3 from '../assets/game.jpg';

const GameGoogle = () => {

  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home Google')}>

      <Header
      containerStyle={{
        backgroundColor: '#222831',
        justifyContent: 'space-around',
      }}
      placement="left"
      centerComponent={{ text: 'DevanceSoft', style: { color: '#fff', fontSize: 20 } }}
      rightComponent={{ icon: 'home', color: '#fff'  }}
      />

        </TouchableOpacity>
        <Image
          source={Img3}
          style={{ width: '100%', height: '80%'}}
        />
      <Text style={styles.appTitles}>Crea tu propio Juego</Text>
      <Card>  
          <Text style={{marginBottom: 10, color:'#483434'}}>
              Conoce más sobre nuestras capacitaciones en el area de desarrollo de videojuegos con Unity3D    
            </Text>    
          <Card.Divider/>  
            <Button icon={<Icon name='subject' color='#ffffff' />} buttonStyle={{borderRadius: 20, marginLeft: 10, marginRight: 10, marginBottom: 0, backgroundColor: '#222831'}} title='Ver más' />  
        </Card>
        <Text>{'\n'}</Text>
    </ScrollView>
  )
}


export default GameGoogle

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingLeft: '19%',
    paddingBottom: '6%',
  },
})
