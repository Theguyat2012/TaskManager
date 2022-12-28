import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import AppBar from './components/AppBar';
import Buttons from './components/Buttons';
import Task from './components/Task';
import AddTaskModal from './components/AddTaskModal';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleAddTaskModal, setVisibleAddTaskModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [defaultTitle, setDefaultTitle] = useState("");
  const [defaultDescription, setDefaultDescription] = useState("");

  const renderTasks = () => {
    return ( tasks.length > 0 ?
      <ScrollView>
        {tasks.map((element, index) =>
          <Task
            key={index}
            index={index}
            title={element[0]}
            description={element[1]}
            openEdit={() => openEdit(index)}
            setEditIndex={setEditIndex}
            remove={() => remove(index)}
          />
        )}
      </ScrollView>
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
    setDefaultTitle(tasks[index][0]);
    setDefaultDescription(tasks[index][1]);
    setVisibleAddTaskModal(true);
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
        setVisibleAddTaskModal={setVisibleAddTaskModal}
        setEditMode={setEditMode}
        setDefaultTitle={setDefaultTitle}
        setDefaultDescription={setDefaultDescription}
      />

      <AddTaskModal
        visibleAddTaskModal={visibleAddTaskModal}
        setVisibleAddTaskModal={setVisibleAddTaskModal}
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
