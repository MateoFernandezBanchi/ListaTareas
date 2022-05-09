import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import ButtonCustom from './Button'
import { colors } from '../Styles/Colors';

const FormAdd = ({handleAdd}) => {

    const [input, setInput] = React.useState("");

    const handleAddAux = () => {
        if (input !== ""){
            handleAdd(input)
            setInput("");
        }
    }

    return (
        <View style={styles.topContainer}>
            <TextInput
                style={styles.input}
                placeholder="Escribir nota..."
                onChangeText={setInput}
                value={input}
                placeholderTextColor="#9a8c98"
            />
            <ButtonCustom onPress={()=> handleAddAux()} />
        </View>
    )
}

export default FormAdd

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        flex: 0.2,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: 200,
        marginRight: 10,
        paddingHorizontal: 8,
        fontSize: 18,
        height: 35,
        backgroundColor: colors.primary,
        color: colors.white
    },
})