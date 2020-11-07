import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Card.Title>Connor Burns</Card.Title>
      <Text>Steak</Text>
      <Card.Divider />
      <Text>Snow Crab Legs</Text>
      <Card.Divider />
      <Button title="SUBMIT"></Button>
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
});
