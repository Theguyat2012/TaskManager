import { StyleSheet, View } from 'react-native';

import AddTaskButton from './AddTaskButton';

export default function Buttons({setVisibleAddTaskModal, setEditMode, setDefaultTitle, setDefaultDescription}) {
    return (
        <View style={styles.container}>
            <AddTaskButton onPress={() => {
                setVisibleAddTaskModal(true);
                setEditMode(false);
                setDefaultTitle("");
                setDefaultDescription("");
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'teal',
        height: '15%',
        justifyContent: 'space-evenly',
    },
});
