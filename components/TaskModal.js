import { useState, useEffect } from 'react';
import { Pressable, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import TaskObject from '../objects/TaskObject';

export default function TaskModal({
    visibleTaskModal,
    setVisibleTaskModal,
    add,
    edit,
    editMode,
    editIndex,
    defaultTitle,
    defaultDescription
}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setTitle(defaultTitle);
        setDescription(defaultDescription);
    }, [defaultTitle, defaultDescription]);

    const onAddTask = () => {
        if (title) {
            const task = new TaskObject(null, title, description);
            add(task);
            reset();
            setVisibleTaskModal(false);
        }
    }

    const onEditTask = () => {
        if (title) {
            const task = new TaskObject(null, title, description);
            edit(task, editIndex);
            reset();
            setVisibleTaskModal(false);
        }
    }

    const reset = () => {
        setTitle("");
        setDescription("");
    }

    return (
        <Modal animationType='slide' transparent={true} visible={visibleTaskModal}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{editMode !== true ? "Add Task" : "Edit Task"}</Text>
                        <Pressable onPress={() => setVisibleTaskModal(false)}>
                            <AntDesign name="closecircle" size="40%" color="red" />
                        </Pressable>
                    </View>
                    <View style={styles.inputContainer}>
                        <InputWrapper value={title} label="Title" setter={setTitle} />
                        <InputWrapper value={description} label="Description" setter={setDescription} />
                    </View>
                    {editMode !== true ?
                        <Pressable style={styles.addButton} onPress={onAddTask}>
                            <Text style={styles.addButtonText}>Add</Text>
                        </Pressable>
                        :
                        <Pressable style={styles.addButton} onPress={onEditTask}>
                            <Text style={styles.addButtonText}>Edit</Text>
                        </Pressable>
                    }
                </View>
            </View>
        </Modal>
    );
}

const InputWrapper = ({value, label, setter}) => {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.inputText}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={label}
                onChangeText={setter}
                returnKeyType='done'
                value={value}
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
