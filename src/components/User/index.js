import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Profile1, Profile2, Profile3} from './../../assets';

const User = () => {
  return (
    <View style={styles.container}>
      <Image source={Profile1} style={styles.profile} />
      <Image source={Profile2} style={styles.profile} />
      <Image source={Profile3} style={styles.profile} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 26,
  },
  profile: {
    width: 54,
    height: 54,
    marginLeft: -12,
  },
});
