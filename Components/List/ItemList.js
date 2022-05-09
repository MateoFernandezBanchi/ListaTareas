import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/Colors'

const ItemList = ({notes, onPress}) => {
  return (
    <View style = {styles.itemContainer}>
      <TouchableOpacity onPress={()=>onPress(notes)}>
        <Text style = {styles.text}>{notes.info}</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    text:{
        color: colors.white,
        fontSize: 18,
    }
})