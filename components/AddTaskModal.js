import { useState } from 'react';
import { Pressable, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function AddTaskModal({visibleAddTaskModal, setVisibleAddTaskModal, tasks, setTasks}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onPress = () => {
        const newTask = [[title, description]];
        setTasks(tasks.concat(newTask));
        setTitle("");
        setDescription("");
        setVisibleAddTaskModal(false);
    }

    return (
        <Modal animationType='slide' transparent={true} visible={visibleAddTaskModal}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Add Task</Text>
                        <Pressable onPress={() => setVisibleAddTaskModal(false)}>
                            <AntDesign name="closecircle" size="40%" color="red" />
                        </Pressable>
                    </View>
                    <View style={styles.inputContainer}>
                        <InputWrapper defaultValue={title} label="Title" setter={setTitle} />
                        <InputWrapper defaultValue={description} label="Description" setter={setDescription} />
                    </View>
                    <Pressable style={styles.addButton} onPress={onPress}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const InputWrapper = ({defaultValue, label, setter}) => {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={label}
                onChangeText={setter}
                returnKeyType='done'
                defaultValue={defaultValue}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 30,
        borderWidth: 1,
        height: '40%',
        width: '75%',
    },
    header: {
        alignItems: 'center',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
    },
    headerText: {
        fontSize: 18,
    },
    inputContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
    },
    inputWrapper: {
        alignItems: 'center',
        marginBottom: '2%',
    },
    inputText: {
        
    },
    input: {
        borderColor: 'black',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: 40,
        padding: '2%',
        width: '95%',
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: 'teal',
        borderRadius: 30,
        borderWidth: 1,
        height: '15%',
        justifyContent: 'center',
        margin: '2%',
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },
});
