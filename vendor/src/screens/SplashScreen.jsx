
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from '../component/Logo';

const MyComponent = () => {
  return (
    <View style={styles.container}>
     <Logo/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E6F0', // light grey background
  },
  
});

export default MyComponent;
