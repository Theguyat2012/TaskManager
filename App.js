import { useState } from 'react';
import { ScrollView } from 'react-native';

import AppBar from './components/AppBar';
import Buttons from './components/Buttons';
import Task from './components/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleAddTaskModal, setVisibleAddTaskModal] = useState(false);

  return (
    <>
      <AppBar />
      <ScrollView>
        <Task title="FAFSA" description="Need 2021 Tax Documents" />
      </ScrollView>
      <Buttons setVisibleAddTaskModal={setVisibleAddTaskModal} />
    </>
  );
}
