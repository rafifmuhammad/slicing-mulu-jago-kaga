import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IconIosBack} from '../../assets';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconIosBack style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  icon: {
    padding: 10,
    width: 24,
    height: 24,
  },
});
