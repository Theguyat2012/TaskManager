import { PixelRatio, Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function AddTaskButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <Ionicons name="add-circle-outline" size={100 * PixelRatio.getFontScale()} color="teal" />
    </TouchableOpacity>
  );
}
