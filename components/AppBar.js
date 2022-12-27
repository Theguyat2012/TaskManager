import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>Task Manager</Text>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'teal',
        height: '7%',
        justifyContent: 'flex-end',
        padding: 5,
    },
    containerText: {
        color: 'white',
        fontSize: 16,
    },
});
