import { StyleSheet, Text, View } from 'react-native';

export default function Task({title, description}) {
    return (
        <View style={styles.container}>
            {description !== null ?
            <>
                <Text style={[styles.title, styles.titleMargin]}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </>
            :
            <Text style={styles.title}>{title}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: '3%',
        borderBottomWidth: 1,
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
