import { StyleSheet, View } from 'react-native';

import AddButton from './AddButton';

export default function Buttons({setVisibleAddTaskModal}) {

    return (
        <View style={styles.container}>
            <AddButton onPress={() => setVisibleAddTaskModal(true)} />
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
