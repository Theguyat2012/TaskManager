import { useState } from 'react';
import { ScrollView } from 'react-native';

import AppBar from './components/AppBar';
import Buttons from './components/Buttons';
import Task from './components/Task';
import AddTaskModal from './components/AddTaskModal';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleAddTaskModal, setVisibleAddTaskModal] = useState(false);

  const renderTasks = () => {
    return tasks !== null ? tasks.map((element, index) => <Task key={index} title={element[0]} description={element[1]} />) : null;
  }

  return (
    <>
      <AppBar />
      <ScrollView>
        {renderTasks()}
      </ScrollView>
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
