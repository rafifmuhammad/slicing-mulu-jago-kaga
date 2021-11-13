import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Mask} from '../../assets';
import {
  Rating,
  User,
  ListImage,
  Include,
  BackButton,
  Gap,
  Booking,
} from './../../components';

const DetailPage = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={Mask} style={styles.background}>
          <BackButton onPress={() => alert('pencet terus gan')} />
        </ImageBackground>
        <View style={styles.content}>
          <Gap height={26} />
          <View style={styles.destination}>
            <View>
              <Text style={styles.name}>Jimbaran</Text>
              <Text style={styles.location}>Bali, Indonesia</Text>
            </View>
            <Rating />
          </View>
          <Gap height={26} />
          <User />
          <Gap height={26} />
          <Text style={styles.primaryText}>About Trip</Text>
          <Text style={styles.descText}>
            Bali is an island in Indonesia which is known because it has reefs
            beautiful coral green volcanoes, unique rice terraces, and beaches.
            There are many tourist attractions religions such as called Uluwat
            Temple standing on a cliff.
          </Text>
          <Gap height={8} />
          <ListImage />
          <Gap height={26} />
          <Text style={styles.primaryText}>What’s Included?</Text>
          <Include />
          <Gap height={26} />
        </View>
      </ScrollView>
      <Booking />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -23,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  background: {
    height: 240,
    paddingTop: 27,
    paddingLeft: 26,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A191C',
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
    color: '#7E828D',
    marginTop: 2,
  },
  destination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  primaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A191C',
    paddingHorizontal: 26,
  },
  descText: {
    fontSize: 14,
    color: '#7E828D',
    textAlign: 'justify',
    marginTop: 8,
    lineHeight: 20,
    paddingHorizontal: 26,
  },
});
