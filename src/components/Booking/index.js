import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './../Button';

const Booking = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Total price</Text>
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>$444</Text>
          <Text style={styles.person}> / Person</Text>
        </View>
      </View>
      <Button />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 26,
    paddingTop: 14,
    paddingBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    color: '#8B8B95',
  },
  person: {
    fontSize: 14,
    color: '#8B8B95',
  },
  price: {
    fontSize: 26,
    color: '#1B1C21',
    fontWeight: 'bold',
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
