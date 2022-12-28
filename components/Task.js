import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';

export default function Task({index, title, description, remove}) {
    let row = [];

    const leftActions = () => {
        return (
            <Pressable
                style={[styles.action, { backgroundColor: 'green' }]}
                onPress={() => {
                    if (row[index]) {
                        row[index].close();
                    }
                }}
            >
                <View>
                    <Text style={{ color: 'white' }}>Edit</Text>
                </View>
            </Pressable>
        );
    }

    const rightActions = () => {
        return (
            <Pressable
                style={[styles.action, { backgroundColor: 'red' }]}
                onPress={() => {
                    remove();
                    if (row[index]) {
                        row[index].close();
                    }
                }}
            >
                <View>
                    <Text style={{ color: 'white' }}>Remove</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <Swipeable
            ref={ref => row[index] = ref}
            renderLeftActions={leftActions}
            renderRightActions={rightActions}
        >
            <View style={styles.container}>
                <Text style={[styles.title, styles.titleMargin]}>{title}</Text>
                <Text>{description}</Text>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
        marginBottom: 10,
    },
    action: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginBottom: 1,
        justifyContent: 'center',
        padding: 10,
        width: '100%',
    },
});
