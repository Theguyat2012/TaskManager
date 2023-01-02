import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Swipeable } from 'react-native-gesture-handler';

export default function Task({
    index,
    title,
    description,
    openEdit,
    setEditIndex,
    remove
}) {
    let row = [];

    const leftActions = () => {
        return (
            <TouchableOpacity
                style={[styles.action, { backgroundColor: 'green' }]}
                onPress={() => {
                    openEdit(index);
                    setEditIndex(index);
                    if (row[index]) {
                        row[index].close();
                    }
                }}
            >
                <View>
                    <Text style={{ color: 'white' }}>Edit</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const rightActions = () => {
        return (
            <TouchableOpacity
                style={[styles.action, { backgroundColor: 'red' }]}
                onPress={() => {
                    remove(index);
                    if (row[index]) {
                        row[index].close();
                    }
                }}
            >
                <View>
                    <Text style={{ color: 'white' }}>Remove</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Swipeable
                ref={ref => row[index] = ref}
                renderLeftActions={leftActions}
                renderRightActions={rightActions}
            >
                <View style={styles.wrapper}>
                    <Text style={[styles.title, styles.titleMargin]}>{title}</Text>
                    <Text>{description}</Text>
                </View>
            </Swipeable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        padding: 5,
        width: '90%',
    },
    wrapper: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
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
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        width: '100%',
    },
});
