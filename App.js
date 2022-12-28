import { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import AppBar from './components/AppBar';
import Buttons from './components/Buttons';
import Task from './components/Task';
import AddTaskModal from './components/AddTaskModal';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleAddTaskModal, setVisibleAddTaskModal] = useState(false);

  const renderTasks = () => {
    return ( tasks.length > 0 ?
      <ScrollView>
        {tasks.map((element, index) =>
          <Task
            key={index}
            index={index}
            title={element[0]}
            description={element[1]}
            remove={() =>
              remove(index)
            }
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

  const remove = (index) => {
    const array = [];

    for (let i=0; i<tasks.length; i++) {
      if (i !== index) {
        array.push(tasks[i]);
      }
    }

    console.log(array);
    setTasks(array);
  }

  return (
    <>
      <AppBar />
        {renderTasks()}
      <Buttons setVisibleAddTaskModal={setVisibleAddTaskModal} />

      <AddTaskModal
        visibleAddTaskModal={visibleAddTaskModal}
        setVisibleAddTaskModal={setVisibleAddTaskModal}
        tasks={tasks}
        setTasks={setTasks}
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
