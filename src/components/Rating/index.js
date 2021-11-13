import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconStar} from './../../assets';
import Gap from './../Gap';

const Rating = () => {
  return (
    <View style={styles.container}>
      <IconStar />
      <Gap width={4} />
      <IconStar />
      <Gap width={4} />
      <IconStar />
      <Gap width={4} />
      <IconStar />
      <Gap width={4} />
      <IconStar />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
