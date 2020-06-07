import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

export default App = () => {
  return (
    <View style={styles.container}>
      <Text> App </Text>
    </View>
  );
}

App.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 90, 102)'
  }
})