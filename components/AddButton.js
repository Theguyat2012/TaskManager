import { Pressable, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function AddButton({onPress}) {
  return (
    <Pressable onPress={onPress}>
        <Feather name="plus-circle" size="80%" color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
});
