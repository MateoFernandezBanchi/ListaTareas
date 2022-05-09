import { View, StyleSheet } from 'react-native'
import { useState } from 'react';
import FormAdd from '../Components/FormAdd';
import List from '../Components/List';
import CustomModal from '../Components/Modal';
import { colors } from '../Styles/Colors';
const Layout = () => {

    const [notesList, setNotesList] = useState([]);
    const [notesSelected, setNotesSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const handleAdd = (input) => {
        {
            setNotesList([...notesList, { id: Date.now(), info: input }]);
        }
    }

    const handleModal = (notesSelected) => {
        setModalVisible(true);
        setNotesSelected(notesSelected);
    }

    const handleDelete = () => {
        const notesFiltered = notesList.filter(item => item !== notesSelected);
        setNotesList(notesFiltered);
        setModalVisible(false);
    }

    const handleEdit = (text) => {
        const notesToEdit = notesList.find(item => item.id === notesSelected.id);
        console.log(notesSelected.id)
        notesToEdit.info = text;
        setNotesList([...notesList]);
    }

    return (
        <View style={styles.container}>
            <FormAdd handleAdd={handleAdd}/>
            <List handleModal={handleModal} notesList={notesList}/>
            <CustomModal
                modalVisible={modalVisible}
                setModalVisible = {setModalVisible}
                handleEdit = {handleEdit}
                handleDelete = {handleDelete}
                notesSelected = {notesSelected}
            />
        </View>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.black,
        padding: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',

    },
})