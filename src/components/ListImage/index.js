import React from 'react';
import {StyleSheet, Image, ScrollView} from 'react-native';
import {Pic1, Pic2, Pic3, Pic4} from './../../assets';
import {Gap} from './../../components';

const ListImage = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <Gap width={26} />
      <Image source={Pic1} style={styles.picture} />
      <Image source={Pic2} style={styles.picture} />
      <Image source={Pic3} style={styles.picture} />
      <Image source={Pic4} style={styles.picture} />
      <Gap width={13} />
    </ScrollView>
  );
};

export default ListImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  picture: {
    width: 120,
    height: 80,
    marginRight: 13,
  },
});
