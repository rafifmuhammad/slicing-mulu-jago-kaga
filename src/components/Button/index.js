import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Book Now</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D5AFE',
    width: 161,
    height: 51,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
