import { Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function AddTaskButton({onPress}) {
  return (
    <Pressable onPress={onPress}>
        <Feather name="plus-circle" size="80%" color="white" />
    </Pressable>
  );
}
