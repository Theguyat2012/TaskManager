import { ScrollView, StyleSheet, View } from 'react-native';

import AppBar from './components/AppBar';
import Buttons from './components/Buttons';

export default function App() {
  return (
    <>
      <AppBar />
      <ScrollView></ScrollView>
      <Buttons />
    </>
  );
}

const styles = StyleSheet.create({
  buttonsWrapper: {

  }
});
