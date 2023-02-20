import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 



const Card = ({icon, title, navigation}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={ () => navigation.navigate(title)}>
        <FontAwesome name={icon} size={50} color="#148F77" />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{
        width: 160,
        height: 120,
        // padding: 5,
        margin: 10,
        borderWidth: 0.3,
        borderColor: "gray",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 15
    }
})