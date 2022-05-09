import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors';

const CustomModal = ({
    modalVisible,
    setModalVisible,
    handleEdit, 
    notesSelected, 
    handleDelete,
}) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.close}>
                            X
                        </Text>
                        <Text style={styles.titulo}>Editar nota</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleEdit}
                        value={notesSelected.info}
                    />
                    <TouchableOpacity onPress={handleDelete}>
                        <Text style={styles.eliminar}>Eliminar nota</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        height: 250,
        width: 280,
        backgroundColor: colors.darkBlue,
        borderRadius:20,
        marginTop:200
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.secondary,
        color:'#fff',
        margin:40,
        marginVertical:20
    },
    close: {
        backgroundColor: colors.secondary,
        color: 'white',
        borderRadius:20,
        width: 30,
        margin:230,
        marginVertical:10,
        textAlign: 'center'
    },
    eliminar: {
        backgroundColor: colors.secondary,
        color: colors.white,
        padding:5,
        width: '40%',
        margin:90,
        marginVertical:0,
        borderRadius:10
    },
    titulo: {
        color: colors.white,
        textAlign: 'center',
        margin:0,
        fontSize:20
    }
})