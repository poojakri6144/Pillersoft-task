import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ title, onPress }) => {
  return (
    <View style={styles.shadowContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
        <LinearGradient
          colors={['#14B865', '#183852']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:320,
    borderRadius: 5, // optional: for better shadow blending
    alignSelf:'center'
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden', // ensures the gradient follows the rounded corners
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
