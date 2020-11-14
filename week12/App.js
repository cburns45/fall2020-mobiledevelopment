import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

import ButtonExample from './components/ButtonExample';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonExample styles={styles} />
      <Divider style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  divider: {
    margin: 10
  }
});

