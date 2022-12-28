import { useState } from 'react';
import { FlatList, StyleSheet, ScrollView, Text, View } from 'react-native';

import AppBar from './components/AppBar';
import Buttons from './components/Buttons';
import Task from './components/Task';
import TaskModal from './components/TaskModal';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleTaskModal, setVisibleTaskModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [defaultTitle, setDefaultTitle] = useState("");
  const [defaultDescription, setDefaultDescription] = useState("");

  const renderTasks = () => {
    return (tasks.length > 0 ?
      <FlatList
        data={tasks}
        renderItem={(item) => {
          return (
            <Task
              key={item.index}
              index={item.index}
              title={item.item.title}
              description={item.item.description}
              openEdit={() => openEdit(item.index)}
              setEditIndex={setEditIndex}
              remove={() => remove(item.index)}
            />
          );
        }}
      />
      :
      header()
    );
  }

  const header = () => {
    return (
      <View style={styles.header}>
        <Text>You're all caught up!</Text>
        <Text>Add a new task by using the button below.</Text>
      </View>
    );
  }

  const openEdit = (index) => {
    setDefaultTitle(tasks[index].title);
    setDefaultDescription(tasks[index].description);
    setVisibleTaskModal(true);
    setEditMode(true);
  }

  const add = (task) => {
    setTasks(tasks.concat(task));
  }

  const edit = (task, index) => {
    const array = [];

    for (let i=0; i<tasks.length; i++) {
      if (i !== index) {
        array.push(tasks[i]);
      } else {
        array.push(task);
      }
    }

    setTasks(array);
  }

  const remove = (index) => {
    const array = [];

    for (let i=0; i<tasks.length; i++) {
      if (i !== index) {
        array.push(tasks[i]);
      }
    }

    setTasks(array);
  }

  return (
    <>
      <AppBar />
        {renderTasks()}
      <Buttons
        setVisibleTaskModal={setVisibleTaskModal}
        setEditMode={setEditMode}
        setDefaultTitle={setDefaultTitle}
        setDefaultDescription={setDefaultDescription}
      />

      <TaskModal
        visibleTaskModal={visibleTaskModal}
        setVisibleTaskModal={setVisibleTaskModal}
        add={add}
        edit={edit}
        editMode={editMode}
        editIndex={editIndex}
        defaultTitle={defaultTitle}
        defaultDescription={defaultDescription}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
