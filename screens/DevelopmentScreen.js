import React, {useState} from 'react';
import { Text } from 'react-native';
import { Image,LinearProgress, Card, Button, Overlay } from 'react-native-elements';
import Img1 from '../assets/dweb.jpg';
import Img2 from '../assets/logoHTML.png';
import Img3 from '../assets/logoJAVA.png';
import Img4 from '../assets/logoCSS.png';
import { useNavigation } from '@react-navigation/core'

const DevelopmentScreen = () => {
    const navigation = useNavigation()

    return (
        <>
        <Image source={Img1}  style={{ width: '100%', height: 200 }}/>
        <Card.Divider/>
        <LinearProgress color="#FFAB4C" />
        <Card.Divider/>
        <Image onPress={()=>{navigation.navigate("infoHTML");}} source={Img2}  style={{ width: 200, height: 200, marginLeft: 100}}/>
        <Card.Divider/>
        <LinearProgress color="#FFAB4C" />
        <Card.Divider/>
        <LinearProgress color="#FBF46D" />
        <Image onPress={()=>{navigation.navigate("infoJS");}} source={Img3}  style={{ width: 200, height: 200, marginLeft: 100}}/>
        <LinearProgress color="#FBF46D" />
        <Card.Divider/>
        <LinearProgress color="#00ADB5" />
        <Image onPress={()=>{navigation.navigate("infoCSS");}} source={Img4}  style={{ width: 200, height: 200, marginLeft: 100}}/>
        <LinearProgress color="#00ADB5" />
        </>
        
    )
    
}

export default DevelopmentScreen;
