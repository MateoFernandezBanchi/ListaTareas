import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemList from './ItemList'
import { colors } from '../../Styles/Colors'

/**
 * Componente lista para renderizar todos
 * @param handleModal Manejar la visibilidad del modal
 * @param todoList Listado de todos
 */

const List = ({handleModal, notesList, handleMark}) => {

    const renderNotes = ({ item }) =><ItemList onPress={handleModal} notes={item}></ItemList>
    
    return (
        <View style={styles.itemList}>
            {notesList.length !== 0 && (
                <FlatList
                    data={notesList}
                    keyExtractor={notes => notes.id}
                    renderItem={renderNotes}
                />
            )}

            {notesList.length === 0 && <Text style={styles.textSecondary}>No hay notas cargadas :(</Text>}

        </View>
    )
}

export default List

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.primary,
        width: '95%',
        padding: 20,
        flex: 0.8,
        borderRadius:15,
    },
    textSecondary: {
        color: colors.white,
    }
})