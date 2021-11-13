import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconFlight, IconHotel, IconCar, IconFood} from './../../assets';

const TextIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Plane') {
      return <IconFlight />;
    }
    if (title === 'Hotel') {
      return <IconHotel />;
    }
    if (title === 'Trasfer') {
      return <IconCar />;
    }
    if (title === 'Food') {
      return <IconFood />;
    }

    return <IconFlight />;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1A191C',
  },
  icon: {
    width: 42,
    height: 64,
  },
});
