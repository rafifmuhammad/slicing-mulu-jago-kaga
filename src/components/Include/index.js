import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextIcon from './../TextIcon/index';

const Include = () => {
  return (
    <View style={styles.container}>
      <TextIcon title="Plane" />
      <TextIcon title="Hotel" />
      <TextIcon title="Trasfer" />
      <TextIcon title="Food" />
    </View>
  );
};

export default Include;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
