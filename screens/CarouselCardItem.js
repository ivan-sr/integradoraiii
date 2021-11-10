import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.header}>{item.title}</Text>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    borderRadius: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 300,
  },
  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
  }
})

export default CarouselCardItem