import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';

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
      // <FlatList
      //   data={tasks}
      //   renderItem={(item) => {
      //     return (
      //       <Task
      //         key={item.index}
      //         index={item.index}
      //         title={item.item.title}
      //         description={item.item.description}
      //         openEdit={() => openEdit(item.index)}
      //         setEditIndex={setEditIndex}
      //         remove={() => remove(item.index)}
      //       />
      //     );
      //   }}
      // />
      <DraggableFlatList
        data={tasks}
        onDragEnd={({data}) => setTasks(data)}
        keyExtractor={(item) => item.id}
        style={{ height: '100%' }}
        renderItem={(item) =>
          <ScaleDecorator>
            <TouchableOpacity
              onLongPress={item.drag}
              disabled={item.isActive}
            >
              <Task
                key={(item) => item.id}
                index={item.getIndex()}
                title={item.item.title}
                description={item.item.description}
                openEdit={openEdit}
                setEditIndex={setEditIndex}
                remove={remove}
              />
            </TouchableOpacity>
          </ScaleDecorator>
        }
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
    let array = [];

    tasks.map((element, index) => {
      element.id = index+1;
      array = array.concat(element);
    });

    task.id = array.length+1;
    array = array.concat(task);

    setTasks(array);

    // Original function
    // setTasks(tasks.concat(task));
  }

  const edit = (task, index) => {
    const array = [];

    task.id = tasks[index].id;

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
        <View style={styles.container}>
          {renderTasks()}
        </View>
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
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
