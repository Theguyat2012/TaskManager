import { StyleSheet, View } from 'react-native';

import AddButton from './AddButton';

export default function Buttons() {

    const addTask = () => {
        alert("add task");
    }

    return (
        <View style={styles.container}>
            <AddButton onPress={addTask} />
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
