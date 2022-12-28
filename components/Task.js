import { StyleSheet, Text, View } from 'react-native';

export default function Task({title, description}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    titleMargin: {
        marginBottom: '2%',
    },
    description: {

    },
});
